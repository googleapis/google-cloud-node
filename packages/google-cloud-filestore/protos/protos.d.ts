// Copyright 2023 Google LLC
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

        /** Namespace common. */
        namespace common {

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

                /** OperationMetadata cancelRequested */
                cancelRequested?: (boolean|null);

                /** OperationMetadata apiVersion */
                apiVersion?: (string|null);
            }

            /** Represents an OperationMetadata. */
            class OperationMetadata implements IOperationMetadata {

                /**
                 * Constructs a new OperationMetadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.cloud.common.IOperationMetadata);

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

                /** OperationMetadata cancelRequested. */
                public cancelRequested: boolean;

                /** OperationMetadata apiVersion. */
                public apiVersion: string;

                /**
                 * Creates a new OperationMetadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperationMetadata instance
                 */
                public static create(properties?: google.cloud.common.IOperationMetadata): google.cloud.common.OperationMetadata;

                /**
                 * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.common.OperationMetadata.verify|verify} messages.
                 * @param message OperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.cloud.common.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.common.OperationMetadata.verify|verify} messages.
                 * @param message OperationMetadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.cloud.common.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperationMetadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.common.OperationMetadata;

                /**
                 * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OperationMetadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.common.OperationMetadata;

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
                public static fromObject(object: { [k: string]: any }): google.cloud.common.OperationMetadata;

                /**
                 * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                 * @param message OperationMetadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.cloud.common.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Namespace filestore. */
        namespace filestore {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a CloudFilestoreManager */
                class CloudFilestoreManager extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudFilestoreManager service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudFilestoreManager service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudFilestoreManager;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInstancesResponse
                     */
                    public listInstances(request: google.cloud.filestore.v1.IListInstancesRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.ListInstancesCallback): void;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @returns Promise
                     */
                    public listInstances(request: google.cloud.filestore.v1.IListInstancesRequest): Promise<google.cloud.filestore.v1.ListInstancesResponse>;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public getInstance(request: google.cloud.filestore.v1.IGetInstanceRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.GetInstanceCallback): void;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstance(request: google.cloud.filestore.v1.IGetInstanceRequest): Promise<google.cloud.filestore.v1.Instance>;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createInstance(request: google.cloud.filestore.v1.ICreateInstanceRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.CreateInstanceCallback): void;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public createInstance(request: google.cloud.filestore.v1.ICreateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateInstance(request: google.cloud.filestore.v1.IUpdateInstanceRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.UpdateInstanceCallback): void;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public updateInstance(request: google.cloud.filestore.v1.IUpdateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RestoreInstance.
                     * @param request RestoreInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restoreInstance(request: google.cloud.filestore.v1.IRestoreInstanceRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.RestoreInstanceCallback): void;

                    /**
                     * Calls RestoreInstance.
                     * @param request RestoreInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public restoreInstance(request: google.cloud.filestore.v1.IRestoreInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteInstance(request: google.cloud.filestore.v1.IDeleteInstanceRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.DeleteInstanceCallback): void;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteInstance(request: google.cloud.filestore.v1.IDeleteInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupsResponse
                     */
                    public listBackups(request: google.cloud.filestore.v1.IListBackupsRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.ListBackupsCallback): void;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @returns Promise
                     */
                    public listBackups(request: google.cloud.filestore.v1.IListBackupsRequest): Promise<google.cloud.filestore.v1.ListBackupsResponse>;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Backup
                     */
                    public getBackup(request: google.cloud.filestore.v1.IGetBackupRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.GetBackupCallback): void;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @returns Promise
                     */
                    public getBackup(request: google.cloud.filestore.v1.IGetBackupRequest): Promise<google.cloud.filestore.v1.Backup>;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBackup(request: google.cloud.filestore.v1.ICreateBackupRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.CreateBackupCallback): void;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public createBackup(request: google.cloud.filestore.v1.ICreateBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBackup(request: google.cloud.filestore.v1.IDeleteBackupRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.DeleteBackupCallback): void;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackup(request: google.cloud.filestore.v1.IDeleteBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateBackup.
                     * @param request UpdateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateBackup(request: google.cloud.filestore.v1.IUpdateBackupRequest, callback: google.cloud.filestore.v1.CloudFilestoreManager.UpdateBackupCallback): void;

                    /**
                     * Calls UpdateBackup.
                     * @param request UpdateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public updateBackup(request: google.cloud.filestore.v1.IUpdateBackupRequest): Promise<google.longrunning.Operation>;
                }

                namespace CloudFilestoreManager {

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|listInstances}.
                     * @param error Error, if any
                     * @param [response] ListInstancesResponse
                     */
                    type ListInstancesCallback = (error: (Error|null), response?: google.cloud.filestore.v1.ListInstancesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|getInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type GetInstanceCallback = (error: (Error|null), response?: google.cloud.filestore.v1.Instance) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|createInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|updateInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|restoreInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestoreInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|deleteInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|listBackups}.
                     * @param error Error, if any
                     * @param [response] ListBackupsResponse
                     */
                    type ListBackupsCallback = (error: (Error|null), response?: google.cloud.filestore.v1.ListBackupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|getBackup}.
                     * @param error Error, if any
                     * @param [response] Backup
                     */
                    type GetBackupCallback = (error: (Error|null), response?: google.cloud.filestore.v1.Backup) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|createBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|deleteBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1.CloudFilestoreManager|updateBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a NetworkConfig. */
                interface INetworkConfig {

                    /** NetworkConfig network */
                    network?: (string|null);

                    /** NetworkConfig modes */
                    modes?: (google.cloud.filestore.v1.NetworkConfig.AddressMode[]|null);

                    /** NetworkConfig reservedIpRange */
                    reservedIpRange?: (string|null);

                    /** NetworkConfig ipAddresses */
                    ipAddresses?: (string[]|null);
                }

                /** Represents a NetworkConfig. */
                class NetworkConfig implements INetworkConfig {

                    /**
                     * Constructs a new NetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.INetworkConfig);

                    /** NetworkConfig network. */
                    public network: string;

                    /** NetworkConfig modes. */
                    public modes: google.cloud.filestore.v1.NetworkConfig.AddressMode[];

                    /** NetworkConfig reservedIpRange. */
                    public reservedIpRange: string;

                    /** NetworkConfig ipAddresses. */
                    public ipAddresses: string[];

                    /**
                     * Creates a new NetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkConfig instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.INetworkConfig): google.cloud.filestore.v1.NetworkConfig;

                    /**
                     * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.filestore.v1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.NetworkConfig;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.NetworkConfig;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.NetworkConfig;

                    /**
                     * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                     * @param message NetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace NetworkConfig {

                    /** AddressMode enum. */
                    enum AddressMode {
                        ADDRESS_MODE_UNSPECIFIED = 0,
                        MODE_IPV4 = 1
                    }
                }

                /** Properties of a FileShareConfig. */
                interface IFileShareConfig {

                    /** FileShareConfig name */
                    name?: (string|null);

                    /** FileShareConfig capacityGb */
                    capacityGb?: (number|Long|string|null);

                    /** FileShareConfig sourceBackup */
                    sourceBackup?: (string|null);

                    /** FileShareConfig nfsExportOptions */
                    nfsExportOptions?: (google.cloud.filestore.v1.INfsExportOptions[]|null);
                }

                /** Represents a FileShareConfig. */
                class FileShareConfig implements IFileShareConfig {

                    /**
                     * Constructs a new FileShareConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IFileShareConfig);

                    /** FileShareConfig name. */
                    public name: string;

                    /** FileShareConfig capacityGb. */
                    public capacityGb: (number|Long|string);

                    /** FileShareConfig sourceBackup. */
                    public sourceBackup?: (string|null);

                    /** FileShareConfig nfsExportOptions. */
                    public nfsExportOptions: google.cloud.filestore.v1.INfsExportOptions[];

                    /** FileShareConfig source. */
                    public source?: "sourceBackup";

                    /**
                     * Creates a new FileShareConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FileShareConfig instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IFileShareConfig): google.cloud.filestore.v1.FileShareConfig;

                    /**
                     * Encodes the specified FileShareConfig message. Does not implicitly {@link google.cloud.filestore.v1.FileShareConfig.verify|verify} messages.
                     * @param message FileShareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IFileShareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FileShareConfig message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.FileShareConfig.verify|verify} messages.
                     * @param message FileShareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IFileShareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FileShareConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FileShareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.FileShareConfig;

                    /**
                     * Decodes a FileShareConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FileShareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.FileShareConfig;

                    /**
                     * Verifies a FileShareConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FileShareConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FileShareConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.FileShareConfig;

                    /**
                     * Creates a plain object from a FileShareConfig message. Also converts values to other types if specified.
                     * @param message FileShareConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.FileShareConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FileShareConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FileShareConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NfsExportOptions. */
                interface INfsExportOptions {

                    /** NfsExportOptions ipRanges */
                    ipRanges?: (string[]|null);

                    /** NfsExportOptions accessMode */
                    accessMode?: (google.cloud.filestore.v1.NfsExportOptions.AccessMode|keyof typeof google.cloud.filestore.v1.NfsExportOptions.AccessMode|null);

                    /** NfsExportOptions squashMode */
                    squashMode?: (google.cloud.filestore.v1.NfsExportOptions.SquashMode|keyof typeof google.cloud.filestore.v1.NfsExportOptions.SquashMode|null);

                    /** NfsExportOptions anonUid */
                    anonUid?: (number|Long|string|null);

                    /** NfsExportOptions anonGid */
                    anonGid?: (number|Long|string|null);
                }

                /** Represents a NfsExportOptions. */
                class NfsExportOptions implements INfsExportOptions {

                    /**
                     * Constructs a new NfsExportOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.INfsExportOptions);

                    /** NfsExportOptions ipRanges. */
                    public ipRanges: string[];

                    /** NfsExportOptions accessMode. */
                    public accessMode: (google.cloud.filestore.v1.NfsExportOptions.AccessMode|keyof typeof google.cloud.filestore.v1.NfsExportOptions.AccessMode);

                    /** NfsExportOptions squashMode. */
                    public squashMode: (google.cloud.filestore.v1.NfsExportOptions.SquashMode|keyof typeof google.cloud.filestore.v1.NfsExportOptions.SquashMode);

                    /** NfsExportOptions anonUid. */
                    public anonUid: (number|Long|string);

                    /** NfsExportOptions anonGid. */
                    public anonGid: (number|Long|string);

                    /**
                     * Creates a new NfsExportOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NfsExportOptions instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.INfsExportOptions): google.cloud.filestore.v1.NfsExportOptions;

                    /**
                     * Encodes the specified NfsExportOptions message. Does not implicitly {@link google.cloud.filestore.v1.NfsExportOptions.verify|verify} messages.
                     * @param message NfsExportOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.INfsExportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NfsExportOptions message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.NfsExportOptions.verify|verify} messages.
                     * @param message NfsExportOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.INfsExportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NfsExportOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NfsExportOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.NfsExportOptions;

                    /**
                     * Decodes a NfsExportOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NfsExportOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.NfsExportOptions;

                    /**
                     * Verifies a NfsExportOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NfsExportOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NfsExportOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.NfsExportOptions;

                    /**
                     * Creates a plain object from a NfsExportOptions message. Also converts values to other types if specified.
                     * @param message NfsExportOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.NfsExportOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NfsExportOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NfsExportOptions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace NfsExportOptions {

                    /** AccessMode enum. */
                    enum AccessMode {
                        ACCESS_MODE_UNSPECIFIED = 0,
                        READ_ONLY = 1,
                        READ_WRITE = 2
                    }

                    /** SquashMode enum. */
                    enum SquashMode {
                        SQUASH_MODE_UNSPECIFIED = 0,
                        NO_ROOT_SQUASH = 1,
                        ROOT_SQUASH = 2
                    }
                }

                /** Properties of an Instance. */
                interface IInstance {

                    /** Instance name */
                    name?: (string|null);

                    /** Instance description */
                    description?: (string|null);

                    /** Instance state */
                    state?: (google.cloud.filestore.v1.Instance.State|keyof typeof google.cloud.filestore.v1.Instance.State|null);

                    /** Instance statusMessage */
                    statusMessage?: (string|null);

                    /** Instance createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance tier */
                    tier?: (google.cloud.filestore.v1.Instance.Tier|keyof typeof google.cloud.filestore.v1.Instance.Tier|null);

                    /** Instance labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Instance fileShares */
                    fileShares?: (google.cloud.filestore.v1.IFileShareConfig[]|null);

                    /** Instance networks */
                    networks?: (google.cloud.filestore.v1.INetworkConfig[]|null);

                    /** Instance etag */
                    etag?: (string|null);

                    /** Instance satisfiesPzs */
                    satisfiesPzs?: (google.protobuf.IBoolValue|null);
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IInstance);

                    /** Instance name. */
                    public name: string;

                    /** Instance description. */
                    public description: string;

                    /** Instance state. */
                    public state: (google.cloud.filestore.v1.Instance.State|keyof typeof google.cloud.filestore.v1.Instance.State);

                    /** Instance statusMessage. */
                    public statusMessage: string;

                    /** Instance createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance tier. */
                    public tier: (google.cloud.filestore.v1.Instance.Tier|keyof typeof google.cloud.filestore.v1.Instance.Tier);

                    /** Instance labels. */
                    public labels: { [k: string]: string };

                    /** Instance fileShares. */
                    public fileShares: google.cloud.filestore.v1.IFileShareConfig[];

                    /** Instance networks. */
                    public networks: google.cloud.filestore.v1.INetworkConfig[];

                    /** Instance etag. */
                    public etag: string;

                    /** Instance satisfiesPzs. */
                    public satisfiesPzs?: (google.protobuf.IBoolValue|null);

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IInstance): google.cloud.filestore.v1.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.filestore.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.Instance;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        READY = 2,
                        REPAIRING = 3,
                        DELETING = 4,
                        ERROR = 6,
                        RESTORING = 7
                    }

                    /** Tier enum. */
                    enum Tier {
                        TIER_UNSPECIFIED = 0,
                        STANDARD = 1,
                        PREMIUM = 2,
                        BASIC_HDD = 3,
                        BASIC_SSD = 4,
                        HIGH_SCALE_SSD = 5
                    }
                }

                /** Properties of a CreateInstanceRequest. */
                interface ICreateInstanceRequest {

                    /** CreateInstanceRequest parent */
                    parent?: (string|null);

                    /** CreateInstanceRequest instanceId */
                    instanceId?: (string|null);

                    /** CreateInstanceRequest instance */
                    instance?: (google.cloud.filestore.v1.IInstance|null);
                }

                /** Represents a CreateInstanceRequest. */
                class CreateInstanceRequest implements ICreateInstanceRequest {

                    /**
                     * Constructs a new CreateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.ICreateInstanceRequest);

                    /** CreateInstanceRequest parent. */
                    public parent: string;

                    /** CreateInstanceRequest instanceId. */
                    public instanceId: string;

                    /** CreateInstanceRequest instance. */
                    public instance?: (google.cloud.filestore.v1.IInstance|null);

                    /**
                     * Creates a new CreateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.ICreateInstanceRequest): google.cloud.filestore.v1.CreateInstanceRequest;

                    /**
                     * Encodes the specified CreateInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.CreateInstanceRequest;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.CreateInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.CreateInstanceRequest;

                    /**
                     * Creates a plain object from a CreateInstanceRequest message. Also converts values to other types if specified.
                     * @param message CreateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.CreateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.filestore.v1.IGetInstanceRequest);

                    /** GetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IGetInstanceRequest): google.cloud.filestore.v1.GetInstanceRequest;

                    /**
                     * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.GetInstanceRequest;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.GetInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.GetInstanceRequest;

                    /**
                     * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of an UpdateInstanceRequest. */
                interface IUpdateInstanceRequest {

                    /** UpdateInstanceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateInstanceRequest instance */
                    instance?: (google.cloud.filestore.v1.IInstance|null);
                }

                /** Represents an UpdateInstanceRequest. */
                class UpdateInstanceRequest implements IUpdateInstanceRequest {

                    /**
                     * Constructs a new UpdateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IUpdateInstanceRequest);

                    /** UpdateInstanceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateInstanceRequest instance. */
                    public instance?: (google.cloud.filestore.v1.IInstance|null);

                    /**
                     * Creates a new UpdateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IUpdateInstanceRequest): google.cloud.filestore.v1.UpdateInstanceRequest;

                    /**
                     * Encodes the specified UpdateInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.UpdateInstanceRequest;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.UpdateInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.UpdateInstanceRequest;

                    /**
                     * Creates a plain object from an UpdateInstanceRequest message. Also converts values to other types if specified.
                     * @param message UpdateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.UpdateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a RestoreInstanceRequest. */
                interface IRestoreInstanceRequest {

                    /** RestoreInstanceRequest name */
                    name?: (string|null);

                    /** RestoreInstanceRequest fileShare */
                    fileShare?: (string|null);

                    /** RestoreInstanceRequest sourceBackup */
                    sourceBackup?: (string|null);
                }

                /** Represents a RestoreInstanceRequest. */
                class RestoreInstanceRequest implements IRestoreInstanceRequest {

                    /**
                     * Constructs a new RestoreInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IRestoreInstanceRequest);

                    /** RestoreInstanceRequest name. */
                    public name: string;

                    /** RestoreInstanceRequest fileShare. */
                    public fileShare: string;

                    /** RestoreInstanceRequest sourceBackup. */
                    public sourceBackup?: (string|null);

                    /** RestoreInstanceRequest source. */
                    public source?: "sourceBackup";

                    /**
                     * Creates a new RestoreInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IRestoreInstanceRequest): google.cloud.filestore.v1.RestoreInstanceRequest;

                    /**
                     * Encodes the specified RestoreInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1.RestoreInstanceRequest.verify|verify} messages.
                     * @param message RestoreInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IRestoreInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.RestoreInstanceRequest.verify|verify} messages.
                     * @param message RestoreInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IRestoreInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.RestoreInstanceRequest;

                    /**
                     * Decodes a RestoreInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.RestoreInstanceRequest;

                    /**
                     * Verifies a RestoreInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.RestoreInstanceRequest;

                    /**
                     * Creates a plain object from a RestoreInstanceRequest message. Also converts values to other types if specified.
                     * @param message RestoreInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.RestoreInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestoreInstanceRequest
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
                    constructor(properties?: google.cloud.filestore.v1.IDeleteInstanceRequest);

                    /** DeleteInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IDeleteInstanceRequest): google.cloud.filestore.v1.DeleteInstanceRequest;

                    /**
                     * Encodes the specified DeleteInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.DeleteInstanceRequest;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.DeleteInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.DeleteInstanceRequest;

                    /**
                     * Creates a plain object from a DeleteInstanceRequest message. Also converts values to other types if specified.
                     * @param message DeleteInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.DeleteInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ListInstancesRequest. */
                interface IListInstancesRequest {

                    /** ListInstancesRequest parent */
                    parent?: (string|null);

                    /** ListInstancesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInstancesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListInstancesRequest orderBy */
                    orderBy?: (string|null);

                    /** ListInstancesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListInstancesRequest. */
                class ListInstancesRequest implements IListInstancesRequest {

                    /**
                     * Constructs a new ListInstancesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IListInstancesRequest);

                    /** ListInstancesRequest parent. */
                    public parent: string;

                    /** ListInstancesRequest pageSize. */
                    public pageSize: number;

                    /** ListInstancesRequest pageToken. */
                    public pageToken: string;

                    /** ListInstancesRequest orderBy. */
                    public orderBy: string;

                    /** ListInstancesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListInstancesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IListInstancesRequest): google.cloud.filestore.v1.ListInstancesRequest;

                    /**
                     * Encodes the specified ListInstancesRequest message. Does not implicitly {@link google.cloud.filestore.v1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.ListInstancesRequest;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.ListInstancesRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.ListInstancesRequest;

                    /**
                     * Creates a plain object from a ListInstancesRequest message. Also converts values to other types if specified.
                     * @param message ListInstancesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.ListInstancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    instances?: (google.cloud.filestore.v1.IInstance[]|null);

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
                    constructor(properties?: google.cloud.filestore.v1.IListInstancesResponse);

                    /** ListInstancesResponse instances. */
                    public instances: google.cloud.filestore.v1.IInstance[];

                    /** ListInstancesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListInstancesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListInstancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesResponse instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IListInstancesResponse): google.cloud.filestore.v1.ListInstancesResponse;

                    /**
                     * Encodes the specified ListInstancesResponse message. Does not implicitly {@link google.cloud.filestore.v1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesResponse message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.ListInstancesResponse;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.ListInstancesResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.ListInstancesResponse;

                    /**
                     * Creates a plain object from a ListInstancesResponse message. Also converts values to other types if specified.
                     * @param message ListInstancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.ListInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Backup. */
                interface IBackup {

                    /** Backup name */
                    name?: (string|null);

                    /** Backup description */
                    description?: (string|null);

                    /** Backup state */
                    state?: (google.cloud.filestore.v1.Backup.State|keyof typeof google.cloud.filestore.v1.Backup.State|null);

                    /** Backup createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Backup capacityGb */
                    capacityGb?: (number|Long|string|null);

                    /** Backup storageBytes */
                    storageBytes?: (number|Long|string|null);

                    /** Backup sourceInstance */
                    sourceInstance?: (string|null);

                    /** Backup sourceFileShare */
                    sourceFileShare?: (string|null);

                    /** Backup sourceInstanceTier */
                    sourceInstanceTier?: (google.cloud.filestore.v1.Instance.Tier|keyof typeof google.cloud.filestore.v1.Instance.Tier|null);

                    /** Backup downloadBytes */
                    downloadBytes?: (number|Long|string|null);

                    /** Backup satisfiesPzs */
                    satisfiesPzs?: (google.protobuf.IBoolValue|null);
                }

                /** Represents a Backup. */
                class Backup implements IBackup {

                    /**
                     * Constructs a new Backup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IBackup);

                    /** Backup name. */
                    public name: string;

                    /** Backup description. */
                    public description: string;

                    /** Backup state. */
                    public state: (google.cloud.filestore.v1.Backup.State|keyof typeof google.cloud.filestore.v1.Backup.State);

                    /** Backup createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup labels. */
                    public labels: { [k: string]: string };

                    /** Backup capacityGb. */
                    public capacityGb: (number|Long|string);

                    /** Backup storageBytes. */
                    public storageBytes: (number|Long|string);

                    /** Backup sourceInstance. */
                    public sourceInstance: string;

                    /** Backup sourceFileShare. */
                    public sourceFileShare: string;

                    /** Backup sourceInstanceTier. */
                    public sourceInstanceTier: (google.cloud.filestore.v1.Instance.Tier|keyof typeof google.cloud.filestore.v1.Instance.Tier);

                    /** Backup downloadBytes. */
                    public downloadBytes: (number|Long|string);

                    /** Backup satisfiesPzs. */
                    public satisfiesPzs?: (google.protobuf.IBoolValue|null);

                    /**
                     * Creates a new Backup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Backup instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IBackup): google.cloud.filestore.v1.Backup;

                    /**
                     * Encodes the specified Backup message. Does not implicitly {@link google.cloud.filestore.v1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Backup message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Backup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.Backup;

                    /**
                     * Decodes a Backup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.Backup;

                    /**
                     * Verifies a Backup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Backup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Backup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.Backup;

                    /**
                     * Creates a plain object from a Backup message. Also converts values to other types if specified.
                     * @param message Backup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Backup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Backup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Backup {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        FINALIZING = 2,
                        READY = 3,
                        DELETING = 4
                    }
                }

                /** Properties of a CreateBackupRequest. */
                interface ICreateBackupRequest {

                    /** CreateBackupRequest parent */
                    parent?: (string|null);

                    /** CreateBackupRequest backup */
                    backup?: (google.cloud.filestore.v1.IBackup|null);

                    /** CreateBackupRequest backupId */
                    backupId?: (string|null);
                }

                /** Represents a CreateBackupRequest. */
                class CreateBackupRequest implements ICreateBackupRequest {

                    /**
                     * Constructs a new CreateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.ICreateBackupRequest);

                    /** CreateBackupRequest parent. */
                    public parent: string;

                    /** CreateBackupRequest backup. */
                    public backup?: (google.cloud.filestore.v1.IBackup|null);

                    /** CreateBackupRequest backupId. */
                    public backupId: string;

                    /**
                     * Creates a new CreateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.ICreateBackupRequest): google.cloud.filestore.v1.CreateBackupRequest;

                    /**
                     * Encodes the specified CreateBackupRequest message. Does not implicitly {@link google.cloud.filestore.v1.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.CreateBackupRequest;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.CreateBackupRequest;

                    /**
                     * Verifies a CreateBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.CreateBackupRequest;

                    /**
                     * Creates a plain object from a CreateBackupRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.CreateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteBackupRequest. */
                interface IDeleteBackupRequest {

                    /** DeleteBackupRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteBackupRequest. */
                class DeleteBackupRequest implements IDeleteBackupRequest {

                    /**
                     * Constructs a new DeleteBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IDeleteBackupRequest);

                    /** DeleteBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IDeleteBackupRequest): google.cloud.filestore.v1.DeleteBackupRequest;

                    /**
                     * Encodes the specified DeleteBackupRequest message. Does not implicitly {@link google.cloud.filestore.v1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.DeleteBackupRequest;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.DeleteBackupRequest;

                    /**
                     * Verifies a DeleteBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.DeleteBackupRequest;

                    /**
                     * Creates a plain object from a DeleteBackupRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.DeleteBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateBackupRequest. */
                interface IUpdateBackupRequest {

                    /** UpdateBackupRequest backup */
                    backup?: (google.cloud.filestore.v1.IBackup|null);

                    /** UpdateBackupRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateBackupRequest. */
                class UpdateBackupRequest implements IUpdateBackupRequest {

                    /**
                     * Constructs a new UpdateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IUpdateBackupRequest);

                    /** UpdateBackupRequest backup. */
                    public backup?: (google.cloud.filestore.v1.IBackup|null);

                    /** UpdateBackupRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IUpdateBackupRequest): google.cloud.filestore.v1.UpdateBackupRequest;

                    /**
                     * Encodes the specified UpdateBackupRequest message. Does not implicitly {@link google.cloud.filestore.v1.UpdateBackupRequest.verify|verify} messages.
                     * @param message UpdateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IUpdateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.UpdateBackupRequest.verify|verify} messages.
                     * @param message UpdateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IUpdateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.UpdateBackupRequest;

                    /**
                     * Decodes an UpdateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.UpdateBackupRequest;

                    /**
                     * Verifies an UpdateBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.UpdateBackupRequest;

                    /**
                     * Creates a plain object from an UpdateBackupRequest message. Also converts values to other types if specified.
                     * @param message UpdateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.UpdateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetBackupRequest. */
                interface IGetBackupRequest {

                    /** GetBackupRequest name */
                    name?: (string|null);
                }

                /** Represents a GetBackupRequest. */
                class GetBackupRequest implements IGetBackupRequest {

                    /**
                     * Constructs a new GetBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IGetBackupRequest);

                    /** GetBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IGetBackupRequest): google.cloud.filestore.v1.GetBackupRequest;

                    /**
                     * Encodes the specified GetBackupRequest message. Does not implicitly {@link google.cloud.filestore.v1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.GetBackupRequest;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.GetBackupRequest;

                    /**
                     * Verifies a GetBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.GetBackupRequest;

                    /**
                     * Creates a plain object from a GetBackupRequest message. Also converts values to other types if specified.
                     * @param message GetBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.GetBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupsRequest. */
                interface IListBackupsRequest {

                    /** ListBackupsRequest parent */
                    parent?: (string|null);

                    /** ListBackupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBackupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBackupsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListBackupsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListBackupsRequest. */
                class ListBackupsRequest implements IListBackupsRequest {

                    /**
                     * Constructs a new ListBackupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IListBackupsRequest);

                    /** ListBackupsRequest parent. */
                    public parent: string;

                    /** ListBackupsRequest pageSize. */
                    public pageSize: number;

                    /** ListBackupsRequest pageToken. */
                    public pageToken: string;

                    /** ListBackupsRequest orderBy. */
                    public orderBy: string;

                    /** ListBackupsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListBackupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IListBackupsRequest): google.cloud.filestore.v1.ListBackupsRequest;

                    /**
                     * Encodes the specified ListBackupsRequest message. Does not implicitly {@link google.cloud.filestore.v1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.ListBackupsRequest;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.ListBackupsRequest;

                    /**
                     * Verifies a ListBackupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.ListBackupsRequest;

                    /**
                     * Creates a plain object from a ListBackupsRequest message. Also converts values to other types if specified.
                     * @param message ListBackupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.ListBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupsResponse. */
                interface IListBackupsResponse {

                    /** ListBackupsResponse backups */
                    backups?: (google.cloud.filestore.v1.IBackup[]|null);

                    /** ListBackupsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListBackupsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListBackupsResponse. */
                class ListBackupsResponse implements IListBackupsResponse {

                    /**
                     * Constructs a new ListBackupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1.IListBackupsResponse);

                    /** ListBackupsResponse backups. */
                    public backups: google.cloud.filestore.v1.IBackup[];

                    /** ListBackupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListBackupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBackupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsResponse instance
                     */
                    public static create(properties?: google.cloud.filestore.v1.IListBackupsResponse): google.cloud.filestore.v1.ListBackupsResponse;

                    /**
                     * Encodes the specified ListBackupsResponse message. Does not implicitly {@link google.cloud.filestore.v1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsResponse message, length delimited. Does not implicitly {@link google.cloud.filestore.v1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1.ListBackupsResponse;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1.ListBackupsResponse;

                    /**
                     * Verifies a ListBackupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1.ListBackupsResponse;

                    /**
                     * Creates a plain object from a ListBackupsResponse message. Also converts values to other types if specified.
                     * @param message ListBackupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1.ListBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a CloudFilestoreManager */
                class CloudFilestoreManager extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudFilestoreManager service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudFilestoreManager service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudFilestoreManager;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListInstancesResponse
                     */
                    public listInstances(request: google.cloud.filestore.v1beta1.IListInstancesRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.ListInstancesCallback): void;

                    /**
                     * Calls ListInstances.
                     * @param request ListInstancesRequest message or plain object
                     * @returns Promise
                     */
                    public listInstances(request: google.cloud.filestore.v1beta1.IListInstancesRequest): Promise<google.cloud.filestore.v1beta1.ListInstancesResponse>;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Instance
                     */
                    public getInstance(request: google.cloud.filestore.v1beta1.IGetInstanceRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.GetInstanceCallback): void;

                    /**
                     * Calls GetInstance.
                     * @param request GetInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public getInstance(request: google.cloud.filestore.v1beta1.IGetInstanceRequest): Promise<google.cloud.filestore.v1beta1.Instance>;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createInstance(request: google.cloud.filestore.v1beta1.ICreateInstanceRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateInstanceCallback): void;

                    /**
                     * Calls CreateInstance.
                     * @param request CreateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public createInstance(request: google.cloud.filestore.v1beta1.ICreateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateInstance(request: google.cloud.filestore.v1beta1.IUpdateInstanceRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateInstanceCallback): void;

                    /**
                     * Calls UpdateInstance.
                     * @param request UpdateInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public updateInstance(request: google.cloud.filestore.v1beta1.IUpdateInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RestoreInstance.
                     * @param request RestoreInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restoreInstance(request: google.cloud.filestore.v1beta1.IRestoreInstanceRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.RestoreInstanceCallback): void;

                    /**
                     * Calls RestoreInstance.
                     * @param request RestoreInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public restoreInstance(request: google.cloud.filestore.v1beta1.IRestoreInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RevertInstance.
                     * @param request RevertInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public revertInstance(request: google.cloud.filestore.v1beta1.IRevertInstanceRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.RevertInstanceCallback): void;

                    /**
                     * Calls RevertInstance.
                     * @param request RevertInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public revertInstance(request: google.cloud.filestore.v1beta1.IRevertInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteInstance(request: google.cloud.filestore.v1beta1.IDeleteInstanceRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteInstanceCallback): void;

                    /**
                     * Calls DeleteInstance.
                     * @param request DeleteInstanceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteInstance(request: google.cloud.filestore.v1beta1.IDeleteInstanceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListSnapshots.
                     * @param request ListSnapshotsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSnapshotsResponse
                     */
                    public listSnapshots(request: google.cloud.filestore.v1beta1.IListSnapshotsRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.ListSnapshotsCallback): void;

                    /**
                     * Calls ListSnapshots.
                     * @param request ListSnapshotsRequest message or plain object
                     * @returns Promise
                     */
                    public listSnapshots(request: google.cloud.filestore.v1beta1.IListSnapshotsRequest): Promise<google.cloud.filestore.v1beta1.ListSnapshotsResponse>;

                    /**
                     * Calls GetSnapshot.
                     * @param request GetSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Snapshot
                     */
                    public getSnapshot(request: google.cloud.filestore.v1beta1.IGetSnapshotRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.GetSnapshotCallback): void;

                    /**
                     * Calls GetSnapshot.
                     * @param request GetSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public getSnapshot(request: google.cloud.filestore.v1beta1.IGetSnapshotRequest): Promise<google.cloud.filestore.v1beta1.Snapshot>;

                    /**
                     * Calls CreateSnapshot.
                     * @param request CreateSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createSnapshot(request: google.cloud.filestore.v1beta1.ICreateSnapshotRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateSnapshotCallback): void;

                    /**
                     * Calls CreateSnapshot.
                     * @param request CreateSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public createSnapshot(request: google.cloud.filestore.v1beta1.ICreateSnapshotRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteSnapshot.
                     * @param request DeleteSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteSnapshot(request: google.cloud.filestore.v1beta1.IDeleteSnapshotRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteSnapshotCallback): void;

                    /**
                     * Calls DeleteSnapshot.
                     * @param request DeleteSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSnapshot(request: google.cloud.filestore.v1beta1.IDeleteSnapshotRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateSnapshot.
                     * @param request UpdateSnapshotRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateSnapshot(request: google.cloud.filestore.v1beta1.IUpdateSnapshotRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateSnapshotCallback): void;

                    /**
                     * Calls UpdateSnapshot.
                     * @param request UpdateSnapshotRequest message or plain object
                     * @returns Promise
                     */
                    public updateSnapshot(request: google.cloud.filestore.v1beta1.IUpdateSnapshotRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupsResponse
                     */
                    public listBackups(request: google.cloud.filestore.v1beta1.IListBackupsRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.ListBackupsCallback): void;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @returns Promise
                     */
                    public listBackups(request: google.cloud.filestore.v1beta1.IListBackupsRequest): Promise<google.cloud.filestore.v1beta1.ListBackupsResponse>;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Backup
                     */
                    public getBackup(request: google.cloud.filestore.v1beta1.IGetBackupRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.GetBackupCallback): void;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @returns Promise
                     */
                    public getBackup(request: google.cloud.filestore.v1beta1.IGetBackupRequest): Promise<google.cloud.filestore.v1beta1.Backup>;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBackup(request: google.cloud.filestore.v1beta1.ICreateBackupRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateBackupCallback): void;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public createBackup(request: google.cloud.filestore.v1beta1.ICreateBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBackup(request: google.cloud.filestore.v1beta1.IDeleteBackupRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteBackupCallback): void;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackup(request: google.cloud.filestore.v1beta1.IDeleteBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateBackup.
                     * @param request UpdateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateBackup(request: google.cloud.filestore.v1beta1.IUpdateBackupRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateBackupCallback): void;

                    /**
                     * Calls UpdateBackup.
                     * @param request UpdateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public updateBackup(request: google.cloud.filestore.v1beta1.IUpdateBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListShares.
                     * @param request ListSharesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSharesResponse
                     */
                    public listShares(request: google.cloud.filestore.v1beta1.IListSharesRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.ListSharesCallback): void;

                    /**
                     * Calls ListShares.
                     * @param request ListSharesRequest message or plain object
                     * @returns Promise
                     */
                    public listShares(request: google.cloud.filestore.v1beta1.IListSharesRequest): Promise<google.cloud.filestore.v1beta1.ListSharesResponse>;

                    /**
                     * Calls GetShare.
                     * @param request GetShareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Share
                     */
                    public getShare(request: google.cloud.filestore.v1beta1.IGetShareRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.GetShareCallback): void;

                    /**
                     * Calls GetShare.
                     * @param request GetShareRequest message or plain object
                     * @returns Promise
                     */
                    public getShare(request: google.cloud.filestore.v1beta1.IGetShareRequest): Promise<google.cloud.filestore.v1beta1.Share>;

                    /**
                     * Calls CreateShare.
                     * @param request CreateShareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createShare(request: google.cloud.filestore.v1beta1.ICreateShareRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.CreateShareCallback): void;

                    /**
                     * Calls CreateShare.
                     * @param request CreateShareRequest message or plain object
                     * @returns Promise
                     */
                    public createShare(request: google.cloud.filestore.v1beta1.ICreateShareRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteShare.
                     * @param request DeleteShareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteShare(request: google.cloud.filestore.v1beta1.IDeleteShareRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.DeleteShareCallback): void;

                    /**
                     * Calls DeleteShare.
                     * @param request DeleteShareRequest message or plain object
                     * @returns Promise
                     */
                    public deleteShare(request: google.cloud.filestore.v1beta1.IDeleteShareRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateShare.
                     * @param request UpdateShareRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateShare(request: google.cloud.filestore.v1beta1.IUpdateShareRequest, callback: google.cloud.filestore.v1beta1.CloudFilestoreManager.UpdateShareCallback): void;

                    /**
                     * Calls UpdateShare.
                     * @param request UpdateShareRequest message or plain object
                     * @returns Promise
                     */
                    public updateShare(request: google.cloud.filestore.v1beta1.IUpdateShareRequest): Promise<google.longrunning.Operation>;
                }

                namespace CloudFilestoreManager {

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|listInstances}.
                     * @param error Error, if any
                     * @param [response] ListInstancesResponse
                     */
                    type ListInstancesCallback = (error: (Error|null), response?: google.cloud.filestore.v1beta1.ListInstancesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|getInstance}.
                     * @param error Error, if any
                     * @param [response] Instance
                     */
                    type GetInstanceCallback = (error: (Error|null), response?: google.cloud.filestore.v1beta1.Instance) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|createInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|updateInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|restoreInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestoreInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|revertInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RevertInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|deleteInstance}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteInstanceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|listSnapshots}.
                     * @param error Error, if any
                     * @param [response] ListSnapshotsResponse
                     */
                    type ListSnapshotsCallback = (error: (Error|null), response?: google.cloud.filestore.v1beta1.ListSnapshotsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|getSnapshot}.
                     * @param error Error, if any
                     * @param [response] Snapshot
                     */
                    type GetSnapshotCallback = (error: (Error|null), response?: google.cloud.filestore.v1beta1.Snapshot) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|createSnapshot}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateSnapshotCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|deleteSnapshot}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteSnapshotCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|updateSnapshot}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateSnapshotCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|listBackups}.
                     * @param error Error, if any
                     * @param [response] ListBackupsResponse
                     */
                    type ListBackupsCallback = (error: (Error|null), response?: google.cloud.filestore.v1beta1.ListBackupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|getBackup}.
                     * @param error Error, if any
                     * @param [response] Backup
                     */
                    type GetBackupCallback = (error: (Error|null), response?: google.cloud.filestore.v1beta1.Backup) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|createBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|deleteBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|updateBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|listShares}.
                     * @param error Error, if any
                     * @param [response] ListSharesResponse
                     */
                    type ListSharesCallback = (error: (Error|null), response?: google.cloud.filestore.v1beta1.ListSharesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|getShare}.
                     * @param error Error, if any
                     * @param [response] Share
                     */
                    type GetShareCallback = (error: (Error|null), response?: google.cloud.filestore.v1beta1.Share) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|createShare}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateShareCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|deleteShare}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteShareCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.filestore.v1beta1.CloudFilestoreManager|updateShare}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateShareCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a NetworkConfig. */
                interface INetworkConfig {

                    /** NetworkConfig network */
                    network?: (string|null);

                    /** NetworkConfig modes */
                    modes?: (google.cloud.filestore.v1beta1.NetworkConfig.AddressMode[]|null);

                    /** NetworkConfig reservedIpRange */
                    reservedIpRange?: (string|null);

                    /** NetworkConfig ipAddresses */
                    ipAddresses?: (string[]|null);

                    /** NetworkConfig connectMode */
                    connectMode?: (google.cloud.filestore.v1beta1.NetworkConfig.ConnectMode|keyof typeof google.cloud.filestore.v1beta1.NetworkConfig.ConnectMode|null);
                }

                /** Represents a NetworkConfig. */
                class NetworkConfig implements INetworkConfig {

                    /**
                     * Constructs a new NetworkConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.INetworkConfig);

                    /** NetworkConfig network. */
                    public network: string;

                    /** NetworkConfig modes. */
                    public modes: google.cloud.filestore.v1beta1.NetworkConfig.AddressMode[];

                    /** NetworkConfig reservedIpRange. */
                    public reservedIpRange: string;

                    /** NetworkConfig ipAddresses. */
                    public ipAddresses: string[];

                    /** NetworkConfig connectMode. */
                    public connectMode: (google.cloud.filestore.v1beta1.NetworkConfig.ConnectMode|keyof typeof google.cloud.filestore.v1beta1.NetworkConfig.ConnectMode);

                    /**
                     * Creates a new NetworkConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NetworkConfig instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.INetworkConfig): google.cloud.filestore.v1beta1.NetworkConfig;

                    /**
                     * Encodes the specified NetworkConfig message. Does not implicitly {@link google.cloud.filestore.v1beta1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NetworkConfig message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.NetworkConfig.verify|verify} messages.
                     * @param message NetworkConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.NetworkConfig;

                    /**
                     * Decodes a NetworkConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NetworkConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.NetworkConfig;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.NetworkConfig;

                    /**
                     * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
                     * @param message NetworkConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NetworkConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NetworkConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace NetworkConfig {

                    /** AddressMode enum. */
                    enum AddressMode {
                        ADDRESS_MODE_UNSPECIFIED = 0,
                        MODE_IPV4 = 1
                    }

                    /** ConnectMode enum. */
                    enum ConnectMode {
                        CONNECT_MODE_UNSPECIFIED = 0,
                        DIRECT_PEERING = 1,
                        PRIVATE_SERVICE_ACCESS = 2
                    }
                }

                /** Properties of a FileShareConfig. */
                interface IFileShareConfig {

                    /** FileShareConfig name */
                    name?: (string|null);

                    /** FileShareConfig capacityGb */
                    capacityGb?: (number|Long|string|null);

                    /** FileShareConfig sourceBackup */
                    sourceBackup?: (string|null);

                    /** FileShareConfig nfsExportOptions */
                    nfsExportOptions?: (google.cloud.filestore.v1beta1.INfsExportOptions[]|null);
                }

                /** Represents a FileShareConfig. */
                class FileShareConfig implements IFileShareConfig {

                    /**
                     * Constructs a new FileShareConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IFileShareConfig);

                    /** FileShareConfig name. */
                    public name: string;

                    /** FileShareConfig capacityGb. */
                    public capacityGb: (number|Long|string);

                    /** FileShareConfig sourceBackup. */
                    public sourceBackup?: (string|null);

                    /** FileShareConfig nfsExportOptions. */
                    public nfsExportOptions: google.cloud.filestore.v1beta1.INfsExportOptions[];

                    /** FileShareConfig source. */
                    public source?: "sourceBackup";

                    /**
                     * Creates a new FileShareConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FileShareConfig instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IFileShareConfig): google.cloud.filestore.v1beta1.FileShareConfig;

                    /**
                     * Encodes the specified FileShareConfig message. Does not implicitly {@link google.cloud.filestore.v1beta1.FileShareConfig.verify|verify} messages.
                     * @param message FileShareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IFileShareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FileShareConfig message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.FileShareConfig.verify|verify} messages.
                     * @param message FileShareConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IFileShareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FileShareConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FileShareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.FileShareConfig;

                    /**
                     * Decodes a FileShareConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FileShareConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.FileShareConfig;

                    /**
                     * Verifies a FileShareConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FileShareConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FileShareConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.FileShareConfig;

                    /**
                     * Creates a plain object from a FileShareConfig message. Also converts values to other types if specified.
                     * @param message FileShareConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.FileShareConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FileShareConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FileShareConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NfsExportOptions. */
                interface INfsExportOptions {

                    /** NfsExportOptions ipRanges */
                    ipRanges?: (string[]|null);

                    /** NfsExportOptions accessMode */
                    accessMode?: (google.cloud.filestore.v1beta1.NfsExportOptions.AccessMode|keyof typeof google.cloud.filestore.v1beta1.NfsExportOptions.AccessMode|null);

                    /** NfsExportOptions squashMode */
                    squashMode?: (google.cloud.filestore.v1beta1.NfsExportOptions.SquashMode|keyof typeof google.cloud.filestore.v1beta1.NfsExportOptions.SquashMode|null);

                    /** NfsExportOptions anonUid */
                    anonUid?: (number|Long|string|null);

                    /** NfsExportOptions anonGid */
                    anonGid?: (number|Long|string|null);
                }

                /** Represents a NfsExportOptions. */
                class NfsExportOptions implements INfsExportOptions {

                    /**
                     * Constructs a new NfsExportOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.INfsExportOptions);

                    /** NfsExportOptions ipRanges. */
                    public ipRanges: string[];

                    /** NfsExportOptions accessMode. */
                    public accessMode: (google.cloud.filestore.v1beta1.NfsExportOptions.AccessMode|keyof typeof google.cloud.filestore.v1beta1.NfsExportOptions.AccessMode);

                    /** NfsExportOptions squashMode. */
                    public squashMode: (google.cloud.filestore.v1beta1.NfsExportOptions.SquashMode|keyof typeof google.cloud.filestore.v1beta1.NfsExportOptions.SquashMode);

                    /** NfsExportOptions anonUid. */
                    public anonUid: (number|Long|string);

                    /** NfsExportOptions anonGid. */
                    public anonGid: (number|Long|string);

                    /**
                     * Creates a new NfsExportOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NfsExportOptions instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.INfsExportOptions): google.cloud.filestore.v1beta1.NfsExportOptions;

                    /**
                     * Encodes the specified NfsExportOptions message. Does not implicitly {@link google.cloud.filestore.v1beta1.NfsExportOptions.verify|verify} messages.
                     * @param message NfsExportOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.INfsExportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NfsExportOptions message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.NfsExportOptions.verify|verify} messages.
                     * @param message NfsExportOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.INfsExportOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NfsExportOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NfsExportOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.NfsExportOptions;

                    /**
                     * Decodes a NfsExportOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NfsExportOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.NfsExportOptions;

                    /**
                     * Verifies a NfsExportOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NfsExportOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NfsExportOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.NfsExportOptions;

                    /**
                     * Creates a plain object from a NfsExportOptions message. Also converts values to other types if specified.
                     * @param message NfsExportOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.NfsExportOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NfsExportOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NfsExportOptions
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace NfsExportOptions {

                    /** AccessMode enum. */
                    enum AccessMode {
                        ACCESS_MODE_UNSPECIFIED = 0,
                        READ_ONLY = 1,
                        READ_WRITE = 2
                    }

                    /** SquashMode enum. */
                    enum SquashMode {
                        SQUASH_MODE_UNSPECIFIED = 0,
                        NO_ROOT_SQUASH = 1,
                        ROOT_SQUASH = 2
                    }
                }

                /** Properties of an Instance. */
                interface IInstance {

                    /** Instance name */
                    name?: (string|null);

                    /** Instance description */
                    description?: (string|null);

                    /** Instance state */
                    state?: (google.cloud.filestore.v1beta1.Instance.State|keyof typeof google.cloud.filestore.v1beta1.Instance.State|null);

                    /** Instance statusMessage */
                    statusMessage?: (string|null);

                    /** Instance createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance tier */
                    tier?: (google.cloud.filestore.v1beta1.Instance.Tier|keyof typeof google.cloud.filestore.v1beta1.Instance.Tier|null);

                    /** Instance labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Instance fileShares */
                    fileShares?: (google.cloud.filestore.v1beta1.IFileShareConfig[]|null);

                    /** Instance networks */
                    networks?: (google.cloud.filestore.v1beta1.INetworkConfig[]|null);

                    /** Instance etag */
                    etag?: (string|null);

                    /** Instance satisfiesPzs */
                    satisfiesPzs?: (google.protobuf.IBoolValue|null);

                    /** Instance kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** Instance suspensionReasons */
                    suspensionReasons?: (google.cloud.filestore.v1beta1.Instance.SuspensionReason[]|null);

                    /** Instance maxCapacityGb */
                    maxCapacityGb?: (number|Long|string|null);

                    /** Instance capacityStepSizeGb */
                    capacityStepSizeGb?: (number|Long|string|null);

                    /** Instance maxShareCount */
                    maxShareCount?: (number|Long|string|null);

                    /** Instance capacityGb */
                    capacityGb?: (number|Long|string|null);

                    /** Instance multiShareEnabled */
                    multiShareEnabled?: (boolean|null);
                }

                /** Represents an Instance. */
                class Instance implements IInstance {

                    /**
                     * Constructs a new Instance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IInstance);

                    /** Instance name. */
                    public name: string;

                    /** Instance description. */
                    public description: string;

                    /** Instance state. */
                    public state: (google.cloud.filestore.v1beta1.Instance.State|keyof typeof google.cloud.filestore.v1beta1.Instance.State);

                    /** Instance statusMessage. */
                    public statusMessage: string;

                    /** Instance createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Instance tier. */
                    public tier: (google.cloud.filestore.v1beta1.Instance.Tier|keyof typeof google.cloud.filestore.v1beta1.Instance.Tier);

                    /** Instance labels. */
                    public labels: { [k: string]: string };

                    /** Instance fileShares. */
                    public fileShares: google.cloud.filestore.v1beta1.IFileShareConfig[];

                    /** Instance networks. */
                    public networks: google.cloud.filestore.v1beta1.INetworkConfig[];

                    /** Instance etag. */
                    public etag: string;

                    /** Instance satisfiesPzs. */
                    public satisfiesPzs?: (google.protobuf.IBoolValue|null);

                    /** Instance kmsKeyName. */
                    public kmsKeyName: string;

                    /** Instance suspensionReasons. */
                    public suspensionReasons: google.cloud.filestore.v1beta1.Instance.SuspensionReason[];

                    /** Instance maxCapacityGb. */
                    public maxCapacityGb: (number|Long|string);

                    /** Instance capacityStepSizeGb. */
                    public capacityStepSizeGb: (number|Long|string);

                    /** Instance maxShareCount. */
                    public maxShareCount: (number|Long|string);

                    /** Instance capacityGb. */
                    public capacityGb: (number|Long|string);

                    /** Instance multiShareEnabled. */
                    public multiShareEnabled: boolean;

                    /**
                     * Creates a new Instance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Instance instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IInstance): google.cloud.filestore.v1beta1.Instance;

                    /**
                     * Encodes the specified Instance message. Does not implicitly {@link google.cloud.filestore.v1beta1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Instance message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.Instance.verify|verify} messages.
                     * @param message Instance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Instance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.Instance;

                    /**
                     * Decodes an Instance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Instance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.Instance;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.Instance;

                    /**
                     * Creates a plain object from an Instance message. Also converts values to other types if specified.
                     * @param message Instance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.Instance, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        READY = 2,
                        REPAIRING = 3,
                        DELETING = 4,
                        ERROR = 6,
                        RESTORING = 7,
                        SUSPENDED = 8,
                        REVERTING = 9,
                        SUSPENDING = 10,
                        RESUMING = 11
                    }

                    /** Tier enum. */
                    enum Tier {
                        TIER_UNSPECIFIED = 0,
                        STANDARD = 1,
                        PREMIUM = 2,
                        BASIC_HDD = 3,
                        BASIC_SSD = 4,
                        HIGH_SCALE_SSD = 6,
                        ENTERPRISE = 7
                    }

                    /** SuspensionReason enum. */
                    enum SuspensionReason {
                        SUSPENSION_REASON_UNSPECIFIED = 0,
                        KMS_KEY_ISSUE = 1
                    }
                }

                /** Properties of a CreateInstanceRequest. */
                interface ICreateInstanceRequest {

                    /** CreateInstanceRequest parent */
                    parent?: (string|null);

                    /** CreateInstanceRequest instanceId */
                    instanceId?: (string|null);

                    /** CreateInstanceRequest instance */
                    instance?: (google.cloud.filestore.v1beta1.IInstance|null);
                }

                /** Represents a CreateInstanceRequest. */
                class CreateInstanceRequest implements ICreateInstanceRequest {

                    /**
                     * Constructs a new CreateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.ICreateInstanceRequest);

                    /** CreateInstanceRequest parent. */
                    public parent: string;

                    /** CreateInstanceRequest instanceId. */
                    public instanceId: string;

                    /** CreateInstanceRequest instance. */
                    public instance?: (google.cloud.filestore.v1beta1.IInstance|null);

                    /**
                     * Creates a new CreateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.ICreateInstanceRequest): google.cloud.filestore.v1beta1.CreateInstanceRequest;

                    /**
                     * Encodes the specified CreateInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.CreateInstanceRequest.verify|verify} messages.
                     * @param message CreateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.ICreateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.CreateInstanceRequest;

                    /**
                     * Decodes a CreateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.CreateInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.CreateInstanceRequest;

                    /**
                     * Creates a plain object from a CreateInstanceRequest message. Also converts values to other types if specified.
                     * @param message CreateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.CreateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.filestore.v1beta1.IGetInstanceRequest);

                    /** GetInstanceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IGetInstanceRequest): google.cloud.filestore.v1beta1.GetInstanceRequest;

                    /**
                     * Encodes the specified GetInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.GetInstanceRequest.verify|verify} messages.
                     * @param message GetInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IGetInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.GetInstanceRequest;

                    /**
                     * Decodes a GetInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.GetInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.GetInstanceRequest;

                    /**
                     * Creates a plain object from a GetInstanceRequest message. Also converts values to other types if specified.
                     * @param message GetInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.GetInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of an UpdateInstanceRequest. */
                interface IUpdateInstanceRequest {

                    /** UpdateInstanceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateInstanceRequest instance */
                    instance?: (google.cloud.filestore.v1beta1.IInstance|null);
                }

                /** Represents an UpdateInstanceRequest. */
                class UpdateInstanceRequest implements IUpdateInstanceRequest {

                    /**
                     * Constructs a new UpdateInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IUpdateInstanceRequest);

                    /** UpdateInstanceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateInstanceRequest instance. */
                    public instance?: (google.cloud.filestore.v1beta1.IInstance|null);

                    /**
                     * Creates a new UpdateInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IUpdateInstanceRequest): google.cloud.filestore.v1beta1.UpdateInstanceRequest;

                    /**
                     * Encodes the specified UpdateInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.UpdateInstanceRequest.verify|verify} messages.
                     * @param message UpdateInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IUpdateInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.UpdateInstanceRequest;

                    /**
                     * Decodes an UpdateInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.UpdateInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.UpdateInstanceRequest;

                    /**
                     * Creates a plain object from an UpdateInstanceRequest message. Also converts values to other types if specified.
                     * @param message UpdateInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.UpdateInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a RestoreInstanceRequest. */
                interface IRestoreInstanceRequest {

                    /** RestoreInstanceRequest name */
                    name?: (string|null);

                    /** RestoreInstanceRequest fileShare */
                    fileShare?: (string|null);

                    /** RestoreInstanceRequest sourceSnapshot */
                    sourceSnapshot?: (string|null);

                    /** RestoreInstanceRequest sourceBackup */
                    sourceBackup?: (string|null);
                }

                /** Represents a RestoreInstanceRequest. */
                class RestoreInstanceRequest implements IRestoreInstanceRequest {

                    /**
                     * Constructs a new RestoreInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IRestoreInstanceRequest);

                    /** RestoreInstanceRequest name. */
                    public name: string;

                    /** RestoreInstanceRequest fileShare. */
                    public fileShare: string;

                    /** RestoreInstanceRequest sourceSnapshot. */
                    public sourceSnapshot?: (string|null);

                    /** RestoreInstanceRequest sourceBackup. */
                    public sourceBackup?: (string|null);

                    /** RestoreInstanceRequest source. */
                    public source?: ("sourceSnapshot"|"sourceBackup");

                    /**
                     * Creates a new RestoreInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IRestoreInstanceRequest): google.cloud.filestore.v1beta1.RestoreInstanceRequest;

                    /**
                     * Encodes the specified RestoreInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.RestoreInstanceRequest.verify|verify} messages.
                     * @param message RestoreInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IRestoreInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.RestoreInstanceRequest.verify|verify} messages.
                     * @param message RestoreInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IRestoreInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.RestoreInstanceRequest;

                    /**
                     * Decodes a RestoreInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.RestoreInstanceRequest;

                    /**
                     * Verifies a RestoreInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.RestoreInstanceRequest;

                    /**
                     * Creates a plain object from a RestoreInstanceRequest message. Also converts values to other types if specified.
                     * @param message RestoreInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.RestoreInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestoreInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RevertInstanceRequest. */
                interface IRevertInstanceRequest {

                    /** RevertInstanceRequest name */
                    name?: (string|null);

                    /** RevertInstanceRequest targetSnapshotId */
                    targetSnapshotId?: (string|null);
                }

                /** Represents a RevertInstanceRequest. */
                class RevertInstanceRequest implements IRevertInstanceRequest {

                    /**
                     * Constructs a new RevertInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IRevertInstanceRequest);

                    /** RevertInstanceRequest name. */
                    public name: string;

                    /** RevertInstanceRequest targetSnapshotId. */
                    public targetSnapshotId: string;

                    /**
                     * Creates a new RevertInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RevertInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IRevertInstanceRequest): google.cloud.filestore.v1beta1.RevertInstanceRequest;

                    /**
                     * Encodes the specified RevertInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.RevertInstanceRequest.verify|verify} messages.
                     * @param message RevertInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IRevertInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RevertInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.RevertInstanceRequest.verify|verify} messages.
                     * @param message RevertInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IRevertInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RevertInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RevertInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.RevertInstanceRequest;

                    /**
                     * Decodes a RevertInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RevertInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.RevertInstanceRequest;

                    /**
                     * Verifies a RevertInstanceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RevertInstanceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RevertInstanceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.RevertInstanceRequest;

                    /**
                     * Creates a plain object from a RevertInstanceRequest message. Also converts values to other types if specified.
                     * @param message RevertInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.RevertInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RevertInstanceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RevertInstanceRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteInstanceRequest. */
                interface IDeleteInstanceRequest {

                    /** DeleteInstanceRequest name */
                    name?: (string|null);

                    /** DeleteInstanceRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteInstanceRequest. */
                class DeleteInstanceRequest implements IDeleteInstanceRequest {

                    /**
                     * Constructs a new DeleteInstanceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IDeleteInstanceRequest);

                    /** DeleteInstanceRequest name. */
                    public name: string;

                    /** DeleteInstanceRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteInstanceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteInstanceRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IDeleteInstanceRequest): google.cloud.filestore.v1beta1.DeleteInstanceRequest;

                    /**
                     * Encodes the specified DeleteInstanceRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteInstanceRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.DeleteInstanceRequest.verify|verify} messages.
                     * @param message DeleteInstanceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IDeleteInstanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.DeleteInstanceRequest;

                    /**
                     * Decodes a DeleteInstanceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteInstanceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.DeleteInstanceRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.DeleteInstanceRequest;

                    /**
                     * Creates a plain object from a DeleteInstanceRequest message. Also converts values to other types if specified.
                     * @param message DeleteInstanceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.DeleteInstanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ListInstancesRequest. */
                interface IListInstancesRequest {

                    /** ListInstancesRequest parent */
                    parent?: (string|null);

                    /** ListInstancesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListInstancesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListInstancesRequest orderBy */
                    orderBy?: (string|null);

                    /** ListInstancesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListInstancesRequest. */
                class ListInstancesRequest implements IListInstancesRequest {

                    /**
                     * Constructs a new ListInstancesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IListInstancesRequest);

                    /** ListInstancesRequest parent. */
                    public parent: string;

                    /** ListInstancesRequest pageSize. */
                    public pageSize: number;

                    /** ListInstancesRequest pageToken. */
                    public pageToken: string;

                    /** ListInstancesRequest orderBy. */
                    public orderBy: string;

                    /** ListInstancesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListInstancesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IListInstancesRequest): google.cloud.filestore.v1beta1.ListInstancesRequest;

                    /**
                     * Encodes the specified ListInstancesRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.ListInstancesRequest.verify|verify} messages.
                     * @param message ListInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IListInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.ListInstancesRequest;

                    /**
                     * Decodes a ListInstancesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.ListInstancesRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.ListInstancesRequest;

                    /**
                     * Creates a plain object from a ListInstancesRequest message. Also converts values to other types if specified.
                     * @param message ListInstancesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.ListInstancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    instances?: (google.cloud.filestore.v1beta1.IInstance[]|null);

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
                    constructor(properties?: google.cloud.filestore.v1beta1.IListInstancesResponse);

                    /** ListInstancesResponse instances. */
                    public instances: google.cloud.filestore.v1beta1.IInstance[];

                    /** ListInstancesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListInstancesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListInstancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListInstancesResponse instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IListInstancesResponse): google.cloud.filestore.v1beta1.ListInstancesResponse;

                    /**
                     * Encodes the specified ListInstancesResponse message. Does not implicitly {@link google.cloud.filestore.v1beta1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListInstancesResponse message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.ListInstancesResponse.verify|verify} messages.
                     * @param message ListInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IListInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.ListInstancesResponse;

                    /**
                     * Decodes a ListInstancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.ListInstancesResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.ListInstancesResponse;

                    /**
                     * Creates a plain object from a ListInstancesResponse message. Also converts values to other types if specified.
                     * @param message ListInstancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.ListInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a Snapshot. */
                interface ISnapshot {

                    /** Snapshot name */
                    name?: (string|null);

                    /** Snapshot description */
                    description?: (string|null);

                    /** Snapshot state */
                    state?: (google.cloud.filestore.v1beta1.Snapshot.State|keyof typeof google.cloud.filestore.v1beta1.Snapshot.State|null);

                    /** Snapshot createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Snapshot labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Snapshot filesystemUsedBytes */
                    filesystemUsedBytes?: (number|Long|string|null);
                }

                /** Represents a Snapshot. */
                class Snapshot implements ISnapshot {

                    /**
                     * Constructs a new Snapshot.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.ISnapshot);

                    /** Snapshot name. */
                    public name: string;

                    /** Snapshot description. */
                    public description: string;

                    /** Snapshot state. */
                    public state: (google.cloud.filestore.v1beta1.Snapshot.State|keyof typeof google.cloud.filestore.v1beta1.Snapshot.State);

                    /** Snapshot createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Snapshot labels. */
                    public labels: { [k: string]: string };

                    /** Snapshot filesystemUsedBytes. */
                    public filesystemUsedBytes: (number|Long|string);

                    /**
                     * Creates a new Snapshot instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Snapshot instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.ISnapshot): google.cloud.filestore.v1beta1.Snapshot;

                    /**
                     * Encodes the specified Snapshot message. Does not implicitly {@link google.cloud.filestore.v1beta1.Snapshot.verify|verify} messages.
                     * @param message Snapshot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Snapshot message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.Snapshot.verify|verify} messages.
                     * @param message Snapshot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.ISnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Snapshot message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Snapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.Snapshot;

                    /**
                     * Decodes a Snapshot message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Snapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.Snapshot;

                    /**
                     * Verifies a Snapshot message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Snapshot message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Snapshot
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.Snapshot;

                    /**
                     * Creates a plain object from a Snapshot message. Also converts values to other types if specified.
                     * @param message Snapshot
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.Snapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Snapshot to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Snapshot
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Snapshot {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 3,
                        DELETING = 4
                    }
                }

                /** Properties of a CreateSnapshotRequest. */
                interface ICreateSnapshotRequest {

                    /** CreateSnapshotRequest parent */
                    parent?: (string|null);

                    /** CreateSnapshotRequest snapshotId */
                    snapshotId?: (string|null);

                    /** CreateSnapshotRequest snapshot */
                    snapshot?: (google.cloud.filestore.v1beta1.ISnapshot|null);
                }

                /** Represents a CreateSnapshotRequest. */
                class CreateSnapshotRequest implements ICreateSnapshotRequest {

                    /**
                     * Constructs a new CreateSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.ICreateSnapshotRequest);

                    /** CreateSnapshotRequest parent. */
                    public parent: string;

                    /** CreateSnapshotRequest snapshotId. */
                    public snapshotId: string;

                    /** CreateSnapshotRequest snapshot. */
                    public snapshot?: (google.cloud.filestore.v1beta1.ISnapshot|null);

                    /**
                     * Creates a new CreateSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.ICreateSnapshotRequest): google.cloud.filestore.v1beta1.CreateSnapshotRequest;

                    /**
                     * Encodes the specified CreateSnapshotRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.CreateSnapshotRequest.verify|verify} messages.
                     * @param message CreateSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.ICreateSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.CreateSnapshotRequest.verify|verify} messages.
                     * @param message CreateSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.ICreateSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.CreateSnapshotRequest;

                    /**
                     * Decodes a CreateSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.CreateSnapshotRequest;

                    /**
                     * Verifies a CreateSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.CreateSnapshotRequest;

                    /**
                     * Creates a plain object from a CreateSnapshotRequest message. Also converts values to other types if specified.
                     * @param message CreateSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.CreateSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetSnapshotRequest. */
                interface IGetSnapshotRequest {

                    /** GetSnapshotRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSnapshotRequest. */
                class GetSnapshotRequest implements IGetSnapshotRequest {

                    /**
                     * Constructs a new GetSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IGetSnapshotRequest);

                    /** GetSnapshotRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IGetSnapshotRequest): google.cloud.filestore.v1beta1.GetSnapshotRequest;

                    /**
                     * Encodes the specified GetSnapshotRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.GetSnapshotRequest.verify|verify} messages.
                     * @param message GetSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IGetSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.GetSnapshotRequest.verify|verify} messages.
                     * @param message GetSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IGetSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.GetSnapshotRequest;

                    /**
                     * Decodes a GetSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.GetSnapshotRequest;

                    /**
                     * Verifies a GetSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.GetSnapshotRequest;

                    /**
                     * Creates a plain object from a GetSnapshotRequest message. Also converts values to other types if specified.
                     * @param message GetSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.GetSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteSnapshotRequest. */
                interface IDeleteSnapshotRequest {

                    /** DeleteSnapshotRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteSnapshotRequest. */
                class DeleteSnapshotRequest implements IDeleteSnapshotRequest {

                    /**
                     * Constructs a new DeleteSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IDeleteSnapshotRequest);

                    /** DeleteSnapshotRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IDeleteSnapshotRequest): google.cloud.filestore.v1beta1.DeleteSnapshotRequest;

                    /**
                     * Encodes the specified DeleteSnapshotRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.DeleteSnapshotRequest.verify|verify} messages.
                     * @param message DeleteSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IDeleteSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.DeleteSnapshotRequest.verify|verify} messages.
                     * @param message DeleteSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IDeleteSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.DeleteSnapshotRequest;

                    /**
                     * Decodes a DeleteSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.DeleteSnapshotRequest;

                    /**
                     * Verifies a DeleteSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.DeleteSnapshotRequest;

                    /**
                     * Creates a plain object from a DeleteSnapshotRequest message. Also converts values to other types if specified.
                     * @param message DeleteSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.DeleteSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateSnapshotRequest. */
                interface IUpdateSnapshotRequest {

                    /** UpdateSnapshotRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSnapshotRequest snapshot */
                    snapshot?: (google.cloud.filestore.v1beta1.ISnapshot|null);
                }

                /** Represents an UpdateSnapshotRequest. */
                class UpdateSnapshotRequest implements IUpdateSnapshotRequest {

                    /**
                     * Constructs a new UpdateSnapshotRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IUpdateSnapshotRequest);

                    /** UpdateSnapshotRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSnapshotRequest snapshot. */
                    public snapshot?: (google.cloud.filestore.v1beta1.ISnapshot|null);

                    /**
                     * Creates a new UpdateSnapshotRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSnapshotRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IUpdateSnapshotRequest): google.cloud.filestore.v1beta1.UpdateSnapshotRequest;

                    /**
                     * Encodes the specified UpdateSnapshotRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.UpdateSnapshotRequest.verify|verify} messages.
                     * @param message UpdateSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IUpdateSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSnapshotRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.UpdateSnapshotRequest.verify|verify} messages.
                     * @param message UpdateSnapshotRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IUpdateSnapshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSnapshotRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.UpdateSnapshotRequest;

                    /**
                     * Decodes an UpdateSnapshotRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSnapshotRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.UpdateSnapshotRequest;

                    /**
                     * Verifies an UpdateSnapshotRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSnapshotRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSnapshotRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.UpdateSnapshotRequest;

                    /**
                     * Creates a plain object from an UpdateSnapshotRequest message. Also converts values to other types if specified.
                     * @param message UpdateSnapshotRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.UpdateSnapshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSnapshotRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateSnapshotRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSnapshotsRequest. */
                interface IListSnapshotsRequest {

                    /** ListSnapshotsRequest parent */
                    parent?: (string|null);

                    /** ListSnapshotsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSnapshotsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSnapshotsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListSnapshotsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListSnapshotsRequest. */
                class ListSnapshotsRequest implements IListSnapshotsRequest {

                    /**
                     * Constructs a new ListSnapshotsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IListSnapshotsRequest);

                    /** ListSnapshotsRequest parent. */
                    public parent: string;

                    /** ListSnapshotsRequest pageSize. */
                    public pageSize: number;

                    /** ListSnapshotsRequest pageToken. */
                    public pageToken: string;

                    /** ListSnapshotsRequest orderBy. */
                    public orderBy: string;

                    /** ListSnapshotsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListSnapshotsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSnapshotsRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IListSnapshotsRequest): google.cloud.filestore.v1beta1.ListSnapshotsRequest;

                    /**
                     * Encodes the specified ListSnapshotsRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.ListSnapshotsRequest.verify|verify} messages.
                     * @param message ListSnapshotsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IListSnapshotsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSnapshotsRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.ListSnapshotsRequest.verify|verify} messages.
                     * @param message ListSnapshotsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IListSnapshotsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSnapshotsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSnapshotsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.ListSnapshotsRequest;

                    /**
                     * Decodes a ListSnapshotsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSnapshotsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.ListSnapshotsRequest;

                    /**
                     * Verifies a ListSnapshotsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSnapshotsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSnapshotsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.ListSnapshotsRequest;

                    /**
                     * Creates a plain object from a ListSnapshotsRequest message. Also converts values to other types if specified.
                     * @param message ListSnapshotsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.ListSnapshotsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSnapshotsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSnapshotsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSnapshotsResponse. */
                interface IListSnapshotsResponse {

                    /** ListSnapshotsResponse snapshots */
                    snapshots?: (google.cloud.filestore.v1beta1.ISnapshot[]|null);

                    /** ListSnapshotsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSnapshotsResponse. */
                class ListSnapshotsResponse implements IListSnapshotsResponse {

                    /**
                     * Constructs a new ListSnapshotsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IListSnapshotsResponse);

                    /** ListSnapshotsResponse snapshots. */
                    public snapshots: google.cloud.filestore.v1beta1.ISnapshot[];

                    /** ListSnapshotsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSnapshotsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSnapshotsResponse instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IListSnapshotsResponse): google.cloud.filestore.v1beta1.ListSnapshotsResponse;

                    /**
                     * Encodes the specified ListSnapshotsResponse message. Does not implicitly {@link google.cloud.filestore.v1beta1.ListSnapshotsResponse.verify|verify} messages.
                     * @param message ListSnapshotsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IListSnapshotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSnapshotsResponse message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.ListSnapshotsResponse.verify|verify} messages.
                     * @param message ListSnapshotsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IListSnapshotsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSnapshotsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSnapshotsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.ListSnapshotsResponse;

                    /**
                     * Decodes a ListSnapshotsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSnapshotsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.ListSnapshotsResponse;

                    /**
                     * Verifies a ListSnapshotsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSnapshotsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSnapshotsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.ListSnapshotsResponse;

                    /**
                     * Creates a plain object from a ListSnapshotsResponse message. Also converts values to other types if specified.
                     * @param message ListSnapshotsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.ListSnapshotsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSnapshotsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSnapshotsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Backup. */
                interface IBackup {

                    /** Backup name */
                    name?: (string|null);

                    /** Backup description */
                    description?: (string|null);

                    /** Backup state */
                    state?: (google.cloud.filestore.v1beta1.Backup.State|keyof typeof google.cloud.filestore.v1beta1.Backup.State|null);

                    /** Backup createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Backup capacityGb */
                    capacityGb?: (number|Long|string|null);

                    /** Backup storageBytes */
                    storageBytes?: (number|Long|string|null);

                    /** Backup sourceInstance */
                    sourceInstance?: (string|null);

                    /** Backup sourceFileShare */
                    sourceFileShare?: (string|null);

                    /** Backup sourceInstanceTier */
                    sourceInstanceTier?: (google.cloud.filestore.v1beta1.Instance.Tier|keyof typeof google.cloud.filestore.v1beta1.Instance.Tier|null);

                    /** Backup downloadBytes */
                    downloadBytes?: (number|Long|string|null);

                    /** Backup satisfiesPzs */
                    satisfiesPzs?: (google.protobuf.IBoolValue|null);

                    /** Backup kmsKeyName */
                    kmsKeyName?: (string|null);
                }

                /** Represents a Backup. */
                class Backup implements IBackup {

                    /**
                     * Constructs a new Backup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IBackup);

                    /** Backup name. */
                    public name: string;

                    /** Backup description. */
                    public description: string;

                    /** Backup state. */
                    public state: (google.cloud.filestore.v1beta1.Backup.State|keyof typeof google.cloud.filestore.v1beta1.Backup.State);

                    /** Backup createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup labels. */
                    public labels: { [k: string]: string };

                    /** Backup capacityGb. */
                    public capacityGb: (number|Long|string);

                    /** Backup storageBytes. */
                    public storageBytes: (number|Long|string);

                    /** Backup sourceInstance. */
                    public sourceInstance: string;

                    /** Backup sourceFileShare. */
                    public sourceFileShare: string;

                    /** Backup sourceInstanceTier. */
                    public sourceInstanceTier: (google.cloud.filestore.v1beta1.Instance.Tier|keyof typeof google.cloud.filestore.v1beta1.Instance.Tier);

                    /** Backup downloadBytes. */
                    public downloadBytes: (number|Long|string);

                    /** Backup satisfiesPzs. */
                    public satisfiesPzs?: (google.protobuf.IBoolValue|null);

                    /** Backup kmsKeyName. */
                    public kmsKeyName: string;

                    /**
                     * Creates a new Backup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Backup instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IBackup): google.cloud.filestore.v1beta1.Backup;

                    /**
                     * Encodes the specified Backup message. Does not implicitly {@link google.cloud.filestore.v1beta1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Backup message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Backup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.Backup;

                    /**
                     * Decodes a Backup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.Backup;

                    /**
                     * Verifies a Backup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Backup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Backup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.Backup;

                    /**
                     * Creates a plain object from a Backup message. Also converts values to other types if specified.
                     * @param message Backup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Backup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Backup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Backup {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        FINALIZING = 2,
                        READY = 3,
                        DELETING = 4
                    }
                }

                /** Properties of a CreateBackupRequest. */
                interface ICreateBackupRequest {

                    /** CreateBackupRequest parent */
                    parent?: (string|null);

                    /** CreateBackupRequest backup */
                    backup?: (google.cloud.filestore.v1beta1.IBackup|null);

                    /** CreateBackupRequest backupId */
                    backupId?: (string|null);
                }

                /** Represents a CreateBackupRequest. */
                class CreateBackupRequest implements ICreateBackupRequest {

                    /**
                     * Constructs a new CreateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.ICreateBackupRequest);

                    /** CreateBackupRequest parent. */
                    public parent: string;

                    /** CreateBackupRequest backup. */
                    public backup?: (google.cloud.filestore.v1beta1.IBackup|null);

                    /** CreateBackupRequest backupId. */
                    public backupId: string;

                    /**
                     * Creates a new CreateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.ICreateBackupRequest): google.cloud.filestore.v1beta1.CreateBackupRequest;

                    /**
                     * Encodes the specified CreateBackupRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.CreateBackupRequest;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.CreateBackupRequest;

                    /**
                     * Verifies a CreateBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.CreateBackupRequest;

                    /**
                     * Creates a plain object from a CreateBackupRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.CreateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteBackupRequest. */
                interface IDeleteBackupRequest {

                    /** DeleteBackupRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteBackupRequest. */
                class DeleteBackupRequest implements IDeleteBackupRequest {

                    /**
                     * Constructs a new DeleteBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IDeleteBackupRequest);

                    /** DeleteBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IDeleteBackupRequest): google.cloud.filestore.v1beta1.DeleteBackupRequest;

                    /**
                     * Encodes the specified DeleteBackupRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.DeleteBackupRequest;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.DeleteBackupRequest;

                    /**
                     * Verifies a DeleteBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.DeleteBackupRequest;

                    /**
                     * Creates a plain object from a DeleteBackupRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.DeleteBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateBackupRequest. */
                interface IUpdateBackupRequest {

                    /** UpdateBackupRequest backup */
                    backup?: (google.cloud.filestore.v1beta1.IBackup|null);

                    /** UpdateBackupRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateBackupRequest. */
                class UpdateBackupRequest implements IUpdateBackupRequest {

                    /**
                     * Constructs a new UpdateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IUpdateBackupRequest);

                    /** UpdateBackupRequest backup. */
                    public backup?: (google.cloud.filestore.v1beta1.IBackup|null);

                    /** UpdateBackupRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IUpdateBackupRequest): google.cloud.filestore.v1beta1.UpdateBackupRequest;

                    /**
                     * Encodes the specified UpdateBackupRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.UpdateBackupRequest.verify|verify} messages.
                     * @param message UpdateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IUpdateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.UpdateBackupRequest.verify|verify} messages.
                     * @param message UpdateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IUpdateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.UpdateBackupRequest;

                    /**
                     * Decodes an UpdateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.UpdateBackupRequest;

                    /**
                     * Verifies an UpdateBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.UpdateBackupRequest;

                    /**
                     * Creates a plain object from an UpdateBackupRequest message. Also converts values to other types if specified.
                     * @param message UpdateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.UpdateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetBackupRequest. */
                interface IGetBackupRequest {

                    /** GetBackupRequest name */
                    name?: (string|null);
                }

                /** Represents a GetBackupRequest. */
                class GetBackupRequest implements IGetBackupRequest {

                    /**
                     * Constructs a new GetBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IGetBackupRequest);

                    /** GetBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IGetBackupRequest): google.cloud.filestore.v1beta1.GetBackupRequest;

                    /**
                     * Encodes the specified GetBackupRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.GetBackupRequest;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.GetBackupRequest;

                    /**
                     * Verifies a GetBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.GetBackupRequest;

                    /**
                     * Creates a plain object from a GetBackupRequest message. Also converts values to other types if specified.
                     * @param message GetBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.GetBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupsRequest. */
                interface IListBackupsRequest {

                    /** ListBackupsRequest parent */
                    parent?: (string|null);

                    /** ListBackupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBackupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBackupsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListBackupsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListBackupsRequest. */
                class ListBackupsRequest implements IListBackupsRequest {

                    /**
                     * Constructs a new ListBackupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IListBackupsRequest);

                    /** ListBackupsRequest parent. */
                    public parent: string;

                    /** ListBackupsRequest pageSize. */
                    public pageSize: number;

                    /** ListBackupsRequest pageToken. */
                    public pageToken: string;

                    /** ListBackupsRequest orderBy. */
                    public orderBy: string;

                    /** ListBackupsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListBackupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IListBackupsRequest): google.cloud.filestore.v1beta1.ListBackupsRequest;

                    /**
                     * Encodes the specified ListBackupsRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.ListBackupsRequest;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.ListBackupsRequest;

                    /**
                     * Verifies a ListBackupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.ListBackupsRequest;

                    /**
                     * Creates a plain object from a ListBackupsRequest message. Also converts values to other types if specified.
                     * @param message ListBackupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.ListBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupsResponse. */
                interface IListBackupsResponse {

                    /** ListBackupsResponse backups */
                    backups?: (google.cloud.filestore.v1beta1.IBackup[]|null);

                    /** ListBackupsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListBackupsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListBackupsResponse. */
                class ListBackupsResponse implements IListBackupsResponse {

                    /**
                     * Constructs a new ListBackupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IListBackupsResponse);

                    /** ListBackupsResponse backups. */
                    public backups: google.cloud.filestore.v1beta1.IBackup[];

                    /** ListBackupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListBackupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBackupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsResponse instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IListBackupsResponse): google.cloud.filestore.v1beta1.ListBackupsResponse;

                    /**
                     * Encodes the specified ListBackupsResponse message. Does not implicitly {@link google.cloud.filestore.v1beta1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsResponse message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.ListBackupsResponse;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.ListBackupsResponse;

                    /**
                     * Verifies a ListBackupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.ListBackupsResponse;

                    /**
                     * Creates a plain object from a ListBackupsResponse message. Also converts values to other types if specified.
                     * @param message ListBackupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.ListBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Share. */
                interface IShare {

                    /** Share name */
                    name?: (string|null);

                    /** Share mountName */
                    mountName?: (string|null);

                    /** Share description */
                    description?: (string|null);

                    /** Share capacityGb */
                    capacityGb?: (number|Long|string|null);

                    /** Share nfsExportOptions */
                    nfsExportOptions?: (google.cloud.filestore.v1beta1.INfsExportOptions[]|null);

                    /** Share state */
                    state?: (google.cloud.filestore.v1beta1.Share.State|keyof typeof google.cloud.filestore.v1beta1.Share.State|null);

                    /** Share createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Share labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents a Share. */
                class Share implements IShare {

                    /**
                     * Constructs a new Share.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IShare);

                    /** Share name. */
                    public name: string;

                    /** Share mountName. */
                    public mountName: string;

                    /** Share description. */
                    public description: string;

                    /** Share capacityGb. */
                    public capacityGb: (number|Long|string);

                    /** Share nfsExportOptions. */
                    public nfsExportOptions: google.cloud.filestore.v1beta1.INfsExportOptions[];

                    /** Share state. */
                    public state: (google.cloud.filestore.v1beta1.Share.State|keyof typeof google.cloud.filestore.v1beta1.Share.State);

                    /** Share createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Share labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new Share instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Share instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IShare): google.cloud.filestore.v1beta1.Share;

                    /**
                     * Encodes the specified Share message. Does not implicitly {@link google.cloud.filestore.v1beta1.Share.verify|verify} messages.
                     * @param message Share message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IShare, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Share message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.Share.verify|verify} messages.
                     * @param message Share message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IShare, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Share message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Share
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.Share;

                    /**
                     * Decodes a Share message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Share
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.Share;

                    /**
                     * Verifies a Share message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Share message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Share
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.Share;

                    /**
                     * Creates a plain object from a Share message. Also converts values to other types if specified.
                     * @param message Share
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.Share, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Share to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Share
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Share {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 3,
                        DELETING = 4
                    }
                }

                /** Properties of a CreateShareRequest. */
                interface ICreateShareRequest {

                    /** CreateShareRequest parent */
                    parent?: (string|null);

                    /** CreateShareRequest shareId */
                    shareId?: (string|null);

                    /** CreateShareRequest share */
                    share?: (google.cloud.filestore.v1beta1.IShare|null);
                }

                /** Represents a CreateShareRequest. */
                class CreateShareRequest implements ICreateShareRequest {

                    /**
                     * Constructs a new CreateShareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.ICreateShareRequest);

                    /** CreateShareRequest parent. */
                    public parent: string;

                    /** CreateShareRequest shareId. */
                    public shareId: string;

                    /** CreateShareRequest share. */
                    public share?: (google.cloud.filestore.v1beta1.IShare|null);

                    /**
                     * Creates a new CreateShareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateShareRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.ICreateShareRequest): google.cloud.filestore.v1beta1.CreateShareRequest;

                    /**
                     * Encodes the specified CreateShareRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.CreateShareRequest.verify|verify} messages.
                     * @param message CreateShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.ICreateShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateShareRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.CreateShareRequest.verify|verify} messages.
                     * @param message CreateShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.ICreateShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateShareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.CreateShareRequest;

                    /**
                     * Decodes a CreateShareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.CreateShareRequest;

                    /**
                     * Verifies a CreateShareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateShareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateShareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.CreateShareRequest;

                    /**
                     * Creates a plain object from a CreateShareRequest message. Also converts values to other types if specified.
                     * @param message CreateShareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.CreateShareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateShareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateShareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetShareRequest. */
                interface IGetShareRequest {

                    /** GetShareRequest name */
                    name?: (string|null);
                }

                /** Represents a GetShareRequest. */
                class GetShareRequest implements IGetShareRequest {

                    /**
                     * Constructs a new GetShareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IGetShareRequest);

                    /** GetShareRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetShareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetShareRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IGetShareRequest): google.cloud.filestore.v1beta1.GetShareRequest;

                    /**
                     * Encodes the specified GetShareRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.GetShareRequest.verify|verify} messages.
                     * @param message GetShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IGetShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetShareRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.GetShareRequest.verify|verify} messages.
                     * @param message GetShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IGetShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetShareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.GetShareRequest;

                    /**
                     * Decodes a GetShareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.GetShareRequest;

                    /**
                     * Verifies a GetShareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetShareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetShareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.GetShareRequest;

                    /**
                     * Creates a plain object from a GetShareRequest message. Also converts values to other types if specified.
                     * @param message GetShareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.GetShareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetShareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetShareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteShareRequest. */
                interface IDeleteShareRequest {

                    /** DeleteShareRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteShareRequest. */
                class DeleteShareRequest implements IDeleteShareRequest {

                    /**
                     * Constructs a new DeleteShareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IDeleteShareRequest);

                    /** DeleteShareRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteShareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteShareRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IDeleteShareRequest): google.cloud.filestore.v1beta1.DeleteShareRequest;

                    /**
                     * Encodes the specified DeleteShareRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.DeleteShareRequest.verify|verify} messages.
                     * @param message DeleteShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IDeleteShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteShareRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.DeleteShareRequest.verify|verify} messages.
                     * @param message DeleteShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IDeleteShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteShareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.DeleteShareRequest;

                    /**
                     * Decodes a DeleteShareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.DeleteShareRequest;

                    /**
                     * Verifies a DeleteShareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteShareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteShareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.DeleteShareRequest;

                    /**
                     * Creates a plain object from a DeleteShareRequest message. Also converts values to other types if specified.
                     * @param message DeleteShareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.DeleteShareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteShareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteShareRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSharesRequest. */
                interface IListSharesRequest {

                    /** ListSharesRequest parent */
                    parent?: (string|null);

                    /** ListSharesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSharesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSharesRequest orderBy */
                    orderBy?: (string|null);

                    /** ListSharesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListSharesRequest. */
                class ListSharesRequest implements IListSharesRequest {

                    /**
                     * Constructs a new ListSharesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IListSharesRequest);

                    /** ListSharesRequest parent. */
                    public parent: string;

                    /** ListSharesRequest pageSize. */
                    public pageSize: number;

                    /** ListSharesRequest pageToken. */
                    public pageToken: string;

                    /** ListSharesRequest orderBy. */
                    public orderBy: string;

                    /** ListSharesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListSharesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSharesRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IListSharesRequest): google.cloud.filestore.v1beta1.ListSharesRequest;

                    /**
                     * Encodes the specified ListSharesRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.ListSharesRequest.verify|verify} messages.
                     * @param message ListSharesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IListSharesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSharesRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.ListSharesRequest.verify|verify} messages.
                     * @param message ListSharesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IListSharesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSharesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSharesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.ListSharesRequest;

                    /**
                     * Decodes a ListSharesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSharesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.ListSharesRequest;

                    /**
                     * Verifies a ListSharesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSharesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSharesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.ListSharesRequest;

                    /**
                     * Creates a plain object from a ListSharesRequest message. Also converts values to other types if specified.
                     * @param message ListSharesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.ListSharesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSharesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSharesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListSharesResponse. */
                interface IListSharesResponse {

                    /** ListSharesResponse shares */
                    shares?: (google.cloud.filestore.v1beta1.IShare[]|null);

                    /** ListSharesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListSharesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListSharesResponse. */
                class ListSharesResponse implements IListSharesResponse {

                    /**
                     * Constructs a new ListSharesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IListSharesResponse);

                    /** ListSharesResponse shares. */
                    public shares: google.cloud.filestore.v1beta1.IShare[];

                    /** ListSharesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListSharesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListSharesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSharesResponse instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IListSharesResponse): google.cloud.filestore.v1beta1.ListSharesResponse;

                    /**
                     * Encodes the specified ListSharesResponse message. Does not implicitly {@link google.cloud.filestore.v1beta1.ListSharesResponse.verify|verify} messages.
                     * @param message ListSharesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IListSharesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSharesResponse message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.ListSharesResponse.verify|verify} messages.
                     * @param message ListSharesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IListSharesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSharesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSharesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.ListSharesResponse;

                    /**
                     * Decodes a ListSharesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSharesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.ListSharesResponse;

                    /**
                     * Verifies a ListSharesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSharesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSharesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.ListSharesResponse;

                    /**
                     * Creates a plain object from a ListSharesResponse message. Also converts values to other types if specified.
                     * @param message ListSharesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.ListSharesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSharesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListSharesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateShareRequest. */
                interface IUpdateShareRequest {

                    /** UpdateShareRequest share */
                    share?: (google.cloud.filestore.v1beta1.IShare|null);

                    /** UpdateShareRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateShareRequest. */
                class UpdateShareRequest implements IUpdateShareRequest {

                    /**
                     * Constructs a new UpdateShareRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.filestore.v1beta1.IUpdateShareRequest);

                    /** UpdateShareRequest share. */
                    public share?: (google.cloud.filestore.v1beta1.IShare|null);

                    /** UpdateShareRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateShareRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateShareRequest instance
                     */
                    public static create(properties?: google.cloud.filestore.v1beta1.IUpdateShareRequest): google.cloud.filestore.v1beta1.UpdateShareRequest;

                    /**
                     * Encodes the specified UpdateShareRequest message. Does not implicitly {@link google.cloud.filestore.v1beta1.UpdateShareRequest.verify|verify} messages.
                     * @param message UpdateShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.filestore.v1beta1.IUpdateShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateShareRequest message, length delimited. Does not implicitly {@link google.cloud.filestore.v1beta1.UpdateShareRequest.verify|verify} messages.
                     * @param message UpdateShareRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.filestore.v1beta1.IUpdateShareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateShareRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.filestore.v1beta1.UpdateShareRequest;

                    /**
                     * Decodes an UpdateShareRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateShareRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.filestore.v1beta1.UpdateShareRequest;

                    /**
                     * Verifies an UpdateShareRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateShareRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateShareRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.filestore.v1beta1.UpdateShareRequest;

                    /**
                     * Creates a plain object from an UpdateShareRequest message. Also converts values to other types if specified.
                     * @param message UpdateShareRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.filestore.v1beta1.UpdateShareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateShareRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateShareRequest
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
            NON_EMPTY_DEFAULT = 7
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
            edition?: (string|null);
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
            public edition: string;

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

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|string|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long|string);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|string|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
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
