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

        /** Namespace datafusion. */
        namespace datafusion {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a DataFusion */
                class DataFusion extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DataFusion service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DataFusion service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DataFusion;

                    /**
                     * Calls ListAvailableVersions.
                     * @param request ListAvailableVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAvailableVersionsResponse
                     */
                    public listAvailableVersions(request: google.cloud.datafusion.v1.IListAvailableVersionsRequest, callback: google.cloud.datafusion.v1.DataFusion.ListAvailableVersionsCallback): void;

                    /**
                     * Calls ListAvailableVersions.
                     * @param request ListAvailableVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listAvailableVersions(request: google.cloud.datafusion.v1.IListAvailableVersionsRequest): Promise<google.cloud.datafusion.v1.ListAvailableVersionsResponse>;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInstancesResponse
                     */
                    public listInstances(request: google.cloud.datafusion.v1.IListInstancesRequest, callback: google.cloud.datafusion.v1.DataFusion.ListInstancesCallback): void;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @returns Promise
                     */
                    public listInstances(request: google.cloud.datafusion.v1.IListInstancesRequest): Promise<google.cloud.datafusion.v1.ListInstancesResponse>;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public getInstance(request: google.cloud.datafusion.v1.IGetInstanceRequest, callback: google.cloud.datafusion.v1.DataFusion.GetInstanceCallback): void;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstance(request: google.cloud.datafusion.v1.IGetInstanceRequest): Promise<google.cloud.datafusion.v1.Instance>;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createInstance(request: google.cloud.datafusion.v1.ICreateInstanceRequest, callback: google.cloud.datafusion.v1.DataFusion.CreateInstanceCallback): void;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public createInstance(request: google.cloud.datafusion.v1.ICreateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteInstance(request: google.cloud.datafusion.v1.IDeleteInstanceRequest, callback: google.cloud.datafusion.v1.DataFusion.DeleteInstanceCallback): void;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteInstance(request: google.cloud.datafusion.v1.IDeleteInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateInstance(request: google.cloud.datafusion.v1.IUpdateInstanceRequest, callback: google.cloud.datafusion.v1.DataFusion.UpdateInstanceCallback): void;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public updateInstance(request: google.cloud.datafusion.v1.IUpdateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RestartInstance.
                     * @param request RestartInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restartInstance(request: google.cloud.datafusion.v1.IRestartInstanceRequest, callback: google.cloud.datafusion.v1.DataFusion.RestartInstanceCallback): void;

                    /**
                     * Calls RestartInstance.
                     * @param request RestartInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public restartInstance(request: google.cloud.datafusion.v1.IRestartInstanceRequest): Promise<google.longrunning.Operation>;
                }

                namespace DataFusion {

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1.DataFusion#listAvailableVersions}.
                     * @param error Error, if any
                     * @param [response] ListAvailableVersionsResponse
                     */
                    type ListAvailableVersionsCallback = (error: (Error|null), response?: google.cloud.datafusion.v1.ListAvailableVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1.DataFusion#listInstances}.
                     * @param error Error, if any
                     * @param [response] ListInstancesResponse
                     */
                    type ListInstancesCallback = (error: (Error|null), response?: google.cloud.datafusion.v1.ListInstancesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1.DataFusion#getInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type GetInstanceCallback = (error: (Error|null), response?: google.cloud.datafusion.v1.Instance) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1.DataFusion#createInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1.DataFusion#deleteInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1.DataFusion#updateInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1.DataFusion#restartInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestartInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a NetworkConfig. */
                interface INetworkConfig {

                    /** NetworkConfig network */
                    network?: (string|null);

                    /** NetworkConfig ipAllocation */
                    ipAllocation?: (string|null);
                }

                /** Represents a NetworkConfig. */
                class NetworkConfig implements INetworkConfig {

                    /**
                     * Constructs a new NetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.INetworkConfig);

                    /** NetworkConfig network. */
                    public network: string;

                    /** NetworkConfig ipAllocation. */
                    public ipAllocation: string;

                    /**
                     * Creates a new NetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkConfig instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.INetworkConfig): google.cloud.datafusion.v1.NetworkConfig;

                    /**
                     * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.datafusion.v1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.NetworkConfig;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.NetworkConfig;

                    /**
                     * Verifies a NetworkConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.NetworkConfig;

                    /**
                     * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                     * @param message NetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Version. */
                interface IVersion {

                    /** Version versionNumber */
                    versionNumber?: (string|null);

                    /** Version defaultVersion */
                    defaultVersion?: (boolean|null);

                    /** Version availableFeatures */
                    availableFeatures?: (string[]|null);
                }

                /** Represents a Version. */
                class Version implements IVersion {

                    /**
                     * Constructs a new Version.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.IVersion);

                    /** Version versionNumber. */
                    public versionNumber: string;

                    /** Version defaultVersion. */
                    public defaultVersion: boolean;

                    /** Version availableFeatures. */
                    public availableFeatures: string[];

                    /**
                     * Creates a new Version instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Version instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IVersion): google.cloud.datafusion.v1.Version;

                    /**
                     * Encodes the specified Version message. Does not implicitly {@link google.cloud.datafusion.v1.Version.verify|verify} messages.
                     * @param message Version message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Version message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.Version.verify|verify} messages.
                     * @param message Version message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Version message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Version
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.Version;

                    /**
                     * Decodes a Version message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Version
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.Version;

                    /**
                     * Verifies a Version message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Version message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Version
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.Version;

                    /**
                     * Creates a plain object from a Version message. Also converts values to other types if specified.
                     * @param message Version
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.Version, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Version to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Accelerator. */
                interface IAccelerator {

                    /** Accelerator acceleratorType */
                    acceleratorType?: (google.cloud.datafusion.v1.Accelerator.AcceleratorType|keyof typeof google.cloud.datafusion.v1.Accelerator.AcceleratorType|null);

                    /** Accelerator state */
                    state?: (google.cloud.datafusion.v1.Accelerator.State|keyof typeof google.cloud.datafusion.v1.Accelerator.State|null);
                }

                /** Represents an Accelerator. */
                class Accelerator implements IAccelerator {

                    /**
                     * Constructs a new Accelerator.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.IAccelerator);

                    /** Accelerator acceleratorType. */
                    public acceleratorType: (google.cloud.datafusion.v1.Accelerator.AcceleratorType|keyof typeof google.cloud.datafusion.v1.Accelerator.AcceleratorType);

                    /** Accelerator state. */
                    public state: (google.cloud.datafusion.v1.Accelerator.State|keyof typeof google.cloud.datafusion.v1.Accelerator.State);

                    /**
                     * Creates a new Accelerator instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Accelerator instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IAccelerator): google.cloud.datafusion.v1.Accelerator;

                    /**
                     * Encodes the specified Accelerator message. Does not implicitly {@link google.cloud.datafusion.v1.Accelerator.verify|verify} messages.
                     * @param message Accelerator message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Accelerator message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.Accelerator.verify|verify} messages.
                     * @param message Accelerator message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Accelerator message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Accelerator
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.Accelerator;

                    /**
                     * Decodes an Accelerator message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Accelerator
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.Accelerator;

                    /**
                     * Verifies an Accelerator message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Accelerator message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Accelerator
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.Accelerator;

                    /**
                     * Creates a plain object from an Accelerator message. Also converts values to other types if specified.
                     * @param message Accelerator
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.Accelerator, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Accelerator to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Accelerator {

                    /** AcceleratorType enum. */
                    enum AcceleratorType {
                        ACCELERATOR_TYPE_UNSPECIFIED = 0,
                        CDC = 1,
                        HEALTHCARE = 2,
                        CCAI_INSIGHTS = 3
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2,
                        UNKNOWN = 3
                    }
                }

                /** Properties of a CryptoKeyConfig. */
                interface ICryptoKeyConfig {

                    /** CryptoKeyConfig keyReference */
                    keyReference?: (string|null);
                }

                /** Represents a CryptoKeyConfig. */
                class CryptoKeyConfig implements ICryptoKeyConfig {

                    /**
                     * Constructs a new CryptoKeyConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.ICryptoKeyConfig);

                    /** CryptoKeyConfig keyReference. */
                    public keyReference: string;

                    /**
                     * Creates a new CryptoKeyConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CryptoKeyConfig instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.ICryptoKeyConfig): google.cloud.datafusion.v1.CryptoKeyConfig;

                    /**
                     * Encodes the specified CryptoKeyConfig message. Does not implicitly {@link google.cloud.datafusion.v1.CryptoKeyConfig.verify|verify} messages.
                     * @param message CryptoKeyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.ICryptoKeyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CryptoKeyConfig message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.CryptoKeyConfig.verify|verify} messages.
                     * @param message CryptoKeyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.ICryptoKeyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CryptoKeyConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CryptoKeyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.CryptoKeyConfig;

                    /**
                     * Decodes a CryptoKeyConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CryptoKeyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.CryptoKeyConfig;

                    /**
                     * Verifies a CryptoKeyConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CryptoKeyConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CryptoKeyConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.CryptoKeyConfig;

                    /**
                     * Creates a plain object from a CryptoKeyConfig message. Also converts values to other types if specified.
                     * @param message CryptoKeyConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.CryptoKeyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CryptoKeyConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Instance. */
                interface IInstance {

                    /** Instance name */
                    name?: (string|null);

                    /** Instance description */
                    description?: (string|null);

                    /** Instance type */
                    type?: (google.cloud.datafusion.v1.Instance.Type|keyof typeof google.cloud.datafusion.v1.Instance.Type|null);

                    /** Instance enableStackdriverLogging */
                    enableStackdriverLogging?: (boolean|null);

                    /** Instance enableStackdriverMonitoring */
                    enableStackdriverMonitoring?: (boolean|null);

                    /** Instance privateInstance */
                    privateInstance?: (boolean|null);

                    /** Instance networkConfig */
                    networkConfig?: (google.cloud.datafusion.v1.INetworkConfig|null);

                    /** Instance labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Instance options */
                    options?: ({ [k: string]: string }|null);

                    /** Instance createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance state */
                    state?: (google.cloud.datafusion.v1.Instance.State|keyof typeof google.cloud.datafusion.v1.Instance.State|null);

                    /** Instance stateMessage */
                    stateMessage?: (string|null);

                    /** Instance serviceEndpoint */
                    serviceEndpoint?: (string|null);

                    /** Instance zone */
                    zone?: (string|null);

                    /** Instance version */
                    version?: (string|null);

                    /** Instance serviceAccount */
                    serviceAccount?: (string|null);

                    /** Instance displayName */
                    displayName?: (string|null);

                    /** Instance availableVersion */
                    availableVersion?: (google.cloud.datafusion.v1.IVersion[]|null);

                    /** Instance apiEndpoint */
                    apiEndpoint?: (string|null);

                    /** Instance gcsBucket */
                    gcsBucket?: (string|null);

                    /** Instance accelerators */
                    accelerators?: (google.cloud.datafusion.v1.IAccelerator[]|null);

                    /** Instance p4ServiceAccount */
                    p4ServiceAccount?: (string|null);

                    /** Instance tenantProjectId */
                    tenantProjectId?: (string|null);

                    /** Instance dataprocServiceAccount */
                    dataprocServiceAccount?: (string|null);

                    /** Instance enableRbac */
                    enableRbac?: (boolean|null);

                    /** Instance cryptoKeyConfig */
                    cryptoKeyConfig?: (google.cloud.datafusion.v1.ICryptoKeyConfig|null);
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.IInstance);

                    /** Instance name. */
                    public name: string;

                    /** Instance description. */
                    public description: string;

                    /** Instance type. */
                    public type: (google.cloud.datafusion.v1.Instance.Type|keyof typeof google.cloud.datafusion.v1.Instance.Type);

                    /** Instance enableStackdriverLogging. */
                    public enableStackdriverLogging: boolean;

                    /** Instance enableStackdriverMonitoring. */
                    public enableStackdriverMonitoring: boolean;

                    /** Instance privateInstance. */
                    public privateInstance: boolean;

                    /** Instance networkConfig. */
                    public networkConfig?: (google.cloud.datafusion.v1.INetworkConfig|null);

                    /** Instance labels. */
                    public labels: { [k: string]: string };

                    /** Instance options. */
                    public options: { [k: string]: string };

                    /** Instance createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance state. */
                    public state: (google.cloud.datafusion.v1.Instance.State|keyof typeof google.cloud.datafusion.v1.Instance.State);

                    /** Instance stateMessage. */
                    public stateMessage: string;

                    /** Instance serviceEndpoint. */
                    public serviceEndpoint: string;

                    /** Instance zone. */
                    public zone: string;

                    /** Instance version. */
                    public version: string;

                    /** Instance serviceAccount. */
                    public serviceAccount: string;

                    /** Instance displayName. */
                    public displayName: string;

                    /** Instance availableVersion. */
                    public availableVersion: google.cloud.datafusion.v1.IVersion[];

                    /** Instance apiEndpoint. */
                    public apiEndpoint: string;

                    /** Instance gcsBucket. */
                    public gcsBucket: string;

                    /** Instance accelerators. */
                    public accelerators: google.cloud.datafusion.v1.IAccelerator[];

                    /** Instance p4ServiceAccount. */
                    public p4ServiceAccount: string;

                    /** Instance tenantProjectId. */
                    public tenantProjectId: string;

                    /** Instance dataprocServiceAccount. */
                    public dataprocServiceAccount: string;

                    /** Instance enableRbac. */
                    public enableRbac: boolean;

                    /** Instance cryptoKeyConfig. */
                    public cryptoKeyConfig?: (google.cloud.datafusion.v1.ICryptoKeyConfig|null);

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IInstance): google.cloud.datafusion.v1.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.datafusion.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.Instance;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Instance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Instance {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        BASIC = 1,
                        ENTERPRISE = 2,
                        DEVELOPER = 3
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        FAILED = 3,
                        DELETING = 4,
                        UPGRADING = 5,
                        RESTARTING = 6,
                        UPDATING = 7,
                        AUTO_UPDATING = 8,
                        AUTO_UPGRADING = 9
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
                    constructor(properties?: google.cloud.datafusion.v1.IListInstancesRequest);

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
                    public static create(properties?: google.cloud.datafusion.v1.IListInstancesRequest): google.cloud.datafusion.v1.ListInstancesRequest;

                    /**
                     * Encodes the specified ListInstancesRequest message. Does not implicitly {@link google.cloud.datafusion.v1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.ListInstancesRequest;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.ListInstancesRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.ListInstancesRequest;

                    /**
                     * Creates a plain object from a ListInstancesRequest message. Also converts values to other types if specified.
                     * @param message ListInstancesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.ListInstancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListInstancesResponse. */
                interface IListInstancesResponse {

                    /** ListInstancesResponse instances */
                    instances?: (google.cloud.datafusion.v1.IInstance[]|null);

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
                    constructor(properties?: google.cloud.datafusion.v1.IListInstancesResponse);

                    /** ListInstancesResponse instances. */
                    public instances: google.cloud.datafusion.v1.IInstance[];

                    /** ListInstancesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListInstancesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListInstancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesResponse instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IListInstancesResponse): google.cloud.datafusion.v1.ListInstancesResponse;

                    /**
                     * Encodes the specified ListInstancesResponse message. Does not implicitly {@link google.cloud.datafusion.v1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesResponse message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.ListInstancesResponse;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.ListInstancesResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.ListInstancesResponse;

                    /**
                     * Creates a plain object from a ListInstancesResponse message. Also converts values to other types if specified.
                     * @param message ListInstancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.ListInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAvailableVersionsRequest. */
                interface IListAvailableVersionsRequest {

                    /** ListAvailableVersionsRequest parent */
                    parent?: (string|null);

                    /** ListAvailableVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAvailableVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAvailableVersionsRequest latestPatchOnly */
                    latestPatchOnly?: (boolean|null);
                }

                /** Represents a ListAvailableVersionsRequest. */
                class ListAvailableVersionsRequest implements IListAvailableVersionsRequest {

                    /**
                     * Constructs a new ListAvailableVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.IListAvailableVersionsRequest);

                    /** ListAvailableVersionsRequest parent. */
                    public parent: string;

                    /** ListAvailableVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListAvailableVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListAvailableVersionsRequest latestPatchOnly. */
                    public latestPatchOnly: boolean;

                    /**
                     * Creates a new ListAvailableVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAvailableVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IListAvailableVersionsRequest): google.cloud.datafusion.v1.ListAvailableVersionsRequest;

                    /**
                     * Encodes the specified ListAvailableVersionsRequest message. Does not implicitly {@link google.cloud.datafusion.v1.ListAvailableVersionsRequest.verify|verify} messages.
                     * @param message ListAvailableVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IListAvailableVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAvailableVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.ListAvailableVersionsRequest.verify|verify} messages.
                     * @param message ListAvailableVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IListAvailableVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAvailableVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAvailableVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.ListAvailableVersionsRequest;

                    /**
                     * Decodes a ListAvailableVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAvailableVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.ListAvailableVersionsRequest;

                    /**
                     * Verifies a ListAvailableVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAvailableVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAvailableVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.ListAvailableVersionsRequest;

                    /**
                     * Creates a plain object from a ListAvailableVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListAvailableVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.ListAvailableVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAvailableVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAvailableVersionsResponse. */
                interface IListAvailableVersionsResponse {

                    /** ListAvailableVersionsResponse availableVersions */
                    availableVersions?: (google.cloud.datafusion.v1.IVersion[]|null);

                    /** ListAvailableVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAvailableVersionsResponse. */
                class ListAvailableVersionsResponse implements IListAvailableVersionsResponse {

                    /**
                     * Constructs a new ListAvailableVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.IListAvailableVersionsResponse);

                    /** ListAvailableVersionsResponse availableVersions. */
                    public availableVersions: google.cloud.datafusion.v1.IVersion[];

                    /** ListAvailableVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAvailableVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAvailableVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IListAvailableVersionsResponse): google.cloud.datafusion.v1.ListAvailableVersionsResponse;

                    /**
                     * Encodes the specified ListAvailableVersionsResponse message. Does not implicitly {@link google.cloud.datafusion.v1.ListAvailableVersionsResponse.verify|verify} messages.
                     * @param message ListAvailableVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IListAvailableVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAvailableVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.ListAvailableVersionsResponse.verify|verify} messages.
                     * @param message ListAvailableVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IListAvailableVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAvailableVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAvailableVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.ListAvailableVersionsResponse;

                    /**
                     * Decodes a ListAvailableVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAvailableVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.ListAvailableVersionsResponse;

                    /**
                     * Verifies a ListAvailableVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAvailableVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAvailableVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.ListAvailableVersionsResponse;

                    /**
                     * Creates a plain object from a ListAvailableVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListAvailableVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.ListAvailableVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAvailableVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: google.cloud.datafusion.v1.IGetInstanceRequest);

                    /** GetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IGetInstanceRequest): google.cloud.datafusion.v1.GetInstanceRequest;

                    /**
                     * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.GetInstanceRequest;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.GetInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.GetInstanceRequest;

                    /**
                     * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateInstanceRequest. */
                interface ICreateInstanceRequest {

                    /** CreateInstanceRequest parent */
                    parent?: (string|null);

                    /** CreateInstanceRequest instanceId */
                    instanceId?: (string|null);

                    /** CreateInstanceRequest instance */
                    instance?: (google.cloud.datafusion.v1.IInstance|null);
                }

                /** Represents a CreateInstanceRequest. */
                class CreateInstanceRequest implements ICreateInstanceRequest {

                    /**
                     * Constructs a new CreateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.ICreateInstanceRequest);

                    /** CreateInstanceRequest parent. */
                    public parent: string;

                    /** CreateInstanceRequest instanceId. */
                    public instanceId: string;

                    /** CreateInstanceRequest instance. */
                    public instance?: (google.cloud.datafusion.v1.IInstance|null);

                    /**
                     * Creates a new CreateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.ICreateInstanceRequest): google.cloud.datafusion.v1.CreateInstanceRequest;

                    /**
                     * Encodes the specified CreateInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.CreateInstanceRequest;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.CreateInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.CreateInstanceRequest;

                    /**
                     * Creates a plain object from a CreateInstanceRequest message. Also converts values to other types if specified.
                     * @param message CreateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.CreateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: google.cloud.datafusion.v1.IDeleteInstanceRequest);

                    /** DeleteInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IDeleteInstanceRequest): google.cloud.datafusion.v1.DeleteInstanceRequest;

                    /**
                     * Encodes the specified DeleteInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.DeleteInstanceRequest;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.DeleteInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.DeleteInstanceRequest;

                    /**
                     * Creates a plain object from a DeleteInstanceRequest message. Also converts values to other types if specified.
                     * @param message DeleteInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.DeleteInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateInstanceRequest. */
                interface IUpdateInstanceRequest {

                    /** UpdateInstanceRequest instance */
                    instance?: (google.cloud.datafusion.v1.IInstance|null);

                    /** UpdateInstanceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateInstanceRequest. */
                class UpdateInstanceRequest implements IUpdateInstanceRequest {

                    /**
                     * Constructs a new UpdateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.IUpdateInstanceRequest);

                    /** UpdateInstanceRequest instance. */
                    public instance?: (google.cloud.datafusion.v1.IInstance|null);

                    /** UpdateInstanceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IUpdateInstanceRequest): google.cloud.datafusion.v1.UpdateInstanceRequest;

                    /**
                     * Encodes the specified UpdateInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.UpdateInstanceRequest;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.UpdateInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.UpdateInstanceRequest;

                    /**
                     * Creates a plain object from an UpdateInstanceRequest message. Also converts values to other types if specified.
                     * @param message UpdateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.UpdateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RestartInstanceRequest. */
                interface IRestartInstanceRequest {

                    /** RestartInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a RestartInstanceRequest. */
                class RestartInstanceRequest implements IRestartInstanceRequest {

                    /**
                     * Constructs a new RestartInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.IRestartInstanceRequest);

                    /** RestartInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new RestartInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestartInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IRestartInstanceRequest): google.cloud.datafusion.v1.RestartInstanceRequest;

                    /**
                     * Encodes the specified RestartInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1.RestartInstanceRequest.verify|verify} messages.
                     * @param message RestartInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IRestartInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestartInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.RestartInstanceRequest.verify|verify} messages.
                     * @param message RestartInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IRestartInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestartInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestartInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.RestartInstanceRequest;

                    /**
                     * Decodes a RestartInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestartInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.RestartInstanceRequest;

                    /**
                     * Verifies a RestartInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestartInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestartInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.RestartInstanceRequest;

                    /**
                     * Creates a plain object from a RestartInstanceRequest message. Also converts values to other types if specified.
                     * @param message RestartInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.RestartInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestartInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

                    /** OperationMetadata requestedCancellation */
                    requestedCancellation?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);

                    /** OperationMetadata additionalStatus */
                    additionalStatus?: ({ [k: string]: string }|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata requestedCancellation. */
                    public requestedCancellation: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /** OperationMetadata additionalStatus. */
                    public additionalStatus: { [k: string]: string };

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1.IOperationMetadata): google.cloud.datafusion.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.datafusion.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a DataFusion */
                class DataFusion extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DataFusion service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DataFusion service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DataFusion;

                    /**
                     * Calls ListAvailableVersions.
                     * @param request ListAvailableVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAvailableVersionsResponse
                     */
                    public listAvailableVersions(request: google.cloud.datafusion.v1beta1.IListAvailableVersionsRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.ListAvailableVersionsCallback): void;

                    /**
                     * Calls ListAvailableVersions.
                     * @param request ListAvailableVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listAvailableVersions(request: google.cloud.datafusion.v1beta1.IListAvailableVersionsRequest): Promise<google.cloud.datafusion.v1beta1.ListAvailableVersionsResponse>;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInstancesResponse
                     */
                    public listInstances(request: google.cloud.datafusion.v1beta1.IListInstancesRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.ListInstancesCallback): void;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @returns Promise
                     */
                    public listInstances(request: google.cloud.datafusion.v1beta1.IListInstancesRequest): Promise<google.cloud.datafusion.v1beta1.ListInstancesResponse>;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public getInstance(request: google.cloud.datafusion.v1beta1.IGetInstanceRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.GetInstanceCallback): void;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstance(request: google.cloud.datafusion.v1beta1.IGetInstanceRequest): Promise<google.cloud.datafusion.v1beta1.Instance>;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createInstance(request: google.cloud.datafusion.v1beta1.ICreateInstanceRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.CreateInstanceCallback): void;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public createInstance(request: google.cloud.datafusion.v1beta1.ICreateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteInstance(request: google.cloud.datafusion.v1beta1.IDeleteInstanceRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.DeleteInstanceCallback): void;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteInstance(request: google.cloud.datafusion.v1beta1.IDeleteInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateInstance(request: google.cloud.datafusion.v1beta1.IUpdateInstanceRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.UpdateInstanceCallback): void;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public updateInstance(request: google.cloud.datafusion.v1beta1.IUpdateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RestartInstance.
                     * @param request RestartInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restartInstance(request: google.cloud.datafusion.v1beta1.IRestartInstanceRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.RestartInstanceCallback): void;

                    /**
                     * Calls RestartInstance.
                     * @param request RestartInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public restartInstance(request: google.cloud.datafusion.v1beta1.IRestartInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpgradeInstance.
                     * @param request UpgradeInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public upgradeInstance(request: google.cloud.datafusion.v1beta1.IUpgradeInstanceRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.UpgradeInstanceCallback): void;

                    /**
                     * Calls UpgradeInstance.
                     * @param request UpgradeInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public upgradeInstance(request: google.cloud.datafusion.v1beta1.IUpgradeInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RemoveIamPolicy.
                     * @param request RemoveIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RemoveIamPolicyResponse
                     */
                    public removeIamPolicy(request: google.cloud.datafusion.v1beta1.IRemoveIamPolicyRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.RemoveIamPolicyCallback): void;

                    /**
                     * Calls RemoveIamPolicy.
                     * @param request RemoveIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public removeIamPolicy(request: google.cloud.datafusion.v1beta1.IRemoveIamPolicyRequest): Promise<google.cloud.datafusion.v1beta1.RemoveIamPolicyResponse>;

                    /**
                     * Calls ListNamespaces.
                     * @param request ListNamespacesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListNamespacesResponse
                     */
                    public listNamespaces(request: google.cloud.datafusion.v1beta1.IListNamespacesRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.ListNamespacesCallback): void;

                    /**
                     * Calls ListNamespaces.
                     * @param request ListNamespacesRequest message or plain object
                     * @returns Promise
                     */
                    public listNamespaces(request: google.cloud.datafusion.v1beta1.IListNamespacesRequest): Promise<google.cloud.datafusion.v1beta1.ListNamespacesResponse>;

                    /**
                     * Calls AddDnsPeering.
                     * @param request AddDnsPeeringRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AddDnsPeeringResponse
                     */
                    public addDnsPeering(request: google.cloud.datafusion.v1beta1.IAddDnsPeeringRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.AddDnsPeeringCallback): void;

                    /**
                     * Calls AddDnsPeering.
                     * @param request AddDnsPeeringRequest message or plain object
                     * @returns Promise
                     */
                    public addDnsPeering(request: google.cloud.datafusion.v1beta1.IAddDnsPeeringRequest): Promise<google.cloud.datafusion.v1beta1.AddDnsPeeringResponse>;

                    /**
                     * Calls RemoveDnsPeering.
                     * @param request RemoveDnsPeeringRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RemoveDnsPeeringResponse
                     */
                    public removeDnsPeering(request: google.cloud.datafusion.v1beta1.IRemoveDnsPeeringRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.RemoveDnsPeeringCallback): void;

                    /**
                     * Calls RemoveDnsPeering.
                     * @param request RemoveDnsPeeringRequest message or plain object
                     * @returns Promise
                     */
                    public removeDnsPeering(request: google.cloud.datafusion.v1beta1.IRemoveDnsPeeringRequest): Promise<google.cloud.datafusion.v1beta1.RemoveDnsPeeringResponse>;

                    /**
                     * Calls ListDnsPeerings.
                     * @param request ListDnsPeeringsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDnsPeeringsResponse
                     */
                    public listDnsPeerings(request: google.cloud.datafusion.v1beta1.IListDnsPeeringsRequest, callback: google.cloud.datafusion.v1beta1.DataFusion.ListDnsPeeringsCallback): void;

                    /**
                     * Calls ListDnsPeerings.
                     * @param request ListDnsPeeringsRequest message or plain object
                     * @returns Promise
                     */
                    public listDnsPeerings(request: google.cloud.datafusion.v1beta1.IListDnsPeeringsRequest): Promise<google.cloud.datafusion.v1beta1.ListDnsPeeringsResponse>;
                }

                namespace DataFusion {

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#listAvailableVersions}.
                     * @param error Error, if any
                     * @param [response] ListAvailableVersionsResponse
                     */
                    type ListAvailableVersionsCallback = (error: (Error|null), response?: google.cloud.datafusion.v1beta1.ListAvailableVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#listInstances}.
                     * @param error Error, if any
                     * @param [response] ListInstancesResponse
                     */
                    type ListInstancesCallback = (error: (Error|null), response?: google.cloud.datafusion.v1beta1.ListInstancesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#getInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type GetInstanceCallback = (error: (Error|null), response?: google.cloud.datafusion.v1beta1.Instance) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#createInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#deleteInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#updateInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#restartInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestartInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#upgradeInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpgradeInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#removeIamPolicy}.
                     * @param error Error, if any
                     * @param [response] RemoveIamPolicyResponse
                     */
                    type RemoveIamPolicyCallback = (error: (Error|null), response?: google.cloud.datafusion.v1beta1.RemoveIamPolicyResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#listNamespaces}.
                     * @param error Error, if any
                     * @param [response] ListNamespacesResponse
                     */
                    type ListNamespacesCallback = (error: (Error|null), response?: google.cloud.datafusion.v1beta1.ListNamespacesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#addDnsPeering}.
                     * @param error Error, if any
                     * @param [response] AddDnsPeeringResponse
                     */
                    type AddDnsPeeringCallback = (error: (Error|null), response?: google.cloud.datafusion.v1beta1.AddDnsPeeringResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#removeDnsPeering}.
                     * @param error Error, if any
                     * @param [response] RemoveDnsPeeringResponse
                     */
                    type RemoveDnsPeeringCallback = (error: (Error|null), response?: google.cloud.datafusion.v1beta1.RemoveDnsPeeringResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.datafusion.v1beta1.DataFusion#listDnsPeerings}.
                     * @param error Error, if any
                     * @param [response] ListDnsPeeringsResponse
                     */
                    type ListDnsPeeringsCallback = (error: (Error|null), response?: google.cloud.datafusion.v1beta1.ListDnsPeeringsResponse) => void;
                }

                /** Properties of a NetworkConfig. */
                interface INetworkConfig {

                    /** NetworkConfig network */
                    network?: (string|null);

                    /** NetworkConfig ipAllocation */
                    ipAllocation?: (string|null);
                }

                /** Represents a NetworkConfig. */
                class NetworkConfig implements INetworkConfig {

                    /**
                     * Constructs a new NetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.INetworkConfig);

                    /** NetworkConfig network. */
                    public network: string;

                    /** NetworkConfig ipAllocation. */
                    public ipAllocation: string;

                    /**
                     * Creates a new NetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkConfig instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.INetworkConfig): google.cloud.datafusion.v1beta1.NetworkConfig;

                    /**
                     * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.datafusion.v1beta1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.NetworkConfig;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.NetworkConfig;

                    /**
                     * Verifies a NetworkConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NetworkConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NetworkConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.NetworkConfig;

                    /**
                     * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                     * @param message NetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Version. */
                interface IVersion {

                    /** Version versionNumber */
                    versionNumber?: (string|null);

                    /** Version defaultVersion */
                    defaultVersion?: (boolean|null);

                    /** Version availableFeatures */
                    availableFeatures?: (string[]|null);
                }

                /** Represents a Version. */
                class Version implements IVersion {

                    /**
                     * Constructs a new Version.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IVersion);

                    /** Version versionNumber. */
                    public versionNumber: string;

                    /** Version defaultVersion. */
                    public defaultVersion: boolean;

                    /** Version availableFeatures. */
                    public availableFeatures: string[];

                    /**
                     * Creates a new Version instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Version instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IVersion): google.cloud.datafusion.v1beta1.Version;

                    /**
                     * Encodes the specified Version message. Does not implicitly {@link google.cloud.datafusion.v1beta1.Version.verify|verify} messages.
                     * @param message Version message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Version message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.Version.verify|verify} messages.
                     * @param message Version message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Version message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Version
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.Version;

                    /**
                     * Decodes a Version message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Version
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.Version;

                    /**
                     * Verifies a Version message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Version message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Version
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.Version;

                    /**
                     * Creates a plain object from a Version message. Also converts values to other types if specified.
                     * @param message Version
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.Version, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Version to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Accelerator. */
                interface IAccelerator {

                    /** Accelerator acceleratorType */
                    acceleratorType?: (google.cloud.datafusion.v1beta1.Accelerator.AcceleratorType|keyof typeof google.cloud.datafusion.v1beta1.Accelerator.AcceleratorType|null);
                }

                /** Represents an Accelerator. */
                class Accelerator implements IAccelerator {

                    /**
                     * Constructs a new Accelerator.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IAccelerator);

                    /** Accelerator acceleratorType. */
                    public acceleratorType: (google.cloud.datafusion.v1beta1.Accelerator.AcceleratorType|keyof typeof google.cloud.datafusion.v1beta1.Accelerator.AcceleratorType);

                    /**
                     * Creates a new Accelerator instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Accelerator instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IAccelerator): google.cloud.datafusion.v1beta1.Accelerator;

                    /**
                     * Encodes the specified Accelerator message. Does not implicitly {@link google.cloud.datafusion.v1beta1.Accelerator.verify|verify} messages.
                     * @param message Accelerator message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Accelerator message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.Accelerator.verify|verify} messages.
                     * @param message Accelerator message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IAccelerator, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Accelerator message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Accelerator
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.Accelerator;

                    /**
                     * Decodes an Accelerator message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Accelerator
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.Accelerator;

                    /**
                     * Verifies an Accelerator message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Accelerator message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Accelerator
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.Accelerator;

                    /**
                     * Creates a plain object from an Accelerator message. Also converts values to other types if specified.
                     * @param message Accelerator
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.Accelerator, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Accelerator to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Accelerator {

                    /** AcceleratorType enum. */
                    enum AcceleratorType {
                        ACCELERATOR_TYPE_UNSPECIFIED = 0,
                        CDC = 1,
                        HEALTHCARE = 2
                    }
                }

                /** Properties of a CryptoKeyConfig. */
                interface ICryptoKeyConfig {

                    /** CryptoKeyConfig keyReference */
                    keyReference?: (string|null);
                }

                /** Represents a CryptoKeyConfig. */
                class CryptoKeyConfig implements ICryptoKeyConfig {

                    /**
                     * Constructs a new CryptoKeyConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.ICryptoKeyConfig);

                    /** CryptoKeyConfig keyReference. */
                    public keyReference: string;

                    /**
                     * Creates a new CryptoKeyConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CryptoKeyConfig instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.ICryptoKeyConfig): google.cloud.datafusion.v1beta1.CryptoKeyConfig;

                    /**
                     * Encodes the specified CryptoKeyConfig message. Does not implicitly {@link google.cloud.datafusion.v1beta1.CryptoKeyConfig.verify|verify} messages.
                     * @param message CryptoKeyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.ICryptoKeyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CryptoKeyConfig message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.CryptoKeyConfig.verify|verify} messages.
                     * @param message CryptoKeyConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.ICryptoKeyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CryptoKeyConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CryptoKeyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.CryptoKeyConfig;

                    /**
                     * Decodes a CryptoKeyConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CryptoKeyConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.CryptoKeyConfig;

                    /**
                     * Verifies a CryptoKeyConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CryptoKeyConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CryptoKeyConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.CryptoKeyConfig;

                    /**
                     * Creates a plain object from a CryptoKeyConfig message. Also converts values to other types if specified.
                     * @param message CryptoKeyConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.CryptoKeyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CryptoKeyConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Instance. */
                interface IInstance {

                    /** Instance name */
                    name?: (string|null);

                    /** Instance description */
                    description?: (string|null);

                    /** Instance type */
                    type?: (google.cloud.datafusion.v1beta1.Instance.Type|keyof typeof google.cloud.datafusion.v1beta1.Instance.Type|null);

                    /** Instance enableStackdriverLogging */
                    enableStackdriverLogging?: (boolean|null);

                    /** Instance enableStackdriverMonitoring */
                    enableStackdriverMonitoring?: (boolean|null);

                    /** Instance privateInstance */
                    privateInstance?: (boolean|null);

                    /** Instance networkConfig */
                    networkConfig?: (google.cloud.datafusion.v1beta1.INetworkConfig|null);

                    /** Instance labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Instance options */
                    options?: ({ [k: string]: string }|null);

                    /** Instance createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance state */
                    state?: (google.cloud.datafusion.v1beta1.Instance.State|keyof typeof google.cloud.datafusion.v1beta1.Instance.State|null);

                    /** Instance stateMessage */
                    stateMessage?: (string|null);

                    /** Instance serviceEndpoint */
                    serviceEndpoint?: (string|null);

                    /** Instance zone */
                    zone?: (string|null);

                    /** Instance version */
                    version?: (string|null);

                    /** Instance serviceAccount */
                    serviceAccount?: (string|null);

                    /** Instance displayName */
                    displayName?: (string|null);

                    /** Instance availableVersion */
                    availableVersion?: (google.cloud.datafusion.v1beta1.IVersion[]|null);

                    /** Instance apiEndpoint */
                    apiEndpoint?: (string|null);

                    /** Instance gcsBucket */
                    gcsBucket?: (string|null);

                    /** Instance accelerators */
                    accelerators?: (google.cloud.datafusion.v1beta1.IAccelerator[]|null);

                    /** Instance p4ServiceAccount */
                    p4ServiceAccount?: (string|null);

                    /** Instance tenantProjectId */
                    tenantProjectId?: (string|null);

                    /** Instance dataprocServiceAccount */
                    dataprocServiceAccount?: (string|null);

                    /** Instance enableRbac */
                    enableRbac?: (boolean|null);

                    /** Instance cryptoKeyConfig */
                    cryptoKeyConfig?: (google.cloud.datafusion.v1beta1.ICryptoKeyConfig|null);
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IInstance);

                    /** Instance name. */
                    public name: string;

                    /** Instance description. */
                    public description: string;

                    /** Instance type. */
                    public type: (google.cloud.datafusion.v1beta1.Instance.Type|keyof typeof google.cloud.datafusion.v1beta1.Instance.Type);

                    /** Instance enableStackdriverLogging. */
                    public enableStackdriverLogging: boolean;

                    /** Instance enableStackdriverMonitoring. */
                    public enableStackdriverMonitoring: boolean;

                    /** Instance privateInstance. */
                    public privateInstance: boolean;

                    /** Instance networkConfig. */
                    public networkConfig?: (google.cloud.datafusion.v1beta1.INetworkConfig|null);

                    /** Instance labels. */
                    public labels: { [k: string]: string };

                    /** Instance options. */
                    public options: { [k: string]: string };

                    /** Instance createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Instance state. */
                    public state: (google.cloud.datafusion.v1beta1.Instance.State|keyof typeof google.cloud.datafusion.v1beta1.Instance.State);

                    /** Instance stateMessage. */
                    public stateMessage: string;

                    /** Instance serviceEndpoint. */
                    public serviceEndpoint: string;

                    /** Instance zone. */
                    public zone: string;

                    /** Instance version. */
                    public version: string;

                    /** Instance serviceAccount. */
                    public serviceAccount: string;

                    /** Instance displayName. */
                    public displayName: string;

                    /** Instance availableVersion. */
                    public availableVersion: google.cloud.datafusion.v1beta1.IVersion[];

                    /** Instance apiEndpoint. */
                    public apiEndpoint: string;

                    /** Instance gcsBucket. */
                    public gcsBucket: string;

                    /** Instance accelerators. */
                    public accelerators: google.cloud.datafusion.v1beta1.IAccelerator[];

                    /** Instance p4ServiceAccount. */
                    public p4ServiceAccount: string;

                    /** Instance tenantProjectId. */
                    public tenantProjectId: string;

                    /** Instance dataprocServiceAccount. */
                    public dataprocServiceAccount: string;

                    /** Instance enableRbac. */
                    public enableRbac: boolean;

                    /** Instance cryptoKeyConfig. */
                    public cryptoKeyConfig?: (google.cloud.datafusion.v1beta1.ICryptoKeyConfig|null);

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IInstance): google.cloud.datafusion.v1beta1.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.datafusion.v1beta1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.Instance;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Instance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Instance {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        BASIC = 1,
                        ENTERPRISE = 2,
                        DEVELOPER = 3
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        RUNNING = 2,
                        FAILED = 3,
                        DELETING = 4,
                        UPGRADING = 5,
                        RESTARTING = 6,
                        UPDATING = 7,
                        AUTO_UPDATING = 8,
                        AUTO_UPGRADING = 9
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
                    constructor(properties?: google.cloud.datafusion.v1beta1.IListInstancesRequest);

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
                    public static create(properties?: google.cloud.datafusion.v1beta1.IListInstancesRequest): google.cloud.datafusion.v1beta1.ListInstancesRequest;

                    /**
                     * Encodes the specified ListInstancesRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.ListInstancesRequest;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.ListInstancesRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.ListInstancesRequest;

                    /**
                     * Creates a plain object from a ListInstancesRequest message. Also converts values to other types if specified.
                     * @param message ListInstancesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.ListInstancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListInstancesResponse. */
                interface IListInstancesResponse {

                    /** ListInstancesResponse instances */
                    instances?: (google.cloud.datafusion.v1beta1.IInstance[]|null);

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
                    constructor(properties?: google.cloud.datafusion.v1beta1.IListInstancesResponse);

                    /** ListInstancesResponse instances. */
                    public instances: google.cloud.datafusion.v1beta1.IInstance[];

                    /** ListInstancesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListInstancesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListInstancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesResponse instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IListInstancesResponse): google.cloud.datafusion.v1beta1.ListInstancesResponse;

                    /**
                     * Encodes the specified ListInstancesResponse message. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesResponse message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.ListInstancesResponse;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.ListInstancesResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.ListInstancesResponse;

                    /**
                     * Creates a plain object from a ListInstancesResponse message. Also converts values to other types if specified.
                     * @param message ListInstancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.ListInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListInstancesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAvailableVersionsRequest. */
                interface IListAvailableVersionsRequest {

                    /** ListAvailableVersionsRequest parent */
                    parent?: (string|null);

                    /** ListAvailableVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAvailableVersionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAvailableVersionsRequest latestPatchOnly */
                    latestPatchOnly?: (boolean|null);
                }

                /** Represents a ListAvailableVersionsRequest. */
                class ListAvailableVersionsRequest implements IListAvailableVersionsRequest {

                    /**
                     * Constructs a new ListAvailableVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IListAvailableVersionsRequest);

                    /** ListAvailableVersionsRequest parent. */
                    public parent: string;

                    /** ListAvailableVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListAvailableVersionsRequest pageToken. */
                    public pageToken: string;

                    /** ListAvailableVersionsRequest latestPatchOnly. */
                    public latestPatchOnly: boolean;

                    /**
                     * Creates a new ListAvailableVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAvailableVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IListAvailableVersionsRequest): google.cloud.datafusion.v1beta1.ListAvailableVersionsRequest;

                    /**
                     * Encodes the specified ListAvailableVersionsRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListAvailableVersionsRequest.verify|verify} messages.
                     * @param message ListAvailableVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IListAvailableVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAvailableVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListAvailableVersionsRequest.verify|verify} messages.
                     * @param message ListAvailableVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IListAvailableVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAvailableVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAvailableVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.ListAvailableVersionsRequest;

                    /**
                     * Decodes a ListAvailableVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAvailableVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.ListAvailableVersionsRequest;

                    /**
                     * Verifies a ListAvailableVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAvailableVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAvailableVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.ListAvailableVersionsRequest;

                    /**
                     * Creates a plain object from a ListAvailableVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListAvailableVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.ListAvailableVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAvailableVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAvailableVersionsResponse. */
                interface IListAvailableVersionsResponse {

                    /** ListAvailableVersionsResponse availableVersions */
                    availableVersions?: (google.cloud.datafusion.v1beta1.IVersion[]|null);

                    /** ListAvailableVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAvailableVersionsResponse. */
                class ListAvailableVersionsResponse implements IListAvailableVersionsResponse {

                    /**
                     * Constructs a new ListAvailableVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IListAvailableVersionsResponse);

                    /** ListAvailableVersionsResponse availableVersions. */
                    public availableVersions: google.cloud.datafusion.v1beta1.IVersion[];

                    /** ListAvailableVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAvailableVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAvailableVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IListAvailableVersionsResponse): google.cloud.datafusion.v1beta1.ListAvailableVersionsResponse;

                    /**
                     * Encodes the specified ListAvailableVersionsResponse message. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListAvailableVersionsResponse.verify|verify} messages.
                     * @param message ListAvailableVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IListAvailableVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAvailableVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListAvailableVersionsResponse.verify|verify} messages.
                     * @param message ListAvailableVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IListAvailableVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAvailableVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAvailableVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.ListAvailableVersionsResponse;

                    /**
                     * Decodes a ListAvailableVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAvailableVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.ListAvailableVersionsResponse;

                    /**
                     * Verifies a ListAvailableVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAvailableVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAvailableVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.ListAvailableVersionsResponse;

                    /**
                     * Creates a plain object from a ListAvailableVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListAvailableVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.ListAvailableVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAvailableVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: google.cloud.datafusion.v1beta1.IGetInstanceRequest);

                    /** GetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IGetInstanceRequest): google.cloud.datafusion.v1beta1.GetInstanceRequest;

                    /**
                     * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.GetInstanceRequest;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.GetInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.GetInstanceRequest;

                    /**
                     * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateInstanceRequest. */
                interface ICreateInstanceRequest {

                    /** CreateInstanceRequest parent */
                    parent?: (string|null);

                    /** CreateInstanceRequest instanceId */
                    instanceId?: (string|null);

                    /** CreateInstanceRequest instance */
                    instance?: (google.cloud.datafusion.v1beta1.IInstance|null);
                }

                /** Represents a CreateInstanceRequest. */
                class CreateInstanceRequest implements ICreateInstanceRequest {

                    /**
                     * Constructs a new CreateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.ICreateInstanceRequest);

                    /** CreateInstanceRequest parent. */
                    public parent: string;

                    /** CreateInstanceRequest instanceId. */
                    public instanceId: string;

                    /** CreateInstanceRequest instance. */
                    public instance?: (google.cloud.datafusion.v1beta1.IInstance|null);

                    /**
                     * Creates a new CreateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.ICreateInstanceRequest): google.cloud.datafusion.v1beta1.CreateInstanceRequest;

                    /**
                     * Encodes the specified CreateInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.CreateInstanceRequest;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.CreateInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.CreateInstanceRequest;

                    /**
                     * Creates a plain object from a CreateInstanceRequest message. Also converts values to other types if specified.
                     * @param message CreateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.CreateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: google.cloud.datafusion.v1beta1.IDeleteInstanceRequest);

                    /** DeleteInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IDeleteInstanceRequest): google.cloud.datafusion.v1beta1.DeleteInstanceRequest;

                    /**
                     * Encodes the specified DeleteInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.DeleteInstanceRequest;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.DeleteInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.DeleteInstanceRequest;

                    /**
                     * Creates a plain object from a DeleteInstanceRequest message. Also converts values to other types if specified.
                     * @param message DeleteInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.DeleteInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateInstanceRequest. */
                interface IUpdateInstanceRequest {

                    /** UpdateInstanceRequest instance */
                    instance?: (google.cloud.datafusion.v1beta1.IInstance|null);

                    /** UpdateInstanceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateInstanceRequest. */
                class UpdateInstanceRequest implements IUpdateInstanceRequest {

                    /**
                     * Constructs a new UpdateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IUpdateInstanceRequest);

                    /** UpdateInstanceRequest instance. */
                    public instance?: (google.cloud.datafusion.v1beta1.IInstance|null);

                    /** UpdateInstanceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IUpdateInstanceRequest): google.cloud.datafusion.v1beta1.UpdateInstanceRequest;

                    /**
                     * Encodes the specified UpdateInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.UpdateInstanceRequest;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.UpdateInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.UpdateInstanceRequest;

                    /**
                     * Creates a plain object from an UpdateInstanceRequest message. Also converts values to other types if specified.
                     * @param message UpdateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.UpdateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RestartInstanceRequest. */
                interface IRestartInstanceRequest {

                    /** RestartInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents a RestartInstanceRequest. */
                class RestartInstanceRequest implements IRestartInstanceRequest {

                    /**
                     * Constructs a new RestartInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IRestartInstanceRequest);

                    /** RestartInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new RestartInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestartInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IRestartInstanceRequest): google.cloud.datafusion.v1beta1.RestartInstanceRequest;

                    /**
                     * Encodes the specified RestartInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.RestartInstanceRequest.verify|verify} messages.
                     * @param message RestartInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IRestartInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestartInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.RestartInstanceRequest.verify|verify} messages.
                     * @param message RestartInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IRestartInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestartInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestartInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.RestartInstanceRequest;

                    /**
                     * Decodes a RestartInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestartInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.RestartInstanceRequest;

                    /**
                     * Verifies a RestartInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestartInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestartInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.RestartInstanceRequest;

                    /**
                     * Creates a plain object from a RestartInstanceRequest message. Also converts values to other types if specified.
                     * @param message RestartInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.RestartInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestartInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpgradeInstanceRequest. */
                interface IUpgradeInstanceRequest {

                    /** UpgradeInstanceRequest name */
                    name?: (string|null);
                }

                /** Represents an UpgradeInstanceRequest. */
                class UpgradeInstanceRequest implements IUpgradeInstanceRequest {

                    /**
                     * Constructs a new UpgradeInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IUpgradeInstanceRequest);

                    /** UpgradeInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new UpgradeInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpgradeInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IUpgradeInstanceRequest): google.cloud.datafusion.v1beta1.UpgradeInstanceRequest;

                    /**
                     * Encodes the specified UpgradeInstanceRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.UpgradeInstanceRequest.verify|verify} messages.
                     * @param message UpgradeInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IUpgradeInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpgradeInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.UpgradeInstanceRequest.verify|verify} messages.
                     * @param message UpgradeInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IUpgradeInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpgradeInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpgradeInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.UpgradeInstanceRequest;

                    /**
                     * Decodes an UpgradeInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpgradeInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.UpgradeInstanceRequest;

                    /**
                     * Verifies an UpgradeInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpgradeInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpgradeInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.UpgradeInstanceRequest;

                    /**
                     * Creates a plain object from an UpgradeInstanceRequest message. Also converts values to other types if specified.
                     * @param message UpgradeInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.UpgradeInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpgradeInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

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
                    constructor(properties?: google.cloud.datafusion.v1beta1.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata requestedCancellation. */
                    public requestedCancellation: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IOperationMetadata): google.cloud.datafusion.v1beta1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.datafusion.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RemoveIamPolicyRequest. */
                interface IRemoveIamPolicyRequest {

                    /** RemoveIamPolicyRequest resource */
                    resource?: (string|null);
                }

                /** Represents a RemoveIamPolicyRequest. */
                class RemoveIamPolicyRequest implements IRemoveIamPolicyRequest {

                    /**
                     * Constructs a new RemoveIamPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IRemoveIamPolicyRequest);

                    /** RemoveIamPolicyRequest resource. */
                    public resource: string;

                    /**
                     * Creates a new RemoveIamPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveIamPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IRemoveIamPolicyRequest): google.cloud.datafusion.v1beta1.RemoveIamPolicyRequest;

                    /**
                     * Encodes the specified RemoveIamPolicyRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.RemoveIamPolicyRequest.verify|verify} messages.
                     * @param message RemoveIamPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IRemoveIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveIamPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.RemoveIamPolicyRequest.verify|verify} messages.
                     * @param message RemoveIamPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IRemoveIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveIamPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveIamPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.RemoveIamPolicyRequest;

                    /**
                     * Decodes a RemoveIamPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveIamPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.RemoveIamPolicyRequest;

                    /**
                     * Verifies a RemoveIamPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveIamPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.RemoveIamPolicyRequest;

                    /**
                     * Creates a plain object from a RemoveIamPolicyRequest message. Also converts values to other types if specified.
                     * @param message RemoveIamPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.RemoveIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveIamPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RemoveIamPolicyResponse. */
                interface IRemoveIamPolicyResponse {
                }

                /** Represents a RemoveIamPolicyResponse. */
                class RemoveIamPolicyResponse implements IRemoveIamPolicyResponse {

                    /**
                     * Constructs a new RemoveIamPolicyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IRemoveIamPolicyResponse);

                    /**
                     * Creates a new RemoveIamPolicyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveIamPolicyResponse instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IRemoveIamPolicyResponse): google.cloud.datafusion.v1beta1.RemoveIamPolicyResponse;

                    /**
                     * Encodes the specified RemoveIamPolicyResponse message. Does not implicitly {@link google.cloud.datafusion.v1beta1.RemoveIamPolicyResponse.verify|verify} messages.
                     * @param message RemoveIamPolicyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IRemoveIamPolicyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveIamPolicyResponse message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.RemoveIamPolicyResponse.verify|verify} messages.
                     * @param message RemoveIamPolicyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IRemoveIamPolicyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveIamPolicyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveIamPolicyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.RemoveIamPolicyResponse;

                    /**
                     * Decodes a RemoveIamPolicyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveIamPolicyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.RemoveIamPolicyResponse;

                    /**
                     * Verifies a RemoveIamPolicyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveIamPolicyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveIamPolicyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.RemoveIamPolicyResponse;

                    /**
                     * Creates a plain object from a RemoveIamPolicyResponse message. Also converts values to other types if specified.
                     * @param message RemoveIamPolicyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.RemoveIamPolicyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveIamPolicyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListNamespacesRequest. */
                interface IListNamespacesRequest {

                    /** ListNamespacesRequest parent */
                    parent?: (string|null);

                    /** ListNamespacesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListNamespacesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListNamespacesRequest view */
                    view?: (google.cloud.datafusion.v1beta1.NamespaceView|keyof typeof google.cloud.datafusion.v1beta1.NamespaceView|null);
                }

                /** Represents a ListNamespacesRequest. */
                class ListNamespacesRequest implements IListNamespacesRequest {

                    /**
                     * Constructs a new ListNamespacesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IListNamespacesRequest);

                    /** ListNamespacesRequest parent. */
                    public parent: string;

                    /** ListNamespacesRequest pageSize. */
                    public pageSize: number;

                    /** ListNamespacesRequest pageToken. */
                    public pageToken: string;

                    /** ListNamespacesRequest view. */
                    public view: (google.cloud.datafusion.v1beta1.NamespaceView|keyof typeof google.cloud.datafusion.v1beta1.NamespaceView);

                    /**
                     * Creates a new ListNamespacesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNamespacesRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IListNamespacesRequest): google.cloud.datafusion.v1beta1.ListNamespacesRequest;

                    /**
                     * Encodes the specified ListNamespacesRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListNamespacesRequest.verify|verify} messages.
                     * @param message ListNamespacesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IListNamespacesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNamespacesRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListNamespacesRequest.verify|verify} messages.
                     * @param message ListNamespacesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IListNamespacesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNamespacesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNamespacesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.ListNamespacesRequest;

                    /**
                     * Decodes a ListNamespacesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNamespacesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.ListNamespacesRequest;

                    /**
                     * Verifies a ListNamespacesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNamespacesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNamespacesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.ListNamespacesRequest;

                    /**
                     * Creates a plain object from a ListNamespacesRequest message. Also converts values to other types if specified.
                     * @param message ListNamespacesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.ListNamespacesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNamespacesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a IAMPolicy. */
                interface IIAMPolicy {

                    /** IAMPolicy policy */
                    policy?: (google.iam.v1.IPolicy|null);

                    /** IAMPolicy status */
                    status?: (google.rpc.IStatus|null);
                }

                /** Represents a IAMPolicy. */
                class IAMPolicy implements IIAMPolicy {

                    /**
                     * Constructs a new IAMPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IIAMPolicy);

                    /** IAMPolicy policy. */
                    public policy?: (google.iam.v1.IPolicy|null);

                    /** IAMPolicy status. */
                    public status?: (google.rpc.IStatus|null);

                    /**
                     * Creates a new IAMPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IAMPolicy instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IIAMPolicy): google.cloud.datafusion.v1beta1.IAMPolicy;

                    /**
                     * Encodes the specified IAMPolicy message. Does not implicitly {@link google.cloud.datafusion.v1beta1.IAMPolicy.verify|verify} messages.
                     * @param message IAMPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IIAMPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IAMPolicy message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.IAMPolicy.verify|verify} messages.
                     * @param message IAMPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IIAMPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a IAMPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IAMPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.IAMPolicy;

                    /**
                     * Decodes a IAMPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IAMPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.IAMPolicy;

                    /**
                     * Verifies a IAMPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a IAMPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IAMPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.IAMPolicy;

                    /**
                     * Creates a plain object from a IAMPolicy message. Also converts values to other types if specified.
                     * @param message IAMPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.IAMPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IAMPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Namespace. */
                interface INamespace {

                    /** Namespace name */
                    name?: (string|null);

                    /** Namespace iamPolicy */
                    iamPolicy?: (google.cloud.datafusion.v1beta1.IIAMPolicy|null);
                }

                /** Represents a Namespace. */
                class Namespace implements INamespace {

                    /**
                     * Constructs a new Namespace.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.INamespace);

                    /** Namespace name. */
                    public name: string;

                    /** Namespace iamPolicy. */
                    public iamPolicy?: (google.cloud.datafusion.v1beta1.IIAMPolicy|null);

                    /**
                     * Creates a new Namespace instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Namespace instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.INamespace): google.cloud.datafusion.v1beta1.Namespace;

                    /**
                     * Encodes the specified Namespace message. Does not implicitly {@link google.cloud.datafusion.v1beta1.Namespace.verify|verify} messages.
                     * @param message Namespace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.INamespace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Namespace message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.Namespace.verify|verify} messages.
                     * @param message Namespace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.INamespace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Namespace message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Namespace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.Namespace;

                    /**
                     * Decodes a Namespace message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Namespace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.Namespace;

                    /**
                     * Verifies a Namespace message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Namespace message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Namespace
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.Namespace;

                    /**
                     * Creates a plain object from a Namespace message. Also converts values to other types if specified.
                     * @param message Namespace
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.Namespace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Namespace to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListNamespacesResponse. */
                interface IListNamespacesResponse {

                    /** ListNamespacesResponse namespaces */
                    namespaces?: (google.cloud.datafusion.v1beta1.INamespace[]|null);

                    /** ListNamespacesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListNamespacesResponse. */
                class ListNamespacesResponse implements IListNamespacesResponse {

                    /**
                     * Constructs a new ListNamespacesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IListNamespacesResponse);

                    /** ListNamespacesResponse namespaces. */
                    public namespaces: google.cloud.datafusion.v1beta1.INamespace[];

                    /** ListNamespacesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListNamespacesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNamespacesResponse instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IListNamespacesResponse): google.cloud.datafusion.v1beta1.ListNamespacesResponse;

                    /**
                     * Encodes the specified ListNamespacesResponse message. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListNamespacesResponse.verify|verify} messages.
                     * @param message ListNamespacesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IListNamespacesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNamespacesResponse message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListNamespacesResponse.verify|verify} messages.
                     * @param message ListNamespacesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IListNamespacesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNamespacesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNamespacesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.ListNamespacesResponse;

                    /**
                     * Decodes a ListNamespacesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNamespacesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.ListNamespacesResponse;

                    /**
                     * Verifies a ListNamespacesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNamespacesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNamespacesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.ListNamespacesResponse;

                    /**
                     * Creates a plain object from a ListNamespacesResponse message. Also converts values to other types if specified.
                     * @param message ListNamespacesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.ListNamespacesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNamespacesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DnsPeering. */
                interface IDnsPeering {

                    /** DnsPeering zone */
                    zone?: (string|null);

                    /** DnsPeering domain */
                    domain?: (string|null);

                    /** DnsPeering description */
                    description?: (string|null);

                    /** DnsPeering targetProject */
                    targetProject?: (string|null);

                    /** DnsPeering targetNetwork */
                    targetNetwork?: (string|null);
                }

                /** Represents a DnsPeering. */
                class DnsPeering implements IDnsPeering {

                    /**
                     * Constructs a new DnsPeering.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IDnsPeering);

                    /** DnsPeering zone. */
                    public zone: string;

                    /** DnsPeering domain. */
                    public domain: string;

                    /** DnsPeering description. */
                    public description: string;

                    /** DnsPeering targetProject. */
                    public targetProject: string;

                    /** DnsPeering targetNetwork. */
                    public targetNetwork: string;

                    /**
                     * Creates a new DnsPeering instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DnsPeering instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IDnsPeering): google.cloud.datafusion.v1beta1.DnsPeering;

                    /**
                     * Encodes the specified DnsPeering message. Does not implicitly {@link google.cloud.datafusion.v1beta1.DnsPeering.verify|verify} messages.
                     * @param message DnsPeering message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IDnsPeering, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DnsPeering message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.DnsPeering.verify|verify} messages.
                     * @param message DnsPeering message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IDnsPeering, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DnsPeering message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DnsPeering
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.DnsPeering;

                    /**
                     * Decodes a DnsPeering message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DnsPeering
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.DnsPeering;

                    /**
                     * Verifies a DnsPeering message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DnsPeering message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DnsPeering
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.DnsPeering;

                    /**
                     * Creates a plain object from a DnsPeering message. Also converts values to other types if specified.
                     * @param message DnsPeering
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.DnsPeering, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DnsPeering to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AddDnsPeeringRequest. */
                interface IAddDnsPeeringRequest {

                    /** AddDnsPeeringRequest parent */
                    parent?: (string|null);

                    /** AddDnsPeeringRequest dnsPeering */
                    dnsPeering?: (google.cloud.datafusion.v1beta1.IDnsPeering|null);
                }

                /** Represents an AddDnsPeeringRequest. */
                class AddDnsPeeringRequest implements IAddDnsPeeringRequest {

                    /**
                     * Constructs a new AddDnsPeeringRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IAddDnsPeeringRequest);

                    /** AddDnsPeeringRequest parent. */
                    public parent: string;

                    /** AddDnsPeeringRequest dnsPeering. */
                    public dnsPeering?: (google.cloud.datafusion.v1beta1.IDnsPeering|null);

                    /**
                     * Creates a new AddDnsPeeringRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddDnsPeeringRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IAddDnsPeeringRequest): google.cloud.datafusion.v1beta1.AddDnsPeeringRequest;

                    /**
                     * Encodes the specified AddDnsPeeringRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.AddDnsPeeringRequest.verify|verify} messages.
                     * @param message AddDnsPeeringRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IAddDnsPeeringRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddDnsPeeringRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.AddDnsPeeringRequest.verify|verify} messages.
                     * @param message AddDnsPeeringRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IAddDnsPeeringRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddDnsPeeringRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddDnsPeeringRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.AddDnsPeeringRequest;

                    /**
                     * Decodes an AddDnsPeeringRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddDnsPeeringRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.AddDnsPeeringRequest;

                    /**
                     * Verifies an AddDnsPeeringRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddDnsPeeringRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddDnsPeeringRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.AddDnsPeeringRequest;

                    /**
                     * Creates a plain object from an AddDnsPeeringRequest message. Also converts values to other types if specified.
                     * @param message AddDnsPeeringRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.AddDnsPeeringRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddDnsPeeringRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AddDnsPeeringResponse. */
                interface IAddDnsPeeringResponse {
                }

                /** Represents an AddDnsPeeringResponse. */
                class AddDnsPeeringResponse implements IAddDnsPeeringResponse {

                    /**
                     * Constructs a new AddDnsPeeringResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IAddDnsPeeringResponse);

                    /**
                     * Creates a new AddDnsPeeringResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AddDnsPeeringResponse instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IAddDnsPeeringResponse): google.cloud.datafusion.v1beta1.AddDnsPeeringResponse;

                    /**
                     * Encodes the specified AddDnsPeeringResponse message. Does not implicitly {@link google.cloud.datafusion.v1beta1.AddDnsPeeringResponse.verify|verify} messages.
                     * @param message AddDnsPeeringResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IAddDnsPeeringResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AddDnsPeeringResponse message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.AddDnsPeeringResponse.verify|verify} messages.
                     * @param message AddDnsPeeringResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IAddDnsPeeringResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AddDnsPeeringResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AddDnsPeeringResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.AddDnsPeeringResponse;

                    /**
                     * Decodes an AddDnsPeeringResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AddDnsPeeringResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.AddDnsPeeringResponse;

                    /**
                     * Verifies an AddDnsPeeringResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AddDnsPeeringResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AddDnsPeeringResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.AddDnsPeeringResponse;

                    /**
                     * Creates a plain object from an AddDnsPeeringResponse message. Also converts values to other types if specified.
                     * @param message AddDnsPeeringResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.AddDnsPeeringResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AddDnsPeeringResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** NamespaceView enum. */
                enum NamespaceView {
                    NAMESPACE_VIEW_UNSPECIFIED = 0,
                    NAMESPACE_VIEW_BASIC = 1,
                    NAMESPACE_VIEW_FULL = 2
                }

                /** Properties of a RemoveDnsPeeringRequest. */
                interface IRemoveDnsPeeringRequest {

                    /** RemoveDnsPeeringRequest parent */
                    parent?: (string|null);

                    /** RemoveDnsPeeringRequest zone */
                    zone?: (string|null);
                }

                /** Represents a RemoveDnsPeeringRequest. */
                class RemoveDnsPeeringRequest implements IRemoveDnsPeeringRequest {

                    /**
                     * Constructs a new RemoveDnsPeeringRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IRemoveDnsPeeringRequest);

                    /** RemoveDnsPeeringRequest parent. */
                    public parent: string;

                    /** RemoveDnsPeeringRequest zone. */
                    public zone: string;

                    /**
                     * Creates a new RemoveDnsPeeringRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveDnsPeeringRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IRemoveDnsPeeringRequest): google.cloud.datafusion.v1beta1.RemoveDnsPeeringRequest;

                    /**
                     * Encodes the specified RemoveDnsPeeringRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.RemoveDnsPeeringRequest.verify|verify} messages.
                     * @param message RemoveDnsPeeringRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IRemoveDnsPeeringRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveDnsPeeringRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.RemoveDnsPeeringRequest.verify|verify} messages.
                     * @param message RemoveDnsPeeringRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IRemoveDnsPeeringRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveDnsPeeringRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveDnsPeeringRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.RemoveDnsPeeringRequest;

                    /**
                     * Decodes a RemoveDnsPeeringRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveDnsPeeringRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.RemoveDnsPeeringRequest;

                    /**
                     * Verifies a RemoveDnsPeeringRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveDnsPeeringRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveDnsPeeringRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.RemoveDnsPeeringRequest;

                    /**
                     * Creates a plain object from a RemoveDnsPeeringRequest message. Also converts values to other types if specified.
                     * @param message RemoveDnsPeeringRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.RemoveDnsPeeringRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveDnsPeeringRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RemoveDnsPeeringResponse. */
                interface IRemoveDnsPeeringResponse {
                }

                /** Represents a RemoveDnsPeeringResponse. */
                class RemoveDnsPeeringResponse implements IRemoveDnsPeeringResponse {

                    /**
                     * Constructs a new RemoveDnsPeeringResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IRemoveDnsPeeringResponse);

                    /**
                     * Creates a new RemoveDnsPeeringResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RemoveDnsPeeringResponse instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IRemoveDnsPeeringResponse): google.cloud.datafusion.v1beta1.RemoveDnsPeeringResponse;

                    /**
                     * Encodes the specified RemoveDnsPeeringResponse message. Does not implicitly {@link google.cloud.datafusion.v1beta1.RemoveDnsPeeringResponse.verify|verify} messages.
                     * @param message RemoveDnsPeeringResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IRemoveDnsPeeringResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RemoveDnsPeeringResponse message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.RemoveDnsPeeringResponse.verify|verify} messages.
                     * @param message RemoveDnsPeeringResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IRemoveDnsPeeringResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RemoveDnsPeeringResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RemoveDnsPeeringResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.RemoveDnsPeeringResponse;

                    /**
                     * Decodes a RemoveDnsPeeringResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RemoveDnsPeeringResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.RemoveDnsPeeringResponse;

                    /**
                     * Verifies a RemoveDnsPeeringResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RemoveDnsPeeringResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RemoveDnsPeeringResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.RemoveDnsPeeringResponse;

                    /**
                     * Creates a plain object from a RemoveDnsPeeringResponse message. Also converts values to other types if specified.
                     * @param message RemoveDnsPeeringResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.RemoveDnsPeeringResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RemoveDnsPeeringResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDnsPeeringsRequest. */
                interface IListDnsPeeringsRequest {

                    /** ListDnsPeeringsRequest parent */
                    parent?: (string|null);

                    /** ListDnsPeeringsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDnsPeeringsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDnsPeeringsRequest. */
                class ListDnsPeeringsRequest implements IListDnsPeeringsRequest {

                    /**
                     * Constructs a new ListDnsPeeringsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IListDnsPeeringsRequest);

                    /** ListDnsPeeringsRequest parent. */
                    public parent: string;

                    /** ListDnsPeeringsRequest pageSize. */
                    public pageSize: number;

                    /** ListDnsPeeringsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDnsPeeringsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDnsPeeringsRequest instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IListDnsPeeringsRequest): google.cloud.datafusion.v1beta1.ListDnsPeeringsRequest;

                    /**
                     * Encodes the specified ListDnsPeeringsRequest message. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListDnsPeeringsRequest.verify|verify} messages.
                     * @param message ListDnsPeeringsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IListDnsPeeringsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDnsPeeringsRequest message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListDnsPeeringsRequest.verify|verify} messages.
                     * @param message ListDnsPeeringsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IListDnsPeeringsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDnsPeeringsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDnsPeeringsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.ListDnsPeeringsRequest;

                    /**
                     * Decodes a ListDnsPeeringsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDnsPeeringsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.ListDnsPeeringsRequest;

                    /**
                     * Verifies a ListDnsPeeringsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDnsPeeringsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDnsPeeringsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.ListDnsPeeringsRequest;

                    /**
                     * Creates a plain object from a ListDnsPeeringsRequest message. Also converts values to other types if specified.
                     * @param message ListDnsPeeringsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.ListDnsPeeringsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDnsPeeringsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListDnsPeeringsResponse. */
                interface IListDnsPeeringsResponse {

                    /** ListDnsPeeringsResponse dnsPeerings */
                    dnsPeerings?: (google.cloud.datafusion.v1beta1.IDnsPeering[]|null);

                    /** ListDnsPeeringsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDnsPeeringsResponse. */
                class ListDnsPeeringsResponse implements IListDnsPeeringsResponse {

                    /**
                     * Constructs a new ListDnsPeeringsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.datafusion.v1beta1.IListDnsPeeringsResponse);

                    /** ListDnsPeeringsResponse dnsPeerings. */
                    public dnsPeerings: google.cloud.datafusion.v1beta1.IDnsPeering[];

                    /** ListDnsPeeringsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDnsPeeringsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDnsPeeringsResponse instance
                     */
                    public static create(properties?: google.cloud.datafusion.v1beta1.IListDnsPeeringsResponse): google.cloud.datafusion.v1beta1.ListDnsPeeringsResponse;

                    /**
                     * Encodes the specified ListDnsPeeringsResponse message. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListDnsPeeringsResponse.verify|verify} messages.
                     * @param message ListDnsPeeringsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.datafusion.v1beta1.IListDnsPeeringsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDnsPeeringsResponse message, length delimited. Does not implicitly {@link google.cloud.datafusion.v1beta1.ListDnsPeeringsResponse.verify|verify} messages.
                     * @param message ListDnsPeeringsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.datafusion.v1beta1.IListDnsPeeringsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDnsPeeringsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDnsPeeringsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.datafusion.v1beta1.ListDnsPeeringsResponse;

                    /**
                     * Decodes a ListDnsPeeringsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDnsPeeringsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.datafusion.v1beta1.ListDnsPeeringsResponse;

                    /**
                     * Verifies a ListDnsPeeringsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDnsPeeringsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDnsPeeringsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.datafusion.v1beta1.ListDnsPeeringsResponse;

                    /**
                     * Creates a plain object from a ListDnsPeeringsResponse message. Also converts values to other types if specified.
                     * @param message ListDnsPeeringsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.datafusion.v1beta1.ListDnsPeeringsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDnsPeeringsResponse to JSON.
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

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy etag */
                etag?: (Uint8Array|string|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicy);

                /** Policy version. */
                public version: number;

                /** Policy bindings. */
                public bindings: google.iam.v1.IBinding[];

                /** Policy etag. */
                public etag: (Uint8Array|string);

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v1.IPolicy): google.iam.v1.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Policy;

                /**
                 * Verifies a Policy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Policy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Policy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Binding. */
            interface IBinding {

                /** Binding role */
                role?: (string|null);

                /** Binding members */
                members?: (string[]|null);

                /** Binding condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a Binding. */
            class Binding implements IBinding {

                /**
                 * Constructs a new Binding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBinding);

                /** Binding role. */
                public role: string;

                /** Binding members. */
                public members: string[];

                /** Binding condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new Binding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Binding instance
                 */
                public static create(properties?: google.iam.v1.IBinding): google.iam.v1.Binding;

                /**
                 * Encodes the specified Binding message. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Binding message, length delimited. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Binding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Binding;

                /**
                 * Decodes a Binding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Binding;

                /**
                 * Verifies a Binding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Binding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Binding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Binding;

                /**
                 * Creates a plain object from a Binding message. Also converts values to other types if specified.
                 * @param message Binding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Binding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Binding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PolicyDelta. */
            interface IPolicyDelta {

                /** PolicyDelta bindingDeltas */
                bindingDeltas?: (google.iam.v1.IBindingDelta[]|null);

                /** PolicyDelta auditConfigDeltas */
                auditConfigDeltas?: (google.iam.v1.IAuditConfigDelta[]|null);
            }

            /** Represents a PolicyDelta. */
            class PolicyDelta implements IPolicyDelta {

                /**
                 * Constructs a new PolicyDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicyDelta);

                /** PolicyDelta bindingDeltas. */
                public bindingDeltas: google.iam.v1.IBindingDelta[];

                /** PolicyDelta auditConfigDeltas. */
                public auditConfigDeltas: google.iam.v1.IAuditConfigDelta[];

                /**
                 * Creates a new PolicyDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyDelta instance
                 */
                public static create(properties?: google.iam.v1.IPolicyDelta): google.iam.v1.PolicyDelta;

                /**
                 * Encodes the specified PolicyDelta message. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyDelta message, length delimited. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.PolicyDelta;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.PolicyDelta;

                /**
                 * Verifies a PolicyDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.PolicyDelta;

                /**
                 * Creates a plain object from a PolicyDelta message. Also converts values to other types if specified.
                 * @param message PolicyDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.PolicyDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BindingDelta. */
            interface IBindingDelta {

                /** BindingDelta action */
                action?: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action|null);

                /** BindingDelta role */
                role?: (string|null);

                /** BindingDelta member */
                member?: (string|null);

                /** BindingDelta condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a BindingDelta. */
            class BindingDelta implements IBindingDelta {

                /**
                 * Constructs a new BindingDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBindingDelta);

                /** BindingDelta action. */
                public action: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action);

                /** BindingDelta role. */
                public role: string;

                /** BindingDelta member. */
                public member: string;

                /** BindingDelta condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new BindingDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BindingDelta instance
                 */
                public static create(properties?: google.iam.v1.IBindingDelta): google.iam.v1.BindingDelta;

                /**
                 * Encodes the specified BindingDelta message. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BindingDelta message, length delimited. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.BindingDelta;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.BindingDelta;

                /**
                 * Verifies a BindingDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BindingDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BindingDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.BindingDelta;

                /**
                 * Creates a plain object from a BindingDelta message. Also converts values to other types if specified.
                 * @param message BindingDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.BindingDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BindingDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace BindingDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }

            /** Properties of an AuditConfigDelta. */
            interface IAuditConfigDelta {

                /** AuditConfigDelta action */
                action?: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action|null);

                /** AuditConfigDelta service */
                service?: (string|null);

                /** AuditConfigDelta exemptedMember */
                exemptedMember?: (string|null);

                /** AuditConfigDelta logType */
                logType?: (string|null);
            }

            /** Represents an AuditConfigDelta. */
            class AuditConfigDelta implements IAuditConfigDelta {

                /**
                 * Constructs a new AuditConfigDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfigDelta);

                /** AuditConfigDelta action. */
                public action: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action);

                /** AuditConfigDelta service. */
                public service: string;

                /** AuditConfigDelta exemptedMember. */
                public exemptedMember: string;

                /** AuditConfigDelta logType. */
                public logType: string;

                /**
                 * Creates a new AuditConfigDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfigDelta instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfigDelta): google.iam.v1.AuditConfigDelta;

                /**
                 * Encodes the specified AuditConfigDelta message. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfigDelta message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfigDelta;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfigDelta;

                /**
                 * Verifies an AuditConfigDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfigDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfigDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfigDelta;

                /**
                 * Creates a plain object from an AuditConfigDelta message. Also converts values to other types if specified.
                 * @param message AuditConfigDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfigDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace AuditConfigDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of an Expr. */
        interface IExpr {

            /** Expr expression */
            expression?: (string|null);

            /** Expr title */
            title?: (string|null);

            /** Expr description */
            description?: (string|null);

            /** Expr location */
            location?: (string|null);
        }

        /** Represents an Expr. */
        class Expr implements IExpr {

            /**
             * Constructs a new Expr.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IExpr);

            /** Expr expression. */
            public expression: string;

            /** Expr title. */
            public title: string;

            /** Expr description. */
            public description: string;

            /** Expr location. */
            public location: string;

            /**
             * Creates a new Expr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expr instance
             */
            public static create(properties?: google.type.IExpr): google.type.Expr;

            /**
             * Encodes the specified Expr message. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expr message, length delimited. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Expr;

            /**
             * Decodes an Expr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Expr;

            /**
             * Verifies an Expr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expr
             */
            public static fromObject(object: { [k: string]: any }): google.type.Expr;

            /**
             * Creates a plain object from an Expr message. Also converts values to other types if specified.
             * @param message Expr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
