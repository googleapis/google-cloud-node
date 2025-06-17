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

    /** Namespace analytics. */
    namespace analytics {

        /** Namespace data. */
        namespace data {

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

                    /**
                     * Calls CreateAudienceExport.
                     * @param request CreateAudienceExportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAudienceExport(request: google.analytics.data.v1beta.ICreateAudienceExportRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.CreateAudienceExportCallback): void;

                    /**
                     * Calls CreateAudienceExport.
                     * @param request CreateAudienceExportRequest message or plain object
                     * @returns Promise
                     */
                    public createAudienceExport(request: google.analytics.data.v1beta.ICreateAudienceExportRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls QueryAudienceExport.
                     * @param request QueryAudienceExportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and QueryAudienceExportResponse
                     */
                    public queryAudienceExport(request: google.analytics.data.v1beta.IQueryAudienceExportRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.QueryAudienceExportCallback): void;

                    /**
                     * Calls QueryAudienceExport.
                     * @param request QueryAudienceExportRequest message or plain object
                     * @returns Promise
                     */
                    public queryAudienceExport(request: google.analytics.data.v1beta.IQueryAudienceExportRequest): Promise<google.analytics.data.v1beta.QueryAudienceExportResponse>;

                    /**
                     * Calls GetAudienceExport.
                     * @param request GetAudienceExportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AudienceExport
                     */
                    public getAudienceExport(request: google.analytics.data.v1beta.IGetAudienceExportRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.GetAudienceExportCallback): void;

                    /**
                     * Calls GetAudienceExport.
                     * @param request GetAudienceExportRequest message or plain object
                     * @returns Promise
                     */
                    public getAudienceExport(request: google.analytics.data.v1beta.IGetAudienceExportRequest): Promise<google.analytics.data.v1beta.AudienceExport>;

                    /**
                     * Calls ListAudienceExports.
                     * @param request ListAudienceExportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAudienceExportsResponse
                     */
                    public listAudienceExports(request: google.analytics.data.v1beta.IListAudienceExportsRequest, callback: google.analytics.data.v1beta.BetaAnalyticsData.ListAudienceExportsCallback): void;

                    /**
                     * Calls ListAudienceExports.
                     * @param request ListAudienceExportsRequest message or plain object
                     * @returns Promise
                     */
                    public listAudienceExports(request: google.analytics.data.v1beta.IListAudienceExportsRequest): Promise<google.analytics.data.v1beta.ListAudienceExportsResponse>;
                }

                namespace BetaAnalyticsData {

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|runReport}.
                     * @param error Error, if any
                     * @param [response] RunReportResponse
                     */
                    type RunReportCallback = (error: (Error|null), response?: google.analytics.data.v1beta.RunReportResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|runPivotReport}.
                     * @param error Error, if any
                     * @param [response] RunPivotReportResponse
                     */
                    type RunPivotReportCallback = (error: (Error|null), response?: google.analytics.data.v1beta.RunPivotReportResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|batchRunReports}.
                     * @param error Error, if any
                     * @param [response] BatchRunReportsResponse
                     */
                    type BatchRunReportsCallback = (error: (Error|null), response?: google.analytics.data.v1beta.BatchRunReportsResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|batchRunPivotReports}.
                     * @param error Error, if any
                     * @param [response] BatchRunPivotReportsResponse
                     */
                    type BatchRunPivotReportsCallback = (error: (Error|null), response?: google.analytics.data.v1beta.BatchRunPivotReportsResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|getMetadata}.
                     * @param error Error, if any
                     * @param [response] Metadata
                     */
                    type GetMetadataCallback = (error: (Error|null), response?: google.analytics.data.v1beta.Metadata) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|runRealtimeReport}.
                     * @param error Error, if any
                     * @param [response] RunRealtimeReportResponse
                     */
                    type RunRealtimeReportCallback = (error: (Error|null), response?: google.analytics.data.v1beta.RunRealtimeReportResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|checkCompatibility}.
                     * @param error Error, if any
                     * @param [response] CheckCompatibilityResponse
                     */
                    type CheckCompatibilityCallback = (error: (Error|null), response?: google.analytics.data.v1beta.CheckCompatibilityResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|createAudienceExport}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAudienceExportCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|queryAudienceExport}.
                     * @param error Error, if any
                     * @param [response] QueryAudienceExportResponse
                     */
                    type QueryAudienceExportCallback = (error: (Error|null), response?: google.analytics.data.v1beta.QueryAudienceExportResponse) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|getAudienceExport}.
                     * @param error Error, if any
                     * @param [response] AudienceExport
                     */
                    type GetAudienceExportCallback = (error: (Error|null), response?: google.analytics.data.v1beta.AudienceExport) => void;

                    /**
                     * Callback as used by {@link google.analytics.data.v1beta.BetaAnalyticsData|listAudienceExports}.
                     * @param error Error, if any
                     * @param [response] ListAudienceExportsResponse
                     */
                    type ListAudienceExportsCallback = (error: (Error|null), response?: google.analytics.data.v1beta.ListAudienceExportsResponse) => void;
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

                    /**
                     * Gets the default type url for CheckCompatibilityRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for CheckCompatibilityResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Metadata. */
                interface IMetadata {

                    /** Metadata name */
                    name?: (string|null);

                    /** Metadata dimensions */
                    dimensions?: (google.analytics.data.v1beta.IDimensionMetadata[]|null);

                    /** Metadata metrics */
                    metrics?: (google.analytics.data.v1beta.IMetricMetadata[]|null);

                    /** Metadata comparisons */
                    comparisons?: (google.analytics.data.v1beta.IComparisonMetadata[]|null);
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

                    /** Metadata comparisons. */
                    public comparisons: google.analytics.data.v1beta.IComparisonMetadata[];

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

                    /**
                     * Gets the default type url for Metadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /** RunReportRequest comparisons */
                    comparisons?: (google.analytics.data.v1beta.IComparison[]|null);
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

                    /** RunReportRequest comparisons. */
                    public comparisons: google.analytics.data.v1beta.IComparison[];

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

                    /**
                     * Gets the default type url for RunReportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for RunReportResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /** RunPivotReportRequest comparisons */
                    comparisons?: (google.analytics.data.v1beta.IComparison[]|null);
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

                    /** RunPivotReportRequest comparisons. */
                    public comparisons: google.analytics.data.v1beta.IComparison[];

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

                    /**
                     * Gets the default type url for RunPivotReportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for RunPivotReportResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for BatchRunReportsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for BatchRunReportsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for BatchRunPivotReportsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for BatchRunPivotReportsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for GetMetadataRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for RunRealtimeReportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for RunRealtimeReportResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAudienceExportRequest. */
                interface IGetAudienceExportRequest {

                    /** GetAudienceExportRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAudienceExportRequest. */
                class GetAudienceExportRequest implements IGetAudienceExportRequest {

                    /**
                     * Constructs a new GetAudienceExportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IGetAudienceExportRequest);

                    /** GetAudienceExportRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAudienceExportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAudienceExportRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IGetAudienceExportRequest): google.analytics.data.v1beta.GetAudienceExportRequest;

                    /**
                     * Encodes the specified GetAudienceExportRequest message. Does not implicitly {@link google.analytics.data.v1beta.GetAudienceExportRequest.verify|verify} messages.
                     * @param message GetAudienceExportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IGetAudienceExportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAudienceExportRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.GetAudienceExportRequest.verify|verify} messages.
                     * @param message GetAudienceExportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IGetAudienceExportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAudienceExportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAudienceExportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.GetAudienceExportRequest;

                    /**
                     * Decodes a GetAudienceExportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAudienceExportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.GetAudienceExportRequest;

                    /**
                     * Verifies a GetAudienceExportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAudienceExportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAudienceExportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.GetAudienceExportRequest;

                    /**
                     * Creates a plain object from a GetAudienceExportRequest message. Also converts values to other types if specified.
                     * @param message GetAudienceExportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.GetAudienceExportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAudienceExportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAudienceExportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAudienceExportsRequest. */
                interface IListAudienceExportsRequest {

                    /** ListAudienceExportsRequest parent */
                    parent?: (string|null);

                    /** ListAudienceExportsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAudienceExportsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAudienceExportsRequest. */
                class ListAudienceExportsRequest implements IListAudienceExportsRequest {

                    /**
                     * Constructs a new ListAudienceExportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IListAudienceExportsRequest);

                    /** ListAudienceExportsRequest parent. */
                    public parent: string;

                    /** ListAudienceExportsRequest pageSize. */
                    public pageSize: number;

                    /** ListAudienceExportsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAudienceExportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAudienceExportsRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IListAudienceExportsRequest): google.analytics.data.v1beta.ListAudienceExportsRequest;

                    /**
                     * Encodes the specified ListAudienceExportsRequest message. Does not implicitly {@link google.analytics.data.v1beta.ListAudienceExportsRequest.verify|verify} messages.
                     * @param message ListAudienceExportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IListAudienceExportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAudienceExportsRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.ListAudienceExportsRequest.verify|verify} messages.
                     * @param message ListAudienceExportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IListAudienceExportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAudienceExportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAudienceExportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.ListAudienceExportsRequest;

                    /**
                     * Decodes a ListAudienceExportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAudienceExportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.ListAudienceExportsRequest;

                    /**
                     * Verifies a ListAudienceExportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAudienceExportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAudienceExportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.ListAudienceExportsRequest;

                    /**
                     * Creates a plain object from a ListAudienceExportsRequest message. Also converts values to other types if specified.
                     * @param message ListAudienceExportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.ListAudienceExportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAudienceExportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAudienceExportsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAudienceExportsResponse. */
                interface IListAudienceExportsResponse {

                    /** ListAudienceExportsResponse audienceExports */
                    audienceExports?: (google.analytics.data.v1beta.IAudienceExport[]|null);

                    /** ListAudienceExportsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAudienceExportsResponse. */
                class ListAudienceExportsResponse implements IListAudienceExportsResponse {

                    /**
                     * Constructs a new ListAudienceExportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IListAudienceExportsResponse);

                    /** ListAudienceExportsResponse audienceExports. */
                    public audienceExports: google.analytics.data.v1beta.IAudienceExport[];

                    /** ListAudienceExportsResponse nextPageToken. */
                    public nextPageToken?: (string|null);

                    /**
                     * Creates a new ListAudienceExportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAudienceExportsResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IListAudienceExportsResponse): google.analytics.data.v1beta.ListAudienceExportsResponse;

                    /**
                     * Encodes the specified ListAudienceExportsResponse message. Does not implicitly {@link google.analytics.data.v1beta.ListAudienceExportsResponse.verify|verify} messages.
                     * @param message ListAudienceExportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IListAudienceExportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAudienceExportsResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.ListAudienceExportsResponse.verify|verify} messages.
                     * @param message ListAudienceExportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IListAudienceExportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAudienceExportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAudienceExportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.ListAudienceExportsResponse;

                    /**
                     * Decodes a ListAudienceExportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAudienceExportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.ListAudienceExportsResponse;

                    /**
                     * Verifies a ListAudienceExportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAudienceExportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAudienceExportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.ListAudienceExportsResponse;

                    /**
                     * Creates a plain object from a ListAudienceExportsResponse message. Also converts values to other types if specified.
                     * @param message ListAudienceExportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.ListAudienceExportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAudienceExportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAudienceExportsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAudienceExportRequest. */
                interface ICreateAudienceExportRequest {

                    /** CreateAudienceExportRequest parent */
                    parent?: (string|null);

                    /** CreateAudienceExportRequest audienceExport */
                    audienceExport?: (google.analytics.data.v1beta.IAudienceExport|null);
                }

                /** Represents a CreateAudienceExportRequest. */
                class CreateAudienceExportRequest implements ICreateAudienceExportRequest {

                    /**
                     * Constructs a new CreateAudienceExportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.ICreateAudienceExportRequest);

                    /** CreateAudienceExportRequest parent. */
                    public parent: string;

                    /** CreateAudienceExportRequest audienceExport. */
                    public audienceExport?: (google.analytics.data.v1beta.IAudienceExport|null);

                    /**
                     * Creates a new CreateAudienceExportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAudienceExportRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.ICreateAudienceExportRequest): google.analytics.data.v1beta.CreateAudienceExportRequest;

                    /**
                     * Encodes the specified CreateAudienceExportRequest message. Does not implicitly {@link google.analytics.data.v1beta.CreateAudienceExportRequest.verify|verify} messages.
                     * @param message CreateAudienceExportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.ICreateAudienceExportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAudienceExportRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.CreateAudienceExportRequest.verify|verify} messages.
                     * @param message CreateAudienceExportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.ICreateAudienceExportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAudienceExportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAudienceExportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.CreateAudienceExportRequest;

                    /**
                     * Decodes a CreateAudienceExportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAudienceExportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.CreateAudienceExportRequest;

                    /**
                     * Verifies a CreateAudienceExportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAudienceExportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAudienceExportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.CreateAudienceExportRequest;

                    /**
                     * Creates a plain object from a CreateAudienceExportRequest message. Also converts values to other types if specified.
                     * @param message CreateAudienceExportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.CreateAudienceExportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAudienceExportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAudienceExportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AudienceExport. */
                interface IAudienceExport {

                    /** AudienceExport name */
                    name?: (string|null);

                    /** AudienceExport audience */
                    audience?: (string|null);

                    /** AudienceExport audienceDisplayName */
                    audienceDisplayName?: (string|null);

                    /** AudienceExport dimensions */
                    dimensions?: (google.analytics.data.v1beta.IAudienceDimension[]|null);

                    /** AudienceExport state */
                    state?: (google.analytics.data.v1beta.AudienceExport.State|keyof typeof google.analytics.data.v1beta.AudienceExport.State|null);

                    /** AudienceExport beginCreatingTime */
                    beginCreatingTime?: (google.protobuf.ITimestamp|null);

                    /** AudienceExport creationQuotaTokensCharged */
                    creationQuotaTokensCharged?: (number|null);

                    /** AudienceExport rowCount */
                    rowCount?: (number|null);

                    /** AudienceExport errorMessage */
                    errorMessage?: (string|null);

                    /** AudienceExport percentageCompleted */
                    percentageCompleted?: (number|null);
                }

                /** Represents an AudienceExport. */
                class AudienceExport implements IAudienceExport {

                    /**
                     * Constructs a new AudienceExport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IAudienceExport);

                    /** AudienceExport name. */
                    public name: string;

                    /** AudienceExport audience. */
                    public audience: string;

                    /** AudienceExport audienceDisplayName. */
                    public audienceDisplayName: string;

                    /** AudienceExport dimensions. */
                    public dimensions: google.analytics.data.v1beta.IAudienceDimension[];

                    /** AudienceExport state. */
                    public state?: (google.analytics.data.v1beta.AudienceExport.State|keyof typeof google.analytics.data.v1beta.AudienceExport.State|null);

                    /** AudienceExport beginCreatingTime. */
                    public beginCreatingTime?: (google.protobuf.ITimestamp|null);

                    /** AudienceExport creationQuotaTokensCharged. */
                    public creationQuotaTokensCharged: number;

                    /** AudienceExport rowCount. */
                    public rowCount?: (number|null);

                    /** AudienceExport errorMessage. */
                    public errorMessage?: (string|null);

                    /** AudienceExport percentageCompleted. */
                    public percentageCompleted?: (number|null);

                    /**
                     * Creates a new AudienceExport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AudienceExport instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IAudienceExport): google.analytics.data.v1beta.AudienceExport;

                    /**
                     * Encodes the specified AudienceExport message. Does not implicitly {@link google.analytics.data.v1beta.AudienceExport.verify|verify} messages.
                     * @param message AudienceExport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IAudienceExport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AudienceExport message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.AudienceExport.verify|verify} messages.
                     * @param message AudienceExport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IAudienceExport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AudienceExport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AudienceExport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.AudienceExport;

                    /**
                     * Decodes an AudienceExport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AudienceExport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.AudienceExport;

                    /**
                     * Verifies an AudienceExport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AudienceExport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AudienceExport
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.AudienceExport;

                    /**
                     * Creates a plain object from an AudienceExport message. Also converts values to other types if specified.
                     * @param message AudienceExport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.AudienceExport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AudienceExport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AudienceExport
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AudienceExport {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        FAILED = 3
                    }
                }

                /** Properties of an AudienceExportMetadata. */
                interface IAudienceExportMetadata {
                }

                /** Represents an AudienceExportMetadata. */
                class AudienceExportMetadata implements IAudienceExportMetadata {

                    /**
                     * Constructs a new AudienceExportMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IAudienceExportMetadata);

                    /**
                     * Creates a new AudienceExportMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AudienceExportMetadata instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IAudienceExportMetadata): google.analytics.data.v1beta.AudienceExportMetadata;

                    /**
                     * Encodes the specified AudienceExportMetadata message. Does not implicitly {@link google.analytics.data.v1beta.AudienceExportMetadata.verify|verify} messages.
                     * @param message AudienceExportMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IAudienceExportMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AudienceExportMetadata message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.AudienceExportMetadata.verify|verify} messages.
                     * @param message AudienceExportMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IAudienceExportMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AudienceExportMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AudienceExportMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.AudienceExportMetadata;

                    /**
                     * Decodes an AudienceExportMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AudienceExportMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.AudienceExportMetadata;

                    /**
                     * Verifies an AudienceExportMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AudienceExportMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AudienceExportMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.AudienceExportMetadata;

                    /**
                     * Creates a plain object from an AudienceExportMetadata message. Also converts values to other types if specified.
                     * @param message AudienceExportMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.AudienceExportMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AudienceExportMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AudienceExportMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryAudienceExportRequest. */
                interface IQueryAudienceExportRequest {

                    /** QueryAudienceExportRequest name */
                    name?: (string|null);

                    /** QueryAudienceExportRequest offset */
                    offset?: (number|Long|string|null);

                    /** QueryAudienceExportRequest limit */
                    limit?: (number|Long|string|null);
                }

                /** Represents a QueryAudienceExportRequest. */
                class QueryAudienceExportRequest implements IQueryAudienceExportRequest {

                    /**
                     * Constructs a new QueryAudienceExportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IQueryAudienceExportRequest);

                    /** QueryAudienceExportRequest name. */
                    public name: string;

                    /** QueryAudienceExportRequest offset. */
                    public offset: (number|Long|string);

                    /** QueryAudienceExportRequest limit. */
                    public limit: (number|Long|string);

                    /**
                     * Creates a new QueryAudienceExportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryAudienceExportRequest instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IQueryAudienceExportRequest): google.analytics.data.v1beta.QueryAudienceExportRequest;

                    /**
                     * Encodes the specified QueryAudienceExportRequest message. Does not implicitly {@link google.analytics.data.v1beta.QueryAudienceExportRequest.verify|verify} messages.
                     * @param message QueryAudienceExportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IQueryAudienceExportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryAudienceExportRequest message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.QueryAudienceExportRequest.verify|verify} messages.
                     * @param message QueryAudienceExportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IQueryAudienceExportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryAudienceExportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryAudienceExportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.QueryAudienceExportRequest;

                    /**
                     * Decodes a QueryAudienceExportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryAudienceExportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.QueryAudienceExportRequest;

                    /**
                     * Verifies a QueryAudienceExportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryAudienceExportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryAudienceExportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.QueryAudienceExportRequest;

                    /**
                     * Creates a plain object from a QueryAudienceExportRequest message. Also converts values to other types if specified.
                     * @param message QueryAudienceExportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.QueryAudienceExportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryAudienceExportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryAudienceExportRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a QueryAudienceExportResponse. */
                interface IQueryAudienceExportResponse {

                    /** QueryAudienceExportResponse audienceExport */
                    audienceExport?: (google.analytics.data.v1beta.IAudienceExport|null);

                    /** QueryAudienceExportResponse audienceRows */
                    audienceRows?: (google.analytics.data.v1beta.IAudienceRow[]|null);

                    /** QueryAudienceExportResponse rowCount */
                    rowCount?: (number|null);
                }

                /** Represents a QueryAudienceExportResponse. */
                class QueryAudienceExportResponse implements IQueryAudienceExportResponse {

                    /**
                     * Constructs a new QueryAudienceExportResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IQueryAudienceExportResponse);

                    /** QueryAudienceExportResponse audienceExport. */
                    public audienceExport?: (google.analytics.data.v1beta.IAudienceExport|null);

                    /** QueryAudienceExportResponse audienceRows. */
                    public audienceRows: google.analytics.data.v1beta.IAudienceRow[];

                    /** QueryAudienceExportResponse rowCount. */
                    public rowCount?: (number|null);

                    /**
                     * Creates a new QueryAudienceExportResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns QueryAudienceExportResponse instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IQueryAudienceExportResponse): google.analytics.data.v1beta.QueryAudienceExportResponse;

                    /**
                     * Encodes the specified QueryAudienceExportResponse message. Does not implicitly {@link google.analytics.data.v1beta.QueryAudienceExportResponse.verify|verify} messages.
                     * @param message QueryAudienceExportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IQueryAudienceExportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified QueryAudienceExportResponse message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.QueryAudienceExportResponse.verify|verify} messages.
                     * @param message QueryAudienceExportResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IQueryAudienceExportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a QueryAudienceExportResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns QueryAudienceExportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.QueryAudienceExportResponse;

                    /**
                     * Decodes a QueryAudienceExportResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns QueryAudienceExportResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.QueryAudienceExportResponse;

                    /**
                     * Verifies a QueryAudienceExportResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a QueryAudienceExportResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns QueryAudienceExportResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.QueryAudienceExportResponse;

                    /**
                     * Creates a plain object from a QueryAudienceExportResponse message. Also converts values to other types if specified.
                     * @param message QueryAudienceExportResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.QueryAudienceExportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this QueryAudienceExportResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for QueryAudienceExportResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AudienceRow. */
                interface IAudienceRow {

                    /** AudienceRow dimensionValues */
                    dimensionValues?: (google.analytics.data.v1beta.IAudienceDimensionValue[]|null);
                }

                /** Represents an AudienceRow. */
                class AudienceRow implements IAudienceRow {

                    /**
                     * Constructs a new AudienceRow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IAudienceRow);

                    /** AudienceRow dimensionValues. */
                    public dimensionValues: google.analytics.data.v1beta.IAudienceDimensionValue[];

                    /**
                     * Creates a new AudienceRow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AudienceRow instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IAudienceRow): google.analytics.data.v1beta.AudienceRow;

                    /**
                     * Encodes the specified AudienceRow message. Does not implicitly {@link google.analytics.data.v1beta.AudienceRow.verify|verify} messages.
                     * @param message AudienceRow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IAudienceRow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AudienceRow message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.AudienceRow.verify|verify} messages.
                     * @param message AudienceRow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IAudienceRow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AudienceRow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AudienceRow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.AudienceRow;

                    /**
                     * Decodes an AudienceRow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AudienceRow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.AudienceRow;

                    /**
                     * Verifies an AudienceRow message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AudienceRow message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AudienceRow
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.AudienceRow;

                    /**
                     * Creates a plain object from an AudienceRow message. Also converts values to other types if specified.
                     * @param message AudienceRow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.AudienceRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AudienceRow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AudienceRow
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AudienceDimension. */
                interface IAudienceDimension {

                    /** AudienceDimension dimensionName */
                    dimensionName?: (string|null);
                }

                /** Represents an AudienceDimension. */
                class AudienceDimension implements IAudienceDimension {

                    /**
                     * Constructs a new AudienceDimension.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IAudienceDimension);

                    /** AudienceDimension dimensionName. */
                    public dimensionName: string;

                    /**
                     * Creates a new AudienceDimension instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AudienceDimension instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IAudienceDimension): google.analytics.data.v1beta.AudienceDimension;

                    /**
                     * Encodes the specified AudienceDimension message. Does not implicitly {@link google.analytics.data.v1beta.AudienceDimension.verify|verify} messages.
                     * @param message AudienceDimension message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IAudienceDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AudienceDimension message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.AudienceDimension.verify|verify} messages.
                     * @param message AudienceDimension message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IAudienceDimension, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AudienceDimension message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AudienceDimension
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.AudienceDimension;

                    /**
                     * Decodes an AudienceDimension message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AudienceDimension
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.AudienceDimension;

                    /**
                     * Verifies an AudienceDimension message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AudienceDimension message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AudienceDimension
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.AudienceDimension;

                    /**
                     * Creates a plain object from an AudienceDimension message. Also converts values to other types if specified.
                     * @param message AudienceDimension
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.AudienceDimension, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AudienceDimension to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AudienceDimension
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AudienceDimensionValue. */
                interface IAudienceDimensionValue {

                    /** AudienceDimensionValue value */
                    value?: (string|null);
                }

                /** Represents an AudienceDimensionValue. */
                class AudienceDimensionValue implements IAudienceDimensionValue {

                    /**
                     * Constructs a new AudienceDimensionValue.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IAudienceDimensionValue);

                    /** AudienceDimensionValue value. */
                    public value?: (string|null);

                    /** AudienceDimensionValue oneValue. */
                    public oneValue?: "value";

                    /**
                     * Creates a new AudienceDimensionValue instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AudienceDimensionValue instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IAudienceDimensionValue): google.analytics.data.v1beta.AudienceDimensionValue;

                    /**
                     * Encodes the specified AudienceDimensionValue message. Does not implicitly {@link google.analytics.data.v1beta.AudienceDimensionValue.verify|verify} messages.
                     * @param message AudienceDimensionValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IAudienceDimensionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AudienceDimensionValue message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.AudienceDimensionValue.verify|verify} messages.
                     * @param message AudienceDimensionValue message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IAudienceDimensionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AudienceDimensionValue message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AudienceDimensionValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.AudienceDimensionValue;

                    /**
                     * Decodes an AudienceDimensionValue message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AudienceDimensionValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.AudienceDimensionValue;

                    /**
                     * Verifies an AudienceDimensionValue message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AudienceDimensionValue message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AudienceDimensionValue
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.AudienceDimensionValue;

                    /**
                     * Creates a plain object from an AudienceDimensionValue message. Also converts values to other types if specified.
                     * @param message AudienceDimensionValue
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.AudienceDimensionValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AudienceDimensionValue to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AudienceDimensionValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for DateRange
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for MinuteRange
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for Dimension
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for DimensionExpression
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for CaseExpression
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for ConcatenateExpression
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for Metric
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Comparison. */
                interface IComparison {

                    /** Comparison name */
                    name?: (string|null);

                    /** Comparison dimensionFilter */
                    dimensionFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** Comparison comparison */
                    comparison?: (string|null);
                }

                /** Represents a Comparison. */
                class Comparison implements IComparison {

                    /**
                     * Constructs a new Comparison.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IComparison);

                    /** Comparison name. */
                    public name?: (string|null);

                    /** Comparison dimensionFilter. */
                    public dimensionFilter?: (google.analytics.data.v1beta.IFilterExpression|null);

                    /** Comparison comparison. */
                    public comparison?: (string|null);

                    /** Comparison oneComparison. */
                    public oneComparison?: ("dimensionFilter"|"comparison");

                    /**
                     * Creates a new Comparison instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Comparison instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IComparison): google.analytics.data.v1beta.Comparison;

                    /**
                     * Encodes the specified Comparison message. Does not implicitly {@link google.analytics.data.v1beta.Comparison.verify|verify} messages.
                     * @param message Comparison message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IComparison, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Comparison message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Comparison.verify|verify} messages.
                     * @param message Comparison message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IComparison, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Comparison message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Comparison
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Comparison;

                    /**
                     * Decodes a Comparison message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Comparison
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Comparison;

                    /**
                     * Verifies a Comparison message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Comparison message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Comparison
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Comparison;

                    /**
                     * Creates a plain object from a Comparison message. Also converts values to other types if specified.
                     * @param message Comparison
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.Comparison, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Comparison to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Comparison
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for FilterExpression
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for FilterExpressionList
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /** Filter emptyFilter */
                    emptyFilter?: (google.analytics.data.v1beta.Filter.IEmptyFilter|null);
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

                    /** Filter emptyFilter. */
                    public emptyFilter?: (google.analytics.data.v1beta.Filter.IEmptyFilter|null);

                    /** Filter oneFilter. */
                    public oneFilter?: ("stringFilter"|"inListFilter"|"numericFilter"|"betweenFilter"|"emptyFilter");

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

                    /**
                     * Gets the default type url for Filter
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for StringFilter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for InListFilter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for NumericFilter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for BetweenFilter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an EmptyFilter. */
                    interface IEmptyFilter {
                    }

                    /** Represents an EmptyFilter. */
                    class EmptyFilter implements IEmptyFilter {

                        /**
                         * Constructs a new EmptyFilter.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.analytics.data.v1beta.Filter.IEmptyFilter);

                        /**
                         * Creates a new EmptyFilter instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EmptyFilter instance
                         */
                        public static create(properties?: google.analytics.data.v1beta.Filter.IEmptyFilter): google.analytics.data.v1beta.Filter.EmptyFilter;

                        /**
                         * Encodes the specified EmptyFilter message. Does not implicitly {@link google.analytics.data.v1beta.Filter.EmptyFilter.verify|verify} messages.
                         * @param message EmptyFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.analytics.data.v1beta.Filter.IEmptyFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EmptyFilter message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.Filter.EmptyFilter.verify|verify} messages.
                         * @param message EmptyFilter message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.analytics.data.v1beta.Filter.IEmptyFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EmptyFilter message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EmptyFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.Filter.EmptyFilter;

                        /**
                         * Decodes an EmptyFilter message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EmptyFilter
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.Filter.EmptyFilter;

                        /**
                         * Verifies an EmptyFilter message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EmptyFilter message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EmptyFilter
                         */
                        public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.Filter.EmptyFilter;

                        /**
                         * Creates a plain object from an EmptyFilter message. Also converts values to other types if specified.
                         * @param message EmptyFilter
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.analytics.data.v1beta.Filter.EmptyFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EmptyFilter to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EmptyFilter
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for OrderBy
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for MetricOrderBy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for DimensionOrderBy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for PivotOrderBy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                            /**
                             * Gets the default type url for PivotSelection
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for Pivot
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for CohortSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for Cohort
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for CohortsRange
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for CohortReportSettings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /** ResponseMetaData subjectToThresholding */
                    subjectToThresholding?: (boolean|null);

                    /** ResponseMetaData samplingMetadatas */
                    samplingMetadatas?: (google.analytics.data.v1beta.ISamplingMetadata[]|null);
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

                    /** ResponseMetaData subjectToThresholding. */
                    public subjectToThresholding?: (boolean|null);

                    /** ResponseMetaData samplingMetadatas. */
                    public samplingMetadatas: google.analytics.data.v1beta.ISamplingMetadata[];

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

                    /**
                     * Gets the default type url for ResponseMetaData
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                        /**
                         * Gets the default type url for SchemaRestrictionResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
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

                            /**
                             * Gets the default type url for ActiveMetricRestriction
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
                }

                /** Properties of a SamplingMetadata. */
                interface ISamplingMetadata {

                    /** SamplingMetadata samplesReadCount */
                    samplesReadCount?: (number|Long|string|null);

                    /** SamplingMetadata samplingSpaceSize */
                    samplingSpaceSize?: (number|Long|string|null);
                }

                /** Represents a SamplingMetadata. */
                class SamplingMetadata implements ISamplingMetadata {

                    /**
                     * Constructs a new SamplingMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.ISamplingMetadata);

                    /** SamplingMetadata samplesReadCount. */
                    public samplesReadCount: (number|Long|string);

                    /** SamplingMetadata samplingSpaceSize. */
                    public samplingSpaceSize: (number|Long|string);

                    /**
                     * Creates a new SamplingMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SamplingMetadata instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.ISamplingMetadata): google.analytics.data.v1beta.SamplingMetadata;

                    /**
                     * Encodes the specified SamplingMetadata message. Does not implicitly {@link google.analytics.data.v1beta.SamplingMetadata.verify|verify} messages.
                     * @param message SamplingMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.ISamplingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SamplingMetadata message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.SamplingMetadata.verify|verify} messages.
                     * @param message SamplingMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.ISamplingMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SamplingMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SamplingMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.SamplingMetadata;

                    /**
                     * Decodes a SamplingMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SamplingMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.SamplingMetadata;

                    /**
                     * Verifies a SamplingMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SamplingMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SamplingMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.SamplingMetadata;

                    /**
                     * Creates a plain object from a SamplingMetadata message. Also converts values to other types if specified.
                     * @param message SamplingMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.SamplingMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SamplingMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SamplingMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for DimensionHeader
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for MetricHeader
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for PivotHeader
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for PivotDimensionHeader
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for Row
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for DimensionValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for MetricValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for NumericValue
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /** PropertyQuota tokensPerProjectPerHour */
                    tokensPerProjectPerHour?: (google.analytics.data.v1beta.IQuotaStatus|null);
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

                    /** PropertyQuota tokensPerProjectPerHour. */
                    public tokensPerProjectPerHour?: (google.analytics.data.v1beta.IQuotaStatus|null);

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

                    /**
                     * Gets the default type url for PropertyQuota
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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
                    public consumed?: (number|null);

                    /** QuotaStatus remaining. */
                    public remaining?: (number|null);

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

                    /**
                     * Gets the default type url for QuotaStatus
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for DimensionMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for MetricMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace MetricMetadata {

                    /** BlockedReason enum. */
                    enum BlockedReason {
                        BLOCKED_REASON_UNSPECIFIED = 0,
                        NO_REVENUE_METRICS = 1,
                        NO_COST_METRICS = 2
                    }
                }

                /** Properties of a ComparisonMetadata. */
                interface IComparisonMetadata {

                    /** ComparisonMetadata apiName */
                    apiName?: (string|null);

                    /** ComparisonMetadata uiName */
                    uiName?: (string|null);

                    /** ComparisonMetadata description */
                    description?: (string|null);
                }

                /** Represents a ComparisonMetadata. */
                class ComparisonMetadata implements IComparisonMetadata {

                    /**
                     * Constructs a new ComparisonMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.analytics.data.v1beta.IComparisonMetadata);

                    /** ComparisonMetadata apiName. */
                    public apiName: string;

                    /** ComparisonMetadata uiName. */
                    public uiName: string;

                    /** ComparisonMetadata description. */
                    public description: string;

                    /**
                     * Creates a new ComparisonMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ComparisonMetadata instance
                     */
                    public static create(properties?: google.analytics.data.v1beta.IComparisonMetadata): google.analytics.data.v1beta.ComparisonMetadata;

                    /**
                     * Encodes the specified ComparisonMetadata message. Does not implicitly {@link google.analytics.data.v1beta.ComparisonMetadata.verify|verify} messages.
                     * @param message ComparisonMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.analytics.data.v1beta.IComparisonMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ComparisonMetadata message, length delimited. Does not implicitly {@link google.analytics.data.v1beta.ComparisonMetadata.verify|verify} messages.
                     * @param message ComparisonMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.analytics.data.v1beta.IComparisonMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ComparisonMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ComparisonMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.analytics.data.v1beta.ComparisonMetadata;

                    /**
                     * Decodes a ComparisonMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ComparisonMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.analytics.data.v1beta.ComparisonMetadata;

                    /**
                     * Verifies a ComparisonMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ComparisonMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ComparisonMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.analytics.data.v1beta.ComparisonMetadata;

                    /**
                     * Creates a plain object from a ComparisonMetadata message. Also converts values to other types if specified.
                     * @param message ComparisonMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.analytics.data.v1beta.ComparisonMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ComparisonMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ComparisonMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for DimensionCompatibility
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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

                    /**
                     * Gets the default type url for MetricCompatibility
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
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
