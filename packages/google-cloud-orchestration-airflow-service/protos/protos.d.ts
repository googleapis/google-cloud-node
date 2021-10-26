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

        /** Namespace orchestration. */
        namespace orchestration {

            /** Namespace airflow. */
            namespace airflow {

                /** Namespace service. */
                namespace service {

                    /** Namespace v1. */
                    namespace v1 {

                        /** Represents an Environments */
                        class Environments extends $protobuf.rpc.Service {

                            /**
                             * Constructs a new Environments service.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             */
                            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                            /**
                             * Creates new Environments service using the specified rpc implementation.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             * @returns RPC service. Useful where requests and/or responses are streamed.
                             */
                            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Environments;

                            /**
                             * Calls CreateEnvironment.
                             * @param request CreateEnvironmentRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public createEnvironment(request: google.cloud.orchestration.airflow.service.v1.ICreateEnvironmentRequest, callback: google.cloud.orchestration.airflow.service.v1.Environments.CreateEnvironmentCallback): void;

                            /**
                             * Calls CreateEnvironment.
                             * @param request CreateEnvironmentRequest message or plain object
                             * @returns Promise
                             */
                            public createEnvironment(request: google.cloud.orchestration.airflow.service.v1.ICreateEnvironmentRequest): Promise<google.longrunning.Operation>;

                            /**
                             * Calls GetEnvironment.
                             * @param request GetEnvironmentRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Environment
                             */
                            public getEnvironment(request: google.cloud.orchestration.airflow.service.v1.IGetEnvironmentRequest, callback: google.cloud.orchestration.airflow.service.v1.Environments.GetEnvironmentCallback): void;

                            /**
                             * Calls GetEnvironment.
                             * @param request GetEnvironmentRequest message or plain object
                             * @returns Promise
                             */
                            public getEnvironment(request: google.cloud.orchestration.airflow.service.v1.IGetEnvironmentRequest): Promise<google.cloud.orchestration.airflow.service.v1.Environment>;

                            /**
                             * Calls ListEnvironments.
                             * @param request ListEnvironmentsRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and ListEnvironmentsResponse
                             */
                            public listEnvironments(request: google.cloud.orchestration.airflow.service.v1.IListEnvironmentsRequest, callback: google.cloud.orchestration.airflow.service.v1.Environments.ListEnvironmentsCallback): void;

                            /**
                             * Calls ListEnvironments.
                             * @param request ListEnvironmentsRequest message or plain object
                             * @returns Promise
                             */
                            public listEnvironments(request: google.cloud.orchestration.airflow.service.v1.IListEnvironmentsRequest): Promise<google.cloud.orchestration.airflow.service.v1.ListEnvironmentsResponse>;

                            /**
                             * Calls UpdateEnvironment.
                             * @param request UpdateEnvironmentRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public updateEnvironment(request: google.cloud.orchestration.airflow.service.v1.IUpdateEnvironmentRequest, callback: google.cloud.orchestration.airflow.service.v1.Environments.UpdateEnvironmentCallback): void;

                            /**
                             * Calls UpdateEnvironment.
                             * @param request UpdateEnvironmentRequest message or plain object
                             * @returns Promise
                             */
                            public updateEnvironment(request: google.cloud.orchestration.airflow.service.v1.IUpdateEnvironmentRequest): Promise<google.longrunning.Operation>;

                            /**
                             * Calls DeleteEnvironment.
                             * @param request DeleteEnvironmentRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public deleteEnvironment(request: google.cloud.orchestration.airflow.service.v1.IDeleteEnvironmentRequest, callback: google.cloud.orchestration.airflow.service.v1.Environments.DeleteEnvironmentCallback): void;

                            /**
                             * Calls DeleteEnvironment.
                             * @param request DeleteEnvironmentRequest message or plain object
                             * @returns Promise
                             */
                            public deleteEnvironment(request: google.cloud.orchestration.airflow.service.v1.IDeleteEnvironmentRequest): Promise<google.longrunning.Operation>;
                        }

                        namespace Environments {

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1.Environments#createEnvironment}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type CreateEnvironmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1.Environments#getEnvironment}.
                             * @param error Error, if any
                             * @param [response] Environment
                             */
                            type GetEnvironmentCallback = (error: (Error|null), response?: google.cloud.orchestration.airflow.service.v1.Environment) => void;

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1.Environments#listEnvironments}.
                             * @param error Error, if any
                             * @param [response] ListEnvironmentsResponse
                             */
                            type ListEnvironmentsCallback = (error: (Error|null), response?: google.cloud.orchestration.airflow.service.v1.ListEnvironmentsResponse) => void;

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1.Environments#updateEnvironment}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type UpdateEnvironmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1.Environments#deleteEnvironment}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type DeleteEnvironmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                        }

                        /** Properties of a CreateEnvironmentRequest. */
                        interface ICreateEnvironmentRequest {

                            /** CreateEnvironmentRequest parent */
                            parent?: (string|null);

                            /** CreateEnvironmentRequest environment */
                            environment?: (google.cloud.orchestration.airflow.service.v1.IEnvironment|null);
                        }

                        /** Represents a CreateEnvironmentRequest. */
                        class CreateEnvironmentRequest implements ICreateEnvironmentRequest {

                            /**
                             * Constructs a new CreateEnvironmentRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.ICreateEnvironmentRequest);

                            /** CreateEnvironmentRequest parent. */
                            public parent: string;

                            /** CreateEnvironmentRequest environment. */
                            public environment?: (google.cloud.orchestration.airflow.service.v1.IEnvironment|null);

                            /**
                             * Creates a new CreateEnvironmentRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CreateEnvironmentRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.ICreateEnvironmentRequest): google.cloud.orchestration.airflow.service.v1.CreateEnvironmentRequest;

                            /**
                             * Encodes the specified CreateEnvironmentRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.CreateEnvironmentRequest.verify|verify} messages.
                             * @param message CreateEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.ICreateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CreateEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.CreateEnvironmentRequest.verify|verify} messages.
                             * @param message CreateEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.ICreateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CreateEnvironmentRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CreateEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.CreateEnvironmentRequest;

                            /**
                             * Decodes a CreateEnvironmentRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CreateEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.CreateEnvironmentRequest;

                            /**
                             * Verifies a CreateEnvironmentRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CreateEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CreateEnvironmentRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.CreateEnvironmentRequest;

                            /**
                             * Creates a plain object from a CreateEnvironmentRequest message. Also converts values to other types if specified.
                             * @param message CreateEnvironmentRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.CreateEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CreateEnvironmentRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetEnvironmentRequest. */
                        interface IGetEnvironmentRequest {

                            /** GetEnvironmentRequest name */
                            name?: (string|null);
                        }

                        /** Represents a GetEnvironmentRequest. */
                        class GetEnvironmentRequest implements IGetEnvironmentRequest {

                            /**
                             * Constructs a new GetEnvironmentRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IGetEnvironmentRequest);

                            /** GetEnvironmentRequest name. */
                            public name: string;

                            /**
                             * Creates a new GetEnvironmentRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetEnvironmentRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IGetEnvironmentRequest): google.cloud.orchestration.airflow.service.v1.GetEnvironmentRequest;

                            /**
                             * Encodes the specified GetEnvironmentRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.GetEnvironmentRequest.verify|verify} messages.
                             * @param message GetEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IGetEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GetEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.GetEnvironmentRequest.verify|verify} messages.
                             * @param message GetEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IGetEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetEnvironmentRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.GetEnvironmentRequest;

                            /**
                             * Decodes a GetEnvironmentRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GetEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.GetEnvironmentRequest;

                            /**
                             * Verifies a GetEnvironmentRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GetEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetEnvironmentRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.GetEnvironmentRequest;

                            /**
                             * Creates a plain object from a GetEnvironmentRequest message. Also converts values to other types if specified.
                             * @param message GetEnvironmentRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.GetEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetEnvironmentRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ListEnvironmentsRequest. */
                        interface IListEnvironmentsRequest {

                            /** ListEnvironmentsRequest parent */
                            parent?: (string|null);

                            /** ListEnvironmentsRequest pageSize */
                            pageSize?: (number|null);

                            /** ListEnvironmentsRequest pageToken */
                            pageToken?: (string|null);
                        }

                        /** Represents a ListEnvironmentsRequest. */
                        class ListEnvironmentsRequest implements IListEnvironmentsRequest {

                            /**
                             * Constructs a new ListEnvironmentsRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IListEnvironmentsRequest);

                            /** ListEnvironmentsRequest parent. */
                            public parent: string;

                            /** ListEnvironmentsRequest pageSize. */
                            public pageSize: number;

                            /** ListEnvironmentsRequest pageToken. */
                            public pageToken: string;

                            /**
                             * Creates a new ListEnvironmentsRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListEnvironmentsRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IListEnvironmentsRequest): google.cloud.orchestration.airflow.service.v1.ListEnvironmentsRequest;

                            /**
                             * Encodes the specified ListEnvironmentsRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.ListEnvironmentsRequest.verify|verify} messages.
                             * @param message ListEnvironmentsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IListEnvironmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListEnvironmentsRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.ListEnvironmentsRequest.verify|verify} messages.
                             * @param message ListEnvironmentsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IListEnvironmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListEnvironmentsRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListEnvironmentsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.ListEnvironmentsRequest;

                            /**
                             * Decodes a ListEnvironmentsRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListEnvironmentsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.ListEnvironmentsRequest;

                            /**
                             * Verifies a ListEnvironmentsRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListEnvironmentsRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListEnvironmentsRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.ListEnvironmentsRequest;

                            /**
                             * Creates a plain object from a ListEnvironmentsRequest message. Also converts values to other types if specified.
                             * @param message ListEnvironmentsRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.ListEnvironmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListEnvironmentsRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ListEnvironmentsResponse. */
                        interface IListEnvironmentsResponse {

                            /** ListEnvironmentsResponse environments */
                            environments?: (google.cloud.orchestration.airflow.service.v1.IEnvironment[]|null);

                            /** ListEnvironmentsResponse nextPageToken */
                            nextPageToken?: (string|null);
                        }

                        /** Represents a ListEnvironmentsResponse. */
                        class ListEnvironmentsResponse implements IListEnvironmentsResponse {

                            /**
                             * Constructs a new ListEnvironmentsResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IListEnvironmentsResponse);

                            /** ListEnvironmentsResponse environments. */
                            public environments: google.cloud.orchestration.airflow.service.v1.IEnvironment[];

                            /** ListEnvironmentsResponse nextPageToken. */
                            public nextPageToken: string;

                            /**
                             * Creates a new ListEnvironmentsResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListEnvironmentsResponse instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IListEnvironmentsResponse): google.cloud.orchestration.airflow.service.v1.ListEnvironmentsResponse;

                            /**
                             * Encodes the specified ListEnvironmentsResponse message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.ListEnvironmentsResponse.verify|verify} messages.
                             * @param message ListEnvironmentsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IListEnvironmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListEnvironmentsResponse message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.ListEnvironmentsResponse.verify|verify} messages.
                             * @param message ListEnvironmentsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IListEnvironmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListEnvironmentsResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListEnvironmentsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.ListEnvironmentsResponse;

                            /**
                             * Decodes a ListEnvironmentsResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListEnvironmentsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.ListEnvironmentsResponse;

                            /**
                             * Verifies a ListEnvironmentsResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListEnvironmentsResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListEnvironmentsResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.ListEnvironmentsResponse;

                            /**
                             * Creates a plain object from a ListEnvironmentsResponse message. Also converts values to other types if specified.
                             * @param message ListEnvironmentsResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.ListEnvironmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListEnvironmentsResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DeleteEnvironmentRequest. */
                        interface IDeleteEnvironmentRequest {

                            /** DeleteEnvironmentRequest name */
                            name?: (string|null);
                        }

                        /** Represents a DeleteEnvironmentRequest. */
                        class DeleteEnvironmentRequest implements IDeleteEnvironmentRequest {

                            /**
                             * Constructs a new DeleteEnvironmentRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IDeleteEnvironmentRequest);

                            /** DeleteEnvironmentRequest name. */
                            public name: string;

                            /**
                             * Creates a new DeleteEnvironmentRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DeleteEnvironmentRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IDeleteEnvironmentRequest): google.cloud.orchestration.airflow.service.v1.DeleteEnvironmentRequest;

                            /**
                             * Encodes the specified DeleteEnvironmentRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.DeleteEnvironmentRequest.verify|verify} messages.
                             * @param message DeleteEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IDeleteEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DeleteEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.DeleteEnvironmentRequest.verify|verify} messages.
                             * @param message DeleteEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IDeleteEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DeleteEnvironmentRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DeleteEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.DeleteEnvironmentRequest;

                            /**
                             * Decodes a DeleteEnvironmentRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DeleteEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.DeleteEnvironmentRequest;

                            /**
                             * Verifies a DeleteEnvironmentRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DeleteEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DeleteEnvironmentRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.DeleteEnvironmentRequest;

                            /**
                             * Creates a plain object from a DeleteEnvironmentRequest message. Also converts values to other types if specified.
                             * @param message DeleteEnvironmentRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.DeleteEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DeleteEnvironmentRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an UpdateEnvironmentRequest. */
                        interface IUpdateEnvironmentRequest {

                            /** UpdateEnvironmentRequest name */
                            name?: (string|null);

                            /** UpdateEnvironmentRequest environment */
                            environment?: (google.cloud.orchestration.airflow.service.v1.IEnvironment|null);

                            /** UpdateEnvironmentRequest updateMask */
                            updateMask?: (google.protobuf.IFieldMask|null);
                        }

                        /** Represents an UpdateEnvironmentRequest. */
                        class UpdateEnvironmentRequest implements IUpdateEnvironmentRequest {

                            /**
                             * Constructs a new UpdateEnvironmentRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IUpdateEnvironmentRequest);

                            /** UpdateEnvironmentRequest name. */
                            public name: string;

                            /** UpdateEnvironmentRequest environment. */
                            public environment?: (google.cloud.orchestration.airflow.service.v1.IEnvironment|null);

                            /** UpdateEnvironmentRequest updateMask. */
                            public updateMask?: (google.protobuf.IFieldMask|null);

                            /**
                             * Creates a new UpdateEnvironmentRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns UpdateEnvironmentRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IUpdateEnvironmentRequest): google.cloud.orchestration.airflow.service.v1.UpdateEnvironmentRequest;

                            /**
                             * Encodes the specified UpdateEnvironmentRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.UpdateEnvironmentRequest.verify|verify} messages.
                             * @param message UpdateEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IUpdateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified UpdateEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.UpdateEnvironmentRequest.verify|verify} messages.
                             * @param message UpdateEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IUpdateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an UpdateEnvironmentRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns UpdateEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.UpdateEnvironmentRequest;

                            /**
                             * Decodes an UpdateEnvironmentRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns UpdateEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.UpdateEnvironmentRequest;

                            /**
                             * Verifies an UpdateEnvironmentRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an UpdateEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns UpdateEnvironmentRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.UpdateEnvironmentRequest;

                            /**
                             * Creates a plain object from an UpdateEnvironmentRequest message. Also converts values to other types if specified.
                             * @param message UpdateEnvironmentRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.UpdateEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this UpdateEnvironmentRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an EnvironmentConfig. */
                        interface IEnvironmentConfig {

                            /** EnvironmentConfig gkeCluster */
                            gkeCluster?: (string|null);

                            /** EnvironmentConfig dagGcsPrefix */
                            dagGcsPrefix?: (string|null);

                            /** EnvironmentConfig nodeCount */
                            nodeCount?: (number|null);

                            /** EnvironmentConfig softwareConfig */
                            softwareConfig?: (google.cloud.orchestration.airflow.service.v1.ISoftwareConfig|null);

                            /** EnvironmentConfig nodeConfig */
                            nodeConfig?: (google.cloud.orchestration.airflow.service.v1.INodeConfig|null);

                            /** EnvironmentConfig privateEnvironmentConfig */
                            privateEnvironmentConfig?: (google.cloud.orchestration.airflow.service.v1.IPrivateEnvironmentConfig|null);

                            /** EnvironmentConfig webServerNetworkAccessControl */
                            webServerNetworkAccessControl?: (google.cloud.orchestration.airflow.service.v1.IWebServerNetworkAccessControl|null);

                            /** EnvironmentConfig databaseConfig */
                            databaseConfig?: (google.cloud.orchestration.airflow.service.v1.IDatabaseConfig|null);

                            /** EnvironmentConfig webServerConfig */
                            webServerConfig?: (google.cloud.orchestration.airflow.service.v1.IWebServerConfig|null);

                            /** EnvironmentConfig encryptionConfig */
                            encryptionConfig?: (google.cloud.orchestration.airflow.service.v1.IEncryptionConfig|null);

                            /** EnvironmentConfig airflowUri */
                            airflowUri?: (string|null);
                        }

                        /** Represents an EnvironmentConfig. */
                        class EnvironmentConfig implements IEnvironmentConfig {

                            /**
                             * Constructs a new EnvironmentConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IEnvironmentConfig);

                            /** EnvironmentConfig gkeCluster. */
                            public gkeCluster: string;

                            /** EnvironmentConfig dagGcsPrefix. */
                            public dagGcsPrefix: string;

                            /** EnvironmentConfig nodeCount. */
                            public nodeCount: number;

                            /** EnvironmentConfig softwareConfig. */
                            public softwareConfig?: (google.cloud.orchestration.airflow.service.v1.ISoftwareConfig|null);

                            /** EnvironmentConfig nodeConfig. */
                            public nodeConfig?: (google.cloud.orchestration.airflow.service.v1.INodeConfig|null);

                            /** EnvironmentConfig privateEnvironmentConfig. */
                            public privateEnvironmentConfig?: (google.cloud.orchestration.airflow.service.v1.IPrivateEnvironmentConfig|null);

                            /** EnvironmentConfig webServerNetworkAccessControl. */
                            public webServerNetworkAccessControl?: (google.cloud.orchestration.airflow.service.v1.IWebServerNetworkAccessControl|null);

                            /** EnvironmentConfig databaseConfig. */
                            public databaseConfig?: (google.cloud.orchestration.airflow.service.v1.IDatabaseConfig|null);

                            /** EnvironmentConfig webServerConfig. */
                            public webServerConfig?: (google.cloud.orchestration.airflow.service.v1.IWebServerConfig|null);

                            /** EnvironmentConfig encryptionConfig. */
                            public encryptionConfig?: (google.cloud.orchestration.airflow.service.v1.IEncryptionConfig|null);

                            /** EnvironmentConfig airflowUri. */
                            public airflowUri: string;

                            /**
                             * Creates a new EnvironmentConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EnvironmentConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IEnvironmentConfig): google.cloud.orchestration.airflow.service.v1.EnvironmentConfig;

                            /**
                             * Encodes the specified EnvironmentConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.EnvironmentConfig.verify|verify} messages.
                             * @param message EnvironmentConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IEnvironmentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EnvironmentConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.EnvironmentConfig.verify|verify} messages.
                             * @param message EnvironmentConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IEnvironmentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EnvironmentConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EnvironmentConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.EnvironmentConfig;

                            /**
                             * Decodes an EnvironmentConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EnvironmentConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.EnvironmentConfig;

                            /**
                             * Verifies an EnvironmentConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EnvironmentConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EnvironmentConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.EnvironmentConfig;

                            /**
                             * Creates a plain object from an EnvironmentConfig message. Also converts values to other types if specified.
                             * @param message EnvironmentConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.EnvironmentConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EnvironmentConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a WebServerNetworkAccessControl. */
                        interface IWebServerNetworkAccessControl {

                            /** WebServerNetworkAccessControl allowedIpRanges */
                            allowedIpRanges?: (google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.IAllowedIpRange[]|null);
                        }

                        /** Represents a WebServerNetworkAccessControl. */
                        class WebServerNetworkAccessControl implements IWebServerNetworkAccessControl {

                            /**
                             * Constructs a new WebServerNetworkAccessControl.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IWebServerNetworkAccessControl);

                            /** WebServerNetworkAccessControl allowedIpRanges. */
                            public allowedIpRanges: google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.IAllowedIpRange[];

                            /**
                             * Creates a new WebServerNetworkAccessControl instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns WebServerNetworkAccessControl instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IWebServerNetworkAccessControl): google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl;

                            /**
                             * Encodes the specified WebServerNetworkAccessControl message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.verify|verify} messages.
                             * @param message WebServerNetworkAccessControl message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IWebServerNetworkAccessControl, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified WebServerNetworkAccessControl message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.verify|verify} messages.
                             * @param message WebServerNetworkAccessControl message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IWebServerNetworkAccessControl, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a WebServerNetworkAccessControl message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns WebServerNetworkAccessControl
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl;

                            /**
                             * Decodes a WebServerNetworkAccessControl message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns WebServerNetworkAccessControl
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl;

                            /**
                             * Verifies a WebServerNetworkAccessControl message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a WebServerNetworkAccessControl message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns WebServerNetworkAccessControl
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl;

                            /**
                             * Creates a plain object from a WebServerNetworkAccessControl message. Also converts values to other types if specified.
                             * @param message WebServerNetworkAccessControl
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this WebServerNetworkAccessControl to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace WebServerNetworkAccessControl {

                            /** Properties of an AllowedIpRange. */
                            interface IAllowedIpRange {

                                /** AllowedIpRange value */
                                value?: (string|null);

                                /** AllowedIpRange description */
                                description?: (string|null);
                            }

                            /** Represents an AllowedIpRange. */
                            class AllowedIpRange implements IAllowedIpRange {

                                /**
                                 * Constructs a new AllowedIpRange.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.IAllowedIpRange);

                                /** AllowedIpRange value. */
                                public value: string;

                                /** AllowedIpRange description. */
                                public description: string;

                                /**
                                 * Creates a new AllowedIpRange instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns AllowedIpRange instance
                                 */
                                public static create(properties?: google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.IAllowedIpRange): google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.AllowedIpRange;

                                /**
                                 * Encodes the specified AllowedIpRange message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.AllowedIpRange.verify|verify} messages.
                                 * @param message AllowedIpRange message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.IAllowedIpRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified AllowedIpRange message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.AllowedIpRange.verify|verify} messages.
                                 * @param message AllowedIpRange message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.IAllowedIpRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an AllowedIpRange message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns AllowedIpRange
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.AllowedIpRange;

                                /**
                                 * Decodes an AllowedIpRange message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns AllowedIpRange
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.AllowedIpRange;

                                /**
                                 * Verifies an AllowedIpRange message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an AllowedIpRange message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns AllowedIpRange
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.AllowedIpRange;

                                /**
                                 * Creates a plain object from an AllowedIpRange message. Also converts values to other types if specified.
                                 * @param message AllowedIpRange
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.orchestration.airflow.service.v1.WebServerNetworkAccessControl.AllowedIpRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this AllowedIpRange to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }
                        }

                        /** Properties of a DatabaseConfig. */
                        interface IDatabaseConfig {

                            /** DatabaseConfig machineType */
                            machineType?: (string|null);
                        }

                        /** Represents a DatabaseConfig. */
                        class DatabaseConfig implements IDatabaseConfig {

                            /**
                             * Constructs a new DatabaseConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IDatabaseConfig);

                            /** DatabaseConfig machineType. */
                            public machineType: string;

                            /**
                             * Creates a new DatabaseConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DatabaseConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IDatabaseConfig): google.cloud.orchestration.airflow.service.v1.DatabaseConfig;

                            /**
                             * Encodes the specified DatabaseConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.DatabaseConfig.verify|verify} messages.
                             * @param message DatabaseConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IDatabaseConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DatabaseConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.DatabaseConfig.verify|verify} messages.
                             * @param message DatabaseConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IDatabaseConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DatabaseConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DatabaseConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.DatabaseConfig;

                            /**
                             * Decodes a DatabaseConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DatabaseConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.DatabaseConfig;

                            /**
                             * Verifies a DatabaseConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DatabaseConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DatabaseConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.DatabaseConfig;

                            /**
                             * Creates a plain object from a DatabaseConfig message. Also converts values to other types if specified.
                             * @param message DatabaseConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.DatabaseConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DatabaseConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a WebServerConfig. */
                        interface IWebServerConfig {

                            /** WebServerConfig machineType */
                            machineType?: (string|null);
                        }

                        /** Represents a WebServerConfig. */
                        class WebServerConfig implements IWebServerConfig {

                            /**
                             * Constructs a new WebServerConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IWebServerConfig);

                            /** WebServerConfig machineType. */
                            public machineType: string;

                            /**
                             * Creates a new WebServerConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns WebServerConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IWebServerConfig): google.cloud.orchestration.airflow.service.v1.WebServerConfig;

                            /**
                             * Encodes the specified WebServerConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.WebServerConfig.verify|verify} messages.
                             * @param message WebServerConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IWebServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified WebServerConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.WebServerConfig.verify|verify} messages.
                             * @param message WebServerConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IWebServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a WebServerConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns WebServerConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.WebServerConfig;

                            /**
                             * Decodes a WebServerConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns WebServerConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.WebServerConfig;

                            /**
                             * Verifies a WebServerConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a WebServerConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns WebServerConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.WebServerConfig;

                            /**
                             * Creates a plain object from a WebServerConfig message. Also converts values to other types if specified.
                             * @param message WebServerConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.WebServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this WebServerConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an EncryptionConfig. */
                        interface IEncryptionConfig {

                            /** EncryptionConfig kmsKeyName */
                            kmsKeyName?: (string|null);
                        }

                        /** Represents an EncryptionConfig. */
                        class EncryptionConfig implements IEncryptionConfig {

                            /**
                             * Constructs a new EncryptionConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IEncryptionConfig);

                            /** EncryptionConfig kmsKeyName. */
                            public kmsKeyName: string;

                            /**
                             * Creates a new EncryptionConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EncryptionConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IEncryptionConfig): google.cloud.orchestration.airflow.service.v1.EncryptionConfig;

                            /**
                             * Encodes the specified EncryptionConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.EncryptionConfig.verify|verify} messages.
                             * @param message EncryptionConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EncryptionConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.EncryptionConfig.verify|verify} messages.
                             * @param message EncryptionConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EncryptionConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EncryptionConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.EncryptionConfig;

                            /**
                             * Decodes an EncryptionConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EncryptionConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.EncryptionConfig;

                            /**
                             * Verifies an EncryptionConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EncryptionConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EncryptionConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.EncryptionConfig;

                            /**
                             * Creates a plain object from an EncryptionConfig message. Also converts values to other types if specified.
                             * @param message EncryptionConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.EncryptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EncryptionConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SoftwareConfig. */
                        interface ISoftwareConfig {

                            /** SoftwareConfig imageVersion */
                            imageVersion?: (string|null);

                            /** SoftwareConfig airflowConfigOverrides */
                            airflowConfigOverrides?: ({ [k: string]: string }|null);

                            /** SoftwareConfig pypiPackages */
                            pypiPackages?: ({ [k: string]: string }|null);

                            /** SoftwareConfig envVariables */
                            envVariables?: ({ [k: string]: string }|null);

                            /** SoftwareConfig pythonVersion */
                            pythonVersion?: (string|null);
                        }

                        /** Represents a SoftwareConfig. */
                        class SoftwareConfig implements ISoftwareConfig {

                            /**
                             * Constructs a new SoftwareConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.ISoftwareConfig);

                            /** SoftwareConfig imageVersion. */
                            public imageVersion: string;

                            /** SoftwareConfig airflowConfigOverrides. */
                            public airflowConfigOverrides: { [k: string]: string };

                            /** SoftwareConfig pypiPackages. */
                            public pypiPackages: { [k: string]: string };

                            /** SoftwareConfig envVariables. */
                            public envVariables: { [k: string]: string };

                            /** SoftwareConfig pythonVersion. */
                            public pythonVersion: string;

                            /**
                             * Creates a new SoftwareConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SoftwareConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.ISoftwareConfig): google.cloud.orchestration.airflow.service.v1.SoftwareConfig;

                            /**
                             * Encodes the specified SoftwareConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.SoftwareConfig.verify|verify} messages.
                             * @param message SoftwareConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.ISoftwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SoftwareConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.SoftwareConfig.verify|verify} messages.
                             * @param message SoftwareConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.ISoftwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SoftwareConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SoftwareConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.SoftwareConfig;

                            /**
                             * Decodes a SoftwareConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SoftwareConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.SoftwareConfig;

                            /**
                             * Verifies a SoftwareConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SoftwareConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SoftwareConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.SoftwareConfig;

                            /**
                             * Creates a plain object from a SoftwareConfig message. Also converts values to other types if specified.
                             * @param message SoftwareConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.SoftwareConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SoftwareConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a IPAllocationPolicy. */
                        interface IIPAllocationPolicy {

                            /** IPAllocationPolicy useIpAliases */
                            useIpAliases?: (boolean|null);

                            /** IPAllocationPolicy clusterSecondaryRangeName */
                            clusterSecondaryRangeName?: (string|null);

                            /** IPAllocationPolicy clusterIpv4CidrBlock */
                            clusterIpv4CidrBlock?: (string|null);

                            /** IPAllocationPolicy servicesSecondaryRangeName */
                            servicesSecondaryRangeName?: (string|null);

                            /** IPAllocationPolicy servicesIpv4CidrBlock */
                            servicesIpv4CidrBlock?: (string|null);
                        }

                        /** Represents a IPAllocationPolicy. */
                        class IPAllocationPolicy implements IIPAllocationPolicy {

                            /**
                             * Constructs a new IPAllocationPolicy.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IIPAllocationPolicy);

                            /** IPAllocationPolicy useIpAliases. */
                            public useIpAliases: boolean;

                            /** IPAllocationPolicy clusterSecondaryRangeName. */
                            public clusterSecondaryRangeName?: (string|null);

                            /** IPAllocationPolicy clusterIpv4CidrBlock. */
                            public clusterIpv4CidrBlock?: (string|null);

                            /** IPAllocationPolicy servicesSecondaryRangeName. */
                            public servicesSecondaryRangeName?: (string|null);

                            /** IPAllocationPolicy servicesIpv4CidrBlock. */
                            public servicesIpv4CidrBlock?: (string|null);

                            /** IPAllocationPolicy clusterIpAllocation. */
                            public clusterIpAllocation?: ("clusterSecondaryRangeName"|"clusterIpv4CidrBlock");

                            /** IPAllocationPolicy servicesIpAllocation. */
                            public servicesIpAllocation?: ("servicesSecondaryRangeName"|"servicesIpv4CidrBlock");

                            /**
                             * Creates a new IPAllocationPolicy instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns IPAllocationPolicy instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IIPAllocationPolicy): google.cloud.orchestration.airflow.service.v1.IPAllocationPolicy;

                            /**
                             * Encodes the specified IPAllocationPolicy message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.IPAllocationPolicy.verify|verify} messages.
                             * @param message IPAllocationPolicy message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IIPAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified IPAllocationPolicy message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.IPAllocationPolicy.verify|verify} messages.
                             * @param message IPAllocationPolicy message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IIPAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a IPAllocationPolicy message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns IPAllocationPolicy
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.IPAllocationPolicy;

                            /**
                             * Decodes a IPAllocationPolicy message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns IPAllocationPolicy
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.IPAllocationPolicy;

                            /**
                             * Verifies a IPAllocationPolicy message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a IPAllocationPolicy message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns IPAllocationPolicy
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.IPAllocationPolicy;

                            /**
                             * Creates a plain object from a IPAllocationPolicy message. Also converts values to other types if specified.
                             * @param message IPAllocationPolicy
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.IPAllocationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this IPAllocationPolicy to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a NodeConfig. */
                        interface INodeConfig {

                            /** NodeConfig location */
                            location?: (string|null);

                            /** NodeConfig machineType */
                            machineType?: (string|null);

                            /** NodeConfig network */
                            network?: (string|null);

                            /** NodeConfig subnetwork */
                            subnetwork?: (string|null);

                            /** NodeConfig diskSizeGb */
                            diskSizeGb?: (number|null);

                            /** NodeConfig oauthScopes */
                            oauthScopes?: (string[]|null);

                            /** NodeConfig serviceAccount */
                            serviceAccount?: (string|null);

                            /** NodeConfig tags */
                            tags?: (string[]|null);

                            /** NodeConfig ipAllocationPolicy */
                            ipAllocationPolicy?: (google.cloud.orchestration.airflow.service.v1.IIPAllocationPolicy|null);
                        }

                        /** Represents a NodeConfig. */
                        class NodeConfig implements INodeConfig {

                            /**
                             * Constructs a new NodeConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.INodeConfig);

                            /** NodeConfig location. */
                            public location: string;

                            /** NodeConfig machineType. */
                            public machineType: string;

                            /** NodeConfig network. */
                            public network: string;

                            /** NodeConfig subnetwork. */
                            public subnetwork: string;

                            /** NodeConfig diskSizeGb. */
                            public diskSizeGb: number;

                            /** NodeConfig oauthScopes. */
                            public oauthScopes: string[];

                            /** NodeConfig serviceAccount. */
                            public serviceAccount: string;

                            /** NodeConfig tags. */
                            public tags: string[];

                            /** NodeConfig ipAllocationPolicy. */
                            public ipAllocationPolicy?: (google.cloud.orchestration.airflow.service.v1.IIPAllocationPolicy|null);

                            /**
                             * Creates a new NodeConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns NodeConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.INodeConfig): google.cloud.orchestration.airflow.service.v1.NodeConfig;

                            /**
                             * Encodes the specified NodeConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.NodeConfig.verify|verify} messages.
                             * @param message NodeConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.INodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified NodeConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.NodeConfig.verify|verify} messages.
                             * @param message NodeConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.INodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a NodeConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns NodeConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.NodeConfig;

                            /**
                             * Decodes a NodeConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns NodeConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.NodeConfig;

                            /**
                             * Verifies a NodeConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a NodeConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns NodeConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.NodeConfig;

                            /**
                             * Creates a plain object from a NodeConfig message. Also converts values to other types if specified.
                             * @param message NodeConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.NodeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this NodeConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PrivateClusterConfig. */
                        interface IPrivateClusterConfig {

                            /** PrivateClusterConfig enablePrivateEndpoint */
                            enablePrivateEndpoint?: (boolean|null);

                            /** PrivateClusterConfig masterIpv4CidrBlock */
                            masterIpv4CidrBlock?: (string|null);

                            /** PrivateClusterConfig masterIpv4ReservedRange */
                            masterIpv4ReservedRange?: (string|null);
                        }

                        /** Represents a PrivateClusterConfig. */
                        class PrivateClusterConfig implements IPrivateClusterConfig {

                            /**
                             * Constructs a new PrivateClusterConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IPrivateClusterConfig);

                            /** PrivateClusterConfig enablePrivateEndpoint. */
                            public enablePrivateEndpoint: boolean;

                            /** PrivateClusterConfig masterIpv4CidrBlock. */
                            public masterIpv4CidrBlock: string;

                            /** PrivateClusterConfig masterIpv4ReservedRange. */
                            public masterIpv4ReservedRange: string;

                            /**
                             * Creates a new PrivateClusterConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PrivateClusterConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IPrivateClusterConfig): google.cloud.orchestration.airflow.service.v1.PrivateClusterConfig;

                            /**
                             * Encodes the specified PrivateClusterConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.PrivateClusterConfig.verify|verify} messages.
                             * @param message PrivateClusterConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IPrivateClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PrivateClusterConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.PrivateClusterConfig.verify|verify} messages.
                             * @param message PrivateClusterConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IPrivateClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PrivateClusterConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PrivateClusterConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.PrivateClusterConfig;

                            /**
                             * Decodes a PrivateClusterConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PrivateClusterConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.PrivateClusterConfig;

                            /**
                             * Verifies a PrivateClusterConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PrivateClusterConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PrivateClusterConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.PrivateClusterConfig;

                            /**
                             * Creates a plain object from a PrivateClusterConfig message. Also converts values to other types if specified.
                             * @param message PrivateClusterConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.PrivateClusterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PrivateClusterConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PrivateEnvironmentConfig. */
                        interface IPrivateEnvironmentConfig {

                            /** PrivateEnvironmentConfig enablePrivateEnvironment */
                            enablePrivateEnvironment?: (boolean|null);

                            /** PrivateEnvironmentConfig privateClusterConfig */
                            privateClusterConfig?: (google.cloud.orchestration.airflow.service.v1.IPrivateClusterConfig|null);

                            /** PrivateEnvironmentConfig webServerIpv4CidrBlock */
                            webServerIpv4CidrBlock?: (string|null);

                            /** PrivateEnvironmentConfig cloudSqlIpv4CidrBlock */
                            cloudSqlIpv4CidrBlock?: (string|null);

                            /** PrivateEnvironmentConfig webServerIpv4ReservedRange */
                            webServerIpv4ReservedRange?: (string|null);
                        }

                        /** Represents a PrivateEnvironmentConfig. */
                        class PrivateEnvironmentConfig implements IPrivateEnvironmentConfig {

                            /**
                             * Constructs a new PrivateEnvironmentConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IPrivateEnvironmentConfig);

                            /** PrivateEnvironmentConfig enablePrivateEnvironment. */
                            public enablePrivateEnvironment: boolean;

                            /** PrivateEnvironmentConfig privateClusterConfig. */
                            public privateClusterConfig?: (google.cloud.orchestration.airflow.service.v1.IPrivateClusterConfig|null);

                            /** PrivateEnvironmentConfig webServerIpv4CidrBlock. */
                            public webServerIpv4CidrBlock: string;

                            /** PrivateEnvironmentConfig cloudSqlIpv4CidrBlock. */
                            public cloudSqlIpv4CidrBlock: string;

                            /** PrivateEnvironmentConfig webServerIpv4ReservedRange. */
                            public webServerIpv4ReservedRange: string;

                            /**
                             * Creates a new PrivateEnvironmentConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PrivateEnvironmentConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IPrivateEnvironmentConfig): google.cloud.orchestration.airflow.service.v1.PrivateEnvironmentConfig;

                            /**
                             * Encodes the specified PrivateEnvironmentConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.PrivateEnvironmentConfig.verify|verify} messages.
                             * @param message PrivateEnvironmentConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IPrivateEnvironmentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PrivateEnvironmentConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.PrivateEnvironmentConfig.verify|verify} messages.
                             * @param message PrivateEnvironmentConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IPrivateEnvironmentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PrivateEnvironmentConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PrivateEnvironmentConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.PrivateEnvironmentConfig;

                            /**
                             * Decodes a PrivateEnvironmentConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PrivateEnvironmentConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.PrivateEnvironmentConfig;

                            /**
                             * Verifies a PrivateEnvironmentConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PrivateEnvironmentConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PrivateEnvironmentConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.PrivateEnvironmentConfig;

                            /**
                             * Creates a plain object from a PrivateEnvironmentConfig message. Also converts values to other types if specified.
                             * @param message PrivateEnvironmentConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.PrivateEnvironmentConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PrivateEnvironmentConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an Environment. */
                        interface IEnvironment {

                            /** Environment name */
                            name?: (string|null);

                            /** Environment config */
                            config?: (google.cloud.orchestration.airflow.service.v1.IEnvironmentConfig|null);

                            /** Environment uuid */
                            uuid?: (string|null);

                            /** Environment state */
                            state?: (google.cloud.orchestration.airflow.service.v1.Environment.State|keyof typeof google.cloud.orchestration.airflow.service.v1.Environment.State|null);

                            /** Environment createTime */
                            createTime?: (google.protobuf.ITimestamp|null);

                            /** Environment updateTime */
                            updateTime?: (google.protobuf.ITimestamp|null);

                            /** Environment labels */
                            labels?: ({ [k: string]: string }|null);
                        }

                        /** Represents an Environment. */
                        class Environment implements IEnvironment {

                            /**
                             * Constructs a new Environment.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IEnvironment);

                            /** Environment name. */
                            public name: string;

                            /** Environment config. */
                            public config?: (google.cloud.orchestration.airflow.service.v1.IEnvironmentConfig|null);

                            /** Environment uuid. */
                            public uuid: string;

                            /** Environment state. */
                            public state: (google.cloud.orchestration.airflow.service.v1.Environment.State|keyof typeof google.cloud.orchestration.airflow.service.v1.Environment.State);

                            /** Environment createTime. */
                            public createTime?: (google.protobuf.ITimestamp|null);

                            /** Environment updateTime. */
                            public updateTime?: (google.protobuf.ITimestamp|null);

                            /** Environment labels. */
                            public labels: { [k: string]: string };

                            /**
                             * Creates a new Environment instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Environment instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IEnvironment): google.cloud.orchestration.airflow.service.v1.Environment;

                            /**
                             * Encodes the specified Environment message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.Environment.verify|verify} messages.
                             * @param message Environment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Environment message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.Environment.verify|verify} messages.
                             * @param message Environment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Environment message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Environment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.Environment;

                            /**
                             * Decodes an Environment message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Environment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.Environment;

                            /**
                             * Verifies an Environment message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Environment message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Environment
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.Environment;

                            /**
                             * Creates a plain object from an Environment message. Also converts values to other types if specified.
                             * @param message Environment
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.Environment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Environment to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace Environment {

                            /** State enum. */
                            enum State {
                                STATE_UNSPECIFIED = 0,
                                CREATING = 1,
                                RUNNING = 2,
                                UPDATING = 3,
                                DELETING = 4,
                                ERROR = 5
                            }
                        }

                        /** Properties of a CheckUpgradeResponse. */
                        interface ICheckUpgradeResponse {

                            /** CheckUpgradeResponse buildLogUri */
                            buildLogUri?: (string|null);

                            /** CheckUpgradeResponse containsPypiModulesConflict */
                            containsPypiModulesConflict?: (google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse.ConflictResult|keyof typeof google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse.ConflictResult|null);

                            /** CheckUpgradeResponse pypiConflictBuildLogExtract */
                            pypiConflictBuildLogExtract?: (string|null);

                            /** CheckUpgradeResponse imageVersion */
                            imageVersion?: (string|null);

                            /** CheckUpgradeResponse pypiDependencies */
                            pypiDependencies?: ({ [k: string]: string }|null);
                        }

                        /** Represents a CheckUpgradeResponse. */
                        class CheckUpgradeResponse implements ICheckUpgradeResponse {

                            /**
                             * Constructs a new CheckUpgradeResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.ICheckUpgradeResponse);

                            /** CheckUpgradeResponse buildLogUri. */
                            public buildLogUri: string;

                            /** CheckUpgradeResponse containsPypiModulesConflict. */
                            public containsPypiModulesConflict: (google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse.ConflictResult|keyof typeof google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse.ConflictResult);

                            /** CheckUpgradeResponse pypiConflictBuildLogExtract. */
                            public pypiConflictBuildLogExtract: string;

                            /** CheckUpgradeResponse imageVersion. */
                            public imageVersion: string;

                            /** CheckUpgradeResponse pypiDependencies. */
                            public pypiDependencies: { [k: string]: string };

                            /**
                             * Creates a new CheckUpgradeResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CheckUpgradeResponse instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.ICheckUpgradeResponse): google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse;

                            /**
                             * Encodes the specified CheckUpgradeResponse message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse.verify|verify} messages.
                             * @param message CheckUpgradeResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.ICheckUpgradeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CheckUpgradeResponse message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse.verify|verify} messages.
                             * @param message CheckUpgradeResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.ICheckUpgradeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CheckUpgradeResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CheckUpgradeResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse;

                            /**
                             * Decodes a CheckUpgradeResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CheckUpgradeResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse;

                            /**
                             * Verifies a CheckUpgradeResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CheckUpgradeResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CheckUpgradeResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse;

                            /**
                             * Creates a plain object from a CheckUpgradeResponse message. Also converts values to other types if specified.
                             * @param message CheckUpgradeResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CheckUpgradeResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace CheckUpgradeResponse {

                            /** ConflictResult enum. */
                            enum ConflictResult {
                                CONFLICT_RESULT_UNSPECIFIED = 0,
                                CONFLICT = 1,
                                NO_CONFLICT = 2
                            }
                        }

                        /** Represents an ImageVersions */
                        class ImageVersions extends $protobuf.rpc.Service {

                            /**
                             * Constructs a new ImageVersions service.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             */
                            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                            /**
                             * Creates new ImageVersions service using the specified rpc implementation.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             * @returns RPC service. Useful where requests and/or responses are streamed.
                             */
                            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ImageVersions;

                            /**
                             * Calls ListImageVersions.
                             * @param request ListImageVersionsRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and ListImageVersionsResponse
                             */
                            public listImageVersions(request: google.cloud.orchestration.airflow.service.v1.IListImageVersionsRequest, callback: google.cloud.orchestration.airflow.service.v1.ImageVersions.ListImageVersionsCallback): void;

                            /**
                             * Calls ListImageVersions.
                             * @param request ListImageVersionsRequest message or plain object
                             * @returns Promise
                             */
                            public listImageVersions(request: google.cloud.orchestration.airflow.service.v1.IListImageVersionsRequest): Promise<google.cloud.orchestration.airflow.service.v1.ListImageVersionsResponse>;
                        }

                        namespace ImageVersions {

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1.ImageVersions#listImageVersions}.
                             * @param error Error, if any
                             * @param [response] ListImageVersionsResponse
                             */
                            type ListImageVersionsCallback = (error: (Error|null), response?: google.cloud.orchestration.airflow.service.v1.ListImageVersionsResponse) => void;
                        }

                        /** Properties of a ListImageVersionsRequest. */
                        interface IListImageVersionsRequest {

                            /** ListImageVersionsRequest parent */
                            parent?: (string|null);

                            /** ListImageVersionsRequest pageSize */
                            pageSize?: (number|null);

                            /** ListImageVersionsRequest pageToken */
                            pageToken?: (string|null);

                            /** ListImageVersionsRequest includePastReleases */
                            includePastReleases?: (boolean|null);
                        }

                        /** Represents a ListImageVersionsRequest. */
                        class ListImageVersionsRequest implements IListImageVersionsRequest {

                            /**
                             * Constructs a new ListImageVersionsRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IListImageVersionsRequest);

                            /** ListImageVersionsRequest parent. */
                            public parent: string;

                            /** ListImageVersionsRequest pageSize. */
                            public pageSize: number;

                            /** ListImageVersionsRequest pageToken. */
                            public pageToken: string;

                            /** ListImageVersionsRequest includePastReleases. */
                            public includePastReleases: boolean;

                            /**
                             * Creates a new ListImageVersionsRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListImageVersionsRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IListImageVersionsRequest): google.cloud.orchestration.airflow.service.v1.ListImageVersionsRequest;

                            /**
                             * Encodes the specified ListImageVersionsRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.ListImageVersionsRequest.verify|verify} messages.
                             * @param message ListImageVersionsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IListImageVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListImageVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.ListImageVersionsRequest.verify|verify} messages.
                             * @param message ListImageVersionsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IListImageVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListImageVersionsRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListImageVersionsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.ListImageVersionsRequest;

                            /**
                             * Decodes a ListImageVersionsRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListImageVersionsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.ListImageVersionsRequest;

                            /**
                             * Verifies a ListImageVersionsRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListImageVersionsRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListImageVersionsRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.ListImageVersionsRequest;

                            /**
                             * Creates a plain object from a ListImageVersionsRequest message. Also converts values to other types if specified.
                             * @param message ListImageVersionsRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.ListImageVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListImageVersionsRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ListImageVersionsResponse. */
                        interface IListImageVersionsResponse {

                            /** ListImageVersionsResponse imageVersions */
                            imageVersions?: (google.cloud.orchestration.airflow.service.v1.IImageVersion[]|null);

                            /** ListImageVersionsResponse nextPageToken */
                            nextPageToken?: (string|null);
                        }

                        /** Represents a ListImageVersionsResponse. */
                        class ListImageVersionsResponse implements IListImageVersionsResponse {

                            /**
                             * Constructs a new ListImageVersionsResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IListImageVersionsResponse);

                            /** ListImageVersionsResponse imageVersions. */
                            public imageVersions: google.cloud.orchestration.airflow.service.v1.IImageVersion[];

                            /** ListImageVersionsResponse nextPageToken. */
                            public nextPageToken: string;

                            /**
                             * Creates a new ListImageVersionsResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListImageVersionsResponse instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IListImageVersionsResponse): google.cloud.orchestration.airflow.service.v1.ListImageVersionsResponse;

                            /**
                             * Encodes the specified ListImageVersionsResponse message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.ListImageVersionsResponse.verify|verify} messages.
                             * @param message ListImageVersionsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IListImageVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListImageVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.ListImageVersionsResponse.verify|verify} messages.
                             * @param message ListImageVersionsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IListImageVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListImageVersionsResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListImageVersionsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.ListImageVersionsResponse;

                            /**
                             * Decodes a ListImageVersionsResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListImageVersionsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.ListImageVersionsResponse;

                            /**
                             * Verifies a ListImageVersionsResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListImageVersionsResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListImageVersionsResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.ListImageVersionsResponse;

                            /**
                             * Creates a plain object from a ListImageVersionsResponse message. Also converts values to other types if specified.
                             * @param message ListImageVersionsResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.ListImageVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListImageVersionsResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an ImageVersion. */
                        interface IImageVersion {

                            /** ImageVersion imageVersionId */
                            imageVersionId?: (string|null);

                            /** ImageVersion isDefault */
                            isDefault?: (boolean|null);

                            /** ImageVersion supportedPythonVersions */
                            supportedPythonVersions?: (string[]|null);

                            /** ImageVersion releaseDate */
                            releaseDate?: (google.type.IDate|null);

                            /** ImageVersion creationDisabled */
                            creationDisabled?: (boolean|null);

                            /** ImageVersion upgradeDisabled */
                            upgradeDisabled?: (boolean|null);
                        }

                        /** Represents an ImageVersion. */
                        class ImageVersion implements IImageVersion {

                            /**
                             * Constructs a new ImageVersion.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IImageVersion);

                            /** ImageVersion imageVersionId. */
                            public imageVersionId: string;

                            /** ImageVersion isDefault. */
                            public isDefault: boolean;

                            /** ImageVersion supportedPythonVersions. */
                            public supportedPythonVersions: string[];

                            /** ImageVersion releaseDate. */
                            public releaseDate?: (google.type.IDate|null);

                            /** ImageVersion creationDisabled. */
                            public creationDisabled: boolean;

                            /** ImageVersion upgradeDisabled. */
                            public upgradeDisabled: boolean;

                            /**
                             * Creates a new ImageVersion instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ImageVersion instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IImageVersion): google.cloud.orchestration.airflow.service.v1.ImageVersion;

                            /**
                             * Encodes the specified ImageVersion message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.ImageVersion.verify|verify} messages.
                             * @param message ImageVersion message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IImageVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ImageVersion message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.ImageVersion.verify|verify} messages.
                             * @param message ImageVersion message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IImageVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ImageVersion message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ImageVersion
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.ImageVersion;

                            /**
                             * Decodes an ImageVersion message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ImageVersion
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.ImageVersion;

                            /**
                             * Verifies an ImageVersion message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ImageVersion message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ImageVersion
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.ImageVersion;

                            /**
                             * Creates a plain object from an ImageVersion message. Also converts values to other types if specified.
                             * @param message ImageVersion
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.ImageVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ImageVersion to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an OperationMetadata. */
                        interface IOperationMetadata {

                            /** OperationMetadata state */
                            state?: (google.cloud.orchestration.airflow.service.v1.OperationMetadata.State|keyof typeof google.cloud.orchestration.airflow.service.v1.OperationMetadata.State|null);

                            /** OperationMetadata operationType */
                            operationType?: (google.cloud.orchestration.airflow.service.v1.OperationMetadata.Type|keyof typeof google.cloud.orchestration.airflow.service.v1.OperationMetadata.Type|null);

                            /** OperationMetadata resource */
                            resource?: (string|null);

                            /** OperationMetadata resourceUuid */
                            resourceUuid?: (string|null);

                            /** OperationMetadata createTime */
                            createTime?: (google.protobuf.ITimestamp|null);

                            /** OperationMetadata endTime */
                            endTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents an OperationMetadata. */
                        class OperationMetadata implements IOperationMetadata {

                            /**
                             * Constructs a new OperationMetadata.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1.IOperationMetadata);

                            /** OperationMetadata state. */
                            public state: (google.cloud.orchestration.airflow.service.v1.OperationMetadata.State|keyof typeof google.cloud.orchestration.airflow.service.v1.OperationMetadata.State);

                            /** OperationMetadata operationType. */
                            public operationType: (google.cloud.orchestration.airflow.service.v1.OperationMetadata.Type|keyof typeof google.cloud.orchestration.airflow.service.v1.OperationMetadata.Type);

                            /** OperationMetadata resource. */
                            public resource: string;

                            /** OperationMetadata resourceUuid. */
                            public resourceUuid: string;

                            /** OperationMetadata createTime. */
                            public createTime?: (google.protobuf.ITimestamp|null);

                            /** OperationMetadata endTime. */
                            public endTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new OperationMetadata instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns OperationMetadata instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1.IOperationMetadata): google.cloud.orchestration.airflow.service.v1.OperationMetadata;

                            /**
                             * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.OperationMetadata.verify|verify} messages.
                             * @param message OperationMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1.OperationMetadata.verify|verify} messages.
                             * @param message OperationMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an OperationMetadata message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns OperationMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1.OperationMetadata;

                            /**
                             * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns OperationMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1.OperationMetadata;

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
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1.OperationMetadata;

                            /**
                             * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                             * @param message OperationMetadata
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this OperationMetadata to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace OperationMetadata {

                            /** State enum. */
                            enum State {
                                STATE_UNSPECIFIED = 0,
                                PENDING = 1,
                                RUNNING = 2,
                                SUCCEEDED = 3,
                                SUCCESSFUL = 3,
                                FAILED = 4
                            }

                            /** Type enum. */
                            enum Type {
                                TYPE_UNSPECIFIED = 0,
                                CREATE = 1,
                                DELETE = 2,
                                UPDATE = 3,
                                CHECK = 4
                            }
                        }
                    }

                    /** Namespace v1beta1. */
                    namespace v1beta1 {

                        /** Represents an Environments */
                        class Environments extends $protobuf.rpc.Service {

                            /**
                             * Constructs a new Environments service.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             */
                            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                            /**
                             * Creates new Environments service using the specified rpc implementation.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             * @returns RPC service. Useful where requests and/or responses are streamed.
                             */
                            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Environments;

                            /**
                             * Calls CreateEnvironment.
                             * @param request CreateEnvironmentRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public createEnvironment(request: google.cloud.orchestration.airflow.service.v1beta1.ICreateEnvironmentRequest, callback: google.cloud.orchestration.airflow.service.v1beta1.Environments.CreateEnvironmentCallback): void;

                            /**
                             * Calls CreateEnvironment.
                             * @param request CreateEnvironmentRequest message or plain object
                             * @returns Promise
                             */
                            public createEnvironment(request: google.cloud.orchestration.airflow.service.v1beta1.ICreateEnvironmentRequest): Promise<google.longrunning.Operation>;

                            /**
                             * Calls GetEnvironment.
                             * @param request GetEnvironmentRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Environment
                             */
                            public getEnvironment(request: google.cloud.orchestration.airflow.service.v1beta1.IGetEnvironmentRequest, callback: google.cloud.orchestration.airflow.service.v1beta1.Environments.GetEnvironmentCallback): void;

                            /**
                             * Calls GetEnvironment.
                             * @param request GetEnvironmentRequest message or plain object
                             * @returns Promise
                             */
                            public getEnvironment(request: google.cloud.orchestration.airflow.service.v1beta1.IGetEnvironmentRequest): Promise<google.cloud.orchestration.airflow.service.v1beta1.Environment>;

                            /**
                             * Calls ListEnvironments.
                             * @param request ListEnvironmentsRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and ListEnvironmentsResponse
                             */
                            public listEnvironments(request: google.cloud.orchestration.airflow.service.v1beta1.IListEnvironmentsRequest, callback: google.cloud.orchestration.airflow.service.v1beta1.Environments.ListEnvironmentsCallback): void;

                            /**
                             * Calls ListEnvironments.
                             * @param request ListEnvironmentsRequest message or plain object
                             * @returns Promise
                             */
                            public listEnvironments(request: google.cloud.orchestration.airflow.service.v1beta1.IListEnvironmentsRequest): Promise<google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse>;

                            /**
                             * Calls UpdateEnvironment.
                             * @param request UpdateEnvironmentRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public updateEnvironment(request: google.cloud.orchestration.airflow.service.v1beta1.IUpdateEnvironmentRequest, callback: google.cloud.orchestration.airflow.service.v1beta1.Environments.UpdateEnvironmentCallback): void;

                            /**
                             * Calls UpdateEnvironment.
                             * @param request UpdateEnvironmentRequest message or plain object
                             * @returns Promise
                             */
                            public updateEnvironment(request: google.cloud.orchestration.airflow.service.v1beta1.IUpdateEnvironmentRequest): Promise<google.longrunning.Operation>;

                            /**
                             * Calls DeleteEnvironment.
                             * @param request DeleteEnvironmentRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public deleteEnvironment(request: google.cloud.orchestration.airflow.service.v1beta1.IDeleteEnvironmentRequest, callback: google.cloud.orchestration.airflow.service.v1beta1.Environments.DeleteEnvironmentCallback): void;

                            /**
                             * Calls DeleteEnvironment.
                             * @param request DeleteEnvironmentRequest message or plain object
                             * @returns Promise
                             */
                            public deleteEnvironment(request: google.cloud.orchestration.airflow.service.v1beta1.IDeleteEnvironmentRequest): Promise<google.longrunning.Operation>;

                            /**
                             * Calls RestartWebServer.
                             * @param request RestartWebServerRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public restartWebServer(request: google.cloud.orchestration.airflow.service.v1beta1.IRestartWebServerRequest, callback: google.cloud.orchestration.airflow.service.v1beta1.Environments.RestartWebServerCallback): void;

                            /**
                             * Calls RestartWebServer.
                             * @param request RestartWebServerRequest message or plain object
                             * @returns Promise
                             */
                            public restartWebServer(request: google.cloud.orchestration.airflow.service.v1beta1.IRestartWebServerRequest): Promise<google.longrunning.Operation>;

                            /**
                             * Calls CheckUpgrade.
                             * @param request CheckUpgradeRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and Operation
                             */
                            public checkUpgrade(request: google.cloud.orchestration.airflow.service.v1beta1.ICheckUpgradeRequest, callback: google.cloud.orchestration.airflow.service.v1beta1.Environments.CheckUpgradeCallback): void;

                            /**
                             * Calls CheckUpgrade.
                             * @param request CheckUpgradeRequest message or plain object
                             * @returns Promise
                             */
                            public checkUpgrade(request: google.cloud.orchestration.airflow.service.v1beta1.ICheckUpgradeRequest): Promise<google.longrunning.Operation>;
                        }

                        namespace Environments {

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1beta1.Environments#createEnvironment}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type CreateEnvironmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1beta1.Environments#getEnvironment}.
                             * @param error Error, if any
                             * @param [response] Environment
                             */
                            type GetEnvironmentCallback = (error: (Error|null), response?: google.cloud.orchestration.airflow.service.v1beta1.Environment) => void;

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1beta1.Environments#listEnvironments}.
                             * @param error Error, if any
                             * @param [response] ListEnvironmentsResponse
                             */
                            type ListEnvironmentsCallback = (error: (Error|null), response?: google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse) => void;

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1beta1.Environments#updateEnvironment}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type UpdateEnvironmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1beta1.Environments#deleteEnvironment}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type DeleteEnvironmentCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1beta1.Environments#restartWebServer}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type RestartWebServerCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1beta1.Environments#checkUpgrade}.
                             * @param error Error, if any
                             * @param [response] Operation
                             */
                            type CheckUpgradeCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                        }

                        /** Properties of a CreateEnvironmentRequest. */
                        interface ICreateEnvironmentRequest {

                            /** CreateEnvironmentRequest parent */
                            parent?: (string|null);

                            /** CreateEnvironmentRequest environment */
                            environment?: (google.cloud.orchestration.airflow.service.v1beta1.IEnvironment|null);
                        }

                        /** Represents a CreateEnvironmentRequest. */
                        class CreateEnvironmentRequest implements ICreateEnvironmentRequest {

                            /**
                             * Constructs a new CreateEnvironmentRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.ICreateEnvironmentRequest);

                            /** CreateEnvironmentRequest parent. */
                            public parent: string;

                            /** CreateEnvironmentRequest environment. */
                            public environment?: (google.cloud.orchestration.airflow.service.v1beta1.IEnvironment|null);

                            /**
                             * Creates a new CreateEnvironmentRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CreateEnvironmentRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.ICreateEnvironmentRequest): google.cloud.orchestration.airflow.service.v1beta1.CreateEnvironmentRequest;

                            /**
                             * Encodes the specified CreateEnvironmentRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.CreateEnvironmentRequest.verify|verify} messages.
                             * @param message CreateEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.ICreateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CreateEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.CreateEnvironmentRequest.verify|verify} messages.
                             * @param message CreateEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.ICreateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CreateEnvironmentRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CreateEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.CreateEnvironmentRequest;

                            /**
                             * Decodes a CreateEnvironmentRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CreateEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.CreateEnvironmentRequest;

                            /**
                             * Verifies a CreateEnvironmentRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CreateEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CreateEnvironmentRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.CreateEnvironmentRequest;

                            /**
                             * Creates a plain object from a CreateEnvironmentRequest message. Also converts values to other types if specified.
                             * @param message CreateEnvironmentRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.CreateEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CreateEnvironmentRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetEnvironmentRequest. */
                        interface IGetEnvironmentRequest {

                            /** GetEnvironmentRequest name */
                            name?: (string|null);
                        }

                        /** Represents a GetEnvironmentRequest. */
                        class GetEnvironmentRequest implements IGetEnvironmentRequest {

                            /**
                             * Constructs a new GetEnvironmentRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IGetEnvironmentRequest);

                            /** GetEnvironmentRequest name. */
                            public name: string;

                            /**
                             * Creates a new GetEnvironmentRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetEnvironmentRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IGetEnvironmentRequest): google.cloud.orchestration.airflow.service.v1beta1.GetEnvironmentRequest;

                            /**
                             * Encodes the specified GetEnvironmentRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.GetEnvironmentRequest.verify|verify} messages.
                             * @param message GetEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IGetEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GetEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.GetEnvironmentRequest.verify|verify} messages.
                             * @param message GetEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IGetEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetEnvironmentRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.GetEnvironmentRequest;

                            /**
                             * Decodes a GetEnvironmentRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GetEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.GetEnvironmentRequest;

                            /**
                             * Verifies a GetEnvironmentRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GetEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetEnvironmentRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.GetEnvironmentRequest;

                            /**
                             * Creates a plain object from a GetEnvironmentRequest message. Also converts values to other types if specified.
                             * @param message GetEnvironmentRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.GetEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetEnvironmentRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ListEnvironmentsRequest. */
                        interface IListEnvironmentsRequest {

                            /** ListEnvironmentsRequest parent */
                            parent?: (string|null);

                            /** ListEnvironmentsRequest pageSize */
                            pageSize?: (number|null);

                            /** ListEnvironmentsRequest pageToken */
                            pageToken?: (string|null);
                        }

                        /** Represents a ListEnvironmentsRequest. */
                        class ListEnvironmentsRequest implements IListEnvironmentsRequest {

                            /**
                             * Constructs a new ListEnvironmentsRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IListEnvironmentsRequest);

                            /** ListEnvironmentsRequest parent. */
                            public parent: string;

                            /** ListEnvironmentsRequest pageSize. */
                            public pageSize: number;

                            /** ListEnvironmentsRequest pageToken. */
                            public pageToken: string;

                            /**
                             * Creates a new ListEnvironmentsRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListEnvironmentsRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IListEnvironmentsRequest): google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsRequest;

                            /**
                             * Encodes the specified ListEnvironmentsRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsRequest.verify|verify} messages.
                             * @param message ListEnvironmentsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IListEnvironmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListEnvironmentsRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsRequest.verify|verify} messages.
                             * @param message ListEnvironmentsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IListEnvironmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListEnvironmentsRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListEnvironmentsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsRequest;

                            /**
                             * Decodes a ListEnvironmentsRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListEnvironmentsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsRequest;

                            /**
                             * Verifies a ListEnvironmentsRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListEnvironmentsRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListEnvironmentsRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsRequest;

                            /**
                             * Creates a plain object from a ListEnvironmentsRequest message. Also converts values to other types if specified.
                             * @param message ListEnvironmentsRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListEnvironmentsRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ListEnvironmentsResponse. */
                        interface IListEnvironmentsResponse {

                            /** ListEnvironmentsResponse environments */
                            environments?: (google.cloud.orchestration.airflow.service.v1beta1.IEnvironment[]|null);

                            /** ListEnvironmentsResponse nextPageToken */
                            nextPageToken?: (string|null);
                        }

                        /** Represents a ListEnvironmentsResponse. */
                        class ListEnvironmentsResponse implements IListEnvironmentsResponse {

                            /**
                             * Constructs a new ListEnvironmentsResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IListEnvironmentsResponse);

                            /** ListEnvironmentsResponse environments. */
                            public environments: google.cloud.orchestration.airflow.service.v1beta1.IEnvironment[];

                            /** ListEnvironmentsResponse nextPageToken. */
                            public nextPageToken: string;

                            /**
                             * Creates a new ListEnvironmentsResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListEnvironmentsResponse instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IListEnvironmentsResponse): google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse;

                            /**
                             * Encodes the specified ListEnvironmentsResponse message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse.verify|verify} messages.
                             * @param message ListEnvironmentsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IListEnvironmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListEnvironmentsResponse message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse.verify|verify} messages.
                             * @param message ListEnvironmentsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IListEnvironmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListEnvironmentsResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListEnvironmentsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse;

                            /**
                             * Decodes a ListEnvironmentsResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListEnvironmentsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse;

                            /**
                             * Verifies a ListEnvironmentsResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListEnvironmentsResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListEnvironmentsResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse;

                            /**
                             * Creates a plain object from a ListEnvironmentsResponse message. Also converts values to other types if specified.
                             * @param message ListEnvironmentsResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.ListEnvironmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListEnvironmentsResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DeleteEnvironmentRequest. */
                        interface IDeleteEnvironmentRequest {

                            /** DeleteEnvironmentRequest name */
                            name?: (string|null);
                        }

                        /** Represents a DeleteEnvironmentRequest. */
                        class DeleteEnvironmentRequest implements IDeleteEnvironmentRequest {

                            /**
                             * Constructs a new DeleteEnvironmentRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IDeleteEnvironmentRequest);

                            /** DeleteEnvironmentRequest name. */
                            public name: string;

                            /**
                             * Creates a new DeleteEnvironmentRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DeleteEnvironmentRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IDeleteEnvironmentRequest): google.cloud.orchestration.airflow.service.v1beta1.DeleteEnvironmentRequest;

                            /**
                             * Encodes the specified DeleteEnvironmentRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.DeleteEnvironmentRequest.verify|verify} messages.
                             * @param message DeleteEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IDeleteEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DeleteEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.DeleteEnvironmentRequest.verify|verify} messages.
                             * @param message DeleteEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IDeleteEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DeleteEnvironmentRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DeleteEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.DeleteEnvironmentRequest;

                            /**
                             * Decodes a DeleteEnvironmentRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DeleteEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.DeleteEnvironmentRequest;

                            /**
                             * Verifies a DeleteEnvironmentRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DeleteEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DeleteEnvironmentRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.DeleteEnvironmentRequest;

                            /**
                             * Creates a plain object from a DeleteEnvironmentRequest message. Also converts values to other types if specified.
                             * @param message DeleteEnvironmentRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.DeleteEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DeleteEnvironmentRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an UpdateEnvironmentRequest. */
                        interface IUpdateEnvironmentRequest {

                            /** UpdateEnvironmentRequest name */
                            name?: (string|null);

                            /** UpdateEnvironmentRequest environment */
                            environment?: (google.cloud.orchestration.airflow.service.v1beta1.IEnvironment|null);

                            /** UpdateEnvironmentRequest updateMask */
                            updateMask?: (google.protobuf.IFieldMask|null);
                        }

                        /** Represents an UpdateEnvironmentRequest. */
                        class UpdateEnvironmentRequest implements IUpdateEnvironmentRequest {

                            /**
                             * Constructs a new UpdateEnvironmentRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IUpdateEnvironmentRequest);

                            /** UpdateEnvironmentRequest name. */
                            public name: string;

                            /** UpdateEnvironmentRequest environment. */
                            public environment?: (google.cloud.orchestration.airflow.service.v1beta1.IEnvironment|null);

                            /** UpdateEnvironmentRequest updateMask. */
                            public updateMask?: (google.protobuf.IFieldMask|null);

                            /**
                             * Creates a new UpdateEnvironmentRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns UpdateEnvironmentRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IUpdateEnvironmentRequest): google.cloud.orchestration.airflow.service.v1beta1.UpdateEnvironmentRequest;

                            /**
                             * Encodes the specified UpdateEnvironmentRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.UpdateEnvironmentRequest.verify|verify} messages.
                             * @param message UpdateEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IUpdateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified UpdateEnvironmentRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.UpdateEnvironmentRequest.verify|verify} messages.
                             * @param message UpdateEnvironmentRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IUpdateEnvironmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an UpdateEnvironmentRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns UpdateEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.UpdateEnvironmentRequest;

                            /**
                             * Decodes an UpdateEnvironmentRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns UpdateEnvironmentRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.UpdateEnvironmentRequest;

                            /**
                             * Verifies an UpdateEnvironmentRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an UpdateEnvironmentRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns UpdateEnvironmentRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.UpdateEnvironmentRequest;

                            /**
                             * Creates a plain object from an UpdateEnvironmentRequest message. Also converts values to other types if specified.
                             * @param message UpdateEnvironmentRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.UpdateEnvironmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this UpdateEnvironmentRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a RestartWebServerRequest. */
                        interface IRestartWebServerRequest {

                            /** RestartWebServerRequest name */
                            name?: (string|null);
                        }

                        /** Represents a RestartWebServerRequest. */
                        class RestartWebServerRequest implements IRestartWebServerRequest {

                            /**
                             * Constructs a new RestartWebServerRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IRestartWebServerRequest);

                            /** RestartWebServerRequest name. */
                            public name: string;

                            /**
                             * Creates a new RestartWebServerRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RestartWebServerRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IRestartWebServerRequest): google.cloud.orchestration.airflow.service.v1beta1.RestartWebServerRequest;

                            /**
                             * Encodes the specified RestartWebServerRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.RestartWebServerRequest.verify|verify} messages.
                             * @param message RestartWebServerRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IRestartWebServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified RestartWebServerRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.RestartWebServerRequest.verify|verify} messages.
                             * @param message RestartWebServerRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IRestartWebServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RestartWebServerRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RestartWebServerRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.RestartWebServerRequest;

                            /**
                             * Decodes a RestartWebServerRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns RestartWebServerRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.RestartWebServerRequest;

                            /**
                             * Verifies a RestartWebServerRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a RestartWebServerRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RestartWebServerRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.RestartWebServerRequest;

                            /**
                             * Creates a plain object from a RestartWebServerRequest message. Also converts values to other types if specified.
                             * @param message RestartWebServerRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.RestartWebServerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RestartWebServerRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an EnvironmentConfig. */
                        interface IEnvironmentConfig {

                            /** EnvironmentConfig gkeCluster */
                            gkeCluster?: (string|null);

                            /** EnvironmentConfig dagGcsPrefix */
                            dagGcsPrefix?: (string|null);

                            /** EnvironmentConfig nodeCount */
                            nodeCount?: (number|null);

                            /** EnvironmentConfig softwareConfig */
                            softwareConfig?: (google.cloud.orchestration.airflow.service.v1beta1.ISoftwareConfig|null);

                            /** EnvironmentConfig nodeConfig */
                            nodeConfig?: (google.cloud.orchestration.airflow.service.v1beta1.INodeConfig|null);

                            /** EnvironmentConfig privateEnvironmentConfig */
                            privateEnvironmentConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IPrivateEnvironmentConfig|null);

                            /** EnvironmentConfig webServerNetworkAccessControl */
                            webServerNetworkAccessControl?: (google.cloud.orchestration.airflow.service.v1beta1.IWebServerNetworkAccessControl|null);

                            /** EnvironmentConfig databaseConfig */
                            databaseConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IDatabaseConfig|null);

                            /** EnvironmentConfig webServerConfig */
                            webServerConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IWebServerConfig|null);

                            /** EnvironmentConfig airflowUri */
                            airflowUri?: (string|null);

                            /** EnvironmentConfig encryptionConfig */
                            encryptionConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IEncryptionConfig|null);

                            /** EnvironmentConfig maintenanceWindow */
                            maintenanceWindow?: (google.cloud.orchestration.airflow.service.v1beta1.IMaintenanceWindow|null);

                            /** EnvironmentConfig workloadsConfig */
                            workloadsConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IWorkloadsConfig|null);

                            /** EnvironmentConfig environmentSize */
                            environmentSize?: (google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig.EnvironmentSize|keyof typeof google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig.EnvironmentSize|null);
                        }

                        /** Represents an EnvironmentConfig. */
                        class EnvironmentConfig implements IEnvironmentConfig {

                            /**
                             * Constructs a new EnvironmentConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IEnvironmentConfig);

                            /** EnvironmentConfig gkeCluster. */
                            public gkeCluster: string;

                            /** EnvironmentConfig dagGcsPrefix. */
                            public dagGcsPrefix: string;

                            /** EnvironmentConfig nodeCount. */
                            public nodeCount: number;

                            /** EnvironmentConfig softwareConfig. */
                            public softwareConfig?: (google.cloud.orchestration.airflow.service.v1beta1.ISoftwareConfig|null);

                            /** EnvironmentConfig nodeConfig. */
                            public nodeConfig?: (google.cloud.orchestration.airflow.service.v1beta1.INodeConfig|null);

                            /** EnvironmentConfig privateEnvironmentConfig. */
                            public privateEnvironmentConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IPrivateEnvironmentConfig|null);

                            /** EnvironmentConfig webServerNetworkAccessControl. */
                            public webServerNetworkAccessControl?: (google.cloud.orchestration.airflow.service.v1beta1.IWebServerNetworkAccessControl|null);

                            /** EnvironmentConfig databaseConfig. */
                            public databaseConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IDatabaseConfig|null);

                            /** EnvironmentConfig webServerConfig. */
                            public webServerConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IWebServerConfig|null);

                            /** EnvironmentConfig airflowUri. */
                            public airflowUri: string;

                            /** EnvironmentConfig encryptionConfig. */
                            public encryptionConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IEncryptionConfig|null);

                            /** EnvironmentConfig maintenanceWindow. */
                            public maintenanceWindow?: (google.cloud.orchestration.airflow.service.v1beta1.IMaintenanceWindow|null);

                            /** EnvironmentConfig workloadsConfig. */
                            public workloadsConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IWorkloadsConfig|null);

                            /** EnvironmentConfig environmentSize. */
                            public environmentSize: (google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig.EnvironmentSize|keyof typeof google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig.EnvironmentSize);

                            /**
                             * Creates a new EnvironmentConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EnvironmentConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IEnvironmentConfig): google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig;

                            /**
                             * Encodes the specified EnvironmentConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig.verify|verify} messages.
                             * @param message EnvironmentConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IEnvironmentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EnvironmentConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig.verify|verify} messages.
                             * @param message EnvironmentConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IEnvironmentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EnvironmentConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EnvironmentConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig;

                            /**
                             * Decodes an EnvironmentConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EnvironmentConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig;

                            /**
                             * Verifies an EnvironmentConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EnvironmentConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EnvironmentConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig;

                            /**
                             * Creates a plain object from an EnvironmentConfig message. Also converts values to other types if specified.
                             * @param message EnvironmentConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.EnvironmentConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EnvironmentConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace EnvironmentConfig {

                            /** EnvironmentSize enum. */
                            enum EnvironmentSize {
                                ENVIRONMENT_SIZE_UNSPECIFIED = 0,
                                ENVIRONMENT_SIZE_SMALL = 1,
                                ENVIRONMENT_SIZE_MEDIUM = 2,
                                ENVIRONMENT_SIZE_LARGE = 3
                            }
                        }

                        /** Properties of a WebServerNetworkAccessControl. */
                        interface IWebServerNetworkAccessControl {

                            /** WebServerNetworkAccessControl allowedIpRanges */
                            allowedIpRanges?: (google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.IAllowedIpRange[]|null);
                        }

                        /** Represents a WebServerNetworkAccessControl. */
                        class WebServerNetworkAccessControl implements IWebServerNetworkAccessControl {

                            /**
                             * Constructs a new WebServerNetworkAccessControl.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IWebServerNetworkAccessControl);

                            /** WebServerNetworkAccessControl allowedIpRanges. */
                            public allowedIpRanges: google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.IAllowedIpRange[];

                            /**
                             * Creates a new WebServerNetworkAccessControl instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns WebServerNetworkAccessControl instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IWebServerNetworkAccessControl): google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl;

                            /**
                             * Encodes the specified WebServerNetworkAccessControl message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.verify|verify} messages.
                             * @param message WebServerNetworkAccessControl message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IWebServerNetworkAccessControl, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified WebServerNetworkAccessControl message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.verify|verify} messages.
                             * @param message WebServerNetworkAccessControl message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IWebServerNetworkAccessControl, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a WebServerNetworkAccessControl message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns WebServerNetworkAccessControl
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl;

                            /**
                             * Decodes a WebServerNetworkAccessControl message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns WebServerNetworkAccessControl
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl;

                            /**
                             * Verifies a WebServerNetworkAccessControl message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a WebServerNetworkAccessControl message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns WebServerNetworkAccessControl
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl;

                            /**
                             * Creates a plain object from a WebServerNetworkAccessControl message. Also converts values to other types if specified.
                             * @param message WebServerNetworkAccessControl
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this WebServerNetworkAccessControl to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace WebServerNetworkAccessControl {

                            /** Properties of an AllowedIpRange. */
                            interface IAllowedIpRange {

                                /** AllowedIpRange value */
                                value?: (string|null);

                                /** AllowedIpRange description */
                                description?: (string|null);
                            }

                            /** Represents an AllowedIpRange. */
                            class AllowedIpRange implements IAllowedIpRange {

                                /**
                                 * Constructs a new AllowedIpRange.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.IAllowedIpRange);

                                /** AllowedIpRange value. */
                                public value: string;

                                /** AllowedIpRange description. */
                                public description: string;

                                /**
                                 * Creates a new AllowedIpRange instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns AllowedIpRange instance
                                 */
                                public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.IAllowedIpRange): google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.AllowedIpRange;

                                /**
                                 * Encodes the specified AllowedIpRange message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.AllowedIpRange.verify|verify} messages.
                                 * @param message AllowedIpRange message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.IAllowedIpRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified AllowedIpRange message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.AllowedIpRange.verify|verify} messages.
                                 * @param message AllowedIpRange message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.IAllowedIpRange, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an AllowedIpRange message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns AllowedIpRange
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.AllowedIpRange;

                                /**
                                 * Decodes an AllowedIpRange message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns AllowedIpRange
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.AllowedIpRange;

                                /**
                                 * Verifies an AllowedIpRange message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an AllowedIpRange message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns AllowedIpRange
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.AllowedIpRange;

                                /**
                                 * Creates a plain object from an AllowedIpRange message. Also converts values to other types if specified.
                                 * @param message AllowedIpRange
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.WebServerNetworkAccessControl.AllowedIpRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this AllowedIpRange to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }
                        }

                        /** Properties of a SoftwareConfig. */
                        interface ISoftwareConfig {

                            /** SoftwareConfig imageVersion */
                            imageVersion?: (string|null);

                            /** SoftwareConfig airflowConfigOverrides */
                            airflowConfigOverrides?: ({ [k: string]: string }|null);

                            /** SoftwareConfig pypiPackages */
                            pypiPackages?: ({ [k: string]: string }|null);

                            /** SoftwareConfig envVariables */
                            envVariables?: ({ [k: string]: string }|null);

                            /** SoftwareConfig pythonVersion */
                            pythonVersion?: (string|null);
                        }

                        /** Represents a SoftwareConfig. */
                        class SoftwareConfig implements ISoftwareConfig {

                            /**
                             * Constructs a new SoftwareConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.ISoftwareConfig);

                            /** SoftwareConfig imageVersion. */
                            public imageVersion: string;

                            /** SoftwareConfig airflowConfigOverrides. */
                            public airflowConfigOverrides: { [k: string]: string };

                            /** SoftwareConfig pypiPackages. */
                            public pypiPackages: { [k: string]: string };

                            /** SoftwareConfig envVariables. */
                            public envVariables: { [k: string]: string };

                            /** SoftwareConfig pythonVersion. */
                            public pythonVersion: string;

                            /**
                             * Creates a new SoftwareConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SoftwareConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.ISoftwareConfig): google.cloud.orchestration.airflow.service.v1beta1.SoftwareConfig;

                            /**
                             * Encodes the specified SoftwareConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.SoftwareConfig.verify|verify} messages.
                             * @param message SoftwareConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.ISoftwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SoftwareConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.SoftwareConfig.verify|verify} messages.
                             * @param message SoftwareConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.ISoftwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SoftwareConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SoftwareConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.SoftwareConfig;

                            /**
                             * Decodes a SoftwareConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SoftwareConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.SoftwareConfig;

                            /**
                             * Verifies a SoftwareConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SoftwareConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SoftwareConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.SoftwareConfig;

                            /**
                             * Creates a plain object from a SoftwareConfig message. Also converts values to other types if specified.
                             * @param message SoftwareConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.SoftwareConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SoftwareConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a IPAllocationPolicy. */
                        interface IIPAllocationPolicy {

                            /** IPAllocationPolicy useIpAliases */
                            useIpAliases?: (boolean|null);

                            /** IPAllocationPolicy clusterSecondaryRangeName */
                            clusterSecondaryRangeName?: (string|null);

                            /** IPAllocationPolicy servicesSecondaryRangeName */
                            servicesSecondaryRangeName?: (string|null);

                            /** IPAllocationPolicy clusterIpv4CidrBlock */
                            clusterIpv4CidrBlock?: (string|null);

                            /** IPAllocationPolicy servicesIpv4CidrBlock */
                            servicesIpv4CidrBlock?: (string|null);
                        }

                        /** Represents a IPAllocationPolicy. */
                        class IPAllocationPolicy implements IIPAllocationPolicy {

                            /**
                             * Constructs a new IPAllocationPolicy.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IIPAllocationPolicy);

                            /** IPAllocationPolicy useIpAliases. */
                            public useIpAliases: boolean;

                            /** IPAllocationPolicy clusterSecondaryRangeName. */
                            public clusterSecondaryRangeName: string;

                            /** IPAllocationPolicy servicesSecondaryRangeName. */
                            public servicesSecondaryRangeName: string;

                            /** IPAllocationPolicy clusterIpv4CidrBlock. */
                            public clusterIpv4CidrBlock: string;

                            /** IPAllocationPolicy servicesIpv4CidrBlock. */
                            public servicesIpv4CidrBlock: string;

                            /**
                             * Creates a new IPAllocationPolicy instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns IPAllocationPolicy instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IIPAllocationPolicy): google.cloud.orchestration.airflow.service.v1beta1.IPAllocationPolicy;

                            /**
                             * Encodes the specified IPAllocationPolicy message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.IPAllocationPolicy.verify|verify} messages.
                             * @param message IPAllocationPolicy message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IIPAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified IPAllocationPolicy message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.IPAllocationPolicy.verify|verify} messages.
                             * @param message IPAllocationPolicy message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IIPAllocationPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a IPAllocationPolicy message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns IPAllocationPolicy
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.IPAllocationPolicy;

                            /**
                             * Decodes a IPAllocationPolicy message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns IPAllocationPolicy
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.IPAllocationPolicy;

                            /**
                             * Verifies a IPAllocationPolicy message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a IPAllocationPolicy message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns IPAllocationPolicy
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.IPAllocationPolicy;

                            /**
                             * Creates a plain object from a IPAllocationPolicy message. Also converts values to other types if specified.
                             * @param message IPAllocationPolicy
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.IPAllocationPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this IPAllocationPolicy to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a NodeConfig. */
                        interface INodeConfig {

                            /** NodeConfig location */
                            location?: (string|null);

                            /** NodeConfig machineType */
                            machineType?: (string|null);

                            /** NodeConfig network */
                            network?: (string|null);

                            /** NodeConfig subnetwork */
                            subnetwork?: (string|null);

                            /** NodeConfig diskSizeGb */
                            diskSizeGb?: (number|null);

                            /** NodeConfig oauthScopes */
                            oauthScopes?: (string[]|null);

                            /** NodeConfig serviceAccount */
                            serviceAccount?: (string|null);

                            /** NodeConfig tags */
                            tags?: (string[]|null);

                            /** NodeConfig ipAllocationPolicy */
                            ipAllocationPolicy?: (google.cloud.orchestration.airflow.service.v1beta1.IIPAllocationPolicy|null);

                            /** NodeConfig maxPodsPerNode */
                            maxPodsPerNode?: (number|null);
                        }

                        /** Represents a NodeConfig. */
                        class NodeConfig implements INodeConfig {

                            /**
                             * Constructs a new NodeConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.INodeConfig);

                            /** NodeConfig location. */
                            public location: string;

                            /** NodeConfig machineType. */
                            public machineType: string;

                            /** NodeConfig network. */
                            public network: string;

                            /** NodeConfig subnetwork. */
                            public subnetwork: string;

                            /** NodeConfig diskSizeGb. */
                            public diskSizeGb: number;

                            /** NodeConfig oauthScopes. */
                            public oauthScopes: string[];

                            /** NodeConfig serviceAccount. */
                            public serviceAccount: string;

                            /** NodeConfig tags. */
                            public tags: string[];

                            /** NodeConfig ipAllocationPolicy. */
                            public ipAllocationPolicy?: (google.cloud.orchestration.airflow.service.v1beta1.IIPAllocationPolicy|null);

                            /** NodeConfig maxPodsPerNode. */
                            public maxPodsPerNode: number;

                            /**
                             * Creates a new NodeConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns NodeConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.INodeConfig): google.cloud.orchestration.airflow.service.v1beta1.NodeConfig;

                            /**
                             * Encodes the specified NodeConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.NodeConfig.verify|verify} messages.
                             * @param message NodeConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.INodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified NodeConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.NodeConfig.verify|verify} messages.
                             * @param message NodeConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.INodeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a NodeConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns NodeConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.NodeConfig;

                            /**
                             * Decodes a NodeConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns NodeConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.NodeConfig;

                            /**
                             * Verifies a NodeConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a NodeConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns NodeConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.NodeConfig;

                            /**
                             * Creates a plain object from a NodeConfig message. Also converts values to other types if specified.
                             * @param message NodeConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.NodeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this NodeConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PrivateClusterConfig. */
                        interface IPrivateClusterConfig {

                            /** PrivateClusterConfig enablePrivateEndpoint */
                            enablePrivateEndpoint?: (boolean|null);

                            /** PrivateClusterConfig masterIpv4CidrBlock */
                            masterIpv4CidrBlock?: (string|null);

                            /** PrivateClusterConfig masterIpv4ReservedRange */
                            masterIpv4ReservedRange?: (string|null);
                        }

                        /** Represents a PrivateClusterConfig. */
                        class PrivateClusterConfig implements IPrivateClusterConfig {

                            /**
                             * Constructs a new PrivateClusterConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IPrivateClusterConfig);

                            /** PrivateClusterConfig enablePrivateEndpoint. */
                            public enablePrivateEndpoint: boolean;

                            /** PrivateClusterConfig masterIpv4CidrBlock. */
                            public masterIpv4CidrBlock: string;

                            /** PrivateClusterConfig masterIpv4ReservedRange. */
                            public masterIpv4ReservedRange: string;

                            /**
                             * Creates a new PrivateClusterConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PrivateClusterConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IPrivateClusterConfig): google.cloud.orchestration.airflow.service.v1beta1.PrivateClusterConfig;

                            /**
                             * Encodes the specified PrivateClusterConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.PrivateClusterConfig.verify|verify} messages.
                             * @param message PrivateClusterConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IPrivateClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PrivateClusterConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.PrivateClusterConfig.verify|verify} messages.
                             * @param message PrivateClusterConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IPrivateClusterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PrivateClusterConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PrivateClusterConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.PrivateClusterConfig;

                            /**
                             * Decodes a PrivateClusterConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PrivateClusterConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.PrivateClusterConfig;

                            /**
                             * Verifies a PrivateClusterConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PrivateClusterConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PrivateClusterConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.PrivateClusterConfig;

                            /**
                             * Creates a plain object from a PrivateClusterConfig message. Also converts values to other types if specified.
                             * @param message PrivateClusterConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.PrivateClusterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PrivateClusterConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a PrivateEnvironmentConfig. */
                        interface IPrivateEnvironmentConfig {

                            /** PrivateEnvironmentConfig enablePrivateEnvironment */
                            enablePrivateEnvironment?: (boolean|null);

                            /** PrivateEnvironmentConfig privateClusterConfig */
                            privateClusterConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IPrivateClusterConfig|null);

                            /** PrivateEnvironmentConfig webServerIpv4CidrBlock */
                            webServerIpv4CidrBlock?: (string|null);

                            /** PrivateEnvironmentConfig cloudSqlIpv4CidrBlock */
                            cloudSqlIpv4CidrBlock?: (string|null);

                            /** PrivateEnvironmentConfig webServerIpv4ReservedRange */
                            webServerIpv4ReservedRange?: (string|null);

                            /** PrivateEnvironmentConfig cloudComposerNetworkIpv4CidrBlock */
                            cloudComposerNetworkIpv4CidrBlock?: (string|null);

                            /** PrivateEnvironmentConfig cloudComposerNetworkIpv4ReservedRange */
                            cloudComposerNetworkIpv4ReservedRange?: (string|null);
                        }

                        /** Represents a PrivateEnvironmentConfig. */
                        class PrivateEnvironmentConfig implements IPrivateEnvironmentConfig {

                            /**
                             * Constructs a new PrivateEnvironmentConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IPrivateEnvironmentConfig);

                            /** PrivateEnvironmentConfig enablePrivateEnvironment. */
                            public enablePrivateEnvironment: boolean;

                            /** PrivateEnvironmentConfig privateClusterConfig. */
                            public privateClusterConfig?: (google.cloud.orchestration.airflow.service.v1beta1.IPrivateClusterConfig|null);

                            /** PrivateEnvironmentConfig webServerIpv4CidrBlock. */
                            public webServerIpv4CidrBlock: string;

                            /** PrivateEnvironmentConfig cloudSqlIpv4CidrBlock. */
                            public cloudSqlIpv4CidrBlock: string;

                            /** PrivateEnvironmentConfig webServerIpv4ReservedRange. */
                            public webServerIpv4ReservedRange: string;

                            /** PrivateEnvironmentConfig cloudComposerNetworkIpv4CidrBlock. */
                            public cloudComposerNetworkIpv4CidrBlock: string;

                            /** PrivateEnvironmentConfig cloudComposerNetworkIpv4ReservedRange. */
                            public cloudComposerNetworkIpv4ReservedRange: string;

                            /**
                             * Creates a new PrivateEnvironmentConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns PrivateEnvironmentConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IPrivateEnvironmentConfig): google.cloud.orchestration.airflow.service.v1beta1.PrivateEnvironmentConfig;

                            /**
                             * Encodes the specified PrivateEnvironmentConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.PrivateEnvironmentConfig.verify|verify} messages.
                             * @param message PrivateEnvironmentConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IPrivateEnvironmentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified PrivateEnvironmentConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.PrivateEnvironmentConfig.verify|verify} messages.
                             * @param message PrivateEnvironmentConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IPrivateEnvironmentConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a PrivateEnvironmentConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns PrivateEnvironmentConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.PrivateEnvironmentConfig;

                            /**
                             * Decodes a PrivateEnvironmentConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns PrivateEnvironmentConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.PrivateEnvironmentConfig;

                            /**
                             * Verifies a PrivateEnvironmentConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a PrivateEnvironmentConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns PrivateEnvironmentConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.PrivateEnvironmentConfig;

                            /**
                             * Creates a plain object from a PrivateEnvironmentConfig message. Also converts values to other types if specified.
                             * @param message PrivateEnvironmentConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.PrivateEnvironmentConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this PrivateEnvironmentConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DatabaseConfig. */
                        interface IDatabaseConfig {

                            /** DatabaseConfig machineType */
                            machineType?: (string|null);
                        }

                        /** Represents a DatabaseConfig. */
                        class DatabaseConfig implements IDatabaseConfig {

                            /**
                             * Constructs a new DatabaseConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IDatabaseConfig);

                            /** DatabaseConfig machineType. */
                            public machineType: string;

                            /**
                             * Creates a new DatabaseConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DatabaseConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IDatabaseConfig): google.cloud.orchestration.airflow.service.v1beta1.DatabaseConfig;

                            /**
                             * Encodes the specified DatabaseConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.DatabaseConfig.verify|verify} messages.
                             * @param message DatabaseConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IDatabaseConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DatabaseConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.DatabaseConfig.verify|verify} messages.
                             * @param message DatabaseConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IDatabaseConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DatabaseConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DatabaseConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.DatabaseConfig;

                            /**
                             * Decodes a DatabaseConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DatabaseConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.DatabaseConfig;

                            /**
                             * Verifies a DatabaseConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DatabaseConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DatabaseConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.DatabaseConfig;

                            /**
                             * Creates a plain object from a DatabaseConfig message. Also converts values to other types if specified.
                             * @param message DatabaseConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.DatabaseConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DatabaseConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a WebServerConfig. */
                        interface IWebServerConfig {

                            /** WebServerConfig machineType */
                            machineType?: (string|null);
                        }

                        /** Represents a WebServerConfig. */
                        class WebServerConfig implements IWebServerConfig {

                            /**
                             * Constructs a new WebServerConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IWebServerConfig);

                            /** WebServerConfig machineType. */
                            public machineType: string;

                            /**
                             * Creates a new WebServerConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns WebServerConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IWebServerConfig): google.cloud.orchestration.airflow.service.v1beta1.WebServerConfig;

                            /**
                             * Encodes the specified WebServerConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WebServerConfig.verify|verify} messages.
                             * @param message WebServerConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IWebServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified WebServerConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WebServerConfig.verify|verify} messages.
                             * @param message WebServerConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IWebServerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a WebServerConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns WebServerConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.WebServerConfig;

                            /**
                             * Decodes a WebServerConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns WebServerConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.WebServerConfig;

                            /**
                             * Verifies a WebServerConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a WebServerConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns WebServerConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.WebServerConfig;

                            /**
                             * Creates a plain object from a WebServerConfig message. Also converts values to other types if specified.
                             * @param message WebServerConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.WebServerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this WebServerConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an EncryptionConfig. */
                        interface IEncryptionConfig {

                            /** EncryptionConfig kmsKeyName */
                            kmsKeyName?: (string|null);
                        }

                        /** Represents an EncryptionConfig. */
                        class EncryptionConfig implements IEncryptionConfig {

                            /**
                             * Constructs a new EncryptionConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IEncryptionConfig);

                            /** EncryptionConfig kmsKeyName. */
                            public kmsKeyName: string;

                            /**
                             * Creates a new EncryptionConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns EncryptionConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IEncryptionConfig): google.cloud.orchestration.airflow.service.v1beta1.EncryptionConfig;

                            /**
                             * Encodes the specified EncryptionConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.EncryptionConfig.verify|verify} messages.
                             * @param message EncryptionConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified EncryptionConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.EncryptionConfig.verify|verify} messages.
                             * @param message EncryptionConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an EncryptionConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns EncryptionConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.EncryptionConfig;

                            /**
                             * Decodes an EncryptionConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns EncryptionConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.EncryptionConfig;

                            /**
                             * Verifies an EncryptionConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an EncryptionConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns EncryptionConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.EncryptionConfig;

                            /**
                             * Creates a plain object from an EncryptionConfig message. Also converts values to other types if specified.
                             * @param message EncryptionConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.EncryptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this EncryptionConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a MaintenanceWindow. */
                        interface IMaintenanceWindow {

                            /** MaintenanceWindow startTime */
                            startTime?: (google.protobuf.ITimestamp|null);

                            /** MaintenanceWindow endTime */
                            endTime?: (google.protobuf.ITimestamp|null);

                            /** MaintenanceWindow recurrence */
                            recurrence?: (string|null);
                        }

                        /** Represents a MaintenanceWindow. */
                        class MaintenanceWindow implements IMaintenanceWindow {

                            /**
                             * Constructs a new MaintenanceWindow.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IMaintenanceWindow);

                            /** MaintenanceWindow startTime. */
                            public startTime?: (google.protobuf.ITimestamp|null);

                            /** MaintenanceWindow endTime. */
                            public endTime?: (google.protobuf.ITimestamp|null);

                            /** MaintenanceWindow recurrence. */
                            public recurrence: string;

                            /**
                             * Creates a new MaintenanceWindow instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MaintenanceWindow instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IMaintenanceWindow): google.cloud.orchestration.airflow.service.v1beta1.MaintenanceWindow;

                            /**
                             * Encodes the specified MaintenanceWindow message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.MaintenanceWindow.verify|verify} messages.
                             * @param message MaintenanceWindow message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MaintenanceWindow message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.MaintenanceWindow.verify|verify} messages.
                             * @param message MaintenanceWindow message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MaintenanceWindow message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MaintenanceWindow
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.MaintenanceWindow;

                            /**
                             * Decodes a MaintenanceWindow message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MaintenanceWindow
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.MaintenanceWindow;

                            /**
                             * Verifies a MaintenanceWindow message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MaintenanceWindow message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MaintenanceWindow
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.MaintenanceWindow;

                            /**
                             * Creates a plain object from a MaintenanceWindow message. Also converts values to other types if specified.
                             * @param message MaintenanceWindow
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.MaintenanceWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MaintenanceWindow to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a WorkloadsConfig. */
                        interface IWorkloadsConfig {

                            /** WorkloadsConfig scheduler */
                            scheduler?: (google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.ISchedulerResource|null);

                            /** WorkloadsConfig webServer */
                            webServer?: (google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWebServerResource|null);

                            /** WorkloadsConfig worker */
                            worker?: (google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWorkerResource|null);
                        }

                        /** Represents a WorkloadsConfig. */
                        class WorkloadsConfig implements IWorkloadsConfig {

                            /**
                             * Constructs a new WorkloadsConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IWorkloadsConfig);

                            /** WorkloadsConfig scheduler. */
                            public scheduler?: (google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.ISchedulerResource|null);

                            /** WorkloadsConfig webServer. */
                            public webServer?: (google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWebServerResource|null);

                            /** WorkloadsConfig worker. */
                            public worker?: (google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWorkerResource|null);

                            /**
                             * Creates a new WorkloadsConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns WorkloadsConfig instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IWorkloadsConfig): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig;

                            /**
                             * Encodes the specified WorkloadsConfig message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.verify|verify} messages.
                             * @param message WorkloadsConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IWorkloadsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified WorkloadsConfig message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.verify|verify} messages.
                             * @param message WorkloadsConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IWorkloadsConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a WorkloadsConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns WorkloadsConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig;

                            /**
                             * Decodes a WorkloadsConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns WorkloadsConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig;

                            /**
                             * Verifies a WorkloadsConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a WorkloadsConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns WorkloadsConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig;

                            /**
                             * Creates a plain object from a WorkloadsConfig message. Also converts values to other types if specified.
                             * @param message WorkloadsConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this WorkloadsConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace WorkloadsConfig {

                            /** Properties of a SchedulerResource. */
                            interface ISchedulerResource {

                                /** SchedulerResource cpu */
                                cpu?: (number|null);

                                /** SchedulerResource memoryGb */
                                memoryGb?: (number|null);

                                /** SchedulerResource storageGb */
                                storageGb?: (number|null);

                                /** SchedulerResource count */
                                count?: (number|null);
                            }

                            /** Represents a SchedulerResource. */
                            class SchedulerResource implements ISchedulerResource {

                                /**
                                 * Constructs a new SchedulerResource.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.ISchedulerResource);

                                /** SchedulerResource cpu. */
                                public cpu: number;

                                /** SchedulerResource memoryGb. */
                                public memoryGb: number;

                                /** SchedulerResource storageGb. */
                                public storageGb: number;

                                /** SchedulerResource count. */
                                public count: number;

                                /**
                                 * Creates a new SchedulerResource instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns SchedulerResource instance
                                 */
                                public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.ISchedulerResource): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.SchedulerResource;

                                /**
                                 * Encodes the specified SchedulerResource message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.SchedulerResource.verify|verify} messages.
                                 * @param message SchedulerResource message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.ISchedulerResource, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified SchedulerResource message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.SchedulerResource.verify|verify} messages.
                                 * @param message SchedulerResource message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.ISchedulerResource, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a SchedulerResource message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns SchedulerResource
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.SchedulerResource;

                                /**
                                 * Decodes a SchedulerResource message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns SchedulerResource
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.SchedulerResource;

                                /**
                                 * Verifies a SchedulerResource message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a SchedulerResource message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns SchedulerResource
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.SchedulerResource;

                                /**
                                 * Creates a plain object from a SchedulerResource message. Also converts values to other types if specified.
                                 * @param message SchedulerResource
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.SchedulerResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this SchedulerResource to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a WebServerResource. */
                            interface IWebServerResource {

                                /** WebServerResource cpu */
                                cpu?: (number|null);

                                /** WebServerResource memoryGb */
                                memoryGb?: (number|null);

                                /** WebServerResource storageGb */
                                storageGb?: (number|null);
                            }

                            /** Represents a WebServerResource. */
                            class WebServerResource implements IWebServerResource {

                                /**
                                 * Constructs a new WebServerResource.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWebServerResource);

                                /** WebServerResource cpu. */
                                public cpu: number;

                                /** WebServerResource memoryGb. */
                                public memoryGb: number;

                                /** WebServerResource storageGb. */
                                public storageGb: number;

                                /**
                                 * Creates a new WebServerResource instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns WebServerResource instance
                                 */
                                public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWebServerResource): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WebServerResource;

                                /**
                                 * Encodes the specified WebServerResource message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WebServerResource.verify|verify} messages.
                                 * @param message WebServerResource message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWebServerResource, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified WebServerResource message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WebServerResource.verify|verify} messages.
                                 * @param message WebServerResource message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWebServerResource, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a WebServerResource message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns WebServerResource
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WebServerResource;

                                /**
                                 * Decodes a WebServerResource message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns WebServerResource
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WebServerResource;

                                /**
                                 * Verifies a WebServerResource message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a WebServerResource message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns WebServerResource
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WebServerResource;

                                /**
                                 * Creates a plain object from a WebServerResource message. Also converts values to other types if specified.
                                 * @param message WebServerResource
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WebServerResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this WebServerResource to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a WorkerResource. */
                            interface IWorkerResource {

                                /** WorkerResource cpu */
                                cpu?: (number|null);

                                /** WorkerResource memoryGb */
                                memoryGb?: (number|null);

                                /** WorkerResource storageGb */
                                storageGb?: (number|null);

                                /** WorkerResource minCount */
                                minCount?: (number|null);

                                /** WorkerResource maxCount */
                                maxCount?: (number|null);
                            }

                            /** Represents a WorkerResource. */
                            class WorkerResource implements IWorkerResource {

                                /**
                                 * Constructs a new WorkerResource.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWorkerResource);

                                /** WorkerResource cpu. */
                                public cpu: number;

                                /** WorkerResource memoryGb. */
                                public memoryGb: number;

                                /** WorkerResource storageGb. */
                                public storageGb: number;

                                /** WorkerResource minCount. */
                                public minCount: number;

                                /** WorkerResource maxCount. */
                                public maxCount: number;

                                /**
                                 * Creates a new WorkerResource instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns WorkerResource instance
                                 */
                                public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWorkerResource): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WorkerResource;

                                /**
                                 * Encodes the specified WorkerResource message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WorkerResource.verify|verify} messages.
                                 * @param message WorkerResource message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWorkerResource, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified WorkerResource message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WorkerResource.verify|verify} messages.
                                 * @param message WorkerResource message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.IWorkerResource, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a WorkerResource message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns WorkerResource
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WorkerResource;

                                /**
                                 * Decodes a WorkerResource message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns WorkerResource
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WorkerResource;

                                /**
                                 * Verifies a WorkerResource message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a WorkerResource message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns WorkerResource
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WorkerResource;

                                /**
                                 * Creates a plain object from a WorkerResource message. Also converts values to other types if specified.
                                 * @param message WorkerResource
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.WorkloadsConfig.WorkerResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this WorkerResource to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }
                        }

                        /** Properties of an Environment. */
                        interface IEnvironment {

                            /** Environment name */
                            name?: (string|null);

                            /** Environment config */
                            config?: (google.cloud.orchestration.airflow.service.v1beta1.IEnvironmentConfig|null);

                            /** Environment uuid */
                            uuid?: (string|null);

                            /** Environment state */
                            state?: (google.cloud.orchestration.airflow.service.v1beta1.Environment.State|keyof typeof google.cloud.orchestration.airflow.service.v1beta1.Environment.State|null);

                            /** Environment createTime */
                            createTime?: (google.protobuf.ITimestamp|null);

                            /** Environment updateTime */
                            updateTime?: (google.protobuf.ITimestamp|null);

                            /** Environment labels */
                            labels?: ({ [k: string]: string }|null);
                        }

                        /** Represents an Environment. */
                        class Environment implements IEnvironment {

                            /**
                             * Constructs a new Environment.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IEnvironment);

                            /** Environment name. */
                            public name: string;

                            /** Environment config. */
                            public config?: (google.cloud.orchestration.airflow.service.v1beta1.IEnvironmentConfig|null);

                            /** Environment uuid. */
                            public uuid: string;

                            /** Environment state. */
                            public state: (google.cloud.orchestration.airflow.service.v1beta1.Environment.State|keyof typeof google.cloud.orchestration.airflow.service.v1beta1.Environment.State);

                            /** Environment createTime. */
                            public createTime?: (google.protobuf.ITimestamp|null);

                            /** Environment updateTime. */
                            public updateTime?: (google.protobuf.ITimestamp|null);

                            /** Environment labels. */
                            public labels: { [k: string]: string };

                            /**
                             * Creates a new Environment instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Environment instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IEnvironment): google.cloud.orchestration.airflow.service.v1beta1.Environment;

                            /**
                             * Encodes the specified Environment message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.Environment.verify|verify} messages.
                             * @param message Environment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Environment message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.Environment.verify|verify} messages.
                             * @param message Environment message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Environment message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Environment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.Environment;

                            /**
                             * Decodes an Environment message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Environment
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.Environment;

                            /**
                             * Verifies an Environment message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Environment message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Environment
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.Environment;

                            /**
                             * Creates a plain object from an Environment message. Also converts values to other types if specified.
                             * @param message Environment
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.Environment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Environment to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace Environment {

                            /** State enum. */
                            enum State {
                                STATE_UNSPECIFIED = 0,
                                CREATING = 1,
                                RUNNING = 2,
                                UPDATING = 3,
                                DELETING = 4,
                                ERROR = 5
                            }
                        }

                        /** Properties of a CheckUpgradeRequest. */
                        interface ICheckUpgradeRequest {

                            /** CheckUpgradeRequest environment */
                            environment?: (string|null);

                            /** CheckUpgradeRequest imageVersion */
                            imageVersion?: (string|null);
                        }

                        /** Represents a CheckUpgradeRequest. */
                        class CheckUpgradeRequest implements ICheckUpgradeRequest {

                            /**
                             * Constructs a new CheckUpgradeRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.ICheckUpgradeRequest);

                            /** CheckUpgradeRequest environment. */
                            public environment: string;

                            /** CheckUpgradeRequest imageVersion. */
                            public imageVersion: string;

                            /**
                             * Creates a new CheckUpgradeRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CheckUpgradeRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.ICheckUpgradeRequest): google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeRequest;

                            /**
                             * Encodes the specified CheckUpgradeRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeRequest.verify|verify} messages.
                             * @param message CheckUpgradeRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.ICheckUpgradeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CheckUpgradeRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeRequest.verify|verify} messages.
                             * @param message CheckUpgradeRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.ICheckUpgradeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CheckUpgradeRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CheckUpgradeRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeRequest;

                            /**
                             * Decodes a CheckUpgradeRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CheckUpgradeRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeRequest;

                            /**
                             * Verifies a CheckUpgradeRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CheckUpgradeRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CheckUpgradeRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeRequest;

                            /**
                             * Creates a plain object from a CheckUpgradeRequest message. Also converts values to other types if specified.
                             * @param message CheckUpgradeRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CheckUpgradeRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a CheckUpgradeResponse. */
                        interface ICheckUpgradeResponse {

                            /** CheckUpgradeResponse buildLogUri */
                            buildLogUri?: (string|null);

                            /** CheckUpgradeResponse containsPypiModulesConflict */
                            containsPypiModulesConflict?: (google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse.ConflictResult|keyof typeof google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse.ConflictResult|null);

                            /** CheckUpgradeResponse pypiConflictBuildLogExtract */
                            pypiConflictBuildLogExtract?: (string|null);

                            /** CheckUpgradeResponse imageVersion */
                            imageVersion?: (string|null);

                            /** CheckUpgradeResponse pypiDependencies */
                            pypiDependencies?: ({ [k: string]: string }|null);
                        }

                        /** Represents a CheckUpgradeResponse. */
                        class CheckUpgradeResponse implements ICheckUpgradeResponse {

                            /**
                             * Constructs a new CheckUpgradeResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.ICheckUpgradeResponse);

                            /** CheckUpgradeResponse buildLogUri. */
                            public buildLogUri: string;

                            /** CheckUpgradeResponse containsPypiModulesConflict. */
                            public containsPypiModulesConflict: (google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse.ConflictResult|keyof typeof google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse.ConflictResult);

                            /** CheckUpgradeResponse pypiConflictBuildLogExtract. */
                            public pypiConflictBuildLogExtract: string;

                            /** CheckUpgradeResponse imageVersion. */
                            public imageVersion: string;

                            /** CheckUpgradeResponse pypiDependencies. */
                            public pypiDependencies: { [k: string]: string };

                            /**
                             * Creates a new CheckUpgradeResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CheckUpgradeResponse instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.ICheckUpgradeResponse): google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse;

                            /**
                             * Encodes the specified CheckUpgradeResponse message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse.verify|verify} messages.
                             * @param message CheckUpgradeResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.ICheckUpgradeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CheckUpgradeResponse message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse.verify|verify} messages.
                             * @param message CheckUpgradeResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.ICheckUpgradeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CheckUpgradeResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CheckUpgradeResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse;

                            /**
                             * Decodes a CheckUpgradeResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CheckUpgradeResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse;

                            /**
                             * Verifies a CheckUpgradeResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CheckUpgradeResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CheckUpgradeResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse;

                            /**
                             * Creates a plain object from a CheckUpgradeResponse message. Also converts values to other types if specified.
                             * @param message CheckUpgradeResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.CheckUpgradeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CheckUpgradeResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace CheckUpgradeResponse {

                            /** ConflictResult enum. */
                            enum ConflictResult {
                                CONFLICT_RESULT_UNSPECIFIED = 0,
                                CONFLICT = 1,
                                NO_CONFLICT = 2
                            }
                        }

                        /** Represents an ImageVersions */
                        class ImageVersions extends $protobuf.rpc.Service {

                            /**
                             * Constructs a new ImageVersions service.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             */
                            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                            /**
                             * Creates new ImageVersions service using the specified rpc implementation.
                             * @param rpcImpl RPC implementation
                             * @param [requestDelimited=false] Whether requests are length-delimited
                             * @param [responseDelimited=false] Whether responses are length-delimited
                             * @returns RPC service. Useful where requests and/or responses are streamed.
                             */
                            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ImageVersions;

                            /**
                             * Calls ListImageVersions.
                             * @param request ListImageVersionsRequest message or plain object
                             * @param callback Node-style callback called with the error, if any, and ListImageVersionsResponse
                             */
                            public listImageVersions(request: google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest, callback: google.cloud.orchestration.airflow.service.v1beta1.ImageVersions.ListImageVersionsCallback): void;

                            /**
                             * Calls ListImageVersions.
                             * @param request ListImageVersionsRequest message or plain object
                             * @returns Promise
                             */
                            public listImageVersions(request: google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest): Promise<google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsResponse>;
                        }

                        namespace ImageVersions {

                            /**
                             * Callback as used by {@link google.cloud.orchestration.airflow.service.v1beta1.ImageVersions#listImageVersions}.
                             * @param error Error, if any
                             * @param [response] ListImageVersionsResponse
                             */
                            type ListImageVersionsCallback = (error: (Error|null), response?: google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsResponse) => void;
                        }

                        /** Properties of a ListImageVersionsRequest. */
                        interface IListImageVersionsRequest {

                            /** ListImageVersionsRequest parent */
                            parent?: (string|null);

                            /** ListImageVersionsRequest pageSize */
                            pageSize?: (number|null);

                            /** ListImageVersionsRequest pageToken */
                            pageToken?: (string|null);

                            /** ListImageVersionsRequest includePastReleases */
                            includePastReleases?: (boolean|null);
                        }

                        /** Represents a ListImageVersionsRequest. */
                        class ListImageVersionsRequest implements IListImageVersionsRequest {

                            /**
                             * Constructs a new ListImageVersionsRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest);

                            /** ListImageVersionsRequest parent. */
                            public parent: string;

                            /** ListImageVersionsRequest pageSize. */
                            public pageSize: number;

                            /** ListImageVersionsRequest pageToken. */
                            public pageToken: string;

                            /** ListImageVersionsRequest includePastReleases. */
                            public includePastReleases: boolean;

                            /**
                             * Creates a new ListImageVersionsRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListImageVersionsRequest instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest): google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest;

                            /**
                             * Encodes the specified ListImageVersionsRequest message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest.verify|verify} messages.
                             * @param message ListImageVersionsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListImageVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest.verify|verify} messages.
                             * @param message ListImageVersionsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListImageVersionsRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListImageVersionsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest;

                            /**
                             * Decodes a ListImageVersionsRequest message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListImageVersionsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest;

                            /**
                             * Verifies a ListImageVersionsRequest message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListImageVersionsRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListImageVersionsRequest
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest;

                            /**
                             * Creates a plain object from a ListImageVersionsRequest message. Also converts values to other types if specified.
                             * @param message ListImageVersionsRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListImageVersionsRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ListImageVersionsResponse. */
                        interface IListImageVersionsResponse {

                            /** ListImageVersionsResponse imageVersions */
                            imageVersions?: (google.cloud.orchestration.airflow.service.v1beta1.IImageVersion[]|null);

                            /** ListImageVersionsResponse nextPageToken */
                            nextPageToken?: (string|null);
                        }

                        /** Represents a ListImageVersionsResponse. */
                        class ListImageVersionsResponse implements IListImageVersionsResponse {

                            /**
                             * Constructs a new ListImageVersionsResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsResponse);

                            /** ListImageVersionsResponse imageVersions. */
                            public imageVersions: google.cloud.orchestration.airflow.service.v1beta1.IImageVersion[];

                            /** ListImageVersionsResponse nextPageToken. */
                            public nextPageToken: string;

                            /**
                             * Creates a new ListImageVersionsResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ListImageVersionsResponse instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsResponse): google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsResponse;

                            /**
                             * Encodes the specified ListImageVersionsResponse message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsResponse.verify|verify} messages.
                             * @param message ListImageVersionsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ListImageVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsResponse.verify|verify} messages.
                             * @param message ListImageVersionsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IListImageVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ListImageVersionsResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ListImageVersionsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsResponse;

                            /**
                             * Decodes a ListImageVersionsResponse message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ListImageVersionsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsResponse;

                            /**
                             * Verifies a ListImageVersionsResponse message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ListImageVersionsResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ListImageVersionsResponse
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsResponse;

                            /**
                             * Creates a plain object from a ListImageVersionsResponse message. Also converts values to other types if specified.
                             * @param message ListImageVersionsResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.ListImageVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ListImageVersionsResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an ImageVersion. */
                        interface IImageVersion {

                            /** ImageVersion imageVersionId */
                            imageVersionId?: (string|null);

                            /** ImageVersion isDefault */
                            isDefault?: (boolean|null);

                            /** ImageVersion supportedPythonVersions */
                            supportedPythonVersions?: (string[]|null);

                            /** ImageVersion releaseDate */
                            releaseDate?: (google.type.IDate|null);

                            /** ImageVersion creationDisabled */
                            creationDisabled?: (boolean|null);

                            /** ImageVersion upgradeDisabled */
                            upgradeDisabled?: (boolean|null);
                        }

                        /** Represents an ImageVersion. */
                        class ImageVersion implements IImageVersion {

                            /**
                             * Constructs a new ImageVersion.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IImageVersion);

                            /** ImageVersion imageVersionId. */
                            public imageVersionId: string;

                            /** ImageVersion isDefault. */
                            public isDefault: boolean;

                            /** ImageVersion supportedPythonVersions. */
                            public supportedPythonVersions: string[];

                            /** ImageVersion releaseDate. */
                            public releaseDate?: (google.type.IDate|null);

                            /** ImageVersion creationDisabled. */
                            public creationDisabled: boolean;

                            /** ImageVersion upgradeDisabled. */
                            public upgradeDisabled: boolean;

                            /**
                             * Creates a new ImageVersion instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ImageVersion instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IImageVersion): google.cloud.orchestration.airflow.service.v1beta1.ImageVersion;

                            /**
                             * Encodes the specified ImageVersion message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.ImageVersion.verify|verify} messages.
                             * @param message ImageVersion message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IImageVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ImageVersion message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.ImageVersion.verify|verify} messages.
                             * @param message ImageVersion message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IImageVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an ImageVersion message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ImageVersion
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.ImageVersion;

                            /**
                             * Decodes an ImageVersion message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ImageVersion
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.ImageVersion;

                            /**
                             * Verifies an ImageVersion message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an ImageVersion message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ImageVersion
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.ImageVersion;

                            /**
                             * Creates a plain object from an ImageVersion message. Also converts values to other types if specified.
                             * @param message ImageVersion
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.ImageVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ImageVersion to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an OperationMetadata. */
                        interface IOperationMetadata {

                            /** OperationMetadata state */
                            state?: (google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata.State|keyof typeof google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata.State|null);

                            /** OperationMetadata operationType */
                            operationType?: (google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata.Type|keyof typeof google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata.Type|null);

                            /** OperationMetadata resource */
                            resource?: (string|null);

                            /** OperationMetadata resourceUuid */
                            resourceUuid?: (string|null);

                            /** OperationMetadata createTime */
                            createTime?: (google.protobuf.ITimestamp|null);

                            /** OperationMetadata endTime */
                            endTime?: (google.protobuf.ITimestamp|null);
                        }

                        /** Represents an OperationMetadata. */
                        class OperationMetadata implements IOperationMetadata {

                            /**
                             * Constructs a new OperationMetadata.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.orchestration.airflow.service.v1beta1.IOperationMetadata);

                            /** OperationMetadata state. */
                            public state: (google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata.State|keyof typeof google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata.State);

                            /** OperationMetadata operationType. */
                            public operationType: (google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata.Type|keyof typeof google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata.Type);

                            /** OperationMetadata resource. */
                            public resource: string;

                            /** OperationMetadata resourceUuid. */
                            public resourceUuid: string;

                            /** OperationMetadata createTime. */
                            public createTime?: (google.protobuf.ITimestamp|null);

                            /** OperationMetadata endTime. */
                            public endTime?: (google.protobuf.ITimestamp|null);

                            /**
                             * Creates a new OperationMetadata instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns OperationMetadata instance
                             */
                            public static create(properties?: google.cloud.orchestration.airflow.service.v1beta1.IOperationMetadata): google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata;

                            /**
                             * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata.verify|verify} messages.
                             * @param message OperationMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.orchestration.airflow.service.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata.verify|verify} messages.
                             * @param message OperationMetadata message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.orchestration.airflow.service.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an OperationMetadata message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns OperationMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata;

                            /**
                             * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns OperationMetadata
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata;

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
                            public static fromObject(object: { [k: string]: any }): google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata;

                            /**
                             * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                             * @param message OperationMetadata
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.orchestration.airflow.service.v1beta1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this OperationMetadata to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace OperationMetadata {

                            /** State enum. */
                            enum State {
                                STATE_UNSPECIFIED = 0,
                                PENDING = 1,
                                RUNNING = 2,
                                SUCCESSFUL = 3,
                                FAILED = 4
                            }

                            /** Type enum. */
                            enum Type {
                                TYPE_UNSPECIFIED = 0,
                                CREATE = 1,
                                DELETE = 2,
                                UPDATE = 3,
                                CHECK = 4
                            }
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
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
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
        }
    }
}
