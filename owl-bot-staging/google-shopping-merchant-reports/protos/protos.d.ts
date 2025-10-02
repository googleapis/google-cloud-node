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

            /** Namespace reports. */
            namespace reports {

                /** Namespace v1. */
                namespace v1 {

                    /** Represents a ReportService */
                    class ReportService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ReportService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ReportService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ReportService;

                        /**
                         * Calls Search.
                         * @param request SearchRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SearchResponse
                         */
                        public search(request: google.shopping.merchant.reports.v1.ISearchRequest, callback: google.shopping.merchant.reports.v1.ReportService.SearchCallback): void;

                        /**
                         * Calls Search.
                         * @param request SearchRequest message or plain object
                         * @returns Promise
                         */
                        public search(request: google.shopping.merchant.reports.v1.ISearchRequest): Promise<google.shopping.merchant.reports.v1.SearchResponse>;
                    }

                    namespace ReportService {

                        /**
                         * Callback as used by {@link google.shopping.merchant.reports.v1.ReportService|search}.
                         * @param error Error, if any
                         * @param [response] SearchResponse
                         */
                        type SearchCallback = (error: (Error|null), response?: google.shopping.merchant.reports.v1.SearchResponse) => void;
                    }

                    /** Properties of a SearchRequest. */
                    interface ISearchRequest {

                        /** SearchRequest parent */
                        parent?: (string|null);

                        /** SearchRequest query */
                        query?: (string|null);

                        /** SearchRequest pageSize */
                        pageSize?: (number|null);

                        /** SearchRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a SearchRequest. */
                    class SearchRequest implements ISearchRequest {

                        /**
                         * Constructs a new SearchRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.ISearchRequest);

                        /** SearchRequest parent. */
                        public parent: string;

                        /** SearchRequest query. */
                        public query: string;

                        /** SearchRequest pageSize. */
                        public pageSize: number;

                        /** SearchRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new SearchRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.ISearchRequest): google.shopping.merchant.reports.v1.SearchRequest;

                        /**
                         * Encodes the specified SearchRequest message. Does not implicitly {@link google.shopping.merchant.reports.v1.SearchRequest.verify|verify} messages.
                         * @param message SearchRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.SearchRequest.verify|verify} messages.
                         * @param message SearchRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.SearchRequest;

                        /**
                         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.SearchRequest;

                        /**
                         * Verifies a SearchRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.SearchRequest;

                        /**
                         * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
                         * @param message SearchRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SearchResponse. */
                    interface ISearchResponse {

                        /** SearchResponse results */
                        results?: (google.shopping.merchant.reports.v1.IReportRow[]|null);

                        /** SearchResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a SearchResponse. */
                    class SearchResponse implements ISearchResponse {

                        /**
                         * Constructs a new SearchResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.ISearchResponse);

                        /** SearchResponse results. */
                        public results: google.shopping.merchant.reports.v1.IReportRow[];

                        /** SearchResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new SearchResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.ISearchResponse): google.shopping.merchant.reports.v1.SearchResponse;

                        /**
                         * Encodes the specified SearchResponse message. Does not implicitly {@link google.shopping.merchant.reports.v1.SearchResponse.verify|verify} messages.
                         * @param message SearchResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.SearchResponse.verify|verify} messages.
                         * @param message SearchResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.SearchResponse;

                        /**
                         * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.SearchResponse;

                        /**
                         * Verifies a SearchResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.SearchResponse;

                        /**
                         * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
                         * @param message SearchResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReportRow. */
                    interface IReportRow {

                        /** ReportRow productPerformanceView */
                        productPerformanceView?: (google.shopping.merchant.reports.v1.IProductPerformanceView|null);

                        /** ReportRow nonProductPerformanceView */
                        nonProductPerformanceView?: (google.shopping.merchant.reports.v1.INonProductPerformanceView|null);

                        /** ReportRow productView */
                        productView?: (google.shopping.merchant.reports.v1.IProductView|null);

                        /** ReportRow priceCompetitivenessProductView */
                        priceCompetitivenessProductView?: (google.shopping.merchant.reports.v1.IPriceCompetitivenessProductView|null);

                        /** ReportRow priceInsightsProductView */
                        priceInsightsProductView?: (google.shopping.merchant.reports.v1.IPriceInsightsProductView|null);

                        /** ReportRow bestSellersProductClusterView */
                        bestSellersProductClusterView?: (google.shopping.merchant.reports.v1.IBestSellersProductClusterView|null);

                        /** ReportRow bestSellersBrandView */
                        bestSellersBrandView?: (google.shopping.merchant.reports.v1.IBestSellersBrandView|null);

                        /** ReportRow competitiveVisibilityCompetitorView */
                        competitiveVisibilityCompetitorView?: (google.shopping.merchant.reports.v1.ICompetitiveVisibilityCompetitorView|null);

                        /** ReportRow competitiveVisibilityTopMerchantView */
                        competitiveVisibilityTopMerchantView?: (google.shopping.merchant.reports.v1.ICompetitiveVisibilityTopMerchantView|null);

                        /** ReportRow competitiveVisibilityBenchmarkView */
                        competitiveVisibilityBenchmarkView?: (google.shopping.merchant.reports.v1.ICompetitiveVisibilityBenchmarkView|null);
                    }

                    /** Represents a ReportRow. */
                    class ReportRow implements IReportRow {

                        /**
                         * Constructs a new ReportRow.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IReportRow);

                        /** ReportRow productPerformanceView. */
                        public productPerformanceView?: (google.shopping.merchant.reports.v1.IProductPerformanceView|null);

                        /** ReportRow nonProductPerformanceView. */
                        public nonProductPerformanceView?: (google.shopping.merchant.reports.v1.INonProductPerformanceView|null);

                        /** ReportRow productView. */
                        public productView?: (google.shopping.merchant.reports.v1.IProductView|null);

                        /** ReportRow priceCompetitivenessProductView. */
                        public priceCompetitivenessProductView?: (google.shopping.merchant.reports.v1.IPriceCompetitivenessProductView|null);

                        /** ReportRow priceInsightsProductView. */
                        public priceInsightsProductView?: (google.shopping.merchant.reports.v1.IPriceInsightsProductView|null);

                        /** ReportRow bestSellersProductClusterView. */
                        public bestSellersProductClusterView?: (google.shopping.merchant.reports.v1.IBestSellersProductClusterView|null);

                        /** ReportRow bestSellersBrandView. */
                        public bestSellersBrandView?: (google.shopping.merchant.reports.v1.IBestSellersBrandView|null);

                        /** ReportRow competitiveVisibilityCompetitorView. */
                        public competitiveVisibilityCompetitorView?: (google.shopping.merchant.reports.v1.ICompetitiveVisibilityCompetitorView|null);

                        /** ReportRow competitiveVisibilityTopMerchantView. */
                        public competitiveVisibilityTopMerchantView?: (google.shopping.merchant.reports.v1.ICompetitiveVisibilityTopMerchantView|null);

                        /** ReportRow competitiveVisibilityBenchmarkView. */
                        public competitiveVisibilityBenchmarkView?: (google.shopping.merchant.reports.v1.ICompetitiveVisibilityBenchmarkView|null);

                        /**
                         * Creates a new ReportRow instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReportRow instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IReportRow): google.shopping.merchant.reports.v1.ReportRow;

                        /**
                         * Encodes the specified ReportRow message. Does not implicitly {@link google.shopping.merchant.reports.v1.ReportRow.verify|verify} messages.
                         * @param message ReportRow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IReportRow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReportRow message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.ReportRow.verify|verify} messages.
                         * @param message ReportRow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IReportRow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReportRow message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReportRow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.ReportRow;

                        /**
                         * Decodes a ReportRow message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReportRow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.ReportRow;

                        /**
                         * Verifies a ReportRow message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReportRow message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReportRow
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.ReportRow;

                        /**
                         * Creates a plain object from a ReportRow message. Also converts values to other types if specified.
                         * @param message ReportRow
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.ReportRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReportRow to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReportRow
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductPerformanceView. */
                    interface IProductPerformanceView {

                        /** ProductPerformanceView marketingMethod */
                        marketingMethod?: (google.shopping.merchant.reports.v1.MarketingMethod.MarketingMethodEnum|keyof typeof google.shopping.merchant.reports.v1.MarketingMethod.MarketingMethodEnum|null);

                        /** ProductPerformanceView date */
                        date?: (google.type.IDate|null);

                        /** ProductPerformanceView week */
                        week?: (google.type.IDate|null);

                        /** ProductPerformanceView customerCountryCode */
                        customerCountryCode?: (string|null);

                        /** ProductPerformanceView offerId */
                        offerId?: (string|null);

                        /** ProductPerformanceView title */
                        title?: (string|null);

                        /** ProductPerformanceView brand */
                        brand?: (string|null);

                        /** ProductPerformanceView categoryL1 */
                        categoryL1?: (string|null);

                        /** ProductPerformanceView categoryL2 */
                        categoryL2?: (string|null);

                        /** ProductPerformanceView categoryL3 */
                        categoryL3?: (string|null);

                        /** ProductPerformanceView categoryL4 */
                        categoryL4?: (string|null);

                        /** ProductPerformanceView categoryL5 */
                        categoryL5?: (string|null);

                        /** ProductPerformanceView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** ProductPerformanceView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** ProductPerformanceView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** ProductPerformanceView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** ProductPerformanceView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** ProductPerformanceView customLabel0 */
                        customLabel0?: (string|null);

                        /** ProductPerformanceView customLabel1 */
                        customLabel1?: (string|null);

                        /** ProductPerformanceView customLabel2 */
                        customLabel2?: (string|null);

                        /** ProductPerformanceView customLabel3 */
                        customLabel3?: (string|null);

                        /** ProductPerformanceView customLabel4 */
                        customLabel4?: (string|null);

                        /** ProductPerformanceView clicks */
                        clicks?: (number|Long|string|null);

                        /** ProductPerformanceView impressions */
                        impressions?: (number|Long|string|null);

                        /** ProductPerformanceView clickThroughRate */
                        clickThroughRate?: (number|null);

                        /** ProductPerformanceView conversions */
                        conversions?: (number|null);

                        /** ProductPerformanceView conversionValue */
                        conversionValue?: (google.shopping.type.IPrice|null);

                        /** ProductPerformanceView conversionRate */
                        conversionRate?: (number|null);
                    }

                    /** Represents a ProductPerformanceView. */
                    class ProductPerformanceView implements IProductPerformanceView {

                        /**
                         * Constructs a new ProductPerformanceView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IProductPerformanceView);

                        /** ProductPerformanceView marketingMethod. */
                        public marketingMethod?: (google.shopping.merchant.reports.v1.MarketingMethod.MarketingMethodEnum|keyof typeof google.shopping.merchant.reports.v1.MarketingMethod.MarketingMethodEnum|null);

                        /** ProductPerformanceView date. */
                        public date?: (google.type.IDate|null);

                        /** ProductPerformanceView week. */
                        public week?: (google.type.IDate|null);

                        /** ProductPerformanceView customerCountryCode. */
                        public customerCountryCode?: (string|null);

                        /** ProductPerformanceView offerId. */
                        public offerId?: (string|null);

                        /** ProductPerformanceView title. */
                        public title?: (string|null);

                        /** ProductPerformanceView brand. */
                        public brand?: (string|null);

                        /** ProductPerformanceView categoryL1. */
                        public categoryL1?: (string|null);

                        /** ProductPerformanceView categoryL2. */
                        public categoryL2?: (string|null);

                        /** ProductPerformanceView categoryL3. */
                        public categoryL3?: (string|null);

                        /** ProductPerformanceView categoryL4. */
                        public categoryL4?: (string|null);

                        /** ProductPerformanceView categoryL5. */
                        public categoryL5?: (string|null);

                        /** ProductPerformanceView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** ProductPerformanceView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** ProductPerformanceView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** ProductPerformanceView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** ProductPerformanceView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** ProductPerformanceView customLabel0. */
                        public customLabel0?: (string|null);

                        /** ProductPerformanceView customLabel1. */
                        public customLabel1?: (string|null);

                        /** ProductPerformanceView customLabel2. */
                        public customLabel2?: (string|null);

                        /** ProductPerformanceView customLabel3. */
                        public customLabel3?: (string|null);

                        /** ProductPerformanceView customLabel4. */
                        public customLabel4?: (string|null);

                        /** ProductPerformanceView clicks. */
                        public clicks?: (number|Long|string|null);

                        /** ProductPerformanceView impressions. */
                        public impressions?: (number|Long|string|null);

                        /** ProductPerformanceView clickThroughRate. */
                        public clickThroughRate?: (number|null);

                        /** ProductPerformanceView conversions. */
                        public conversions?: (number|null);

                        /** ProductPerformanceView conversionValue. */
                        public conversionValue?: (google.shopping.type.IPrice|null);

                        /** ProductPerformanceView conversionRate. */
                        public conversionRate?: (number|null);

                        /**
                         * Creates a new ProductPerformanceView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductPerformanceView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IProductPerformanceView): google.shopping.merchant.reports.v1.ProductPerformanceView;

                        /**
                         * Encodes the specified ProductPerformanceView message. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductPerformanceView.verify|verify} messages.
                         * @param message ProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductPerformanceView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductPerformanceView.verify|verify} messages.
                         * @param message ProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductPerformanceView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.ProductPerformanceView;

                        /**
                         * Decodes a ProductPerformanceView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.ProductPerformanceView;

                        /**
                         * Verifies a ProductPerformanceView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductPerformanceView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductPerformanceView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.ProductPerformanceView;

                        /**
                         * Creates a plain object from a ProductPerformanceView message. Also converts values to other types if specified.
                         * @param message ProductPerformanceView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.ProductPerformanceView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductPerformanceView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductPerformanceView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductView. */
                    interface IProductView {

                        /** ProductView id */
                        id?: (string|null);

                        /** ProductView channel */
                        channel?: (google.shopping.type.Channel.ChannelEnum|keyof typeof google.shopping.type.Channel.ChannelEnum|null);

                        /** ProductView languageCode */
                        languageCode?: (string|null);

                        /** ProductView feedLabel */
                        feedLabel?: (string|null);

                        /** ProductView offerId */
                        offerId?: (string|null);

                        /** ProductView title */
                        title?: (string|null);

                        /** ProductView brand */
                        brand?: (string|null);

                        /** ProductView categoryL1 */
                        categoryL1?: (string|null);

                        /** ProductView categoryL2 */
                        categoryL2?: (string|null);

                        /** ProductView categoryL3 */
                        categoryL3?: (string|null);

                        /** ProductView categoryL4 */
                        categoryL4?: (string|null);

                        /** ProductView categoryL5 */
                        categoryL5?: (string|null);

                        /** ProductView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** ProductView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** ProductView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** ProductView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** ProductView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** ProductView price */
                        price?: (google.shopping.type.IPrice|null);

                        /** ProductView condition */
                        condition?: (string|null);

                        /** ProductView availability */
                        availability?: (string|null);

                        /** ProductView shippingLabel */
                        shippingLabel?: (string|null);

                        /** ProductView gtin */
                        gtin?: (string[]|null);

                        /** ProductView itemGroupId */
                        itemGroupId?: (string|null);

                        /** ProductView thumbnailLink */
                        thumbnailLink?: (string|null);

                        /** ProductView creationTime */
                        creationTime?: (google.protobuf.ITimestamp|null);

                        /** ProductView expirationDate */
                        expirationDate?: (google.type.IDate|null);

                        /** ProductView aggregatedReportingContextStatus */
                        aggregatedReportingContextStatus?: (google.shopping.merchant.reports.v1.ProductView.AggregatedReportingContextStatus|keyof typeof google.shopping.merchant.reports.v1.ProductView.AggregatedReportingContextStatus|null);

                        /** ProductView itemIssues */
                        itemIssues?: (google.shopping.merchant.reports.v1.ProductView.IItemIssue[]|null);

                        /** ProductView clickPotential */
                        clickPotential?: (google.shopping.merchant.reports.v1.ProductView.ClickPotential|keyof typeof google.shopping.merchant.reports.v1.ProductView.ClickPotential|null);

                        /** ProductView clickPotentialRank */
                        clickPotentialRank?: (number|Long|string|null);
                    }

                    /** Represents a ProductView. */
                    class ProductView implements IProductView {

                        /**
                         * Constructs a new ProductView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IProductView);

                        /** ProductView id. */
                        public id?: (string|null);

                        /** ProductView channel. */
                        public channel?: (google.shopping.type.Channel.ChannelEnum|keyof typeof google.shopping.type.Channel.ChannelEnum|null);

                        /** ProductView languageCode. */
                        public languageCode?: (string|null);

                        /** ProductView feedLabel. */
                        public feedLabel?: (string|null);

                        /** ProductView offerId. */
                        public offerId?: (string|null);

                        /** ProductView title. */
                        public title?: (string|null);

                        /** ProductView brand. */
                        public brand?: (string|null);

                        /** ProductView categoryL1. */
                        public categoryL1?: (string|null);

                        /** ProductView categoryL2. */
                        public categoryL2?: (string|null);

                        /** ProductView categoryL3. */
                        public categoryL3?: (string|null);

                        /** ProductView categoryL4. */
                        public categoryL4?: (string|null);

                        /** ProductView categoryL5. */
                        public categoryL5?: (string|null);

                        /** ProductView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** ProductView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** ProductView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** ProductView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** ProductView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** ProductView price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** ProductView condition. */
                        public condition?: (string|null);

                        /** ProductView availability. */
                        public availability?: (string|null);

                        /** ProductView shippingLabel. */
                        public shippingLabel?: (string|null);

                        /** ProductView gtin. */
                        public gtin: string[];

                        /** ProductView itemGroupId. */
                        public itemGroupId?: (string|null);

                        /** ProductView thumbnailLink. */
                        public thumbnailLink?: (string|null);

                        /** ProductView creationTime. */
                        public creationTime?: (google.protobuf.ITimestamp|null);

                        /** ProductView expirationDate. */
                        public expirationDate?: (google.type.IDate|null);

                        /** ProductView aggregatedReportingContextStatus. */
                        public aggregatedReportingContextStatus?: (google.shopping.merchant.reports.v1.ProductView.AggregatedReportingContextStatus|keyof typeof google.shopping.merchant.reports.v1.ProductView.AggregatedReportingContextStatus|null);

                        /** ProductView itemIssues. */
                        public itemIssues: google.shopping.merchant.reports.v1.ProductView.IItemIssue[];

                        /** ProductView clickPotential. */
                        public clickPotential: (google.shopping.merchant.reports.v1.ProductView.ClickPotential|keyof typeof google.shopping.merchant.reports.v1.ProductView.ClickPotential);

                        /** ProductView clickPotentialRank. */
                        public clickPotentialRank?: (number|Long|string|null);

                        /**
                         * Creates a new ProductView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IProductView): google.shopping.merchant.reports.v1.ProductView;

                        /**
                         * Encodes the specified ProductView message. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductView.verify|verify} messages.
                         * @param message ProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductView.verify|verify} messages.
                         * @param message ProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.ProductView;

                        /**
                         * Decodes a ProductView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.ProductView;

                        /**
                         * Verifies a ProductView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.ProductView;

                        /**
                         * Creates a plain object from a ProductView message. Also converts values to other types if specified.
                         * @param message ProductView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.ProductView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ProductView {

                        /** Properties of an ItemIssue. */
                        interface IItemIssue {

                            /** ItemIssue type */
                            type?: (google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueType|null);

                            /** ItemIssue severity */
                            severity?: (google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueSeverity|null);

                            /** ItemIssue resolution */
                            resolution?: (google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueResolution|keyof typeof google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueResolution|null);
                        }

                        /** Represents an ItemIssue. */
                        class ItemIssue implements IItemIssue {

                            /**
                             * Constructs a new ItemIssue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.reports.v1.ProductView.IItemIssue);

                            /** ItemIssue type. */
                            public type?: (google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueType|null);

                            /** ItemIssue severity. */
                            public severity?: (google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueSeverity|null);

                            /** ItemIssue resolution. */
                            public resolution?: (google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueResolution|keyof typeof google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueResolution|null);

                            /**
                             * Creates a new ItemIssue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ItemIssue instance
                             */
                            public static create(properties?: google.shopping.merchant.reports.v1.ProductView.IItemIssue): google.shopping.merchant.reports.v1.ProductView.ItemIssue;

                            /**
                             * Encodes the specified ItemIssue message. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductView.ItemIssue.verify|verify} messages.
                             * @param message ItemIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.reports.v1.ProductView.IItemIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ItemIssue message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductView.ItemIssue.verify|verify} messages.
                             * @param message ItemIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.reports.v1.ProductView.IItemIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ItemIssue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ItemIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.ProductView.ItemIssue;

                            /**
                             * Decodes an ItemIssue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ItemIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.ProductView.ItemIssue;

                            /**
                             * Verifies an ItemIssue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ItemIssue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ItemIssue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.ProductView.ItemIssue;

                            /**
                             * Creates a plain object from an ItemIssue message. Also converts values to other types if specified.
                             * @param message ItemIssue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.reports.v1.ProductView.ItemIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ItemIssue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ItemIssue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ItemIssue {

                            /** Properties of an ItemIssueType. */
                            interface IItemIssueType {

                                /** ItemIssueType code */
                                code?: (string|null);

                                /** ItemIssueType canonicalAttribute */
                                canonicalAttribute?: (string|null);
                            }

                            /** Represents an ItemIssueType. */
                            class ItemIssueType implements IItemIssueType {

                                /**
                                 * Constructs a new ItemIssueType.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueType);

                                /** ItemIssueType code. */
                                public code?: (string|null);

                                /** ItemIssueType canonicalAttribute. */
                                public canonicalAttribute?: (string|null);

                                /**
                                 * Creates a new ItemIssueType instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ItemIssueType instance
                                 */
                                public static create(properties?: google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueType): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Encodes the specified ItemIssueType message. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueType.verify|verify} messages.
                                 * @param message ItemIssueType message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueType, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ItemIssueType message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueType.verify|verify} messages.
                                 * @param message ItemIssueType message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueType, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an ItemIssueType message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ItemIssueType
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Decodes an ItemIssueType message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ItemIssueType
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Verifies an ItemIssueType message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an ItemIssueType message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ItemIssueType
                                 */
                                public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Creates a plain object from an ItemIssueType message. Also converts values to other types if specified.
                                 * @param message ItemIssueType
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ItemIssueType to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ItemIssueType
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of an ItemIssueSeverity. */
                            interface IItemIssueSeverity {

                                /** ItemIssueSeverity severityPerReportingContext */
                                severityPerReportingContext?: (google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext[]|null);

                                /** ItemIssueSeverity aggregatedSeverity */
                                aggregatedSeverity?: (google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|keyof typeof google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|null);
                            }

                            /** Represents an ItemIssueSeverity. */
                            class ItemIssueSeverity implements IItemIssueSeverity {

                                /**
                                 * Constructs a new ItemIssueSeverity.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueSeverity);

                                /** ItemIssueSeverity severityPerReportingContext. */
                                public severityPerReportingContext: google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext[];

                                /** ItemIssueSeverity aggregatedSeverity. */
                                public aggregatedSeverity?: (google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|keyof typeof google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|null);

                                /**
                                 * Creates a new ItemIssueSeverity instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ItemIssueSeverity instance
                                 */
                                public static create(properties?: google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueSeverity): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Encodes the specified ItemIssueSeverity message. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.verify|verify} messages.
                                 * @param message ItemIssueSeverity message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueSeverity, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ItemIssueSeverity message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.verify|verify} messages.
                                 * @param message ItemIssueSeverity message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.shopping.merchant.reports.v1.ProductView.ItemIssue.IItemIssueSeverity, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an ItemIssueSeverity message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ItemIssueSeverity
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Decodes an ItemIssueSeverity message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ItemIssueSeverity
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Verifies an ItemIssueSeverity message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an ItemIssueSeverity message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ItemIssueSeverity
                                 */
                                public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Creates a plain object from an ItemIssueSeverity message. Also converts values to other types if specified.
                                 * @param message ItemIssueSeverity
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ItemIssueSeverity to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ItemIssueSeverity
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            namespace ItemIssueSeverity {

                                /** Properties of an IssueSeverityPerReportingContext. */
                                interface IIssueSeverityPerReportingContext {

                                    /** IssueSeverityPerReportingContext reportingContext */
                                    reportingContext?: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum|null);

                                    /** IssueSeverityPerReportingContext disapprovedCountries */
                                    disapprovedCountries?: (string[]|null);

                                    /** IssueSeverityPerReportingContext demotedCountries */
                                    demotedCountries?: (string[]|null);
                                }

                                /** Represents an IssueSeverityPerReportingContext. */
                                class IssueSeverityPerReportingContext implements IIssueSeverityPerReportingContext {

                                    /**
                                     * Constructs a new IssueSeverityPerReportingContext.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext);

                                    /** IssueSeverityPerReportingContext reportingContext. */
                                    public reportingContext?: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum|null);

                                    /** IssueSeverityPerReportingContext disapprovedCountries. */
                                    public disapprovedCountries: string[];

                                    /** IssueSeverityPerReportingContext demotedCountries. */
                                    public demotedCountries: string[];

                                    /**
                                     * Creates a new IssueSeverityPerReportingContext instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns IssueSeverityPerReportingContext instance
                                     */
                                    public static create(properties?: google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Encodes the specified IssueSeverityPerReportingContext message. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext.verify|verify} messages.
                                     * @param message IssueSeverityPerReportingContext message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified IssueSeverityPerReportingContext message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext.verify|verify} messages.
                                     * @param message IssueSeverityPerReportingContext message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an IssueSeverityPerReportingContext message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns IssueSeverityPerReportingContext
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Decodes an IssueSeverityPerReportingContext message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns IssueSeverityPerReportingContext
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Verifies an IssueSeverityPerReportingContext message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an IssueSeverityPerReportingContext message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns IssueSeverityPerReportingContext
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Creates a plain object from an IssueSeverityPerReportingContext message. Also converts values to other types if specified.
                                     * @param message IssueSeverityPerReportingContext
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.shopping.merchant.reports.v1.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this IssueSeverityPerReportingContext to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };

                                    /**
                                     * Gets the default type url for IssueSeverityPerReportingContext
                                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns The default type url
                                     */
                                    public static getTypeUrl(typeUrlPrefix?: string): string;
                                }

                                /** AggregatedIssueSeverity enum. */
                                enum AggregatedIssueSeverity {
                                    AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED = 0,
                                    DISAPPROVED = 1,
                                    DEMOTED = 2,
                                    PENDING = 3
                                }
                            }

                            /** ItemIssueResolution enum. */
                            enum ItemIssueResolution {
                                ITEM_ISSUE_RESOLUTION_UNSPECIFIED = 0,
                                MERCHANT_ACTION = 1,
                                PENDING_PROCESSING = 2
                            }
                        }

                        /** AggregatedReportingContextStatus enum. */
                        enum AggregatedReportingContextStatus {
                            AGGREGATED_REPORTING_CONTEXT_STATUS_UNSPECIFIED = 0,
                            NOT_ELIGIBLE_OR_DISAPPROVED = 1,
                            PENDING = 2,
                            ELIGIBLE_LIMITED = 3,
                            ELIGIBLE = 4
                        }

                        /** ClickPotential enum. */
                        enum ClickPotential {
                            CLICK_POTENTIAL_UNSPECIFIED = 0,
                            LOW = 1,
                            MEDIUM = 2,
                            HIGH = 3
                        }
                    }

                    /** Properties of a PriceCompetitivenessProductView. */
                    interface IPriceCompetitivenessProductView {

                        /** PriceCompetitivenessProductView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** PriceCompetitivenessProductView id */
                        id?: (string|null);

                        /** PriceCompetitivenessProductView offerId */
                        offerId?: (string|null);

                        /** PriceCompetitivenessProductView title */
                        title?: (string|null);

                        /** PriceCompetitivenessProductView brand */
                        brand?: (string|null);

                        /** PriceCompetitivenessProductView categoryL1 */
                        categoryL1?: (string|null);

                        /** PriceCompetitivenessProductView categoryL2 */
                        categoryL2?: (string|null);

                        /** PriceCompetitivenessProductView categoryL3 */
                        categoryL3?: (string|null);

                        /** PriceCompetitivenessProductView categoryL4 */
                        categoryL4?: (string|null);

                        /** PriceCompetitivenessProductView categoryL5 */
                        categoryL5?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** PriceCompetitivenessProductView price */
                        price?: (google.shopping.type.IPrice|null);

                        /** PriceCompetitivenessProductView benchmarkPrice */
                        benchmarkPrice?: (google.shopping.type.IPrice|null);
                    }

                    /** Represents a PriceCompetitivenessProductView. */
                    class PriceCompetitivenessProductView implements IPriceCompetitivenessProductView {

                        /**
                         * Constructs a new PriceCompetitivenessProductView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IPriceCompetitivenessProductView);

                        /** PriceCompetitivenessProductView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** PriceCompetitivenessProductView id. */
                        public id?: (string|null);

                        /** PriceCompetitivenessProductView offerId. */
                        public offerId?: (string|null);

                        /** PriceCompetitivenessProductView title. */
                        public title?: (string|null);

                        /** PriceCompetitivenessProductView brand. */
                        public brand?: (string|null);

                        /** PriceCompetitivenessProductView categoryL1. */
                        public categoryL1?: (string|null);

                        /** PriceCompetitivenessProductView categoryL2. */
                        public categoryL2?: (string|null);

                        /** PriceCompetitivenessProductView categoryL3. */
                        public categoryL3?: (string|null);

                        /** PriceCompetitivenessProductView categoryL4. */
                        public categoryL4?: (string|null);

                        /** PriceCompetitivenessProductView categoryL5. */
                        public categoryL5?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** PriceCompetitivenessProductView price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** PriceCompetitivenessProductView benchmarkPrice. */
                        public benchmarkPrice?: (google.shopping.type.IPrice|null);

                        /**
                         * Creates a new PriceCompetitivenessProductView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PriceCompetitivenessProductView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IPriceCompetitivenessProductView): google.shopping.merchant.reports.v1.PriceCompetitivenessProductView;

                        /**
                         * Encodes the specified PriceCompetitivenessProductView message. Does not implicitly {@link google.shopping.merchant.reports.v1.PriceCompetitivenessProductView.verify|verify} messages.
                         * @param message PriceCompetitivenessProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IPriceCompetitivenessProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PriceCompetitivenessProductView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.PriceCompetitivenessProductView.verify|verify} messages.
                         * @param message PriceCompetitivenessProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IPriceCompetitivenessProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PriceCompetitivenessProductView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PriceCompetitivenessProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.PriceCompetitivenessProductView;

                        /**
                         * Decodes a PriceCompetitivenessProductView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PriceCompetitivenessProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.PriceCompetitivenessProductView;

                        /**
                         * Verifies a PriceCompetitivenessProductView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PriceCompetitivenessProductView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PriceCompetitivenessProductView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.PriceCompetitivenessProductView;

                        /**
                         * Creates a plain object from a PriceCompetitivenessProductView message. Also converts values to other types if specified.
                         * @param message PriceCompetitivenessProductView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.PriceCompetitivenessProductView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PriceCompetitivenessProductView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PriceCompetitivenessProductView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PriceInsightsProductView. */
                    interface IPriceInsightsProductView {

                        /** PriceInsightsProductView id */
                        id?: (string|null);

                        /** PriceInsightsProductView offerId */
                        offerId?: (string|null);

                        /** PriceInsightsProductView title */
                        title?: (string|null);

                        /** PriceInsightsProductView brand */
                        brand?: (string|null);

                        /** PriceInsightsProductView categoryL1 */
                        categoryL1?: (string|null);

                        /** PriceInsightsProductView categoryL2 */
                        categoryL2?: (string|null);

                        /** PriceInsightsProductView categoryL3 */
                        categoryL3?: (string|null);

                        /** PriceInsightsProductView categoryL4 */
                        categoryL4?: (string|null);

                        /** PriceInsightsProductView categoryL5 */
                        categoryL5?: (string|null);

                        /** PriceInsightsProductView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** PriceInsightsProductView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** PriceInsightsProductView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** PriceInsightsProductView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** PriceInsightsProductView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** PriceInsightsProductView price */
                        price?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView suggestedPrice */
                        suggestedPrice?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView predictedImpressionsChangeFraction */
                        predictedImpressionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedClicksChangeFraction */
                        predictedClicksChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedConversionsChangeFraction */
                        predictedConversionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView effectiveness */
                        effectiveness?: (google.shopping.merchant.reports.v1.PriceInsightsProductView.Effectiveness|keyof typeof google.shopping.merchant.reports.v1.PriceInsightsProductView.Effectiveness|null);
                    }

                    /** Represents a PriceInsightsProductView. */
                    class PriceInsightsProductView implements IPriceInsightsProductView {

                        /**
                         * Constructs a new PriceInsightsProductView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IPriceInsightsProductView);

                        /** PriceInsightsProductView id. */
                        public id?: (string|null);

                        /** PriceInsightsProductView offerId. */
                        public offerId?: (string|null);

                        /** PriceInsightsProductView title. */
                        public title?: (string|null);

                        /** PriceInsightsProductView brand. */
                        public brand?: (string|null);

                        /** PriceInsightsProductView categoryL1. */
                        public categoryL1?: (string|null);

                        /** PriceInsightsProductView categoryL2. */
                        public categoryL2?: (string|null);

                        /** PriceInsightsProductView categoryL3. */
                        public categoryL3?: (string|null);

                        /** PriceInsightsProductView categoryL4. */
                        public categoryL4?: (string|null);

                        /** PriceInsightsProductView categoryL5. */
                        public categoryL5?: (string|null);

                        /** PriceInsightsProductView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** PriceInsightsProductView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** PriceInsightsProductView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** PriceInsightsProductView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** PriceInsightsProductView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** PriceInsightsProductView price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView suggestedPrice. */
                        public suggestedPrice?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView predictedImpressionsChangeFraction. */
                        public predictedImpressionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedClicksChangeFraction. */
                        public predictedClicksChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedConversionsChangeFraction. */
                        public predictedConversionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView effectiveness. */
                        public effectiveness: (google.shopping.merchant.reports.v1.PriceInsightsProductView.Effectiveness|keyof typeof google.shopping.merchant.reports.v1.PriceInsightsProductView.Effectiveness);

                        /**
                         * Creates a new PriceInsightsProductView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PriceInsightsProductView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IPriceInsightsProductView): google.shopping.merchant.reports.v1.PriceInsightsProductView;

                        /**
                         * Encodes the specified PriceInsightsProductView message. Does not implicitly {@link google.shopping.merchant.reports.v1.PriceInsightsProductView.verify|verify} messages.
                         * @param message PriceInsightsProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IPriceInsightsProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PriceInsightsProductView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.PriceInsightsProductView.verify|verify} messages.
                         * @param message PriceInsightsProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IPriceInsightsProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PriceInsightsProductView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PriceInsightsProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.PriceInsightsProductView;

                        /**
                         * Decodes a PriceInsightsProductView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PriceInsightsProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.PriceInsightsProductView;

                        /**
                         * Verifies a PriceInsightsProductView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PriceInsightsProductView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PriceInsightsProductView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.PriceInsightsProductView;

                        /**
                         * Creates a plain object from a PriceInsightsProductView message. Also converts values to other types if specified.
                         * @param message PriceInsightsProductView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.PriceInsightsProductView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PriceInsightsProductView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PriceInsightsProductView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PriceInsightsProductView {

                        /** Effectiveness enum. */
                        enum Effectiveness {
                            EFFECTIVENESS_UNSPECIFIED = 0,
                            LOW = 1,
                            MEDIUM = 2,
                            HIGH = 3
                        }
                    }

                    /** Properties of a BestSellersProductClusterView. */
                    interface IBestSellersProductClusterView {

                        /** BestSellersProductClusterView reportDate */
                        reportDate?: (google.type.IDate|null);

                        /** BestSellersProductClusterView reportGranularity */
                        reportGranularity?: (google.shopping.merchant.reports.v1.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersProductClusterView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** BestSellersProductClusterView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** BestSellersProductClusterView title */
                        title?: (string|null);

                        /** BestSellersProductClusterView brand */
                        brand?: (string|null);

                        /** BestSellersProductClusterView categoryL1 */
                        categoryL1?: (string|null);

                        /** BestSellersProductClusterView categoryL2 */
                        categoryL2?: (string|null);

                        /** BestSellersProductClusterView categoryL3 */
                        categoryL3?: (string|null);

                        /** BestSellersProductClusterView categoryL4 */
                        categoryL4?: (string|null);

                        /** BestSellersProductClusterView categoryL5 */
                        categoryL5?: (string|null);

                        /** BestSellersProductClusterView variantGtins */
                        variantGtins?: (string[]|null);

                        /** BestSellersProductClusterView inventoryStatus */
                        inventoryStatus?: (google.shopping.merchant.reports.v1.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView brandInventoryStatus */
                        brandInventoryStatus?: (google.shopping.merchant.reports.v1.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView rank */
                        rank?: (number|Long|string|null);

                        /** BestSellersProductClusterView previousRank */
                        previousRank?: (number|Long|string|null);

                        /** BestSellersProductClusterView relativeDemand */
                        relativeDemand?: (google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView previousRelativeDemand */
                        previousRelativeDemand?: (google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView relativeDemandChange */
                        relativeDemandChange?: (google.shopping.merchant.reports.v1.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);
                    }

                    /** Represents a BestSellersProductClusterView. */
                    class BestSellersProductClusterView implements IBestSellersProductClusterView {

                        /**
                         * Constructs a new BestSellersProductClusterView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IBestSellersProductClusterView);

                        /** BestSellersProductClusterView reportDate. */
                        public reportDate?: (google.type.IDate|null);

                        /** BestSellersProductClusterView reportGranularity. */
                        public reportGranularity?: (google.shopping.merchant.reports.v1.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersProductClusterView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** BestSellersProductClusterView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** BestSellersProductClusterView title. */
                        public title?: (string|null);

                        /** BestSellersProductClusterView brand. */
                        public brand?: (string|null);

                        /** BestSellersProductClusterView categoryL1. */
                        public categoryL1?: (string|null);

                        /** BestSellersProductClusterView categoryL2. */
                        public categoryL2?: (string|null);

                        /** BestSellersProductClusterView categoryL3. */
                        public categoryL3?: (string|null);

                        /** BestSellersProductClusterView categoryL4. */
                        public categoryL4?: (string|null);

                        /** BestSellersProductClusterView categoryL5. */
                        public categoryL5?: (string|null);

                        /** BestSellersProductClusterView variantGtins. */
                        public variantGtins: string[];

                        /** BestSellersProductClusterView inventoryStatus. */
                        public inventoryStatus?: (google.shopping.merchant.reports.v1.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView brandInventoryStatus. */
                        public brandInventoryStatus?: (google.shopping.merchant.reports.v1.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView rank. */
                        public rank?: (number|Long|string|null);

                        /** BestSellersProductClusterView previousRank. */
                        public previousRank?: (number|Long|string|null);

                        /** BestSellersProductClusterView relativeDemand. */
                        public relativeDemand?: (google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView previousRelativeDemand. */
                        public previousRelativeDemand?: (google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView relativeDemandChange. */
                        public relativeDemandChange?: (google.shopping.merchant.reports.v1.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);

                        /**
                         * Creates a new BestSellersProductClusterView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BestSellersProductClusterView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IBestSellersProductClusterView): google.shopping.merchant.reports.v1.BestSellersProductClusterView;

                        /**
                         * Encodes the specified BestSellersProductClusterView message. Does not implicitly {@link google.shopping.merchant.reports.v1.BestSellersProductClusterView.verify|verify} messages.
                         * @param message BestSellersProductClusterView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IBestSellersProductClusterView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BestSellersProductClusterView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.BestSellersProductClusterView.verify|verify} messages.
                         * @param message BestSellersProductClusterView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IBestSellersProductClusterView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BestSellersProductClusterView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BestSellersProductClusterView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.BestSellersProductClusterView;

                        /**
                         * Decodes a BestSellersProductClusterView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BestSellersProductClusterView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.BestSellersProductClusterView;

                        /**
                         * Verifies a BestSellersProductClusterView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BestSellersProductClusterView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BestSellersProductClusterView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.BestSellersProductClusterView;

                        /**
                         * Creates a plain object from a BestSellersProductClusterView message. Also converts values to other types if specified.
                         * @param message BestSellersProductClusterView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.BestSellersProductClusterView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BestSellersProductClusterView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BestSellersProductClusterView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BestSellersProductClusterView {

                        /** InventoryStatus enum. */
                        enum InventoryStatus {
                            INVENTORY_STATUS_UNSPECIFIED = 0,
                            IN_STOCK = 1,
                            OUT_OF_STOCK = 2,
                            NOT_IN_INVENTORY = 3
                        }
                    }

                    /** Properties of a BestSellersBrandView. */
                    interface IBestSellersBrandView {

                        /** BestSellersBrandView reportDate */
                        reportDate?: (google.type.IDate|null);

                        /** BestSellersBrandView reportGranularity */
                        reportGranularity?: (google.shopping.merchant.reports.v1.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersBrandView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** BestSellersBrandView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** BestSellersBrandView brand */
                        brand?: (string|null);

                        /** BestSellersBrandView rank */
                        rank?: (number|Long|string|null);

                        /** BestSellersBrandView previousRank */
                        previousRank?: (number|Long|string|null);

                        /** BestSellersBrandView relativeDemand */
                        relativeDemand?: (google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView previousRelativeDemand */
                        previousRelativeDemand?: (google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView relativeDemandChange */
                        relativeDemandChange?: (google.shopping.merchant.reports.v1.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);
                    }

                    /** Represents a BestSellersBrandView. */
                    class BestSellersBrandView implements IBestSellersBrandView {

                        /**
                         * Constructs a new BestSellersBrandView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IBestSellersBrandView);

                        /** BestSellersBrandView reportDate. */
                        public reportDate?: (google.type.IDate|null);

                        /** BestSellersBrandView reportGranularity. */
                        public reportGranularity?: (google.shopping.merchant.reports.v1.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersBrandView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** BestSellersBrandView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** BestSellersBrandView brand. */
                        public brand?: (string|null);

                        /** BestSellersBrandView rank. */
                        public rank?: (number|Long|string|null);

                        /** BestSellersBrandView previousRank. */
                        public previousRank?: (number|Long|string|null);

                        /** BestSellersBrandView relativeDemand. */
                        public relativeDemand?: (google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView previousRelativeDemand. */
                        public previousRelativeDemand?: (google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView relativeDemandChange. */
                        public relativeDemandChange?: (google.shopping.merchant.reports.v1.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);

                        /**
                         * Creates a new BestSellersBrandView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BestSellersBrandView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IBestSellersBrandView): google.shopping.merchant.reports.v1.BestSellersBrandView;

                        /**
                         * Encodes the specified BestSellersBrandView message. Does not implicitly {@link google.shopping.merchant.reports.v1.BestSellersBrandView.verify|verify} messages.
                         * @param message BestSellersBrandView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IBestSellersBrandView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BestSellersBrandView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.BestSellersBrandView.verify|verify} messages.
                         * @param message BestSellersBrandView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IBestSellersBrandView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BestSellersBrandView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BestSellersBrandView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.BestSellersBrandView;

                        /**
                         * Decodes a BestSellersBrandView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BestSellersBrandView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.BestSellersBrandView;

                        /**
                         * Verifies a BestSellersBrandView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BestSellersBrandView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BestSellersBrandView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.BestSellersBrandView;

                        /**
                         * Creates a plain object from a BestSellersBrandView message. Also converts values to other types if specified.
                         * @param message BestSellersBrandView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.BestSellersBrandView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BestSellersBrandView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BestSellersBrandView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NonProductPerformanceView. */
                    interface INonProductPerformanceView {

                        /** NonProductPerformanceView date */
                        date?: (google.type.IDate|null);

                        /** NonProductPerformanceView week */
                        week?: (google.type.IDate|null);

                        /** NonProductPerformanceView clicks */
                        clicks?: (number|Long|string|null);

                        /** NonProductPerformanceView impressions */
                        impressions?: (number|Long|string|null);

                        /** NonProductPerformanceView clickThroughRate */
                        clickThroughRate?: (number|null);
                    }

                    /** Represents a NonProductPerformanceView. */
                    class NonProductPerformanceView implements INonProductPerformanceView {

                        /**
                         * Constructs a new NonProductPerformanceView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.INonProductPerformanceView);

                        /** NonProductPerformanceView date. */
                        public date?: (google.type.IDate|null);

                        /** NonProductPerformanceView week. */
                        public week?: (google.type.IDate|null);

                        /** NonProductPerformanceView clicks. */
                        public clicks?: (number|Long|string|null);

                        /** NonProductPerformanceView impressions. */
                        public impressions?: (number|Long|string|null);

                        /** NonProductPerformanceView clickThroughRate. */
                        public clickThroughRate?: (number|null);

                        /**
                         * Creates a new NonProductPerformanceView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NonProductPerformanceView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.INonProductPerformanceView): google.shopping.merchant.reports.v1.NonProductPerformanceView;

                        /**
                         * Encodes the specified NonProductPerformanceView message. Does not implicitly {@link google.shopping.merchant.reports.v1.NonProductPerformanceView.verify|verify} messages.
                         * @param message NonProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.INonProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NonProductPerformanceView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.NonProductPerformanceView.verify|verify} messages.
                         * @param message NonProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.INonProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NonProductPerformanceView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NonProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.NonProductPerformanceView;

                        /**
                         * Decodes a NonProductPerformanceView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NonProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.NonProductPerformanceView;

                        /**
                         * Verifies a NonProductPerformanceView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NonProductPerformanceView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NonProductPerformanceView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.NonProductPerformanceView;

                        /**
                         * Creates a plain object from a NonProductPerformanceView message. Also converts values to other types if specified.
                         * @param message NonProductPerformanceView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.NonProductPerformanceView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NonProductPerformanceView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NonProductPerformanceView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CompetitiveVisibilityCompetitorView. */
                    interface ICompetitiveVisibilityCompetitorView {

                        /** CompetitiveVisibilityCompetitorView date */
                        date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityCompetitorView domain */
                        domain?: (string|null);

                        /** CompetitiveVisibilityCompetitorView isYourDomain */
                        isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityCompetitorView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityCompetitorView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView trafficSource */
                        trafficSource?: (google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityCompetitorView rank */
                        rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView adsOrganicRatio */
                        adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityCompetitorView pageOverlapRate */
                        pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView higherPositionRate */
                        higherPositionRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView relativeVisibility */
                        relativeVisibility?: (number|null);
                    }

                    /** Represents a CompetitiveVisibilityCompetitorView. */
                    class CompetitiveVisibilityCompetitorView implements ICompetitiveVisibilityCompetitorView {

                        /**
                         * Constructs a new CompetitiveVisibilityCompetitorView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.ICompetitiveVisibilityCompetitorView);

                        /** CompetitiveVisibilityCompetitorView date. */
                        public date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityCompetitorView domain. */
                        public domain?: (string|null);

                        /** CompetitiveVisibilityCompetitorView isYourDomain. */
                        public isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityCompetitorView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityCompetitorView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView trafficSource. */
                        public trafficSource?: (google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityCompetitorView rank. */
                        public rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView adsOrganicRatio. */
                        public adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityCompetitorView pageOverlapRate. */
                        public pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView higherPositionRate. */
                        public higherPositionRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView relativeVisibility. */
                        public relativeVisibility?: (number|null);

                        /**
                         * Creates a new CompetitiveVisibilityCompetitorView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompetitiveVisibilityCompetitorView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.ICompetitiveVisibilityCompetitorView): google.shopping.merchant.reports.v1.CompetitiveVisibilityCompetitorView;

                        /**
                         * Encodes the specified CompetitiveVisibilityCompetitorView message. Does not implicitly {@link google.shopping.merchant.reports.v1.CompetitiveVisibilityCompetitorView.verify|verify} messages.
                         * @param message CompetitiveVisibilityCompetitorView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.ICompetitiveVisibilityCompetitorView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompetitiveVisibilityCompetitorView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.CompetitiveVisibilityCompetitorView.verify|verify} messages.
                         * @param message CompetitiveVisibilityCompetitorView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.ICompetitiveVisibilityCompetitorView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompetitiveVisibilityCompetitorView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompetitiveVisibilityCompetitorView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.CompetitiveVisibilityCompetitorView;

                        /**
                         * Decodes a CompetitiveVisibilityCompetitorView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompetitiveVisibilityCompetitorView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.CompetitiveVisibilityCompetitorView;

                        /**
                         * Verifies a CompetitiveVisibilityCompetitorView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompetitiveVisibilityCompetitorView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompetitiveVisibilityCompetitorView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.CompetitiveVisibilityCompetitorView;

                        /**
                         * Creates a plain object from a CompetitiveVisibilityCompetitorView message. Also converts values to other types if specified.
                         * @param message CompetitiveVisibilityCompetitorView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.CompetitiveVisibilityCompetitorView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompetitiveVisibilityCompetitorView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CompetitiveVisibilityCompetitorView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CompetitiveVisibilityTopMerchantView. */
                    interface ICompetitiveVisibilityTopMerchantView {

                        /** CompetitiveVisibilityTopMerchantView date */
                        date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityTopMerchantView domain */
                        domain?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView isYourDomain */
                        isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityTopMerchantView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView trafficSource */
                        trafficSource?: (google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityTopMerchantView rank */
                        rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView adsOrganicRatio */
                        adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView pageOverlapRate */
                        pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView higherPositionRate */
                        higherPositionRate?: (number|null);
                    }

                    /** Represents a CompetitiveVisibilityTopMerchantView. */
                    class CompetitiveVisibilityTopMerchantView implements ICompetitiveVisibilityTopMerchantView {

                        /**
                         * Constructs a new CompetitiveVisibilityTopMerchantView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.ICompetitiveVisibilityTopMerchantView);

                        /** CompetitiveVisibilityTopMerchantView date. */
                        public date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityTopMerchantView domain. */
                        public domain?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView isYourDomain. */
                        public isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityTopMerchantView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView trafficSource. */
                        public trafficSource?: (google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityTopMerchantView rank. */
                        public rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView adsOrganicRatio. */
                        public adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView pageOverlapRate. */
                        public pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView higherPositionRate. */
                        public higherPositionRate?: (number|null);

                        /**
                         * Creates a new CompetitiveVisibilityTopMerchantView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompetitiveVisibilityTopMerchantView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.ICompetitiveVisibilityTopMerchantView): google.shopping.merchant.reports.v1.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Encodes the specified CompetitiveVisibilityTopMerchantView message. Does not implicitly {@link google.shopping.merchant.reports.v1.CompetitiveVisibilityTopMerchantView.verify|verify} messages.
                         * @param message CompetitiveVisibilityTopMerchantView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.ICompetitiveVisibilityTopMerchantView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompetitiveVisibilityTopMerchantView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.CompetitiveVisibilityTopMerchantView.verify|verify} messages.
                         * @param message CompetitiveVisibilityTopMerchantView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.ICompetitiveVisibilityTopMerchantView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompetitiveVisibilityTopMerchantView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompetitiveVisibilityTopMerchantView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Decodes a CompetitiveVisibilityTopMerchantView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompetitiveVisibilityTopMerchantView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Verifies a CompetitiveVisibilityTopMerchantView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompetitiveVisibilityTopMerchantView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompetitiveVisibilityTopMerchantView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Creates a plain object from a CompetitiveVisibilityTopMerchantView message. Also converts values to other types if specified.
                         * @param message CompetitiveVisibilityTopMerchantView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.CompetitiveVisibilityTopMerchantView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompetitiveVisibilityTopMerchantView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CompetitiveVisibilityTopMerchantView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CompetitiveVisibilityBenchmarkView. */
                    interface ICompetitiveVisibilityBenchmarkView {

                        /** CompetitiveVisibilityBenchmarkView date */
                        date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityBenchmarkView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityBenchmarkView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityBenchmarkView trafficSource */
                        trafficSource?: (google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityBenchmarkView yourDomainVisibilityTrend */
                        yourDomainVisibilityTrend?: (number|null);

                        /** CompetitiveVisibilityBenchmarkView categoryBenchmarkVisibilityTrend */
                        categoryBenchmarkVisibilityTrend?: (number|null);
                    }

                    /** Represents a CompetitiveVisibilityBenchmarkView. */
                    class CompetitiveVisibilityBenchmarkView implements ICompetitiveVisibilityBenchmarkView {

                        /**
                         * Constructs a new CompetitiveVisibilityBenchmarkView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.ICompetitiveVisibilityBenchmarkView);

                        /** CompetitiveVisibilityBenchmarkView date. */
                        public date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityBenchmarkView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityBenchmarkView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityBenchmarkView trafficSource. */
                        public trafficSource?: (google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityBenchmarkView yourDomainVisibilityTrend. */
                        public yourDomainVisibilityTrend?: (number|null);

                        /** CompetitiveVisibilityBenchmarkView categoryBenchmarkVisibilityTrend. */
                        public categoryBenchmarkVisibilityTrend?: (number|null);

                        /**
                         * Creates a new CompetitiveVisibilityBenchmarkView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompetitiveVisibilityBenchmarkView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.ICompetitiveVisibilityBenchmarkView): google.shopping.merchant.reports.v1.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Encodes the specified CompetitiveVisibilityBenchmarkView message. Does not implicitly {@link google.shopping.merchant.reports.v1.CompetitiveVisibilityBenchmarkView.verify|verify} messages.
                         * @param message CompetitiveVisibilityBenchmarkView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.ICompetitiveVisibilityBenchmarkView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompetitiveVisibilityBenchmarkView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.CompetitiveVisibilityBenchmarkView.verify|verify} messages.
                         * @param message CompetitiveVisibilityBenchmarkView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.ICompetitiveVisibilityBenchmarkView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompetitiveVisibilityBenchmarkView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompetitiveVisibilityBenchmarkView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Decodes a CompetitiveVisibilityBenchmarkView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompetitiveVisibilityBenchmarkView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Verifies a CompetitiveVisibilityBenchmarkView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompetitiveVisibilityBenchmarkView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompetitiveVisibilityBenchmarkView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Creates a plain object from a CompetitiveVisibilityBenchmarkView message. Also converts values to other types if specified.
                         * @param message CompetitiveVisibilityBenchmarkView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.CompetitiveVisibilityBenchmarkView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompetitiveVisibilityBenchmarkView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CompetitiveVisibilityBenchmarkView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MarketingMethod. */
                    interface IMarketingMethod {
                    }

                    /** Represents a MarketingMethod. */
                    class MarketingMethod implements IMarketingMethod {

                        /**
                         * Constructs a new MarketingMethod.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IMarketingMethod);

                        /**
                         * Creates a new MarketingMethod instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MarketingMethod instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IMarketingMethod): google.shopping.merchant.reports.v1.MarketingMethod;

                        /**
                         * Encodes the specified MarketingMethod message. Does not implicitly {@link google.shopping.merchant.reports.v1.MarketingMethod.verify|verify} messages.
                         * @param message MarketingMethod message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IMarketingMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MarketingMethod message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.MarketingMethod.verify|verify} messages.
                         * @param message MarketingMethod message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IMarketingMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MarketingMethod message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MarketingMethod
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.MarketingMethod;

                        /**
                         * Decodes a MarketingMethod message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MarketingMethod
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.MarketingMethod;

                        /**
                         * Verifies a MarketingMethod message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MarketingMethod message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MarketingMethod
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.MarketingMethod;

                        /**
                         * Creates a plain object from a MarketingMethod message. Also converts values to other types if specified.
                         * @param message MarketingMethod
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.MarketingMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MarketingMethod to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MarketingMethod
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MarketingMethod {

                        /** MarketingMethodEnum enum. */
                        enum MarketingMethodEnum {
                            MARKETING_METHOD_ENUM_UNSPECIFIED = 0,
                            ORGANIC = 1,
                            ADS = 2
                        }
                    }

                    /** Properties of a ReportGranularity. */
                    interface IReportGranularity {
                    }

                    /** Represents a ReportGranularity. */
                    class ReportGranularity implements IReportGranularity {

                        /**
                         * Constructs a new ReportGranularity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IReportGranularity);

                        /**
                         * Creates a new ReportGranularity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReportGranularity instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IReportGranularity): google.shopping.merchant.reports.v1.ReportGranularity;

                        /**
                         * Encodes the specified ReportGranularity message. Does not implicitly {@link google.shopping.merchant.reports.v1.ReportGranularity.verify|verify} messages.
                         * @param message ReportGranularity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IReportGranularity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReportGranularity message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.ReportGranularity.verify|verify} messages.
                         * @param message ReportGranularity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IReportGranularity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReportGranularity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReportGranularity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.ReportGranularity;

                        /**
                         * Decodes a ReportGranularity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReportGranularity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.ReportGranularity;

                        /**
                         * Verifies a ReportGranularity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReportGranularity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReportGranularity
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.ReportGranularity;

                        /**
                         * Creates a plain object from a ReportGranularity message. Also converts values to other types if specified.
                         * @param message ReportGranularity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.ReportGranularity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReportGranularity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReportGranularity
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ReportGranularity {

                        /** ReportGranularityEnum enum. */
                        enum ReportGranularityEnum {
                            REPORT_GRANULARITY_ENUM_UNSPECIFIED = 0,
                            WEEKLY = 1,
                            MONTHLY = 2
                        }
                    }

                    /** Properties of a RelativeDemand. */
                    interface IRelativeDemand {
                    }

                    /** Represents a RelativeDemand. */
                    class RelativeDemand implements IRelativeDemand {

                        /**
                         * Constructs a new RelativeDemand.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IRelativeDemand);

                        /**
                         * Creates a new RelativeDemand instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RelativeDemand instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IRelativeDemand): google.shopping.merchant.reports.v1.RelativeDemand;

                        /**
                         * Encodes the specified RelativeDemand message. Does not implicitly {@link google.shopping.merchant.reports.v1.RelativeDemand.verify|verify} messages.
                         * @param message RelativeDemand message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IRelativeDemand, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RelativeDemand message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.RelativeDemand.verify|verify} messages.
                         * @param message RelativeDemand message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IRelativeDemand, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RelativeDemand message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RelativeDemand
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.RelativeDemand;

                        /**
                         * Decodes a RelativeDemand message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RelativeDemand
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.RelativeDemand;

                        /**
                         * Verifies a RelativeDemand message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RelativeDemand message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RelativeDemand
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.RelativeDemand;

                        /**
                         * Creates a plain object from a RelativeDemand message. Also converts values to other types if specified.
                         * @param message RelativeDemand
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.RelativeDemand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RelativeDemand to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RelativeDemand
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace RelativeDemand {

                        /** RelativeDemandEnum enum. */
                        enum RelativeDemandEnum {
                            RELATIVE_DEMAND_ENUM_UNSPECIFIED = 0,
                            VERY_LOW = 10,
                            LOW = 20,
                            MEDIUM = 30,
                            HIGH = 40,
                            VERY_HIGH = 50
                        }
                    }

                    /** Properties of a RelativeDemandChangeType. */
                    interface IRelativeDemandChangeType {
                    }

                    /** Represents a RelativeDemandChangeType. */
                    class RelativeDemandChangeType implements IRelativeDemandChangeType {

                        /**
                         * Constructs a new RelativeDemandChangeType.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.IRelativeDemandChangeType);

                        /**
                         * Creates a new RelativeDemandChangeType instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RelativeDemandChangeType instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.IRelativeDemandChangeType): google.shopping.merchant.reports.v1.RelativeDemandChangeType;

                        /**
                         * Encodes the specified RelativeDemandChangeType message. Does not implicitly {@link google.shopping.merchant.reports.v1.RelativeDemandChangeType.verify|verify} messages.
                         * @param message RelativeDemandChangeType message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.IRelativeDemandChangeType, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RelativeDemandChangeType message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.RelativeDemandChangeType.verify|verify} messages.
                         * @param message RelativeDemandChangeType message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.IRelativeDemandChangeType, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RelativeDemandChangeType message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RelativeDemandChangeType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.RelativeDemandChangeType;

                        /**
                         * Decodes a RelativeDemandChangeType message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RelativeDemandChangeType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.RelativeDemandChangeType;

                        /**
                         * Verifies a RelativeDemandChangeType message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RelativeDemandChangeType message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RelativeDemandChangeType
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.RelativeDemandChangeType;

                        /**
                         * Creates a plain object from a RelativeDemandChangeType message. Also converts values to other types if specified.
                         * @param message RelativeDemandChangeType
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.RelativeDemandChangeType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RelativeDemandChangeType to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RelativeDemandChangeType
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace RelativeDemandChangeType {

                        /** RelativeDemandChangeTypeEnum enum. */
                        enum RelativeDemandChangeTypeEnum {
                            RELATIVE_DEMAND_CHANGE_TYPE_ENUM_UNSPECIFIED = 0,
                            SINKER = 1,
                            FLAT = 2,
                            RISER = 3
                        }
                    }

                    /** Properties of a TrafficSource. */
                    interface ITrafficSource {
                    }

                    /** Represents a TrafficSource. */
                    class TrafficSource implements ITrafficSource {

                        /**
                         * Constructs a new TrafficSource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1.ITrafficSource);

                        /**
                         * Creates a new TrafficSource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TrafficSource instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1.ITrafficSource): google.shopping.merchant.reports.v1.TrafficSource;

                        /**
                         * Encodes the specified TrafficSource message. Does not implicitly {@link google.shopping.merchant.reports.v1.TrafficSource.verify|verify} messages.
                         * @param message TrafficSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1.ITrafficSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TrafficSource message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1.TrafficSource.verify|verify} messages.
                         * @param message TrafficSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1.ITrafficSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TrafficSource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TrafficSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1.TrafficSource;

                        /**
                         * Decodes a TrafficSource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TrafficSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1.TrafficSource;

                        /**
                         * Verifies a TrafficSource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TrafficSource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TrafficSource
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1.TrafficSource;

                        /**
                         * Creates a plain object from a TrafficSource message. Also converts values to other types if specified.
                         * @param message TrafficSource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1.TrafficSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TrafficSource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TrafficSource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TrafficSource {

                        /** TrafficSourceEnum enum. */
                        enum TrafficSourceEnum {
                            TRAFFIC_SOURCE_ENUM_UNSPECIFIED = 0,
                            ORGANIC = 1,
                            ADS = 2,
                            ALL = 3
                        }
                    }
                }

                /** Namespace v1alpha. */
                namespace v1alpha {

                    /** Represents a ReportService */
                    class ReportService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ReportService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ReportService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ReportService;

                        /**
                         * Calls Search.
                         * @param request SearchRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SearchResponse
                         */
                        public search(request: google.shopping.merchant.reports.v1alpha.ISearchRequest, callback: google.shopping.merchant.reports.v1alpha.ReportService.SearchCallback): void;

                        /**
                         * Calls Search.
                         * @param request SearchRequest message or plain object
                         * @returns Promise
                         */
                        public search(request: google.shopping.merchant.reports.v1alpha.ISearchRequest): Promise<google.shopping.merchant.reports.v1alpha.SearchResponse>;
                    }

                    namespace ReportService {

                        /**
                         * Callback as used by {@link google.shopping.merchant.reports.v1alpha.ReportService|search}.
                         * @param error Error, if any
                         * @param [response] SearchResponse
                         */
                        type SearchCallback = (error: (Error|null), response?: google.shopping.merchant.reports.v1alpha.SearchResponse) => void;
                    }

                    /** Properties of a SearchRequest. */
                    interface ISearchRequest {

                        /** SearchRequest parent */
                        parent?: (string|null);

                        /** SearchRequest query */
                        query?: (string|null);

                        /** SearchRequest pageSize */
                        pageSize?: (number|null);

                        /** SearchRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a SearchRequest. */
                    class SearchRequest implements ISearchRequest {

                        /**
                         * Constructs a new SearchRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.ISearchRequest);

                        /** SearchRequest parent. */
                        public parent: string;

                        /** SearchRequest query. */
                        public query: string;

                        /** SearchRequest pageSize. */
                        public pageSize: number;

                        /** SearchRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new SearchRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.ISearchRequest): google.shopping.merchant.reports.v1alpha.SearchRequest;

                        /**
                         * Encodes the specified SearchRequest message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.SearchRequest.verify|verify} messages.
                         * @param message SearchRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.SearchRequest.verify|verify} messages.
                         * @param message SearchRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.SearchRequest;

                        /**
                         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.SearchRequest;

                        /**
                         * Verifies a SearchRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.SearchRequest;

                        /**
                         * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
                         * @param message SearchRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SearchResponse. */
                    interface ISearchResponse {

                        /** SearchResponse results */
                        results?: (google.shopping.merchant.reports.v1alpha.IReportRow[]|null);

                        /** SearchResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a SearchResponse. */
                    class SearchResponse implements ISearchResponse {

                        /**
                         * Constructs a new SearchResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.ISearchResponse);

                        /** SearchResponse results. */
                        public results: google.shopping.merchant.reports.v1alpha.IReportRow[];

                        /** SearchResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new SearchResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.ISearchResponse): google.shopping.merchant.reports.v1alpha.SearchResponse;

                        /**
                         * Encodes the specified SearchResponse message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.SearchResponse.verify|verify} messages.
                         * @param message SearchResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.SearchResponse.verify|verify} messages.
                         * @param message SearchResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.SearchResponse;

                        /**
                         * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.SearchResponse;

                        /**
                         * Verifies a SearchResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.SearchResponse;

                        /**
                         * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
                         * @param message SearchResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReportRow. */
                    interface IReportRow {

                        /** ReportRow productPerformanceView */
                        productPerformanceView?: (google.shopping.merchant.reports.v1alpha.IProductPerformanceView|null);

                        /** ReportRow nonProductPerformanceView */
                        nonProductPerformanceView?: (google.shopping.merchant.reports.v1alpha.INonProductPerformanceView|null);

                        /** ReportRow productView */
                        productView?: (google.shopping.merchant.reports.v1alpha.IProductView|null);

                        /** ReportRow priceCompetitivenessProductView */
                        priceCompetitivenessProductView?: (google.shopping.merchant.reports.v1alpha.IPriceCompetitivenessProductView|null);

                        /** ReportRow priceInsightsProductView */
                        priceInsightsProductView?: (google.shopping.merchant.reports.v1alpha.IPriceInsightsProductView|null);

                        /** ReportRow bestSellersProductClusterView */
                        bestSellersProductClusterView?: (google.shopping.merchant.reports.v1alpha.IBestSellersProductClusterView|null);

                        /** ReportRow bestSellersBrandView */
                        bestSellersBrandView?: (google.shopping.merchant.reports.v1alpha.IBestSellersBrandView|null);

                        /** ReportRow competitiveVisibilityCompetitorView */
                        competitiveVisibilityCompetitorView?: (google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityCompetitorView|null);

                        /** ReportRow competitiveVisibilityTopMerchantView */
                        competitiveVisibilityTopMerchantView?: (google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityTopMerchantView|null);

                        /** ReportRow competitiveVisibilityBenchmarkView */
                        competitiveVisibilityBenchmarkView?: (google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityBenchmarkView|null);

                        /** ReportRow youtubeCreatorPerformanceView */
                        youtubeCreatorPerformanceView?: (google.shopping.merchant.reports.v1alpha.IYoutubeCreatorPerformanceView|null);

                        /** ReportRow youtubeContentPerformanceView */
                        youtubeContentPerformanceView?: (google.shopping.merchant.reports.v1alpha.IYoutubeContentPerformanceView|null);

                        /** ReportRow youtubeProductPerformanceView */
                        youtubeProductPerformanceView?: (google.shopping.merchant.reports.v1alpha.IYoutubeProductPerformanceView|null);
                    }

                    /** Represents a ReportRow. */
                    class ReportRow implements IReportRow {

                        /**
                         * Constructs a new ReportRow.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IReportRow);

                        /** ReportRow productPerformanceView. */
                        public productPerformanceView?: (google.shopping.merchant.reports.v1alpha.IProductPerformanceView|null);

                        /** ReportRow nonProductPerformanceView. */
                        public nonProductPerformanceView?: (google.shopping.merchant.reports.v1alpha.INonProductPerformanceView|null);

                        /** ReportRow productView. */
                        public productView?: (google.shopping.merchant.reports.v1alpha.IProductView|null);

                        /** ReportRow priceCompetitivenessProductView. */
                        public priceCompetitivenessProductView?: (google.shopping.merchant.reports.v1alpha.IPriceCompetitivenessProductView|null);

                        /** ReportRow priceInsightsProductView. */
                        public priceInsightsProductView?: (google.shopping.merchant.reports.v1alpha.IPriceInsightsProductView|null);

                        /** ReportRow bestSellersProductClusterView. */
                        public bestSellersProductClusterView?: (google.shopping.merchant.reports.v1alpha.IBestSellersProductClusterView|null);

                        /** ReportRow bestSellersBrandView. */
                        public bestSellersBrandView?: (google.shopping.merchant.reports.v1alpha.IBestSellersBrandView|null);

                        /** ReportRow competitiveVisibilityCompetitorView. */
                        public competitiveVisibilityCompetitorView?: (google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityCompetitorView|null);

                        /** ReportRow competitiveVisibilityTopMerchantView. */
                        public competitiveVisibilityTopMerchantView?: (google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityTopMerchantView|null);

                        /** ReportRow competitiveVisibilityBenchmarkView. */
                        public competitiveVisibilityBenchmarkView?: (google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityBenchmarkView|null);

                        /** ReportRow youtubeCreatorPerformanceView. */
                        public youtubeCreatorPerformanceView?: (google.shopping.merchant.reports.v1alpha.IYoutubeCreatorPerformanceView|null);

                        /** ReportRow youtubeContentPerformanceView. */
                        public youtubeContentPerformanceView?: (google.shopping.merchant.reports.v1alpha.IYoutubeContentPerformanceView|null);

                        /** ReportRow youtubeProductPerformanceView. */
                        public youtubeProductPerformanceView?: (google.shopping.merchant.reports.v1alpha.IYoutubeProductPerformanceView|null);

                        /**
                         * Creates a new ReportRow instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReportRow instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IReportRow): google.shopping.merchant.reports.v1alpha.ReportRow;

                        /**
                         * Encodes the specified ReportRow message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ReportRow.verify|verify} messages.
                         * @param message ReportRow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IReportRow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReportRow message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ReportRow.verify|verify} messages.
                         * @param message ReportRow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IReportRow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReportRow message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReportRow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.ReportRow;

                        /**
                         * Decodes a ReportRow message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReportRow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.ReportRow;

                        /**
                         * Verifies a ReportRow message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReportRow message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReportRow
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.ReportRow;

                        /**
                         * Creates a plain object from a ReportRow message. Also converts values to other types if specified.
                         * @param message ReportRow
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.ReportRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReportRow to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReportRow
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductPerformanceView. */
                    interface IProductPerformanceView {

                        /** ProductPerformanceView marketingMethod */
                        marketingMethod?: (google.shopping.merchant.reports.v1alpha.MarketingMethod.MarketingMethodEnum|keyof typeof google.shopping.merchant.reports.v1alpha.MarketingMethod.MarketingMethodEnum|null);

                        /** ProductPerformanceView date */
                        date?: (google.type.IDate|null);

                        /** ProductPerformanceView week */
                        week?: (google.type.IDate|null);

                        /** ProductPerformanceView customerCountryCode */
                        customerCountryCode?: (string|null);

                        /** ProductPerformanceView offerId */
                        offerId?: (string|null);

                        /** ProductPerformanceView title */
                        title?: (string|null);

                        /** ProductPerformanceView brand */
                        brand?: (string|null);

                        /** ProductPerformanceView categoryL1 */
                        categoryL1?: (string|null);

                        /** ProductPerformanceView categoryL2 */
                        categoryL2?: (string|null);

                        /** ProductPerformanceView categoryL3 */
                        categoryL3?: (string|null);

                        /** ProductPerformanceView categoryL4 */
                        categoryL4?: (string|null);

                        /** ProductPerformanceView categoryL5 */
                        categoryL5?: (string|null);

                        /** ProductPerformanceView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** ProductPerformanceView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** ProductPerformanceView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** ProductPerformanceView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** ProductPerformanceView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** ProductPerformanceView customLabel0 */
                        customLabel0?: (string|null);

                        /** ProductPerformanceView customLabel1 */
                        customLabel1?: (string|null);

                        /** ProductPerformanceView customLabel2 */
                        customLabel2?: (string|null);

                        /** ProductPerformanceView customLabel3 */
                        customLabel3?: (string|null);

                        /** ProductPerformanceView customLabel4 */
                        customLabel4?: (string|null);

                        /** ProductPerformanceView clicks */
                        clicks?: (number|Long|string|null);

                        /** ProductPerformanceView impressions */
                        impressions?: (number|Long|string|null);

                        /** ProductPerformanceView clickThroughRate */
                        clickThroughRate?: (number|null);

                        /** ProductPerformanceView conversions */
                        conversions?: (number|null);

                        /** ProductPerformanceView conversionValue */
                        conversionValue?: (google.shopping.type.IPrice|null);

                        /** ProductPerformanceView conversionRate */
                        conversionRate?: (number|null);
                    }

                    /** Represents a ProductPerformanceView. */
                    class ProductPerformanceView implements IProductPerformanceView {

                        /**
                         * Constructs a new ProductPerformanceView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IProductPerformanceView);

                        /** ProductPerformanceView marketingMethod. */
                        public marketingMethod?: (google.shopping.merchant.reports.v1alpha.MarketingMethod.MarketingMethodEnum|keyof typeof google.shopping.merchant.reports.v1alpha.MarketingMethod.MarketingMethodEnum|null);

                        /** ProductPerformanceView date. */
                        public date?: (google.type.IDate|null);

                        /** ProductPerformanceView week. */
                        public week?: (google.type.IDate|null);

                        /** ProductPerformanceView customerCountryCode. */
                        public customerCountryCode?: (string|null);

                        /** ProductPerformanceView offerId. */
                        public offerId?: (string|null);

                        /** ProductPerformanceView title. */
                        public title?: (string|null);

                        /** ProductPerformanceView brand. */
                        public brand?: (string|null);

                        /** ProductPerformanceView categoryL1. */
                        public categoryL1?: (string|null);

                        /** ProductPerformanceView categoryL2. */
                        public categoryL2?: (string|null);

                        /** ProductPerformanceView categoryL3. */
                        public categoryL3?: (string|null);

                        /** ProductPerformanceView categoryL4. */
                        public categoryL4?: (string|null);

                        /** ProductPerformanceView categoryL5. */
                        public categoryL5?: (string|null);

                        /** ProductPerformanceView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** ProductPerformanceView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** ProductPerformanceView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** ProductPerformanceView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** ProductPerformanceView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** ProductPerformanceView customLabel0. */
                        public customLabel0?: (string|null);

                        /** ProductPerformanceView customLabel1. */
                        public customLabel1?: (string|null);

                        /** ProductPerformanceView customLabel2. */
                        public customLabel2?: (string|null);

                        /** ProductPerformanceView customLabel3. */
                        public customLabel3?: (string|null);

                        /** ProductPerformanceView customLabel4. */
                        public customLabel4?: (string|null);

                        /** ProductPerformanceView clicks. */
                        public clicks?: (number|Long|string|null);

                        /** ProductPerformanceView impressions. */
                        public impressions?: (number|Long|string|null);

                        /** ProductPerformanceView clickThroughRate. */
                        public clickThroughRate?: (number|null);

                        /** ProductPerformanceView conversions. */
                        public conversions?: (number|null);

                        /** ProductPerformanceView conversionValue. */
                        public conversionValue?: (google.shopping.type.IPrice|null);

                        /** ProductPerformanceView conversionRate. */
                        public conversionRate?: (number|null);

                        /**
                         * Creates a new ProductPerformanceView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductPerformanceView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IProductPerformanceView): google.shopping.merchant.reports.v1alpha.ProductPerformanceView;

                        /**
                         * Encodes the specified ProductPerformanceView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductPerformanceView.verify|verify} messages.
                         * @param message ProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductPerformanceView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductPerformanceView.verify|verify} messages.
                         * @param message ProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductPerformanceView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.ProductPerformanceView;

                        /**
                         * Decodes a ProductPerformanceView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.ProductPerformanceView;

                        /**
                         * Verifies a ProductPerformanceView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductPerformanceView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductPerformanceView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.ProductPerformanceView;

                        /**
                         * Creates a plain object from a ProductPerformanceView message. Also converts values to other types if specified.
                         * @param message ProductPerformanceView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.ProductPerformanceView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductPerformanceView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductPerformanceView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductView. */
                    interface IProductView {

                        /** ProductView id */
                        id?: (string|null);

                        /** ProductView channel */
                        channel?: (google.shopping.type.Channel.ChannelEnum|keyof typeof google.shopping.type.Channel.ChannelEnum|null);

                        /** ProductView languageCode */
                        languageCode?: (string|null);

                        /** ProductView feedLabel */
                        feedLabel?: (string|null);

                        /** ProductView offerId */
                        offerId?: (string|null);

                        /** ProductView title */
                        title?: (string|null);

                        /** ProductView brand */
                        brand?: (string|null);

                        /** ProductView categoryL1 */
                        categoryL1?: (string|null);

                        /** ProductView categoryL2 */
                        categoryL2?: (string|null);

                        /** ProductView categoryL3 */
                        categoryL3?: (string|null);

                        /** ProductView categoryL4 */
                        categoryL4?: (string|null);

                        /** ProductView categoryL5 */
                        categoryL5?: (string|null);

                        /** ProductView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** ProductView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** ProductView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** ProductView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** ProductView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** ProductView price */
                        price?: (google.shopping.type.IPrice|null);

                        /** ProductView condition */
                        condition?: (string|null);

                        /** ProductView availability */
                        availability?: (string|null);

                        /** ProductView shippingLabel */
                        shippingLabel?: (string|null);

                        /** ProductView gtin */
                        gtin?: (string[]|null);

                        /** ProductView itemGroupId */
                        itemGroupId?: (string|null);

                        /** ProductView thumbnailLink */
                        thumbnailLink?: (string|null);

                        /** ProductView creationTime */
                        creationTime?: (google.protobuf.ITimestamp|null);

                        /** ProductView expirationDate */
                        expirationDate?: (google.type.IDate|null);

                        /** ProductView aggregatedReportingContextStatus */
                        aggregatedReportingContextStatus?: (google.shopping.merchant.reports.v1alpha.ProductView.AggregatedReportingContextStatus|keyof typeof google.shopping.merchant.reports.v1alpha.ProductView.AggregatedReportingContextStatus|null);

                        /** ProductView itemIssues */
                        itemIssues?: (google.shopping.merchant.reports.v1alpha.ProductView.IItemIssue[]|null);

                        /** ProductView clickPotential */
                        clickPotential?: (google.shopping.merchant.reports.v1alpha.ProductView.ClickPotential|keyof typeof google.shopping.merchant.reports.v1alpha.ProductView.ClickPotential|null);

                        /** ProductView clickPotentialRank */
                        clickPotentialRank?: (number|Long|string|null);
                    }

                    /** Represents a ProductView. */
                    class ProductView implements IProductView {

                        /**
                         * Constructs a new ProductView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IProductView);

                        /** ProductView id. */
                        public id?: (string|null);

                        /** ProductView channel. */
                        public channel?: (google.shopping.type.Channel.ChannelEnum|keyof typeof google.shopping.type.Channel.ChannelEnum|null);

                        /** ProductView languageCode. */
                        public languageCode?: (string|null);

                        /** ProductView feedLabel. */
                        public feedLabel?: (string|null);

                        /** ProductView offerId. */
                        public offerId?: (string|null);

                        /** ProductView title. */
                        public title?: (string|null);

                        /** ProductView brand. */
                        public brand?: (string|null);

                        /** ProductView categoryL1. */
                        public categoryL1?: (string|null);

                        /** ProductView categoryL2. */
                        public categoryL2?: (string|null);

                        /** ProductView categoryL3. */
                        public categoryL3?: (string|null);

                        /** ProductView categoryL4. */
                        public categoryL4?: (string|null);

                        /** ProductView categoryL5. */
                        public categoryL5?: (string|null);

                        /** ProductView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** ProductView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** ProductView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** ProductView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** ProductView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** ProductView price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** ProductView condition. */
                        public condition?: (string|null);

                        /** ProductView availability. */
                        public availability?: (string|null);

                        /** ProductView shippingLabel. */
                        public shippingLabel?: (string|null);

                        /** ProductView gtin. */
                        public gtin: string[];

                        /** ProductView itemGroupId. */
                        public itemGroupId?: (string|null);

                        /** ProductView thumbnailLink. */
                        public thumbnailLink?: (string|null);

                        /** ProductView creationTime. */
                        public creationTime?: (google.protobuf.ITimestamp|null);

                        /** ProductView expirationDate. */
                        public expirationDate?: (google.type.IDate|null);

                        /** ProductView aggregatedReportingContextStatus. */
                        public aggregatedReportingContextStatus?: (google.shopping.merchant.reports.v1alpha.ProductView.AggregatedReportingContextStatus|keyof typeof google.shopping.merchant.reports.v1alpha.ProductView.AggregatedReportingContextStatus|null);

                        /** ProductView itemIssues. */
                        public itemIssues: google.shopping.merchant.reports.v1alpha.ProductView.IItemIssue[];

                        /** ProductView clickPotential. */
                        public clickPotential: (google.shopping.merchant.reports.v1alpha.ProductView.ClickPotential|keyof typeof google.shopping.merchant.reports.v1alpha.ProductView.ClickPotential);

                        /** ProductView clickPotentialRank. */
                        public clickPotentialRank?: (number|Long|string|null);

                        /**
                         * Creates a new ProductView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IProductView): google.shopping.merchant.reports.v1alpha.ProductView;

                        /**
                         * Encodes the specified ProductView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductView.verify|verify} messages.
                         * @param message ProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductView.verify|verify} messages.
                         * @param message ProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.ProductView;

                        /**
                         * Decodes a ProductView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.ProductView;

                        /**
                         * Verifies a ProductView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.ProductView;

                        /**
                         * Creates a plain object from a ProductView message. Also converts values to other types if specified.
                         * @param message ProductView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.ProductView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ProductView {

                        /** Properties of an ItemIssue. */
                        interface IItemIssue {

                            /** ItemIssue type */
                            type?: (google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueType|null);

                            /** ItemIssue severity */
                            severity?: (google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueSeverity|null);

                            /** ItemIssue resolution */
                            resolution?: (google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueResolution|keyof typeof google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueResolution|null);
                        }

                        /** Represents an ItemIssue. */
                        class ItemIssue implements IItemIssue {

                            /**
                             * Constructs a new ItemIssue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.reports.v1alpha.ProductView.IItemIssue);

                            /** ItemIssue type. */
                            public type?: (google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueType|null);

                            /** ItemIssue severity. */
                            public severity?: (google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueSeverity|null);

                            /** ItemIssue resolution. */
                            public resolution?: (google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueResolution|keyof typeof google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueResolution|null);

                            /**
                             * Creates a new ItemIssue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ItemIssue instance
                             */
                            public static create(properties?: google.shopping.merchant.reports.v1alpha.ProductView.IItemIssue): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue;

                            /**
                             * Encodes the specified ItemIssue message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.verify|verify} messages.
                             * @param message ItemIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.reports.v1alpha.ProductView.IItemIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ItemIssue message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.verify|verify} messages.
                             * @param message ItemIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.ProductView.IItemIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ItemIssue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ItemIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue;

                            /**
                             * Decodes an ItemIssue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ItemIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue;

                            /**
                             * Verifies an ItemIssue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ItemIssue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ItemIssue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue;

                            /**
                             * Creates a plain object from an ItemIssue message. Also converts values to other types if specified.
                             * @param message ItemIssue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ItemIssue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ItemIssue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ItemIssue {

                            /** Properties of an ItemIssueType. */
                            interface IItemIssueType {

                                /** ItemIssueType code */
                                code?: (string|null);

                                /** ItemIssueType canonicalAttribute */
                                canonicalAttribute?: (string|null);
                            }

                            /** Represents an ItemIssueType. */
                            class ItemIssueType implements IItemIssueType {

                                /**
                                 * Constructs a new ItemIssueType.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueType);

                                /** ItemIssueType code. */
                                public code?: (string|null);

                                /** ItemIssueType canonicalAttribute. */
                                public canonicalAttribute?: (string|null);

                                /**
                                 * Creates a new ItemIssueType instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ItemIssueType instance
                                 */
                                public static create(properties?: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueType): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Encodes the specified ItemIssueType message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueType.verify|verify} messages.
                                 * @param message ItemIssueType message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueType, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ItemIssueType message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueType.verify|verify} messages.
                                 * @param message ItemIssueType message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueType, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an ItemIssueType message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ItemIssueType
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Decodes an ItemIssueType message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ItemIssueType
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Verifies an ItemIssueType message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an ItemIssueType message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ItemIssueType
                                 */
                                public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Creates a plain object from an ItemIssueType message. Also converts values to other types if specified.
                                 * @param message ItemIssueType
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ItemIssueType to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ItemIssueType
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of an ItemIssueSeverity. */
                            interface IItemIssueSeverity {

                                /** ItemIssueSeverity severityPerReportingContext */
                                severityPerReportingContext?: (google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext[]|null);

                                /** ItemIssueSeverity aggregatedSeverity */
                                aggregatedSeverity?: (google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|keyof typeof google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|null);
                            }

                            /** Represents an ItemIssueSeverity. */
                            class ItemIssueSeverity implements IItemIssueSeverity {

                                /**
                                 * Constructs a new ItemIssueSeverity.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueSeverity);

                                /** ItemIssueSeverity severityPerReportingContext. */
                                public severityPerReportingContext: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext[];

                                /** ItemIssueSeverity aggregatedSeverity. */
                                public aggregatedSeverity?: (google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|keyof typeof google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|null);

                                /**
                                 * Creates a new ItemIssueSeverity instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ItemIssueSeverity instance
                                 */
                                public static create(properties?: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueSeverity): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Encodes the specified ItemIssueSeverity message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.verify|verify} messages.
                                 * @param message ItemIssueSeverity message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueSeverity, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ItemIssueSeverity message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.verify|verify} messages.
                                 * @param message ItemIssueSeverity message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.IItemIssueSeverity, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an ItemIssueSeverity message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ItemIssueSeverity
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Decodes an ItemIssueSeverity message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ItemIssueSeverity
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Verifies an ItemIssueSeverity message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an ItemIssueSeverity message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ItemIssueSeverity
                                 */
                                public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Creates a plain object from an ItemIssueSeverity message. Also converts values to other types if specified.
                                 * @param message ItemIssueSeverity
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ItemIssueSeverity to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ItemIssueSeverity
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            namespace ItemIssueSeverity {

                                /** Properties of an IssueSeverityPerReportingContext. */
                                interface IIssueSeverityPerReportingContext {

                                    /** IssueSeverityPerReportingContext reportingContext */
                                    reportingContext?: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum|null);

                                    /** IssueSeverityPerReportingContext disapprovedCountries */
                                    disapprovedCountries?: (string[]|null);

                                    /** IssueSeverityPerReportingContext demotedCountries */
                                    demotedCountries?: (string[]|null);
                                }

                                /** Represents an IssueSeverityPerReportingContext. */
                                class IssueSeverityPerReportingContext implements IIssueSeverityPerReportingContext {

                                    /**
                                     * Constructs a new IssueSeverityPerReportingContext.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext);

                                    /** IssueSeverityPerReportingContext reportingContext. */
                                    public reportingContext?: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum|null);

                                    /** IssueSeverityPerReportingContext disapprovedCountries. */
                                    public disapprovedCountries: string[];

                                    /** IssueSeverityPerReportingContext demotedCountries. */
                                    public demotedCountries: string[];

                                    /**
                                     * Creates a new IssueSeverityPerReportingContext instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns IssueSeverityPerReportingContext instance
                                     */
                                    public static create(properties?: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Encodes the specified IssueSeverityPerReportingContext message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext.verify|verify} messages.
                                     * @param message IssueSeverityPerReportingContext message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified IssueSeverityPerReportingContext message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext.verify|verify} messages.
                                     * @param message IssueSeverityPerReportingContext message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an IssueSeverityPerReportingContext message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns IssueSeverityPerReportingContext
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Decodes an IssueSeverityPerReportingContext message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns IssueSeverityPerReportingContext
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Verifies an IssueSeverityPerReportingContext message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an IssueSeverityPerReportingContext message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns IssueSeverityPerReportingContext
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Creates a plain object from an IssueSeverityPerReportingContext message. Also converts values to other types if specified.
                                     * @param message IssueSeverityPerReportingContext
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.shopping.merchant.reports.v1alpha.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this IssueSeverityPerReportingContext to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };

                                    /**
                                     * Gets the default type url for IssueSeverityPerReportingContext
                                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns The default type url
                                     */
                                    public static getTypeUrl(typeUrlPrefix?: string): string;
                                }

                                /** AggregatedIssueSeverity enum. */
                                enum AggregatedIssueSeverity {
                                    AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED = 0,
                                    DISAPPROVED = 1,
                                    DEMOTED = 2,
                                    PENDING = 3
                                }
                            }

                            /** ItemIssueResolution enum. */
                            enum ItemIssueResolution {
                                ITEM_ISSUE_RESOLUTION_UNSPECIFIED = 0,
                                MERCHANT_ACTION = 1,
                                PENDING_PROCESSING = 2
                            }
                        }

                        /** AggregatedReportingContextStatus enum. */
                        enum AggregatedReportingContextStatus {
                            AGGREGATED_REPORTING_CONTEXT_STATUS_UNSPECIFIED = 0,
                            NOT_ELIGIBLE_OR_DISAPPROVED = 1,
                            PENDING = 2,
                            ELIGIBLE_LIMITED = 3,
                            ELIGIBLE = 4
                        }

                        /** ClickPotential enum. */
                        enum ClickPotential {
                            CLICK_POTENTIAL_UNSPECIFIED = 0,
                            LOW = 1,
                            MEDIUM = 2,
                            HIGH = 3
                        }
                    }

                    /** Properties of a PriceCompetitivenessProductView. */
                    interface IPriceCompetitivenessProductView {

                        /** PriceCompetitivenessProductView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** PriceCompetitivenessProductView id */
                        id?: (string|null);

                        /** PriceCompetitivenessProductView offerId */
                        offerId?: (string|null);

                        /** PriceCompetitivenessProductView title */
                        title?: (string|null);

                        /** PriceCompetitivenessProductView brand */
                        brand?: (string|null);

                        /** PriceCompetitivenessProductView categoryL1 */
                        categoryL1?: (string|null);

                        /** PriceCompetitivenessProductView categoryL2 */
                        categoryL2?: (string|null);

                        /** PriceCompetitivenessProductView categoryL3 */
                        categoryL3?: (string|null);

                        /** PriceCompetitivenessProductView categoryL4 */
                        categoryL4?: (string|null);

                        /** PriceCompetitivenessProductView categoryL5 */
                        categoryL5?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** PriceCompetitivenessProductView price */
                        price?: (google.shopping.type.IPrice|null);

                        /** PriceCompetitivenessProductView benchmarkPrice */
                        benchmarkPrice?: (google.shopping.type.IPrice|null);
                    }

                    /** Represents a PriceCompetitivenessProductView. */
                    class PriceCompetitivenessProductView implements IPriceCompetitivenessProductView {

                        /**
                         * Constructs a new PriceCompetitivenessProductView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IPriceCompetitivenessProductView);

                        /** PriceCompetitivenessProductView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** PriceCompetitivenessProductView id. */
                        public id?: (string|null);

                        /** PriceCompetitivenessProductView offerId. */
                        public offerId?: (string|null);

                        /** PriceCompetitivenessProductView title. */
                        public title?: (string|null);

                        /** PriceCompetitivenessProductView brand. */
                        public brand?: (string|null);

                        /** PriceCompetitivenessProductView categoryL1. */
                        public categoryL1?: (string|null);

                        /** PriceCompetitivenessProductView categoryL2. */
                        public categoryL2?: (string|null);

                        /** PriceCompetitivenessProductView categoryL3. */
                        public categoryL3?: (string|null);

                        /** PriceCompetitivenessProductView categoryL4. */
                        public categoryL4?: (string|null);

                        /** PriceCompetitivenessProductView categoryL5. */
                        public categoryL5?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** PriceCompetitivenessProductView price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** PriceCompetitivenessProductView benchmarkPrice. */
                        public benchmarkPrice?: (google.shopping.type.IPrice|null);

                        /**
                         * Creates a new PriceCompetitivenessProductView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PriceCompetitivenessProductView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IPriceCompetitivenessProductView): google.shopping.merchant.reports.v1alpha.PriceCompetitivenessProductView;

                        /**
                         * Encodes the specified PriceCompetitivenessProductView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.PriceCompetitivenessProductView.verify|verify} messages.
                         * @param message PriceCompetitivenessProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IPriceCompetitivenessProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PriceCompetitivenessProductView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.PriceCompetitivenessProductView.verify|verify} messages.
                         * @param message PriceCompetitivenessProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IPriceCompetitivenessProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PriceCompetitivenessProductView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PriceCompetitivenessProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.PriceCompetitivenessProductView;

                        /**
                         * Decodes a PriceCompetitivenessProductView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PriceCompetitivenessProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.PriceCompetitivenessProductView;

                        /**
                         * Verifies a PriceCompetitivenessProductView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PriceCompetitivenessProductView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PriceCompetitivenessProductView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.PriceCompetitivenessProductView;

                        /**
                         * Creates a plain object from a PriceCompetitivenessProductView message. Also converts values to other types if specified.
                         * @param message PriceCompetitivenessProductView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.PriceCompetitivenessProductView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PriceCompetitivenessProductView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PriceCompetitivenessProductView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PriceInsightsProductView. */
                    interface IPriceInsightsProductView {

                        /** PriceInsightsProductView id */
                        id?: (string|null);

                        /** PriceInsightsProductView offerId */
                        offerId?: (string|null);

                        /** PriceInsightsProductView title */
                        title?: (string|null);

                        /** PriceInsightsProductView brand */
                        brand?: (string|null);

                        /** PriceInsightsProductView categoryL1 */
                        categoryL1?: (string|null);

                        /** PriceInsightsProductView categoryL2 */
                        categoryL2?: (string|null);

                        /** PriceInsightsProductView categoryL3 */
                        categoryL3?: (string|null);

                        /** PriceInsightsProductView categoryL4 */
                        categoryL4?: (string|null);

                        /** PriceInsightsProductView categoryL5 */
                        categoryL5?: (string|null);

                        /** PriceInsightsProductView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** PriceInsightsProductView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** PriceInsightsProductView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** PriceInsightsProductView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** PriceInsightsProductView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** PriceInsightsProductView price */
                        price?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView suggestedPrice */
                        suggestedPrice?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView predictedImpressionsChangeFraction */
                        predictedImpressionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedClicksChangeFraction */
                        predictedClicksChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedConversionsChangeFraction */
                        predictedConversionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView effectiveness */
                        effectiveness?: (google.shopping.merchant.reports.v1alpha.PriceInsightsProductView.Effectiveness|keyof typeof google.shopping.merchant.reports.v1alpha.PriceInsightsProductView.Effectiveness|null);
                    }

                    /** Represents a PriceInsightsProductView. */
                    class PriceInsightsProductView implements IPriceInsightsProductView {

                        /**
                         * Constructs a new PriceInsightsProductView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IPriceInsightsProductView);

                        /** PriceInsightsProductView id. */
                        public id?: (string|null);

                        /** PriceInsightsProductView offerId. */
                        public offerId?: (string|null);

                        /** PriceInsightsProductView title. */
                        public title?: (string|null);

                        /** PriceInsightsProductView brand. */
                        public brand?: (string|null);

                        /** PriceInsightsProductView categoryL1. */
                        public categoryL1?: (string|null);

                        /** PriceInsightsProductView categoryL2. */
                        public categoryL2?: (string|null);

                        /** PriceInsightsProductView categoryL3. */
                        public categoryL3?: (string|null);

                        /** PriceInsightsProductView categoryL4. */
                        public categoryL4?: (string|null);

                        /** PriceInsightsProductView categoryL5. */
                        public categoryL5?: (string|null);

                        /** PriceInsightsProductView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** PriceInsightsProductView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** PriceInsightsProductView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** PriceInsightsProductView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** PriceInsightsProductView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** PriceInsightsProductView price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView suggestedPrice. */
                        public suggestedPrice?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView predictedImpressionsChangeFraction. */
                        public predictedImpressionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedClicksChangeFraction. */
                        public predictedClicksChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedConversionsChangeFraction. */
                        public predictedConversionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView effectiveness. */
                        public effectiveness: (google.shopping.merchant.reports.v1alpha.PriceInsightsProductView.Effectiveness|keyof typeof google.shopping.merchant.reports.v1alpha.PriceInsightsProductView.Effectiveness);

                        /**
                         * Creates a new PriceInsightsProductView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PriceInsightsProductView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IPriceInsightsProductView): google.shopping.merchant.reports.v1alpha.PriceInsightsProductView;

                        /**
                         * Encodes the specified PriceInsightsProductView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.PriceInsightsProductView.verify|verify} messages.
                         * @param message PriceInsightsProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IPriceInsightsProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PriceInsightsProductView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.PriceInsightsProductView.verify|verify} messages.
                         * @param message PriceInsightsProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IPriceInsightsProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PriceInsightsProductView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PriceInsightsProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.PriceInsightsProductView;

                        /**
                         * Decodes a PriceInsightsProductView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PriceInsightsProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.PriceInsightsProductView;

                        /**
                         * Verifies a PriceInsightsProductView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PriceInsightsProductView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PriceInsightsProductView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.PriceInsightsProductView;

                        /**
                         * Creates a plain object from a PriceInsightsProductView message. Also converts values to other types if specified.
                         * @param message PriceInsightsProductView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.PriceInsightsProductView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PriceInsightsProductView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PriceInsightsProductView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PriceInsightsProductView {

                        /** Effectiveness enum. */
                        enum Effectiveness {
                            EFFECTIVENESS_UNSPECIFIED = 0,
                            LOW = 1,
                            MEDIUM = 2,
                            HIGH = 3
                        }
                    }

                    /** Properties of a BestSellersProductClusterView. */
                    interface IBestSellersProductClusterView {

                        /** BestSellersProductClusterView reportDate */
                        reportDate?: (google.type.IDate|null);

                        /** BestSellersProductClusterView reportGranularity */
                        reportGranularity?: (google.shopping.merchant.reports.v1alpha.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1alpha.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersProductClusterView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** BestSellersProductClusterView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** BestSellersProductClusterView title */
                        title?: (string|null);

                        /** BestSellersProductClusterView brand */
                        brand?: (string|null);

                        /** BestSellersProductClusterView categoryL1 */
                        categoryL1?: (string|null);

                        /** BestSellersProductClusterView categoryL2 */
                        categoryL2?: (string|null);

                        /** BestSellersProductClusterView categoryL3 */
                        categoryL3?: (string|null);

                        /** BestSellersProductClusterView categoryL4 */
                        categoryL4?: (string|null);

                        /** BestSellersProductClusterView categoryL5 */
                        categoryL5?: (string|null);

                        /** BestSellersProductClusterView variantGtins */
                        variantGtins?: (string[]|null);

                        /** BestSellersProductClusterView inventoryStatus */
                        inventoryStatus?: (google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView brandInventoryStatus */
                        brandInventoryStatus?: (google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView rank */
                        rank?: (number|Long|string|null);

                        /** BestSellersProductClusterView previousRank */
                        previousRank?: (number|Long|string|null);

                        /** BestSellersProductClusterView relativeDemand */
                        relativeDemand?: (google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView previousRelativeDemand */
                        previousRelativeDemand?: (google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView relativeDemandChange */
                        relativeDemandChange?: (google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);
                    }

                    /** Represents a BestSellersProductClusterView. */
                    class BestSellersProductClusterView implements IBestSellersProductClusterView {

                        /**
                         * Constructs a new BestSellersProductClusterView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IBestSellersProductClusterView);

                        /** BestSellersProductClusterView reportDate. */
                        public reportDate?: (google.type.IDate|null);

                        /** BestSellersProductClusterView reportGranularity. */
                        public reportGranularity?: (google.shopping.merchant.reports.v1alpha.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1alpha.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersProductClusterView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** BestSellersProductClusterView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** BestSellersProductClusterView title. */
                        public title?: (string|null);

                        /** BestSellersProductClusterView brand. */
                        public brand?: (string|null);

                        /** BestSellersProductClusterView categoryL1. */
                        public categoryL1?: (string|null);

                        /** BestSellersProductClusterView categoryL2. */
                        public categoryL2?: (string|null);

                        /** BestSellersProductClusterView categoryL3. */
                        public categoryL3?: (string|null);

                        /** BestSellersProductClusterView categoryL4. */
                        public categoryL4?: (string|null);

                        /** BestSellersProductClusterView categoryL5. */
                        public categoryL5?: (string|null);

                        /** BestSellersProductClusterView variantGtins. */
                        public variantGtins: string[];

                        /** BestSellersProductClusterView inventoryStatus. */
                        public inventoryStatus?: (google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView brandInventoryStatus. */
                        public brandInventoryStatus?: (google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView rank. */
                        public rank?: (number|Long|string|null);

                        /** BestSellersProductClusterView previousRank. */
                        public previousRank?: (number|Long|string|null);

                        /** BestSellersProductClusterView relativeDemand. */
                        public relativeDemand?: (google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView previousRelativeDemand. */
                        public previousRelativeDemand?: (google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView relativeDemandChange. */
                        public relativeDemandChange?: (google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);

                        /**
                         * Creates a new BestSellersProductClusterView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BestSellersProductClusterView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IBestSellersProductClusterView): google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView;

                        /**
                         * Encodes the specified BestSellersProductClusterView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView.verify|verify} messages.
                         * @param message BestSellersProductClusterView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IBestSellersProductClusterView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BestSellersProductClusterView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView.verify|verify} messages.
                         * @param message BestSellersProductClusterView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IBestSellersProductClusterView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BestSellersProductClusterView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BestSellersProductClusterView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView;

                        /**
                         * Decodes a BestSellersProductClusterView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BestSellersProductClusterView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView;

                        /**
                         * Verifies a BestSellersProductClusterView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BestSellersProductClusterView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BestSellersProductClusterView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView;

                        /**
                         * Creates a plain object from a BestSellersProductClusterView message. Also converts values to other types if specified.
                         * @param message BestSellersProductClusterView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.BestSellersProductClusterView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BestSellersProductClusterView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BestSellersProductClusterView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BestSellersProductClusterView {

                        /** InventoryStatus enum. */
                        enum InventoryStatus {
                            INVENTORY_STATUS_UNSPECIFIED = 0,
                            IN_STOCK = 1,
                            OUT_OF_STOCK = 2,
                            NOT_IN_INVENTORY = 3
                        }
                    }

                    /** Properties of a BestSellersBrandView. */
                    interface IBestSellersBrandView {

                        /** BestSellersBrandView reportDate */
                        reportDate?: (google.type.IDate|null);

                        /** BestSellersBrandView reportGranularity */
                        reportGranularity?: (google.shopping.merchant.reports.v1alpha.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1alpha.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersBrandView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** BestSellersBrandView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** BestSellersBrandView brand */
                        brand?: (string|null);

                        /** BestSellersBrandView rank */
                        rank?: (number|Long|string|null);

                        /** BestSellersBrandView previousRank */
                        previousRank?: (number|Long|string|null);

                        /** BestSellersBrandView relativeDemand */
                        relativeDemand?: (google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView previousRelativeDemand */
                        previousRelativeDemand?: (google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView relativeDemandChange */
                        relativeDemandChange?: (google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);
                    }

                    /** Represents a BestSellersBrandView. */
                    class BestSellersBrandView implements IBestSellersBrandView {

                        /**
                         * Constructs a new BestSellersBrandView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IBestSellersBrandView);

                        /** BestSellersBrandView reportDate. */
                        public reportDate?: (google.type.IDate|null);

                        /** BestSellersBrandView reportGranularity. */
                        public reportGranularity?: (google.shopping.merchant.reports.v1alpha.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1alpha.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersBrandView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** BestSellersBrandView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** BestSellersBrandView brand. */
                        public brand?: (string|null);

                        /** BestSellersBrandView rank. */
                        public rank?: (number|Long|string|null);

                        /** BestSellersBrandView previousRank. */
                        public previousRank?: (number|Long|string|null);

                        /** BestSellersBrandView relativeDemand. */
                        public relativeDemand?: (google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView previousRelativeDemand. */
                        public previousRelativeDemand?: (google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView relativeDemandChange. */
                        public relativeDemandChange?: (google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);

                        /**
                         * Creates a new BestSellersBrandView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BestSellersBrandView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IBestSellersBrandView): google.shopping.merchant.reports.v1alpha.BestSellersBrandView;

                        /**
                         * Encodes the specified BestSellersBrandView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.BestSellersBrandView.verify|verify} messages.
                         * @param message BestSellersBrandView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IBestSellersBrandView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BestSellersBrandView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.BestSellersBrandView.verify|verify} messages.
                         * @param message BestSellersBrandView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IBestSellersBrandView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BestSellersBrandView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BestSellersBrandView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.BestSellersBrandView;

                        /**
                         * Decodes a BestSellersBrandView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BestSellersBrandView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.BestSellersBrandView;

                        /**
                         * Verifies a BestSellersBrandView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BestSellersBrandView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BestSellersBrandView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.BestSellersBrandView;

                        /**
                         * Creates a plain object from a BestSellersBrandView message. Also converts values to other types if specified.
                         * @param message BestSellersBrandView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.BestSellersBrandView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BestSellersBrandView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BestSellersBrandView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NonProductPerformanceView. */
                    interface INonProductPerformanceView {

                        /** NonProductPerformanceView date */
                        date?: (google.type.IDate|null);

                        /** NonProductPerformanceView week */
                        week?: (google.type.IDate|null);

                        /** NonProductPerformanceView clicks */
                        clicks?: (number|Long|string|null);

                        /** NonProductPerformanceView impressions */
                        impressions?: (number|Long|string|null);

                        /** NonProductPerformanceView clickThroughRate */
                        clickThroughRate?: (number|null);
                    }

                    /** Represents a NonProductPerformanceView. */
                    class NonProductPerformanceView implements INonProductPerformanceView {

                        /**
                         * Constructs a new NonProductPerformanceView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.INonProductPerformanceView);

                        /** NonProductPerformanceView date. */
                        public date?: (google.type.IDate|null);

                        /** NonProductPerformanceView week. */
                        public week?: (google.type.IDate|null);

                        /** NonProductPerformanceView clicks. */
                        public clicks?: (number|Long|string|null);

                        /** NonProductPerformanceView impressions. */
                        public impressions?: (number|Long|string|null);

                        /** NonProductPerformanceView clickThroughRate. */
                        public clickThroughRate?: (number|null);

                        /**
                         * Creates a new NonProductPerformanceView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NonProductPerformanceView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.INonProductPerformanceView): google.shopping.merchant.reports.v1alpha.NonProductPerformanceView;

                        /**
                         * Encodes the specified NonProductPerformanceView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.NonProductPerformanceView.verify|verify} messages.
                         * @param message NonProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.INonProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NonProductPerformanceView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.NonProductPerformanceView.verify|verify} messages.
                         * @param message NonProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.INonProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NonProductPerformanceView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NonProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.NonProductPerformanceView;

                        /**
                         * Decodes a NonProductPerformanceView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NonProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.NonProductPerformanceView;

                        /**
                         * Verifies a NonProductPerformanceView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NonProductPerformanceView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NonProductPerformanceView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.NonProductPerformanceView;

                        /**
                         * Creates a plain object from a NonProductPerformanceView message. Also converts values to other types if specified.
                         * @param message NonProductPerformanceView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.NonProductPerformanceView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NonProductPerformanceView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NonProductPerformanceView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CompetitiveVisibilityCompetitorView. */
                    interface ICompetitiveVisibilityCompetitorView {

                        /** CompetitiveVisibilityCompetitorView date */
                        date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityCompetitorView domain */
                        domain?: (string|null);

                        /** CompetitiveVisibilityCompetitorView isYourDomain */
                        isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityCompetitorView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityCompetitorView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView trafficSource */
                        trafficSource?: (google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityCompetitorView rank */
                        rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView adsOrganicRatio */
                        adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityCompetitorView pageOverlapRate */
                        pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView higherPositionRate */
                        higherPositionRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView relativeVisibility */
                        relativeVisibility?: (number|null);
                    }

                    /** Represents a CompetitiveVisibilityCompetitorView. */
                    class CompetitiveVisibilityCompetitorView implements ICompetitiveVisibilityCompetitorView {

                        /**
                         * Constructs a new CompetitiveVisibilityCompetitorView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityCompetitorView);

                        /** CompetitiveVisibilityCompetitorView date. */
                        public date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityCompetitorView domain. */
                        public domain?: (string|null);

                        /** CompetitiveVisibilityCompetitorView isYourDomain. */
                        public isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityCompetitorView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityCompetitorView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView trafficSource. */
                        public trafficSource?: (google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityCompetitorView rank. */
                        public rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView adsOrganicRatio. */
                        public adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityCompetitorView pageOverlapRate. */
                        public pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView higherPositionRate. */
                        public higherPositionRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView relativeVisibility. */
                        public relativeVisibility?: (number|null);

                        /**
                         * Creates a new CompetitiveVisibilityCompetitorView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompetitiveVisibilityCompetitorView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityCompetitorView): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityCompetitorView;

                        /**
                         * Encodes the specified CompetitiveVisibilityCompetitorView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityCompetitorView.verify|verify} messages.
                         * @param message CompetitiveVisibilityCompetitorView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityCompetitorView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompetitiveVisibilityCompetitorView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityCompetitorView.verify|verify} messages.
                         * @param message CompetitiveVisibilityCompetitorView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityCompetitorView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompetitiveVisibilityCompetitorView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompetitiveVisibilityCompetitorView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityCompetitorView;

                        /**
                         * Decodes a CompetitiveVisibilityCompetitorView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompetitiveVisibilityCompetitorView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityCompetitorView;

                        /**
                         * Verifies a CompetitiveVisibilityCompetitorView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompetitiveVisibilityCompetitorView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompetitiveVisibilityCompetitorView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityCompetitorView;

                        /**
                         * Creates a plain object from a CompetitiveVisibilityCompetitorView message. Also converts values to other types if specified.
                         * @param message CompetitiveVisibilityCompetitorView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityCompetitorView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompetitiveVisibilityCompetitorView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CompetitiveVisibilityCompetitorView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CompetitiveVisibilityTopMerchantView. */
                    interface ICompetitiveVisibilityTopMerchantView {

                        /** CompetitiveVisibilityTopMerchantView date */
                        date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityTopMerchantView domain */
                        domain?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView isYourDomain */
                        isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityTopMerchantView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView trafficSource */
                        trafficSource?: (google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityTopMerchantView rank */
                        rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView adsOrganicRatio */
                        adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView pageOverlapRate */
                        pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView higherPositionRate */
                        higherPositionRate?: (number|null);
                    }

                    /** Represents a CompetitiveVisibilityTopMerchantView. */
                    class CompetitiveVisibilityTopMerchantView implements ICompetitiveVisibilityTopMerchantView {

                        /**
                         * Constructs a new CompetitiveVisibilityTopMerchantView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityTopMerchantView);

                        /** CompetitiveVisibilityTopMerchantView date. */
                        public date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityTopMerchantView domain. */
                        public domain?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView isYourDomain. */
                        public isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityTopMerchantView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView trafficSource. */
                        public trafficSource?: (google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityTopMerchantView rank. */
                        public rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView adsOrganicRatio. */
                        public adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView pageOverlapRate. */
                        public pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView higherPositionRate. */
                        public higherPositionRate?: (number|null);

                        /**
                         * Creates a new CompetitiveVisibilityTopMerchantView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompetitiveVisibilityTopMerchantView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityTopMerchantView): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Encodes the specified CompetitiveVisibilityTopMerchantView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityTopMerchantView.verify|verify} messages.
                         * @param message CompetitiveVisibilityTopMerchantView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityTopMerchantView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompetitiveVisibilityTopMerchantView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityTopMerchantView.verify|verify} messages.
                         * @param message CompetitiveVisibilityTopMerchantView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityTopMerchantView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompetitiveVisibilityTopMerchantView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompetitiveVisibilityTopMerchantView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Decodes a CompetitiveVisibilityTopMerchantView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompetitiveVisibilityTopMerchantView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Verifies a CompetitiveVisibilityTopMerchantView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompetitiveVisibilityTopMerchantView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompetitiveVisibilityTopMerchantView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Creates a plain object from a CompetitiveVisibilityTopMerchantView message. Also converts values to other types if specified.
                         * @param message CompetitiveVisibilityTopMerchantView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityTopMerchantView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompetitiveVisibilityTopMerchantView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CompetitiveVisibilityTopMerchantView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CompetitiveVisibilityBenchmarkView. */
                    interface ICompetitiveVisibilityBenchmarkView {

                        /** CompetitiveVisibilityBenchmarkView date */
                        date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityBenchmarkView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityBenchmarkView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityBenchmarkView trafficSource */
                        trafficSource?: (google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityBenchmarkView yourDomainVisibilityTrend */
                        yourDomainVisibilityTrend?: (number|null);

                        /** CompetitiveVisibilityBenchmarkView categoryBenchmarkVisibilityTrend */
                        categoryBenchmarkVisibilityTrend?: (number|null);
                    }

                    /** Represents a CompetitiveVisibilityBenchmarkView. */
                    class CompetitiveVisibilityBenchmarkView implements ICompetitiveVisibilityBenchmarkView {

                        /**
                         * Constructs a new CompetitiveVisibilityBenchmarkView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityBenchmarkView);

                        /** CompetitiveVisibilityBenchmarkView date. */
                        public date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityBenchmarkView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityBenchmarkView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityBenchmarkView trafficSource. */
                        public trafficSource?: (google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1alpha.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityBenchmarkView yourDomainVisibilityTrend. */
                        public yourDomainVisibilityTrend?: (number|null);

                        /** CompetitiveVisibilityBenchmarkView categoryBenchmarkVisibilityTrend. */
                        public categoryBenchmarkVisibilityTrend?: (number|null);

                        /**
                         * Creates a new CompetitiveVisibilityBenchmarkView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompetitiveVisibilityBenchmarkView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityBenchmarkView): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Encodes the specified CompetitiveVisibilityBenchmarkView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityBenchmarkView.verify|verify} messages.
                         * @param message CompetitiveVisibilityBenchmarkView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityBenchmarkView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompetitiveVisibilityBenchmarkView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityBenchmarkView.verify|verify} messages.
                         * @param message CompetitiveVisibilityBenchmarkView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.ICompetitiveVisibilityBenchmarkView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompetitiveVisibilityBenchmarkView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompetitiveVisibilityBenchmarkView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Decodes a CompetitiveVisibilityBenchmarkView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompetitiveVisibilityBenchmarkView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Verifies a CompetitiveVisibilityBenchmarkView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompetitiveVisibilityBenchmarkView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompetitiveVisibilityBenchmarkView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Creates a plain object from a CompetitiveVisibilityBenchmarkView message. Also converts values to other types if specified.
                         * @param message CompetitiveVisibilityBenchmarkView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.CompetitiveVisibilityBenchmarkView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompetitiveVisibilityBenchmarkView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CompetitiveVisibilityBenchmarkView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MarketingMethod. */
                    interface IMarketingMethod {
                    }

                    /** Represents a MarketingMethod. */
                    class MarketingMethod implements IMarketingMethod {

                        /**
                         * Constructs a new MarketingMethod.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IMarketingMethod);

                        /**
                         * Creates a new MarketingMethod instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MarketingMethod instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IMarketingMethod): google.shopping.merchant.reports.v1alpha.MarketingMethod;

                        /**
                         * Encodes the specified MarketingMethod message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.MarketingMethod.verify|verify} messages.
                         * @param message MarketingMethod message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IMarketingMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MarketingMethod message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.MarketingMethod.verify|verify} messages.
                         * @param message MarketingMethod message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IMarketingMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MarketingMethod message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MarketingMethod
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.MarketingMethod;

                        /**
                         * Decodes a MarketingMethod message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MarketingMethod
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.MarketingMethod;

                        /**
                         * Verifies a MarketingMethod message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MarketingMethod message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MarketingMethod
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.MarketingMethod;

                        /**
                         * Creates a plain object from a MarketingMethod message. Also converts values to other types if specified.
                         * @param message MarketingMethod
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.MarketingMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MarketingMethod to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MarketingMethod
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MarketingMethod {

                        /** MarketingMethodEnum enum. */
                        enum MarketingMethodEnum {
                            MARKETING_METHOD_ENUM_UNSPECIFIED = 0,
                            ORGANIC = 1,
                            ADS = 2
                        }
                    }

                    /** Properties of a ReportGranularity. */
                    interface IReportGranularity {
                    }

                    /** Represents a ReportGranularity. */
                    class ReportGranularity implements IReportGranularity {

                        /**
                         * Constructs a new ReportGranularity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IReportGranularity);

                        /**
                         * Creates a new ReportGranularity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReportGranularity instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IReportGranularity): google.shopping.merchant.reports.v1alpha.ReportGranularity;

                        /**
                         * Encodes the specified ReportGranularity message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ReportGranularity.verify|verify} messages.
                         * @param message ReportGranularity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IReportGranularity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReportGranularity message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.ReportGranularity.verify|verify} messages.
                         * @param message ReportGranularity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IReportGranularity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReportGranularity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReportGranularity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.ReportGranularity;

                        /**
                         * Decodes a ReportGranularity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReportGranularity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.ReportGranularity;

                        /**
                         * Verifies a ReportGranularity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReportGranularity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReportGranularity
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.ReportGranularity;

                        /**
                         * Creates a plain object from a ReportGranularity message. Also converts values to other types if specified.
                         * @param message ReportGranularity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.ReportGranularity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReportGranularity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReportGranularity
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ReportGranularity {

                        /** ReportGranularityEnum enum. */
                        enum ReportGranularityEnum {
                            REPORT_GRANULARITY_ENUM_UNSPECIFIED = 0,
                            WEEKLY = 1,
                            MONTHLY = 2
                        }
                    }

                    /** Properties of a RelativeDemand. */
                    interface IRelativeDemand {
                    }

                    /** Represents a RelativeDemand. */
                    class RelativeDemand implements IRelativeDemand {

                        /**
                         * Constructs a new RelativeDemand.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IRelativeDemand);

                        /**
                         * Creates a new RelativeDemand instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RelativeDemand instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IRelativeDemand): google.shopping.merchant.reports.v1alpha.RelativeDemand;

                        /**
                         * Encodes the specified RelativeDemand message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.RelativeDemand.verify|verify} messages.
                         * @param message RelativeDemand message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IRelativeDemand, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RelativeDemand message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.RelativeDemand.verify|verify} messages.
                         * @param message RelativeDemand message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IRelativeDemand, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RelativeDemand message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RelativeDemand
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.RelativeDemand;

                        /**
                         * Decodes a RelativeDemand message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RelativeDemand
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.RelativeDemand;

                        /**
                         * Verifies a RelativeDemand message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RelativeDemand message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RelativeDemand
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.RelativeDemand;

                        /**
                         * Creates a plain object from a RelativeDemand message. Also converts values to other types if specified.
                         * @param message RelativeDemand
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.RelativeDemand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RelativeDemand to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RelativeDemand
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace RelativeDemand {

                        /** RelativeDemandEnum enum. */
                        enum RelativeDemandEnum {
                            RELATIVE_DEMAND_ENUM_UNSPECIFIED = 0,
                            VERY_LOW = 10,
                            LOW = 20,
                            MEDIUM = 30,
                            HIGH = 40,
                            VERY_HIGH = 50
                        }
                    }

                    /** Properties of a RelativeDemandChangeType. */
                    interface IRelativeDemandChangeType {
                    }

                    /** Represents a RelativeDemandChangeType. */
                    class RelativeDemandChangeType implements IRelativeDemandChangeType {

                        /**
                         * Constructs a new RelativeDemandChangeType.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IRelativeDemandChangeType);

                        /**
                         * Creates a new RelativeDemandChangeType instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RelativeDemandChangeType instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IRelativeDemandChangeType): google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType;

                        /**
                         * Encodes the specified RelativeDemandChangeType message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType.verify|verify} messages.
                         * @param message RelativeDemandChangeType message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IRelativeDemandChangeType, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RelativeDemandChangeType message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType.verify|verify} messages.
                         * @param message RelativeDemandChangeType message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IRelativeDemandChangeType, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RelativeDemandChangeType message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RelativeDemandChangeType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType;

                        /**
                         * Decodes a RelativeDemandChangeType message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RelativeDemandChangeType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType;

                        /**
                         * Verifies a RelativeDemandChangeType message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RelativeDemandChangeType message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RelativeDemandChangeType
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType;

                        /**
                         * Creates a plain object from a RelativeDemandChangeType message. Also converts values to other types if specified.
                         * @param message RelativeDemandChangeType
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.RelativeDemandChangeType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RelativeDemandChangeType to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RelativeDemandChangeType
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace RelativeDemandChangeType {

                        /** RelativeDemandChangeTypeEnum enum. */
                        enum RelativeDemandChangeTypeEnum {
                            RELATIVE_DEMAND_CHANGE_TYPE_ENUM_UNSPECIFIED = 0,
                            SINKER = 1,
                            FLAT = 2,
                            RISER = 3
                        }
                    }

                    /** Properties of a TrafficSource. */
                    interface ITrafficSource {
                    }

                    /** Represents a TrafficSource. */
                    class TrafficSource implements ITrafficSource {

                        /**
                         * Constructs a new TrafficSource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.ITrafficSource);

                        /**
                         * Creates a new TrafficSource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TrafficSource instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.ITrafficSource): google.shopping.merchant.reports.v1alpha.TrafficSource;

                        /**
                         * Encodes the specified TrafficSource message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.TrafficSource.verify|verify} messages.
                         * @param message TrafficSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.ITrafficSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TrafficSource message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.TrafficSource.verify|verify} messages.
                         * @param message TrafficSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.ITrafficSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TrafficSource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TrafficSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.TrafficSource;

                        /**
                         * Decodes a TrafficSource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TrafficSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.TrafficSource;

                        /**
                         * Verifies a TrafficSource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TrafficSource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TrafficSource
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.TrafficSource;

                        /**
                         * Creates a plain object from a TrafficSource message. Also converts values to other types if specified.
                         * @param message TrafficSource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.TrafficSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TrafficSource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TrafficSource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TrafficSource {

                        /** TrafficSourceEnum enum. */
                        enum TrafficSourceEnum {
                            TRAFFIC_SOURCE_ENUM_UNSPECIFIED = 0,
                            ORGANIC = 1,
                            ADS = 2,
                            ALL = 3
                        }
                    }

                    /** Properties of a YoutubeCreatorPerformanceView. */
                    interface IYoutubeCreatorPerformanceView {

                        /** YoutubeCreatorPerformanceView date */
                        date?: (google.type.IDate|null);

                        /** YoutubeCreatorPerformanceView title */
                        title?: (string|null);

                        /** YoutubeCreatorPerformanceView channelId */
                        channelId?: (string|null);

                        /** YoutubeCreatorPerformanceView grossSales */
                        grossSales?: (google.shopping.type.IPrice|null);

                        /** YoutubeCreatorPerformanceView commissions */
                        commissions?: (google.shopping.type.IPrice|null);

                        /** YoutubeCreatorPerformanceView orders */
                        orders?: (number|Long|string|null);

                        /** YoutubeCreatorPerformanceView views */
                        views?: (number|Long|string|null);

                        /** YoutubeCreatorPerformanceView clicks */
                        clicks?: (number|Long|string|null);

                        /** YoutubeCreatorPerformanceView netSales */
                        netSales?: (google.shopping.type.IPrice|null);
                    }

                    /** Represents a YoutubeCreatorPerformanceView. */
                    class YoutubeCreatorPerformanceView implements IYoutubeCreatorPerformanceView {

                        /**
                         * Constructs a new YoutubeCreatorPerformanceView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IYoutubeCreatorPerformanceView);

                        /** YoutubeCreatorPerformanceView date. */
                        public date?: (google.type.IDate|null);

                        /** YoutubeCreatorPerformanceView title. */
                        public title?: (string|null);

                        /** YoutubeCreatorPerformanceView channelId. */
                        public channelId?: (string|null);

                        /** YoutubeCreatorPerformanceView grossSales. */
                        public grossSales?: (google.shopping.type.IPrice|null);

                        /** YoutubeCreatorPerformanceView commissions. */
                        public commissions?: (google.shopping.type.IPrice|null);

                        /** YoutubeCreatorPerformanceView orders. */
                        public orders?: (number|Long|string|null);

                        /** YoutubeCreatorPerformanceView views. */
                        public views?: (number|Long|string|null);

                        /** YoutubeCreatorPerformanceView clicks. */
                        public clicks?: (number|Long|string|null);

                        /** YoutubeCreatorPerformanceView netSales. */
                        public netSales?: (google.shopping.type.IPrice|null);

                        /**
                         * Creates a new YoutubeCreatorPerformanceView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns YoutubeCreatorPerformanceView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IYoutubeCreatorPerformanceView): google.shopping.merchant.reports.v1alpha.YoutubeCreatorPerformanceView;

                        /**
                         * Encodes the specified YoutubeCreatorPerformanceView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.YoutubeCreatorPerformanceView.verify|verify} messages.
                         * @param message YoutubeCreatorPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IYoutubeCreatorPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified YoutubeCreatorPerformanceView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.YoutubeCreatorPerformanceView.verify|verify} messages.
                         * @param message YoutubeCreatorPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IYoutubeCreatorPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a YoutubeCreatorPerformanceView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns YoutubeCreatorPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.YoutubeCreatorPerformanceView;

                        /**
                         * Decodes a YoutubeCreatorPerformanceView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns YoutubeCreatorPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.YoutubeCreatorPerformanceView;

                        /**
                         * Verifies a YoutubeCreatorPerformanceView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a YoutubeCreatorPerformanceView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns YoutubeCreatorPerformanceView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.YoutubeCreatorPerformanceView;

                        /**
                         * Creates a plain object from a YoutubeCreatorPerformanceView message. Also converts values to other types if specified.
                         * @param message YoutubeCreatorPerformanceView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.YoutubeCreatorPerformanceView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this YoutubeCreatorPerformanceView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for YoutubeCreatorPerformanceView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a YoutubeContentPerformanceView. */
                    interface IYoutubeContentPerformanceView {

                        /** YoutubeContentPerformanceView date */
                        date?: (google.type.IDate|null);

                        /** YoutubeContentPerformanceView title */
                        title?: (string|null);

                        /** YoutubeContentPerformanceView videoId */
                        videoId?: (string|null);

                        /** YoutubeContentPerformanceView channelTitle */
                        channelTitle?: (string|null);

                        /** YoutubeContentPerformanceView channelId */
                        channelId?: (string|null);

                        /** YoutubeContentPerformanceView grossSales */
                        grossSales?: (google.shopping.type.IPrice|null);

                        /** YoutubeContentPerformanceView commissions */
                        commissions?: (google.shopping.type.IPrice|null);

                        /** YoutubeContentPerformanceView orders */
                        orders?: (number|Long|string|null);

                        /** YoutubeContentPerformanceView views */
                        views?: (number|Long|string|null);

                        /** YoutubeContentPerformanceView clicks */
                        clicks?: (number|Long|string|null);

                        /** YoutubeContentPerformanceView netSales */
                        netSales?: (google.shopping.type.IPrice|null);

                        /** YoutubeContentPerformanceView taggedProductIds */
                        taggedProductIds?: (string[]|null);
                    }

                    /** Represents a YoutubeContentPerformanceView. */
                    class YoutubeContentPerformanceView implements IYoutubeContentPerformanceView {

                        /**
                         * Constructs a new YoutubeContentPerformanceView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IYoutubeContentPerformanceView);

                        /** YoutubeContentPerformanceView date. */
                        public date?: (google.type.IDate|null);

                        /** YoutubeContentPerformanceView title. */
                        public title?: (string|null);

                        /** YoutubeContentPerformanceView videoId. */
                        public videoId?: (string|null);

                        /** YoutubeContentPerformanceView channelTitle. */
                        public channelTitle?: (string|null);

                        /** YoutubeContentPerformanceView channelId. */
                        public channelId?: (string|null);

                        /** YoutubeContentPerformanceView grossSales. */
                        public grossSales?: (google.shopping.type.IPrice|null);

                        /** YoutubeContentPerformanceView commissions. */
                        public commissions?: (google.shopping.type.IPrice|null);

                        /** YoutubeContentPerformanceView orders. */
                        public orders?: (number|Long|string|null);

                        /** YoutubeContentPerformanceView views. */
                        public views?: (number|Long|string|null);

                        /** YoutubeContentPerformanceView clicks. */
                        public clicks?: (number|Long|string|null);

                        /** YoutubeContentPerformanceView netSales. */
                        public netSales?: (google.shopping.type.IPrice|null);

                        /** YoutubeContentPerformanceView taggedProductIds. */
                        public taggedProductIds: string[];

                        /**
                         * Creates a new YoutubeContentPerformanceView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns YoutubeContentPerformanceView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IYoutubeContentPerformanceView): google.shopping.merchant.reports.v1alpha.YoutubeContentPerformanceView;

                        /**
                         * Encodes the specified YoutubeContentPerformanceView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.YoutubeContentPerformanceView.verify|verify} messages.
                         * @param message YoutubeContentPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IYoutubeContentPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified YoutubeContentPerformanceView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.YoutubeContentPerformanceView.verify|verify} messages.
                         * @param message YoutubeContentPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IYoutubeContentPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a YoutubeContentPerformanceView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns YoutubeContentPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.YoutubeContentPerformanceView;

                        /**
                         * Decodes a YoutubeContentPerformanceView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns YoutubeContentPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.YoutubeContentPerformanceView;

                        /**
                         * Verifies a YoutubeContentPerformanceView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a YoutubeContentPerformanceView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns YoutubeContentPerformanceView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.YoutubeContentPerformanceView;

                        /**
                         * Creates a plain object from a YoutubeContentPerformanceView message. Also converts values to other types if specified.
                         * @param message YoutubeContentPerformanceView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.YoutubeContentPerformanceView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this YoutubeContentPerformanceView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for YoutubeContentPerformanceView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a YoutubeProductPerformanceView. */
                    interface IYoutubeProductPerformanceView {

                        /** YoutubeProductPerformanceView date */
                        date?: (google.type.IDate|null);

                        /** YoutubeProductPerformanceView title */
                        title?: (string|null);

                        /** YoutubeProductPerformanceView offerId */
                        offerId?: (string|null);

                        /** YoutubeProductPerformanceView distinctVideoCount */
                        distinctVideoCount?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView distinctCreatorCount */
                        distinctCreatorCount?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView grossSales */
                        grossSales?: (google.shopping.type.IPrice|null);

                        /** YoutubeProductPerformanceView commissions */
                        commissions?: (google.shopping.type.IPrice|null);

                        /** YoutubeProductPerformanceView orders */
                        orders?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView views */
                        views?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView clicks */
                        clicks?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView netSales */
                        netSales?: (google.shopping.type.IPrice|null);

                        /** YoutubeProductPerformanceView taggedCreatorCount */
                        taggedCreatorCount?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView taggedVideoCount */
                        taggedVideoCount?: (number|Long|string|null);
                    }

                    /** Represents a YoutubeProductPerformanceView. */
                    class YoutubeProductPerformanceView implements IYoutubeProductPerformanceView {

                        /**
                         * Constructs a new YoutubeProductPerformanceView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1alpha.IYoutubeProductPerformanceView);

                        /** YoutubeProductPerformanceView date. */
                        public date?: (google.type.IDate|null);

                        /** YoutubeProductPerformanceView title. */
                        public title?: (string|null);

                        /** YoutubeProductPerformanceView offerId. */
                        public offerId?: (string|null);

                        /** YoutubeProductPerformanceView distinctVideoCount. */
                        public distinctVideoCount?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView distinctCreatorCount. */
                        public distinctCreatorCount?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView grossSales. */
                        public grossSales?: (google.shopping.type.IPrice|null);

                        /** YoutubeProductPerformanceView commissions. */
                        public commissions?: (google.shopping.type.IPrice|null);

                        /** YoutubeProductPerformanceView orders. */
                        public orders?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView views. */
                        public views?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView clicks. */
                        public clicks?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView netSales. */
                        public netSales?: (google.shopping.type.IPrice|null);

                        /** YoutubeProductPerformanceView taggedCreatorCount. */
                        public taggedCreatorCount?: (number|Long|string|null);

                        /** YoutubeProductPerformanceView taggedVideoCount. */
                        public taggedVideoCount?: (number|Long|string|null);

                        /**
                         * Creates a new YoutubeProductPerformanceView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns YoutubeProductPerformanceView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1alpha.IYoutubeProductPerformanceView): google.shopping.merchant.reports.v1alpha.YoutubeProductPerformanceView;

                        /**
                         * Encodes the specified YoutubeProductPerformanceView message. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.YoutubeProductPerformanceView.verify|verify} messages.
                         * @param message YoutubeProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1alpha.IYoutubeProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified YoutubeProductPerformanceView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1alpha.YoutubeProductPerformanceView.verify|verify} messages.
                         * @param message YoutubeProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1alpha.IYoutubeProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a YoutubeProductPerformanceView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns YoutubeProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1alpha.YoutubeProductPerformanceView;

                        /**
                         * Decodes a YoutubeProductPerformanceView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns YoutubeProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1alpha.YoutubeProductPerformanceView;

                        /**
                         * Verifies a YoutubeProductPerformanceView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a YoutubeProductPerformanceView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns YoutubeProductPerformanceView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1alpha.YoutubeProductPerformanceView;

                        /**
                         * Creates a plain object from a YoutubeProductPerformanceView message. Also converts values to other types if specified.
                         * @param message YoutubeProductPerformanceView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1alpha.YoutubeProductPerformanceView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this YoutubeProductPerformanceView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for YoutubeProductPerformanceView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Namespace v1beta. */
                namespace v1beta {

                    /** Represents a ReportService */
                    class ReportService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new ReportService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new ReportService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ReportService;

                        /**
                         * Calls Search.
                         * @param request SearchRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and SearchResponse
                         */
                        public search(request: google.shopping.merchant.reports.v1beta.ISearchRequest, callback: google.shopping.merchant.reports.v1beta.ReportService.SearchCallback): void;

                        /**
                         * Calls Search.
                         * @param request SearchRequest message or plain object
                         * @returns Promise
                         */
                        public search(request: google.shopping.merchant.reports.v1beta.ISearchRequest): Promise<google.shopping.merchant.reports.v1beta.SearchResponse>;
                    }

                    namespace ReportService {

                        /**
                         * Callback as used by {@link google.shopping.merchant.reports.v1beta.ReportService|search}.
                         * @param error Error, if any
                         * @param [response] SearchResponse
                         */
                        type SearchCallback = (error: (Error|null), response?: google.shopping.merchant.reports.v1beta.SearchResponse) => void;
                    }

                    /** Properties of a SearchRequest. */
                    interface ISearchRequest {

                        /** SearchRequest parent */
                        parent?: (string|null);

                        /** SearchRequest query */
                        query?: (string|null);

                        /** SearchRequest pageSize */
                        pageSize?: (number|null);

                        /** SearchRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a SearchRequest. */
                    class SearchRequest implements ISearchRequest {

                        /**
                         * Constructs a new SearchRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.ISearchRequest);

                        /** SearchRequest parent. */
                        public parent: string;

                        /** SearchRequest query. */
                        public query: string;

                        /** SearchRequest pageSize. */
                        public pageSize: number;

                        /** SearchRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new SearchRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchRequest instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.ISearchRequest): google.shopping.merchant.reports.v1beta.SearchRequest;

                        /**
                         * Encodes the specified SearchRequest message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.SearchRequest.verify|verify} messages.
                         * @param message SearchRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchRequest message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.SearchRequest.verify|verify} messages.
                         * @param message SearchRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.ISearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.SearchRequest;

                        /**
                         * Decodes a SearchRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.SearchRequest;

                        /**
                         * Verifies a SearchRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.SearchRequest;

                        /**
                         * Creates a plain object from a SearchRequest message. Also converts values to other types if specified.
                         * @param message SearchRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.SearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SearchResponse. */
                    interface ISearchResponse {

                        /** SearchResponse results */
                        results?: (google.shopping.merchant.reports.v1beta.IReportRow[]|null);

                        /** SearchResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a SearchResponse. */
                    class SearchResponse implements ISearchResponse {

                        /**
                         * Constructs a new SearchResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.ISearchResponse);

                        /** SearchResponse results. */
                        public results: google.shopping.merchant.reports.v1beta.IReportRow[];

                        /** SearchResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new SearchResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchResponse instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.ISearchResponse): google.shopping.merchant.reports.v1beta.SearchResponse;

                        /**
                         * Encodes the specified SearchResponse message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.SearchResponse.verify|verify} messages.
                         * @param message SearchResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.SearchResponse.verify|verify} messages.
                         * @param message SearchResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.SearchResponse;

                        /**
                         * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.SearchResponse;

                        /**
                         * Verifies a SearchResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.SearchResponse;

                        /**
                         * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
                         * @param message SearchResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReportRow. */
                    interface IReportRow {

                        /** ReportRow productPerformanceView */
                        productPerformanceView?: (google.shopping.merchant.reports.v1beta.IProductPerformanceView|null);

                        /** ReportRow nonProductPerformanceView */
                        nonProductPerformanceView?: (google.shopping.merchant.reports.v1beta.INonProductPerformanceView|null);

                        /** ReportRow productView */
                        productView?: (google.shopping.merchant.reports.v1beta.IProductView|null);

                        /** ReportRow priceCompetitivenessProductView */
                        priceCompetitivenessProductView?: (google.shopping.merchant.reports.v1beta.IPriceCompetitivenessProductView|null);

                        /** ReportRow priceInsightsProductView */
                        priceInsightsProductView?: (google.shopping.merchant.reports.v1beta.IPriceInsightsProductView|null);

                        /** ReportRow bestSellersProductClusterView */
                        bestSellersProductClusterView?: (google.shopping.merchant.reports.v1beta.IBestSellersProductClusterView|null);

                        /** ReportRow bestSellersBrandView */
                        bestSellersBrandView?: (google.shopping.merchant.reports.v1beta.IBestSellersBrandView|null);

                        /** ReportRow competitiveVisibilityCompetitorView */
                        competitiveVisibilityCompetitorView?: (google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityCompetitorView|null);

                        /** ReportRow competitiveVisibilityTopMerchantView */
                        competitiveVisibilityTopMerchantView?: (google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityTopMerchantView|null);

                        /** ReportRow competitiveVisibilityBenchmarkView */
                        competitiveVisibilityBenchmarkView?: (google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityBenchmarkView|null);
                    }

                    /** Represents a ReportRow. */
                    class ReportRow implements IReportRow {

                        /**
                         * Constructs a new ReportRow.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IReportRow);

                        /** ReportRow productPerformanceView. */
                        public productPerformanceView?: (google.shopping.merchant.reports.v1beta.IProductPerformanceView|null);

                        /** ReportRow nonProductPerformanceView. */
                        public nonProductPerformanceView?: (google.shopping.merchant.reports.v1beta.INonProductPerformanceView|null);

                        /** ReportRow productView. */
                        public productView?: (google.shopping.merchant.reports.v1beta.IProductView|null);

                        /** ReportRow priceCompetitivenessProductView. */
                        public priceCompetitivenessProductView?: (google.shopping.merchant.reports.v1beta.IPriceCompetitivenessProductView|null);

                        /** ReportRow priceInsightsProductView. */
                        public priceInsightsProductView?: (google.shopping.merchant.reports.v1beta.IPriceInsightsProductView|null);

                        /** ReportRow bestSellersProductClusterView. */
                        public bestSellersProductClusterView?: (google.shopping.merchant.reports.v1beta.IBestSellersProductClusterView|null);

                        /** ReportRow bestSellersBrandView. */
                        public bestSellersBrandView?: (google.shopping.merchant.reports.v1beta.IBestSellersBrandView|null);

                        /** ReportRow competitiveVisibilityCompetitorView. */
                        public competitiveVisibilityCompetitorView?: (google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityCompetitorView|null);

                        /** ReportRow competitiveVisibilityTopMerchantView. */
                        public competitiveVisibilityTopMerchantView?: (google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityTopMerchantView|null);

                        /** ReportRow competitiveVisibilityBenchmarkView. */
                        public competitiveVisibilityBenchmarkView?: (google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityBenchmarkView|null);

                        /**
                         * Creates a new ReportRow instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReportRow instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IReportRow): google.shopping.merchant.reports.v1beta.ReportRow;

                        /**
                         * Encodes the specified ReportRow message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ReportRow.verify|verify} messages.
                         * @param message ReportRow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IReportRow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReportRow message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ReportRow.verify|verify} messages.
                         * @param message ReportRow message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IReportRow, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReportRow message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReportRow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.ReportRow;

                        /**
                         * Decodes a ReportRow message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReportRow
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.ReportRow;

                        /**
                         * Verifies a ReportRow message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReportRow message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReportRow
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.ReportRow;

                        /**
                         * Creates a plain object from a ReportRow message. Also converts values to other types if specified.
                         * @param message ReportRow
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.ReportRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReportRow to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReportRow
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductPerformanceView. */
                    interface IProductPerformanceView {

                        /** ProductPerformanceView marketingMethod */
                        marketingMethod?: (google.shopping.merchant.reports.v1beta.MarketingMethod.MarketingMethodEnum|keyof typeof google.shopping.merchant.reports.v1beta.MarketingMethod.MarketingMethodEnum|null);

                        /** ProductPerformanceView date */
                        date?: (google.type.IDate|null);

                        /** ProductPerformanceView week */
                        week?: (google.type.IDate|null);

                        /** ProductPerformanceView customerCountryCode */
                        customerCountryCode?: (string|null);

                        /** ProductPerformanceView offerId */
                        offerId?: (string|null);

                        /** ProductPerformanceView title */
                        title?: (string|null);

                        /** ProductPerformanceView brand */
                        brand?: (string|null);

                        /** ProductPerformanceView categoryL1 */
                        categoryL1?: (string|null);

                        /** ProductPerformanceView categoryL2 */
                        categoryL2?: (string|null);

                        /** ProductPerformanceView categoryL3 */
                        categoryL3?: (string|null);

                        /** ProductPerformanceView categoryL4 */
                        categoryL4?: (string|null);

                        /** ProductPerformanceView categoryL5 */
                        categoryL5?: (string|null);

                        /** ProductPerformanceView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** ProductPerformanceView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** ProductPerformanceView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** ProductPerformanceView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** ProductPerformanceView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** ProductPerformanceView customLabel0 */
                        customLabel0?: (string|null);

                        /** ProductPerformanceView customLabel1 */
                        customLabel1?: (string|null);

                        /** ProductPerformanceView customLabel2 */
                        customLabel2?: (string|null);

                        /** ProductPerformanceView customLabel3 */
                        customLabel3?: (string|null);

                        /** ProductPerformanceView customLabel4 */
                        customLabel4?: (string|null);

                        /** ProductPerformanceView clicks */
                        clicks?: (number|Long|string|null);

                        /** ProductPerformanceView impressions */
                        impressions?: (number|Long|string|null);

                        /** ProductPerformanceView clickThroughRate */
                        clickThroughRate?: (number|null);

                        /** ProductPerformanceView conversions */
                        conversions?: (number|null);

                        /** ProductPerformanceView conversionValue */
                        conversionValue?: (google.shopping.type.IPrice|null);

                        /** ProductPerformanceView conversionRate */
                        conversionRate?: (number|null);
                    }

                    /** Represents a ProductPerformanceView. */
                    class ProductPerformanceView implements IProductPerformanceView {

                        /**
                         * Constructs a new ProductPerformanceView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IProductPerformanceView);

                        /** ProductPerformanceView marketingMethod. */
                        public marketingMethod?: (google.shopping.merchant.reports.v1beta.MarketingMethod.MarketingMethodEnum|keyof typeof google.shopping.merchant.reports.v1beta.MarketingMethod.MarketingMethodEnum|null);

                        /** ProductPerformanceView date. */
                        public date?: (google.type.IDate|null);

                        /** ProductPerformanceView week. */
                        public week?: (google.type.IDate|null);

                        /** ProductPerformanceView customerCountryCode. */
                        public customerCountryCode?: (string|null);

                        /** ProductPerformanceView offerId. */
                        public offerId?: (string|null);

                        /** ProductPerformanceView title. */
                        public title?: (string|null);

                        /** ProductPerformanceView brand. */
                        public brand?: (string|null);

                        /** ProductPerformanceView categoryL1. */
                        public categoryL1?: (string|null);

                        /** ProductPerformanceView categoryL2. */
                        public categoryL2?: (string|null);

                        /** ProductPerformanceView categoryL3. */
                        public categoryL3?: (string|null);

                        /** ProductPerformanceView categoryL4. */
                        public categoryL4?: (string|null);

                        /** ProductPerformanceView categoryL5. */
                        public categoryL5?: (string|null);

                        /** ProductPerformanceView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** ProductPerformanceView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** ProductPerformanceView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** ProductPerformanceView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** ProductPerformanceView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** ProductPerformanceView customLabel0. */
                        public customLabel0?: (string|null);

                        /** ProductPerformanceView customLabel1. */
                        public customLabel1?: (string|null);

                        /** ProductPerformanceView customLabel2. */
                        public customLabel2?: (string|null);

                        /** ProductPerformanceView customLabel3. */
                        public customLabel3?: (string|null);

                        /** ProductPerformanceView customLabel4. */
                        public customLabel4?: (string|null);

                        /** ProductPerformanceView clicks. */
                        public clicks?: (number|Long|string|null);

                        /** ProductPerformanceView impressions. */
                        public impressions?: (number|Long|string|null);

                        /** ProductPerformanceView clickThroughRate. */
                        public clickThroughRate?: (number|null);

                        /** ProductPerformanceView conversions. */
                        public conversions?: (number|null);

                        /** ProductPerformanceView conversionValue. */
                        public conversionValue?: (google.shopping.type.IPrice|null);

                        /** ProductPerformanceView conversionRate. */
                        public conversionRate?: (number|null);

                        /**
                         * Creates a new ProductPerformanceView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductPerformanceView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IProductPerformanceView): google.shopping.merchant.reports.v1beta.ProductPerformanceView;

                        /**
                         * Encodes the specified ProductPerformanceView message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductPerformanceView.verify|verify} messages.
                         * @param message ProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductPerformanceView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductPerformanceView.verify|verify} messages.
                         * @param message ProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductPerformanceView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.ProductPerformanceView;

                        /**
                         * Decodes a ProductPerformanceView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.ProductPerformanceView;

                        /**
                         * Verifies a ProductPerformanceView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductPerformanceView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductPerformanceView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.ProductPerformanceView;

                        /**
                         * Creates a plain object from a ProductPerformanceView message. Also converts values to other types if specified.
                         * @param message ProductPerformanceView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.ProductPerformanceView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductPerformanceView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductPerformanceView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ProductView. */
                    interface IProductView {

                        /** ProductView id */
                        id?: (string|null);

                        /** ProductView channel */
                        channel?: (google.shopping.type.Channel.ChannelEnum|keyof typeof google.shopping.type.Channel.ChannelEnum|null);

                        /** ProductView languageCode */
                        languageCode?: (string|null);

                        /** ProductView feedLabel */
                        feedLabel?: (string|null);

                        /** ProductView offerId */
                        offerId?: (string|null);

                        /** ProductView title */
                        title?: (string|null);

                        /** ProductView brand */
                        brand?: (string|null);

                        /** ProductView categoryL1 */
                        categoryL1?: (string|null);

                        /** ProductView categoryL2 */
                        categoryL2?: (string|null);

                        /** ProductView categoryL3 */
                        categoryL3?: (string|null);

                        /** ProductView categoryL4 */
                        categoryL4?: (string|null);

                        /** ProductView categoryL5 */
                        categoryL5?: (string|null);

                        /** ProductView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** ProductView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** ProductView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** ProductView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** ProductView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** ProductView price */
                        price?: (google.shopping.type.IPrice|null);

                        /** ProductView condition */
                        condition?: (string|null);

                        /** ProductView availability */
                        availability?: (string|null);

                        /** ProductView shippingLabel */
                        shippingLabel?: (string|null);

                        /** ProductView gtin */
                        gtin?: (string[]|null);

                        /** ProductView itemGroupId */
                        itemGroupId?: (string|null);

                        /** ProductView thumbnailLink */
                        thumbnailLink?: (string|null);

                        /** ProductView creationTime */
                        creationTime?: (google.protobuf.ITimestamp|null);

                        /** ProductView expirationDate */
                        expirationDate?: (google.type.IDate|null);

                        /** ProductView aggregatedReportingContextStatus */
                        aggregatedReportingContextStatus?: (google.shopping.merchant.reports.v1beta.ProductView.AggregatedReportingContextStatus|keyof typeof google.shopping.merchant.reports.v1beta.ProductView.AggregatedReportingContextStatus|null);

                        /** ProductView itemIssues */
                        itemIssues?: (google.shopping.merchant.reports.v1beta.ProductView.IItemIssue[]|null);

                        /** ProductView clickPotential */
                        clickPotential?: (google.shopping.merchant.reports.v1beta.ProductView.ClickPotential|keyof typeof google.shopping.merchant.reports.v1beta.ProductView.ClickPotential|null);

                        /** ProductView clickPotentialRank */
                        clickPotentialRank?: (number|Long|string|null);
                    }

                    /** Represents a ProductView. */
                    class ProductView implements IProductView {

                        /**
                         * Constructs a new ProductView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IProductView);

                        /** ProductView id. */
                        public id?: (string|null);

                        /** ProductView channel. */
                        public channel?: (google.shopping.type.Channel.ChannelEnum|keyof typeof google.shopping.type.Channel.ChannelEnum|null);

                        /** ProductView languageCode. */
                        public languageCode?: (string|null);

                        /** ProductView feedLabel. */
                        public feedLabel?: (string|null);

                        /** ProductView offerId. */
                        public offerId?: (string|null);

                        /** ProductView title. */
                        public title?: (string|null);

                        /** ProductView brand. */
                        public brand?: (string|null);

                        /** ProductView categoryL1. */
                        public categoryL1?: (string|null);

                        /** ProductView categoryL2. */
                        public categoryL2?: (string|null);

                        /** ProductView categoryL3. */
                        public categoryL3?: (string|null);

                        /** ProductView categoryL4. */
                        public categoryL4?: (string|null);

                        /** ProductView categoryL5. */
                        public categoryL5?: (string|null);

                        /** ProductView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** ProductView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** ProductView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** ProductView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** ProductView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** ProductView price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** ProductView condition. */
                        public condition?: (string|null);

                        /** ProductView availability. */
                        public availability?: (string|null);

                        /** ProductView shippingLabel. */
                        public shippingLabel?: (string|null);

                        /** ProductView gtin. */
                        public gtin: string[];

                        /** ProductView itemGroupId. */
                        public itemGroupId?: (string|null);

                        /** ProductView thumbnailLink. */
                        public thumbnailLink?: (string|null);

                        /** ProductView creationTime. */
                        public creationTime?: (google.protobuf.ITimestamp|null);

                        /** ProductView expirationDate. */
                        public expirationDate?: (google.type.IDate|null);

                        /** ProductView aggregatedReportingContextStatus. */
                        public aggregatedReportingContextStatus?: (google.shopping.merchant.reports.v1beta.ProductView.AggregatedReportingContextStatus|keyof typeof google.shopping.merchant.reports.v1beta.ProductView.AggregatedReportingContextStatus|null);

                        /** ProductView itemIssues. */
                        public itemIssues: google.shopping.merchant.reports.v1beta.ProductView.IItemIssue[];

                        /** ProductView clickPotential. */
                        public clickPotential: (google.shopping.merchant.reports.v1beta.ProductView.ClickPotential|keyof typeof google.shopping.merchant.reports.v1beta.ProductView.ClickPotential);

                        /** ProductView clickPotentialRank. */
                        public clickPotentialRank?: (number|Long|string|null);

                        /**
                         * Creates a new ProductView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ProductView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IProductView): google.shopping.merchant.reports.v1beta.ProductView;

                        /**
                         * Encodes the specified ProductView message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductView.verify|verify} messages.
                         * @param message ProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ProductView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductView.verify|verify} messages.
                         * @param message ProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ProductView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.ProductView;

                        /**
                         * Decodes a ProductView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.ProductView;

                        /**
                         * Verifies a ProductView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ProductView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ProductView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.ProductView;

                        /**
                         * Creates a plain object from a ProductView message. Also converts values to other types if specified.
                         * @param message ProductView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.ProductView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ProductView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ProductView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ProductView {

                        /** Properties of an ItemIssue. */
                        interface IItemIssue {

                            /** ItemIssue type */
                            type?: (google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueType|null);

                            /** ItemIssue severity */
                            severity?: (google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueSeverity|null);

                            /** ItemIssue resolution */
                            resolution?: (google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueResolution|keyof typeof google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueResolution|null);
                        }

                        /** Represents an ItemIssue. */
                        class ItemIssue implements IItemIssue {

                            /**
                             * Constructs a new ItemIssue.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.shopping.merchant.reports.v1beta.ProductView.IItemIssue);

                            /** ItemIssue type. */
                            public type?: (google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueType|null);

                            /** ItemIssue severity. */
                            public severity?: (google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueSeverity|null);

                            /** ItemIssue resolution. */
                            public resolution?: (google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueResolution|keyof typeof google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueResolution|null);

                            /**
                             * Creates a new ItemIssue instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ItemIssue instance
                             */
                            public static create(properties?: google.shopping.merchant.reports.v1beta.ProductView.IItemIssue): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue;

                            /**
                             * Encodes the specified ItemIssue message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.verify|verify} messages.
                             * @param message ItemIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.shopping.merchant.reports.v1beta.ProductView.IItemIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ItemIssue message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.verify|verify} messages.
                             * @param message ItemIssue message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.ProductView.IItemIssue, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ItemIssue message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ItemIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue;

                            /**
                             * Decodes an ItemIssue message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ItemIssue
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue;

                            /**
                             * Verifies an ItemIssue message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ItemIssue message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ItemIssue
                             */
                            public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue;

                            /**
                             * Creates a plain object from an ItemIssue message. Also converts values to other types if specified.
                             * @param message ItemIssue
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ItemIssue to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ItemIssue
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ItemIssue {

                            /** Properties of an ItemIssueType. */
                            interface IItemIssueType {

                                /** ItemIssueType code */
                                code?: (string|null);

                                /** ItemIssueType canonicalAttribute */
                                canonicalAttribute?: (string|null);
                            }

                            /** Represents an ItemIssueType. */
                            class ItemIssueType implements IItemIssueType {

                                /**
                                 * Constructs a new ItemIssueType.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueType);

                                /** ItemIssueType code. */
                                public code?: (string|null);

                                /** ItemIssueType canonicalAttribute. */
                                public canonicalAttribute?: (string|null);

                                /**
                                 * Creates a new ItemIssueType instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ItemIssueType instance
                                 */
                                public static create(properties?: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueType): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Encodes the specified ItemIssueType message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueType.verify|verify} messages.
                                 * @param message ItemIssueType message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueType, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ItemIssueType message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueType.verify|verify} messages.
                                 * @param message ItemIssueType message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueType, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an ItemIssueType message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ItemIssueType
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Decodes an ItemIssueType message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ItemIssueType
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Verifies an ItemIssueType message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an ItemIssueType message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ItemIssueType
                                 */
                                public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueType;

                                /**
                                 * Creates a plain object from an ItemIssueType message. Also converts values to other types if specified.
                                 * @param message ItemIssueType
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ItemIssueType to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ItemIssueType
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of an ItemIssueSeverity. */
                            interface IItemIssueSeverity {

                                /** ItemIssueSeverity severityPerReportingContext */
                                severityPerReportingContext?: (google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext[]|null);

                                /** ItemIssueSeverity aggregatedSeverity */
                                aggregatedSeverity?: (google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|keyof typeof google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|null);
                            }

                            /** Represents an ItemIssueSeverity. */
                            class ItemIssueSeverity implements IItemIssueSeverity {

                                /**
                                 * Constructs a new ItemIssueSeverity.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueSeverity);

                                /** ItemIssueSeverity severityPerReportingContext. */
                                public severityPerReportingContext: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext[];

                                /** ItemIssueSeverity aggregatedSeverity. */
                                public aggregatedSeverity?: (google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|keyof typeof google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.AggregatedIssueSeverity|null);

                                /**
                                 * Creates a new ItemIssueSeverity instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ItemIssueSeverity instance
                                 */
                                public static create(properties?: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueSeverity): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Encodes the specified ItemIssueSeverity message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.verify|verify} messages.
                                 * @param message ItemIssueSeverity message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueSeverity, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ItemIssueSeverity message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.verify|verify} messages.
                                 * @param message ItemIssueSeverity message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.IItemIssueSeverity, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an ItemIssueSeverity message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ItemIssueSeverity
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Decodes an ItemIssueSeverity message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ItemIssueSeverity
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Verifies an ItemIssueSeverity message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an ItemIssueSeverity message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ItemIssueSeverity
                                 */
                                public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity;

                                /**
                                 * Creates a plain object from an ItemIssueSeverity message. Also converts values to other types if specified.
                                 * @param message ItemIssueSeverity
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ItemIssueSeverity to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ItemIssueSeverity
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            namespace ItemIssueSeverity {

                                /** Properties of an IssueSeverityPerReportingContext. */
                                interface IIssueSeverityPerReportingContext {

                                    /** IssueSeverityPerReportingContext reportingContext */
                                    reportingContext?: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum|null);

                                    /** IssueSeverityPerReportingContext disapprovedCountries */
                                    disapprovedCountries?: (string[]|null);

                                    /** IssueSeverityPerReportingContext demotedCountries */
                                    demotedCountries?: (string[]|null);
                                }

                                /** Represents an IssueSeverityPerReportingContext. */
                                class IssueSeverityPerReportingContext implements IIssueSeverityPerReportingContext {

                                    /**
                                     * Constructs a new IssueSeverityPerReportingContext.
                                     * @param [properties] Properties to set
                                     */
                                    constructor(properties?: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext);

                                    /** IssueSeverityPerReportingContext reportingContext. */
                                    public reportingContext?: (google.shopping.type.ReportingContext.ReportingContextEnum|keyof typeof google.shopping.type.ReportingContext.ReportingContextEnum|null);

                                    /** IssueSeverityPerReportingContext disapprovedCountries. */
                                    public disapprovedCountries: string[];

                                    /** IssueSeverityPerReportingContext demotedCountries. */
                                    public demotedCountries: string[];

                                    /**
                                     * Creates a new IssueSeverityPerReportingContext instance using the specified properties.
                                     * @param [properties] Properties to set
                                     * @returns IssueSeverityPerReportingContext instance
                                     */
                                    public static create(properties?: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Encodes the specified IssueSeverityPerReportingContext message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext.verify|verify} messages.
                                     * @param message IssueSeverityPerReportingContext message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encode(message: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Encodes the specified IssueSeverityPerReportingContext message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext.verify|verify} messages.
                                     * @param message IssueSeverityPerReportingContext message or plain object to encode
                                     * @param [writer] Writer to encode to
                                     * @returns Writer
                                     */
                                    public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IIssueSeverityPerReportingContext, writer?: $protobuf.Writer): $protobuf.Writer;

                                    /**
                                     * Decodes an IssueSeverityPerReportingContext message from the specified reader or buffer.
                                     * @param reader Reader or buffer to decode from
                                     * @param [length] Message length if known beforehand
                                     * @returns IssueSeverityPerReportingContext
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Decodes an IssueSeverityPerReportingContext message from the specified reader or buffer, length delimited.
                                     * @param reader Reader or buffer to decode from
                                     * @returns IssueSeverityPerReportingContext
                                     * @throws {Error} If the payload is not a reader or valid buffer
                                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                     */
                                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Verifies an IssueSeverityPerReportingContext message.
                                     * @param message Plain object to verify
                                     * @returns `null` if valid, otherwise the reason why it is not
                                     */
                                    public static verify(message: { [k: string]: any }): (string|null);

                                    /**
                                     * Creates an IssueSeverityPerReportingContext message from a plain object. Also converts values to their respective internal types.
                                     * @param object Plain object
                                     * @returns IssueSeverityPerReportingContext
                                     */
                                    public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext;

                                    /**
                                     * Creates a plain object from an IssueSeverityPerReportingContext message. Also converts values to other types if specified.
                                     * @param message IssueSeverityPerReportingContext
                                     * @param [options] Conversion options
                                     * @returns Plain object
                                     */
                                    public static toObject(message: google.shopping.merchant.reports.v1beta.ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                    /**
                                     * Converts this IssueSeverityPerReportingContext to JSON.
                                     * @returns JSON object
                                     */
                                    public toJSON(): { [k: string]: any };

                                    /**
                                     * Gets the default type url for IssueSeverityPerReportingContext
                                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                     * @returns The default type url
                                     */
                                    public static getTypeUrl(typeUrlPrefix?: string): string;
                                }

                                /** AggregatedIssueSeverity enum. */
                                enum AggregatedIssueSeverity {
                                    AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED = 0,
                                    DISAPPROVED = 1,
                                    DEMOTED = 2,
                                    PENDING = 3
                                }
                            }

                            /** ItemIssueResolution enum. */
                            enum ItemIssueResolution {
                                ITEM_ISSUE_RESOLUTION_UNSPECIFIED = 0,
                                MERCHANT_ACTION = 1,
                                PENDING_PROCESSING = 2
                            }
                        }

                        /** AggregatedReportingContextStatus enum. */
                        enum AggregatedReportingContextStatus {
                            AGGREGATED_REPORTING_CONTEXT_STATUS_UNSPECIFIED = 0,
                            NOT_ELIGIBLE_OR_DISAPPROVED = 1,
                            PENDING = 2,
                            ELIGIBLE_LIMITED = 3,
                            ELIGIBLE = 4
                        }

                        /** ClickPotential enum. */
                        enum ClickPotential {
                            CLICK_POTENTIAL_UNSPECIFIED = 0,
                            LOW = 1,
                            MEDIUM = 2,
                            HIGH = 3
                        }
                    }

                    /** Properties of a PriceCompetitivenessProductView. */
                    interface IPriceCompetitivenessProductView {

                        /** PriceCompetitivenessProductView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** PriceCompetitivenessProductView id */
                        id?: (string|null);

                        /** PriceCompetitivenessProductView offerId */
                        offerId?: (string|null);

                        /** PriceCompetitivenessProductView title */
                        title?: (string|null);

                        /** PriceCompetitivenessProductView brand */
                        brand?: (string|null);

                        /** PriceCompetitivenessProductView categoryL1 */
                        categoryL1?: (string|null);

                        /** PriceCompetitivenessProductView categoryL2 */
                        categoryL2?: (string|null);

                        /** PriceCompetitivenessProductView categoryL3 */
                        categoryL3?: (string|null);

                        /** PriceCompetitivenessProductView categoryL4 */
                        categoryL4?: (string|null);

                        /** PriceCompetitivenessProductView categoryL5 */
                        categoryL5?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** PriceCompetitivenessProductView price */
                        price?: (google.shopping.type.IPrice|null);

                        /** PriceCompetitivenessProductView benchmarkPrice */
                        benchmarkPrice?: (google.shopping.type.IPrice|null);
                    }

                    /** Represents a PriceCompetitivenessProductView. */
                    class PriceCompetitivenessProductView implements IPriceCompetitivenessProductView {

                        /**
                         * Constructs a new PriceCompetitivenessProductView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IPriceCompetitivenessProductView);

                        /** PriceCompetitivenessProductView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** PriceCompetitivenessProductView id. */
                        public id?: (string|null);

                        /** PriceCompetitivenessProductView offerId. */
                        public offerId?: (string|null);

                        /** PriceCompetitivenessProductView title. */
                        public title?: (string|null);

                        /** PriceCompetitivenessProductView brand. */
                        public brand?: (string|null);

                        /** PriceCompetitivenessProductView categoryL1. */
                        public categoryL1?: (string|null);

                        /** PriceCompetitivenessProductView categoryL2. */
                        public categoryL2?: (string|null);

                        /** PriceCompetitivenessProductView categoryL3. */
                        public categoryL3?: (string|null);

                        /** PriceCompetitivenessProductView categoryL4. */
                        public categoryL4?: (string|null);

                        /** PriceCompetitivenessProductView categoryL5. */
                        public categoryL5?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** PriceCompetitivenessProductView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** PriceCompetitivenessProductView price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** PriceCompetitivenessProductView benchmarkPrice. */
                        public benchmarkPrice?: (google.shopping.type.IPrice|null);

                        /**
                         * Creates a new PriceCompetitivenessProductView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PriceCompetitivenessProductView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IPriceCompetitivenessProductView): google.shopping.merchant.reports.v1beta.PriceCompetitivenessProductView;

                        /**
                         * Encodes the specified PriceCompetitivenessProductView message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.PriceCompetitivenessProductView.verify|verify} messages.
                         * @param message PriceCompetitivenessProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IPriceCompetitivenessProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PriceCompetitivenessProductView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.PriceCompetitivenessProductView.verify|verify} messages.
                         * @param message PriceCompetitivenessProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IPriceCompetitivenessProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PriceCompetitivenessProductView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PriceCompetitivenessProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.PriceCompetitivenessProductView;

                        /**
                         * Decodes a PriceCompetitivenessProductView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PriceCompetitivenessProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.PriceCompetitivenessProductView;

                        /**
                         * Verifies a PriceCompetitivenessProductView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PriceCompetitivenessProductView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PriceCompetitivenessProductView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.PriceCompetitivenessProductView;

                        /**
                         * Creates a plain object from a PriceCompetitivenessProductView message. Also converts values to other types if specified.
                         * @param message PriceCompetitivenessProductView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.PriceCompetitivenessProductView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PriceCompetitivenessProductView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PriceCompetitivenessProductView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PriceInsightsProductView. */
                    interface IPriceInsightsProductView {

                        /** PriceInsightsProductView id */
                        id?: (string|null);

                        /** PriceInsightsProductView offerId */
                        offerId?: (string|null);

                        /** PriceInsightsProductView title */
                        title?: (string|null);

                        /** PriceInsightsProductView brand */
                        brand?: (string|null);

                        /** PriceInsightsProductView categoryL1 */
                        categoryL1?: (string|null);

                        /** PriceInsightsProductView categoryL2 */
                        categoryL2?: (string|null);

                        /** PriceInsightsProductView categoryL3 */
                        categoryL3?: (string|null);

                        /** PriceInsightsProductView categoryL4 */
                        categoryL4?: (string|null);

                        /** PriceInsightsProductView categoryL5 */
                        categoryL5?: (string|null);

                        /** PriceInsightsProductView productTypeL1 */
                        productTypeL1?: (string|null);

                        /** PriceInsightsProductView productTypeL2 */
                        productTypeL2?: (string|null);

                        /** PriceInsightsProductView productTypeL3 */
                        productTypeL3?: (string|null);

                        /** PriceInsightsProductView productTypeL4 */
                        productTypeL4?: (string|null);

                        /** PriceInsightsProductView productTypeL5 */
                        productTypeL5?: (string|null);

                        /** PriceInsightsProductView price */
                        price?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView suggestedPrice */
                        suggestedPrice?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView predictedImpressionsChangeFraction */
                        predictedImpressionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedClicksChangeFraction */
                        predictedClicksChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedConversionsChangeFraction */
                        predictedConversionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView effectiveness */
                        effectiveness?: (google.shopping.merchant.reports.v1beta.PriceInsightsProductView.Effectiveness|keyof typeof google.shopping.merchant.reports.v1beta.PriceInsightsProductView.Effectiveness|null);
                    }

                    /** Represents a PriceInsightsProductView. */
                    class PriceInsightsProductView implements IPriceInsightsProductView {

                        /**
                         * Constructs a new PriceInsightsProductView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IPriceInsightsProductView);

                        /** PriceInsightsProductView id. */
                        public id?: (string|null);

                        /** PriceInsightsProductView offerId. */
                        public offerId?: (string|null);

                        /** PriceInsightsProductView title. */
                        public title?: (string|null);

                        /** PriceInsightsProductView brand. */
                        public brand?: (string|null);

                        /** PriceInsightsProductView categoryL1. */
                        public categoryL1?: (string|null);

                        /** PriceInsightsProductView categoryL2. */
                        public categoryL2?: (string|null);

                        /** PriceInsightsProductView categoryL3. */
                        public categoryL3?: (string|null);

                        /** PriceInsightsProductView categoryL4. */
                        public categoryL4?: (string|null);

                        /** PriceInsightsProductView categoryL5. */
                        public categoryL5?: (string|null);

                        /** PriceInsightsProductView productTypeL1. */
                        public productTypeL1?: (string|null);

                        /** PriceInsightsProductView productTypeL2. */
                        public productTypeL2?: (string|null);

                        /** PriceInsightsProductView productTypeL3. */
                        public productTypeL3?: (string|null);

                        /** PriceInsightsProductView productTypeL4. */
                        public productTypeL4?: (string|null);

                        /** PriceInsightsProductView productTypeL5. */
                        public productTypeL5?: (string|null);

                        /** PriceInsightsProductView price. */
                        public price?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView suggestedPrice. */
                        public suggestedPrice?: (google.shopping.type.IPrice|null);

                        /** PriceInsightsProductView predictedImpressionsChangeFraction. */
                        public predictedImpressionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedClicksChangeFraction. */
                        public predictedClicksChangeFraction?: (number|null);

                        /** PriceInsightsProductView predictedConversionsChangeFraction. */
                        public predictedConversionsChangeFraction?: (number|null);

                        /** PriceInsightsProductView effectiveness. */
                        public effectiveness: (google.shopping.merchant.reports.v1beta.PriceInsightsProductView.Effectiveness|keyof typeof google.shopping.merchant.reports.v1beta.PriceInsightsProductView.Effectiveness);

                        /**
                         * Creates a new PriceInsightsProductView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PriceInsightsProductView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IPriceInsightsProductView): google.shopping.merchant.reports.v1beta.PriceInsightsProductView;

                        /**
                         * Encodes the specified PriceInsightsProductView message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.PriceInsightsProductView.verify|verify} messages.
                         * @param message PriceInsightsProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IPriceInsightsProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PriceInsightsProductView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.PriceInsightsProductView.verify|verify} messages.
                         * @param message PriceInsightsProductView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IPriceInsightsProductView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PriceInsightsProductView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PriceInsightsProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.PriceInsightsProductView;

                        /**
                         * Decodes a PriceInsightsProductView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PriceInsightsProductView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.PriceInsightsProductView;

                        /**
                         * Verifies a PriceInsightsProductView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PriceInsightsProductView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PriceInsightsProductView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.PriceInsightsProductView;

                        /**
                         * Creates a plain object from a PriceInsightsProductView message. Also converts values to other types if specified.
                         * @param message PriceInsightsProductView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.PriceInsightsProductView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PriceInsightsProductView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PriceInsightsProductView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PriceInsightsProductView {

                        /** Effectiveness enum. */
                        enum Effectiveness {
                            EFFECTIVENESS_UNSPECIFIED = 0,
                            LOW = 1,
                            MEDIUM = 2,
                            HIGH = 3
                        }
                    }

                    /** Properties of a BestSellersProductClusterView. */
                    interface IBestSellersProductClusterView {

                        /** BestSellersProductClusterView reportDate */
                        reportDate?: (google.type.IDate|null);

                        /** BestSellersProductClusterView reportGranularity */
                        reportGranularity?: (google.shopping.merchant.reports.v1beta.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1beta.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersProductClusterView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** BestSellersProductClusterView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** BestSellersProductClusterView title */
                        title?: (string|null);

                        /** BestSellersProductClusterView brand */
                        brand?: (string|null);

                        /** BestSellersProductClusterView categoryL1 */
                        categoryL1?: (string|null);

                        /** BestSellersProductClusterView categoryL2 */
                        categoryL2?: (string|null);

                        /** BestSellersProductClusterView categoryL3 */
                        categoryL3?: (string|null);

                        /** BestSellersProductClusterView categoryL4 */
                        categoryL4?: (string|null);

                        /** BestSellersProductClusterView categoryL5 */
                        categoryL5?: (string|null);

                        /** BestSellersProductClusterView variantGtins */
                        variantGtins?: (string[]|null);

                        /** BestSellersProductClusterView inventoryStatus */
                        inventoryStatus?: (google.shopping.merchant.reports.v1beta.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1beta.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView brandInventoryStatus */
                        brandInventoryStatus?: (google.shopping.merchant.reports.v1beta.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1beta.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView rank */
                        rank?: (number|Long|string|null);

                        /** BestSellersProductClusterView previousRank */
                        previousRank?: (number|Long|string|null);

                        /** BestSellersProductClusterView relativeDemand */
                        relativeDemand?: (google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView previousRelativeDemand */
                        previousRelativeDemand?: (google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView relativeDemandChange */
                        relativeDemandChange?: (google.shopping.merchant.reports.v1beta.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);
                    }

                    /** Represents a BestSellersProductClusterView. */
                    class BestSellersProductClusterView implements IBestSellersProductClusterView {

                        /**
                         * Constructs a new BestSellersProductClusterView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IBestSellersProductClusterView);

                        /** BestSellersProductClusterView reportDate. */
                        public reportDate?: (google.type.IDate|null);

                        /** BestSellersProductClusterView reportGranularity. */
                        public reportGranularity?: (google.shopping.merchant.reports.v1beta.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1beta.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersProductClusterView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** BestSellersProductClusterView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** BestSellersProductClusterView title. */
                        public title?: (string|null);

                        /** BestSellersProductClusterView brand. */
                        public brand?: (string|null);

                        /** BestSellersProductClusterView categoryL1. */
                        public categoryL1?: (string|null);

                        /** BestSellersProductClusterView categoryL2. */
                        public categoryL2?: (string|null);

                        /** BestSellersProductClusterView categoryL3. */
                        public categoryL3?: (string|null);

                        /** BestSellersProductClusterView categoryL4. */
                        public categoryL4?: (string|null);

                        /** BestSellersProductClusterView categoryL5. */
                        public categoryL5?: (string|null);

                        /** BestSellersProductClusterView variantGtins. */
                        public variantGtins: string[];

                        /** BestSellersProductClusterView inventoryStatus. */
                        public inventoryStatus?: (google.shopping.merchant.reports.v1beta.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1beta.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView brandInventoryStatus. */
                        public brandInventoryStatus?: (google.shopping.merchant.reports.v1beta.BestSellersProductClusterView.InventoryStatus|keyof typeof google.shopping.merchant.reports.v1beta.BestSellersProductClusterView.InventoryStatus|null);

                        /** BestSellersProductClusterView rank. */
                        public rank?: (number|Long|string|null);

                        /** BestSellersProductClusterView previousRank. */
                        public previousRank?: (number|Long|string|null);

                        /** BestSellersProductClusterView relativeDemand. */
                        public relativeDemand?: (google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView previousRelativeDemand. */
                        public previousRelativeDemand?: (google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersProductClusterView relativeDemandChange. */
                        public relativeDemandChange?: (google.shopping.merchant.reports.v1beta.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);

                        /**
                         * Creates a new BestSellersProductClusterView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BestSellersProductClusterView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IBestSellersProductClusterView): google.shopping.merchant.reports.v1beta.BestSellersProductClusterView;

                        /**
                         * Encodes the specified BestSellersProductClusterView message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.BestSellersProductClusterView.verify|verify} messages.
                         * @param message BestSellersProductClusterView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IBestSellersProductClusterView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BestSellersProductClusterView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.BestSellersProductClusterView.verify|verify} messages.
                         * @param message BestSellersProductClusterView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IBestSellersProductClusterView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BestSellersProductClusterView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BestSellersProductClusterView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.BestSellersProductClusterView;

                        /**
                         * Decodes a BestSellersProductClusterView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BestSellersProductClusterView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.BestSellersProductClusterView;

                        /**
                         * Verifies a BestSellersProductClusterView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BestSellersProductClusterView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BestSellersProductClusterView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.BestSellersProductClusterView;

                        /**
                         * Creates a plain object from a BestSellersProductClusterView message. Also converts values to other types if specified.
                         * @param message BestSellersProductClusterView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.BestSellersProductClusterView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BestSellersProductClusterView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BestSellersProductClusterView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace BestSellersProductClusterView {

                        /** InventoryStatus enum. */
                        enum InventoryStatus {
                            INVENTORY_STATUS_UNSPECIFIED = 0,
                            IN_STOCK = 1,
                            OUT_OF_STOCK = 2,
                            NOT_IN_INVENTORY = 3
                        }
                    }

                    /** Properties of a BestSellersBrandView. */
                    interface IBestSellersBrandView {

                        /** BestSellersBrandView reportDate */
                        reportDate?: (google.type.IDate|null);

                        /** BestSellersBrandView reportGranularity */
                        reportGranularity?: (google.shopping.merchant.reports.v1beta.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1beta.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersBrandView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** BestSellersBrandView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** BestSellersBrandView brand */
                        brand?: (string|null);

                        /** BestSellersBrandView rank */
                        rank?: (number|Long|string|null);

                        /** BestSellersBrandView previousRank */
                        previousRank?: (number|Long|string|null);

                        /** BestSellersBrandView relativeDemand */
                        relativeDemand?: (google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView previousRelativeDemand */
                        previousRelativeDemand?: (google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView relativeDemandChange */
                        relativeDemandChange?: (google.shopping.merchant.reports.v1beta.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);
                    }

                    /** Represents a BestSellersBrandView. */
                    class BestSellersBrandView implements IBestSellersBrandView {

                        /**
                         * Constructs a new BestSellersBrandView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IBestSellersBrandView);

                        /** BestSellersBrandView reportDate. */
                        public reportDate?: (google.type.IDate|null);

                        /** BestSellersBrandView reportGranularity. */
                        public reportGranularity?: (google.shopping.merchant.reports.v1beta.ReportGranularity.ReportGranularityEnum|keyof typeof google.shopping.merchant.reports.v1beta.ReportGranularity.ReportGranularityEnum|null);

                        /** BestSellersBrandView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** BestSellersBrandView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** BestSellersBrandView brand. */
                        public brand?: (string|null);

                        /** BestSellersBrandView rank. */
                        public rank?: (number|Long|string|null);

                        /** BestSellersBrandView previousRank. */
                        public previousRank?: (number|Long|string|null);

                        /** BestSellersBrandView relativeDemand. */
                        public relativeDemand?: (google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView previousRelativeDemand. */
                        public previousRelativeDemand?: (google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemand.RelativeDemandEnum|null);

                        /** BestSellersBrandView relativeDemandChange. */
                        public relativeDemandChange?: (google.shopping.merchant.reports.v1beta.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|keyof typeof google.shopping.merchant.reports.v1beta.RelativeDemandChangeType.RelativeDemandChangeTypeEnum|null);

                        /**
                         * Creates a new BestSellersBrandView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BestSellersBrandView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IBestSellersBrandView): google.shopping.merchant.reports.v1beta.BestSellersBrandView;

                        /**
                         * Encodes the specified BestSellersBrandView message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.BestSellersBrandView.verify|verify} messages.
                         * @param message BestSellersBrandView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IBestSellersBrandView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BestSellersBrandView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.BestSellersBrandView.verify|verify} messages.
                         * @param message BestSellersBrandView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IBestSellersBrandView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BestSellersBrandView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BestSellersBrandView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.BestSellersBrandView;

                        /**
                         * Decodes a BestSellersBrandView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BestSellersBrandView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.BestSellersBrandView;

                        /**
                         * Verifies a BestSellersBrandView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BestSellersBrandView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BestSellersBrandView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.BestSellersBrandView;

                        /**
                         * Creates a plain object from a BestSellersBrandView message. Also converts values to other types if specified.
                         * @param message BestSellersBrandView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.BestSellersBrandView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BestSellersBrandView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BestSellersBrandView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a NonProductPerformanceView. */
                    interface INonProductPerformanceView {

                        /** NonProductPerformanceView date */
                        date?: (google.type.IDate|null);

                        /** NonProductPerformanceView week */
                        week?: (google.type.IDate|null);

                        /** NonProductPerformanceView clicks */
                        clicks?: (number|Long|string|null);

                        /** NonProductPerformanceView impressions */
                        impressions?: (number|Long|string|null);

                        /** NonProductPerformanceView clickThroughRate */
                        clickThroughRate?: (number|null);
                    }

                    /** Represents a NonProductPerformanceView. */
                    class NonProductPerformanceView implements INonProductPerformanceView {

                        /**
                         * Constructs a new NonProductPerformanceView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.INonProductPerformanceView);

                        /** NonProductPerformanceView date. */
                        public date?: (google.type.IDate|null);

                        /** NonProductPerformanceView week. */
                        public week?: (google.type.IDate|null);

                        /** NonProductPerformanceView clicks. */
                        public clicks?: (number|Long|string|null);

                        /** NonProductPerformanceView impressions. */
                        public impressions?: (number|Long|string|null);

                        /** NonProductPerformanceView clickThroughRate. */
                        public clickThroughRate?: (number|null);

                        /**
                         * Creates a new NonProductPerformanceView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NonProductPerformanceView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.INonProductPerformanceView): google.shopping.merchant.reports.v1beta.NonProductPerformanceView;

                        /**
                         * Encodes the specified NonProductPerformanceView message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.NonProductPerformanceView.verify|verify} messages.
                         * @param message NonProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.INonProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NonProductPerformanceView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.NonProductPerformanceView.verify|verify} messages.
                         * @param message NonProductPerformanceView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.INonProductPerformanceView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NonProductPerformanceView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NonProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.NonProductPerformanceView;

                        /**
                         * Decodes a NonProductPerformanceView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NonProductPerformanceView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.NonProductPerformanceView;

                        /**
                         * Verifies a NonProductPerformanceView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NonProductPerformanceView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NonProductPerformanceView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.NonProductPerformanceView;

                        /**
                         * Creates a plain object from a NonProductPerformanceView message. Also converts values to other types if specified.
                         * @param message NonProductPerformanceView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.NonProductPerformanceView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NonProductPerformanceView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for NonProductPerformanceView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CompetitiveVisibilityCompetitorView. */
                    interface ICompetitiveVisibilityCompetitorView {

                        /** CompetitiveVisibilityCompetitorView date */
                        date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityCompetitorView domain */
                        domain?: (string|null);

                        /** CompetitiveVisibilityCompetitorView isYourDomain */
                        isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityCompetitorView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityCompetitorView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView trafficSource */
                        trafficSource?: (google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityCompetitorView rank */
                        rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView adsOrganicRatio */
                        adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityCompetitorView pageOverlapRate */
                        pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView higherPositionRate */
                        higherPositionRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView relativeVisibility */
                        relativeVisibility?: (number|null);
                    }

                    /** Represents a CompetitiveVisibilityCompetitorView. */
                    class CompetitiveVisibilityCompetitorView implements ICompetitiveVisibilityCompetitorView {

                        /**
                         * Constructs a new CompetitiveVisibilityCompetitorView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityCompetitorView);

                        /** CompetitiveVisibilityCompetitorView date. */
                        public date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityCompetitorView domain. */
                        public domain?: (string|null);

                        /** CompetitiveVisibilityCompetitorView isYourDomain. */
                        public isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityCompetitorView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityCompetitorView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView trafficSource. */
                        public trafficSource?: (google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityCompetitorView rank. */
                        public rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityCompetitorView adsOrganicRatio. */
                        public adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityCompetitorView pageOverlapRate. */
                        public pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView higherPositionRate. */
                        public higherPositionRate?: (number|null);

                        /** CompetitiveVisibilityCompetitorView relativeVisibility. */
                        public relativeVisibility?: (number|null);

                        /**
                         * Creates a new CompetitiveVisibilityCompetitorView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompetitiveVisibilityCompetitorView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityCompetitorView): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityCompetitorView;

                        /**
                         * Encodes the specified CompetitiveVisibilityCompetitorView message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.CompetitiveVisibilityCompetitorView.verify|verify} messages.
                         * @param message CompetitiveVisibilityCompetitorView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityCompetitorView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompetitiveVisibilityCompetitorView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.CompetitiveVisibilityCompetitorView.verify|verify} messages.
                         * @param message CompetitiveVisibilityCompetitorView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityCompetitorView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompetitiveVisibilityCompetitorView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompetitiveVisibilityCompetitorView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityCompetitorView;

                        /**
                         * Decodes a CompetitiveVisibilityCompetitorView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompetitiveVisibilityCompetitorView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityCompetitorView;

                        /**
                         * Verifies a CompetitiveVisibilityCompetitorView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompetitiveVisibilityCompetitorView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompetitiveVisibilityCompetitorView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityCompetitorView;

                        /**
                         * Creates a plain object from a CompetitiveVisibilityCompetitorView message. Also converts values to other types if specified.
                         * @param message CompetitiveVisibilityCompetitorView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.CompetitiveVisibilityCompetitorView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompetitiveVisibilityCompetitorView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CompetitiveVisibilityCompetitorView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CompetitiveVisibilityTopMerchantView. */
                    interface ICompetitiveVisibilityTopMerchantView {

                        /** CompetitiveVisibilityTopMerchantView date */
                        date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityTopMerchantView domain */
                        domain?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView isYourDomain */
                        isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityTopMerchantView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView trafficSource */
                        trafficSource?: (google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityTopMerchantView rank */
                        rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView adsOrganicRatio */
                        adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView pageOverlapRate */
                        pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView higherPositionRate */
                        higherPositionRate?: (number|null);
                    }

                    /** Represents a CompetitiveVisibilityTopMerchantView. */
                    class CompetitiveVisibilityTopMerchantView implements ICompetitiveVisibilityTopMerchantView {

                        /**
                         * Constructs a new CompetitiveVisibilityTopMerchantView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityTopMerchantView);

                        /** CompetitiveVisibilityTopMerchantView date. */
                        public date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityTopMerchantView domain. */
                        public domain?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView isYourDomain. */
                        public isYourDomain?: (boolean|null);

                        /** CompetitiveVisibilityTopMerchantView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityTopMerchantView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView trafficSource. */
                        public trafficSource?: (google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityTopMerchantView rank. */
                        public rank?: (number|Long|string|null);

                        /** CompetitiveVisibilityTopMerchantView adsOrganicRatio. */
                        public adsOrganicRatio?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView pageOverlapRate. */
                        public pageOverlapRate?: (number|null);

                        /** CompetitiveVisibilityTopMerchantView higherPositionRate. */
                        public higherPositionRate?: (number|null);

                        /**
                         * Creates a new CompetitiveVisibilityTopMerchantView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompetitiveVisibilityTopMerchantView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityTopMerchantView): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Encodes the specified CompetitiveVisibilityTopMerchantView message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.CompetitiveVisibilityTopMerchantView.verify|verify} messages.
                         * @param message CompetitiveVisibilityTopMerchantView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityTopMerchantView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompetitiveVisibilityTopMerchantView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.CompetitiveVisibilityTopMerchantView.verify|verify} messages.
                         * @param message CompetitiveVisibilityTopMerchantView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityTopMerchantView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompetitiveVisibilityTopMerchantView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompetitiveVisibilityTopMerchantView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Decodes a CompetitiveVisibilityTopMerchantView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompetitiveVisibilityTopMerchantView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Verifies a CompetitiveVisibilityTopMerchantView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompetitiveVisibilityTopMerchantView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompetitiveVisibilityTopMerchantView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityTopMerchantView;

                        /**
                         * Creates a plain object from a CompetitiveVisibilityTopMerchantView message. Also converts values to other types if specified.
                         * @param message CompetitiveVisibilityTopMerchantView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.CompetitiveVisibilityTopMerchantView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompetitiveVisibilityTopMerchantView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CompetitiveVisibilityTopMerchantView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CompetitiveVisibilityBenchmarkView. */
                    interface ICompetitiveVisibilityBenchmarkView {

                        /** CompetitiveVisibilityBenchmarkView date */
                        date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityBenchmarkView reportCountryCode */
                        reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityBenchmarkView reportCategoryId */
                        reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityBenchmarkView trafficSource */
                        trafficSource?: (google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityBenchmarkView yourDomainVisibilityTrend */
                        yourDomainVisibilityTrend?: (number|null);

                        /** CompetitiveVisibilityBenchmarkView categoryBenchmarkVisibilityTrend */
                        categoryBenchmarkVisibilityTrend?: (number|null);
                    }

                    /** Represents a CompetitiveVisibilityBenchmarkView. */
                    class CompetitiveVisibilityBenchmarkView implements ICompetitiveVisibilityBenchmarkView {

                        /**
                         * Constructs a new CompetitiveVisibilityBenchmarkView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityBenchmarkView);

                        /** CompetitiveVisibilityBenchmarkView date. */
                        public date?: (google.type.IDate|null);

                        /** CompetitiveVisibilityBenchmarkView reportCountryCode. */
                        public reportCountryCode?: (string|null);

                        /** CompetitiveVisibilityBenchmarkView reportCategoryId. */
                        public reportCategoryId?: (number|Long|string|null);

                        /** CompetitiveVisibilityBenchmarkView trafficSource. */
                        public trafficSource?: (google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|keyof typeof google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum|null);

                        /** CompetitiveVisibilityBenchmarkView yourDomainVisibilityTrend. */
                        public yourDomainVisibilityTrend?: (number|null);

                        /** CompetitiveVisibilityBenchmarkView categoryBenchmarkVisibilityTrend. */
                        public categoryBenchmarkVisibilityTrend?: (number|null);

                        /**
                         * Creates a new CompetitiveVisibilityBenchmarkView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CompetitiveVisibilityBenchmarkView instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityBenchmarkView): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Encodes the specified CompetitiveVisibilityBenchmarkView message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.CompetitiveVisibilityBenchmarkView.verify|verify} messages.
                         * @param message CompetitiveVisibilityBenchmarkView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityBenchmarkView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CompetitiveVisibilityBenchmarkView message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.CompetitiveVisibilityBenchmarkView.verify|verify} messages.
                         * @param message CompetitiveVisibilityBenchmarkView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.ICompetitiveVisibilityBenchmarkView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CompetitiveVisibilityBenchmarkView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CompetitiveVisibilityBenchmarkView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Decodes a CompetitiveVisibilityBenchmarkView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CompetitiveVisibilityBenchmarkView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Verifies a CompetitiveVisibilityBenchmarkView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CompetitiveVisibilityBenchmarkView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CompetitiveVisibilityBenchmarkView
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.CompetitiveVisibilityBenchmarkView;

                        /**
                         * Creates a plain object from a CompetitiveVisibilityBenchmarkView message. Also converts values to other types if specified.
                         * @param message CompetitiveVisibilityBenchmarkView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.CompetitiveVisibilityBenchmarkView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CompetitiveVisibilityBenchmarkView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CompetitiveVisibilityBenchmarkView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MarketingMethod. */
                    interface IMarketingMethod {
                    }

                    /** Represents a MarketingMethod. */
                    class MarketingMethod implements IMarketingMethod {

                        /**
                         * Constructs a new MarketingMethod.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IMarketingMethod);

                        /**
                         * Creates a new MarketingMethod instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MarketingMethod instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IMarketingMethod): google.shopping.merchant.reports.v1beta.MarketingMethod;

                        /**
                         * Encodes the specified MarketingMethod message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.MarketingMethod.verify|verify} messages.
                         * @param message MarketingMethod message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IMarketingMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MarketingMethod message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.MarketingMethod.verify|verify} messages.
                         * @param message MarketingMethod message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IMarketingMethod, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MarketingMethod message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MarketingMethod
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.MarketingMethod;

                        /**
                         * Decodes a MarketingMethod message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MarketingMethod
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.MarketingMethod;

                        /**
                         * Verifies a MarketingMethod message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MarketingMethod message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MarketingMethod
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.MarketingMethod;

                        /**
                         * Creates a plain object from a MarketingMethod message. Also converts values to other types if specified.
                         * @param message MarketingMethod
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.MarketingMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MarketingMethod to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MarketingMethod
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MarketingMethod {

                        /** MarketingMethodEnum enum. */
                        enum MarketingMethodEnum {
                            MARKETING_METHOD_ENUM_UNSPECIFIED = 0,
                            ORGANIC = 1,
                            ADS = 2
                        }
                    }

                    /** Properties of a ReportGranularity. */
                    interface IReportGranularity {
                    }

                    /** Represents a ReportGranularity. */
                    class ReportGranularity implements IReportGranularity {

                        /**
                         * Constructs a new ReportGranularity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IReportGranularity);

                        /**
                         * Creates a new ReportGranularity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReportGranularity instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IReportGranularity): google.shopping.merchant.reports.v1beta.ReportGranularity;

                        /**
                         * Encodes the specified ReportGranularity message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ReportGranularity.verify|verify} messages.
                         * @param message ReportGranularity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IReportGranularity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReportGranularity message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.ReportGranularity.verify|verify} messages.
                         * @param message ReportGranularity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IReportGranularity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReportGranularity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReportGranularity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.ReportGranularity;

                        /**
                         * Decodes a ReportGranularity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReportGranularity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.ReportGranularity;

                        /**
                         * Verifies a ReportGranularity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReportGranularity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReportGranularity
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.ReportGranularity;

                        /**
                         * Creates a plain object from a ReportGranularity message. Also converts values to other types if specified.
                         * @param message ReportGranularity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.ReportGranularity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReportGranularity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReportGranularity
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ReportGranularity {

                        /** ReportGranularityEnum enum. */
                        enum ReportGranularityEnum {
                            REPORT_GRANULARITY_ENUM_UNSPECIFIED = 0,
                            WEEKLY = 1,
                            MONTHLY = 2
                        }
                    }

                    /** Properties of a RelativeDemand. */
                    interface IRelativeDemand {
                    }

                    /** Represents a RelativeDemand. */
                    class RelativeDemand implements IRelativeDemand {

                        /**
                         * Constructs a new RelativeDemand.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IRelativeDemand);

                        /**
                         * Creates a new RelativeDemand instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RelativeDemand instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IRelativeDemand): google.shopping.merchant.reports.v1beta.RelativeDemand;

                        /**
                         * Encodes the specified RelativeDemand message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.RelativeDemand.verify|verify} messages.
                         * @param message RelativeDemand message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IRelativeDemand, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RelativeDemand message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.RelativeDemand.verify|verify} messages.
                         * @param message RelativeDemand message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IRelativeDemand, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RelativeDemand message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RelativeDemand
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.RelativeDemand;

                        /**
                         * Decodes a RelativeDemand message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RelativeDemand
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.RelativeDemand;

                        /**
                         * Verifies a RelativeDemand message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RelativeDemand message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RelativeDemand
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.RelativeDemand;

                        /**
                         * Creates a plain object from a RelativeDemand message. Also converts values to other types if specified.
                         * @param message RelativeDemand
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.RelativeDemand, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RelativeDemand to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RelativeDemand
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace RelativeDemand {

                        /** RelativeDemandEnum enum. */
                        enum RelativeDemandEnum {
                            RELATIVE_DEMAND_ENUM_UNSPECIFIED = 0,
                            VERY_LOW = 10,
                            LOW = 20,
                            MEDIUM = 30,
                            HIGH = 40,
                            VERY_HIGH = 50
                        }
                    }

                    /** Properties of a RelativeDemandChangeType. */
                    interface IRelativeDemandChangeType {
                    }

                    /** Represents a RelativeDemandChangeType. */
                    class RelativeDemandChangeType implements IRelativeDemandChangeType {

                        /**
                         * Constructs a new RelativeDemandChangeType.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.IRelativeDemandChangeType);

                        /**
                         * Creates a new RelativeDemandChangeType instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RelativeDemandChangeType instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.IRelativeDemandChangeType): google.shopping.merchant.reports.v1beta.RelativeDemandChangeType;

                        /**
                         * Encodes the specified RelativeDemandChangeType message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.RelativeDemandChangeType.verify|verify} messages.
                         * @param message RelativeDemandChangeType message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.IRelativeDemandChangeType, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RelativeDemandChangeType message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.RelativeDemandChangeType.verify|verify} messages.
                         * @param message RelativeDemandChangeType message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.IRelativeDemandChangeType, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RelativeDemandChangeType message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RelativeDemandChangeType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.RelativeDemandChangeType;

                        /**
                         * Decodes a RelativeDemandChangeType message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RelativeDemandChangeType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.RelativeDemandChangeType;

                        /**
                         * Verifies a RelativeDemandChangeType message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RelativeDemandChangeType message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RelativeDemandChangeType
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.RelativeDemandChangeType;

                        /**
                         * Creates a plain object from a RelativeDemandChangeType message. Also converts values to other types if specified.
                         * @param message RelativeDemandChangeType
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.RelativeDemandChangeType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RelativeDemandChangeType to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RelativeDemandChangeType
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace RelativeDemandChangeType {

                        /** RelativeDemandChangeTypeEnum enum. */
                        enum RelativeDemandChangeTypeEnum {
                            RELATIVE_DEMAND_CHANGE_TYPE_ENUM_UNSPECIFIED = 0,
                            SINKER = 1,
                            FLAT = 2,
                            RISER = 3
                        }
                    }

                    /** Properties of a TrafficSource. */
                    interface ITrafficSource {
                    }

                    /** Represents a TrafficSource. */
                    class TrafficSource implements ITrafficSource {

                        /**
                         * Constructs a new TrafficSource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.shopping.merchant.reports.v1beta.ITrafficSource);

                        /**
                         * Creates a new TrafficSource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TrafficSource instance
                         */
                        public static create(properties?: google.shopping.merchant.reports.v1beta.ITrafficSource): google.shopping.merchant.reports.v1beta.TrafficSource;

                        /**
                         * Encodes the specified TrafficSource message. Does not implicitly {@link google.shopping.merchant.reports.v1beta.TrafficSource.verify|verify} messages.
                         * @param message TrafficSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.shopping.merchant.reports.v1beta.ITrafficSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TrafficSource message, length delimited. Does not implicitly {@link google.shopping.merchant.reports.v1beta.TrafficSource.verify|verify} messages.
                         * @param message TrafficSource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.shopping.merchant.reports.v1beta.ITrafficSource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TrafficSource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TrafficSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.shopping.merchant.reports.v1beta.TrafficSource;

                        /**
                         * Decodes a TrafficSource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TrafficSource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.shopping.merchant.reports.v1beta.TrafficSource;

                        /**
                         * Verifies a TrafficSource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TrafficSource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TrafficSource
                         */
                        public static fromObject(object: { [k: string]: any }): google.shopping.merchant.reports.v1beta.TrafficSource;

                        /**
                         * Creates a plain object from a TrafficSource message. Also converts values to other types if specified.
                         * @param message TrafficSource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.shopping.merchant.reports.v1beta.TrafficSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TrafficSource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TrafficSource
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TrafficSource {

                        /** TrafficSourceEnum enum. */
                        enum TrafficSourceEnum {
                            TRAFFIC_SOURCE_ENUM_UNSPECIFIED = 0,
                            ORGANIC = 1,
                            ADS = 2,
                            ALL = 3
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
    }

    /** Namespace type. */
    namespace type {

        /** Properties of a Date. */
        interface IDate {

            /** Date year */
            year?: (number|null);

            /** Date month */
            month?: (number|null);

            /** Date day */
            day?: (number|null);
        }

        /** Represents a Date. */
        class Date implements IDate {

            /**
             * Constructs a new Date.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDate);

            /** Date year. */
            public year: number;

            /** Date month. */
            public month: number;

            /** Date day. */
            public day: number;

            /**
             * Creates a new Date instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Date instance
             */
            public static create(properties?: google.type.IDate): google.type.Date;

            /**
             * Encodes the specified Date message. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Date message, length delimited. Does not implicitly {@link google.type.Date.verify|verify} messages.
             * @param message Date message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Date message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Date;

            /**
             * Decodes a Date message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Date
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Date;

            /**
             * Verifies a Date message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Date message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Date
             */
            public static fromObject(object: { [k: string]: any }): google.type.Date;

            /**
             * Creates a plain object from a Date message. Also converts values to other types if specified.
             * @param message Date
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Date, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Date to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Date
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
