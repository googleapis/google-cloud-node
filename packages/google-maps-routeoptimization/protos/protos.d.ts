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

    /** Namespace maps. */
    namespace maps {

        /** Namespace routeoptimization. */
        namespace routeoptimization {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a RouteOptimization */
                class RouteOptimization extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new RouteOptimization service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new RouteOptimization service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): RouteOptimization;

                    /**
                     * Calls OptimizeTours.
                     * @param request OptimizeToursRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and OptimizeToursResponse
                     */
                    public optimizeTours(request: google.maps.routeoptimization.v1.IOptimizeToursRequest, callback: google.maps.routeoptimization.v1.RouteOptimization.OptimizeToursCallback): void;

                    /**
                     * Calls OptimizeTours.
                     * @param request OptimizeToursRequest message or plain object
                     * @returns Promise
                     */
                    public optimizeTours(request: google.maps.routeoptimization.v1.IOptimizeToursRequest): Promise<google.maps.routeoptimization.v1.OptimizeToursResponse>;

                    /**
                     * Calls BatchOptimizeTours.
                     * @param request BatchOptimizeToursRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public batchOptimizeTours(request: google.maps.routeoptimization.v1.IBatchOptimizeToursRequest, callback: google.maps.routeoptimization.v1.RouteOptimization.BatchOptimizeToursCallback): void;

                    /**
                     * Calls BatchOptimizeTours.
                     * @param request BatchOptimizeToursRequest message or plain object
                     * @returns Promise
                     */
                    public batchOptimizeTours(request: google.maps.routeoptimization.v1.IBatchOptimizeToursRequest): Promise<google.longrunning.Operation>;
                }

                namespace RouteOptimization {

                    /**
                     * Callback as used by {@link google.maps.routeoptimization.v1.RouteOptimization|optimizeTours}.
                     * @param error Error, if any
                     * @param [response] OptimizeToursResponse
                     */
                    type OptimizeToursCallback = (error: (Error|null), response?: google.maps.routeoptimization.v1.OptimizeToursResponse) => void;

                    /**
                     * Callback as used by {@link google.maps.routeoptimization.v1.RouteOptimization|batchOptimizeTours}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BatchOptimizeToursCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a BatchOptimizeToursRequest. */
                interface IBatchOptimizeToursRequest {

                    /** BatchOptimizeToursRequest parent */
                    parent?: (string|null);

                    /** BatchOptimizeToursRequest modelConfigs */
                    modelConfigs?: (google.maps.routeoptimization.v1.BatchOptimizeToursRequest.IAsyncModelConfig[]|null);
                }

                /** Represents a BatchOptimizeToursRequest. */
                class BatchOptimizeToursRequest implements IBatchOptimizeToursRequest {

                    /**
                     * Constructs a new BatchOptimizeToursRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IBatchOptimizeToursRequest);

                    /** BatchOptimizeToursRequest parent. */
                    public parent: string;

                    /** BatchOptimizeToursRequest modelConfigs. */
                    public modelConfigs: google.maps.routeoptimization.v1.BatchOptimizeToursRequest.IAsyncModelConfig[];

                    /**
                     * Creates a new BatchOptimizeToursRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchOptimizeToursRequest instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IBatchOptimizeToursRequest): google.maps.routeoptimization.v1.BatchOptimizeToursRequest;

                    /**
                     * Encodes the specified BatchOptimizeToursRequest message. Does not implicitly {@link google.maps.routeoptimization.v1.BatchOptimizeToursRequest.verify|verify} messages.
                     * @param message BatchOptimizeToursRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IBatchOptimizeToursRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchOptimizeToursRequest message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.BatchOptimizeToursRequest.verify|verify} messages.
                     * @param message BatchOptimizeToursRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IBatchOptimizeToursRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchOptimizeToursRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchOptimizeToursRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.BatchOptimizeToursRequest;

                    /**
                     * Decodes a BatchOptimizeToursRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchOptimizeToursRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.BatchOptimizeToursRequest;

                    /**
                     * Verifies a BatchOptimizeToursRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchOptimizeToursRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchOptimizeToursRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.BatchOptimizeToursRequest;

                    /**
                     * Creates a plain object from a BatchOptimizeToursRequest message. Also converts values to other types if specified.
                     * @param message BatchOptimizeToursRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.BatchOptimizeToursRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchOptimizeToursRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchOptimizeToursRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BatchOptimizeToursRequest {

                    /** Properties of an AsyncModelConfig. */
                    interface IAsyncModelConfig {

                        /** AsyncModelConfig displayName */
                        displayName?: (string|null);

                        /** AsyncModelConfig inputConfig */
                        inputConfig?: (google.maps.routeoptimization.v1.IInputConfig|null);

                        /** AsyncModelConfig outputConfig */
                        outputConfig?: (google.maps.routeoptimization.v1.IOutputConfig|null);
                    }

                    /** Represents an AsyncModelConfig. */
                    class AsyncModelConfig implements IAsyncModelConfig {

                        /**
                         * Constructs a new AsyncModelConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.BatchOptimizeToursRequest.IAsyncModelConfig);

                        /** AsyncModelConfig displayName. */
                        public displayName: string;

                        /** AsyncModelConfig inputConfig. */
                        public inputConfig?: (google.maps.routeoptimization.v1.IInputConfig|null);

                        /** AsyncModelConfig outputConfig. */
                        public outputConfig?: (google.maps.routeoptimization.v1.IOutputConfig|null);

                        /**
                         * Creates a new AsyncModelConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AsyncModelConfig instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.BatchOptimizeToursRequest.IAsyncModelConfig): google.maps.routeoptimization.v1.BatchOptimizeToursRequest.AsyncModelConfig;

                        /**
                         * Encodes the specified AsyncModelConfig message. Does not implicitly {@link google.maps.routeoptimization.v1.BatchOptimizeToursRequest.AsyncModelConfig.verify|verify} messages.
                         * @param message AsyncModelConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.BatchOptimizeToursRequest.IAsyncModelConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AsyncModelConfig message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.BatchOptimizeToursRequest.AsyncModelConfig.verify|verify} messages.
                         * @param message AsyncModelConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.BatchOptimizeToursRequest.IAsyncModelConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AsyncModelConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AsyncModelConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.BatchOptimizeToursRequest.AsyncModelConfig;

                        /**
                         * Decodes an AsyncModelConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AsyncModelConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.BatchOptimizeToursRequest.AsyncModelConfig;

                        /**
                         * Verifies an AsyncModelConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AsyncModelConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AsyncModelConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.BatchOptimizeToursRequest.AsyncModelConfig;

                        /**
                         * Creates a plain object from an AsyncModelConfig message. Also converts values to other types if specified.
                         * @param message AsyncModelConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.BatchOptimizeToursRequest.AsyncModelConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AsyncModelConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AsyncModelConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a BatchOptimizeToursResponse. */
                interface IBatchOptimizeToursResponse {
                }

                /** Represents a BatchOptimizeToursResponse. */
                class BatchOptimizeToursResponse implements IBatchOptimizeToursResponse {

                    /**
                     * Constructs a new BatchOptimizeToursResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IBatchOptimizeToursResponse);

                    /**
                     * Creates a new BatchOptimizeToursResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchOptimizeToursResponse instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IBatchOptimizeToursResponse): google.maps.routeoptimization.v1.BatchOptimizeToursResponse;

                    /**
                     * Encodes the specified BatchOptimizeToursResponse message. Does not implicitly {@link google.maps.routeoptimization.v1.BatchOptimizeToursResponse.verify|verify} messages.
                     * @param message BatchOptimizeToursResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IBatchOptimizeToursResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchOptimizeToursResponse message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.BatchOptimizeToursResponse.verify|verify} messages.
                     * @param message BatchOptimizeToursResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IBatchOptimizeToursResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchOptimizeToursResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchOptimizeToursResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.BatchOptimizeToursResponse;

                    /**
                     * Decodes a BatchOptimizeToursResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchOptimizeToursResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.BatchOptimizeToursResponse;

                    /**
                     * Verifies a BatchOptimizeToursResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchOptimizeToursResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchOptimizeToursResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.BatchOptimizeToursResponse;

                    /**
                     * Creates a plain object from a BatchOptimizeToursResponse message. Also converts values to other types if specified.
                     * @param message BatchOptimizeToursResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.BatchOptimizeToursResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchOptimizeToursResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchOptimizeToursResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BatchOptimizeToursMetadata. */
                interface IBatchOptimizeToursMetadata {
                }

                /** Represents a BatchOptimizeToursMetadata. */
                class BatchOptimizeToursMetadata implements IBatchOptimizeToursMetadata {

                    /**
                     * Constructs a new BatchOptimizeToursMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IBatchOptimizeToursMetadata);

                    /**
                     * Creates a new BatchOptimizeToursMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchOptimizeToursMetadata instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IBatchOptimizeToursMetadata): google.maps.routeoptimization.v1.BatchOptimizeToursMetadata;

                    /**
                     * Encodes the specified BatchOptimizeToursMetadata message. Does not implicitly {@link google.maps.routeoptimization.v1.BatchOptimizeToursMetadata.verify|verify} messages.
                     * @param message BatchOptimizeToursMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IBatchOptimizeToursMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchOptimizeToursMetadata message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.BatchOptimizeToursMetadata.verify|verify} messages.
                     * @param message BatchOptimizeToursMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IBatchOptimizeToursMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchOptimizeToursMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchOptimizeToursMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.BatchOptimizeToursMetadata;

                    /**
                     * Decodes a BatchOptimizeToursMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchOptimizeToursMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.BatchOptimizeToursMetadata;

                    /**
                     * Verifies a BatchOptimizeToursMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchOptimizeToursMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchOptimizeToursMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.BatchOptimizeToursMetadata;

                    /**
                     * Creates a plain object from a BatchOptimizeToursMetadata message. Also converts values to other types if specified.
                     * @param message BatchOptimizeToursMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.BatchOptimizeToursMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchOptimizeToursMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BatchOptimizeToursMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OptimizeToursRequest. */
                interface IOptimizeToursRequest {

                    /** OptimizeToursRequest parent */
                    parent?: (string|null);

                    /** OptimizeToursRequest timeout */
                    timeout?: (google.protobuf.IDuration|null);

                    /** OptimizeToursRequest model */
                    model?: (google.maps.routeoptimization.v1.IShipmentModel|null);

                    /** OptimizeToursRequest solvingMode */
                    solvingMode?: (google.maps.routeoptimization.v1.OptimizeToursRequest.SolvingMode|keyof typeof google.maps.routeoptimization.v1.OptimizeToursRequest.SolvingMode|null);

                    /** OptimizeToursRequest searchMode */
                    searchMode?: (google.maps.routeoptimization.v1.OptimizeToursRequest.SearchMode|keyof typeof google.maps.routeoptimization.v1.OptimizeToursRequest.SearchMode|null);

                    /** OptimizeToursRequest injectedFirstSolutionRoutes */
                    injectedFirstSolutionRoutes?: (google.maps.routeoptimization.v1.IShipmentRoute[]|null);

                    /** OptimizeToursRequest injectedSolutionConstraint */
                    injectedSolutionConstraint?: (google.maps.routeoptimization.v1.IInjectedSolutionConstraint|null);

                    /** OptimizeToursRequest refreshDetailsRoutes */
                    refreshDetailsRoutes?: (google.maps.routeoptimization.v1.IShipmentRoute[]|null);

                    /** OptimizeToursRequest interpretInjectedSolutionsUsingLabels */
                    interpretInjectedSolutionsUsingLabels?: (boolean|null);

                    /** OptimizeToursRequest considerRoadTraffic */
                    considerRoadTraffic?: (boolean|null);

                    /** OptimizeToursRequest populatePolylines */
                    populatePolylines?: (boolean|null);

                    /** OptimizeToursRequest populateTransitionPolylines */
                    populateTransitionPolylines?: (boolean|null);

                    /** OptimizeToursRequest allowLargeDeadlineDespiteInterruptionRisk */
                    allowLargeDeadlineDespiteInterruptionRisk?: (boolean|null);

                    /** OptimizeToursRequest useGeodesicDistances */
                    useGeodesicDistances?: (boolean|null);

                    /** OptimizeToursRequest geodesicMetersPerSecond */
                    geodesicMetersPerSecond?: (number|null);

                    /** OptimizeToursRequest maxValidationErrors */
                    maxValidationErrors?: (number|null);

                    /** OptimizeToursRequest label */
                    label?: (string|null);
                }

                /** Represents an OptimizeToursRequest. */
                class OptimizeToursRequest implements IOptimizeToursRequest {

                    /**
                     * Constructs a new OptimizeToursRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IOptimizeToursRequest);

                    /** OptimizeToursRequest parent. */
                    public parent: string;

                    /** OptimizeToursRequest timeout. */
                    public timeout?: (google.protobuf.IDuration|null);

                    /** OptimizeToursRequest model. */
                    public model?: (google.maps.routeoptimization.v1.IShipmentModel|null);

                    /** OptimizeToursRequest solvingMode. */
                    public solvingMode: (google.maps.routeoptimization.v1.OptimizeToursRequest.SolvingMode|keyof typeof google.maps.routeoptimization.v1.OptimizeToursRequest.SolvingMode);

                    /** OptimizeToursRequest searchMode. */
                    public searchMode: (google.maps.routeoptimization.v1.OptimizeToursRequest.SearchMode|keyof typeof google.maps.routeoptimization.v1.OptimizeToursRequest.SearchMode);

                    /** OptimizeToursRequest injectedFirstSolutionRoutes. */
                    public injectedFirstSolutionRoutes: google.maps.routeoptimization.v1.IShipmentRoute[];

                    /** OptimizeToursRequest injectedSolutionConstraint. */
                    public injectedSolutionConstraint?: (google.maps.routeoptimization.v1.IInjectedSolutionConstraint|null);

                    /** OptimizeToursRequest refreshDetailsRoutes. */
                    public refreshDetailsRoutes: google.maps.routeoptimization.v1.IShipmentRoute[];

                    /** OptimizeToursRequest interpretInjectedSolutionsUsingLabels. */
                    public interpretInjectedSolutionsUsingLabels: boolean;

                    /** OptimizeToursRequest considerRoadTraffic. */
                    public considerRoadTraffic: boolean;

                    /** OptimizeToursRequest populatePolylines. */
                    public populatePolylines: boolean;

                    /** OptimizeToursRequest populateTransitionPolylines. */
                    public populateTransitionPolylines: boolean;

                    /** OptimizeToursRequest allowLargeDeadlineDespiteInterruptionRisk. */
                    public allowLargeDeadlineDespiteInterruptionRisk: boolean;

                    /** OptimizeToursRequest useGeodesicDistances. */
                    public useGeodesicDistances: boolean;

                    /** OptimizeToursRequest geodesicMetersPerSecond. */
                    public geodesicMetersPerSecond?: (number|null);

                    /** OptimizeToursRequest maxValidationErrors. */
                    public maxValidationErrors?: (number|null);

                    /** OptimizeToursRequest label. */
                    public label: string;

                    /** OptimizeToursRequest _geodesicMetersPerSecond. */
                    public _geodesicMetersPerSecond?: "geodesicMetersPerSecond";

                    /** OptimizeToursRequest _maxValidationErrors. */
                    public _maxValidationErrors?: "maxValidationErrors";

                    /**
                     * Creates a new OptimizeToursRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OptimizeToursRequest instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IOptimizeToursRequest): google.maps.routeoptimization.v1.OptimizeToursRequest;

                    /**
                     * Encodes the specified OptimizeToursRequest message. Does not implicitly {@link google.maps.routeoptimization.v1.OptimizeToursRequest.verify|verify} messages.
                     * @param message OptimizeToursRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IOptimizeToursRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OptimizeToursRequest message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.OptimizeToursRequest.verify|verify} messages.
                     * @param message OptimizeToursRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IOptimizeToursRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OptimizeToursRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OptimizeToursRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.OptimizeToursRequest;

                    /**
                     * Decodes an OptimizeToursRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OptimizeToursRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.OptimizeToursRequest;

                    /**
                     * Verifies an OptimizeToursRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OptimizeToursRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OptimizeToursRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.OptimizeToursRequest;

                    /**
                     * Creates a plain object from an OptimizeToursRequest message. Also converts values to other types if specified.
                     * @param message OptimizeToursRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.OptimizeToursRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OptimizeToursRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OptimizeToursRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OptimizeToursRequest {

                    /** SolvingMode enum. */
                    enum SolvingMode {
                        DEFAULT_SOLVE = 0,
                        VALIDATE_ONLY = 1,
                        DETECT_SOME_INFEASIBLE_SHIPMENTS = 2
                    }

                    /** SearchMode enum. */
                    enum SearchMode {
                        SEARCH_MODE_UNSPECIFIED = 0,
                        RETURN_FAST = 1,
                        CONSUME_ALL_AVAILABLE_TIME = 2
                    }
                }

                /** Properties of an OptimizeToursResponse. */
                interface IOptimizeToursResponse {

                    /** OptimizeToursResponse routes */
                    routes?: (google.maps.routeoptimization.v1.IShipmentRoute[]|null);

                    /** OptimizeToursResponse requestLabel */
                    requestLabel?: (string|null);

                    /** OptimizeToursResponse skippedShipments */
                    skippedShipments?: (google.maps.routeoptimization.v1.ISkippedShipment[]|null);

                    /** OptimizeToursResponse validationErrors */
                    validationErrors?: (google.maps.routeoptimization.v1.IOptimizeToursValidationError[]|null);

                    /** OptimizeToursResponse metrics */
                    metrics?: (google.maps.routeoptimization.v1.OptimizeToursResponse.IMetrics|null);
                }

                /** Represents an OptimizeToursResponse. */
                class OptimizeToursResponse implements IOptimizeToursResponse {

                    /**
                     * Constructs a new OptimizeToursResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IOptimizeToursResponse);

                    /** OptimizeToursResponse routes. */
                    public routes: google.maps.routeoptimization.v1.IShipmentRoute[];

                    /** OptimizeToursResponse requestLabel. */
                    public requestLabel: string;

                    /** OptimizeToursResponse skippedShipments. */
                    public skippedShipments: google.maps.routeoptimization.v1.ISkippedShipment[];

                    /** OptimizeToursResponse validationErrors. */
                    public validationErrors: google.maps.routeoptimization.v1.IOptimizeToursValidationError[];

                    /** OptimizeToursResponse metrics. */
                    public metrics?: (google.maps.routeoptimization.v1.OptimizeToursResponse.IMetrics|null);

                    /**
                     * Creates a new OptimizeToursResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OptimizeToursResponse instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IOptimizeToursResponse): google.maps.routeoptimization.v1.OptimizeToursResponse;

                    /**
                     * Encodes the specified OptimizeToursResponse message. Does not implicitly {@link google.maps.routeoptimization.v1.OptimizeToursResponse.verify|verify} messages.
                     * @param message OptimizeToursResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IOptimizeToursResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OptimizeToursResponse message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.OptimizeToursResponse.verify|verify} messages.
                     * @param message OptimizeToursResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IOptimizeToursResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OptimizeToursResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OptimizeToursResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.OptimizeToursResponse;

                    /**
                     * Decodes an OptimizeToursResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OptimizeToursResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.OptimizeToursResponse;

                    /**
                     * Verifies an OptimizeToursResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OptimizeToursResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OptimizeToursResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.OptimizeToursResponse;

                    /**
                     * Creates a plain object from an OptimizeToursResponse message. Also converts values to other types if specified.
                     * @param message OptimizeToursResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.OptimizeToursResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OptimizeToursResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OptimizeToursResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OptimizeToursResponse {

                    /** Properties of a Metrics. */
                    interface IMetrics {

                        /** Metrics aggregatedRouteMetrics */
                        aggregatedRouteMetrics?: (google.maps.routeoptimization.v1.IAggregatedMetrics|null);

                        /** Metrics skippedMandatoryShipmentCount */
                        skippedMandatoryShipmentCount?: (number|null);

                        /** Metrics usedVehicleCount */
                        usedVehicleCount?: (number|null);

                        /** Metrics earliestVehicleStartTime */
                        earliestVehicleStartTime?: (google.protobuf.ITimestamp|null);

                        /** Metrics latestVehicleEndTime */
                        latestVehicleEndTime?: (google.protobuf.ITimestamp|null);

                        /** Metrics costs */
                        costs?: ({ [k: string]: number }|null);

                        /** Metrics totalCost */
                        totalCost?: (number|null);
                    }

                    /** Represents a Metrics. */
                    class Metrics implements IMetrics {

                        /**
                         * Constructs a new Metrics.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.OptimizeToursResponse.IMetrics);

                        /** Metrics aggregatedRouteMetrics. */
                        public aggregatedRouteMetrics?: (google.maps.routeoptimization.v1.IAggregatedMetrics|null);

                        /** Metrics skippedMandatoryShipmentCount. */
                        public skippedMandatoryShipmentCount: number;

                        /** Metrics usedVehicleCount. */
                        public usedVehicleCount: number;

                        /** Metrics earliestVehicleStartTime. */
                        public earliestVehicleStartTime?: (google.protobuf.ITimestamp|null);

                        /** Metrics latestVehicleEndTime. */
                        public latestVehicleEndTime?: (google.protobuf.ITimestamp|null);

                        /** Metrics costs. */
                        public costs: { [k: string]: number };

                        /** Metrics totalCost. */
                        public totalCost: number;

                        /**
                         * Creates a new Metrics instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Metrics instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.OptimizeToursResponse.IMetrics): google.maps.routeoptimization.v1.OptimizeToursResponse.Metrics;

                        /**
                         * Encodes the specified Metrics message. Does not implicitly {@link google.maps.routeoptimization.v1.OptimizeToursResponse.Metrics.verify|verify} messages.
                         * @param message Metrics message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.OptimizeToursResponse.IMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Metrics message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.OptimizeToursResponse.Metrics.verify|verify} messages.
                         * @param message Metrics message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.OptimizeToursResponse.IMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Metrics message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Metrics
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.OptimizeToursResponse.Metrics;

                        /**
                         * Decodes a Metrics message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Metrics
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.OptimizeToursResponse.Metrics;

                        /**
                         * Verifies a Metrics message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Metrics message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Metrics
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.OptimizeToursResponse.Metrics;

                        /**
                         * Creates a plain object from a Metrics message. Also converts values to other types if specified.
                         * @param message Metrics
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.OptimizeToursResponse.Metrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Metrics to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Metrics
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ShipmentModel. */
                interface IShipmentModel {

                    /** ShipmentModel shipments */
                    shipments?: (google.maps.routeoptimization.v1.IShipment[]|null);

                    /** ShipmentModel vehicles */
                    vehicles?: (google.maps.routeoptimization.v1.IVehicle[]|null);

                    /** ShipmentModel maxActiveVehicles */
                    maxActiveVehicles?: (number|null);

                    /** ShipmentModel globalStartTime */
                    globalStartTime?: (google.protobuf.ITimestamp|null);

                    /** ShipmentModel globalEndTime */
                    globalEndTime?: (google.protobuf.ITimestamp|null);

                    /** ShipmentModel globalDurationCostPerHour */
                    globalDurationCostPerHour?: (number|null);

                    /** ShipmentModel durationDistanceMatrices */
                    durationDistanceMatrices?: (google.maps.routeoptimization.v1.ShipmentModel.IDurationDistanceMatrix[]|null);

                    /** ShipmentModel durationDistanceMatrixSrcTags */
                    durationDistanceMatrixSrcTags?: (string[]|null);

                    /** ShipmentModel durationDistanceMatrixDstTags */
                    durationDistanceMatrixDstTags?: (string[]|null);

                    /** ShipmentModel transitionAttributes */
                    transitionAttributes?: (google.maps.routeoptimization.v1.ITransitionAttributes[]|null);

                    /** ShipmentModel shipmentTypeIncompatibilities */
                    shipmentTypeIncompatibilities?: (google.maps.routeoptimization.v1.IShipmentTypeIncompatibility[]|null);

                    /** ShipmentModel shipmentTypeRequirements */
                    shipmentTypeRequirements?: (google.maps.routeoptimization.v1.IShipmentTypeRequirement[]|null);

                    /** ShipmentModel precedenceRules */
                    precedenceRules?: (google.maps.routeoptimization.v1.ShipmentModel.IPrecedenceRule[]|null);
                }

                /** Represents a ShipmentModel. */
                class ShipmentModel implements IShipmentModel {

                    /**
                     * Constructs a new ShipmentModel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IShipmentModel);

                    /** ShipmentModel shipments. */
                    public shipments: google.maps.routeoptimization.v1.IShipment[];

                    /** ShipmentModel vehicles. */
                    public vehicles: google.maps.routeoptimization.v1.IVehicle[];

                    /** ShipmentModel maxActiveVehicles. */
                    public maxActiveVehicles?: (number|null);

                    /** ShipmentModel globalStartTime. */
                    public globalStartTime?: (google.protobuf.ITimestamp|null);

                    /** ShipmentModel globalEndTime. */
                    public globalEndTime?: (google.protobuf.ITimestamp|null);

                    /** ShipmentModel globalDurationCostPerHour. */
                    public globalDurationCostPerHour: number;

                    /** ShipmentModel durationDistanceMatrices. */
                    public durationDistanceMatrices: google.maps.routeoptimization.v1.ShipmentModel.IDurationDistanceMatrix[];

                    /** ShipmentModel durationDistanceMatrixSrcTags. */
                    public durationDistanceMatrixSrcTags: string[];

                    /** ShipmentModel durationDistanceMatrixDstTags. */
                    public durationDistanceMatrixDstTags: string[];

                    /** ShipmentModel transitionAttributes. */
                    public transitionAttributes: google.maps.routeoptimization.v1.ITransitionAttributes[];

                    /** ShipmentModel shipmentTypeIncompatibilities. */
                    public shipmentTypeIncompatibilities: google.maps.routeoptimization.v1.IShipmentTypeIncompatibility[];

                    /** ShipmentModel shipmentTypeRequirements. */
                    public shipmentTypeRequirements: google.maps.routeoptimization.v1.IShipmentTypeRequirement[];

                    /** ShipmentModel precedenceRules. */
                    public precedenceRules: google.maps.routeoptimization.v1.ShipmentModel.IPrecedenceRule[];

                    /** ShipmentModel _maxActiveVehicles. */
                    public _maxActiveVehicles?: "maxActiveVehicles";

                    /**
                     * Creates a new ShipmentModel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShipmentModel instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IShipmentModel): google.maps.routeoptimization.v1.ShipmentModel;

                    /**
                     * Encodes the specified ShipmentModel message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentModel.verify|verify} messages.
                     * @param message ShipmentModel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IShipmentModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShipmentModel message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentModel.verify|verify} messages.
                     * @param message ShipmentModel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IShipmentModel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShipmentModel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShipmentModel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentModel;

                    /**
                     * Decodes a ShipmentModel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShipmentModel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentModel;

                    /**
                     * Verifies a ShipmentModel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShipmentModel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShipmentModel
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentModel;

                    /**
                     * Creates a plain object from a ShipmentModel message. Also converts values to other types if specified.
                     * @param message ShipmentModel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.ShipmentModel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShipmentModel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShipmentModel
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ShipmentModel {

                    /** Properties of a DurationDistanceMatrix. */
                    interface IDurationDistanceMatrix {

                        /** DurationDistanceMatrix rows */
                        rows?: (google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.IRow[]|null);

                        /** DurationDistanceMatrix vehicleStartTag */
                        vehicleStartTag?: (string|null);
                    }

                    /** Represents a DurationDistanceMatrix. */
                    class DurationDistanceMatrix implements IDurationDistanceMatrix {

                        /**
                         * Constructs a new DurationDistanceMatrix.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.ShipmentModel.IDurationDistanceMatrix);

                        /** DurationDistanceMatrix rows. */
                        public rows: google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.IRow[];

                        /** DurationDistanceMatrix vehicleStartTag. */
                        public vehicleStartTag: string;

                        /**
                         * Creates a new DurationDistanceMatrix instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DurationDistanceMatrix instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.ShipmentModel.IDurationDistanceMatrix): google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix;

                        /**
                         * Encodes the specified DurationDistanceMatrix message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.verify|verify} messages.
                         * @param message DurationDistanceMatrix message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.ShipmentModel.IDurationDistanceMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DurationDistanceMatrix message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.verify|verify} messages.
                         * @param message DurationDistanceMatrix message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.ShipmentModel.IDurationDistanceMatrix, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DurationDistanceMatrix message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DurationDistanceMatrix
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix;

                        /**
                         * Decodes a DurationDistanceMatrix message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DurationDistanceMatrix
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix;

                        /**
                         * Verifies a DurationDistanceMatrix message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DurationDistanceMatrix message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DurationDistanceMatrix
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix;

                        /**
                         * Creates a plain object from a DurationDistanceMatrix message. Also converts values to other types if specified.
                         * @param message DurationDistanceMatrix
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DurationDistanceMatrix to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DurationDistanceMatrix
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace DurationDistanceMatrix {

                        /** Properties of a Row. */
                        interface IRow {

                            /** Row durations */
                            durations?: (google.protobuf.IDuration[]|null);

                            /** Row meters */
                            meters?: (number[]|null);
                        }

                        /** Represents a Row. */
                        class Row implements IRow {

                            /**
                             * Constructs a new Row.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.IRow);

                            /** Row durations. */
                            public durations: google.protobuf.IDuration[];

                            /** Row meters. */
                            public meters: number[];

                            /**
                             * Creates a new Row instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Row instance
                             */
                            public static create(properties?: google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.IRow): google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.Row;

                            /**
                             * Encodes the specified Row message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.Row.verify|verify} messages.
                             * @param message Row message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Row message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.Row.verify|verify} messages.
                             * @param message Row message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.IRow, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Row message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Row
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.Row;

                            /**
                             * Decodes a Row message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Row
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.Row;

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
                            public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.Row;

                            /**
                             * Creates a plain object from a Row message. Also converts values to other types if specified.
                             * @param message Row
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.routeoptimization.v1.ShipmentModel.DurationDistanceMatrix.Row, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    }

                    /** Properties of a PrecedenceRule. */
                    interface IPrecedenceRule {

                        /** PrecedenceRule firstIndex */
                        firstIndex?: (number|null);

                        /** PrecedenceRule firstIsDelivery */
                        firstIsDelivery?: (boolean|null);

                        /** PrecedenceRule secondIndex */
                        secondIndex?: (number|null);

                        /** PrecedenceRule secondIsDelivery */
                        secondIsDelivery?: (boolean|null);

                        /** PrecedenceRule offsetDuration */
                        offsetDuration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a PrecedenceRule. */
                    class PrecedenceRule implements IPrecedenceRule {

                        /**
                         * Constructs a new PrecedenceRule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.ShipmentModel.IPrecedenceRule);

                        /** PrecedenceRule firstIndex. */
                        public firstIndex?: (number|null);

                        /** PrecedenceRule firstIsDelivery. */
                        public firstIsDelivery: boolean;

                        /** PrecedenceRule secondIndex. */
                        public secondIndex?: (number|null);

                        /** PrecedenceRule secondIsDelivery. */
                        public secondIsDelivery: boolean;

                        /** PrecedenceRule offsetDuration. */
                        public offsetDuration?: (google.protobuf.IDuration|null);

                        /** PrecedenceRule _firstIndex. */
                        public _firstIndex?: "firstIndex";

                        /** PrecedenceRule _secondIndex. */
                        public _secondIndex?: "secondIndex";

                        /**
                         * Creates a new PrecedenceRule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PrecedenceRule instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.ShipmentModel.IPrecedenceRule): google.maps.routeoptimization.v1.ShipmentModel.PrecedenceRule;

                        /**
                         * Encodes the specified PrecedenceRule message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentModel.PrecedenceRule.verify|verify} messages.
                         * @param message PrecedenceRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.ShipmentModel.IPrecedenceRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PrecedenceRule message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentModel.PrecedenceRule.verify|verify} messages.
                         * @param message PrecedenceRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.ShipmentModel.IPrecedenceRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PrecedenceRule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PrecedenceRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentModel.PrecedenceRule;

                        /**
                         * Decodes a PrecedenceRule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PrecedenceRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentModel.PrecedenceRule;

                        /**
                         * Verifies a PrecedenceRule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PrecedenceRule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PrecedenceRule
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentModel.PrecedenceRule;

                        /**
                         * Creates a plain object from a PrecedenceRule message. Also converts values to other types if specified.
                         * @param message PrecedenceRule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.ShipmentModel.PrecedenceRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PrecedenceRule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PrecedenceRule
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a Shipment. */
                interface IShipment {

                    /** Shipment displayName */
                    displayName?: (string|null);

                    /** Shipment pickups */
                    pickups?: (google.maps.routeoptimization.v1.Shipment.IVisitRequest[]|null);

                    /** Shipment deliveries */
                    deliveries?: (google.maps.routeoptimization.v1.Shipment.IVisitRequest[]|null);

                    /** Shipment loadDemands */
                    loadDemands?: ({ [k: string]: google.maps.routeoptimization.v1.Shipment.ILoad }|null);

                    /** Shipment penaltyCost */
                    penaltyCost?: (number|null);

                    /** Shipment allowedVehicleIndices */
                    allowedVehicleIndices?: (number[]|null);

                    /** Shipment costsPerVehicle */
                    costsPerVehicle?: (number[]|null);

                    /** Shipment costsPerVehicleIndices */
                    costsPerVehicleIndices?: (number[]|null);

                    /** Shipment pickupToDeliveryRelativeDetourLimit */
                    pickupToDeliveryRelativeDetourLimit?: (number|null);

                    /** Shipment pickupToDeliveryAbsoluteDetourLimit */
                    pickupToDeliveryAbsoluteDetourLimit?: (google.protobuf.IDuration|null);

                    /** Shipment pickupToDeliveryTimeLimit */
                    pickupToDeliveryTimeLimit?: (google.protobuf.IDuration|null);

                    /** Shipment shipmentType */
                    shipmentType?: (string|null);

                    /** Shipment label */
                    label?: (string|null);

                    /** Shipment ignore */
                    ignore?: (boolean|null);
                }

                /** Represents a Shipment. */
                class Shipment implements IShipment {

                    /**
                     * Constructs a new Shipment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IShipment);

                    /** Shipment displayName. */
                    public displayName: string;

                    /** Shipment pickups. */
                    public pickups: google.maps.routeoptimization.v1.Shipment.IVisitRequest[];

                    /** Shipment deliveries. */
                    public deliveries: google.maps.routeoptimization.v1.Shipment.IVisitRequest[];

                    /** Shipment loadDemands. */
                    public loadDemands: { [k: string]: google.maps.routeoptimization.v1.Shipment.ILoad };

                    /** Shipment penaltyCost. */
                    public penaltyCost?: (number|null);

                    /** Shipment allowedVehicleIndices. */
                    public allowedVehicleIndices: number[];

                    /** Shipment costsPerVehicle. */
                    public costsPerVehicle: number[];

                    /** Shipment costsPerVehicleIndices. */
                    public costsPerVehicleIndices: number[];

                    /** Shipment pickupToDeliveryRelativeDetourLimit. */
                    public pickupToDeliveryRelativeDetourLimit?: (number|null);

                    /** Shipment pickupToDeliveryAbsoluteDetourLimit. */
                    public pickupToDeliveryAbsoluteDetourLimit?: (google.protobuf.IDuration|null);

                    /** Shipment pickupToDeliveryTimeLimit. */
                    public pickupToDeliveryTimeLimit?: (google.protobuf.IDuration|null);

                    /** Shipment shipmentType. */
                    public shipmentType: string;

                    /** Shipment label. */
                    public label: string;

                    /** Shipment ignore. */
                    public ignore: boolean;

                    /** Shipment _penaltyCost. */
                    public _penaltyCost?: "penaltyCost";

                    /** Shipment _pickupToDeliveryRelativeDetourLimit. */
                    public _pickupToDeliveryRelativeDetourLimit?: "pickupToDeliveryRelativeDetourLimit";

                    /**
                     * Creates a new Shipment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Shipment instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IShipment): google.maps.routeoptimization.v1.Shipment;

                    /**
                     * Encodes the specified Shipment message. Does not implicitly {@link google.maps.routeoptimization.v1.Shipment.verify|verify} messages.
                     * @param message Shipment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IShipment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Shipment message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.Shipment.verify|verify} messages.
                     * @param message Shipment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IShipment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Shipment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Shipment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.Shipment;

                    /**
                     * Decodes a Shipment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Shipment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.Shipment;

                    /**
                     * Verifies a Shipment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Shipment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Shipment
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.Shipment;

                    /**
                     * Creates a plain object from a Shipment message. Also converts values to other types if specified.
                     * @param message Shipment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.Shipment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Shipment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Shipment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Shipment {

                    /** Properties of a VisitRequest. */
                    interface IVisitRequest {

                        /** VisitRequest arrivalLocation */
                        arrivalLocation?: (google.type.ILatLng|null);

                        /** VisitRequest arrivalWaypoint */
                        arrivalWaypoint?: (google.maps.routeoptimization.v1.IWaypoint|null);

                        /** VisitRequest departureLocation */
                        departureLocation?: (google.type.ILatLng|null);

                        /** VisitRequest departureWaypoint */
                        departureWaypoint?: (google.maps.routeoptimization.v1.IWaypoint|null);

                        /** VisitRequest tags */
                        tags?: (string[]|null);

                        /** VisitRequest timeWindows */
                        timeWindows?: (google.maps.routeoptimization.v1.ITimeWindow[]|null);

                        /** VisitRequest duration */
                        duration?: (google.protobuf.IDuration|null);

                        /** VisitRequest cost */
                        cost?: (number|null);

                        /** VisitRequest loadDemands */
                        loadDemands?: ({ [k: string]: google.maps.routeoptimization.v1.Shipment.ILoad }|null);

                        /** VisitRequest visitTypes */
                        visitTypes?: (string[]|null);

                        /** VisitRequest label */
                        label?: (string|null);
                    }

                    /** Represents a VisitRequest. */
                    class VisitRequest implements IVisitRequest {

                        /**
                         * Constructs a new VisitRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.Shipment.IVisitRequest);

                        /** VisitRequest arrivalLocation. */
                        public arrivalLocation?: (google.type.ILatLng|null);

                        /** VisitRequest arrivalWaypoint. */
                        public arrivalWaypoint?: (google.maps.routeoptimization.v1.IWaypoint|null);

                        /** VisitRequest departureLocation. */
                        public departureLocation?: (google.type.ILatLng|null);

                        /** VisitRequest departureWaypoint. */
                        public departureWaypoint?: (google.maps.routeoptimization.v1.IWaypoint|null);

                        /** VisitRequest tags. */
                        public tags: string[];

                        /** VisitRequest timeWindows. */
                        public timeWindows: google.maps.routeoptimization.v1.ITimeWindow[];

                        /** VisitRequest duration. */
                        public duration?: (google.protobuf.IDuration|null);

                        /** VisitRequest cost. */
                        public cost: number;

                        /** VisitRequest loadDemands. */
                        public loadDemands: { [k: string]: google.maps.routeoptimization.v1.Shipment.ILoad };

                        /** VisitRequest visitTypes. */
                        public visitTypes: string[];

                        /** VisitRequest label. */
                        public label: string;

                        /**
                         * Creates a new VisitRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VisitRequest instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.Shipment.IVisitRequest): google.maps.routeoptimization.v1.Shipment.VisitRequest;

                        /**
                         * Encodes the specified VisitRequest message. Does not implicitly {@link google.maps.routeoptimization.v1.Shipment.VisitRequest.verify|verify} messages.
                         * @param message VisitRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.Shipment.IVisitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VisitRequest message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.Shipment.VisitRequest.verify|verify} messages.
                         * @param message VisitRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.Shipment.IVisitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VisitRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VisitRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.Shipment.VisitRequest;

                        /**
                         * Decodes a VisitRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VisitRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.Shipment.VisitRequest;

                        /**
                         * Verifies a VisitRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VisitRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VisitRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.Shipment.VisitRequest;

                        /**
                         * Creates a plain object from a VisitRequest message. Also converts values to other types if specified.
                         * @param message VisitRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.Shipment.VisitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VisitRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VisitRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Load. */
                    interface ILoad {

                        /** Load amount */
                        amount?: (number|Long|string|null);
                    }

                    /** Represents a Load. */
                    class Load implements ILoad {

                        /**
                         * Constructs a new Load.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.Shipment.ILoad);

                        /** Load amount. */
                        public amount: (number|Long|string);

                        /**
                         * Creates a new Load instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Load instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.Shipment.ILoad): google.maps.routeoptimization.v1.Shipment.Load;

                        /**
                         * Encodes the specified Load message. Does not implicitly {@link google.maps.routeoptimization.v1.Shipment.Load.verify|verify} messages.
                         * @param message Load message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.Shipment.ILoad, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Load message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.Shipment.Load.verify|verify} messages.
                         * @param message Load message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.Shipment.ILoad, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Load message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Load
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.Shipment.Load;

                        /**
                         * Decodes a Load message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Load
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.Shipment.Load;

                        /**
                         * Verifies a Load message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Load message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Load
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.Shipment.Load;

                        /**
                         * Creates a plain object from a Load message. Also converts values to other types if specified.
                         * @param message Load
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.Shipment.Load, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Load to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Load
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ShipmentTypeIncompatibility. */
                interface IShipmentTypeIncompatibility {

                    /** ShipmentTypeIncompatibility types */
                    types?: (string[]|null);

                    /** ShipmentTypeIncompatibility incompatibilityMode */
                    incompatibilityMode?: (google.maps.routeoptimization.v1.ShipmentTypeIncompatibility.IncompatibilityMode|keyof typeof google.maps.routeoptimization.v1.ShipmentTypeIncompatibility.IncompatibilityMode|null);
                }

                /** Represents a ShipmentTypeIncompatibility. */
                class ShipmentTypeIncompatibility implements IShipmentTypeIncompatibility {

                    /**
                     * Constructs a new ShipmentTypeIncompatibility.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IShipmentTypeIncompatibility);

                    /** ShipmentTypeIncompatibility types. */
                    public types: string[];

                    /** ShipmentTypeIncompatibility incompatibilityMode. */
                    public incompatibilityMode: (google.maps.routeoptimization.v1.ShipmentTypeIncompatibility.IncompatibilityMode|keyof typeof google.maps.routeoptimization.v1.ShipmentTypeIncompatibility.IncompatibilityMode);

                    /**
                     * Creates a new ShipmentTypeIncompatibility instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShipmentTypeIncompatibility instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IShipmentTypeIncompatibility): google.maps.routeoptimization.v1.ShipmentTypeIncompatibility;

                    /**
                     * Encodes the specified ShipmentTypeIncompatibility message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentTypeIncompatibility.verify|verify} messages.
                     * @param message ShipmentTypeIncompatibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IShipmentTypeIncompatibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShipmentTypeIncompatibility message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentTypeIncompatibility.verify|verify} messages.
                     * @param message ShipmentTypeIncompatibility message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IShipmentTypeIncompatibility, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShipmentTypeIncompatibility message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShipmentTypeIncompatibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentTypeIncompatibility;

                    /**
                     * Decodes a ShipmentTypeIncompatibility message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShipmentTypeIncompatibility
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentTypeIncompatibility;

                    /**
                     * Verifies a ShipmentTypeIncompatibility message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShipmentTypeIncompatibility message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShipmentTypeIncompatibility
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentTypeIncompatibility;

                    /**
                     * Creates a plain object from a ShipmentTypeIncompatibility message. Also converts values to other types if specified.
                     * @param message ShipmentTypeIncompatibility
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.ShipmentTypeIncompatibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShipmentTypeIncompatibility to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShipmentTypeIncompatibility
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ShipmentTypeIncompatibility {

                    /** IncompatibilityMode enum. */
                    enum IncompatibilityMode {
                        INCOMPATIBILITY_MODE_UNSPECIFIED = 0,
                        NOT_PERFORMED_BY_SAME_VEHICLE = 1,
                        NOT_IN_SAME_VEHICLE_SIMULTANEOUSLY = 2
                    }
                }

                /** Properties of a ShipmentTypeRequirement. */
                interface IShipmentTypeRequirement {

                    /** ShipmentTypeRequirement requiredShipmentTypeAlternatives */
                    requiredShipmentTypeAlternatives?: (string[]|null);

                    /** ShipmentTypeRequirement dependentShipmentTypes */
                    dependentShipmentTypes?: (string[]|null);

                    /** ShipmentTypeRequirement requirementMode */
                    requirementMode?: (google.maps.routeoptimization.v1.ShipmentTypeRequirement.RequirementMode|keyof typeof google.maps.routeoptimization.v1.ShipmentTypeRequirement.RequirementMode|null);
                }

                /** Represents a ShipmentTypeRequirement. */
                class ShipmentTypeRequirement implements IShipmentTypeRequirement {

                    /**
                     * Constructs a new ShipmentTypeRequirement.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IShipmentTypeRequirement);

                    /** ShipmentTypeRequirement requiredShipmentTypeAlternatives. */
                    public requiredShipmentTypeAlternatives: string[];

                    /** ShipmentTypeRequirement dependentShipmentTypes. */
                    public dependentShipmentTypes: string[];

                    /** ShipmentTypeRequirement requirementMode. */
                    public requirementMode: (google.maps.routeoptimization.v1.ShipmentTypeRequirement.RequirementMode|keyof typeof google.maps.routeoptimization.v1.ShipmentTypeRequirement.RequirementMode);

                    /**
                     * Creates a new ShipmentTypeRequirement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShipmentTypeRequirement instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IShipmentTypeRequirement): google.maps.routeoptimization.v1.ShipmentTypeRequirement;

                    /**
                     * Encodes the specified ShipmentTypeRequirement message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentTypeRequirement.verify|verify} messages.
                     * @param message ShipmentTypeRequirement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IShipmentTypeRequirement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShipmentTypeRequirement message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentTypeRequirement.verify|verify} messages.
                     * @param message ShipmentTypeRequirement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IShipmentTypeRequirement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShipmentTypeRequirement message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShipmentTypeRequirement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentTypeRequirement;

                    /**
                     * Decodes a ShipmentTypeRequirement message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShipmentTypeRequirement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentTypeRequirement;

                    /**
                     * Verifies a ShipmentTypeRequirement message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShipmentTypeRequirement message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShipmentTypeRequirement
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentTypeRequirement;

                    /**
                     * Creates a plain object from a ShipmentTypeRequirement message. Also converts values to other types if specified.
                     * @param message ShipmentTypeRequirement
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.ShipmentTypeRequirement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShipmentTypeRequirement to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShipmentTypeRequirement
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ShipmentTypeRequirement {

                    /** RequirementMode enum. */
                    enum RequirementMode {
                        REQUIREMENT_MODE_UNSPECIFIED = 0,
                        PERFORMED_BY_SAME_VEHICLE = 1,
                        IN_SAME_VEHICLE_AT_PICKUP_TIME = 2,
                        IN_SAME_VEHICLE_AT_DELIVERY_TIME = 3
                    }
                }

                /** Properties of a RouteModifiers. */
                interface IRouteModifiers {

                    /** RouteModifiers avoidTolls */
                    avoidTolls?: (boolean|null);

                    /** RouteModifiers avoidHighways */
                    avoidHighways?: (boolean|null);

                    /** RouteModifiers avoidFerries */
                    avoidFerries?: (boolean|null);

                    /** RouteModifiers avoidIndoor */
                    avoidIndoor?: (boolean|null);
                }

                /** Represents a RouteModifiers. */
                class RouteModifiers implements IRouteModifiers {

                    /**
                     * Constructs a new RouteModifiers.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IRouteModifiers);

                    /** RouteModifiers avoidTolls. */
                    public avoidTolls: boolean;

                    /** RouteModifiers avoidHighways. */
                    public avoidHighways: boolean;

                    /** RouteModifiers avoidFerries. */
                    public avoidFerries: boolean;

                    /** RouteModifiers avoidIndoor. */
                    public avoidIndoor: boolean;

                    /**
                     * Creates a new RouteModifiers instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RouteModifiers instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IRouteModifiers): google.maps.routeoptimization.v1.RouteModifiers;

                    /**
                     * Encodes the specified RouteModifiers message. Does not implicitly {@link google.maps.routeoptimization.v1.RouteModifiers.verify|verify} messages.
                     * @param message RouteModifiers message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IRouteModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RouteModifiers message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.RouteModifiers.verify|verify} messages.
                     * @param message RouteModifiers message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IRouteModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RouteModifiers message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RouteModifiers
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.RouteModifiers;

                    /**
                     * Decodes a RouteModifiers message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RouteModifiers
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.RouteModifiers;

                    /**
                     * Verifies a RouteModifiers message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RouteModifiers message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RouteModifiers
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.RouteModifiers;

                    /**
                     * Creates a plain object from a RouteModifiers message. Also converts values to other types if specified.
                     * @param message RouteModifiers
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.RouteModifiers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RouteModifiers to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RouteModifiers
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Vehicle. */
                interface IVehicle {

                    /** Vehicle displayName */
                    displayName?: (string|null);

                    /** Vehicle travelMode */
                    travelMode?: (google.maps.routeoptimization.v1.Vehicle.TravelMode|keyof typeof google.maps.routeoptimization.v1.Vehicle.TravelMode|null);

                    /** Vehicle routeModifiers */
                    routeModifiers?: (google.maps.routeoptimization.v1.IRouteModifiers|null);

                    /** Vehicle startLocation */
                    startLocation?: (google.type.ILatLng|null);

                    /** Vehicle startWaypoint */
                    startWaypoint?: (google.maps.routeoptimization.v1.IWaypoint|null);

                    /** Vehicle endLocation */
                    endLocation?: (google.type.ILatLng|null);

                    /** Vehicle endWaypoint */
                    endWaypoint?: (google.maps.routeoptimization.v1.IWaypoint|null);

                    /** Vehicle startTags */
                    startTags?: (string[]|null);

                    /** Vehicle endTags */
                    endTags?: (string[]|null);

                    /** Vehicle startTimeWindows */
                    startTimeWindows?: (google.maps.routeoptimization.v1.ITimeWindow[]|null);

                    /** Vehicle endTimeWindows */
                    endTimeWindows?: (google.maps.routeoptimization.v1.ITimeWindow[]|null);

                    /** Vehicle travelDurationMultiple */
                    travelDurationMultiple?: (number|null);

                    /** Vehicle unloadingPolicy */
                    unloadingPolicy?: (google.maps.routeoptimization.v1.Vehicle.UnloadingPolicy|keyof typeof google.maps.routeoptimization.v1.Vehicle.UnloadingPolicy|null);

                    /** Vehicle loadLimits */
                    loadLimits?: ({ [k: string]: google.maps.routeoptimization.v1.Vehicle.ILoadLimit }|null);

                    /** Vehicle costPerHour */
                    costPerHour?: (number|null);

                    /** Vehicle costPerTraveledHour */
                    costPerTraveledHour?: (number|null);

                    /** Vehicle costPerKilometer */
                    costPerKilometer?: (number|null);

                    /** Vehicle fixedCost */
                    fixedCost?: (number|null);

                    /** Vehicle usedIfRouteIsEmpty */
                    usedIfRouteIsEmpty?: (boolean|null);

                    /** Vehicle routeDurationLimit */
                    routeDurationLimit?: (google.maps.routeoptimization.v1.Vehicle.IDurationLimit|null);

                    /** Vehicle travelDurationLimit */
                    travelDurationLimit?: (google.maps.routeoptimization.v1.Vehicle.IDurationLimit|null);

                    /** Vehicle routeDistanceLimit */
                    routeDistanceLimit?: (google.maps.routeoptimization.v1.IDistanceLimit|null);

                    /** Vehicle extraVisitDurationForVisitType */
                    extraVisitDurationForVisitType?: ({ [k: string]: google.protobuf.IDuration }|null);

                    /** Vehicle breakRule */
                    breakRule?: (google.maps.routeoptimization.v1.IBreakRule|null);

                    /** Vehicle label */
                    label?: (string|null);

                    /** Vehicle ignore */
                    ignore?: (boolean|null);
                }

                /** Represents a Vehicle. */
                class Vehicle implements IVehicle {

                    /**
                     * Constructs a new Vehicle.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IVehicle);

                    /** Vehicle displayName. */
                    public displayName: string;

                    /** Vehicle travelMode. */
                    public travelMode: (google.maps.routeoptimization.v1.Vehicle.TravelMode|keyof typeof google.maps.routeoptimization.v1.Vehicle.TravelMode);

                    /** Vehicle routeModifiers. */
                    public routeModifiers?: (google.maps.routeoptimization.v1.IRouteModifiers|null);

                    /** Vehicle startLocation. */
                    public startLocation?: (google.type.ILatLng|null);

                    /** Vehicle startWaypoint. */
                    public startWaypoint?: (google.maps.routeoptimization.v1.IWaypoint|null);

                    /** Vehicle endLocation. */
                    public endLocation?: (google.type.ILatLng|null);

                    /** Vehicle endWaypoint. */
                    public endWaypoint?: (google.maps.routeoptimization.v1.IWaypoint|null);

                    /** Vehicle startTags. */
                    public startTags: string[];

                    /** Vehicle endTags. */
                    public endTags: string[];

                    /** Vehicle startTimeWindows. */
                    public startTimeWindows: google.maps.routeoptimization.v1.ITimeWindow[];

                    /** Vehicle endTimeWindows. */
                    public endTimeWindows: google.maps.routeoptimization.v1.ITimeWindow[];

                    /** Vehicle travelDurationMultiple. */
                    public travelDurationMultiple?: (number|null);

                    /** Vehicle unloadingPolicy. */
                    public unloadingPolicy: (google.maps.routeoptimization.v1.Vehicle.UnloadingPolicy|keyof typeof google.maps.routeoptimization.v1.Vehicle.UnloadingPolicy);

                    /** Vehicle loadLimits. */
                    public loadLimits: { [k: string]: google.maps.routeoptimization.v1.Vehicle.ILoadLimit };

                    /** Vehicle costPerHour. */
                    public costPerHour: number;

                    /** Vehicle costPerTraveledHour. */
                    public costPerTraveledHour: number;

                    /** Vehicle costPerKilometer. */
                    public costPerKilometer: number;

                    /** Vehicle fixedCost. */
                    public fixedCost: number;

                    /** Vehicle usedIfRouteIsEmpty. */
                    public usedIfRouteIsEmpty: boolean;

                    /** Vehicle routeDurationLimit. */
                    public routeDurationLimit?: (google.maps.routeoptimization.v1.Vehicle.IDurationLimit|null);

                    /** Vehicle travelDurationLimit. */
                    public travelDurationLimit?: (google.maps.routeoptimization.v1.Vehicle.IDurationLimit|null);

                    /** Vehicle routeDistanceLimit. */
                    public routeDistanceLimit?: (google.maps.routeoptimization.v1.IDistanceLimit|null);

                    /** Vehicle extraVisitDurationForVisitType. */
                    public extraVisitDurationForVisitType: { [k: string]: google.protobuf.IDuration };

                    /** Vehicle breakRule. */
                    public breakRule?: (google.maps.routeoptimization.v1.IBreakRule|null);

                    /** Vehicle label. */
                    public label: string;

                    /** Vehicle ignore. */
                    public ignore: boolean;

                    /** Vehicle _travelDurationMultiple. */
                    public _travelDurationMultiple?: "travelDurationMultiple";

                    /**
                     * Creates a new Vehicle instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Vehicle instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IVehicle): google.maps.routeoptimization.v1.Vehicle;

                    /**
                     * Encodes the specified Vehicle message. Does not implicitly {@link google.maps.routeoptimization.v1.Vehicle.verify|verify} messages.
                     * @param message Vehicle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IVehicle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Vehicle message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.Vehicle.verify|verify} messages.
                     * @param message Vehicle message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IVehicle, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Vehicle message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Vehicle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.Vehicle;

                    /**
                     * Decodes a Vehicle message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Vehicle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.Vehicle;

                    /**
                     * Verifies a Vehicle message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Vehicle message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Vehicle
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.Vehicle;

                    /**
                     * Creates a plain object from a Vehicle message. Also converts values to other types if specified.
                     * @param message Vehicle
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.Vehicle, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Vehicle to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Vehicle
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Vehicle {

                    /** TravelMode enum. */
                    enum TravelMode {
                        TRAVEL_MODE_UNSPECIFIED = 0,
                        DRIVING = 1,
                        WALKING = 2
                    }

                    /** UnloadingPolicy enum. */
                    enum UnloadingPolicy {
                        UNLOADING_POLICY_UNSPECIFIED = 0,
                        LAST_IN_FIRST_OUT = 1,
                        FIRST_IN_FIRST_OUT = 2
                    }

                    /** Properties of a LoadLimit. */
                    interface ILoadLimit {

                        /** LoadLimit maxLoad */
                        maxLoad?: (number|Long|string|null);

                        /** LoadLimit softMaxLoad */
                        softMaxLoad?: (number|Long|string|null);

                        /** LoadLimit costPerUnitAboveSoftMax */
                        costPerUnitAboveSoftMax?: (number|null);

                        /** LoadLimit startLoadInterval */
                        startLoadInterval?: (google.maps.routeoptimization.v1.Vehicle.LoadLimit.IInterval|null);

                        /** LoadLimit endLoadInterval */
                        endLoadInterval?: (google.maps.routeoptimization.v1.Vehicle.LoadLimit.IInterval|null);
                    }

                    /** Represents a LoadLimit. */
                    class LoadLimit implements ILoadLimit {

                        /**
                         * Constructs a new LoadLimit.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.Vehicle.ILoadLimit);

                        /** LoadLimit maxLoad. */
                        public maxLoad?: (number|Long|string|null);

                        /** LoadLimit softMaxLoad. */
                        public softMaxLoad: (number|Long|string);

                        /** LoadLimit costPerUnitAboveSoftMax. */
                        public costPerUnitAboveSoftMax: number;

                        /** LoadLimit startLoadInterval. */
                        public startLoadInterval?: (google.maps.routeoptimization.v1.Vehicle.LoadLimit.IInterval|null);

                        /** LoadLimit endLoadInterval. */
                        public endLoadInterval?: (google.maps.routeoptimization.v1.Vehicle.LoadLimit.IInterval|null);

                        /** LoadLimit _maxLoad. */
                        public _maxLoad?: "maxLoad";

                        /**
                         * Creates a new LoadLimit instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LoadLimit instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.Vehicle.ILoadLimit): google.maps.routeoptimization.v1.Vehicle.LoadLimit;

                        /**
                         * Encodes the specified LoadLimit message. Does not implicitly {@link google.maps.routeoptimization.v1.Vehicle.LoadLimit.verify|verify} messages.
                         * @param message LoadLimit message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.Vehicle.ILoadLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LoadLimit message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.Vehicle.LoadLimit.verify|verify} messages.
                         * @param message LoadLimit message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.Vehicle.ILoadLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LoadLimit message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LoadLimit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.Vehicle.LoadLimit;

                        /**
                         * Decodes a LoadLimit message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LoadLimit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.Vehicle.LoadLimit;

                        /**
                         * Verifies a LoadLimit message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LoadLimit message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LoadLimit
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.Vehicle.LoadLimit;

                        /**
                         * Creates a plain object from a LoadLimit message. Also converts values to other types if specified.
                         * @param message LoadLimit
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.Vehicle.LoadLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LoadLimit to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LoadLimit
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace LoadLimit {

                        /** Properties of an Interval. */
                        interface IInterval {

                            /** Interval min */
                            min?: (number|Long|string|null);

                            /** Interval max */
                            max?: (number|Long|string|null);
                        }

                        /** Represents an Interval. */
                        class Interval implements IInterval {

                            /**
                             * Constructs a new Interval.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.routeoptimization.v1.Vehicle.LoadLimit.IInterval);

                            /** Interval min. */
                            public min: (number|Long|string);

                            /** Interval max. */
                            public max?: (number|Long|string|null);

                            /** Interval _max. */
                            public _max?: "max";

                            /**
                             * Creates a new Interval instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Interval instance
                             */
                            public static create(properties?: google.maps.routeoptimization.v1.Vehicle.LoadLimit.IInterval): google.maps.routeoptimization.v1.Vehicle.LoadLimit.Interval;

                            /**
                             * Encodes the specified Interval message. Does not implicitly {@link google.maps.routeoptimization.v1.Vehicle.LoadLimit.Interval.verify|verify} messages.
                             * @param message Interval message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.routeoptimization.v1.Vehicle.LoadLimit.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Interval message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.Vehicle.LoadLimit.Interval.verify|verify} messages.
                             * @param message Interval message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.routeoptimization.v1.Vehicle.LoadLimit.IInterval, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Interval message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Interval
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.Vehicle.LoadLimit.Interval;

                            /**
                             * Decodes an Interval message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Interval
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.Vehicle.LoadLimit.Interval;

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
                            public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.Vehicle.LoadLimit.Interval;

                            /**
                             * Creates a plain object from an Interval message. Also converts values to other types if specified.
                             * @param message Interval
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.routeoptimization.v1.Vehicle.LoadLimit.Interval, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a DurationLimit. */
                    interface IDurationLimit {

                        /** DurationLimit maxDuration */
                        maxDuration?: (google.protobuf.IDuration|null);

                        /** DurationLimit softMaxDuration */
                        softMaxDuration?: (google.protobuf.IDuration|null);

                        /** DurationLimit costPerHourAfterSoftMax */
                        costPerHourAfterSoftMax?: (number|null);

                        /** DurationLimit quadraticSoftMaxDuration */
                        quadraticSoftMaxDuration?: (google.protobuf.IDuration|null);

                        /** DurationLimit costPerSquareHourAfterQuadraticSoftMax */
                        costPerSquareHourAfterQuadraticSoftMax?: (number|null);
                    }

                    /** Represents a DurationLimit. */
                    class DurationLimit implements IDurationLimit {

                        /**
                         * Constructs a new DurationLimit.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.Vehicle.IDurationLimit);

                        /** DurationLimit maxDuration. */
                        public maxDuration?: (google.protobuf.IDuration|null);

                        /** DurationLimit softMaxDuration. */
                        public softMaxDuration?: (google.protobuf.IDuration|null);

                        /** DurationLimit costPerHourAfterSoftMax. */
                        public costPerHourAfterSoftMax?: (number|null);

                        /** DurationLimit quadraticSoftMaxDuration. */
                        public quadraticSoftMaxDuration?: (google.protobuf.IDuration|null);

                        /** DurationLimit costPerSquareHourAfterQuadraticSoftMax. */
                        public costPerSquareHourAfterQuadraticSoftMax?: (number|null);

                        /** DurationLimit _costPerHourAfterSoftMax. */
                        public _costPerHourAfterSoftMax?: "costPerHourAfterSoftMax";

                        /** DurationLimit _costPerSquareHourAfterQuadraticSoftMax. */
                        public _costPerSquareHourAfterQuadraticSoftMax?: "costPerSquareHourAfterQuadraticSoftMax";

                        /**
                         * Creates a new DurationLimit instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DurationLimit instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.Vehicle.IDurationLimit): google.maps.routeoptimization.v1.Vehicle.DurationLimit;

                        /**
                         * Encodes the specified DurationLimit message. Does not implicitly {@link google.maps.routeoptimization.v1.Vehicle.DurationLimit.verify|verify} messages.
                         * @param message DurationLimit message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.Vehicle.IDurationLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DurationLimit message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.Vehicle.DurationLimit.verify|verify} messages.
                         * @param message DurationLimit message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.Vehicle.IDurationLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DurationLimit message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DurationLimit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.Vehicle.DurationLimit;

                        /**
                         * Decodes a DurationLimit message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DurationLimit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.Vehicle.DurationLimit;

                        /**
                         * Verifies a DurationLimit message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DurationLimit message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DurationLimit
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.Vehicle.DurationLimit;

                        /**
                         * Creates a plain object from a DurationLimit message. Also converts values to other types if specified.
                         * @param message DurationLimit
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.Vehicle.DurationLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DurationLimit to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DurationLimit
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a TimeWindow. */
                interface ITimeWindow {

                    /** TimeWindow startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow softStartTime */
                    softStartTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow softEndTime */
                    softEndTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow costPerHourBeforeSoftStartTime */
                    costPerHourBeforeSoftStartTime?: (number|null);

                    /** TimeWindow costPerHourAfterSoftEndTime */
                    costPerHourAfterSoftEndTime?: (number|null);
                }

                /** Represents a TimeWindow. */
                class TimeWindow implements ITimeWindow {

                    /**
                     * Constructs a new TimeWindow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.ITimeWindow);

                    /** TimeWindow startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow softStartTime. */
                    public softStartTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow softEndTime. */
                    public softEndTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow costPerHourBeforeSoftStartTime. */
                    public costPerHourBeforeSoftStartTime?: (number|null);

                    /** TimeWindow costPerHourAfterSoftEndTime. */
                    public costPerHourAfterSoftEndTime?: (number|null);

                    /** TimeWindow _costPerHourBeforeSoftStartTime. */
                    public _costPerHourBeforeSoftStartTime?: "costPerHourBeforeSoftStartTime";

                    /** TimeWindow _costPerHourAfterSoftEndTime. */
                    public _costPerHourAfterSoftEndTime?: "costPerHourAfterSoftEndTime";

                    /**
                     * Creates a new TimeWindow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeWindow instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.ITimeWindow): google.maps.routeoptimization.v1.TimeWindow;

                    /**
                     * Encodes the specified TimeWindow message. Does not implicitly {@link google.maps.routeoptimization.v1.TimeWindow.verify|verify} messages.
                     * @param message TimeWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeWindow message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.TimeWindow.verify|verify} messages.
                     * @param message TimeWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeWindow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.TimeWindow;

                    /**
                     * Decodes a TimeWindow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.TimeWindow;

                    /**
                     * Verifies a TimeWindow message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeWindow message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeWindow
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.TimeWindow;

                    /**
                     * Creates a plain object from a TimeWindow message. Also converts values to other types if specified.
                     * @param message TimeWindow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.TimeWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeWindow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TimeWindow
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DistanceLimit. */
                interface IDistanceLimit {

                    /** DistanceLimit maxMeters */
                    maxMeters?: (number|Long|string|null);

                    /** DistanceLimit softMaxMeters */
                    softMaxMeters?: (number|Long|string|null);

                    /** DistanceLimit costPerKilometerBelowSoftMax */
                    costPerKilometerBelowSoftMax?: (number|null);

                    /** DistanceLimit costPerKilometerAboveSoftMax */
                    costPerKilometerAboveSoftMax?: (number|null);
                }

                /** Represents a DistanceLimit. */
                class DistanceLimit implements IDistanceLimit {

                    /**
                     * Constructs a new DistanceLimit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IDistanceLimit);

                    /** DistanceLimit maxMeters. */
                    public maxMeters?: (number|Long|string|null);

                    /** DistanceLimit softMaxMeters. */
                    public softMaxMeters?: (number|Long|string|null);

                    /** DistanceLimit costPerKilometerBelowSoftMax. */
                    public costPerKilometerBelowSoftMax?: (number|null);

                    /** DistanceLimit costPerKilometerAboveSoftMax. */
                    public costPerKilometerAboveSoftMax?: (number|null);

                    /** DistanceLimit _maxMeters. */
                    public _maxMeters?: "maxMeters";

                    /** DistanceLimit _softMaxMeters. */
                    public _softMaxMeters?: "softMaxMeters";

                    /** DistanceLimit _costPerKilometerBelowSoftMax. */
                    public _costPerKilometerBelowSoftMax?: "costPerKilometerBelowSoftMax";

                    /** DistanceLimit _costPerKilometerAboveSoftMax. */
                    public _costPerKilometerAboveSoftMax?: "costPerKilometerAboveSoftMax";

                    /**
                     * Creates a new DistanceLimit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DistanceLimit instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IDistanceLimit): google.maps.routeoptimization.v1.DistanceLimit;

                    /**
                     * Encodes the specified DistanceLimit message. Does not implicitly {@link google.maps.routeoptimization.v1.DistanceLimit.verify|verify} messages.
                     * @param message DistanceLimit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IDistanceLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DistanceLimit message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.DistanceLimit.verify|verify} messages.
                     * @param message DistanceLimit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IDistanceLimit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DistanceLimit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DistanceLimit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.DistanceLimit;

                    /**
                     * Decodes a DistanceLimit message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DistanceLimit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.DistanceLimit;

                    /**
                     * Verifies a DistanceLimit message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DistanceLimit message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DistanceLimit
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.DistanceLimit;

                    /**
                     * Creates a plain object from a DistanceLimit message. Also converts values to other types if specified.
                     * @param message DistanceLimit
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.DistanceLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DistanceLimit to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DistanceLimit
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TransitionAttributes. */
                interface ITransitionAttributes {

                    /** TransitionAttributes srcTag */
                    srcTag?: (string|null);

                    /** TransitionAttributes excludedSrcTag */
                    excludedSrcTag?: (string|null);

                    /** TransitionAttributes dstTag */
                    dstTag?: (string|null);

                    /** TransitionAttributes excludedDstTag */
                    excludedDstTag?: (string|null);

                    /** TransitionAttributes cost */
                    cost?: (number|null);

                    /** TransitionAttributes costPerKilometer */
                    costPerKilometer?: (number|null);

                    /** TransitionAttributes distanceLimit */
                    distanceLimit?: (google.maps.routeoptimization.v1.IDistanceLimit|null);

                    /** TransitionAttributes delay */
                    delay?: (google.protobuf.IDuration|null);
                }

                /** Represents a TransitionAttributes. */
                class TransitionAttributes implements ITransitionAttributes {

                    /**
                     * Constructs a new TransitionAttributes.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.ITransitionAttributes);

                    /** TransitionAttributes srcTag. */
                    public srcTag: string;

                    /** TransitionAttributes excludedSrcTag. */
                    public excludedSrcTag: string;

                    /** TransitionAttributes dstTag. */
                    public dstTag: string;

                    /** TransitionAttributes excludedDstTag. */
                    public excludedDstTag: string;

                    /** TransitionAttributes cost. */
                    public cost: number;

                    /** TransitionAttributes costPerKilometer. */
                    public costPerKilometer: number;

                    /** TransitionAttributes distanceLimit. */
                    public distanceLimit?: (google.maps.routeoptimization.v1.IDistanceLimit|null);

                    /** TransitionAttributes delay. */
                    public delay?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new TransitionAttributes instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TransitionAttributes instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.ITransitionAttributes): google.maps.routeoptimization.v1.TransitionAttributes;

                    /**
                     * Encodes the specified TransitionAttributes message. Does not implicitly {@link google.maps.routeoptimization.v1.TransitionAttributes.verify|verify} messages.
                     * @param message TransitionAttributes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.ITransitionAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TransitionAttributes message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.TransitionAttributes.verify|verify} messages.
                     * @param message TransitionAttributes message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.ITransitionAttributes, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TransitionAttributes message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TransitionAttributes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.TransitionAttributes;

                    /**
                     * Decodes a TransitionAttributes message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TransitionAttributes
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.TransitionAttributes;

                    /**
                     * Verifies a TransitionAttributes message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TransitionAttributes message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TransitionAttributes
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.TransitionAttributes;

                    /**
                     * Creates a plain object from a TransitionAttributes message. Also converts values to other types if specified.
                     * @param message TransitionAttributes
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.TransitionAttributes, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TransitionAttributes to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TransitionAttributes
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Waypoint. */
                interface IWaypoint {

                    /** Waypoint location */
                    location?: (google.maps.routeoptimization.v1.ILocation|null);

                    /** Waypoint placeId */
                    placeId?: (string|null);

                    /** Waypoint sideOfRoad */
                    sideOfRoad?: (boolean|null);
                }

                /** Represents a Waypoint. */
                class Waypoint implements IWaypoint {

                    /**
                     * Constructs a new Waypoint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IWaypoint);

                    /** Waypoint location. */
                    public location?: (google.maps.routeoptimization.v1.ILocation|null);

                    /** Waypoint placeId. */
                    public placeId?: (string|null);

                    /** Waypoint sideOfRoad. */
                    public sideOfRoad: boolean;

                    /** Waypoint locationType. */
                    public locationType?: ("location"|"placeId");

                    /**
                     * Creates a new Waypoint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Waypoint instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IWaypoint): google.maps.routeoptimization.v1.Waypoint;

                    /**
                     * Encodes the specified Waypoint message. Does not implicitly {@link google.maps.routeoptimization.v1.Waypoint.verify|verify} messages.
                     * @param message Waypoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Waypoint message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.Waypoint.verify|verify} messages.
                     * @param message Waypoint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Waypoint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Waypoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.Waypoint;

                    /**
                     * Decodes a Waypoint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Waypoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.Waypoint;

                    /**
                     * Verifies a Waypoint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Waypoint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Waypoint
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.Waypoint;

                    /**
                     * Creates a plain object from a Waypoint message. Also converts values to other types if specified.
                     * @param message Waypoint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.Waypoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Waypoint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Waypoint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Location. */
                interface ILocation {

                    /** Location latLng */
                    latLng?: (google.type.ILatLng|null);

                    /** Location heading */
                    heading?: (number|null);
                }

                /** Represents a Location. */
                class Location implements ILocation {

                    /**
                     * Constructs a new Location.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.ILocation);

                    /** Location latLng. */
                    public latLng?: (google.type.ILatLng|null);

                    /** Location heading. */
                    public heading?: (number|null);

                    /** Location _heading. */
                    public _heading?: "heading";

                    /**
                     * Creates a new Location instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Location instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.ILocation): google.maps.routeoptimization.v1.Location;

                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.maps.routeoptimization.v1.Location.verify|verify} messages.
                     * @param message Location message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.Location.verify|verify} messages.
                     * @param message Location message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.Location;

                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.Location;

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
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.Location;

                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @param message Location
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a BreakRule. */
                interface IBreakRule {

                    /** BreakRule breakRequests */
                    breakRequests?: (google.maps.routeoptimization.v1.BreakRule.IBreakRequest[]|null);

                    /** BreakRule frequencyConstraints */
                    frequencyConstraints?: (google.maps.routeoptimization.v1.BreakRule.IFrequencyConstraint[]|null);
                }

                /** Represents a BreakRule. */
                class BreakRule implements IBreakRule {

                    /**
                     * Constructs a new BreakRule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IBreakRule);

                    /** BreakRule breakRequests. */
                    public breakRequests: google.maps.routeoptimization.v1.BreakRule.IBreakRequest[];

                    /** BreakRule frequencyConstraints. */
                    public frequencyConstraints: google.maps.routeoptimization.v1.BreakRule.IFrequencyConstraint[];

                    /**
                     * Creates a new BreakRule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BreakRule instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IBreakRule): google.maps.routeoptimization.v1.BreakRule;

                    /**
                     * Encodes the specified BreakRule message. Does not implicitly {@link google.maps.routeoptimization.v1.BreakRule.verify|verify} messages.
                     * @param message BreakRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IBreakRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BreakRule message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.BreakRule.verify|verify} messages.
                     * @param message BreakRule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IBreakRule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BreakRule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BreakRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.BreakRule;

                    /**
                     * Decodes a BreakRule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BreakRule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.BreakRule;

                    /**
                     * Verifies a BreakRule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BreakRule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BreakRule
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.BreakRule;

                    /**
                     * Creates a plain object from a BreakRule message. Also converts values to other types if specified.
                     * @param message BreakRule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.BreakRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BreakRule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BreakRule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BreakRule {

                    /** Properties of a BreakRequest. */
                    interface IBreakRequest {

                        /** BreakRequest earliestStartTime */
                        earliestStartTime?: (google.protobuf.ITimestamp|null);

                        /** BreakRequest latestStartTime */
                        latestStartTime?: (google.protobuf.ITimestamp|null);

                        /** BreakRequest minDuration */
                        minDuration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a BreakRequest. */
                    class BreakRequest implements IBreakRequest {

                        /**
                         * Constructs a new BreakRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.BreakRule.IBreakRequest);

                        /** BreakRequest earliestStartTime. */
                        public earliestStartTime?: (google.protobuf.ITimestamp|null);

                        /** BreakRequest latestStartTime. */
                        public latestStartTime?: (google.protobuf.ITimestamp|null);

                        /** BreakRequest minDuration. */
                        public minDuration?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new BreakRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BreakRequest instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.BreakRule.IBreakRequest): google.maps.routeoptimization.v1.BreakRule.BreakRequest;

                        /**
                         * Encodes the specified BreakRequest message. Does not implicitly {@link google.maps.routeoptimization.v1.BreakRule.BreakRequest.verify|verify} messages.
                         * @param message BreakRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.BreakRule.IBreakRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BreakRequest message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.BreakRule.BreakRequest.verify|verify} messages.
                         * @param message BreakRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.BreakRule.IBreakRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BreakRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BreakRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.BreakRule.BreakRequest;

                        /**
                         * Decodes a BreakRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BreakRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.BreakRule.BreakRequest;

                        /**
                         * Verifies a BreakRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BreakRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BreakRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.BreakRule.BreakRequest;

                        /**
                         * Creates a plain object from a BreakRequest message. Also converts values to other types if specified.
                         * @param message BreakRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.BreakRule.BreakRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BreakRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BreakRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FrequencyConstraint. */
                    interface IFrequencyConstraint {

                        /** FrequencyConstraint minBreakDuration */
                        minBreakDuration?: (google.protobuf.IDuration|null);

                        /** FrequencyConstraint maxInterBreakDuration */
                        maxInterBreakDuration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a FrequencyConstraint. */
                    class FrequencyConstraint implements IFrequencyConstraint {

                        /**
                         * Constructs a new FrequencyConstraint.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.BreakRule.IFrequencyConstraint);

                        /** FrequencyConstraint minBreakDuration. */
                        public minBreakDuration?: (google.protobuf.IDuration|null);

                        /** FrequencyConstraint maxInterBreakDuration. */
                        public maxInterBreakDuration?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new FrequencyConstraint instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FrequencyConstraint instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.BreakRule.IFrequencyConstraint): google.maps.routeoptimization.v1.BreakRule.FrequencyConstraint;

                        /**
                         * Encodes the specified FrequencyConstraint message. Does not implicitly {@link google.maps.routeoptimization.v1.BreakRule.FrequencyConstraint.verify|verify} messages.
                         * @param message FrequencyConstraint message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.BreakRule.IFrequencyConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FrequencyConstraint message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.BreakRule.FrequencyConstraint.verify|verify} messages.
                         * @param message FrequencyConstraint message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.BreakRule.IFrequencyConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FrequencyConstraint message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FrequencyConstraint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.BreakRule.FrequencyConstraint;

                        /**
                         * Decodes a FrequencyConstraint message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FrequencyConstraint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.BreakRule.FrequencyConstraint;

                        /**
                         * Verifies a FrequencyConstraint message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FrequencyConstraint message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FrequencyConstraint
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.BreakRule.FrequencyConstraint;

                        /**
                         * Creates a plain object from a FrequencyConstraint message. Also converts values to other types if specified.
                         * @param message FrequencyConstraint
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.BreakRule.FrequencyConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FrequencyConstraint to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FrequencyConstraint
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a ShipmentRoute. */
                interface IShipmentRoute {

                    /** ShipmentRoute vehicleIndex */
                    vehicleIndex?: (number|null);

                    /** ShipmentRoute vehicleLabel */
                    vehicleLabel?: (string|null);

                    /** ShipmentRoute vehicleStartTime */
                    vehicleStartTime?: (google.protobuf.ITimestamp|null);

                    /** ShipmentRoute vehicleEndTime */
                    vehicleEndTime?: (google.protobuf.ITimestamp|null);

                    /** ShipmentRoute visits */
                    visits?: (google.maps.routeoptimization.v1.ShipmentRoute.IVisit[]|null);

                    /** ShipmentRoute transitions */
                    transitions?: (google.maps.routeoptimization.v1.ShipmentRoute.ITransition[]|null);

                    /** ShipmentRoute hasTrafficInfeasibilities */
                    hasTrafficInfeasibilities?: (boolean|null);

                    /** ShipmentRoute routePolyline */
                    routePolyline?: (google.maps.routeoptimization.v1.ShipmentRoute.IEncodedPolyline|null);

                    /** ShipmentRoute breaks */
                    breaks?: (google.maps.routeoptimization.v1.ShipmentRoute.IBreak[]|null);

                    /** ShipmentRoute metrics */
                    metrics?: (google.maps.routeoptimization.v1.IAggregatedMetrics|null);

                    /** ShipmentRoute routeCosts */
                    routeCosts?: ({ [k: string]: number }|null);

                    /** ShipmentRoute routeTotalCost */
                    routeTotalCost?: (number|null);
                }

                /** Represents a ShipmentRoute. */
                class ShipmentRoute implements IShipmentRoute {

                    /**
                     * Constructs a new ShipmentRoute.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IShipmentRoute);

                    /** ShipmentRoute vehicleIndex. */
                    public vehicleIndex: number;

                    /** ShipmentRoute vehicleLabel. */
                    public vehicleLabel: string;

                    /** ShipmentRoute vehicleStartTime. */
                    public vehicleStartTime?: (google.protobuf.ITimestamp|null);

                    /** ShipmentRoute vehicleEndTime. */
                    public vehicleEndTime?: (google.protobuf.ITimestamp|null);

                    /** ShipmentRoute visits. */
                    public visits: google.maps.routeoptimization.v1.ShipmentRoute.IVisit[];

                    /** ShipmentRoute transitions. */
                    public transitions: google.maps.routeoptimization.v1.ShipmentRoute.ITransition[];

                    /** ShipmentRoute hasTrafficInfeasibilities. */
                    public hasTrafficInfeasibilities: boolean;

                    /** ShipmentRoute routePolyline. */
                    public routePolyline?: (google.maps.routeoptimization.v1.ShipmentRoute.IEncodedPolyline|null);

                    /** ShipmentRoute breaks. */
                    public breaks: google.maps.routeoptimization.v1.ShipmentRoute.IBreak[];

                    /** ShipmentRoute metrics. */
                    public metrics?: (google.maps.routeoptimization.v1.IAggregatedMetrics|null);

                    /** ShipmentRoute routeCosts. */
                    public routeCosts: { [k: string]: number };

                    /** ShipmentRoute routeTotalCost. */
                    public routeTotalCost: number;

                    /**
                     * Creates a new ShipmentRoute instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ShipmentRoute instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IShipmentRoute): google.maps.routeoptimization.v1.ShipmentRoute;

                    /**
                     * Encodes the specified ShipmentRoute message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.verify|verify} messages.
                     * @param message ShipmentRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IShipmentRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ShipmentRoute message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.verify|verify} messages.
                     * @param message ShipmentRoute message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IShipmentRoute, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ShipmentRoute message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ShipmentRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentRoute;

                    /**
                     * Decodes a ShipmentRoute message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ShipmentRoute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentRoute;

                    /**
                     * Verifies a ShipmentRoute message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ShipmentRoute message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ShipmentRoute
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentRoute;

                    /**
                     * Creates a plain object from a ShipmentRoute message. Also converts values to other types if specified.
                     * @param message ShipmentRoute
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.ShipmentRoute, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ShipmentRoute to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ShipmentRoute
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ShipmentRoute {

                    /** Properties of a Visit. */
                    interface IVisit {

                        /** Visit shipmentIndex */
                        shipmentIndex?: (number|null);

                        /** Visit isPickup */
                        isPickup?: (boolean|null);

                        /** Visit visitRequestIndex */
                        visitRequestIndex?: (number|null);

                        /** Visit startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** Visit loadDemands */
                        loadDemands?: ({ [k: string]: google.maps.routeoptimization.v1.Shipment.ILoad }|null);

                        /** Visit detour */
                        detour?: (google.protobuf.IDuration|null);

                        /** Visit shipmentLabel */
                        shipmentLabel?: (string|null);

                        /** Visit visitLabel */
                        visitLabel?: (string|null);
                    }

                    /** Represents a Visit. */
                    class Visit implements IVisit {

                        /**
                         * Constructs a new Visit.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.ShipmentRoute.IVisit);

                        /** Visit shipmentIndex. */
                        public shipmentIndex: number;

                        /** Visit isPickup. */
                        public isPickup: boolean;

                        /** Visit visitRequestIndex. */
                        public visitRequestIndex: number;

                        /** Visit startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** Visit loadDemands. */
                        public loadDemands: { [k: string]: google.maps.routeoptimization.v1.Shipment.ILoad };

                        /** Visit detour. */
                        public detour?: (google.protobuf.IDuration|null);

                        /** Visit shipmentLabel. */
                        public shipmentLabel: string;

                        /** Visit visitLabel. */
                        public visitLabel: string;

                        /**
                         * Creates a new Visit instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Visit instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.ShipmentRoute.IVisit): google.maps.routeoptimization.v1.ShipmentRoute.Visit;

                        /**
                         * Encodes the specified Visit message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.Visit.verify|verify} messages.
                         * @param message Visit message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.ShipmentRoute.IVisit, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Visit message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.Visit.verify|verify} messages.
                         * @param message Visit message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.ShipmentRoute.IVisit, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Visit message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Visit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentRoute.Visit;

                        /**
                         * Decodes a Visit message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Visit
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentRoute.Visit;

                        /**
                         * Verifies a Visit message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Visit message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Visit
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentRoute.Visit;

                        /**
                         * Creates a plain object from a Visit message. Also converts values to other types if specified.
                         * @param message Visit
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.ShipmentRoute.Visit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Visit to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Visit
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Transition. */
                    interface ITransition {

                        /** Transition travelDuration */
                        travelDuration?: (google.protobuf.IDuration|null);

                        /** Transition travelDistanceMeters */
                        travelDistanceMeters?: (number|null);

                        /** Transition trafficInfoUnavailable */
                        trafficInfoUnavailable?: (boolean|null);

                        /** Transition delayDuration */
                        delayDuration?: (google.protobuf.IDuration|null);

                        /** Transition breakDuration */
                        breakDuration?: (google.protobuf.IDuration|null);

                        /** Transition waitDuration */
                        waitDuration?: (google.protobuf.IDuration|null);

                        /** Transition totalDuration */
                        totalDuration?: (google.protobuf.IDuration|null);

                        /** Transition startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** Transition routePolyline */
                        routePolyline?: (google.maps.routeoptimization.v1.ShipmentRoute.IEncodedPolyline|null);

                        /** Transition routeToken */
                        routeToken?: (string|null);

                        /** Transition vehicleLoads */
                        vehicleLoads?: ({ [k: string]: google.maps.routeoptimization.v1.ShipmentRoute.IVehicleLoad }|null);
                    }

                    /** Represents a Transition. */
                    class Transition implements ITransition {

                        /**
                         * Constructs a new Transition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.ShipmentRoute.ITransition);

                        /** Transition travelDuration. */
                        public travelDuration?: (google.protobuf.IDuration|null);

                        /** Transition travelDistanceMeters. */
                        public travelDistanceMeters: number;

                        /** Transition trafficInfoUnavailable. */
                        public trafficInfoUnavailable: boolean;

                        /** Transition delayDuration. */
                        public delayDuration?: (google.protobuf.IDuration|null);

                        /** Transition breakDuration. */
                        public breakDuration?: (google.protobuf.IDuration|null);

                        /** Transition waitDuration. */
                        public waitDuration?: (google.protobuf.IDuration|null);

                        /** Transition totalDuration. */
                        public totalDuration?: (google.protobuf.IDuration|null);

                        /** Transition startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** Transition routePolyline. */
                        public routePolyline?: (google.maps.routeoptimization.v1.ShipmentRoute.IEncodedPolyline|null);

                        /** Transition routeToken. */
                        public routeToken: string;

                        /** Transition vehicleLoads. */
                        public vehicleLoads: { [k: string]: google.maps.routeoptimization.v1.ShipmentRoute.IVehicleLoad };

                        /**
                         * Creates a new Transition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Transition instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.ShipmentRoute.ITransition): google.maps.routeoptimization.v1.ShipmentRoute.Transition;

                        /**
                         * Encodes the specified Transition message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.Transition.verify|verify} messages.
                         * @param message Transition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.ShipmentRoute.ITransition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Transition message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.Transition.verify|verify} messages.
                         * @param message Transition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.ShipmentRoute.ITransition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Transition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Transition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentRoute.Transition;

                        /**
                         * Decodes a Transition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Transition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentRoute.Transition;

                        /**
                         * Verifies a Transition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Transition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Transition
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentRoute.Transition;

                        /**
                         * Creates a plain object from a Transition message. Also converts values to other types if specified.
                         * @param message Transition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.ShipmentRoute.Transition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Transition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Transition
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a VehicleLoad. */
                    interface IVehicleLoad {

                        /** VehicleLoad amount */
                        amount?: (number|Long|string|null);
                    }

                    /** Represents a VehicleLoad. */
                    class VehicleLoad implements IVehicleLoad {

                        /**
                         * Constructs a new VehicleLoad.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.ShipmentRoute.IVehicleLoad);

                        /** VehicleLoad amount. */
                        public amount: (number|Long|string);

                        /**
                         * Creates a new VehicleLoad instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VehicleLoad instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.ShipmentRoute.IVehicleLoad): google.maps.routeoptimization.v1.ShipmentRoute.VehicleLoad;

                        /**
                         * Encodes the specified VehicleLoad message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.VehicleLoad.verify|verify} messages.
                         * @param message VehicleLoad message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.ShipmentRoute.IVehicleLoad, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VehicleLoad message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.VehicleLoad.verify|verify} messages.
                         * @param message VehicleLoad message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.ShipmentRoute.IVehicleLoad, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VehicleLoad message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VehicleLoad
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentRoute.VehicleLoad;

                        /**
                         * Decodes a VehicleLoad message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VehicleLoad
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentRoute.VehicleLoad;

                        /**
                         * Verifies a VehicleLoad message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VehicleLoad message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VehicleLoad
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentRoute.VehicleLoad;

                        /**
                         * Creates a plain object from a VehicleLoad message. Also converts values to other types if specified.
                         * @param message VehicleLoad
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.ShipmentRoute.VehicleLoad, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VehicleLoad to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VehicleLoad
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an EncodedPolyline. */
                    interface IEncodedPolyline {

                        /** EncodedPolyline points */
                        points?: (string|null);
                    }

                    /** Represents an EncodedPolyline. */
                    class EncodedPolyline implements IEncodedPolyline {

                        /**
                         * Constructs a new EncodedPolyline.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.ShipmentRoute.IEncodedPolyline);

                        /** EncodedPolyline points. */
                        public points: string;

                        /**
                         * Creates a new EncodedPolyline instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EncodedPolyline instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.ShipmentRoute.IEncodedPolyline): google.maps.routeoptimization.v1.ShipmentRoute.EncodedPolyline;

                        /**
                         * Encodes the specified EncodedPolyline message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.EncodedPolyline.verify|verify} messages.
                         * @param message EncodedPolyline message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.ShipmentRoute.IEncodedPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EncodedPolyline message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.EncodedPolyline.verify|verify} messages.
                         * @param message EncodedPolyline message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.ShipmentRoute.IEncodedPolyline, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EncodedPolyline message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EncodedPolyline
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentRoute.EncodedPolyline;

                        /**
                         * Decodes an EncodedPolyline message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EncodedPolyline
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentRoute.EncodedPolyline;

                        /**
                         * Verifies an EncodedPolyline message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EncodedPolyline message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EncodedPolyline
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentRoute.EncodedPolyline;

                        /**
                         * Creates a plain object from an EncodedPolyline message. Also converts values to other types if specified.
                         * @param message EncodedPolyline
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.ShipmentRoute.EncodedPolyline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EncodedPolyline to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EncodedPolyline
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Break. */
                    interface IBreak {

                        /** Break startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** Break duration */
                        duration?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a Break. */
                    class Break implements IBreak {

                        /**
                         * Constructs a new Break.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.ShipmentRoute.IBreak);

                        /** Break startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** Break duration. */
                        public duration?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new Break instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Break instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.ShipmentRoute.IBreak): google.maps.routeoptimization.v1.ShipmentRoute.Break;

                        /**
                         * Encodes the specified Break message. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.Break.verify|verify} messages.
                         * @param message Break message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.ShipmentRoute.IBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Break message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.ShipmentRoute.Break.verify|verify} messages.
                         * @param message Break message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.ShipmentRoute.IBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Break message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Break
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.ShipmentRoute.Break;

                        /**
                         * Decodes a Break message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Break
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.ShipmentRoute.Break;

                        /**
                         * Verifies a Break message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Break message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Break
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.ShipmentRoute.Break;

                        /**
                         * Creates a plain object from a Break message. Also converts values to other types if specified.
                         * @param message Break
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.ShipmentRoute.Break, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Break to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Break
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a SkippedShipment. */
                interface ISkippedShipment {

                    /** SkippedShipment index */
                    index?: (number|null);

                    /** SkippedShipment label */
                    label?: (string|null);

                    /** SkippedShipment reasons */
                    reasons?: (google.maps.routeoptimization.v1.SkippedShipment.IReason[]|null);
                }

                /** Represents a SkippedShipment. */
                class SkippedShipment implements ISkippedShipment {

                    /**
                     * Constructs a new SkippedShipment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.ISkippedShipment);

                    /** SkippedShipment index. */
                    public index: number;

                    /** SkippedShipment label. */
                    public label: string;

                    /** SkippedShipment reasons. */
                    public reasons: google.maps.routeoptimization.v1.SkippedShipment.IReason[];

                    /**
                     * Creates a new SkippedShipment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SkippedShipment instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.ISkippedShipment): google.maps.routeoptimization.v1.SkippedShipment;

                    /**
                     * Encodes the specified SkippedShipment message. Does not implicitly {@link google.maps.routeoptimization.v1.SkippedShipment.verify|verify} messages.
                     * @param message SkippedShipment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.ISkippedShipment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SkippedShipment message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.SkippedShipment.verify|verify} messages.
                     * @param message SkippedShipment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.ISkippedShipment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SkippedShipment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SkippedShipment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.SkippedShipment;

                    /**
                     * Decodes a SkippedShipment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SkippedShipment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.SkippedShipment;

                    /**
                     * Verifies a SkippedShipment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SkippedShipment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SkippedShipment
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.SkippedShipment;

                    /**
                     * Creates a plain object from a SkippedShipment message. Also converts values to other types if specified.
                     * @param message SkippedShipment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.SkippedShipment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SkippedShipment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SkippedShipment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SkippedShipment {

                    /** Properties of a Reason. */
                    interface IReason {

                        /** Reason code */
                        code?: (google.maps.routeoptimization.v1.SkippedShipment.Reason.Code|keyof typeof google.maps.routeoptimization.v1.SkippedShipment.Reason.Code|null);

                        /** Reason exampleVehicleIndex */
                        exampleVehicleIndex?: (number|null);

                        /** Reason exampleExceededCapacityType */
                        exampleExceededCapacityType?: (string|null);
                    }

                    /** Represents a Reason. */
                    class Reason implements IReason {

                        /**
                         * Constructs a new Reason.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.SkippedShipment.IReason);

                        /** Reason code. */
                        public code: (google.maps.routeoptimization.v1.SkippedShipment.Reason.Code|keyof typeof google.maps.routeoptimization.v1.SkippedShipment.Reason.Code);

                        /** Reason exampleVehicleIndex. */
                        public exampleVehicleIndex?: (number|null);

                        /** Reason exampleExceededCapacityType. */
                        public exampleExceededCapacityType: string;

                        /** Reason _exampleVehicleIndex. */
                        public _exampleVehicleIndex?: "exampleVehicleIndex";

                        /**
                         * Creates a new Reason instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Reason instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.SkippedShipment.IReason): google.maps.routeoptimization.v1.SkippedShipment.Reason;

                        /**
                         * Encodes the specified Reason message. Does not implicitly {@link google.maps.routeoptimization.v1.SkippedShipment.Reason.verify|verify} messages.
                         * @param message Reason message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.SkippedShipment.IReason, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Reason message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.SkippedShipment.Reason.verify|verify} messages.
                         * @param message Reason message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.SkippedShipment.IReason, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Reason message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Reason
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.SkippedShipment.Reason;

                        /**
                         * Decodes a Reason message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Reason
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.SkippedShipment.Reason;

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
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.SkippedShipment.Reason;

                        /**
                         * Creates a plain object from a Reason message. Also converts values to other types if specified.
                         * @param message Reason
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.SkippedShipment.Reason, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    namespace Reason {

                        /** Code enum. */
                        enum Code {
                            CODE_UNSPECIFIED = 0,
                            NO_VEHICLE = 1,
                            DEMAND_EXCEEDS_VEHICLE_CAPACITY = 2,
                            CANNOT_BE_PERFORMED_WITHIN_VEHICLE_DISTANCE_LIMIT = 3,
                            CANNOT_BE_PERFORMED_WITHIN_VEHICLE_DURATION_LIMIT = 4,
                            CANNOT_BE_PERFORMED_WITHIN_VEHICLE_TRAVEL_DURATION_LIMIT = 5,
                            CANNOT_BE_PERFORMED_WITHIN_VEHICLE_TIME_WINDOWS = 6,
                            VEHICLE_NOT_ALLOWED = 7
                        }
                    }
                }

                /** Properties of an AggregatedMetrics. */
                interface IAggregatedMetrics {

                    /** AggregatedMetrics performedShipmentCount */
                    performedShipmentCount?: (number|null);

                    /** AggregatedMetrics travelDuration */
                    travelDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics waitDuration */
                    waitDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics delayDuration */
                    delayDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics breakDuration */
                    breakDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics visitDuration */
                    visitDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics totalDuration */
                    totalDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics travelDistanceMeters */
                    travelDistanceMeters?: (number|null);

                    /** AggregatedMetrics maxLoads */
                    maxLoads?: ({ [k: string]: google.maps.routeoptimization.v1.ShipmentRoute.IVehicleLoad }|null);
                }

                /** Represents an AggregatedMetrics. */
                class AggregatedMetrics implements IAggregatedMetrics {

                    /**
                     * Constructs a new AggregatedMetrics.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IAggregatedMetrics);

                    /** AggregatedMetrics performedShipmentCount. */
                    public performedShipmentCount: number;

                    /** AggregatedMetrics travelDuration. */
                    public travelDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics waitDuration. */
                    public waitDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics delayDuration. */
                    public delayDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics breakDuration. */
                    public breakDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics visitDuration. */
                    public visitDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics totalDuration. */
                    public totalDuration?: (google.protobuf.IDuration|null);

                    /** AggregatedMetrics travelDistanceMeters. */
                    public travelDistanceMeters: number;

                    /** AggregatedMetrics maxLoads. */
                    public maxLoads: { [k: string]: google.maps.routeoptimization.v1.ShipmentRoute.IVehicleLoad };

                    /**
                     * Creates a new AggregatedMetrics instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AggregatedMetrics instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IAggregatedMetrics): google.maps.routeoptimization.v1.AggregatedMetrics;

                    /**
                     * Encodes the specified AggregatedMetrics message. Does not implicitly {@link google.maps.routeoptimization.v1.AggregatedMetrics.verify|verify} messages.
                     * @param message AggregatedMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IAggregatedMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AggregatedMetrics message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.AggregatedMetrics.verify|verify} messages.
                     * @param message AggregatedMetrics message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IAggregatedMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AggregatedMetrics message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AggregatedMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.AggregatedMetrics;

                    /**
                     * Decodes an AggregatedMetrics message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AggregatedMetrics
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.AggregatedMetrics;

                    /**
                     * Verifies an AggregatedMetrics message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AggregatedMetrics message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AggregatedMetrics
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.AggregatedMetrics;

                    /**
                     * Creates a plain object from an AggregatedMetrics message. Also converts values to other types if specified.
                     * @param message AggregatedMetrics
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.AggregatedMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AggregatedMetrics to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AggregatedMetrics
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an InjectedSolutionConstraint. */
                interface IInjectedSolutionConstraint {

                    /** InjectedSolutionConstraint routes */
                    routes?: (google.maps.routeoptimization.v1.IShipmentRoute[]|null);

                    /** InjectedSolutionConstraint skippedShipments */
                    skippedShipments?: (google.maps.routeoptimization.v1.ISkippedShipment[]|null);

                    /** InjectedSolutionConstraint constraintRelaxations */
                    constraintRelaxations?: (google.maps.routeoptimization.v1.InjectedSolutionConstraint.IConstraintRelaxation[]|null);
                }

                /** Represents an InjectedSolutionConstraint. */
                class InjectedSolutionConstraint implements IInjectedSolutionConstraint {

                    /**
                     * Constructs a new InjectedSolutionConstraint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IInjectedSolutionConstraint);

                    /** InjectedSolutionConstraint routes. */
                    public routes: google.maps.routeoptimization.v1.IShipmentRoute[];

                    /** InjectedSolutionConstraint skippedShipments. */
                    public skippedShipments: google.maps.routeoptimization.v1.ISkippedShipment[];

                    /** InjectedSolutionConstraint constraintRelaxations. */
                    public constraintRelaxations: google.maps.routeoptimization.v1.InjectedSolutionConstraint.IConstraintRelaxation[];

                    /**
                     * Creates a new InjectedSolutionConstraint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InjectedSolutionConstraint instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IInjectedSolutionConstraint): google.maps.routeoptimization.v1.InjectedSolutionConstraint;

                    /**
                     * Encodes the specified InjectedSolutionConstraint message. Does not implicitly {@link google.maps.routeoptimization.v1.InjectedSolutionConstraint.verify|verify} messages.
                     * @param message InjectedSolutionConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IInjectedSolutionConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InjectedSolutionConstraint message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.InjectedSolutionConstraint.verify|verify} messages.
                     * @param message InjectedSolutionConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IInjectedSolutionConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InjectedSolutionConstraint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InjectedSolutionConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.InjectedSolutionConstraint;

                    /**
                     * Decodes an InjectedSolutionConstraint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InjectedSolutionConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.InjectedSolutionConstraint;

                    /**
                     * Verifies an InjectedSolutionConstraint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InjectedSolutionConstraint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InjectedSolutionConstraint
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.InjectedSolutionConstraint;

                    /**
                     * Creates a plain object from an InjectedSolutionConstraint message. Also converts values to other types if specified.
                     * @param message InjectedSolutionConstraint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.InjectedSolutionConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InjectedSolutionConstraint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InjectedSolutionConstraint
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace InjectedSolutionConstraint {

                    /** Properties of a ConstraintRelaxation. */
                    interface IConstraintRelaxation {

                        /** ConstraintRelaxation relaxations */
                        relaxations?: (google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.IRelaxation[]|null);

                        /** ConstraintRelaxation vehicleIndices */
                        vehicleIndices?: (number[]|null);
                    }

                    /** Represents a ConstraintRelaxation. */
                    class ConstraintRelaxation implements IConstraintRelaxation {

                        /**
                         * Constructs a new ConstraintRelaxation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.InjectedSolutionConstraint.IConstraintRelaxation);

                        /** ConstraintRelaxation relaxations. */
                        public relaxations: google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.IRelaxation[];

                        /** ConstraintRelaxation vehicleIndices. */
                        public vehicleIndices: number[];

                        /**
                         * Creates a new ConstraintRelaxation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ConstraintRelaxation instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.InjectedSolutionConstraint.IConstraintRelaxation): google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation;

                        /**
                         * Encodes the specified ConstraintRelaxation message. Does not implicitly {@link google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.verify|verify} messages.
                         * @param message ConstraintRelaxation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.InjectedSolutionConstraint.IConstraintRelaxation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ConstraintRelaxation message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.verify|verify} messages.
                         * @param message ConstraintRelaxation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.InjectedSolutionConstraint.IConstraintRelaxation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ConstraintRelaxation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ConstraintRelaxation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation;

                        /**
                         * Decodes a ConstraintRelaxation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ConstraintRelaxation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation;

                        /**
                         * Verifies a ConstraintRelaxation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ConstraintRelaxation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ConstraintRelaxation
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation;

                        /**
                         * Creates a plain object from a ConstraintRelaxation message. Also converts values to other types if specified.
                         * @param message ConstraintRelaxation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ConstraintRelaxation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ConstraintRelaxation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace ConstraintRelaxation {

                        /** Properties of a Relaxation. */
                        interface IRelaxation {

                            /** Relaxation level */
                            level?: (google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Level|keyof typeof google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Level|null);

                            /** Relaxation thresholdTime */
                            thresholdTime?: (google.protobuf.ITimestamp|null);

                            /** Relaxation thresholdVisitCount */
                            thresholdVisitCount?: (number|null);
                        }

                        /** Represents a Relaxation. */
                        class Relaxation implements IRelaxation {

                            /**
                             * Constructs a new Relaxation.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.IRelaxation);

                            /** Relaxation level. */
                            public level: (google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Level|keyof typeof google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.Level);

                            /** Relaxation thresholdTime. */
                            public thresholdTime?: (google.protobuf.ITimestamp|null);

                            /** Relaxation thresholdVisitCount. */
                            public thresholdVisitCount: number;

                            /**
                             * Creates a new Relaxation instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Relaxation instance
                             */
                            public static create(properties?: google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.IRelaxation): google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation;

                            /**
                             * Encodes the specified Relaxation message. Does not implicitly {@link google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.verify|verify} messages.
                             * @param message Relaxation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.IRelaxation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Relaxation message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation.verify|verify} messages.
                             * @param message Relaxation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.IRelaxation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Relaxation message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Relaxation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation;

                            /**
                             * Decodes a Relaxation message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Relaxation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation;

                            /**
                             * Verifies a Relaxation message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Relaxation message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Relaxation
                             */
                            public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation;

                            /**
                             * Creates a plain object from a Relaxation message. Also converts values to other types if specified.
                             * @param message Relaxation
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.maps.routeoptimization.v1.InjectedSolutionConstraint.ConstraintRelaxation.Relaxation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Relaxation to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Relaxation
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Relaxation {

                            /** Level enum. */
                            enum Level {
                                LEVEL_UNSPECIFIED = 0,
                                RELAX_VISIT_TIMES_AFTER_THRESHOLD = 1,
                                RELAX_VISIT_TIMES_AND_SEQUENCE_AFTER_THRESHOLD = 2,
                                RELAX_ALL_AFTER_THRESHOLD = 3
                            }
                        }
                    }
                }

                /** Properties of an OptimizeToursValidationError. */
                interface IOptimizeToursValidationError {

                    /** OptimizeToursValidationError code */
                    code?: (number|null);

                    /** OptimizeToursValidationError displayName */
                    displayName?: (string|null);

                    /** OptimizeToursValidationError fields */
                    fields?: (google.maps.routeoptimization.v1.OptimizeToursValidationError.IFieldReference[]|null);

                    /** OptimizeToursValidationError errorMessage */
                    errorMessage?: (string|null);

                    /** OptimizeToursValidationError offendingValues */
                    offendingValues?: (string|null);
                }

                /** Represents an OptimizeToursValidationError. */
                class OptimizeToursValidationError implements IOptimizeToursValidationError {

                    /**
                     * Constructs a new OptimizeToursValidationError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IOptimizeToursValidationError);

                    /** OptimizeToursValidationError code. */
                    public code: number;

                    /** OptimizeToursValidationError displayName. */
                    public displayName: string;

                    /** OptimizeToursValidationError fields. */
                    public fields: google.maps.routeoptimization.v1.OptimizeToursValidationError.IFieldReference[];

                    /** OptimizeToursValidationError errorMessage. */
                    public errorMessage: string;

                    /** OptimizeToursValidationError offendingValues. */
                    public offendingValues: string;

                    /**
                     * Creates a new OptimizeToursValidationError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OptimizeToursValidationError instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IOptimizeToursValidationError): google.maps.routeoptimization.v1.OptimizeToursValidationError;

                    /**
                     * Encodes the specified OptimizeToursValidationError message. Does not implicitly {@link google.maps.routeoptimization.v1.OptimizeToursValidationError.verify|verify} messages.
                     * @param message OptimizeToursValidationError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IOptimizeToursValidationError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OptimizeToursValidationError message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.OptimizeToursValidationError.verify|verify} messages.
                     * @param message OptimizeToursValidationError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IOptimizeToursValidationError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OptimizeToursValidationError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OptimizeToursValidationError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.OptimizeToursValidationError;

                    /**
                     * Decodes an OptimizeToursValidationError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OptimizeToursValidationError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.OptimizeToursValidationError;

                    /**
                     * Verifies an OptimizeToursValidationError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OptimizeToursValidationError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OptimizeToursValidationError
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.OptimizeToursValidationError;

                    /**
                     * Creates a plain object from an OptimizeToursValidationError message. Also converts values to other types if specified.
                     * @param message OptimizeToursValidationError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.OptimizeToursValidationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OptimizeToursValidationError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OptimizeToursValidationError
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace OptimizeToursValidationError {

                    /** Properties of a FieldReference. */
                    interface IFieldReference {

                        /** FieldReference name */
                        name?: (string|null);

                        /** FieldReference index */
                        index?: (number|null);

                        /** FieldReference key */
                        key?: (string|null);

                        /** FieldReference subField */
                        subField?: (google.maps.routeoptimization.v1.OptimizeToursValidationError.IFieldReference|null);
                    }

                    /** Represents a FieldReference. */
                    class FieldReference implements IFieldReference {

                        /**
                         * Constructs a new FieldReference.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.maps.routeoptimization.v1.OptimizeToursValidationError.IFieldReference);

                        /** FieldReference name. */
                        public name: string;

                        /** FieldReference index. */
                        public index?: (number|null);

                        /** FieldReference key. */
                        public key?: (string|null);

                        /** FieldReference subField. */
                        public subField?: (google.maps.routeoptimization.v1.OptimizeToursValidationError.IFieldReference|null);

                        /** FieldReference indexOrKey. */
                        public indexOrKey?: ("index"|"key");

                        /**
                         * Creates a new FieldReference instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FieldReference instance
                         */
                        public static create(properties?: google.maps.routeoptimization.v1.OptimizeToursValidationError.IFieldReference): google.maps.routeoptimization.v1.OptimizeToursValidationError.FieldReference;

                        /**
                         * Encodes the specified FieldReference message. Does not implicitly {@link google.maps.routeoptimization.v1.OptimizeToursValidationError.FieldReference.verify|verify} messages.
                         * @param message FieldReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.maps.routeoptimization.v1.OptimizeToursValidationError.IFieldReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FieldReference message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.OptimizeToursValidationError.FieldReference.verify|verify} messages.
                         * @param message FieldReference message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.maps.routeoptimization.v1.OptimizeToursValidationError.IFieldReference, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FieldReference message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FieldReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.OptimizeToursValidationError.FieldReference;

                        /**
                         * Decodes a FieldReference message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FieldReference
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.OptimizeToursValidationError.FieldReference;

                        /**
                         * Verifies a FieldReference message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FieldReference message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FieldReference
                         */
                        public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.OptimizeToursValidationError.FieldReference;

                        /**
                         * Creates a plain object from a FieldReference message. Also converts values to other types if specified.
                         * @param message FieldReference
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.maps.routeoptimization.v1.OptimizeToursValidationError.FieldReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FieldReference to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FieldReference
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an InputConfig. */
                interface IInputConfig {

                    /** InputConfig gcsSource */
                    gcsSource?: (google.maps.routeoptimization.v1.IGcsSource|null);

                    /** InputConfig dataFormat */
                    dataFormat?: (google.maps.routeoptimization.v1.DataFormat|keyof typeof google.maps.routeoptimization.v1.DataFormat|null);
                }

                /** Represents an InputConfig. */
                class InputConfig implements IInputConfig {

                    /**
                     * Constructs a new InputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IInputConfig);

                    /** InputConfig gcsSource. */
                    public gcsSource?: (google.maps.routeoptimization.v1.IGcsSource|null);

                    /** InputConfig dataFormat. */
                    public dataFormat: (google.maps.routeoptimization.v1.DataFormat|keyof typeof google.maps.routeoptimization.v1.DataFormat);

                    /** InputConfig source. */
                    public source?: "gcsSource";

                    /**
                     * Creates a new InputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InputConfig instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IInputConfig): google.maps.routeoptimization.v1.InputConfig;

                    /**
                     * Encodes the specified InputConfig message. Does not implicitly {@link google.maps.routeoptimization.v1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InputConfig message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.InputConfig.verify|verify} messages.
                     * @param message InputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IInputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.InputConfig;

                    /**
                     * Decodes an InputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.InputConfig;

                    /**
                     * Verifies an InputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.InputConfig;

                    /**
                     * Creates a plain object from an InputConfig message. Also converts values to other types if specified.
                     * @param message InputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.InputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.maps.routeoptimization.v1.IGcsDestination|null);

                    /** OutputConfig dataFormat */
                    dataFormat?: (google.maps.routeoptimization.v1.DataFormat|keyof typeof google.maps.routeoptimization.v1.DataFormat|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.maps.routeoptimization.v1.IGcsDestination|null);

                    /** OutputConfig dataFormat. */
                    public dataFormat: (google.maps.routeoptimization.v1.DataFormat|keyof typeof google.maps.routeoptimization.v1.DataFormat);

                    /** OutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IOutputConfig): google.maps.routeoptimization.v1.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.maps.routeoptimization.v1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.OutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for OutputConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GcsSource. */
                interface IGcsSource {

                    /** GcsSource uri */
                    uri?: (string|null);
                }

                /** Represents a GcsSource. */
                class GcsSource implements IGcsSource {

                    /**
                     * Constructs a new GcsSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IGcsSource);

                    /** GcsSource uri. */
                    public uri: string;

                    /**
                     * Creates a new GcsSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsSource instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IGcsSource): google.maps.routeoptimization.v1.GcsSource;

                    /**
                     * Encodes the specified GcsSource message. Does not implicitly {@link google.maps.routeoptimization.v1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsSource message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.GcsSource.verify|verify} messages.
                     * @param message GcsSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IGcsSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.GcsSource;

                    /**
                     * Decodes a GcsSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.GcsSource;

                    /**
                     * Verifies a GcsSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.GcsSource;

                    /**
                     * Creates a plain object from a GcsSource message. Also converts values to other types if specified.
                     * @param message GcsSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.GcsSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsSource
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination uri */
                    uri?: (string|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.maps.routeoptimization.v1.IGcsDestination);

                    /** GcsDestination uri. */
                    public uri: string;

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.maps.routeoptimization.v1.IGcsDestination): google.maps.routeoptimization.v1.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.maps.routeoptimization.v1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.maps.routeoptimization.v1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.maps.routeoptimization.v1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.maps.routeoptimization.v1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.maps.routeoptimization.v1.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.maps.routeoptimization.v1.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.maps.routeoptimization.v1.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.maps.routeoptimization.v1.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GcsDestination
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** DataFormat enum. */
                enum DataFormat {
                    DATA_FORMAT_UNSPECIFIED = 0,
                    JSON = 1,
                    PROTO_TEXT = 2
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

    /** Namespace type. */
    namespace type {

        /** Properties of a LatLng. */
        interface ILatLng {

            /** LatLng latitude */
            latitude?: (number|null);

            /** LatLng longitude */
            longitude?: (number|null);
        }

        /** Represents a LatLng. */
        class LatLng implements ILatLng {

            /**
             * Constructs a new LatLng.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ILatLng);

            /** LatLng latitude. */
            public latitude: number;

            /** LatLng longitude. */
            public longitude: number;

            /**
             * Creates a new LatLng instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LatLng instance
             */
            public static create(properties?: google.type.ILatLng): google.type.LatLng;

            /**
             * Encodes the specified LatLng message. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LatLng message, length delimited. Does not implicitly {@link google.type.LatLng.verify|verify} messages.
             * @param message LatLng message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ILatLng, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LatLng message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.LatLng;

            /**
             * Decodes a LatLng message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LatLng
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.LatLng;

            /**
             * Verifies a LatLng message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LatLng message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LatLng
             */
            public static fromObject(object: { [k: string]: any }): google.type.LatLng;

            /**
             * Creates a plain object from a LatLng message. Also converts values to other types if specified.
             * @param message LatLng
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.LatLng, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LatLng to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LatLng
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
