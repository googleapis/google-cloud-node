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

        /** Namespace apigeeregistry. */
        namespace apigeeregistry {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a Provisioning */
                class Provisioning extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Provisioning service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Provisioning service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Provisioning;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createInstance(request: google.cloud.apigeeregistry.v1.ICreateInstanceRequest, callback: google.cloud.apigeeregistry.v1.Provisioning.CreateInstanceCallback): void;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public createInstance(request: google.cloud.apigeeregistry.v1.ICreateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteInstance(request: google.cloud.apigeeregistry.v1.IDeleteInstanceRequest, callback: google.cloud.apigeeregistry.v1.Provisioning.DeleteInstanceCallback): void;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteInstance(request: google.cloud.apigeeregistry.v1.IDeleteInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public getInstance(request: google.cloud.apigeeregistry.v1.IGetInstanceRequest, callback: google.cloud.apigeeregistry.v1.Provisioning.GetInstanceCallback): void;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstance(request: google.cloud.apigeeregistry.v1.IGetInstanceRequest): Promise<google.cloud.apigeeregistry.v1.Instance>;
                }

                namespace Provisioning {

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Provisioning|createInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Provisioning|deleteInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Provisioning|getInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type GetInstanceCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.Instance) => void;
                }

                /** Properties of a CreateInstanceRequest. */
                interface ICreateInstanceRequest {

                    /** CreateInstanceRequest parent */
                    parent?: (string|null);

                    /** CreateInstanceRequest instanceId */
                    instanceId?: (string|null);

                    /** CreateInstanceRequest instance */
                    instance?: (google.cloud.apigeeregistry.v1.IInstance|null);
                }

                /** Represents a CreateInstanceRequest. */
                class CreateInstanceRequest implements ICreateInstanceRequest {

                    /**
                     * Constructs a new CreateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.ICreateInstanceRequest);

                    /** CreateInstanceRequest parent. */
                    public parent: string;

                    /** CreateInstanceRequest instanceId. */
                    public instanceId: string;

                    /** CreateInstanceRequest instance. */
                    public instance?: (google.cloud.apigeeregistry.v1.IInstance|null);

                    /**
                     * Creates a new CreateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.ICreateInstanceRequest): google.cloud.apigeeregistry.v1.CreateInstanceRequest;

                    /**
                     * Encodes the specified CreateInstanceRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.CreateInstanceRequest;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.CreateInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.CreateInstanceRequest;

                    /**
                     * Creates a plain object from a CreateInstanceRequest message. Also converts values to other types if specified.
                     * @param message CreateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.CreateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a DeleteInstanceRequest. */
                interface IDeleteInstanceRequest {

                    /** DeleteInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteInstanceRequest. */
                class DeleteInstanceRequest implements IDeleteInstanceRequest {

                    /**
                     * Constructs a new DeleteInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IDeleteInstanceRequest);

                    /** DeleteInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IDeleteInstanceRequest): google.cloud.apigeeregistry.v1.DeleteInstanceRequest;

                    /**
                     * Encodes the specified DeleteInstanceRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.DeleteInstanceRequest;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.DeleteInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.DeleteInstanceRequest;

                    /**
                     * Creates a plain object from a DeleteInstanceRequest message. Also converts values to other types if specified.
                     * @param message DeleteInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.DeleteInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.apigeeregistry.v1.IGetInstanceRequest);

                    /** GetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IGetInstanceRequest): google.cloud.apigeeregistry.v1.GetInstanceRequest;

                    /**
                     * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.GetInstanceRequest;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.GetInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.GetInstanceRequest;

                    /**
                     * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** OperationMetadata cancellationRequested */
                    cancellationRequested?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IOperationMetadata);

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

                    /** OperationMetadata cancellationRequested. */
                    public cancellationRequested: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IOperationMetadata): google.cloud.apigeeregistry.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.apigeeregistry.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of an Instance. */
                interface IInstance {

                    /** Instance name */
                    name?: (string|null);

                    /** Instance createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance state */
                    state?: (google.cloud.apigeeregistry.v1.Instance.State|keyof typeof google.cloud.apigeeregistry.v1.Instance.State|null);

                    /** Instance stateMessage */
                    stateMessage?: (string|null);

                    /** Instance config */
                    config?: (google.cloud.apigeeregistry.v1.Instance.IConfig|null);
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IInstance);

                    /** Instance name. */
                    public name: string;

                    /** Instance createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance state. */
                    public state: (google.cloud.apigeeregistry.v1.Instance.State|keyof typeof google.cloud.apigeeregistry.v1.Instance.State);

                    /** Instance stateMessage. */
                    public stateMessage: string;

                    /** Instance config. */
                    public config?: (google.cloud.apigeeregistry.v1.Instance.IConfig|null);

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IInstance): google.cloud.apigeeregistry.v1.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.apigeeregistry.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.Instance;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        INACTIVE = 1,
                        CREATING = 2,
                        ACTIVE = 3,
                        UPDATING = 4,
                        DELETING = 5,
                        FAILED = 6
                    }

                    /** Properties of a Config. */
                    interface IConfig {

                        /** Config location */
                        location?: (string|null);

                        /** Config cmekKeyName */
                        cmekKeyName?: (string|null);
                    }

                    /** Represents a Config. */
                    class Config implements IConfig {

                        /**
                         * Constructs a new Config.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.apigeeregistry.v1.Instance.IConfig);

                        /** Config location. */
                        public location: string;

                        /** Config cmekKeyName. */
                        public cmekKeyName: string;

                        /**
                         * Creates a new Config instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Config instance
                         */
                        public static create(properties?: google.cloud.apigeeregistry.v1.Instance.IConfig): google.cloud.apigeeregistry.v1.Instance.Config;

                        /**
                         * Encodes the specified Config message. Does not implicitly {@link google.cloud.apigeeregistry.v1.Instance.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.apigeeregistry.v1.Instance.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Config message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.Instance.Config.verify|verify} messages.
                         * @param message Config message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.apigeeregistry.v1.Instance.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Config message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.Instance.Config;

                        /**
                         * Decodes a Config message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Config
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.Instance.Config;

                        /**
                         * Verifies a Config message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Config message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Config
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.Instance.Config;

                        /**
                         * Creates a plain object from a Config message. Also converts values to other types if specified.
                         * @param message Config
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.apigeeregistry.v1.Instance.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Config to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Config
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of an Api. */
                interface IApi {

                    /** Api name */
                    name?: (string|null);

                    /** Api displayName */
                    displayName?: (string|null);

                    /** Api description */
                    description?: (string|null);

                    /** Api createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Api updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Api availability */
                    availability?: (string|null);

                    /** Api recommendedVersion */
                    recommendedVersion?: (string|null);

                    /** Api recommendedDeployment */
                    recommendedDeployment?: (string|null);

                    /** Api labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Api annotations */
                    annotations?: ({ [k: string]: string }|null);
                }

                /** Represents an Api. */
                class Api implements IApi {

                    /**
                     * Constructs a new Api.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IApi);

                    /** Api name. */
                    public name: string;

                    /** Api displayName. */
                    public displayName: string;

                    /** Api description. */
                    public description: string;

                    /** Api createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Api updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Api availability. */
                    public availability: string;

                    /** Api recommendedVersion. */
                    public recommendedVersion: string;

                    /** Api recommendedDeployment. */
                    public recommendedDeployment: string;

                    /** Api labels. */
                    public labels: { [k: string]: string };

                    /** Api annotations. */
                    public annotations: { [k: string]: string };

                    /**
                     * Creates a new Api instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Api instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IApi): google.cloud.apigeeregistry.v1.Api;

                    /**
                     * Encodes the specified Api message. Does not implicitly {@link google.cloud.apigeeregistry.v1.Api.verify|verify} messages.
                     * @param message Api message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IApi, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Api message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.Api.verify|verify} messages.
                     * @param message Api message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IApi, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Api message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Api
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.Api;

                    /**
                     * Decodes an Api message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Api
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.Api;

                    /**
                     * Verifies an Api message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Api message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Api
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.Api;

                    /**
                     * Creates a plain object from an Api message. Also converts values to other types if specified.
                     * @param message Api
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.Api, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Api to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Api
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ApiVersion. */
                interface IApiVersion {

                    /** ApiVersion name */
                    name?: (string|null);

                    /** ApiVersion displayName */
                    displayName?: (string|null);

                    /** ApiVersion description */
                    description?: (string|null);

                    /** ApiVersion createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ApiVersion updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ApiVersion state */
                    state?: (string|null);

                    /** ApiVersion labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ApiVersion annotations */
                    annotations?: ({ [k: string]: string }|null);
                }

                /** Represents an ApiVersion. */
                class ApiVersion implements IApiVersion {

                    /**
                     * Constructs a new ApiVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IApiVersion);

                    /** ApiVersion name. */
                    public name: string;

                    /** ApiVersion displayName. */
                    public displayName: string;

                    /** ApiVersion description. */
                    public description: string;

                    /** ApiVersion createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ApiVersion updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ApiVersion state. */
                    public state: string;

                    /** ApiVersion labels. */
                    public labels: { [k: string]: string };

                    /** ApiVersion annotations. */
                    public annotations: { [k: string]: string };

                    /**
                     * Creates a new ApiVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApiVersion instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IApiVersion): google.cloud.apigeeregistry.v1.ApiVersion;

                    /**
                     * Encodes the specified ApiVersion message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ApiVersion.verify|verify} messages.
                     * @param message ApiVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IApiVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApiVersion message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ApiVersion.verify|verify} messages.
                     * @param message ApiVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IApiVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApiVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApiVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ApiVersion;

                    /**
                     * Decodes an ApiVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApiVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ApiVersion;

                    /**
                     * Verifies an ApiVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApiVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApiVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ApiVersion;

                    /**
                     * Creates a plain object from an ApiVersion message. Also converts values to other types if specified.
                     * @param message ApiVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ApiVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApiVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ApiVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ApiSpec. */
                interface IApiSpec {

                    /** ApiSpec name */
                    name?: (string|null);

                    /** ApiSpec filename */
                    filename?: (string|null);

                    /** ApiSpec description */
                    description?: (string|null);

                    /** ApiSpec revisionId */
                    revisionId?: (string|null);

                    /** ApiSpec createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ApiSpec revisionCreateTime */
                    revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** ApiSpec revisionUpdateTime */
                    revisionUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** ApiSpec mimeType */
                    mimeType?: (string|null);

                    /** ApiSpec sizeBytes */
                    sizeBytes?: (number|null);

                    /** ApiSpec hash */
                    hash?: (string|null);

                    /** ApiSpec sourceUri */
                    sourceUri?: (string|null);

                    /** ApiSpec contents */
                    contents?: (Uint8Array|Buffer|string|null);

                    /** ApiSpec labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ApiSpec annotations */
                    annotations?: ({ [k: string]: string }|null);
                }

                /** Represents an ApiSpec. */
                class ApiSpec implements IApiSpec {

                    /**
                     * Constructs a new ApiSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IApiSpec);

                    /** ApiSpec name. */
                    public name: string;

                    /** ApiSpec filename. */
                    public filename: string;

                    /** ApiSpec description. */
                    public description: string;

                    /** ApiSpec revisionId. */
                    public revisionId: string;

                    /** ApiSpec createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ApiSpec revisionCreateTime. */
                    public revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** ApiSpec revisionUpdateTime. */
                    public revisionUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** ApiSpec mimeType. */
                    public mimeType: string;

                    /** ApiSpec sizeBytes. */
                    public sizeBytes: number;

                    /** ApiSpec hash. */
                    public hash: string;

                    /** ApiSpec sourceUri. */
                    public sourceUri: string;

                    /** ApiSpec contents. */
                    public contents: (Uint8Array|Buffer|string);

                    /** ApiSpec labels. */
                    public labels: { [k: string]: string };

                    /** ApiSpec annotations. */
                    public annotations: { [k: string]: string };

                    /**
                     * Creates a new ApiSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApiSpec instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IApiSpec): google.cloud.apigeeregistry.v1.ApiSpec;

                    /**
                     * Encodes the specified ApiSpec message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ApiSpec.verify|verify} messages.
                     * @param message ApiSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IApiSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApiSpec message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ApiSpec.verify|verify} messages.
                     * @param message ApiSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IApiSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApiSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApiSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ApiSpec;

                    /**
                     * Decodes an ApiSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApiSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ApiSpec;

                    /**
                     * Verifies an ApiSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApiSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApiSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ApiSpec;

                    /**
                     * Creates a plain object from an ApiSpec message. Also converts values to other types if specified.
                     * @param message ApiSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ApiSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApiSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ApiSpec
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ApiDeployment. */
                interface IApiDeployment {

                    /** ApiDeployment name */
                    name?: (string|null);

                    /** ApiDeployment displayName */
                    displayName?: (string|null);

                    /** ApiDeployment description */
                    description?: (string|null);

                    /** ApiDeployment revisionId */
                    revisionId?: (string|null);

                    /** ApiDeployment createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ApiDeployment revisionCreateTime */
                    revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** ApiDeployment revisionUpdateTime */
                    revisionUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** ApiDeployment apiSpecRevision */
                    apiSpecRevision?: (string|null);

                    /** ApiDeployment endpointUri */
                    endpointUri?: (string|null);

                    /** ApiDeployment externalChannelUri */
                    externalChannelUri?: (string|null);

                    /** ApiDeployment intendedAudience */
                    intendedAudience?: (string|null);

                    /** ApiDeployment accessGuidance */
                    accessGuidance?: (string|null);

                    /** ApiDeployment labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ApiDeployment annotations */
                    annotations?: ({ [k: string]: string }|null);
                }

                /** Represents an ApiDeployment. */
                class ApiDeployment implements IApiDeployment {

                    /**
                     * Constructs a new ApiDeployment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IApiDeployment);

                    /** ApiDeployment name. */
                    public name: string;

                    /** ApiDeployment displayName. */
                    public displayName: string;

                    /** ApiDeployment description. */
                    public description: string;

                    /** ApiDeployment revisionId. */
                    public revisionId: string;

                    /** ApiDeployment createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ApiDeployment revisionCreateTime. */
                    public revisionCreateTime?: (google.protobuf.ITimestamp|null);

                    /** ApiDeployment revisionUpdateTime. */
                    public revisionUpdateTime?: (google.protobuf.ITimestamp|null);

                    /** ApiDeployment apiSpecRevision. */
                    public apiSpecRevision: string;

                    /** ApiDeployment endpointUri. */
                    public endpointUri: string;

                    /** ApiDeployment externalChannelUri. */
                    public externalChannelUri: string;

                    /** ApiDeployment intendedAudience. */
                    public intendedAudience: string;

                    /** ApiDeployment accessGuidance. */
                    public accessGuidance: string;

                    /** ApiDeployment labels. */
                    public labels: { [k: string]: string };

                    /** ApiDeployment annotations. */
                    public annotations: { [k: string]: string };

                    /**
                     * Creates a new ApiDeployment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ApiDeployment instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IApiDeployment): google.cloud.apigeeregistry.v1.ApiDeployment;

                    /**
                     * Encodes the specified ApiDeployment message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ApiDeployment.verify|verify} messages.
                     * @param message ApiDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IApiDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ApiDeployment message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ApiDeployment.verify|verify} messages.
                     * @param message ApiDeployment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IApiDeployment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ApiDeployment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ApiDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ApiDeployment;

                    /**
                     * Decodes an ApiDeployment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ApiDeployment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ApiDeployment;

                    /**
                     * Verifies an ApiDeployment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ApiDeployment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ApiDeployment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ApiDeployment;

                    /**
                     * Creates a plain object from an ApiDeployment message. Also converts values to other types if specified.
                     * @param message ApiDeployment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ApiDeployment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ApiDeployment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ApiDeployment
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Artifact. */
                interface IArtifact {

                    /** Artifact name */
                    name?: (string|null);

                    /** Artifact createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Artifact updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Artifact mimeType */
                    mimeType?: (string|null);

                    /** Artifact sizeBytes */
                    sizeBytes?: (number|null);

                    /** Artifact hash */
                    hash?: (string|null);

                    /** Artifact contents */
                    contents?: (Uint8Array|Buffer|string|null);
                }

                /** Represents an Artifact. */
                class Artifact implements IArtifact {

                    /**
                     * Constructs a new Artifact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IArtifact);

                    /** Artifact name. */
                    public name: string;

                    /** Artifact createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Artifact updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Artifact mimeType. */
                    public mimeType: string;

                    /** Artifact sizeBytes. */
                    public sizeBytes: number;

                    /** Artifact hash. */
                    public hash: string;

                    /** Artifact contents. */
                    public contents: (Uint8Array|Buffer|string);

                    /**
                     * Creates a new Artifact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Artifact instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IArtifact): google.cloud.apigeeregistry.v1.Artifact;

                    /**
                     * Encodes the specified Artifact message. Does not implicitly {@link google.cloud.apigeeregistry.v1.Artifact.verify|verify} messages.
                     * @param message Artifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Artifact message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.Artifact.verify|verify} messages.
                     * @param message Artifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Artifact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Artifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.Artifact;

                    /**
                     * Decodes an Artifact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Artifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.Artifact;

                    /**
                     * Verifies an Artifact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Artifact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Artifact
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.Artifact;

                    /**
                     * Creates a plain object from an Artifact message. Also converts values to other types if specified.
                     * @param message Artifact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.Artifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Artifact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Artifact
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents a Registry */
                class Registry extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new Registry service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new Registry service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Registry;

                    /**
                     * Calls ListApis.
                     * @param request ListApisRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListApisResponse
                     */
                    public listApis(request: google.cloud.apigeeregistry.v1.IListApisRequest, callback: google.cloud.apigeeregistry.v1.Registry.ListApisCallback): void;

                    /**
                     * Calls ListApis.
                     * @param request ListApisRequest message or plain object
                     * @returns Promise
                     */
                    public listApis(request: google.cloud.apigeeregistry.v1.IListApisRequest): Promise<google.cloud.apigeeregistry.v1.ListApisResponse>;

                    /**
                     * Calls GetApi.
                     * @param request GetApiRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Api
                     */
                    public getApi(request: google.cloud.apigeeregistry.v1.IGetApiRequest, callback: google.cloud.apigeeregistry.v1.Registry.GetApiCallback): void;

                    /**
                     * Calls GetApi.
                     * @param request GetApiRequest message or plain object
                     * @returns Promise
                     */
                    public getApi(request: google.cloud.apigeeregistry.v1.IGetApiRequest): Promise<google.cloud.apigeeregistry.v1.Api>;

                    /**
                     * Calls CreateApi.
                     * @param request CreateApiRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Api
                     */
                    public createApi(request: google.cloud.apigeeregistry.v1.ICreateApiRequest, callback: google.cloud.apigeeregistry.v1.Registry.CreateApiCallback): void;

                    /**
                     * Calls CreateApi.
                     * @param request CreateApiRequest message or plain object
                     * @returns Promise
                     */
                    public createApi(request: google.cloud.apigeeregistry.v1.ICreateApiRequest): Promise<google.cloud.apigeeregistry.v1.Api>;

                    /**
                     * Calls UpdateApi.
                     * @param request UpdateApiRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Api
                     */
                    public updateApi(request: google.cloud.apigeeregistry.v1.IUpdateApiRequest, callback: google.cloud.apigeeregistry.v1.Registry.UpdateApiCallback): void;

                    /**
                     * Calls UpdateApi.
                     * @param request UpdateApiRequest message or plain object
                     * @returns Promise
                     */
                    public updateApi(request: google.cloud.apigeeregistry.v1.IUpdateApiRequest): Promise<google.cloud.apigeeregistry.v1.Api>;

                    /**
                     * Calls DeleteApi.
                     * @param request DeleteApiRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteApi(request: google.cloud.apigeeregistry.v1.IDeleteApiRequest, callback: google.cloud.apigeeregistry.v1.Registry.DeleteApiCallback): void;

                    /**
                     * Calls DeleteApi.
                     * @param request DeleteApiRequest message or plain object
                     * @returns Promise
                     */
                    public deleteApi(request: google.cloud.apigeeregistry.v1.IDeleteApiRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListApiVersions.
                     * @param request ListApiVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListApiVersionsResponse
                     */
                    public listApiVersions(request: google.cloud.apigeeregistry.v1.IListApiVersionsRequest, callback: google.cloud.apigeeregistry.v1.Registry.ListApiVersionsCallback): void;

                    /**
                     * Calls ListApiVersions.
                     * @param request ListApiVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listApiVersions(request: google.cloud.apigeeregistry.v1.IListApiVersionsRequest): Promise<google.cloud.apigeeregistry.v1.ListApiVersionsResponse>;

                    /**
                     * Calls GetApiVersion.
                     * @param request GetApiVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiVersion
                     */
                    public getApiVersion(request: google.cloud.apigeeregistry.v1.IGetApiVersionRequest, callback: google.cloud.apigeeregistry.v1.Registry.GetApiVersionCallback): void;

                    /**
                     * Calls GetApiVersion.
                     * @param request GetApiVersionRequest message or plain object
                     * @returns Promise
                     */
                    public getApiVersion(request: google.cloud.apigeeregistry.v1.IGetApiVersionRequest): Promise<google.cloud.apigeeregistry.v1.ApiVersion>;

                    /**
                     * Calls CreateApiVersion.
                     * @param request CreateApiVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiVersion
                     */
                    public createApiVersion(request: google.cloud.apigeeregistry.v1.ICreateApiVersionRequest, callback: google.cloud.apigeeregistry.v1.Registry.CreateApiVersionCallback): void;

                    /**
                     * Calls CreateApiVersion.
                     * @param request CreateApiVersionRequest message or plain object
                     * @returns Promise
                     */
                    public createApiVersion(request: google.cloud.apigeeregistry.v1.ICreateApiVersionRequest): Promise<google.cloud.apigeeregistry.v1.ApiVersion>;

                    /**
                     * Calls UpdateApiVersion.
                     * @param request UpdateApiVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiVersion
                     */
                    public updateApiVersion(request: google.cloud.apigeeregistry.v1.IUpdateApiVersionRequest, callback: google.cloud.apigeeregistry.v1.Registry.UpdateApiVersionCallback): void;

                    /**
                     * Calls UpdateApiVersion.
                     * @param request UpdateApiVersionRequest message or plain object
                     * @returns Promise
                     */
                    public updateApiVersion(request: google.cloud.apigeeregistry.v1.IUpdateApiVersionRequest): Promise<google.cloud.apigeeregistry.v1.ApiVersion>;

                    /**
                     * Calls DeleteApiVersion.
                     * @param request DeleteApiVersionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteApiVersion(request: google.cloud.apigeeregistry.v1.IDeleteApiVersionRequest, callback: google.cloud.apigeeregistry.v1.Registry.DeleteApiVersionCallback): void;

                    /**
                     * Calls DeleteApiVersion.
                     * @param request DeleteApiVersionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteApiVersion(request: google.cloud.apigeeregistry.v1.IDeleteApiVersionRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListApiSpecs.
                     * @param request ListApiSpecsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListApiSpecsResponse
                     */
                    public listApiSpecs(request: google.cloud.apigeeregistry.v1.IListApiSpecsRequest, callback: google.cloud.apigeeregistry.v1.Registry.ListApiSpecsCallback): void;

                    /**
                     * Calls ListApiSpecs.
                     * @param request ListApiSpecsRequest message or plain object
                     * @returns Promise
                     */
                    public listApiSpecs(request: google.cloud.apigeeregistry.v1.IListApiSpecsRequest): Promise<google.cloud.apigeeregistry.v1.ListApiSpecsResponse>;

                    /**
                     * Calls GetApiSpec.
                     * @param request GetApiSpecRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiSpec
                     */
                    public getApiSpec(request: google.cloud.apigeeregistry.v1.IGetApiSpecRequest, callback: google.cloud.apigeeregistry.v1.Registry.GetApiSpecCallback): void;

                    /**
                     * Calls GetApiSpec.
                     * @param request GetApiSpecRequest message or plain object
                     * @returns Promise
                     */
                    public getApiSpec(request: google.cloud.apigeeregistry.v1.IGetApiSpecRequest): Promise<google.cloud.apigeeregistry.v1.ApiSpec>;

                    /**
                     * Calls GetApiSpecContents.
                     * @param request GetApiSpecContentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and HttpBody
                     */
                    public getApiSpecContents(request: google.cloud.apigeeregistry.v1.IGetApiSpecContentsRequest, callback: google.cloud.apigeeregistry.v1.Registry.GetApiSpecContentsCallback): void;

                    /**
                     * Calls GetApiSpecContents.
                     * @param request GetApiSpecContentsRequest message or plain object
                     * @returns Promise
                     */
                    public getApiSpecContents(request: google.cloud.apigeeregistry.v1.IGetApiSpecContentsRequest): Promise<google.api.HttpBody>;

                    /**
                     * Calls CreateApiSpec.
                     * @param request CreateApiSpecRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiSpec
                     */
                    public createApiSpec(request: google.cloud.apigeeregistry.v1.ICreateApiSpecRequest, callback: google.cloud.apigeeregistry.v1.Registry.CreateApiSpecCallback): void;

                    /**
                     * Calls CreateApiSpec.
                     * @param request CreateApiSpecRequest message or plain object
                     * @returns Promise
                     */
                    public createApiSpec(request: google.cloud.apigeeregistry.v1.ICreateApiSpecRequest): Promise<google.cloud.apigeeregistry.v1.ApiSpec>;

                    /**
                     * Calls UpdateApiSpec.
                     * @param request UpdateApiSpecRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiSpec
                     */
                    public updateApiSpec(request: google.cloud.apigeeregistry.v1.IUpdateApiSpecRequest, callback: google.cloud.apigeeregistry.v1.Registry.UpdateApiSpecCallback): void;

                    /**
                     * Calls UpdateApiSpec.
                     * @param request UpdateApiSpecRequest message or plain object
                     * @returns Promise
                     */
                    public updateApiSpec(request: google.cloud.apigeeregistry.v1.IUpdateApiSpecRequest): Promise<google.cloud.apigeeregistry.v1.ApiSpec>;

                    /**
                     * Calls DeleteApiSpec.
                     * @param request DeleteApiSpecRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteApiSpec(request: google.cloud.apigeeregistry.v1.IDeleteApiSpecRequest, callback: google.cloud.apigeeregistry.v1.Registry.DeleteApiSpecCallback): void;

                    /**
                     * Calls DeleteApiSpec.
                     * @param request DeleteApiSpecRequest message or plain object
                     * @returns Promise
                     */
                    public deleteApiSpec(request: google.cloud.apigeeregistry.v1.IDeleteApiSpecRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls TagApiSpecRevision.
                     * @param request TagApiSpecRevisionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiSpec
                     */
                    public tagApiSpecRevision(request: google.cloud.apigeeregistry.v1.ITagApiSpecRevisionRequest, callback: google.cloud.apigeeregistry.v1.Registry.TagApiSpecRevisionCallback): void;

                    /**
                     * Calls TagApiSpecRevision.
                     * @param request TagApiSpecRevisionRequest message or plain object
                     * @returns Promise
                     */
                    public tagApiSpecRevision(request: google.cloud.apigeeregistry.v1.ITagApiSpecRevisionRequest): Promise<google.cloud.apigeeregistry.v1.ApiSpec>;

                    /**
                     * Calls ListApiSpecRevisions.
                     * @param request ListApiSpecRevisionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListApiSpecRevisionsResponse
                     */
                    public listApiSpecRevisions(request: google.cloud.apigeeregistry.v1.IListApiSpecRevisionsRequest, callback: google.cloud.apigeeregistry.v1.Registry.ListApiSpecRevisionsCallback): void;

                    /**
                     * Calls ListApiSpecRevisions.
                     * @param request ListApiSpecRevisionsRequest message or plain object
                     * @returns Promise
                     */
                    public listApiSpecRevisions(request: google.cloud.apigeeregistry.v1.IListApiSpecRevisionsRequest): Promise<google.cloud.apigeeregistry.v1.ListApiSpecRevisionsResponse>;

                    /**
                     * Calls RollbackApiSpec.
                     * @param request RollbackApiSpecRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiSpec
                     */
                    public rollbackApiSpec(request: google.cloud.apigeeregistry.v1.IRollbackApiSpecRequest, callback: google.cloud.apigeeregistry.v1.Registry.RollbackApiSpecCallback): void;

                    /**
                     * Calls RollbackApiSpec.
                     * @param request RollbackApiSpecRequest message or plain object
                     * @returns Promise
                     */
                    public rollbackApiSpec(request: google.cloud.apigeeregistry.v1.IRollbackApiSpecRequest): Promise<google.cloud.apigeeregistry.v1.ApiSpec>;

                    /**
                     * Calls DeleteApiSpecRevision.
                     * @param request DeleteApiSpecRevisionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiSpec
                     */
                    public deleteApiSpecRevision(request: google.cloud.apigeeregistry.v1.IDeleteApiSpecRevisionRequest, callback: google.cloud.apigeeregistry.v1.Registry.DeleteApiSpecRevisionCallback): void;

                    /**
                     * Calls DeleteApiSpecRevision.
                     * @param request DeleteApiSpecRevisionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteApiSpecRevision(request: google.cloud.apigeeregistry.v1.IDeleteApiSpecRevisionRequest): Promise<google.cloud.apigeeregistry.v1.ApiSpec>;

                    /**
                     * Calls ListApiDeployments.
                     * @param request ListApiDeploymentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListApiDeploymentsResponse
                     */
                    public listApiDeployments(request: google.cloud.apigeeregistry.v1.IListApiDeploymentsRequest, callback: google.cloud.apigeeregistry.v1.Registry.ListApiDeploymentsCallback): void;

                    /**
                     * Calls ListApiDeployments.
                     * @param request ListApiDeploymentsRequest message or plain object
                     * @returns Promise
                     */
                    public listApiDeployments(request: google.cloud.apigeeregistry.v1.IListApiDeploymentsRequest): Promise<google.cloud.apigeeregistry.v1.ListApiDeploymentsResponse>;

                    /**
                     * Calls GetApiDeployment.
                     * @param request GetApiDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiDeployment
                     */
                    public getApiDeployment(request: google.cloud.apigeeregistry.v1.IGetApiDeploymentRequest, callback: google.cloud.apigeeregistry.v1.Registry.GetApiDeploymentCallback): void;

                    /**
                     * Calls GetApiDeployment.
                     * @param request GetApiDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public getApiDeployment(request: google.cloud.apigeeregistry.v1.IGetApiDeploymentRequest): Promise<google.cloud.apigeeregistry.v1.ApiDeployment>;

                    /**
                     * Calls CreateApiDeployment.
                     * @param request CreateApiDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiDeployment
                     */
                    public createApiDeployment(request: google.cloud.apigeeregistry.v1.ICreateApiDeploymentRequest, callback: google.cloud.apigeeregistry.v1.Registry.CreateApiDeploymentCallback): void;

                    /**
                     * Calls CreateApiDeployment.
                     * @param request CreateApiDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public createApiDeployment(request: google.cloud.apigeeregistry.v1.ICreateApiDeploymentRequest): Promise<google.cloud.apigeeregistry.v1.ApiDeployment>;

                    /**
                     * Calls UpdateApiDeployment.
                     * @param request UpdateApiDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiDeployment
                     */
                    public updateApiDeployment(request: google.cloud.apigeeregistry.v1.IUpdateApiDeploymentRequest, callback: google.cloud.apigeeregistry.v1.Registry.UpdateApiDeploymentCallback): void;

                    /**
                     * Calls UpdateApiDeployment.
                     * @param request UpdateApiDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public updateApiDeployment(request: google.cloud.apigeeregistry.v1.IUpdateApiDeploymentRequest): Promise<google.cloud.apigeeregistry.v1.ApiDeployment>;

                    /**
                     * Calls DeleteApiDeployment.
                     * @param request DeleteApiDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteApiDeployment(request: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRequest, callback: google.cloud.apigeeregistry.v1.Registry.DeleteApiDeploymentCallback): void;

                    /**
                     * Calls DeleteApiDeployment.
                     * @param request DeleteApiDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public deleteApiDeployment(request: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls TagApiDeploymentRevision.
                     * @param request TagApiDeploymentRevisionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiDeployment
                     */
                    public tagApiDeploymentRevision(request: google.cloud.apigeeregistry.v1.ITagApiDeploymentRevisionRequest, callback: google.cloud.apigeeregistry.v1.Registry.TagApiDeploymentRevisionCallback): void;

                    /**
                     * Calls TagApiDeploymentRevision.
                     * @param request TagApiDeploymentRevisionRequest message or plain object
                     * @returns Promise
                     */
                    public tagApiDeploymentRevision(request: google.cloud.apigeeregistry.v1.ITagApiDeploymentRevisionRequest): Promise<google.cloud.apigeeregistry.v1.ApiDeployment>;

                    /**
                     * Calls ListApiDeploymentRevisions.
                     * @param request ListApiDeploymentRevisionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListApiDeploymentRevisionsResponse
                     */
                    public listApiDeploymentRevisions(request: google.cloud.apigeeregistry.v1.IListApiDeploymentRevisionsRequest, callback: google.cloud.apigeeregistry.v1.Registry.ListApiDeploymentRevisionsCallback): void;

                    /**
                     * Calls ListApiDeploymentRevisions.
                     * @param request ListApiDeploymentRevisionsRequest message or plain object
                     * @returns Promise
                     */
                    public listApiDeploymentRevisions(request: google.cloud.apigeeregistry.v1.IListApiDeploymentRevisionsRequest): Promise<google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsResponse>;

                    /**
                     * Calls RollbackApiDeployment.
                     * @param request RollbackApiDeploymentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiDeployment
                     */
                    public rollbackApiDeployment(request: google.cloud.apigeeregistry.v1.IRollbackApiDeploymentRequest, callback: google.cloud.apigeeregistry.v1.Registry.RollbackApiDeploymentCallback): void;

                    /**
                     * Calls RollbackApiDeployment.
                     * @param request RollbackApiDeploymentRequest message or plain object
                     * @returns Promise
                     */
                    public rollbackApiDeployment(request: google.cloud.apigeeregistry.v1.IRollbackApiDeploymentRequest): Promise<google.cloud.apigeeregistry.v1.ApiDeployment>;

                    /**
                     * Calls DeleteApiDeploymentRevision.
                     * @param request DeleteApiDeploymentRevisionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ApiDeployment
                     */
                    public deleteApiDeploymentRevision(request: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRevisionRequest, callback: google.cloud.apigeeregistry.v1.Registry.DeleteApiDeploymentRevisionCallback): void;

                    /**
                     * Calls DeleteApiDeploymentRevision.
                     * @param request DeleteApiDeploymentRevisionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteApiDeploymentRevision(request: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRevisionRequest): Promise<google.cloud.apigeeregistry.v1.ApiDeployment>;

                    /**
                     * Calls ListArtifacts.
                     * @param request ListArtifactsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListArtifactsResponse
                     */
                    public listArtifacts(request: google.cloud.apigeeregistry.v1.IListArtifactsRequest, callback: google.cloud.apigeeregistry.v1.Registry.ListArtifactsCallback): void;

                    /**
                     * Calls ListArtifacts.
                     * @param request ListArtifactsRequest message or plain object
                     * @returns Promise
                     */
                    public listArtifacts(request: google.cloud.apigeeregistry.v1.IListArtifactsRequest): Promise<google.cloud.apigeeregistry.v1.ListArtifactsResponse>;

                    /**
                     * Calls GetArtifact.
                     * @param request GetArtifactRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Artifact
                     */
                    public getArtifact(request: google.cloud.apigeeregistry.v1.IGetArtifactRequest, callback: google.cloud.apigeeregistry.v1.Registry.GetArtifactCallback): void;

                    /**
                     * Calls GetArtifact.
                     * @param request GetArtifactRequest message or plain object
                     * @returns Promise
                     */
                    public getArtifact(request: google.cloud.apigeeregistry.v1.IGetArtifactRequest): Promise<google.cloud.apigeeregistry.v1.Artifact>;

                    /**
                     * Calls GetArtifactContents.
                     * @param request GetArtifactContentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and HttpBody
                     */
                    public getArtifactContents(request: google.cloud.apigeeregistry.v1.IGetArtifactContentsRequest, callback: google.cloud.apigeeregistry.v1.Registry.GetArtifactContentsCallback): void;

                    /**
                     * Calls GetArtifactContents.
                     * @param request GetArtifactContentsRequest message or plain object
                     * @returns Promise
                     */
                    public getArtifactContents(request: google.cloud.apigeeregistry.v1.IGetArtifactContentsRequest): Promise<google.api.HttpBody>;

                    /**
                     * Calls CreateArtifact.
                     * @param request CreateArtifactRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Artifact
                     */
                    public createArtifact(request: google.cloud.apigeeregistry.v1.ICreateArtifactRequest, callback: google.cloud.apigeeregistry.v1.Registry.CreateArtifactCallback): void;

                    /**
                     * Calls CreateArtifact.
                     * @param request CreateArtifactRequest message or plain object
                     * @returns Promise
                     */
                    public createArtifact(request: google.cloud.apigeeregistry.v1.ICreateArtifactRequest): Promise<google.cloud.apigeeregistry.v1.Artifact>;

                    /**
                     * Calls ReplaceArtifact.
                     * @param request ReplaceArtifactRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Artifact
                     */
                    public replaceArtifact(request: google.cloud.apigeeregistry.v1.IReplaceArtifactRequest, callback: google.cloud.apigeeregistry.v1.Registry.ReplaceArtifactCallback): void;

                    /**
                     * Calls ReplaceArtifact.
                     * @param request ReplaceArtifactRequest message or plain object
                     * @returns Promise
                     */
                    public replaceArtifact(request: google.cloud.apigeeregistry.v1.IReplaceArtifactRequest): Promise<google.cloud.apigeeregistry.v1.Artifact>;

                    /**
                     * Calls DeleteArtifact.
                     * @param request DeleteArtifactRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteArtifact(request: google.cloud.apigeeregistry.v1.IDeleteArtifactRequest, callback: google.cloud.apigeeregistry.v1.Registry.DeleteArtifactCallback): void;

                    /**
                     * Calls DeleteArtifact.
                     * @param request DeleteArtifactRequest message or plain object
                     * @returns Promise
                     */
                    public deleteArtifact(request: google.cloud.apigeeregistry.v1.IDeleteArtifactRequest): Promise<google.protobuf.Empty>;
                }

                namespace Registry {

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|listApis}.
                     * @param error Error, if any
                     * @param [response] ListApisResponse
                     */
                    type ListApisCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ListApisResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|getApi}.
                     * @param error Error, if any
                     * @param [response] Api
                     */
                    type GetApiCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.Api) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|createApi}.
                     * @param error Error, if any
                     * @param [response] Api
                     */
                    type CreateApiCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.Api) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|updateApi}.
                     * @param error Error, if any
                     * @param [response] Api
                     */
                    type UpdateApiCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.Api) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|deleteApi}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteApiCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|listApiVersions}.
                     * @param error Error, if any
                     * @param [response] ListApiVersionsResponse
                     */
                    type ListApiVersionsCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ListApiVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|getApiVersion}.
                     * @param error Error, if any
                     * @param [response] ApiVersion
                     */
                    type GetApiVersionCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|createApiVersion}.
                     * @param error Error, if any
                     * @param [response] ApiVersion
                     */
                    type CreateApiVersionCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|updateApiVersion}.
                     * @param error Error, if any
                     * @param [response] ApiVersion
                     */
                    type UpdateApiVersionCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiVersion) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|deleteApiVersion}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteApiVersionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|listApiSpecs}.
                     * @param error Error, if any
                     * @param [response] ListApiSpecsResponse
                     */
                    type ListApiSpecsCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ListApiSpecsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|getApiSpec}.
                     * @param error Error, if any
                     * @param [response] ApiSpec
                     */
                    type GetApiSpecCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiSpec) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|getApiSpecContents}.
                     * @param error Error, if any
                     * @param [response] HttpBody
                     */
                    type GetApiSpecContentsCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|createApiSpec}.
                     * @param error Error, if any
                     * @param [response] ApiSpec
                     */
                    type CreateApiSpecCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiSpec) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|updateApiSpec}.
                     * @param error Error, if any
                     * @param [response] ApiSpec
                     */
                    type UpdateApiSpecCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiSpec) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|deleteApiSpec}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteApiSpecCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|tagApiSpecRevision}.
                     * @param error Error, if any
                     * @param [response] ApiSpec
                     */
                    type TagApiSpecRevisionCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiSpec) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|listApiSpecRevisions}.
                     * @param error Error, if any
                     * @param [response] ListApiSpecRevisionsResponse
                     */
                    type ListApiSpecRevisionsCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ListApiSpecRevisionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|rollbackApiSpec}.
                     * @param error Error, if any
                     * @param [response] ApiSpec
                     */
                    type RollbackApiSpecCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiSpec) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|deleteApiSpecRevision}.
                     * @param error Error, if any
                     * @param [response] ApiSpec
                     */
                    type DeleteApiSpecRevisionCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiSpec) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|listApiDeployments}.
                     * @param error Error, if any
                     * @param [response] ListApiDeploymentsResponse
                     */
                    type ListApiDeploymentsCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ListApiDeploymentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|getApiDeployment}.
                     * @param error Error, if any
                     * @param [response] ApiDeployment
                     */
                    type GetApiDeploymentCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|createApiDeployment}.
                     * @param error Error, if any
                     * @param [response] ApiDeployment
                     */
                    type CreateApiDeploymentCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|updateApiDeployment}.
                     * @param error Error, if any
                     * @param [response] ApiDeployment
                     */
                    type UpdateApiDeploymentCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|deleteApiDeployment}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteApiDeploymentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|tagApiDeploymentRevision}.
                     * @param error Error, if any
                     * @param [response] ApiDeployment
                     */
                    type TagApiDeploymentRevisionCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|listApiDeploymentRevisions}.
                     * @param error Error, if any
                     * @param [response] ListApiDeploymentRevisionsResponse
                     */
                    type ListApiDeploymentRevisionsCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|rollbackApiDeployment}.
                     * @param error Error, if any
                     * @param [response] ApiDeployment
                     */
                    type RollbackApiDeploymentCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|deleteApiDeploymentRevision}.
                     * @param error Error, if any
                     * @param [response] ApiDeployment
                     */
                    type DeleteApiDeploymentRevisionCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ApiDeployment) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|listArtifacts}.
                     * @param error Error, if any
                     * @param [response] ListArtifactsResponse
                     */
                    type ListArtifactsCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.ListArtifactsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|getArtifact}.
                     * @param error Error, if any
                     * @param [response] Artifact
                     */
                    type GetArtifactCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.Artifact) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|getArtifactContents}.
                     * @param error Error, if any
                     * @param [response] HttpBody
                     */
                    type GetArtifactContentsCallback = (error: (Error|null), response?: google.api.HttpBody) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|createArtifact}.
                     * @param error Error, if any
                     * @param [response] Artifact
                     */
                    type CreateArtifactCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.Artifact) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|replaceArtifact}.
                     * @param error Error, if any
                     * @param [response] Artifact
                     */
                    type ReplaceArtifactCallback = (error: (Error|null), response?: google.cloud.apigeeregistry.v1.Artifact) => void;

                    /**
                     * Callback as used by {@link google.cloud.apigeeregistry.v1.Registry|deleteArtifact}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteArtifactCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a ListApisRequest. */
                interface IListApisRequest {

                    /** ListApisRequest parent */
                    parent?: (string|null);

                    /** ListApisRequest pageSize */
                    pageSize?: (number|null);

                    /** ListApisRequest pageToken */
                    pageToken?: (string|null);

                    /** ListApisRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListApisRequest. */
                class ListApisRequest implements IListApisRequest {

                    /**
                     * Constructs a new ListApisRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApisRequest);

                    /** ListApisRequest parent. */
                    public parent: string;

                    /** ListApisRequest pageSize. */
                    public pageSize: number;

                    /** ListApisRequest pageToken. */
                    public pageToken: string;

                    /** ListApisRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListApisRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApisRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApisRequest): google.cloud.apigeeregistry.v1.ListApisRequest;

                    /**
                     * Encodes the specified ListApisRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApisRequest.verify|verify} messages.
                     * @param message ListApisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApisRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApisRequest.verify|verify} messages.
                     * @param message ListApisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApisRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApisRequest;

                    /**
                     * Decodes a ListApisRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApisRequest;

                    /**
                     * Verifies a ListApisRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApisRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApisRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApisRequest;

                    /**
                     * Creates a plain object from a ListApisRequest message. Also converts values to other types if specified.
                     * @param message ListApisRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApisRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApisRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApisResponse. */
                interface IListApisResponse {

                    /** ListApisResponse apis */
                    apis?: (google.cloud.apigeeregistry.v1.IApi[]|null);

                    /** ListApisResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListApisResponse. */
                class ListApisResponse implements IListApisResponse {

                    /**
                     * Constructs a new ListApisResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApisResponse);

                    /** ListApisResponse apis. */
                    public apis: google.cloud.apigeeregistry.v1.IApi[];

                    /** ListApisResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListApisResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApisResponse instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApisResponse): google.cloud.apigeeregistry.v1.ListApisResponse;

                    /**
                     * Encodes the specified ListApisResponse message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApisResponse.verify|verify} messages.
                     * @param message ListApisResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApisResponse message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApisResponse.verify|verify} messages.
                     * @param message ListApisResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApisResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApisResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApisResponse;

                    /**
                     * Decodes a ListApisResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApisResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApisResponse;

                    /**
                     * Verifies a ListApisResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApisResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApisResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApisResponse;

                    /**
                     * Creates a plain object from a ListApisResponse message. Also converts values to other types if specified.
                     * @param message ListApisResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApisResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApisResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApisResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetApiRequest. */
                interface IGetApiRequest {

                    /** GetApiRequest name */
                    name?: (string|null);
                }

                /** Represents a GetApiRequest. */
                class GetApiRequest implements IGetApiRequest {

                    /**
                     * Constructs a new GetApiRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IGetApiRequest);

                    /** GetApiRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetApiRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetApiRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IGetApiRequest): google.cloud.apigeeregistry.v1.GetApiRequest;

                    /**
                     * Encodes the specified GetApiRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetApiRequest.verify|verify} messages.
                     * @param message GetApiRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IGetApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetApiRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetApiRequest.verify|verify} messages.
                     * @param message GetApiRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IGetApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetApiRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetApiRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.GetApiRequest;

                    /**
                     * Decodes a GetApiRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetApiRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.GetApiRequest;

                    /**
                     * Verifies a GetApiRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetApiRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetApiRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.GetApiRequest;

                    /**
                     * Creates a plain object from a GetApiRequest message. Also converts values to other types if specified.
                     * @param message GetApiRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.GetApiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetApiRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetApiRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateApiRequest. */
                interface ICreateApiRequest {

                    /** CreateApiRequest parent */
                    parent?: (string|null);

                    /** CreateApiRequest api */
                    api?: (google.cloud.apigeeregistry.v1.IApi|null);

                    /** CreateApiRequest apiId */
                    apiId?: (string|null);
                }

                /** Represents a CreateApiRequest. */
                class CreateApiRequest implements ICreateApiRequest {

                    /**
                     * Constructs a new CreateApiRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.ICreateApiRequest);

                    /** CreateApiRequest parent. */
                    public parent: string;

                    /** CreateApiRequest api. */
                    public api?: (google.cloud.apigeeregistry.v1.IApi|null);

                    /** CreateApiRequest apiId. */
                    public apiId: string;

                    /**
                     * Creates a new CreateApiRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateApiRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.ICreateApiRequest): google.cloud.apigeeregistry.v1.CreateApiRequest;

                    /**
                     * Encodes the specified CreateApiRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateApiRequest.verify|verify} messages.
                     * @param message CreateApiRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.ICreateApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateApiRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateApiRequest.verify|verify} messages.
                     * @param message CreateApiRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.ICreateApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateApiRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateApiRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.CreateApiRequest;

                    /**
                     * Decodes a CreateApiRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateApiRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.CreateApiRequest;

                    /**
                     * Verifies a CreateApiRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateApiRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateApiRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.CreateApiRequest;

                    /**
                     * Creates a plain object from a CreateApiRequest message. Also converts values to other types if specified.
                     * @param message CreateApiRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.CreateApiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateApiRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateApiRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateApiRequest. */
                interface IUpdateApiRequest {

                    /** UpdateApiRequest api */
                    api?: (google.cloud.apigeeregistry.v1.IApi|null);

                    /** UpdateApiRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateApiRequest allowMissing */
                    allowMissing?: (boolean|null);
                }

                /** Represents an UpdateApiRequest. */
                class UpdateApiRequest implements IUpdateApiRequest {

                    /**
                     * Constructs a new UpdateApiRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IUpdateApiRequest);

                    /** UpdateApiRequest api. */
                    public api?: (google.cloud.apigeeregistry.v1.IApi|null);

                    /** UpdateApiRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateApiRequest allowMissing. */
                    public allowMissing: boolean;

                    /**
                     * Creates a new UpdateApiRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateApiRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IUpdateApiRequest): google.cloud.apigeeregistry.v1.UpdateApiRequest;

                    /**
                     * Encodes the specified UpdateApiRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.UpdateApiRequest.verify|verify} messages.
                     * @param message UpdateApiRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IUpdateApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateApiRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.UpdateApiRequest.verify|verify} messages.
                     * @param message UpdateApiRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IUpdateApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateApiRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateApiRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.UpdateApiRequest;

                    /**
                     * Decodes an UpdateApiRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateApiRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.UpdateApiRequest;

                    /**
                     * Verifies an UpdateApiRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateApiRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateApiRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.UpdateApiRequest;

                    /**
                     * Creates a plain object from an UpdateApiRequest message. Also converts values to other types if specified.
                     * @param message UpdateApiRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.UpdateApiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateApiRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateApiRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteApiRequest. */
                interface IDeleteApiRequest {

                    /** DeleteApiRequest name */
                    name?: (string|null);

                    /** DeleteApiRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteApiRequest. */
                class DeleteApiRequest implements IDeleteApiRequest {

                    /**
                     * Constructs a new DeleteApiRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IDeleteApiRequest);

                    /** DeleteApiRequest name. */
                    public name: string;

                    /** DeleteApiRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteApiRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteApiRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IDeleteApiRequest): google.cloud.apigeeregistry.v1.DeleteApiRequest;

                    /**
                     * Encodes the specified DeleteApiRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiRequest.verify|verify} messages.
                     * @param message DeleteApiRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IDeleteApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteApiRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiRequest.verify|verify} messages.
                     * @param message DeleteApiRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IDeleteApiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteApiRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteApiRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.DeleteApiRequest;

                    /**
                     * Decodes a DeleteApiRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteApiRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.DeleteApiRequest;

                    /**
                     * Verifies a DeleteApiRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteApiRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteApiRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.DeleteApiRequest;

                    /**
                     * Creates a plain object from a DeleteApiRequest message. Also converts values to other types if specified.
                     * @param message DeleteApiRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.DeleteApiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteApiRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteApiRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApiVersionsRequest. */
                interface IListApiVersionsRequest {

                    /** ListApiVersionsRequest parent */
                    parent?: (string|null);

                    /** ListApiVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListApiVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListApiVersionsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListApiVersionsRequest. */
                class ListApiVersionsRequest implements IListApiVersionsRequest {

                    /**
                     * Constructs a new ListApiVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApiVersionsRequest);

                    /** ListApiVersionsRequest parent. */
                    public parent: string;

                    /** ListApiVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListApiVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListApiVersionsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListApiVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApiVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApiVersionsRequest): google.cloud.apigeeregistry.v1.ListApiVersionsRequest;

                    /**
                     * Encodes the specified ListApiVersionsRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiVersionsRequest.verify|verify} messages.
                     * @param message ListApiVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApiVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApiVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiVersionsRequest.verify|verify} messages.
                     * @param message ListApiVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApiVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApiVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApiVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApiVersionsRequest;

                    /**
                     * Decodes a ListApiVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApiVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApiVersionsRequest;

                    /**
                     * Verifies a ListApiVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApiVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApiVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApiVersionsRequest;

                    /**
                     * Creates a plain object from a ListApiVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListApiVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApiVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApiVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApiVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApiVersionsResponse. */
                interface IListApiVersionsResponse {

                    /** ListApiVersionsResponse apiVersions */
                    apiVersions?: (google.cloud.apigeeregistry.v1.IApiVersion[]|null);

                    /** ListApiVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListApiVersionsResponse. */
                class ListApiVersionsResponse implements IListApiVersionsResponse {

                    /**
                     * Constructs a new ListApiVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApiVersionsResponse);

                    /** ListApiVersionsResponse apiVersions. */
                    public apiVersions: google.cloud.apigeeregistry.v1.IApiVersion[];

                    /** ListApiVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListApiVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApiVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApiVersionsResponse): google.cloud.apigeeregistry.v1.ListApiVersionsResponse;

                    /**
                     * Encodes the specified ListApiVersionsResponse message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiVersionsResponse.verify|verify} messages.
                     * @param message ListApiVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApiVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApiVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiVersionsResponse.verify|verify} messages.
                     * @param message ListApiVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApiVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApiVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApiVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApiVersionsResponse;

                    /**
                     * Decodes a ListApiVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApiVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApiVersionsResponse;

                    /**
                     * Verifies a ListApiVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApiVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApiVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApiVersionsResponse;

                    /**
                     * Creates a plain object from a ListApiVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListApiVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApiVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApiVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApiVersionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetApiVersionRequest. */
                interface IGetApiVersionRequest {

                    /** GetApiVersionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetApiVersionRequest. */
                class GetApiVersionRequest implements IGetApiVersionRequest {

                    /**
                     * Constructs a new GetApiVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IGetApiVersionRequest);

                    /** GetApiVersionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetApiVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetApiVersionRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IGetApiVersionRequest): google.cloud.apigeeregistry.v1.GetApiVersionRequest;

                    /**
                     * Encodes the specified GetApiVersionRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetApiVersionRequest.verify|verify} messages.
                     * @param message GetApiVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IGetApiVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetApiVersionRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetApiVersionRequest.verify|verify} messages.
                     * @param message GetApiVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IGetApiVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetApiVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetApiVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.GetApiVersionRequest;

                    /**
                     * Decodes a GetApiVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetApiVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.GetApiVersionRequest;

                    /**
                     * Verifies a GetApiVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetApiVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetApiVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.GetApiVersionRequest;

                    /**
                     * Creates a plain object from a GetApiVersionRequest message. Also converts values to other types if specified.
                     * @param message GetApiVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.GetApiVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetApiVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetApiVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateApiVersionRequest. */
                interface ICreateApiVersionRequest {

                    /** CreateApiVersionRequest parent */
                    parent?: (string|null);

                    /** CreateApiVersionRequest apiVersion */
                    apiVersion?: (google.cloud.apigeeregistry.v1.IApiVersion|null);

                    /** CreateApiVersionRequest apiVersionId */
                    apiVersionId?: (string|null);
                }

                /** Represents a CreateApiVersionRequest. */
                class CreateApiVersionRequest implements ICreateApiVersionRequest {

                    /**
                     * Constructs a new CreateApiVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.ICreateApiVersionRequest);

                    /** CreateApiVersionRequest parent. */
                    public parent: string;

                    /** CreateApiVersionRequest apiVersion. */
                    public apiVersion?: (google.cloud.apigeeregistry.v1.IApiVersion|null);

                    /** CreateApiVersionRequest apiVersionId. */
                    public apiVersionId: string;

                    /**
                     * Creates a new CreateApiVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateApiVersionRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.ICreateApiVersionRequest): google.cloud.apigeeregistry.v1.CreateApiVersionRequest;

                    /**
                     * Encodes the specified CreateApiVersionRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateApiVersionRequest.verify|verify} messages.
                     * @param message CreateApiVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.ICreateApiVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateApiVersionRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateApiVersionRequest.verify|verify} messages.
                     * @param message CreateApiVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.ICreateApiVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateApiVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateApiVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.CreateApiVersionRequest;

                    /**
                     * Decodes a CreateApiVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateApiVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.CreateApiVersionRequest;

                    /**
                     * Verifies a CreateApiVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateApiVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateApiVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.CreateApiVersionRequest;

                    /**
                     * Creates a plain object from a CreateApiVersionRequest message. Also converts values to other types if specified.
                     * @param message CreateApiVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.CreateApiVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateApiVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateApiVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateApiVersionRequest. */
                interface IUpdateApiVersionRequest {

                    /** UpdateApiVersionRequest apiVersion */
                    apiVersion?: (google.cloud.apigeeregistry.v1.IApiVersion|null);

                    /** UpdateApiVersionRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateApiVersionRequest allowMissing */
                    allowMissing?: (boolean|null);
                }

                /** Represents an UpdateApiVersionRequest. */
                class UpdateApiVersionRequest implements IUpdateApiVersionRequest {

                    /**
                     * Constructs a new UpdateApiVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IUpdateApiVersionRequest);

                    /** UpdateApiVersionRequest apiVersion. */
                    public apiVersion?: (google.cloud.apigeeregistry.v1.IApiVersion|null);

                    /** UpdateApiVersionRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateApiVersionRequest allowMissing. */
                    public allowMissing: boolean;

                    /**
                     * Creates a new UpdateApiVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateApiVersionRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IUpdateApiVersionRequest): google.cloud.apigeeregistry.v1.UpdateApiVersionRequest;

                    /**
                     * Encodes the specified UpdateApiVersionRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.UpdateApiVersionRequest.verify|verify} messages.
                     * @param message UpdateApiVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IUpdateApiVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateApiVersionRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.UpdateApiVersionRequest.verify|verify} messages.
                     * @param message UpdateApiVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IUpdateApiVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateApiVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateApiVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.UpdateApiVersionRequest;

                    /**
                     * Decodes an UpdateApiVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateApiVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.UpdateApiVersionRequest;

                    /**
                     * Verifies an UpdateApiVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateApiVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateApiVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.UpdateApiVersionRequest;

                    /**
                     * Creates a plain object from an UpdateApiVersionRequest message. Also converts values to other types if specified.
                     * @param message UpdateApiVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.UpdateApiVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateApiVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateApiVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteApiVersionRequest. */
                interface IDeleteApiVersionRequest {

                    /** DeleteApiVersionRequest name */
                    name?: (string|null);

                    /** DeleteApiVersionRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteApiVersionRequest. */
                class DeleteApiVersionRequest implements IDeleteApiVersionRequest {

                    /**
                     * Constructs a new DeleteApiVersionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IDeleteApiVersionRequest);

                    /** DeleteApiVersionRequest name. */
                    public name: string;

                    /** DeleteApiVersionRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteApiVersionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteApiVersionRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IDeleteApiVersionRequest): google.cloud.apigeeregistry.v1.DeleteApiVersionRequest;

                    /**
                     * Encodes the specified DeleteApiVersionRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiVersionRequest.verify|verify} messages.
                     * @param message DeleteApiVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IDeleteApiVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteApiVersionRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiVersionRequest.verify|verify} messages.
                     * @param message DeleteApiVersionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IDeleteApiVersionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteApiVersionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteApiVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.DeleteApiVersionRequest;

                    /**
                     * Decodes a DeleteApiVersionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteApiVersionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.DeleteApiVersionRequest;

                    /**
                     * Verifies a DeleteApiVersionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteApiVersionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteApiVersionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.DeleteApiVersionRequest;

                    /**
                     * Creates a plain object from a DeleteApiVersionRequest message. Also converts values to other types if specified.
                     * @param message DeleteApiVersionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.DeleteApiVersionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteApiVersionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteApiVersionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApiSpecsRequest. */
                interface IListApiSpecsRequest {

                    /** ListApiSpecsRequest parent */
                    parent?: (string|null);

                    /** ListApiSpecsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListApiSpecsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListApiSpecsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListApiSpecsRequest. */
                class ListApiSpecsRequest implements IListApiSpecsRequest {

                    /**
                     * Constructs a new ListApiSpecsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApiSpecsRequest);

                    /** ListApiSpecsRequest parent. */
                    public parent: string;

                    /** ListApiSpecsRequest pageSize. */
                    public pageSize: number;

                    /** ListApiSpecsRequest pageToken. */
                    public pageToken: string;

                    /** ListApiSpecsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListApiSpecsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApiSpecsRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApiSpecsRequest): google.cloud.apigeeregistry.v1.ListApiSpecsRequest;

                    /**
                     * Encodes the specified ListApiSpecsRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiSpecsRequest.verify|verify} messages.
                     * @param message ListApiSpecsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApiSpecsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApiSpecsRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiSpecsRequest.verify|verify} messages.
                     * @param message ListApiSpecsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApiSpecsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApiSpecsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApiSpecsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApiSpecsRequest;

                    /**
                     * Decodes a ListApiSpecsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApiSpecsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApiSpecsRequest;

                    /**
                     * Verifies a ListApiSpecsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApiSpecsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApiSpecsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApiSpecsRequest;

                    /**
                     * Creates a plain object from a ListApiSpecsRequest message. Also converts values to other types if specified.
                     * @param message ListApiSpecsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApiSpecsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApiSpecsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApiSpecsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApiSpecsResponse. */
                interface IListApiSpecsResponse {

                    /** ListApiSpecsResponse apiSpecs */
                    apiSpecs?: (google.cloud.apigeeregistry.v1.IApiSpec[]|null);

                    /** ListApiSpecsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListApiSpecsResponse. */
                class ListApiSpecsResponse implements IListApiSpecsResponse {

                    /**
                     * Constructs a new ListApiSpecsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApiSpecsResponse);

                    /** ListApiSpecsResponse apiSpecs. */
                    public apiSpecs: google.cloud.apigeeregistry.v1.IApiSpec[];

                    /** ListApiSpecsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListApiSpecsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApiSpecsResponse instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApiSpecsResponse): google.cloud.apigeeregistry.v1.ListApiSpecsResponse;

                    /**
                     * Encodes the specified ListApiSpecsResponse message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiSpecsResponse.verify|verify} messages.
                     * @param message ListApiSpecsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApiSpecsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApiSpecsResponse message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiSpecsResponse.verify|verify} messages.
                     * @param message ListApiSpecsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApiSpecsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApiSpecsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApiSpecsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApiSpecsResponse;

                    /**
                     * Decodes a ListApiSpecsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApiSpecsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApiSpecsResponse;

                    /**
                     * Verifies a ListApiSpecsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApiSpecsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApiSpecsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApiSpecsResponse;

                    /**
                     * Creates a plain object from a ListApiSpecsResponse message. Also converts values to other types if specified.
                     * @param message ListApiSpecsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApiSpecsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApiSpecsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApiSpecsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetApiSpecRequest. */
                interface IGetApiSpecRequest {

                    /** GetApiSpecRequest name */
                    name?: (string|null);
                }

                /** Represents a GetApiSpecRequest. */
                class GetApiSpecRequest implements IGetApiSpecRequest {

                    /**
                     * Constructs a new GetApiSpecRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IGetApiSpecRequest);

                    /** GetApiSpecRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetApiSpecRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetApiSpecRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IGetApiSpecRequest): google.cloud.apigeeregistry.v1.GetApiSpecRequest;

                    /**
                     * Encodes the specified GetApiSpecRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetApiSpecRequest.verify|verify} messages.
                     * @param message GetApiSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IGetApiSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetApiSpecRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetApiSpecRequest.verify|verify} messages.
                     * @param message GetApiSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IGetApiSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetApiSpecRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetApiSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.GetApiSpecRequest;

                    /**
                     * Decodes a GetApiSpecRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetApiSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.GetApiSpecRequest;

                    /**
                     * Verifies a GetApiSpecRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetApiSpecRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetApiSpecRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.GetApiSpecRequest;

                    /**
                     * Creates a plain object from a GetApiSpecRequest message. Also converts values to other types if specified.
                     * @param message GetApiSpecRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.GetApiSpecRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetApiSpecRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetApiSpecRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetApiSpecContentsRequest. */
                interface IGetApiSpecContentsRequest {

                    /** GetApiSpecContentsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetApiSpecContentsRequest. */
                class GetApiSpecContentsRequest implements IGetApiSpecContentsRequest {

                    /**
                     * Constructs a new GetApiSpecContentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IGetApiSpecContentsRequest);

                    /** GetApiSpecContentsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetApiSpecContentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetApiSpecContentsRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IGetApiSpecContentsRequest): google.cloud.apigeeregistry.v1.GetApiSpecContentsRequest;

                    /**
                     * Encodes the specified GetApiSpecContentsRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetApiSpecContentsRequest.verify|verify} messages.
                     * @param message GetApiSpecContentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IGetApiSpecContentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetApiSpecContentsRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetApiSpecContentsRequest.verify|verify} messages.
                     * @param message GetApiSpecContentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IGetApiSpecContentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetApiSpecContentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetApiSpecContentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.GetApiSpecContentsRequest;

                    /**
                     * Decodes a GetApiSpecContentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetApiSpecContentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.GetApiSpecContentsRequest;

                    /**
                     * Verifies a GetApiSpecContentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetApiSpecContentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetApiSpecContentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.GetApiSpecContentsRequest;

                    /**
                     * Creates a plain object from a GetApiSpecContentsRequest message. Also converts values to other types if specified.
                     * @param message GetApiSpecContentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.GetApiSpecContentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetApiSpecContentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetApiSpecContentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateApiSpecRequest. */
                interface ICreateApiSpecRequest {

                    /** CreateApiSpecRequest parent */
                    parent?: (string|null);

                    /** CreateApiSpecRequest apiSpec */
                    apiSpec?: (google.cloud.apigeeregistry.v1.IApiSpec|null);

                    /** CreateApiSpecRequest apiSpecId */
                    apiSpecId?: (string|null);
                }

                /** Represents a CreateApiSpecRequest. */
                class CreateApiSpecRequest implements ICreateApiSpecRequest {

                    /**
                     * Constructs a new CreateApiSpecRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.ICreateApiSpecRequest);

                    /** CreateApiSpecRequest parent. */
                    public parent: string;

                    /** CreateApiSpecRequest apiSpec. */
                    public apiSpec?: (google.cloud.apigeeregistry.v1.IApiSpec|null);

                    /** CreateApiSpecRequest apiSpecId. */
                    public apiSpecId: string;

                    /**
                     * Creates a new CreateApiSpecRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateApiSpecRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.ICreateApiSpecRequest): google.cloud.apigeeregistry.v1.CreateApiSpecRequest;

                    /**
                     * Encodes the specified CreateApiSpecRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateApiSpecRequest.verify|verify} messages.
                     * @param message CreateApiSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.ICreateApiSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateApiSpecRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateApiSpecRequest.verify|verify} messages.
                     * @param message CreateApiSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.ICreateApiSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateApiSpecRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateApiSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.CreateApiSpecRequest;

                    /**
                     * Decodes a CreateApiSpecRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateApiSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.CreateApiSpecRequest;

                    /**
                     * Verifies a CreateApiSpecRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateApiSpecRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateApiSpecRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.CreateApiSpecRequest;

                    /**
                     * Creates a plain object from a CreateApiSpecRequest message. Also converts values to other types if specified.
                     * @param message CreateApiSpecRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.CreateApiSpecRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateApiSpecRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateApiSpecRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateApiSpecRequest. */
                interface IUpdateApiSpecRequest {

                    /** UpdateApiSpecRequest apiSpec */
                    apiSpec?: (google.cloud.apigeeregistry.v1.IApiSpec|null);

                    /** UpdateApiSpecRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateApiSpecRequest allowMissing */
                    allowMissing?: (boolean|null);
                }

                /** Represents an UpdateApiSpecRequest. */
                class UpdateApiSpecRequest implements IUpdateApiSpecRequest {

                    /**
                     * Constructs a new UpdateApiSpecRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IUpdateApiSpecRequest);

                    /** UpdateApiSpecRequest apiSpec. */
                    public apiSpec?: (google.cloud.apigeeregistry.v1.IApiSpec|null);

                    /** UpdateApiSpecRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateApiSpecRequest allowMissing. */
                    public allowMissing: boolean;

                    /**
                     * Creates a new UpdateApiSpecRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateApiSpecRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IUpdateApiSpecRequest): google.cloud.apigeeregistry.v1.UpdateApiSpecRequest;

                    /**
                     * Encodes the specified UpdateApiSpecRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.UpdateApiSpecRequest.verify|verify} messages.
                     * @param message UpdateApiSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IUpdateApiSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateApiSpecRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.UpdateApiSpecRequest.verify|verify} messages.
                     * @param message UpdateApiSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IUpdateApiSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateApiSpecRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateApiSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.UpdateApiSpecRequest;

                    /**
                     * Decodes an UpdateApiSpecRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateApiSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.UpdateApiSpecRequest;

                    /**
                     * Verifies an UpdateApiSpecRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateApiSpecRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateApiSpecRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.UpdateApiSpecRequest;

                    /**
                     * Creates a plain object from an UpdateApiSpecRequest message. Also converts values to other types if specified.
                     * @param message UpdateApiSpecRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.UpdateApiSpecRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateApiSpecRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateApiSpecRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteApiSpecRequest. */
                interface IDeleteApiSpecRequest {

                    /** DeleteApiSpecRequest name */
                    name?: (string|null);

                    /** DeleteApiSpecRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteApiSpecRequest. */
                class DeleteApiSpecRequest implements IDeleteApiSpecRequest {

                    /**
                     * Constructs a new DeleteApiSpecRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IDeleteApiSpecRequest);

                    /** DeleteApiSpecRequest name. */
                    public name: string;

                    /** DeleteApiSpecRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteApiSpecRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteApiSpecRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IDeleteApiSpecRequest): google.cloud.apigeeregistry.v1.DeleteApiSpecRequest;

                    /**
                     * Encodes the specified DeleteApiSpecRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiSpecRequest.verify|verify} messages.
                     * @param message DeleteApiSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IDeleteApiSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteApiSpecRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiSpecRequest.verify|verify} messages.
                     * @param message DeleteApiSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IDeleteApiSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteApiSpecRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteApiSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.DeleteApiSpecRequest;

                    /**
                     * Decodes a DeleteApiSpecRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteApiSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.DeleteApiSpecRequest;

                    /**
                     * Verifies a DeleteApiSpecRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteApiSpecRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteApiSpecRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.DeleteApiSpecRequest;

                    /**
                     * Creates a plain object from a DeleteApiSpecRequest message. Also converts values to other types if specified.
                     * @param message DeleteApiSpecRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.DeleteApiSpecRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteApiSpecRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteApiSpecRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TagApiSpecRevisionRequest. */
                interface ITagApiSpecRevisionRequest {

                    /** TagApiSpecRevisionRequest name */
                    name?: (string|null);

                    /** TagApiSpecRevisionRequest tag */
                    tag?: (string|null);
                }

                /** Represents a TagApiSpecRevisionRequest. */
                class TagApiSpecRevisionRequest implements ITagApiSpecRevisionRequest {

                    /**
                     * Constructs a new TagApiSpecRevisionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.ITagApiSpecRevisionRequest);

                    /** TagApiSpecRevisionRequest name. */
                    public name: string;

                    /** TagApiSpecRevisionRequest tag. */
                    public tag: string;

                    /**
                     * Creates a new TagApiSpecRevisionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TagApiSpecRevisionRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.ITagApiSpecRevisionRequest): google.cloud.apigeeregistry.v1.TagApiSpecRevisionRequest;

                    /**
                     * Encodes the specified TagApiSpecRevisionRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.TagApiSpecRevisionRequest.verify|verify} messages.
                     * @param message TagApiSpecRevisionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.ITagApiSpecRevisionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TagApiSpecRevisionRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.TagApiSpecRevisionRequest.verify|verify} messages.
                     * @param message TagApiSpecRevisionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.ITagApiSpecRevisionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TagApiSpecRevisionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TagApiSpecRevisionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.TagApiSpecRevisionRequest;

                    /**
                     * Decodes a TagApiSpecRevisionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TagApiSpecRevisionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.TagApiSpecRevisionRequest;

                    /**
                     * Verifies a TagApiSpecRevisionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TagApiSpecRevisionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TagApiSpecRevisionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.TagApiSpecRevisionRequest;

                    /**
                     * Creates a plain object from a TagApiSpecRevisionRequest message. Also converts values to other types if specified.
                     * @param message TagApiSpecRevisionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.TagApiSpecRevisionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TagApiSpecRevisionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TagApiSpecRevisionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApiSpecRevisionsRequest. */
                interface IListApiSpecRevisionsRequest {

                    /** ListApiSpecRevisionsRequest name */
                    name?: (string|null);

                    /** ListApiSpecRevisionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListApiSpecRevisionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListApiSpecRevisionsRequest. */
                class ListApiSpecRevisionsRequest implements IListApiSpecRevisionsRequest {

                    /**
                     * Constructs a new ListApiSpecRevisionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApiSpecRevisionsRequest);

                    /** ListApiSpecRevisionsRequest name. */
                    public name: string;

                    /** ListApiSpecRevisionsRequest pageSize. */
                    public pageSize: number;

                    /** ListApiSpecRevisionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListApiSpecRevisionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApiSpecRevisionsRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApiSpecRevisionsRequest): google.cloud.apigeeregistry.v1.ListApiSpecRevisionsRequest;

                    /**
                     * Encodes the specified ListApiSpecRevisionsRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiSpecRevisionsRequest.verify|verify} messages.
                     * @param message ListApiSpecRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApiSpecRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApiSpecRevisionsRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiSpecRevisionsRequest.verify|verify} messages.
                     * @param message ListApiSpecRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApiSpecRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApiSpecRevisionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApiSpecRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApiSpecRevisionsRequest;

                    /**
                     * Decodes a ListApiSpecRevisionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApiSpecRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApiSpecRevisionsRequest;

                    /**
                     * Verifies a ListApiSpecRevisionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApiSpecRevisionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApiSpecRevisionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApiSpecRevisionsRequest;

                    /**
                     * Creates a plain object from a ListApiSpecRevisionsRequest message. Also converts values to other types if specified.
                     * @param message ListApiSpecRevisionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApiSpecRevisionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApiSpecRevisionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApiSpecRevisionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApiSpecRevisionsResponse. */
                interface IListApiSpecRevisionsResponse {

                    /** ListApiSpecRevisionsResponse apiSpecs */
                    apiSpecs?: (google.cloud.apigeeregistry.v1.IApiSpec[]|null);

                    /** ListApiSpecRevisionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListApiSpecRevisionsResponse. */
                class ListApiSpecRevisionsResponse implements IListApiSpecRevisionsResponse {

                    /**
                     * Constructs a new ListApiSpecRevisionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApiSpecRevisionsResponse);

                    /** ListApiSpecRevisionsResponse apiSpecs. */
                    public apiSpecs: google.cloud.apigeeregistry.v1.IApiSpec[];

                    /** ListApiSpecRevisionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListApiSpecRevisionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApiSpecRevisionsResponse instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApiSpecRevisionsResponse): google.cloud.apigeeregistry.v1.ListApiSpecRevisionsResponse;

                    /**
                     * Encodes the specified ListApiSpecRevisionsResponse message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiSpecRevisionsResponse.verify|verify} messages.
                     * @param message ListApiSpecRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApiSpecRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApiSpecRevisionsResponse message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiSpecRevisionsResponse.verify|verify} messages.
                     * @param message ListApiSpecRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApiSpecRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApiSpecRevisionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApiSpecRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApiSpecRevisionsResponse;

                    /**
                     * Decodes a ListApiSpecRevisionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApiSpecRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApiSpecRevisionsResponse;

                    /**
                     * Verifies a ListApiSpecRevisionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApiSpecRevisionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApiSpecRevisionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApiSpecRevisionsResponse;

                    /**
                     * Creates a plain object from a ListApiSpecRevisionsResponse message. Also converts values to other types if specified.
                     * @param message ListApiSpecRevisionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApiSpecRevisionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApiSpecRevisionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApiSpecRevisionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RollbackApiSpecRequest. */
                interface IRollbackApiSpecRequest {

                    /** RollbackApiSpecRequest name */
                    name?: (string|null);

                    /** RollbackApiSpecRequest revisionId */
                    revisionId?: (string|null);
                }

                /** Represents a RollbackApiSpecRequest. */
                class RollbackApiSpecRequest implements IRollbackApiSpecRequest {

                    /**
                     * Constructs a new RollbackApiSpecRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IRollbackApiSpecRequest);

                    /** RollbackApiSpecRequest name. */
                    public name: string;

                    /** RollbackApiSpecRequest revisionId. */
                    public revisionId: string;

                    /**
                     * Creates a new RollbackApiSpecRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RollbackApiSpecRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IRollbackApiSpecRequest): google.cloud.apigeeregistry.v1.RollbackApiSpecRequest;

                    /**
                     * Encodes the specified RollbackApiSpecRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.RollbackApiSpecRequest.verify|verify} messages.
                     * @param message RollbackApiSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IRollbackApiSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RollbackApiSpecRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.RollbackApiSpecRequest.verify|verify} messages.
                     * @param message RollbackApiSpecRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IRollbackApiSpecRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RollbackApiSpecRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RollbackApiSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.RollbackApiSpecRequest;

                    /**
                     * Decodes a RollbackApiSpecRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RollbackApiSpecRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.RollbackApiSpecRequest;

                    /**
                     * Verifies a RollbackApiSpecRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RollbackApiSpecRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RollbackApiSpecRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.RollbackApiSpecRequest;

                    /**
                     * Creates a plain object from a RollbackApiSpecRequest message. Also converts values to other types if specified.
                     * @param message RollbackApiSpecRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.RollbackApiSpecRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RollbackApiSpecRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RollbackApiSpecRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteApiSpecRevisionRequest. */
                interface IDeleteApiSpecRevisionRequest {

                    /** DeleteApiSpecRevisionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteApiSpecRevisionRequest. */
                class DeleteApiSpecRevisionRequest implements IDeleteApiSpecRevisionRequest {

                    /**
                     * Constructs a new DeleteApiSpecRevisionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IDeleteApiSpecRevisionRequest);

                    /** DeleteApiSpecRevisionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteApiSpecRevisionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteApiSpecRevisionRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IDeleteApiSpecRevisionRequest): google.cloud.apigeeregistry.v1.DeleteApiSpecRevisionRequest;

                    /**
                     * Encodes the specified DeleteApiSpecRevisionRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiSpecRevisionRequest.verify|verify} messages.
                     * @param message DeleteApiSpecRevisionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IDeleteApiSpecRevisionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteApiSpecRevisionRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiSpecRevisionRequest.verify|verify} messages.
                     * @param message DeleteApiSpecRevisionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IDeleteApiSpecRevisionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteApiSpecRevisionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteApiSpecRevisionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.DeleteApiSpecRevisionRequest;

                    /**
                     * Decodes a DeleteApiSpecRevisionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteApiSpecRevisionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.DeleteApiSpecRevisionRequest;

                    /**
                     * Verifies a DeleteApiSpecRevisionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteApiSpecRevisionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteApiSpecRevisionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.DeleteApiSpecRevisionRequest;

                    /**
                     * Creates a plain object from a DeleteApiSpecRevisionRequest message. Also converts values to other types if specified.
                     * @param message DeleteApiSpecRevisionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.DeleteApiSpecRevisionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteApiSpecRevisionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteApiSpecRevisionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApiDeploymentsRequest. */
                interface IListApiDeploymentsRequest {

                    /** ListApiDeploymentsRequest parent */
                    parent?: (string|null);

                    /** ListApiDeploymentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListApiDeploymentsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListApiDeploymentsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListApiDeploymentsRequest. */
                class ListApiDeploymentsRequest implements IListApiDeploymentsRequest {

                    /**
                     * Constructs a new ListApiDeploymentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApiDeploymentsRequest);

                    /** ListApiDeploymentsRequest parent. */
                    public parent: string;

                    /** ListApiDeploymentsRequest pageSize. */
                    public pageSize: number;

                    /** ListApiDeploymentsRequest pageToken. */
                    public pageToken: string;

                    /** ListApiDeploymentsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListApiDeploymentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApiDeploymentsRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApiDeploymentsRequest): google.cloud.apigeeregistry.v1.ListApiDeploymentsRequest;

                    /**
                     * Encodes the specified ListApiDeploymentsRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiDeploymentsRequest.verify|verify} messages.
                     * @param message ListApiDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApiDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApiDeploymentsRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiDeploymentsRequest.verify|verify} messages.
                     * @param message ListApiDeploymentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApiDeploymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApiDeploymentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApiDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApiDeploymentsRequest;

                    /**
                     * Decodes a ListApiDeploymentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApiDeploymentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApiDeploymentsRequest;

                    /**
                     * Verifies a ListApiDeploymentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApiDeploymentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApiDeploymentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApiDeploymentsRequest;

                    /**
                     * Creates a plain object from a ListApiDeploymentsRequest message. Also converts values to other types if specified.
                     * @param message ListApiDeploymentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApiDeploymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApiDeploymentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApiDeploymentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApiDeploymentsResponse. */
                interface IListApiDeploymentsResponse {

                    /** ListApiDeploymentsResponse apiDeployments */
                    apiDeployments?: (google.cloud.apigeeregistry.v1.IApiDeployment[]|null);

                    /** ListApiDeploymentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListApiDeploymentsResponse. */
                class ListApiDeploymentsResponse implements IListApiDeploymentsResponse {

                    /**
                     * Constructs a new ListApiDeploymentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApiDeploymentsResponse);

                    /** ListApiDeploymentsResponse apiDeployments. */
                    public apiDeployments: google.cloud.apigeeregistry.v1.IApiDeployment[];

                    /** ListApiDeploymentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListApiDeploymentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApiDeploymentsResponse instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApiDeploymentsResponse): google.cloud.apigeeregistry.v1.ListApiDeploymentsResponse;

                    /**
                     * Encodes the specified ListApiDeploymentsResponse message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiDeploymentsResponse.verify|verify} messages.
                     * @param message ListApiDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApiDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApiDeploymentsResponse message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiDeploymentsResponse.verify|verify} messages.
                     * @param message ListApiDeploymentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApiDeploymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApiDeploymentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApiDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApiDeploymentsResponse;

                    /**
                     * Decodes a ListApiDeploymentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApiDeploymentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApiDeploymentsResponse;

                    /**
                     * Verifies a ListApiDeploymentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApiDeploymentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApiDeploymentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApiDeploymentsResponse;

                    /**
                     * Creates a plain object from a ListApiDeploymentsResponse message. Also converts values to other types if specified.
                     * @param message ListApiDeploymentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApiDeploymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApiDeploymentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApiDeploymentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetApiDeploymentRequest. */
                interface IGetApiDeploymentRequest {

                    /** GetApiDeploymentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetApiDeploymentRequest. */
                class GetApiDeploymentRequest implements IGetApiDeploymentRequest {

                    /**
                     * Constructs a new GetApiDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IGetApiDeploymentRequest);

                    /** GetApiDeploymentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetApiDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetApiDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IGetApiDeploymentRequest): google.cloud.apigeeregistry.v1.GetApiDeploymentRequest;

                    /**
                     * Encodes the specified GetApiDeploymentRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetApiDeploymentRequest.verify|verify} messages.
                     * @param message GetApiDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IGetApiDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetApiDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetApiDeploymentRequest.verify|verify} messages.
                     * @param message GetApiDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IGetApiDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetApiDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetApiDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.GetApiDeploymentRequest;

                    /**
                     * Decodes a GetApiDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetApiDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.GetApiDeploymentRequest;

                    /**
                     * Verifies a GetApiDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetApiDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetApiDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.GetApiDeploymentRequest;

                    /**
                     * Creates a plain object from a GetApiDeploymentRequest message. Also converts values to other types if specified.
                     * @param message GetApiDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.GetApiDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetApiDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetApiDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateApiDeploymentRequest. */
                interface ICreateApiDeploymentRequest {

                    /** CreateApiDeploymentRequest parent */
                    parent?: (string|null);

                    /** CreateApiDeploymentRequest apiDeployment */
                    apiDeployment?: (google.cloud.apigeeregistry.v1.IApiDeployment|null);

                    /** CreateApiDeploymentRequest apiDeploymentId */
                    apiDeploymentId?: (string|null);
                }

                /** Represents a CreateApiDeploymentRequest. */
                class CreateApiDeploymentRequest implements ICreateApiDeploymentRequest {

                    /**
                     * Constructs a new CreateApiDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.ICreateApiDeploymentRequest);

                    /** CreateApiDeploymentRequest parent. */
                    public parent: string;

                    /** CreateApiDeploymentRequest apiDeployment. */
                    public apiDeployment?: (google.cloud.apigeeregistry.v1.IApiDeployment|null);

                    /** CreateApiDeploymentRequest apiDeploymentId. */
                    public apiDeploymentId: string;

                    /**
                     * Creates a new CreateApiDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateApiDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.ICreateApiDeploymentRequest): google.cloud.apigeeregistry.v1.CreateApiDeploymentRequest;

                    /**
                     * Encodes the specified CreateApiDeploymentRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateApiDeploymentRequest.verify|verify} messages.
                     * @param message CreateApiDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.ICreateApiDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateApiDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateApiDeploymentRequest.verify|verify} messages.
                     * @param message CreateApiDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.ICreateApiDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateApiDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateApiDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.CreateApiDeploymentRequest;

                    /**
                     * Decodes a CreateApiDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateApiDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.CreateApiDeploymentRequest;

                    /**
                     * Verifies a CreateApiDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateApiDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateApiDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.CreateApiDeploymentRequest;

                    /**
                     * Creates a plain object from a CreateApiDeploymentRequest message. Also converts values to other types if specified.
                     * @param message CreateApiDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.CreateApiDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateApiDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateApiDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateApiDeploymentRequest. */
                interface IUpdateApiDeploymentRequest {

                    /** UpdateApiDeploymentRequest apiDeployment */
                    apiDeployment?: (google.cloud.apigeeregistry.v1.IApiDeployment|null);

                    /** UpdateApiDeploymentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateApiDeploymentRequest allowMissing */
                    allowMissing?: (boolean|null);
                }

                /** Represents an UpdateApiDeploymentRequest. */
                class UpdateApiDeploymentRequest implements IUpdateApiDeploymentRequest {

                    /**
                     * Constructs a new UpdateApiDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IUpdateApiDeploymentRequest);

                    /** UpdateApiDeploymentRequest apiDeployment. */
                    public apiDeployment?: (google.cloud.apigeeregistry.v1.IApiDeployment|null);

                    /** UpdateApiDeploymentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateApiDeploymentRequest allowMissing. */
                    public allowMissing: boolean;

                    /**
                     * Creates a new UpdateApiDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateApiDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IUpdateApiDeploymentRequest): google.cloud.apigeeregistry.v1.UpdateApiDeploymentRequest;

                    /**
                     * Encodes the specified UpdateApiDeploymentRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.UpdateApiDeploymentRequest.verify|verify} messages.
                     * @param message UpdateApiDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IUpdateApiDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateApiDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.UpdateApiDeploymentRequest.verify|verify} messages.
                     * @param message UpdateApiDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IUpdateApiDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateApiDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateApiDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.UpdateApiDeploymentRequest;

                    /**
                     * Decodes an UpdateApiDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateApiDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.UpdateApiDeploymentRequest;

                    /**
                     * Verifies an UpdateApiDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateApiDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateApiDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.UpdateApiDeploymentRequest;

                    /**
                     * Creates a plain object from an UpdateApiDeploymentRequest message. Also converts values to other types if specified.
                     * @param message UpdateApiDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.UpdateApiDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateApiDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateApiDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteApiDeploymentRequest. */
                interface IDeleteApiDeploymentRequest {

                    /** DeleteApiDeploymentRequest name */
                    name?: (string|null);

                    /** DeleteApiDeploymentRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteApiDeploymentRequest. */
                class DeleteApiDeploymentRequest implements IDeleteApiDeploymentRequest {

                    /**
                     * Constructs a new DeleteApiDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRequest);

                    /** DeleteApiDeploymentRequest name. */
                    public name: string;

                    /** DeleteApiDeploymentRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteApiDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteApiDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRequest): google.cloud.apigeeregistry.v1.DeleteApiDeploymentRequest;

                    /**
                     * Encodes the specified DeleteApiDeploymentRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiDeploymentRequest.verify|verify} messages.
                     * @param message DeleteApiDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteApiDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiDeploymentRequest.verify|verify} messages.
                     * @param message DeleteApiDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteApiDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteApiDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.DeleteApiDeploymentRequest;

                    /**
                     * Decodes a DeleteApiDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteApiDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.DeleteApiDeploymentRequest;

                    /**
                     * Verifies a DeleteApiDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteApiDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteApiDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.DeleteApiDeploymentRequest;

                    /**
                     * Creates a plain object from a DeleteApiDeploymentRequest message. Also converts values to other types if specified.
                     * @param message DeleteApiDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.DeleteApiDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteApiDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteApiDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TagApiDeploymentRevisionRequest. */
                interface ITagApiDeploymentRevisionRequest {

                    /** TagApiDeploymentRevisionRequest name */
                    name?: (string|null);

                    /** TagApiDeploymentRevisionRequest tag */
                    tag?: (string|null);
                }

                /** Represents a TagApiDeploymentRevisionRequest. */
                class TagApiDeploymentRevisionRequest implements ITagApiDeploymentRevisionRequest {

                    /**
                     * Constructs a new TagApiDeploymentRevisionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.ITagApiDeploymentRevisionRequest);

                    /** TagApiDeploymentRevisionRequest name. */
                    public name: string;

                    /** TagApiDeploymentRevisionRequest tag. */
                    public tag: string;

                    /**
                     * Creates a new TagApiDeploymentRevisionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TagApiDeploymentRevisionRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.ITagApiDeploymentRevisionRequest): google.cloud.apigeeregistry.v1.TagApiDeploymentRevisionRequest;

                    /**
                     * Encodes the specified TagApiDeploymentRevisionRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.TagApiDeploymentRevisionRequest.verify|verify} messages.
                     * @param message TagApiDeploymentRevisionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.ITagApiDeploymentRevisionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TagApiDeploymentRevisionRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.TagApiDeploymentRevisionRequest.verify|verify} messages.
                     * @param message TagApiDeploymentRevisionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.ITagApiDeploymentRevisionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TagApiDeploymentRevisionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TagApiDeploymentRevisionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.TagApiDeploymentRevisionRequest;

                    /**
                     * Decodes a TagApiDeploymentRevisionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TagApiDeploymentRevisionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.TagApiDeploymentRevisionRequest;

                    /**
                     * Verifies a TagApiDeploymentRevisionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TagApiDeploymentRevisionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TagApiDeploymentRevisionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.TagApiDeploymentRevisionRequest;

                    /**
                     * Creates a plain object from a TagApiDeploymentRevisionRequest message. Also converts values to other types if specified.
                     * @param message TagApiDeploymentRevisionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.TagApiDeploymentRevisionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TagApiDeploymentRevisionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TagApiDeploymentRevisionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApiDeploymentRevisionsRequest. */
                interface IListApiDeploymentRevisionsRequest {

                    /** ListApiDeploymentRevisionsRequest name */
                    name?: (string|null);

                    /** ListApiDeploymentRevisionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListApiDeploymentRevisionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListApiDeploymentRevisionsRequest. */
                class ListApiDeploymentRevisionsRequest implements IListApiDeploymentRevisionsRequest {

                    /**
                     * Constructs a new ListApiDeploymentRevisionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApiDeploymentRevisionsRequest);

                    /** ListApiDeploymentRevisionsRequest name. */
                    public name: string;

                    /** ListApiDeploymentRevisionsRequest pageSize. */
                    public pageSize: number;

                    /** ListApiDeploymentRevisionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListApiDeploymentRevisionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApiDeploymentRevisionsRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApiDeploymentRevisionsRequest): google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsRequest;

                    /**
                     * Encodes the specified ListApiDeploymentRevisionsRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsRequest.verify|verify} messages.
                     * @param message ListApiDeploymentRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApiDeploymentRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApiDeploymentRevisionsRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsRequest.verify|verify} messages.
                     * @param message ListApiDeploymentRevisionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApiDeploymentRevisionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApiDeploymentRevisionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApiDeploymentRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsRequest;

                    /**
                     * Decodes a ListApiDeploymentRevisionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApiDeploymentRevisionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsRequest;

                    /**
                     * Verifies a ListApiDeploymentRevisionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApiDeploymentRevisionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApiDeploymentRevisionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsRequest;

                    /**
                     * Creates a plain object from a ListApiDeploymentRevisionsRequest message. Also converts values to other types if specified.
                     * @param message ListApiDeploymentRevisionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApiDeploymentRevisionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApiDeploymentRevisionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListApiDeploymentRevisionsResponse. */
                interface IListApiDeploymentRevisionsResponse {

                    /** ListApiDeploymentRevisionsResponse apiDeployments */
                    apiDeployments?: (google.cloud.apigeeregistry.v1.IApiDeployment[]|null);

                    /** ListApiDeploymentRevisionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListApiDeploymentRevisionsResponse. */
                class ListApiDeploymentRevisionsResponse implements IListApiDeploymentRevisionsResponse {

                    /**
                     * Constructs a new ListApiDeploymentRevisionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListApiDeploymentRevisionsResponse);

                    /** ListApiDeploymentRevisionsResponse apiDeployments. */
                    public apiDeployments: google.cloud.apigeeregistry.v1.IApiDeployment[];

                    /** ListApiDeploymentRevisionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListApiDeploymentRevisionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListApiDeploymentRevisionsResponse instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListApiDeploymentRevisionsResponse): google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsResponse;

                    /**
                     * Encodes the specified ListApiDeploymentRevisionsResponse message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsResponse.verify|verify} messages.
                     * @param message ListApiDeploymentRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListApiDeploymentRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListApiDeploymentRevisionsResponse message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsResponse.verify|verify} messages.
                     * @param message ListApiDeploymentRevisionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListApiDeploymentRevisionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListApiDeploymentRevisionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListApiDeploymentRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsResponse;

                    /**
                     * Decodes a ListApiDeploymentRevisionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListApiDeploymentRevisionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsResponse;

                    /**
                     * Verifies a ListApiDeploymentRevisionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListApiDeploymentRevisionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListApiDeploymentRevisionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsResponse;

                    /**
                     * Creates a plain object from a ListApiDeploymentRevisionsResponse message. Also converts values to other types if specified.
                     * @param message ListApiDeploymentRevisionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListApiDeploymentRevisionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListApiDeploymentRevisionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListApiDeploymentRevisionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RollbackApiDeploymentRequest. */
                interface IRollbackApiDeploymentRequest {

                    /** RollbackApiDeploymentRequest name */
                    name?: (string|null);

                    /** RollbackApiDeploymentRequest revisionId */
                    revisionId?: (string|null);
                }

                /** Represents a RollbackApiDeploymentRequest. */
                class RollbackApiDeploymentRequest implements IRollbackApiDeploymentRequest {

                    /**
                     * Constructs a new RollbackApiDeploymentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IRollbackApiDeploymentRequest);

                    /** RollbackApiDeploymentRequest name. */
                    public name: string;

                    /** RollbackApiDeploymentRequest revisionId. */
                    public revisionId: string;

                    /**
                     * Creates a new RollbackApiDeploymentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RollbackApiDeploymentRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IRollbackApiDeploymentRequest): google.cloud.apigeeregistry.v1.RollbackApiDeploymentRequest;

                    /**
                     * Encodes the specified RollbackApiDeploymentRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.RollbackApiDeploymentRequest.verify|verify} messages.
                     * @param message RollbackApiDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IRollbackApiDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RollbackApiDeploymentRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.RollbackApiDeploymentRequest.verify|verify} messages.
                     * @param message RollbackApiDeploymentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IRollbackApiDeploymentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RollbackApiDeploymentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RollbackApiDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.RollbackApiDeploymentRequest;

                    /**
                     * Decodes a RollbackApiDeploymentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RollbackApiDeploymentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.RollbackApiDeploymentRequest;

                    /**
                     * Verifies a RollbackApiDeploymentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RollbackApiDeploymentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RollbackApiDeploymentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.RollbackApiDeploymentRequest;

                    /**
                     * Creates a plain object from a RollbackApiDeploymentRequest message. Also converts values to other types if specified.
                     * @param message RollbackApiDeploymentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.RollbackApiDeploymentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RollbackApiDeploymentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RollbackApiDeploymentRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteApiDeploymentRevisionRequest. */
                interface IDeleteApiDeploymentRevisionRequest {

                    /** DeleteApiDeploymentRevisionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteApiDeploymentRevisionRequest. */
                class DeleteApiDeploymentRevisionRequest implements IDeleteApiDeploymentRevisionRequest {

                    /**
                     * Constructs a new DeleteApiDeploymentRevisionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRevisionRequest);

                    /** DeleteApiDeploymentRevisionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteApiDeploymentRevisionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteApiDeploymentRevisionRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRevisionRequest): google.cloud.apigeeregistry.v1.DeleteApiDeploymentRevisionRequest;

                    /**
                     * Encodes the specified DeleteApiDeploymentRevisionRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiDeploymentRevisionRequest.verify|verify} messages.
                     * @param message DeleteApiDeploymentRevisionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRevisionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteApiDeploymentRevisionRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteApiDeploymentRevisionRequest.verify|verify} messages.
                     * @param message DeleteApiDeploymentRevisionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IDeleteApiDeploymentRevisionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteApiDeploymentRevisionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteApiDeploymentRevisionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.DeleteApiDeploymentRevisionRequest;

                    /**
                     * Decodes a DeleteApiDeploymentRevisionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteApiDeploymentRevisionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.DeleteApiDeploymentRevisionRequest;

                    /**
                     * Verifies a DeleteApiDeploymentRevisionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteApiDeploymentRevisionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteApiDeploymentRevisionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.DeleteApiDeploymentRevisionRequest;

                    /**
                     * Creates a plain object from a DeleteApiDeploymentRevisionRequest message. Also converts values to other types if specified.
                     * @param message DeleteApiDeploymentRevisionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.DeleteApiDeploymentRevisionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteApiDeploymentRevisionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteApiDeploymentRevisionRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListArtifactsRequest. */
                interface IListArtifactsRequest {

                    /** ListArtifactsRequest parent */
                    parent?: (string|null);

                    /** ListArtifactsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListArtifactsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListArtifactsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListArtifactsRequest. */
                class ListArtifactsRequest implements IListArtifactsRequest {

                    /**
                     * Constructs a new ListArtifactsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListArtifactsRequest);

                    /** ListArtifactsRequest parent. */
                    public parent: string;

                    /** ListArtifactsRequest pageSize. */
                    public pageSize: number;

                    /** ListArtifactsRequest pageToken. */
                    public pageToken: string;

                    /** ListArtifactsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListArtifactsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListArtifactsRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListArtifactsRequest): google.cloud.apigeeregistry.v1.ListArtifactsRequest;

                    /**
                     * Encodes the specified ListArtifactsRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListArtifactsRequest.verify|verify} messages.
                     * @param message ListArtifactsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListArtifactsRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListArtifactsRequest.verify|verify} messages.
                     * @param message ListArtifactsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListArtifactsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListArtifactsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListArtifactsRequest;

                    /**
                     * Decodes a ListArtifactsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListArtifactsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListArtifactsRequest;

                    /**
                     * Verifies a ListArtifactsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListArtifactsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListArtifactsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListArtifactsRequest;

                    /**
                     * Creates a plain object from a ListArtifactsRequest message. Also converts values to other types if specified.
                     * @param message ListArtifactsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListArtifactsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListArtifactsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListArtifactsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListArtifactsResponse. */
                interface IListArtifactsResponse {

                    /** ListArtifactsResponse artifacts */
                    artifacts?: (google.cloud.apigeeregistry.v1.IArtifact[]|null);

                    /** ListArtifactsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListArtifactsResponse. */
                class ListArtifactsResponse implements IListArtifactsResponse {

                    /**
                     * Constructs a new ListArtifactsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IListArtifactsResponse);

                    /** ListArtifactsResponse artifacts. */
                    public artifacts: google.cloud.apigeeregistry.v1.IArtifact[];

                    /** ListArtifactsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListArtifactsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListArtifactsResponse instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IListArtifactsResponse): google.cloud.apigeeregistry.v1.ListArtifactsResponse;

                    /**
                     * Encodes the specified ListArtifactsResponse message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListArtifactsResponse.verify|verify} messages.
                     * @param message ListArtifactsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IListArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListArtifactsResponse message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ListArtifactsResponse.verify|verify} messages.
                     * @param message ListArtifactsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IListArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListArtifactsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListArtifactsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ListArtifactsResponse;

                    /**
                     * Decodes a ListArtifactsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListArtifactsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ListArtifactsResponse;

                    /**
                     * Verifies a ListArtifactsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListArtifactsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListArtifactsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ListArtifactsResponse;

                    /**
                     * Creates a plain object from a ListArtifactsResponse message. Also converts values to other types if specified.
                     * @param message ListArtifactsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ListArtifactsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListArtifactsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListArtifactsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetArtifactRequest. */
                interface IGetArtifactRequest {

                    /** GetArtifactRequest name */
                    name?: (string|null);
                }

                /** Represents a GetArtifactRequest. */
                class GetArtifactRequest implements IGetArtifactRequest {

                    /**
                     * Constructs a new GetArtifactRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IGetArtifactRequest);

                    /** GetArtifactRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetArtifactRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetArtifactRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IGetArtifactRequest): google.cloud.apigeeregistry.v1.GetArtifactRequest;

                    /**
                     * Encodes the specified GetArtifactRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetArtifactRequest.verify|verify} messages.
                     * @param message GetArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IGetArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetArtifactRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetArtifactRequest.verify|verify} messages.
                     * @param message GetArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IGetArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetArtifactRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.GetArtifactRequest;

                    /**
                     * Decodes a GetArtifactRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.GetArtifactRequest;

                    /**
                     * Verifies a GetArtifactRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetArtifactRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetArtifactRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.GetArtifactRequest;

                    /**
                     * Creates a plain object from a GetArtifactRequest message. Also converts values to other types if specified.
                     * @param message GetArtifactRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.GetArtifactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetArtifactRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetArtifactRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetArtifactContentsRequest. */
                interface IGetArtifactContentsRequest {

                    /** GetArtifactContentsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetArtifactContentsRequest. */
                class GetArtifactContentsRequest implements IGetArtifactContentsRequest {

                    /**
                     * Constructs a new GetArtifactContentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IGetArtifactContentsRequest);

                    /** GetArtifactContentsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetArtifactContentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetArtifactContentsRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IGetArtifactContentsRequest): google.cloud.apigeeregistry.v1.GetArtifactContentsRequest;

                    /**
                     * Encodes the specified GetArtifactContentsRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetArtifactContentsRequest.verify|verify} messages.
                     * @param message GetArtifactContentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IGetArtifactContentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetArtifactContentsRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.GetArtifactContentsRequest.verify|verify} messages.
                     * @param message GetArtifactContentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IGetArtifactContentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetArtifactContentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetArtifactContentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.GetArtifactContentsRequest;

                    /**
                     * Decodes a GetArtifactContentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetArtifactContentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.GetArtifactContentsRequest;

                    /**
                     * Verifies a GetArtifactContentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetArtifactContentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetArtifactContentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.GetArtifactContentsRequest;

                    /**
                     * Creates a plain object from a GetArtifactContentsRequest message. Also converts values to other types if specified.
                     * @param message GetArtifactContentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.GetArtifactContentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetArtifactContentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetArtifactContentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateArtifactRequest. */
                interface ICreateArtifactRequest {

                    /** CreateArtifactRequest parent */
                    parent?: (string|null);

                    /** CreateArtifactRequest artifact */
                    artifact?: (google.cloud.apigeeregistry.v1.IArtifact|null);

                    /** CreateArtifactRequest artifactId */
                    artifactId?: (string|null);
                }

                /** Represents a CreateArtifactRequest. */
                class CreateArtifactRequest implements ICreateArtifactRequest {

                    /**
                     * Constructs a new CreateArtifactRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.ICreateArtifactRequest);

                    /** CreateArtifactRequest parent. */
                    public parent: string;

                    /** CreateArtifactRequest artifact. */
                    public artifact?: (google.cloud.apigeeregistry.v1.IArtifact|null);

                    /** CreateArtifactRequest artifactId. */
                    public artifactId: string;

                    /**
                     * Creates a new CreateArtifactRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateArtifactRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.ICreateArtifactRequest): google.cloud.apigeeregistry.v1.CreateArtifactRequest;

                    /**
                     * Encodes the specified CreateArtifactRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateArtifactRequest.verify|verify} messages.
                     * @param message CreateArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.ICreateArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateArtifactRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.CreateArtifactRequest.verify|verify} messages.
                     * @param message CreateArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.ICreateArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateArtifactRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.CreateArtifactRequest;

                    /**
                     * Decodes a CreateArtifactRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.CreateArtifactRequest;

                    /**
                     * Verifies a CreateArtifactRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateArtifactRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateArtifactRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.CreateArtifactRequest;

                    /**
                     * Creates a plain object from a CreateArtifactRequest message. Also converts values to other types if specified.
                     * @param message CreateArtifactRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.CreateArtifactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateArtifactRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateArtifactRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ReplaceArtifactRequest. */
                interface IReplaceArtifactRequest {

                    /** ReplaceArtifactRequest artifact */
                    artifact?: (google.cloud.apigeeregistry.v1.IArtifact|null);
                }

                /** Represents a ReplaceArtifactRequest. */
                class ReplaceArtifactRequest implements IReplaceArtifactRequest {

                    /**
                     * Constructs a new ReplaceArtifactRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IReplaceArtifactRequest);

                    /** ReplaceArtifactRequest artifact. */
                    public artifact?: (google.cloud.apigeeregistry.v1.IArtifact|null);

                    /**
                     * Creates a new ReplaceArtifactRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ReplaceArtifactRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IReplaceArtifactRequest): google.cloud.apigeeregistry.v1.ReplaceArtifactRequest;

                    /**
                     * Encodes the specified ReplaceArtifactRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.ReplaceArtifactRequest.verify|verify} messages.
                     * @param message ReplaceArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IReplaceArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ReplaceArtifactRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.ReplaceArtifactRequest.verify|verify} messages.
                     * @param message ReplaceArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IReplaceArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ReplaceArtifactRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ReplaceArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.ReplaceArtifactRequest;

                    /**
                     * Decodes a ReplaceArtifactRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ReplaceArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.ReplaceArtifactRequest;

                    /**
                     * Verifies a ReplaceArtifactRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ReplaceArtifactRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ReplaceArtifactRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.ReplaceArtifactRequest;

                    /**
                     * Creates a plain object from a ReplaceArtifactRequest message. Also converts values to other types if specified.
                     * @param message ReplaceArtifactRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.ReplaceArtifactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ReplaceArtifactRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ReplaceArtifactRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteArtifactRequest. */
                interface IDeleteArtifactRequest {

                    /** DeleteArtifactRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteArtifactRequest. */
                class DeleteArtifactRequest implements IDeleteArtifactRequest {

                    /**
                     * Constructs a new DeleteArtifactRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.apigeeregistry.v1.IDeleteArtifactRequest);

                    /** DeleteArtifactRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteArtifactRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteArtifactRequest instance
                     */
                    public static create(properties?: google.cloud.apigeeregistry.v1.IDeleteArtifactRequest): google.cloud.apigeeregistry.v1.DeleteArtifactRequest;

                    /**
                     * Encodes the specified DeleteArtifactRequest message. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteArtifactRequest.verify|verify} messages.
                     * @param message DeleteArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.apigeeregistry.v1.IDeleteArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteArtifactRequest message, length delimited. Does not implicitly {@link google.cloud.apigeeregistry.v1.DeleteArtifactRequest.verify|verify} messages.
                     * @param message DeleteArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.apigeeregistry.v1.IDeleteArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteArtifactRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.apigeeregistry.v1.DeleteArtifactRequest;

                    /**
                     * Decodes a DeleteArtifactRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.apigeeregistry.v1.DeleteArtifactRequest;

                    /**
                     * Verifies a DeleteArtifactRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteArtifactRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteArtifactRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.apigeeregistry.v1.DeleteArtifactRequest;

                    /**
                     * Creates a plain object from a DeleteArtifactRequest message. Also converts values to other types if specified.
                     * @param message DeleteArtifactRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.apigeeregistry.v1.DeleteArtifactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteArtifactRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteArtifactRequest
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

        /** Properties of a HttpBody. */
        interface IHttpBody {

            /** HttpBody contentType */
            contentType?: (string|null);

            /** HttpBody data */
            data?: (Uint8Array|Buffer|string|null);

            /** HttpBody extensions */
            extensions?: (google.protobuf.IAny[]|null);
        }

        /** Represents a HttpBody. */
        class HttpBody implements IHttpBody {

            /**
             * Constructs a new HttpBody.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpBody);

            /** HttpBody contentType. */
            public contentType: string;

            /** HttpBody data. */
            public data: (Uint8Array|Buffer|string);

            /** HttpBody extensions. */
            public extensions: google.protobuf.IAny[];

            /**
             * Creates a new HttpBody instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpBody instance
             */
            public static create(properties?: google.api.IHttpBody): google.api.HttpBody;

            /**
             * Encodes the specified HttpBody message. Does not implicitly {@link google.api.HttpBody.verify|verify} messages.
             * @param message HttpBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpBody message, length delimited. Does not implicitly {@link google.api.HttpBody.verify|verify} messages.
             * @param message HttpBody message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpBody, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpBody message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpBody;

            /**
             * Decodes a HttpBody message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpBody
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpBody;

            /**
             * Verifies a HttpBody message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpBody message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpBody
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpBody;

            /**
             * Creates a plain object from a HttpBody message. Also converts values to other types if specified.
             * @param message HttpBody
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpBody to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpBody
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
