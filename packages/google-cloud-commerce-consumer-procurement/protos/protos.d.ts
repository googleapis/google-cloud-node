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

        /** Namespace commerce. */
        namespace commerce {

            /** Namespace consumer. */
            namespace consumer {

                /** Namespace procurement. */
                namespace procurement {

                    /** Namespace v1. */
                    namespace v1 {

                        /** Represents a LicenseManagementService */
                        class LicenseManagementService extends $protobuf.rpc.Service {

                            /**
                             * Constructs a new LicenseManagementService service.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             */
                            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                            /**
                             * Creates new LicenseManagementService service using the specified rpc implementation.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             * @returns RPC service. Useful where requests and/or responses are streamed.
                             */
                            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LicenseManagementService;

                            /**
                             * Calls GetLicensePool.
                             * @param request GetLicensePoolRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and LicensePool
                             */
                            public getLicensePool(request: google.cloud.commerce.consumer.procurement.v1.IGetLicensePoolRequest, callback: google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.GetLicensePoolCallback): void;

                            /**
                             * Calls GetLicensePool.
                             * @param request GetLicensePoolRequest message or plain object
                             * @returns Promise
                             */
                            public getLicensePool(request: google.cloud.commerce.consumer.procurement.v1.IGetLicensePoolRequest): Promise<google.cloud.commerce.consumer.procurement.v1.LicensePool>;

                            /**
                             * Calls UpdateLicensePool.
                             * @param request UpdateLicensePoolRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and LicensePool
                             */
                            public updateLicensePool(request: google.cloud.commerce.consumer.procurement.v1.IUpdateLicensePoolRequest, callback: google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.UpdateLicensePoolCallback): void;

                            /**
                             * Calls UpdateLicensePool.
                             * @param request UpdateLicensePoolRequest message or plain object
                             * @returns Promise
                             */
                            public updateLicensePool(request: google.cloud.commerce.consumer.procurement.v1.IUpdateLicensePoolRequest): Promise<google.cloud.commerce.consumer.procurement.v1.LicensePool>;

                            /**
                             * Calls Assign.
                             * @param request AssignRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and AssignResponse
                             */
                            public assign(request: google.cloud.commerce.consumer.procurement.v1.IAssignRequest, callback: google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.AssignCallback): void;

                            /**
                             * Calls Assign.
                             * @param request AssignRequest message or plain object
                             * @returns Promise
                             */
                            public assign(request: google.cloud.commerce.consumer.procurement.v1.IAssignRequest): Promise<google.cloud.commerce.consumer.procurement.v1.AssignResponse>;

                            /**
                             * Calls Unassign.
                             * @param request UnassignRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and UnassignResponse
                             */
                            public unassign(request: google.cloud.commerce.consumer.procurement.v1.IUnassignRequest, callback: google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.UnassignCallback): void;

                            /**
                             * Calls Unassign.
                             * @param request UnassignRequest message or plain object
                             * @returns Promise
                             */
                            public unassign(request: google.cloud.commerce.consumer.procurement.v1.IUnassignRequest): Promise<google.cloud.commerce.consumer.procurement.v1.UnassignResponse>;

                            /**
                             * Calls EnumerateLicensedUsers.
                             * @param request EnumerateLicensedUsersRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and EnumerateLicensedUsersResponse
                             */
                            public enumerateLicensedUsers(request: google.cloud.commerce.consumer.procurement.v1.IEnumerateLicensedUsersRequest, callback: google.cloud.commerce.consumer.procurement.v1.LicenseManagementService.EnumerateLicensedUsersCallback): void;

                            /**
                             * Calls EnumerateLicensedUsers.
                             * @param request EnumerateLicensedUsersRequest message or plain object
                             * @returns Promise
                             */
                            public enumerateLicensedUsers(request: google.cloud.commerce.consumer.procurement.v1.IEnumerateLicensedUsersRequest): Promise<google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersResponse>;
                        }

                        namespace LicenseManagementService {

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1.LicenseManagementService|getLicensePool}.
                             * @param error Error, if any
                             * @param [response] LicensePool
                             */
                            type GetLicensePoolCallback = (error: (Error|null), response?: google.cloud.commerce.consumer.procurement.v1.LicensePool) => void;

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1.LicenseManagementService|updateLicensePool}.
                             * @param error Error, if any
                             * @param [response] LicensePool
                             */
                            type UpdateLicensePoolCallback = (error: (Error|null), response?: google.cloud.commerce.consumer.procurement.v1.LicensePool) => void;

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1.LicenseManagementService|assign}.
                             * @param error Error, if any
                             * @param [response] AssignResponse
                             */
                            type AssignCallback = (error: (Error|null), response?: google.cloud.commerce.consumer.procurement.v1.AssignResponse) => void;

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1.LicenseManagementService|unassign}.
                             * @param error Error, if any
                             * @param [response] UnassignResponse
                             */
                            type UnassignCallback = (error: (Error|null), response?: google.cloud.commerce.consumer.procurement.v1.UnassignResponse) => void;

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1.LicenseManagementService|enumerateLicensedUsers}.
                             * @param error Error, if any
                             * @param [response] EnumerateLicensedUsersResponse
                             */
                            type EnumerateLicensedUsersCallback = (error: (Error|null), response?: google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersResponse) => void;
                        }

                        /** Properties of an AssignmentProtocol. */
                        interface IAssignmentProtocol {

                            /** AssignmentProtocol manualAssignmentType */
                            manualAssignmentType?: (google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IManualAssignmentType|null);

                            /** AssignmentProtocol autoAssignmentType */
                            autoAssignmentType?: (google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IAutoAssignmentType|null);
                        }

                        /** Represents an AssignmentProtocol. */
                        class AssignmentProtocol implements IAssignmentProtocol {

                            /**
                             * Constructs a new AssignmentProtocol.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IAssignmentProtocol);

                            /** AssignmentProtocol manualAssignmentType. */
                            public manualAssignmentType?: (google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IManualAssignmentType|null);

                            /** AssignmentProtocol autoAssignmentType. */
                            public autoAssignmentType?: (google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IAutoAssignmentType|null);

                            /** AssignmentProtocol assignmentType. */
                            public assignmentType?: ("manualAssignmentType"|"autoAssignmentType");

                            /**
                             * Creates a new AssignmentProtocol instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AssignmentProtocol instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IAssignmentProtocol): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol;

                            /**
                             * Encodes the specified AssignmentProtocol message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.verify|verify} messages.
                             * @param message AssignmentProtocol message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IAssignmentProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AssignmentProtocol message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.verify|verify} messages.
                             * @param message AssignmentProtocol message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IAssignmentProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AssignmentProtocol message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AssignmentProtocol
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol;

                            /**
                             * Decodes an AssignmentProtocol message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AssignmentProtocol
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol;

                            /**
                             * Verifies an AssignmentProtocol message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AssignmentProtocol message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AssignmentProtocol
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol;

                            /**
                             * Creates a plain object from an AssignmentProtocol message. Also converts values to other types if specified.
                             * @param message AssignmentProtocol
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AssignmentProtocol to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AssignmentProtocol
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace AssignmentProtocol {

                            /** Properties of a ManualAssignmentType. */
                            interface IManualAssignmentType {
                            }

                            /** Represents a ManualAssignmentType. */
                            class ManualAssignmentType implements IManualAssignmentType {

                                /**
                                 * Constructs a new ManualAssignmentType.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IManualAssignmentType);

                                /**
                                 * Creates a new ManualAssignmentType instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ManualAssignmentType instance
                                 */
                                public static create(properties?: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IManualAssignmentType): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.ManualAssignmentType;

                                /**
                                 * Encodes the specified ManualAssignmentType message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.ManualAssignmentType.verify|verify} messages.
                                 * @param message ManualAssignmentType message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IManualAssignmentType, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified ManualAssignmentType message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.ManualAssignmentType.verify|verify} messages.
                                 * @param message ManualAssignmentType message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IManualAssignmentType, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a ManualAssignmentType message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ManualAssignmentType
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.ManualAssignmentType;

                                /**
                                 * Decodes a ManualAssignmentType message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ManualAssignmentType
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.ManualAssignmentType;

                                /**
                                 * Verifies a ManualAssignmentType message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ManualAssignmentType message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ManualAssignmentType
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.ManualAssignmentType;

                                /**
                                 * Creates a plain object from a ManualAssignmentType message. Also converts values to other types if specified.
                                 * @param message ManualAssignmentType
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.ManualAssignmentType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ManualAssignmentType to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for ManualAssignmentType
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of an AutoAssignmentType. */
                            interface IAutoAssignmentType {

                                /** AutoAssignmentType inactiveLicenseTtl */
                                inactiveLicenseTtl?: (google.protobuf.IDuration|null);
                            }

                            /** Represents an AutoAssignmentType. */
                            class AutoAssignmentType implements IAutoAssignmentType {

                                /**
                                 * Constructs a new AutoAssignmentType.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IAutoAssignmentType);

                                /** AutoAssignmentType inactiveLicenseTtl. */
                                public inactiveLicenseTtl?: (google.protobuf.IDuration|null);

                                /**
                                 * Creates a new AutoAssignmentType instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns AutoAssignmentType instance
                                 */
                                public static create(properties?: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IAutoAssignmentType): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.AutoAssignmentType;

                                /**
                                 * Encodes the specified AutoAssignmentType message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.AutoAssignmentType.verify|verify} messages.
                                 * @param message AutoAssignmentType message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IAutoAssignmentType, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified AutoAssignmentType message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.AutoAssignmentType.verify|verify} messages.
                                 * @param message AutoAssignmentType message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.IAutoAssignmentType, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an AutoAssignmentType message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns AutoAssignmentType
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.AutoAssignmentType;

                                /**
                                 * Decodes an AutoAssignmentType message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns AutoAssignmentType
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.AutoAssignmentType;

                                /**
                                 * Verifies an AutoAssignmentType message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an AutoAssignmentType message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns AutoAssignmentType
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.AutoAssignmentType;

                                /**
                                 * Creates a plain object from an AutoAssignmentType message. Also converts values to other types if specified.
                                 * @param message AutoAssignmentType
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerce.consumer.procurement.v1.AssignmentProtocol.AutoAssignmentType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this AutoAssignmentType to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for AutoAssignmentType
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of a LicensePool. */
                        interface ILicensePool {

                            /** LicensePool name */
                            name?: (string|null);

                            /** LicensePool licenseAssignmentProtocol */
                            licenseAssignmentProtocol?: (google.cloud.commerce.consumer.procurement.v1.IAssignmentProtocol|null);

                            /** LicensePool availableLicenseCount */
                            availableLicenseCount?: (number|null);

                            /** LicensePool totalLicenseCount */
                            totalLicenseCount?: (number|null);
                        }

                        /** Represents a LicensePool. */
                        class LicensePool implements ILicensePool {

                            /**
                             * Constructs a new LicensePool.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.ILicensePool);

                            /** LicensePool name. */
                            public name: string;

                            /** LicensePool licenseAssignmentProtocol. */
                            public licenseAssignmentProtocol?: (google.cloud.commerce.consumer.procurement.v1.IAssignmentProtocol|null);

                            /** LicensePool availableLicenseCount. */
                            public availableLicenseCount: number;

                            /** LicensePool totalLicenseCount. */
                            public totalLicenseCount: number;

                            /**
                             * Creates a new LicensePool instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns LicensePool instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.ILicensePool): google.cloud.commerce.consumer.procurement.v1.LicensePool;

                            /**
                             * Encodes the specified LicensePool message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.LicensePool.verify|verify} messages.
                             * @param message LicensePool message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.ILicensePool, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified LicensePool message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.LicensePool.verify|verify} messages.
                             * @param message LicensePool message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.ILicensePool, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a LicensePool message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns LicensePool
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.LicensePool;

                            /**
                             * Decodes a LicensePool message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns LicensePool
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.LicensePool;

                            /**
                             * Verifies a LicensePool message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a LicensePool message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns LicensePool
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.LicensePool;

                            /**
                             * Creates a plain object from a LicensePool message. Also converts values to other types if specified.
                             * @param message LicensePool
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.LicensePool, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this LicensePool to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for LicensePool
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a GetLicensePoolRequest. */
                        interface IGetLicensePoolRequest {

                            /** GetLicensePoolRequest name */
                            name?: (string|null);
                        }

                        /** Represents a GetLicensePoolRequest. */
                        class GetLicensePoolRequest implements IGetLicensePoolRequest {

                            /**
                             * Constructs a new GetLicensePoolRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IGetLicensePoolRequest);

                            /** GetLicensePoolRequest name. */
                            public name: string;

                            /**
                             * Creates a new GetLicensePoolRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetLicensePoolRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IGetLicensePoolRequest): google.cloud.commerce.consumer.procurement.v1.GetLicensePoolRequest;

                            /**
                             * Encodes the specified GetLicensePoolRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.GetLicensePoolRequest.verify|verify} messages.
                             * @param message GetLicensePoolRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IGetLicensePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GetLicensePoolRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.GetLicensePoolRequest.verify|verify} messages.
                             * @param message GetLicensePoolRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IGetLicensePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetLicensePoolRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetLicensePoolRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.GetLicensePoolRequest;

                            /**
                             * Decodes a GetLicensePoolRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GetLicensePoolRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.GetLicensePoolRequest;

                            /**
                             * Verifies a GetLicensePoolRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GetLicensePoolRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetLicensePoolRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.GetLicensePoolRequest;

                            /**
                             * Creates a plain object from a GetLicensePoolRequest message. Also converts values to other types if specified.
                             * @param message GetLicensePoolRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.GetLicensePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetLicensePoolRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for GetLicensePoolRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an UpdateLicensePoolRequest. */
                        interface IUpdateLicensePoolRequest {

                            /** UpdateLicensePoolRequest licensePool */
                            licensePool?: (google.cloud.commerce.consumer.procurement.v1.ILicensePool|null);

                            /** UpdateLicensePoolRequest updateMask */
                            updateMask?: (google.protobuf.IFieldMask|null);
                        }

                        /** Represents an UpdateLicensePoolRequest. */
                        class UpdateLicensePoolRequest implements IUpdateLicensePoolRequest {

                            /**
                             * Constructs a new UpdateLicensePoolRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IUpdateLicensePoolRequest);

                            /** UpdateLicensePoolRequest licensePool. */
                            public licensePool?: (google.cloud.commerce.consumer.procurement.v1.ILicensePool|null);

                            /** UpdateLicensePoolRequest updateMask. */
                            public updateMask?: (google.protobuf.IFieldMask|null);

                            /**
                             * Creates a new UpdateLicensePoolRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns UpdateLicensePoolRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IUpdateLicensePoolRequest): google.cloud.commerce.consumer.procurement.v1.UpdateLicensePoolRequest;

                            /**
                             * Encodes the specified UpdateLicensePoolRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.UpdateLicensePoolRequest.verify|verify} messages.
                             * @param message UpdateLicensePoolRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IUpdateLicensePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified UpdateLicensePoolRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.UpdateLicensePoolRequest.verify|verify} messages.
                             * @param message UpdateLicensePoolRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IUpdateLicensePoolRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an UpdateLicensePoolRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns UpdateLicensePoolRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.UpdateLicensePoolRequest;

                            /**
                             * Decodes an UpdateLicensePoolRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns UpdateLicensePoolRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.UpdateLicensePoolRequest;

                            /**
                             * Verifies an UpdateLicensePoolRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an UpdateLicensePoolRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns UpdateLicensePoolRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.UpdateLicensePoolRequest;

                            /**
                             * Creates a plain object from an UpdateLicensePoolRequest message. Also converts values to other types if specified.
                             * @param message UpdateLicensePoolRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.UpdateLicensePoolRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this UpdateLicensePoolRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for UpdateLicensePoolRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an AssignRequest. */
                        interface IAssignRequest {

                            /** AssignRequest parent */
                            parent?: (string|null);

                            /** AssignRequest usernames */
                            usernames?: (string[]|null);
                        }

                        /** Represents an AssignRequest. */
                        class AssignRequest implements IAssignRequest {

                            /**
                             * Constructs a new AssignRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IAssignRequest);

                            /** AssignRequest parent. */
                            public parent: string;

                            /** AssignRequest usernames. */
                            public usernames: string[];

                            /**
                             * Creates a new AssignRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AssignRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IAssignRequest): google.cloud.commerce.consumer.procurement.v1.AssignRequest;

                            /**
                             * Encodes the specified AssignRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.AssignRequest.verify|verify} messages.
                             * @param message AssignRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IAssignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AssignRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.AssignRequest.verify|verify} messages.
                             * @param message AssignRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IAssignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AssignRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AssignRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.AssignRequest;

                            /**
                             * Decodes an AssignRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AssignRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.AssignRequest;

                            /**
                             * Verifies an AssignRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AssignRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AssignRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.AssignRequest;

                            /**
                             * Creates a plain object from an AssignRequest message. Also converts values to other types if specified.
                             * @param message AssignRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.AssignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AssignRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AssignRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an AssignResponse. */
                        interface IAssignResponse {
                        }

                        /** Represents an AssignResponse. */
                        class AssignResponse implements IAssignResponse {

                            /**
                             * Constructs a new AssignResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IAssignResponse);

                            /**
                             * Creates a new AssignResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AssignResponse instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IAssignResponse): google.cloud.commerce.consumer.procurement.v1.AssignResponse;

                            /**
                             * Encodes the specified AssignResponse message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.AssignResponse.verify|verify} messages.
                             * @param message AssignResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IAssignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AssignResponse message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.AssignResponse.verify|verify} messages.
                             * @param message AssignResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IAssignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AssignResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AssignResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.AssignResponse;

                            /**
                             * Decodes an AssignResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AssignResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.AssignResponse;

                            /**
                             * Verifies an AssignResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AssignResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AssignResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.AssignResponse;

                            /**
                             * Creates a plain object from an AssignResponse message. Also converts values to other types if specified.
                             * @param message AssignResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.AssignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AssignResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AssignResponse
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an UnassignRequest. */
                        interface IUnassignRequest {

                            /** UnassignRequest parent */
                            parent?: (string|null);

                            /** UnassignRequest usernames */
                            usernames?: (string[]|null);
                        }

                        /** Represents an UnassignRequest. */
                        class UnassignRequest implements IUnassignRequest {

                            /**
                             * Constructs a new UnassignRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IUnassignRequest);

                            /** UnassignRequest parent. */
                            public parent: string;

                            /** UnassignRequest usernames. */
                            public usernames: string[];

                            /**
                             * Creates a new UnassignRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns UnassignRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IUnassignRequest): google.cloud.commerce.consumer.procurement.v1.UnassignRequest;

                            /**
                             * Encodes the specified UnassignRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.UnassignRequest.verify|verify} messages.
                             * @param message UnassignRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IUnassignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified UnassignRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.UnassignRequest.verify|verify} messages.
                             * @param message UnassignRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IUnassignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an UnassignRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns UnassignRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.UnassignRequest;

                            /**
                             * Decodes an UnassignRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns UnassignRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.UnassignRequest;

                            /**
                             * Verifies an UnassignRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an UnassignRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns UnassignRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.UnassignRequest;

                            /**
                             * Creates a plain object from an UnassignRequest message. Also converts values to other types if specified.
                             * @param message UnassignRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.UnassignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this UnassignRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for UnassignRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an UnassignResponse. */
                        interface IUnassignResponse {
                        }

                        /** Represents an UnassignResponse. */
                        class UnassignResponse implements IUnassignResponse {

                            /**
                             * Constructs a new UnassignResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IUnassignResponse);

                            /**
                             * Creates a new UnassignResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns UnassignResponse instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IUnassignResponse): google.cloud.commerce.consumer.procurement.v1.UnassignResponse;

                            /**
                             * Encodes the specified UnassignResponse message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.UnassignResponse.verify|verify} messages.
                             * @param message UnassignResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IUnassignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified UnassignResponse message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.UnassignResponse.verify|verify} messages.
                             * @param message UnassignResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IUnassignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an UnassignResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns UnassignResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.UnassignResponse;

                            /**
                             * Decodes an UnassignResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns UnassignResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.UnassignResponse;

                            /**
                             * Verifies an UnassignResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an UnassignResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns UnassignResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.UnassignResponse;

                            /**
                             * Creates a plain object from an UnassignResponse message. Also converts values to other types if specified.
                             * @param message UnassignResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.UnassignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this UnassignResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for UnassignResponse
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an EnumerateLicensedUsersRequest. */
                        interface IEnumerateLicensedUsersRequest {

                            /** EnumerateLicensedUsersRequest parent */
                            parent?: (string|null);

                            /** EnumerateLicensedUsersRequest pageSize */
                            pageSize?: (number|null);

                            /** EnumerateLicensedUsersRequest pageToken */
                            pageToken?: (string|null);
                        }

                        /** Represents an EnumerateLicensedUsersRequest. */
                        class EnumerateLicensedUsersRequest implements IEnumerateLicensedUsersRequest {

                            /**
                             * Constructs a new EnumerateLicensedUsersRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IEnumerateLicensedUsersRequest);

                            /** EnumerateLicensedUsersRequest parent. */
                            public parent: string;

                            /** EnumerateLicensedUsersRequest pageSize. */
                            public pageSize: number;

                            /** EnumerateLicensedUsersRequest pageToken. */
                            public pageToken: string;

                            /**
                             * Creates a new EnumerateLicensedUsersRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EnumerateLicensedUsersRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IEnumerateLicensedUsersRequest): google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersRequest;

                            /**
                             * Encodes the specified EnumerateLicensedUsersRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersRequest.verify|verify} messages.
                             * @param message EnumerateLicensedUsersRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IEnumerateLicensedUsersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EnumerateLicensedUsersRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersRequest.verify|verify} messages.
                             * @param message EnumerateLicensedUsersRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IEnumerateLicensedUsersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EnumerateLicensedUsersRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EnumerateLicensedUsersRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersRequest;

                            /**
                             * Decodes an EnumerateLicensedUsersRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EnumerateLicensedUsersRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersRequest;

                            /**
                             * Verifies an EnumerateLicensedUsersRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EnumerateLicensedUsersRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EnumerateLicensedUsersRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersRequest;

                            /**
                             * Creates a plain object from an EnumerateLicensedUsersRequest message. Also converts values to other types if specified.
                             * @param message EnumerateLicensedUsersRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EnumerateLicensedUsersRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for EnumerateLicensedUsersRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a LicensedUser. */
                        interface ILicensedUser {

                            /** LicensedUser username */
                            username?: (string|null);

                            /** LicensedUser assignTime */
                            assignTime?: (google.protobuf.ITimestamp|null);

                            /** LicensedUser recentUsageTime */
                            recentUsageTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a LicensedUser. */
                        class LicensedUser implements ILicensedUser {

                            /**
                             * Constructs a new LicensedUser.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.ILicensedUser);

                            /** LicensedUser username. */
                            public username: string;

                            /** LicensedUser assignTime. */
                            public assignTime?: (google.protobuf.ITimestamp|null);

                            /** LicensedUser recentUsageTime. */
                            public recentUsageTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new LicensedUser instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns LicensedUser instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.ILicensedUser): google.cloud.commerce.consumer.procurement.v1.LicensedUser;

                            /**
                             * Encodes the specified LicensedUser message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.LicensedUser.verify|verify} messages.
                             * @param message LicensedUser message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.ILicensedUser, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified LicensedUser message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.LicensedUser.verify|verify} messages.
                             * @param message LicensedUser message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.ILicensedUser, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a LicensedUser message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns LicensedUser
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.LicensedUser;

                            /**
                             * Decodes a LicensedUser message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns LicensedUser
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.LicensedUser;

                            /**
                             * Verifies a LicensedUser message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a LicensedUser message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns LicensedUser
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.LicensedUser;

                            /**
                             * Creates a plain object from a LicensedUser message. Also converts values to other types if specified.
                             * @param message LicensedUser
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.LicensedUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this LicensedUser to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for LicensedUser
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an EnumerateLicensedUsersResponse. */
                        interface IEnumerateLicensedUsersResponse {

                            /** EnumerateLicensedUsersResponse licensedUsers */
                            licensedUsers?: (google.cloud.commerce.consumer.procurement.v1.ILicensedUser[]|null);

                            /** EnumerateLicensedUsersResponse nextPageToken */
                            nextPageToken?: (string|null);
                        }

                        /** Represents an EnumerateLicensedUsersResponse. */
                        class EnumerateLicensedUsersResponse implements IEnumerateLicensedUsersResponse {

                            /**
                             * Constructs a new EnumerateLicensedUsersResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IEnumerateLicensedUsersResponse);

                            /** EnumerateLicensedUsersResponse licensedUsers. */
                            public licensedUsers: google.cloud.commerce.consumer.procurement.v1.ILicensedUser[];

                            /** EnumerateLicensedUsersResponse nextPageToken. */
                            public nextPageToken: string;

                            /**
                             * Creates a new EnumerateLicensedUsersResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EnumerateLicensedUsersResponse instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IEnumerateLicensedUsersResponse): google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersResponse;

                            /**
                             * Encodes the specified EnumerateLicensedUsersResponse message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersResponse.verify|verify} messages.
                             * @param message EnumerateLicensedUsersResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IEnumerateLicensedUsersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EnumerateLicensedUsersResponse message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersResponse.verify|verify} messages.
                             * @param message EnumerateLicensedUsersResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IEnumerateLicensedUsersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EnumerateLicensedUsersResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EnumerateLicensedUsersResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersResponse;

                            /**
                             * Decodes an EnumerateLicensedUsersResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EnumerateLicensedUsersResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersResponse;

                            /**
                             * Verifies an EnumerateLicensedUsersResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EnumerateLicensedUsersResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EnumerateLicensedUsersResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersResponse;

                            /**
                             * Creates a plain object from an EnumerateLicensedUsersResponse message. Also converts values to other types if specified.
                             * @param message EnumerateLicensedUsersResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.EnumerateLicensedUsersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EnumerateLicensedUsersResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for EnumerateLicensedUsersResponse
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** LineItemChangeType enum. */
                        enum LineItemChangeType {
                            LINE_ITEM_CHANGE_TYPE_UNSPECIFIED = 0,
                            LINE_ITEM_CHANGE_TYPE_CREATE = 1,
                            LINE_ITEM_CHANGE_TYPE_UPDATE = 2,
                            LINE_ITEM_CHANGE_TYPE_CANCEL = 3,
                            LINE_ITEM_CHANGE_TYPE_REVERT_CANCELLATION = 4
                        }

                        /** LineItemChangeState enum. */
                        enum LineItemChangeState {
                            LINE_ITEM_CHANGE_STATE_UNSPECIFIED = 0,
                            LINE_ITEM_CHANGE_STATE_PENDING_APPROVAL = 1,
                            LINE_ITEM_CHANGE_STATE_APPROVED = 2,
                            LINE_ITEM_CHANGE_STATE_COMPLETED = 3,
                            LINE_ITEM_CHANGE_STATE_REJECTED = 4,
                            LINE_ITEM_CHANGE_STATE_ABANDONED = 5,
                            LINE_ITEM_CHANGE_STATE_ACTIVATING = 6
                        }

                        /** LineItemChangeStateReasonType enum. */
                        enum LineItemChangeStateReasonType {
                            LINE_ITEM_CHANGE_STATE_REASON_TYPE_UNSPECIFIED = 0,
                            LINE_ITEM_CHANGE_STATE_REASON_TYPE_EXPIRED = 1,
                            LINE_ITEM_CHANGE_STATE_REASON_TYPE_USER_CANCELLED = 2,
                            LINE_ITEM_CHANGE_STATE_REASON_TYPE_SYSTEM_CANCELLED = 3
                        }

                        /** Properties of an Order. */
                        interface IOrder {

                            /** Order name */
                            name?: (string|null);

                            /** Order displayName */
                            displayName?: (string|null);

                            /** Order lineItems */
                            lineItems?: (google.cloud.commerce.consumer.procurement.v1.ILineItem[]|null);

                            /** Order cancelledLineItems */
                            cancelledLineItems?: (google.cloud.commerce.consumer.procurement.v1.ILineItem[]|null);

                            /** Order createTime */
                            createTime?: (google.protobuf.ITimestamp|null);

                            /** Order updateTime */
                            updateTime?: (google.protobuf.ITimestamp|null);

                            /** Order etag */
                            etag?: (string|null);
                        }

                        /** Represents an Order. */
                        class Order implements IOrder {

                            /**
                             * Constructs a new Order.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IOrder);

                            /** Order name. */
                            public name: string;

                            /** Order displayName. */
                            public displayName: string;

                            /** Order lineItems. */
                            public lineItems: google.cloud.commerce.consumer.procurement.v1.ILineItem[];

                            /** Order cancelledLineItems. */
                            public cancelledLineItems: google.cloud.commerce.consumer.procurement.v1.ILineItem[];

                            /** Order createTime. */
                            public createTime?: (google.protobuf.ITimestamp|null);

                            /** Order updateTime. */
                            public updateTime?: (google.protobuf.ITimestamp|null);

                            /** Order etag. */
                            public etag: string;

                            /**
                             * Creates a new Order instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Order instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IOrder): google.cloud.commerce.consumer.procurement.v1.Order;

                            /**
                             * Encodes the specified Order message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.Order.verify|verify} messages.
                             * @param message Order message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Order message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.Order.verify|verify} messages.
                             * @param message Order message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Order message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Order
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.Order;

                            /**
                             * Decodes an Order message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Order
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.Order;

                            /**
                             * Verifies an Order message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Order message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Order
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.Order;

                            /**
                             * Creates a plain object from an Order message. Also converts values to other types if specified.
                             * @param message Order
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Order to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Order
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a LineItem. */
                        interface ILineItem {

                            /** LineItem lineItemId */
                            lineItemId?: (string|null);

                            /** LineItem lineItemInfo */
                            lineItemInfo?: (google.cloud.commerce.consumer.procurement.v1.ILineItemInfo|null);

                            /** LineItem pendingChange */
                            pendingChange?: (google.cloud.commerce.consumer.procurement.v1.ILineItemChange|null);

                            /** LineItem changeHistory */
                            changeHistory?: (google.cloud.commerce.consumer.procurement.v1.ILineItemChange[]|null);
                        }

                        /** Represents a LineItem. */
                        class LineItem implements ILineItem {

                            /**
                             * Constructs a new LineItem.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.ILineItem);

                            /** LineItem lineItemId. */
                            public lineItemId: string;

                            /** LineItem lineItemInfo. */
                            public lineItemInfo?: (google.cloud.commerce.consumer.procurement.v1.ILineItemInfo|null);

                            /** LineItem pendingChange. */
                            public pendingChange?: (google.cloud.commerce.consumer.procurement.v1.ILineItemChange|null);

                            /** LineItem changeHistory. */
                            public changeHistory: google.cloud.commerce.consumer.procurement.v1.ILineItemChange[];

                            /**
                             * Creates a new LineItem instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns LineItem instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.ILineItem): google.cloud.commerce.consumer.procurement.v1.LineItem;

                            /**
                             * Encodes the specified LineItem message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.LineItem.verify|verify} messages.
                             * @param message LineItem message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.ILineItem, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified LineItem message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.LineItem.verify|verify} messages.
                             * @param message LineItem message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.ILineItem, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a LineItem message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns LineItem
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.LineItem;

                            /**
                             * Decodes a LineItem message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns LineItem
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.LineItem;

                            /**
                             * Verifies a LineItem message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a LineItem message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns LineItem
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.LineItem;

                            /**
                             * Creates a plain object from a LineItem message. Also converts values to other types if specified.
                             * @param message LineItem
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.LineItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this LineItem to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for LineItem
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a LineItemChange. */
                        interface ILineItemChange {

                            /** LineItemChange changeId */
                            changeId?: (string|null);

                            /** LineItemChange changeType */
                            changeType?: (google.cloud.commerce.consumer.procurement.v1.LineItemChangeType|keyof typeof google.cloud.commerce.consumer.procurement.v1.LineItemChangeType|null);

                            /** LineItemChange oldLineItemInfo */
                            oldLineItemInfo?: (google.cloud.commerce.consumer.procurement.v1.ILineItemInfo|null);

                            /** LineItemChange newLineItemInfo */
                            newLineItemInfo?: (google.cloud.commerce.consumer.procurement.v1.ILineItemInfo|null);

                            /** LineItemChange changeState */
                            changeState?: (google.cloud.commerce.consumer.procurement.v1.LineItemChangeState|keyof typeof google.cloud.commerce.consumer.procurement.v1.LineItemChangeState|null);

                            /** LineItemChange stateReason */
                            stateReason?: (string|null);

                            /** LineItemChange changeStateReasonType */
                            changeStateReasonType?: (google.cloud.commerce.consumer.procurement.v1.LineItemChangeStateReasonType|keyof typeof google.cloud.commerce.consumer.procurement.v1.LineItemChangeStateReasonType|null);

                            /** LineItemChange changeEffectiveTime */
                            changeEffectiveTime?: (google.protobuf.ITimestamp|null);

                            /** LineItemChange createTime */
                            createTime?: (google.protobuf.ITimestamp|null);

                            /** LineItemChange updateTime */
                            updateTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a LineItemChange. */
                        class LineItemChange implements ILineItemChange {

                            /**
                             * Constructs a new LineItemChange.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.ILineItemChange);

                            /** LineItemChange changeId. */
                            public changeId: string;

                            /** LineItemChange changeType. */
                            public changeType: (google.cloud.commerce.consumer.procurement.v1.LineItemChangeType|keyof typeof google.cloud.commerce.consumer.procurement.v1.LineItemChangeType);

                            /** LineItemChange oldLineItemInfo. */
                            public oldLineItemInfo?: (google.cloud.commerce.consumer.procurement.v1.ILineItemInfo|null);

                            /** LineItemChange newLineItemInfo. */
                            public newLineItemInfo?: (google.cloud.commerce.consumer.procurement.v1.ILineItemInfo|null);

                            /** LineItemChange changeState. */
                            public changeState: (google.cloud.commerce.consumer.procurement.v1.LineItemChangeState|keyof typeof google.cloud.commerce.consumer.procurement.v1.LineItemChangeState);

                            /** LineItemChange stateReason. */
                            public stateReason: string;

                            /** LineItemChange changeStateReasonType. */
                            public changeStateReasonType: (google.cloud.commerce.consumer.procurement.v1.LineItemChangeStateReasonType|keyof typeof google.cloud.commerce.consumer.procurement.v1.LineItemChangeStateReasonType);

                            /** LineItemChange changeEffectiveTime. */
                            public changeEffectiveTime?: (google.protobuf.ITimestamp|null);

                            /** LineItemChange createTime. */
                            public createTime?: (google.protobuf.ITimestamp|null);

                            /** LineItemChange updateTime. */
                            public updateTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new LineItemChange instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns LineItemChange instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.ILineItemChange): google.cloud.commerce.consumer.procurement.v1.LineItemChange;

                            /**
                             * Encodes the specified LineItemChange message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.LineItemChange.verify|verify} messages.
                             * @param message LineItemChange message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.ILineItemChange, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified LineItemChange message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.LineItemChange.verify|verify} messages.
                             * @param message LineItemChange message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.ILineItemChange, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a LineItemChange message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns LineItemChange
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.LineItemChange;

                            /**
                             * Decodes a LineItemChange message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns LineItemChange
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.LineItemChange;

                            /**
                             * Verifies a LineItemChange message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a LineItemChange message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns LineItemChange
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.LineItemChange;

                            /**
                             * Creates a plain object from a LineItemChange message. Also converts values to other types if specified.
                             * @param message LineItemChange
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.LineItemChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this LineItemChange to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for LineItemChange
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a LineItemInfo. */
                        interface ILineItemInfo {

                            /** LineItemInfo offer */
                            offer?: (string|null);

                            /** LineItemInfo parameters */
                            parameters?: (google.cloud.commerce.consumer.procurement.v1.IParameter[]|null);

                            /** LineItemInfo subscription */
                            subscription?: (google.cloud.commerce.consumer.procurement.v1.ISubscription|null);
                        }

                        /** Represents a LineItemInfo. */
                        class LineItemInfo implements ILineItemInfo {

                            /**
                             * Constructs a new LineItemInfo.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.ILineItemInfo);

                            /** LineItemInfo offer. */
                            public offer: string;

                            /** LineItemInfo parameters. */
                            public parameters: google.cloud.commerce.consumer.procurement.v1.IParameter[];

                            /** LineItemInfo subscription. */
                            public subscription?: (google.cloud.commerce.consumer.procurement.v1.ISubscription|null);

                            /**
                             * Creates a new LineItemInfo instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns LineItemInfo instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.ILineItemInfo): google.cloud.commerce.consumer.procurement.v1.LineItemInfo;

                            /**
                             * Encodes the specified LineItemInfo message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.LineItemInfo.verify|verify} messages.
                             * @param message LineItemInfo message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.ILineItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified LineItemInfo message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.LineItemInfo.verify|verify} messages.
                             * @param message LineItemInfo message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.ILineItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a LineItemInfo message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns LineItemInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.LineItemInfo;

                            /**
                             * Decodes a LineItemInfo message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns LineItemInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.LineItemInfo;

                            /**
                             * Verifies a LineItemInfo message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a LineItemInfo message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns LineItemInfo
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.LineItemInfo;

                            /**
                             * Creates a plain object from a LineItemInfo message. Also converts values to other types if specified.
                             * @param message LineItemInfo
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.LineItemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this LineItemInfo to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for LineItemInfo
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Parameter. */
                        interface IParameter {

                            /** Parameter name */
                            name?: (string|null);

                            /** Parameter value */
                            value?: (google.cloud.commerce.consumer.procurement.v1.Parameter.IValue|null);
                        }

                        /** Represents a Parameter. */
                        class Parameter implements IParameter {

                            /**
                             * Constructs a new Parameter.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IParameter);

                            /** Parameter name. */
                            public name: string;

                            /** Parameter value. */
                            public value?: (google.cloud.commerce.consumer.procurement.v1.Parameter.IValue|null);

                            /**
                             * Creates a new Parameter instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Parameter instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IParameter): google.cloud.commerce.consumer.procurement.v1.Parameter;

                            /**
                             * Encodes the specified Parameter message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.Parameter.verify|verify} messages.
                             * @param message Parameter message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Parameter message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.Parameter.verify|verify} messages.
                             * @param message Parameter message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Parameter message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Parameter
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.Parameter;

                            /**
                             * Decodes a Parameter message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Parameter
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.Parameter;

                            /**
                             * Verifies a Parameter message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Parameter
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.Parameter;

                            /**
                             * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                             * @param message Parameter
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Parameter to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Parameter
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Parameter {

                            /** Properties of a Value. */
                            interface IValue {

                                /** Value int64Value */
                                int64Value?: (number|Long|string|null);

                                /** Value stringValue */
                                stringValue?: (string|null);

                                /** Value doubleValue */
                                doubleValue?: (number|null);
                            }

                            /** Represents a Value. */
                            class Value implements IValue {

                                /**
                                 * Constructs a new Value.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerce.consumer.procurement.v1.Parameter.IValue);

                                /** Value int64Value. */
                                public int64Value?: (number|Long|string|null);

                                /** Value stringValue. */
                                public stringValue?: (string|null);

                                /** Value doubleValue. */
                                public doubleValue?: (number|null);

                                /** Value kind. */
                                public kind?: ("int64Value"|"stringValue"|"doubleValue");

                                /**
                                 * Creates a new Value instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Value instance
                                 */
                                public static create(properties?: google.cloud.commerce.consumer.procurement.v1.Parameter.IValue): google.cloud.commerce.consumer.procurement.v1.Parameter.Value;

                                /**
                                 * Encodes the specified Value message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.Parameter.Value.verify|verify} messages.
                                 * @param message Value message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerce.consumer.procurement.v1.Parameter.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Value message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.Parameter.Value.verify|verify} messages.
                                 * @param message Value message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.Parameter.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Value message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Value
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.Parameter.Value;

                                /**
                                 * Decodes a Value message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Value
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.Parameter.Value;

                                /**
                                 * Verifies a Value message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Value
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.Parameter.Value;

                                /**
                                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                                 * @param message Value
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerce.consumer.procurement.v1.Parameter.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Value to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Value
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of a Subscription. */
                        interface ISubscription {

                            /** Subscription startTime */
                            startTime?: (google.protobuf.ITimestamp|null);

                            /** Subscription endTime */
                            endTime?: (google.protobuf.ITimestamp|null);

                            /** Subscription autoRenewalEnabled */
                            autoRenewalEnabled?: (boolean|null);
                        }

                        /** Represents a Subscription. */
                        class Subscription implements ISubscription {

                            /**
                             * Constructs a new Subscription.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.ISubscription);

                            /** Subscription startTime. */
                            public startTime?: (google.protobuf.ITimestamp|null);

                            /** Subscription endTime. */
                            public endTime?: (google.protobuf.ITimestamp|null);

                            /** Subscription autoRenewalEnabled. */
                            public autoRenewalEnabled: boolean;

                            /**
                             * Creates a new Subscription instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Subscription instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.ISubscription): google.cloud.commerce.consumer.procurement.v1.Subscription;

                            /**
                             * Encodes the specified Subscription message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.Subscription.verify|verify} messages.
                             * @param message Subscription message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.ISubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Subscription message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.Subscription.verify|verify} messages.
                             * @param message Subscription message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.ISubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Subscription message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Subscription
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.Subscription;

                            /**
                             * Decodes a Subscription message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Subscription
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.Subscription;

                            /**
                             * Verifies a Subscription message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Subscription message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Subscription
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.Subscription;

                            /**
                             * Creates a plain object from a Subscription message. Also converts values to other types if specified.
                             * @param message Subscription
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.Subscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Subscription to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Subscription
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Represents a ConsumerProcurementService */
                        class ConsumerProcurementService extends $protobuf.rpc.Service {

                            /**
                             * Constructs a new ConsumerProcurementService service.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             */
                            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                            /**
                             * Creates new ConsumerProcurementService service using the specified rpc implementation.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             * @returns RPC service. Useful where requests and/or responses are streamed.
                             */
                            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ConsumerProcurementService;

                            /**
                             * Calls PlaceOrder.
                             * @param request PlaceOrderRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public placeOrder(request: google.cloud.commerce.consumer.procurement.v1.IPlaceOrderRequest, callback: google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.PlaceOrderCallback): void;

                            /**
                             * Calls PlaceOrder.
                             * @param request PlaceOrderRequest message or plain object
                             * @returns Promise
                             */
                            public placeOrder(request: google.cloud.commerce.consumer.procurement.v1.IPlaceOrderRequest): Promise<google.longrunning.Operation>;

                            /**
                             * Calls GetOrder.
                             * @param request GetOrderRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Order
                             */
                            public getOrder(request: google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest, callback: google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.GetOrderCallback): void;

                            /**
                             * Calls GetOrder.
                             * @param request GetOrderRequest message or plain object
                             * @returns Promise
                             */
                            public getOrder(request: google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest): Promise<google.cloud.commerce.consumer.procurement.v1.Order>;

                            /**
                             * Calls ListOrders.
                             * @param request ListOrdersRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and ListOrdersResponse
                             */
                            public listOrders(request: google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest, callback: google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.ListOrdersCallback): void;

                            /**
                             * Calls ListOrders.
                             * @param request ListOrdersRequest message or plain object
                             * @returns Promise
                             */
                            public listOrders(request: google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest): Promise<google.cloud.commerce.consumer.procurement.v1.ListOrdersResponse>;

                            /**
                             * Calls ModifyOrder.
                             * @param request ModifyOrderRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public modifyOrder(request: google.cloud.commerce.consumer.procurement.v1.IModifyOrderRequest, callback: google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.ModifyOrderCallback): void;

                            /**
                             * Calls ModifyOrder.
                             * @param request ModifyOrderRequest message or plain object
                             * @returns Promise
                             */
                            public modifyOrder(request: google.cloud.commerce.consumer.procurement.v1.IModifyOrderRequest): Promise<google.longrunning.Operation>;

                            /**
                             * Calls CancelOrder.
                             * @param request CancelOrderRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public cancelOrder(request: google.cloud.commerce.consumer.procurement.v1.ICancelOrderRequest, callback: google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService.CancelOrderCallback): void;

                            /**
                             * Calls CancelOrder.
                             * @param request CancelOrderRequest message or plain object
                             * @returns Promise
                             */
                            public cancelOrder(request: google.cloud.commerce.consumer.procurement.v1.ICancelOrderRequest): Promise<google.longrunning.Operation>;
                        }

                        namespace ConsumerProcurementService {

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService|placeOrder}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type PlaceOrderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService|getOrder}.
                             * @param error Error, if any
                             * @param [response] Order
                             */
                            type GetOrderCallback = (error: (Error|null), response?: google.cloud.commerce.consumer.procurement.v1.Order) => void;

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService|listOrders}.
                             * @param error Error, if any
                             * @param [response] ListOrdersResponse
                             */
                            type ListOrdersCallback = (error: (Error|null), response?: google.cloud.commerce.consumer.procurement.v1.ListOrdersResponse) => void;

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService|modifyOrder}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type ModifyOrderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1.ConsumerProcurementService|cancelOrder}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type CancelOrderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                        }

                        /** AutoRenewalBehavior enum. */
                        enum AutoRenewalBehavior {
                            AUTO_RENEWAL_BEHAVIOR_UNSPECIFIED = 0,
                            AUTO_RENEWAL_BEHAVIOR_ENABLE = 1,
                            AUTO_RENEWAL_BEHAVIOR_DISABLE = 2
                        }

                        /** Properties of a PlaceOrderRequest. */
                        interface IPlaceOrderRequest {

                            /** PlaceOrderRequest parent */
                            parent?: (string|null);

                            /** PlaceOrderRequest displayName */
                            displayName?: (string|null);

                            /** PlaceOrderRequest lineItemInfo */
                            lineItemInfo?: (google.cloud.commerce.consumer.procurement.v1.ILineItemInfo[]|null);

                            /** PlaceOrderRequest requestId */
                            requestId?: (string|null);
                        }

                        /** Represents a PlaceOrderRequest. */
                        class PlaceOrderRequest implements IPlaceOrderRequest {

                            /**
                             * Constructs a new PlaceOrderRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IPlaceOrderRequest);

                            /** PlaceOrderRequest parent. */
                            public parent: string;

                            /** PlaceOrderRequest displayName. */
                            public displayName: string;

                            /** PlaceOrderRequest lineItemInfo. */
                            public lineItemInfo: google.cloud.commerce.consumer.procurement.v1.ILineItemInfo[];

                            /** PlaceOrderRequest requestId. */
                            public requestId: string;

                            /**
                             * Creates a new PlaceOrderRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PlaceOrderRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IPlaceOrderRequest): google.cloud.commerce.consumer.procurement.v1.PlaceOrderRequest;

                            /**
                             * Encodes the specified PlaceOrderRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.PlaceOrderRequest.verify|verify} messages.
                             * @param message PlaceOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IPlaceOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PlaceOrderRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.PlaceOrderRequest.verify|verify} messages.
                             * @param message PlaceOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IPlaceOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PlaceOrderRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PlaceOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.PlaceOrderRequest;

                            /**
                             * Decodes a PlaceOrderRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PlaceOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.PlaceOrderRequest;

                            /**
                             * Verifies a PlaceOrderRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PlaceOrderRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PlaceOrderRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.PlaceOrderRequest;

                            /**
                             * Creates a plain object from a PlaceOrderRequest message. Also converts values to other types if specified.
                             * @param message PlaceOrderRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.PlaceOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PlaceOrderRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for PlaceOrderRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a PlaceOrderMetadata. */
                        interface IPlaceOrderMetadata {
                        }

                        /** Represents a PlaceOrderMetadata. */
                        class PlaceOrderMetadata implements IPlaceOrderMetadata {

                            /**
                             * Constructs a new PlaceOrderMetadata.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IPlaceOrderMetadata);

                            /**
                             * Creates a new PlaceOrderMetadata instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PlaceOrderMetadata instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IPlaceOrderMetadata): google.cloud.commerce.consumer.procurement.v1.PlaceOrderMetadata;

                            /**
                             * Encodes the specified PlaceOrderMetadata message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.PlaceOrderMetadata.verify|verify} messages.
                             * @param message PlaceOrderMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IPlaceOrderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PlaceOrderMetadata message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.PlaceOrderMetadata.verify|verify} messages.
                             * @param message PlaceOrderMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IPlaceOrderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PlaceOrderMetadata message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PlaceOrderMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.PlaceOrderMetadata;

                            /**
                             * Decodes a PlaceOrderMetadata message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PlaceOrderMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.PlaceOrderMetadata;

                            /**
                             * Verifies a PlaceOrderMetadata message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PlaceOrderMetadata message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PlaceOrderMetadata
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.PlaceOrderMetadata;

                            /**
                             * Creates a plain object from a PlaceOrderMetadata message. Also converts values to other types if specified.
                             * @param message PlaceOrderMetadata
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.PlaceOrderMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PlaceOrderMetadata to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for PlaceOrderMetadata
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a GetOrderRequest. */
                        interface IGetOrderRequest {

                            /** GetOrderRequest name */
                            name?: (string|null);
                        }

                        /** Represents a GetOrderRequest. */
                        class GetOrderRequest implements IGetOrderRequest {

                            /**
                             * Constructs a new GetOrderRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest);

                            /** GetOrderRequest name. */
                            public name: string;

                            /**
                             * Creates a new GetOrderRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetOrderRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest): google.cloud.commerce.consumer.procurement.v1.GetOrderRequest;

                            /**
                             * Encodes the specified GetOrderRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.GetOrderRequest.verify|verify} messages.
                             * @param message GetOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GetOrderRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.GetOrderRequest.verify|verify} messages.
                             * @param message GetOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IGetOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetOrderRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.GetOrderRequest;

                            /**
                             * Decodes a GetOrderRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GetOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.GetOrderRequest;

                            /**
                             * Verifies a GetOrderRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GetOrderRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetOrderRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.GetOrderRequest;

                            /**
                             * Creates a plain object from a GetOrderRequest message. Also converts values to other types if specified.
                             * @param message GetOrderRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.GetOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetOrderRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for GetOrderRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ListOrdersRequest. */
                        interface IListOrdersRequest {

                            /** ListOrdersRequest parent */
                            parent?: (string|null);

                            /** ListOrdersRequest pageSize */
                            pageSize?: (number|null);

                            /** ListOrdersRequest pageToken */
                            pageToken?: (string|null);

                            /** ListOrdersRequest filter */
                            filter?: (string|null);
                        }

                        /** Represents a ListOrdersRequest. */
                        class ListOrdersRequest implements IListOrdersRequest {

                            /**
                             * Constructs a new ListOrdersRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest);

                            /** ListOrdersRequest parent. */
                            public parent: string;

                            /** ListOrdersRequest pageSize. */
                            public pageSize: number;

                            /** ListOrdersRequest pageToken. */
                            public pageToken: string;

                            /** ListOrdersRequest filter. */
                            public filter: string;

                            /**
                             * Creates a new ListOrdersRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListOrdersRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest): google.cloud.commerce.consumer.procurement.v1.ListOrdersRequest;

                            /**
                             * Encodes the specified ListOrdersRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.ListOrdersRequest.verify|verify} messages.
                             * @param message ListOrdersRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListOrdersRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.ListOrdersRequest.verify|verify} messages.
                             * @param message ListOrdersRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IListOrdersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListOrdersRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListOrdersRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.ListOrdersRequest;

                            /**
                             * Decodes a ListOrdersRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListOrdersRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.ListOrdersRequest;

                            /**
                             * Verifies a ListOrdersRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListOrdersRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListOrdersRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.ListOrdersRequest;

                            /**
                             * Creates a plain object from a ListOrdersRequest message. Also converts values to other types if specified.
                             * @param message ListOrdersRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.ListOrdersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListOrdersRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ListOrdersRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ListOrdersResponse. */
                        interface IListOrdersResponse {

                            /** ListOrdersResponse orders */
                            orders?: (google.cloud.commerce.consumer.procurement.v1.IOrder[]|null);

                            /** ListOrdersResponse nextPageToken */
                            nextPageToken?: (string|null);
                        }

                        /** Represents a ListOrdersResponse. */
                        class ListOrdersResponse implements IListOrdersResponse {

                            /**
                             * Constructs a new ListOrdersResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IListOrdersResponse);

                            /** ListOrdersResponse orders. */
                            public orders: google.cloud.commerce.consumer.procurement.v1.IOrder[];

                            /** ListOrdersResponse nextPageToken. */
                            public nextPageToken: string;

                            /**
                             * Creates a new ListOrdersResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListOrdersResponse instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IListOrdersResponse): google.cloud.commerce.consumer.procurement.v1.ListOrdersResponse;

                            /**
                             * Encodes the specified ListOrdersResponse message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.ListOrdersResponse.verify|verify} messages.
                             * @param message ListOrdersResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IListOrdersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListOrdersResponse message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.ListOrdersResponse.verify|verify} messages.
                             * @param message ListOrdersResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IListOrdersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListOrdersResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListOrdersResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.ListOrdersResponse;

                            /**
                             * Decodes a ListOrdersResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListOrdersResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.ListOrdersResponse;

                            /**
                             * Verifies a ListOrdersResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListOrdersResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListOrdersResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.ListOrdersResponse;

                            /**
                             * Creates a plain object from a ListOrdersResponse message. Also converts values to other types if specified.
                             * @param message ListOrdersResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.ListOrdersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListOrdersResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ListOrdersResponse
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ModifyOrderRequest. */
                        interface IModifyOrderRequest {

                            /** ModifyOrderRequest name */
                            name?: (string|null);

                            /** ModifyOrderRequest modifications */
                            modifications?: (google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.IModification[]|null);

                            /** ModifyOrderRequest displayName */
                            displayName?: (string|null);

                            /** ModifyOrderRequest etag */
                            etag?: (string|null);
                        }

                        /** Represents a ModifyOrderRequest. */
                        class ModifyOrderRequest implements IModifyOrderRequest {

                            /**
                             * Constructs a new ModifyOrderRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IModifyOrderRequest);

                            /** ModifyOrderRequest name. */
                            public name: string;

                            /** ModifyOrderRequest modifications. */
                            public modifications: google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.IModification[];

                            /** ModifyOrderRequest displayName. */
                            public displayName: string;

                            /** ModifyOrderRequest etag. */
                            public etag: string;

                            /**
                             * Creates a new ModifyOrderRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ModifyOrderRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IModifyOrderRequest): google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest;

                            /**
                             * Encodes the specified ModifyOrderRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.verify|verify} messages.
                             * @param message ModifyOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IModifyOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ModifyOrderRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.verify|verify} messages.
                             * @param message ModifyOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IModifyOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ModifyOrderRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ModifyOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest;

                            /**
                             * Decodes a ModifyOrderRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ModifyOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest;

                            /**
                             * Verifies a ModifyOrderRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ModifyOrderRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ModifyOrderRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest;

                            /**
                             * Creates a plain object from a ModifyOrderRequest message. Also converts values to other types if specified.
                             * @param message ModifyOrderRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ModifyOrderRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ModifyOrderRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace ModifyOrderRequest {

                            /** Properties of a Modification. */
                            interface IModification {

                                /** Modification lineItemId */
                                lineItemId?: (string|null);

                                /** Modification changeType */
                                changeType?: (google.cloud.commerce.consumer.procurement.v1.LineItemChangeType|keyof typeof google.cloud.commerce.consumer.procurement.v1.LineItemChangeType|null);

                                /** Modification newLineItemInfo */
                                newLineItemInfo?: (google.cloud.commerce.consumer.procurement.v1.ILineItemInfo|null);

                                /** Modification autoRenewalBehavior */
                                autoRenewalBehavior?: (google.cloud.commerce.consumer.procurement.v1.AutoRenewalBehavior|keyof typeof google.cloud.commerce.consumer.procurement.v1.AutoRenewalBehavior|null);
                            }

                            /** Represents a Modification. */
                            class Modification implements IModification {

                                /**
                                 * Constructs a new Modification.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.IModification);

                                /** Modification lineItemId. */
                                public lineItemId: string;

                                /** Modification changeType. */
                                public changeType: (google.cloud.commerce.consumer.procurement.v1.LineItemChangeType|keyof typeof google.cloud.commerce.consumer.procurement.v1.LineItemChangeType);

                                /** Modification newLineItemInfo. */
                                public newLineItemInfo?: (google.cloud.commerce.consumer.procurement.v1.ILineItemInfo|null);

                                /** Modification autoRenewalBehavior. */
                                public autoRenewalBehavior: (google.cloud.commerce.consumer.procurement.v1.AutoRenewalBehavior|keyof typeof google.cloud.commerce.consumer.procurement.v1.AutoRenewalBehavior);

                                /**
                                 * Creates a new Modification instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Modification instance
                                 */
                                public static create(properties?: google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.IModification): google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.Modification;

                                /**
                                 * Encodes the specified Modification message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.Modification.verify|verify} messages.
                                 * @param message Modification message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.IModification, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Modification message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.Modification.verify|verify} messages.
                                 * @param message Modification message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.IModification, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Modification message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Modification
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.Modification;

                                /**
                                 * Decodes a Modification message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Modification
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.Modification;

                                /**
                                 * Verifies a Modification message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Modification message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Modification
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.Modification;

                                /**
                                 * Creates a plain object from a Modification message. Also converts values to other types if specified.
                                 * @param message Modification
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerce.consumer.procurement.v1.ModifyOrderRequest.Modification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Modification to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Modification
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of a ModifyOrderMetadata. */
                        interface IModifyOrderMetadata {
                        }

                        /** Represents a ModifyOrderMetadata. */
                        class ModifyOrderMetadata implements IModifyOrderMetadata {

                            /**
                             * Constructs a new ModifyOrderMetadata.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.IModifyOrderMetadata);

                            /**
                             * Creates a new ModifyOrderMetadata instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ModifyOrderMetadata instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.IModifyOrderMetadata): google.cloud.commerce.consumer.procurement.v1.ModifyOrderMetadata;

                            /**
                             * Encodes the specified ModifyOrderMetadata message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.ModifyOrderMetadata.verify|verify} messages.
                             * @param message ModifyOrderMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.IModifyOrderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ModifyOrderMetadata message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.ModifyOrderMetadata.verify|verify} messages.
                             * @param message ModifyOrderMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.IModifyOrderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ModifyOrderMetadata message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ModifyOrderMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.ModifyOrderMetadata;

                            /**
                             * Decodes a ModifyOrderMetadata message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ModifyOrderMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.ModifyOrderMetadata;

                            /**
                             * Verifies a ModifyOrderMetadata message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ModifyOrderMetadata message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ModifyOrderMetadata
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.ModifyOrderMetadata;

                            /**
                             * Creates a plain object from a ModifyOrderMetadata message. Also converts values to other types if specified.
                             * @param message ModifyOrderMetadata
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.ModifyOrderMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ModifyOrderMetadata to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ModifyOrderMetadata
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a CancelOrderRequest. */
                        interface ICancelOrderRequest {

                            /** CancelOrderRequest name */
                            name?: (string|null);

                            /** CancelOrderRequest etag */
                            etag?: (string|null);

                            /** CancelOrderRequest cancellationPolicy */
                            cancellationPolicy?: (google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest.CancellationPolicy|keyof typeof google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest.CancellationPolicy|null);
                        }

                        /** Represents a CancelOrderRequest. */
                        class CancelOrderRequest implements ICancelOrderRequest {

                            /**
                             * Constructs a new CancelOrderRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.ICancelOrderRequest);

                            /** CancelOrderRequest name. */
                            public name: string;

                            /** CancelOrderRequest etag. */
                            public etag: string;

                            /** CancelOrderRequest cancellationPolicy. */
                            public cancellationPolicy: (google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest.CancellationPolicy|keyof typeof google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest.CancellationPolicy);

                            /**
                             * Creates a new CancelOrderRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CancelOrderRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.ICancelOrderRequest): google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest;

                            /**
                             * Encodes the specified CancelOrderRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest.verify|verify} messages.
                             * @param message CancelOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.ICancelOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CancelOrderRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest.verify|verify} messages.
                             * @param message CancelOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.ICancelOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CancelOrderRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CancelOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest;

                            /**
                             * Decodes a CancelOrderRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CancelOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest;

                            /**
                             * Verifies a CancelOrderRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CancelOrderRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CancelOrderRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest;

                            /**
                             * Creates a plain object from a CancelOrderRequest message. Also converts values to other types if specified.
                             * @param message CancelOrderRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.CancelOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CancelOrderRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CancelOrderRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace CancelOrderRequest {

                            /** CancellationPolicy enum. */
                            enum CancellationPolicy {
                                CANCELLATION_POLICY_UNSPECIFIED = 0,
                                CANCELLATION_POLICY_CANCEL_IMMEDIATELY = 1,
                                CANCELLATION_POLICY_CANCEL_AT_TERM_END = 2
                            }
                        }

                        /** Properties of a CancelOrderMetadata. */
                        interface ICancelOrderMetadata {
                        }

                        /** Represents a CancelOrderMetadata. */
                        class CancelOrderMetadata implements ICancelOrderMetadata {

                            /**
                             * Constructs a new CancelOrderMetadata.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1.ICancelOrderMetadata);

                            /**
                             * Creates a new CancelOrderMetadata instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CancelOrderMetadata instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1.ICancelOrderMetadata): google.cloud.commerce.consumer.procurement.v1.CancelOrderMetadata;

                            /**
                             * Encodes the specified CancelOrderMetadata message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.CancelOrderMetadata.verify|verify} messages.
                             * @param message CancelOrderMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1.ICancelOrderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CancelOrderMetadata message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1.CancelOrderMetadata.verify|verify} messages.
                             * @param message CancelOrderMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1.ICancelOrderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CancelOrderMetadata message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CancelOrderMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1.CancelOrderMetadata;

                            /**
                             * Decodes a CancelOrderMetadata message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CancelOrderMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1.CancelOrderMetadata;

                            /**
                             * Verifies a CancelOrderMetadata message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CancelOrderMetadata message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CancelOrderMetadata
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1.CancelOrderMetadata;

                            /**
                             * Creates a plain object from a CancelOrderMetadata message. Also converts values to other types if specified.
                             * @param message CancelOrderMetadata
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1.CancelOrderMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CancelOrderMetadata to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CancelOrderMetadata
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Namespace v1alpha1. */
                    namespace v1alpha1 {

                        /** LineItemChangeType enum. */
                        enum LineItemChangeType {
                            LINE_ITEM_CHANGE_TYPE_UNSPECIFIED = 0,
                            LINE_ITEM_CHANGE_TYPE_CREATE = 1,
                            LINE_ITEM_CHANGE_TYPE_UPDATE = 2,
                            LINE_ITEM_CHANGE_TYPE_CANCEL = 3,
                            LINE_ITEM_CHANGE_TYPE_REVERT_CANCELLATION = 4
                        }

                        /** LineItemChangeState enum. */
                        enum LineItemChangeState {
                            LINE_ITEM_CHANGE_STATE_UNSPECIFIED = 0,
                            LINE_ITEM_CHANGE_STATE_PENDING_APPROVAL = 1,
                            LINE_ITEM_CHANGE_STATE_APPROVED = 2,
                            LINE_ITEM_CHANGE_STATE_COMPLETED = 3,
                            LINE_ITEM_CHANGE_STATE_REJECTED = 4,
                            LINE_ITEM_CHANGE_STATE_ABANDONED = 5,
                            LINE_ITEM_CHANGE_STATE_ACTIVATING = 6
                        }

                        /** LineItemChangeStateReasonType enum. */
                        enum LineItemChangeStateReasonType {
                            LINE_ITEM_CHANGE_STATE_REASON_TYPE_UNSPECIFIED = 0,
                            LINE_ITEM_CHANGE_STATE_REASON_TYPE_EXPIRED = 1,
                            LINE_ITEM_CHANGE_STATE_REASON_TYPE_USER_CANCELLED = 2,
                            LINE_ITEM_CHANGE_STATE_REASON_TYPE_SYSTEM_CANCELLED = 3
                        }

                        /** Properties of an Order. */
                        interface IOrder {

                            /** Order name */
                            name?: (string|null);

                            /** Order displayName */
                            displayName?: (string|null);

                            /** Order lineItems */
                            lineItems?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItem[]|null);

                            /** Order cancelledLineItems */
                            cancelledLineItems?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItem[]|null);

                            /** Order createTime */
                            createTime?: (google.protobuf.ITimestamp|null);

                            /** Order updateTime */
                            updateTime?: (google.protobuf.ITimestamp|null);

                            /** Order etag */
                            etag?: (string|null);
                        }

                        /** Represents an Order. */
                        class Order implements IOrder {

                            /**
                             * Constructs a new Order.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IOrder);

                            /** Order name. */
                            public name: string;

                            /** Order displayName. */
                            public displayName: string;

                            /** Order lineItems. */
                            public lineItems: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItem[];

                            /** Order cancelledLineItems. */
                            public cancelledLineItems: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItem[];

                            /** Order createTime. */
                            public createTime?: (google.protobuf.ITimestamp|null);

                            /** Order updateTime. */
                            public updateTime?: (google.protobuf.ITimestamp|null);

                            /** Order etag. */
                            public etag: string;

                            /**
                             * Creates a new Order instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Order instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IOrder): google.cloud.commerce.consumer.procurement.v1alpha1.Order;

                            /**
                             * Encodes the specified Order message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.Order.verify|verify} messages.
                             * @param message Order message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Order message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.Order.verify|verify} messages.
                             * @param message Order message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Order message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Order
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.Order;

                            /**
                             * Decodes an Order message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Order
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.Order;

                            /**
                             * Verifies an Order message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Order message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Order
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.Order;

                            /**
                             * Creates a plain object from an Order message. Also converts values to other types if specified.
                             * @param message Order
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Order to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Order
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a LineItem. */
                        interface ILineItem {

                            /** LineItem lineItemId */
                            lineItemId?: (string|null);

                            /** LineItem lineItemInfo */
                            lineItemInfo?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo|null);

                            /** LineItem pendingChange */
                            pendingChange?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemChange|null);

                            /** LineItem changeHistory */
                            changeHistory?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemChange[]|null);
                        }

                        /** Represents a LineItem. */
                        class LineItem implements ILineItem {

                            /**
                             * Constructs a new LineItem.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItem);

                            /** LineItem lineItemId. */
                            public lineItemId: string;

                            /** LineItem lineItemInfo. */
                            public lineItemInfo?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo|null);

                            /** LineItem pendingChange. */
                            public pendingChange?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemChange|null);

                            /** LineItem changeHistory. */
                            public changeHistory: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemChange[];

                            /**
                             * Creates a new LineItem instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns LineItem instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItem): google.cloud.commerce.consumer.procurement.v1alpha1.LineItem;

                            /**
                             * Encodes the specified LineItem message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.LineItem.verify|verify} messages.
                             * @param message LineItem message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItem, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified LineItem message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.LineItem.verify|verify} messages.
                             * @param message LineItem message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItem, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a LineItem message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns LineItem
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.LineItem;

                            /**
                             * Decodes a LineItem message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns LineItem
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.LineItem;

                            /**
                             * Verifies a LineItem message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a LineItem message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns LineItem
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.LineItem;

                            /**
                             * Creates a plain object from a LineItem message. Also converts values to other types if specified.
                             * @param message LineItem
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.LineItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this LineItem to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for LineItem
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a LineItemChange. */
                        interface ILineItemChange {

                            /** LineItemChange changeId */
                            changeId?: (string|null);

                            /** LineItemChange changeType */
                            changeType?: (google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeType|keyof typeof google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeType|null);

                            /** LineItemChange oldLineItemInfo */
                            oldLineItemInfo?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo|null);

                            /** LineItemChange newLineItemInfo */
                            newLineItemInfo?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo|null);

                            /** LineItemChange changeState */
                            changeState?: (google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeState|keyof typeof google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeState|null);

                            /** LineItemChange stateReason */
                            stateReason?: (string|null);

                            /** LineItemChange changeStateReasonType */
                            changeStateReasonType?: (google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeStateReasonType|keyof typeof google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeStateReasonType|null);

                            /** LineItemChange changeEffectiveTime */
                            changeEffectiveTime?: (google.protobuf.ITimestamp|null);

                            /** LineItemChange createTime */
                            createTime?: (google.protobuf.ITimestamp|null);

                            /** LineItemChange updateTime */
                            updateTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents a LineItemChange. */
                        class LineItemChange implements ILineItemChange {

                            /**
                             * Constructs a new LineItemChange.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemChange);

                            /** LineItemChange changeId. */
                            public changeId: string;

                            /** LineItemChange changeType. */
                            public changeType: (google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeType|keyof typeof google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeType);

                            /** LineItemChange oldLineItemInfo. */
                            public oldLineItemInfo?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo|null);

                            /** LineItemChange newLineItemInfo. */
                            public newLineItemInfo?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo|null);

                            /** LineItemChange changeState. */
                            public changeState: (google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeState|keyof typeof google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeState);

                            /** LineItemChange stateReason. */
                            public stateReason: string;

                            /** LineItemChange changeStateReasonType. */
                            public changeStateReasonType: (google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeStateReasonType|keyof typeof google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChangeStateReasonType);

                            /** LineItemChange changeEffectiveTime. */
                            public changeEffectiveTime?: (google.protobuf.ITimestamp|null);

                            /** LineItemChange createTime. */
                            public createTime?: (google.protobuf.ITimestamp|null);

                            /** LineItemChange updateTime. */
                            public updateTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new LineItemChange instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns LineItemChange instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemChange): google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChange;

                            /**
                             * Encodes the specified LineItemChange message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChange.verify|verify} messages.
                             * @param message LineItemChange message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemChange, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified LineItemChange message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChange.verify|verify} messages.
                             * @param message LineItemChange message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemChange, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a LineItemChange message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns LineItemChange
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChange;

                            /**
                             * Decodes a LineItemChange message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns LineItemChange
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChange;

                            /**
                             * Verifies a LineItemChange message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a LineItemChange message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns LineItemChange
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChange;

                            /**
                             * Creates a plain object from a LineItemChange message. Also converts values to other types if specified.
                             * @param message LineItemChange
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.LineItemChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this LineItemChange to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for LineItemChange
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a LineItemInfo. */
                        interface ILineItemInfo {

                            /** LineItemInfo offer */
                            offer?: (string|null);

                            /** LineItemInfo parameters */
                            parameters?: (google.cloud.commerce.consumer.procurement.v1alpha1.IParameter[]|null);

                            /** LineItemInfo subscription */
                            subscription?: (google.cloud.commerce.consumer.procurement.v1alpha1.ISubscription|null);
                        }

                        /** Represents a LineItemInfo. */
                        class LineItemInfo implements ILineItemInfo {

                            /**
                             * Constructs a new LineItemInfo.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo);

                            /** LineItemInfo offer. */
                            public offer: string;

                            /** LineItemInfo parameters. */
                            public parameters: google.cloud.commerce.consumer.procurement.v1alpha1.IParameter[];

                            /** LineItemInfo subscription. */
                            public subscription?: (google.cloud.commerce.consumer.procurement.v1alpha1.ISubscription|null);

                            /**
                             * Creates a new LineItemInfo instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns LineItemInfo instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo): google.cloud.commerce.consumer.procurement.v1alpha1.LineItemInfo;

                            /**
                             * Encodes the specified LineItemInfo message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.LineItemInfo.verify|verify} messages.
                             * @param message LineItemInfo message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified LineItemInfo message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.LineItemInfo.verify|verify} messages.
                             * @param message LineItemInfo message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a LineItemInfo message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns LineItemInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.LineItemInfo;

                            /**
                             * Decodes a LineItemInfo message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns LineItemInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.LineItemInfo;

                            /**
                             * Verifies a LineItemInfo message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a LineItemInfo message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns LineItemInfo
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.LineItemInfo;

                            /**
                             * Creates a plain object from a LineItemInfo message. Also converts values to other types if specified.
                             * @param message LineItemInfo
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.LineItemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this LineItemInfo to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for LineItemInfo
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Parameter. */
                        interface IParameter {

                            /** Parameter name */
                            name?: (string|null);

                            /** Parameter value */
                            value?: (google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.IValue|null);
                        }

                        /** Represents a Parameter. */
                        class Parameter implements IParameter {

                            /**
                             * Constructs a new Parameter.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IParameter);

                            /** Parameter name. */
                            public name: string;

                            /** Parameter value. */
                            public value?: (google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.IValue|null);

                            /**
                             * Creates a new Parameter instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Parameter instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IParameter): google.cloud.commerce.consumer.procurement.v1alpha1.Parameter;

                            /**
                             * Encodes the specified Parameter message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.verify|verify} messages.
                             * @param message Parameter message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Parameter message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.verify|verify} messages.
                             * @param message Parameter message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Parameter message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Parameter
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.Parameter;

                            /**
                             * Decodes a Parameter message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Parameter
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.Parameter;

                            /**
                             * Verifies a Parameter message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Parameter
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.Parameter;

                            /**
                             * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                             * @param message Parameter
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Parameter to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Parameter
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Parameter {

                            /** Properties of a Value. */
                            interface IValue {

                                /** Value int64Value */
                                int64Value?: (number|Long|string|null);

                                /** Value stringValue */
                                stringValue?: (string|null);

                                /** Value doubleValue */
                                doubleValue?: (number|null);
                            }

                            /** Represents a Value. */
                            class Value implements IValue {

                                /**
                                 * Constructs a new Value.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.IValue);

                                /** Value int64Value. */
                                public int64Value?: (number|Long|string|null);

                                /** Value stringValue. */
                                public stringValue?: (string|null);

                                /** Value doubleValue. */
                                public doubleValue?: (number|null);

                                /** Value kind. */
                                public kind?: ("int64Value"|"stringValue"|"doubleValue");

                                /**
                                 * Creates a new Value instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Value instance
                                 */
                                public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.IValue): google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.Value;

                                /**
                                 * Encodes the specified Value message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.Value.verify|verify} messages.
                                 * @param message Value message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified Value message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.Value.verify|verify} messages.
                                 * @param message Value message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a Value message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Value
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.Value;

                                /**
                                 * Decodes a Value message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Value
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.Value;

                                /**
                                 * Verifies a Value message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Value
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.Value;

                                /**
                                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                                 * @param message Value
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.Parameter.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Value to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for Value
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of a Subscription. */
                        interface ISubscription {

                            /** Subscription startTime */
                            startTime?: (google.protobuf.ITimestamp|null);

                            /** Subscription endTime */
                            endTime?: (google.protobuf.ITimestamp|null);

                            /** Subscription autoRenewalEnabled */
                            autoRenewalEnabled?: (boolean|null);
                        }

                        /** Represents a Subscription. */
                        class Subscription implements ISubscription {

                            /**
                             * Constructs a new Subscription.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.ISubscription);

                            /** Subscription startTime. */
                            public startTime?: (google.protobuf.ITimestamp|null);

                            /** Subscription endTime. */
                            public endTime?: (google.protobuf.ITimestamp|null);

                            /** Subscription autoRenewalEnabled. */
                            public autoRenewalEnabled: boolean;

                            /**
                             * Creates a new Subscription instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Subscription instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.ISubscription): google.cloud.commerce.consumer.procurement.v1alpha1.Subscription;

                            /**
                             * Encodes the specified Subscription message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.Subscription.verify|verify} messages.
                             * @param message Subscription message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.ISubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Subscription message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.Subscription.verify|verify} messages.
                             * @param message Subscription message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.ISubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Subscription message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Subscription
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.Subscription;

                            /**
                             * Decodes a Subscription message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Subscription
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.Subscription;

                            /**
                             * Verifies a Subscription message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Subscription message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Subscription
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.Subscription;

                            /**
                             * Creates a plain object from a Subscription message. Also converts values to other types if specified.
                             * @param message Subscription
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.Subscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Subscription to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Subscription
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Represents a ConsumerProcurementService */
                        class ConsumerProcurementService extends $protobuf.rpc.Service {

                            /**
                             * Constructs a new ConsumerProcurementService service.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             */
                            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                            /**
                             * Creates new ConsumerProcurementService service using the specified rpc implementation.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             * @returns RPC service. Useful where requests and/or responses are streamed.
                             */
                            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ConsumerProcurementService;

                            /**
                             * Calls PlaceOrder.
                             * @param request PlaceOrderRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public placeOrder(request: google.cloud.commerce.consumer.procurement.v1alpha1.IPlaceOrderRequest, callback: google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.PlaceOrderCallback): void;

                            /**
                             * Calls PlaceOrder.
                             * @param request PlaceOrderRequest message or plain object
                             * @returns Promise
                             */
                            public placeOrder(request: google.cloud.commerce.consumer.procurement.v1alpha1.IPlaceOrderRequest): Promise<google.longrunning.Operation>;

                            /**
                             * Calls GetOrder.
                             * @param request GetOrderRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Order
                             */
                            public getOrder(request: google.cloud.commerce.consumer.procurement.v1alpha1.IGetOrderRequest, callback: google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.GetOrderCallback): void;

                            /**
                             * Calls GetOrder.
                             * @param request GetOrderRequest message or plain object
                             * @returns Promise
                             */
                            public getOrder(request: google.cloud.commerce.consumer.procurement.v1alpha1.IGetOrderRequest): Promise<google.cloud.commerce.consumer.procurement.v1alpha1.Order>;

                            /**
                             * Calls ListOrders.
                             * @param request ListOrdersRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and ListOrdersResponse
                             */
                            public listOrders(request: google.cloud.commerce.consumer.procurement.v1alpha1.IListOrdersRequest, callback: google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService.ListOrdersCallback): void;

                            /**
                             * Calls ListOrders.
                             * @param request ListOrdersRequest message or plain object
                             * @returns Promise
                             */
                            public listOrders(request: google.cloud.commerce.consumer.procurement.v1alpha1.IListOrdersRequest): Promise<google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersResponse>;
                        }

                        namespace ConsumerProcurementService {

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService|placeOrder}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type PlaceOrderCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService|getOrder}.
                             * @param error Error, if any
                             * @param [response] Order
                             */
                            type GetOrderCallback = (error: (Error|null), response?: google.cloud.commerce.consumer.procurement.v1alpha1.Order) => void;

                            /**
                             * Callback as used by {@link google.cloud.commerce.consumer.procurement.v1alpha1.ConsumerProcurementService|listOrders}.
                             * @param error Error, if any
                             * @param [response] ListOrdersResponse
                             */
                            type ListOrdersCallback = (error: (Error|null), response?: google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersResponse) => void;
                        }

                        /** Properties of a PlaceOrderRequest. */
                        interface IPlaceOrderRequest {

                            /** PlaceOrderRequest parent */
                            parent?: (string|null);

                            /** PlaceOrderRequest displayName */
                            displayName?: (string|null);

                            /** PlaceOrderRequest lineItemInfo */
                            lineItemInfo?: (google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo[]|null);

                            /** PlaceOrderRequest requestId */
                            requestId?: (string|null);
                        }

                        /** Represents a PlaceOrderRequest. */
                        class PlaceOrderRequest implements IPlaceOrderRequest {

                            /**
                             * Constructs a new PlaceOrderRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IPlaceOrderRequest);

                            /** PlaceOrderRequest parent. */
                            public parent: string;

                            /** PlaceOrderRequest displayName. */
                            public displayName: string;

                            /** PlaceOrderRequest lineItemInfo. */
                            public lineItemInfo: google.cloud.commerce.consumer.procurement.v1alpha1.ILineItemInfo[];

                            /** PlaceOrderRequest requestId. */
                            public requestId: string;

                            /**
                             * Creates a new PlaceOrderRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PlaceOrderRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IPlaceOrderRequest): google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderRequest;

                            /**
                             * Encodes the specified PlaceOrderRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderRequest.verify|verify} messages.
                             * @param message PlaceOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.IPlaceOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PlaceOrderRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderRequest.verify|verify} messages.
                             * @param message PlaceOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.IPlaceOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PlaceOrderRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PlaceOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderRequest;

                            /**
                             * Decodes a PlaceOrderRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PlaceOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderRequest;

                            /**
                             * Verifies a PlaceOrderRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PlaceOrderRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PlaceOrderRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderRequest;

                            /**
                             * Creates a plain object from a PlaceOrderRequest message. Also converts values to other types if specified.
                             * @param message PlaceOrderRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PlaceOrderRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for PlaceOrderRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a PlaceOrderMetadata. */
                        interface IPlaceOrderMetadata {
                        }

                        /** Represents a PlaceOrderMetadata. */
                        class PlaceOrderMetadata implements IPlaceOrderMetadata {

                            /**
                             * Constructs a new PlaceOrderMetadata.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IPlaceOrderMetadata);

                            /**
                             * Creates a new PlaceOrderMetadata instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PlaceOrderMetadata instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IPlaceOrderMetadata): google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderMetadata;

                            /**
                             * Encodes the specified PlaceOrderMetadata message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderMetadata.verify|verify} messages.
                             * @param message PlaceOrderMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.IPlaceOrderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PlaceOrderMetadata message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderMetadata.verify|verify} messages.
                             * @param message PlaceOrderMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.IPlaceOrderMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PlaceOrderMetadata message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PlaceOrderMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderMetadata;

                            /**
                             * Decodes a PlaceOrderMetadata message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PlaceOrderMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderMetadata;

                            /**
                             * Verifies a PlaceOrderMetadata message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PlaceOrderMetadata message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PlaceOrderMetadata
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderMetadata;

                            /**
                             * Creates a plain object from a PlaceOrderMetadata message. Also converts values to other types if specified.
                             * @param message PlaceOrderMetadata
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.PlaceOrderMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PlaceOrderMetadata to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for PlaceOrderMetadata
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a GetOrderRequest. */
                        interface IGetOrderRequest {

                            /** GetOrderRequest name */
                            name?: (string|null);
                        }

                        /** Represents a GetOrderRequest. */
                        class GetOrderRequest implements IGetOrderRequest {

                            /**
                             * Constructs a new GetOrderRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IGetOrderRequest);

                            /** GetOrderRequest name. */
                            public name: string;

                            /**
                             * Creates a new GetOrderRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetOrderRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IGetOrderRequest): google.cloud.commerce.consumer.procurement.v1alpha1.GetOrderRequest;

                            /**
                             * Encodes the specified GetOrderRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.GetOrderRequest.verify|verify} messages.
                             * @param message GetOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.IGetOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GetOrderRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.GetOrderRequest.verify|verify} messages.
                             * @param message GetOrderRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.IGetOrderRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetOrderRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.GetOrderRequest;

                            /**
                             * Decodes a GetOrderRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GetOrderRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.GetOrderRequest;

                            /**
                             * Verifies a GetOrderRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GetOrderRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetOrderRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.GetOrderRequest;

                            /**
                             * Creates a plain object from a GetOrderRequest message. Also converts values to other types if specified.
                             * @param message GetOrderRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.GetOrderRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetOrderRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for GetOrderRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ListOrdersRequest. */
                        interface IListOrdersRequest {

                            /** ListOrdersRequest parent */
                            parent?: (string|null);

                            /** ListOrdersRequest pageSize */
                            pageSize?: (number|null);

                            /** ListOrdersRequest pageToken */
                            pageToken?: (string|null);

                            /** ListOrdersRequest filter */
                            filter?: (string|null);
                        }

                        /** Represents a ListOrdersRequest. */
                        class ListOrdersRequest implements IListOrdersRequest {

                            /**
                             * Constructs a new ListOrdersRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IListOrdersRequest);

                            /** ListOrdersRequest parent. */
                            public parent: string;

                            /** ListOrdersRequest pageSize. */
                            public pageSize: number;

                            /** ListOrdersRequest pageToken. */
                            public pageToken: string;

                            /** ListOrdersRequest filter. */
                            public filter: string;

                            /**
                             * Creates a new ListOrdersRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListOrdersRequest instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IListOrdersRequest): google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersRequest;

                            /**
                             * Encodes the specified ListOrdersRequest message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersRequest.verify|verify} messages.
                             * @param message ListOrdersRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.IListOrdersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListOrdersRequest message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersRequest.verify|verify} messages.
                             * @param message ListOrdersRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.IListOrdersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListOrdersRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListOrdersRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersRequest;

                            /**
                             * Decodes a ListOrdersRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListOrdersRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersRequest;

                            /**
                             * Verifies a ListOrdersRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListOrdersRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListOrdersRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersRequest;

                            /**
                             * Creates a plain object from a ListOrdersRequest message. Also converts values to other types if specified.
                             * @param message ListOrdersRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListOrdersRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ListOrdersRequest
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a ListOrdersResponse. */
                        interface IListOrdersResponse {

                            /** ListOrdersResponse orders */
                            orders?: (google.cloud.commerce.consumer.procurement.v1alpha1.IOrder[]|null);

                            /** ListOrdersResponse nextPageToken */
                            nextPageToken?: (string|null);
                        }

                        /** Represents a ListOrdersResponse. */
                        class ListOrdersResponse implements IListOrdersResponse {

                            /**
                             * Constructs a new ListOrdersResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IListOrdersResponse);

                            /** ListOrdersResponse orders. */
                            public orders: google.cloud.commerce.consumer.procurement.v1alpha1.IOrder[];

                            /** ListOrdersResponse nextPageToken. */
                            public nextPageToken: string;

                            /**
                             * Creates a new ListOrdersResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListOrdersResponse instance
                             */
                            public static create(properties?: google.cloud.commerce.consumer.procurement.v1alpha1.IListOrdersResponse): google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersResponse;

                            /**
                             * Encodes the specified ListOrdersResponse message. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersResponse.verify|verify} messages.
                             * @param message ListOrdersResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.commerce.consumer.procurement.v1alpha1.IListOrdersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListOrdersResponse message, length delimited. Does not implicitly {@link google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersResponse.verify|verify} messages.
                             * @param message ListOrdersResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.commerce.consumer.procurement.v1alpha1.IListOrdersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListOrdersResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListOrdersResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersResponse;

                            /**
                             * Decodes a ListOrdersResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListOrdersResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersResponse;

                            /**
                             * Verifies a ListOrdersResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListOrdersResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListOrdersResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersResponse;

                            /**
                             * Creates a plain object from a ListOrdersResponse message. Also converts values to other types if specified.
                             * @param message ListOrdersResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.commerce.consumer.procurement.v1alpha1.ListOrdersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListOrdersResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for ListOrdersResponse
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }
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
