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

        /** Namespace metastore. */
        namespace metastore {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a DataprocMetastore */
                class DataprocMetastore extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DataprocMetastore service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DataprocMetastore service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DataprocMetastore;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServicesResponse
                     */
                    public listServices(request: google.cloud.metastore.v1.IListServicesRequest, callback: google.cloud.metastore.v1.DataprocMetastore.ListServicesCallback): void;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @returns Promise
                     */
                    public listServices(request: google.cloud.metastore.v1.IListServicesRequest): Promise<google.cloud.metastore.v1.ListServicesResponse>;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Service
                     */
                    public getService(request: google.cloud.metastore.v1.IGetServiceRequest, callback: google.cloud.metastore.v1.DataprocMetastore.GetServiceCallback): void;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @returns Promise
                     */
                    public getService(request: google.cloud.metastore.v1.IGetServiceRequest): Promise<google.cloud.metastore.v1.Service>;

                    /**
                     * Calls CreateService.
                     * @param request CreateServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createService(request: google.cloud.metastore.v1.ICreateServiceRequest, callback: google.cloud.metastore.v1.DataprocMetastore.CreateServiceCallback): void;

                    /**
                     * Calls CreateService.
                     * @param request CreateServiceRequest message or plain object
                     * @returns Promise
                     */
                    public createService(request: google.cloud.metastore.v1.ICreateServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateService.
                     * @param request UpdateServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateService(request: google.cloud.metastore.v1.IUpdateServiceRequest, callback: google.cloud.metastore.v1.DataprocMetastore.UpdateServiceCallback): void;

                    /**
                     * Calls UpdateService.
                     * @param request UpdateServiceRequest message or plain object
                     * @returns Promise
                     */
                    public updateService(request: google.cloud.metastore.v1.IUpdateServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteService.
                     * @param request DeleteServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteService(request: google.cloud.metastore.v1.IDeleteServiceRequest, callback: google.cloud.metastore.v1.DataprocMetastore.DeleteServiceCallback): void;

                    /**
                     * Calls DeleteService.
                     * @param request DeleteServiceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteService(request: google.cloud.metastore.v1.IDeleteServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListMetadataImports.
                     * @param request ListMetadataImportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListMetadataImportsResponse
                     */
                    public listMetadataImports(request: google.cloud.metastore.v1.IListMetadataImportsRequest, callback: google.cloud.metastore.v1.DataprocMetastore.ListMetadataImportsCallback): void;

                    /**
                     * Calls ListMetadataImports.
                     * @param request ListMetadataImportsRequest message or plain object
                     * @returns Promise
                     */
                    public listMetadataImports(request: google.cloud.metastore.v1.IListMetadataImportsRequest): Promise<google.cloud.metastore.v1.ListMetadataImportsResponse>;

                    /**
                     * Calls GetMetadataImport.
                     * @param request GetMetadataImportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MetadataImport
                     */
                    public getMetadataImport(request: google.cloud.metastore.v1.IGetMetadataImportRequest, callback: google.cloud.metastore.v1.DataprocMetastore.GetMetadataImportCallback): void;

                    /**
                     * Calls GetMetadataImport.
                     * @param request GetMetadataImportRequest message or plain object
                     * @returns Promise
                     */
                    public getMetadataImport(request: google.cloud.metastore.v1.IGetMetadataImportRequest): Promise<google.cloud.metastore.v1.MetadataImport>;

                    /**
                     * Calls CreateMetadataImport.
                     * @param request CreateMetadataImportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createMetadataImport(request: google.cloud.metastore.v1.ICreateMetadataImportRequest, callback: google.cloud.metastore.v1.DataprocMetastore.CreateMetadataImportCallback): void;

                    /**
                     * Calls CreateMetadataImport.
                     * @param request CreateMetadataImportRequest message or plain object
                     * @returns Promise
                     */
                    public createMetadataImport(request: google.cloud.metastore.v1.ICreateMetadataImportRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateMetadataImport.
                     * @param request UpdateMetadataImportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateMetadataImport(request: google.cloud.metastore.v1.IUpdateMetadataImportRequest, callback: google.cloud.metastore.v1.DataprocMetastore.UpdateMetadataImportCallback): void;

                    /**
                     * Calls UpdateMetadataImport.
                     * @param request UpdateMetadataImportRequest message or plain object
                     * @returns Promise
                     */
                    public updateMetadataImport(request: google.cloud.metastore.v1.IUpdateMetadataImportRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportMetadata.
                     * @param request ExportMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportMetadata(request: google.cloud.metastore.v1.IExportMetadataRequest, callback: google.cloud.metastore.v1.DataprocMetastore.ExportMetadataCallback): void;

                    /**
                     * Calls ExportMetadata.
                     * @param request ExportMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public exportMetadata(request: google.cloud.metastore.v1.IExportMetadataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RestoreService.
                     * @param request RestoreServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restoreService(request: google.cloud.metastore.v1.IRestoreServiceRequest, callback: google.cloud.metastore.v1.DataprocMetastore.RestoreServiceCallback): void;

                    /**
                     * Calls RestoreService.
                     * @param request RestoreServiceRequest message or plain object
                     * @returns Promise
                     */
                    public restoreService(request: google.cloud.metastore.v1.IRestoreServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupsResponse
                     */
                    public listBackups(request: google.cloud.metastore.v1.IListBackupsRequest, callback: google.cloud.metastore.v1.DataprocMetastore.ListBackupsCallback): void;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @returns Promise
                     */
                    public listBackups(request: google.cloud.metastore.v1.IListBackupsRequest): Promise<google.cloud.metastore.v1.ListBackupsResponse>;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Backup
                     */
                    public getBackup(request: google.cloud.metastore.v1.IGetBackupRequest, callback: google.cloud.metastore.v1.DataprocMetastore.GetBackupCallback): void;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @returns Promise
                     */
                    public getBackup(request: google.cloud.metastore.v1.IGetBackupRequest): Promise<google.cloud.metastore.v1.Backup>;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBackup(request: google.cloud.metastore.v1.ICreateBackupRequest, callback: google.cloud.metastore.v1.DataprocMetastore.CreateBackupCallback): void;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public createBackup(request: google.cloud.metastore.v1.ICreateBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBackup(request: google.cloud.metastore.v1.IDeleteBackupRequest, callback: google.cloud.metastore.v1.DataprocMetastore.DeleteBackupCallback): void;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackup(request: google.cloud.metastore.v1.IDeleteBackupRequest): Promise<google.longrunning.Operation>;
                }

                namespace DataprocMetastore {

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#listServices}.
                     * @param error Error, if any
                     * @param [response] ListServicesResponse
                     */
                    type ListServicesCallback = (error: (Error|null), response?: google.cloud.metastore.v1.ListServicesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#getService}.
                     * @param error Error, if any
                     * @param [response] Service
                     */
                    type GetServiceCallback = (error: (Error|null), response?: google.cloud.metastore.v1.Service) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#createService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#updateService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#deleteService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#listMetadataImports}.
                     * @param error Error, if any
                     * @param [response] ListMetadataImportsResponse
                     */
                    type ListMetadataImportsCallback = (error: (Error|null), response?: google.cloud.metastore.v1.ListMetadataImportsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#getMetadataImport}.
                     * @param error Error, if any
                     * @param [response] MetadataImport
                     */
                    type GetMetadataImportCallback = (error: (Error|null), response?: google.cloud.metastore.v1.MetadataImport) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#createMetadataImport}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateMetadataImportCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#updateMetadataImport}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateMetadataImportCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#exportMetadata}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportMetadataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#restoreService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestoreServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#listBackups}.
                     * @param error Error, if any
                     * @param [response] ListBackupsResponse
                     */
                    type ListBackupsCallback = (error: (Error|null), response?: google.cloud.metastore.v1.ListBackupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#getBackup}.
                     * @param error Error, if any
                     * @param [response] Backup
                     */
                    type GetBackupCallback = (error: (Error|null), response?: google.cloud.metastore.v1.Backup) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#createBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1.DataprocMetastore#deleteBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a Service. */
                interface IService {

                    /** Service hiveMetastoreConfig */
                    hiveMetastoreConfig?: (google.cloud.metastore.v1.IHiveMetastoreConfig|null);

                    /** Service name */
                    name?: (string|null);

                    /** Service createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Service updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Service labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Service network */
                    network?: (string|null);

                    /** Service endpointUri */
                    endpointUri?: (string|null);

                    /** Service port */
                    port?: (number|null);

                    /** Service state */
                    state?: (google.cloud.metastore.v1.Service.State|keyof typeof google.cloud.metastore.v1.Service.State|null);

                    /** Service stateMessage */
                    stateMessage?: (string|null);

                    /** Service artifactGcsUri */
                    artifactGcsUri?: (string|null);

                    /** Service tier */
                    tier?: (google.cloud.metastore.v1.Service.Tier|keyof typeof google.cloud.metastore.v1.Service.Tier|null);

                    /** Service maintenanceWindow */
                    maintenanceWindow?: (google.cloud.metastore.v1.IMaintenanceWindow|null);

                    /** Service uid */
                    uid?: (string|null);

                    /** Service metadataManagementActivity */
                    metadataManagementActivity?: (google.cloud.metastore.v1.IMetadataManagementActivity|null);

                    /** Service releaseChannel */
                    releaseChannel?: (google.cloud.metastore.v1.Service.ReleaseChannel|keyof typeof google.cloud.metastore.v1.Service.ReleaseChannel|null);
                }

                /** Represents a Service. */
                class Service implements IService {

                    /**
                     * Constructs a new Service.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IService);

                    /** Service hiveMetastoreConfig. */
                    public hiveMetastoreConfig?: (google.cloud.metastore.v1.IHiveMetastoreConfig|null);

                    /** Service name. */
                    public name: string;

                    /** Service createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Service updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Service labels. */
                    public labels: { [k: string]: string };

                    /** Service network. */
                    public network: string;

                    /** Service endpointUri. */
                    public endpointUri: string;

                    /** Service port. */
                    public port: number;

                    /** Service state. */
                    public state: (google.cloud.metastore.v1.Service.State|keyof typeof google.cloud.metastore.v1.Service.State);

                    /** Service stateMessage. */
                    public stateMessage: string;

                    /** Service artifactGcsUri. */
                    public artifactGcsUri: string;

                    /** Service tier. */
                    public tier: (google.cloud.metastore.v1.Service.Tier|keyof typeof google.cloud.metastore.v1.Service.Tier);

                    /** Service maintenanceWindow. */
                    public maintenanceWindow?: (google.cloud.metastore.v1.IMaintenanceWindow|null);

                    /** Service uid. */
                    public uid: string;

                    /** Service metadataManagementActivity. */
                    public metadataManagementActivity?: (google.cloud.metastore.v1.IMetadataManagementActivity|null);

                    /** Service releaseChannel. */
                    public releaseChannel: (google.cloud.metastore.v1.Service.ReleaseChannel|keyof typeof google.cloud.metastore.v1.Service.ReleaseChannel);

                    /** Service metastoreConfig. */
                    public metastoreConfig?: "hiveMetastoreConfig";

                    /**
                     * Creates a new Service instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Service instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IService): google.cloud.metastore.v1.Service;

                    /**
                     * Encodes the specified Service message. Does not implicitly {@link google.cloud.metastore.v1.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Service message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Service message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.Service;

                    /**
                     * Decodes a Service message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.Service;

                    /**
                     * Verifies a Service message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Service message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Service
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.Service;

                    /**
                     * Creates a plain object from a Service message. Also converts values to other types if specified.
                     * @param message Service
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Service to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Service {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        SUSPENDING = 3,
                        SUSPENDED = 4,
                        UPDATING = 5,
                        DELETING = 6,
                        ERROR = 7
                    }

                    /** Tier enum. */
                    enum Tier {
                        TIER_UNSPECIFIED = 0,
                        DEVELOPER = 1,
                        ENTERPRISE = 3
                    }

                    /** ReleaseChannel enum. */
                    enum ReleaseChannel {
                        RELEASE_CHANNEL_UNSPECIFIED = 0,
                        CANARY = 1,
                        STABLE = 2
                    }
                }

                /** Properties of a MaintenanceWindow. */
                interface IMaintenanceWindow {

                    /** MaintenanceWindow hourOfDay */
                    hourOfDay?: (google.protobuf.IInt32Value|null);

                    /** MaintenanceWindow dayOfWeek */
                    dayOfWeek?: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek|null);
                }

                /** Represents a MaintenanceWindow. */
                class MaintenanceWindow implements IMaintenanceWindow {

                    /**
                     * Constructs a new MaintenanceWindow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IMaintenanceWindow);

                    /** MaintenanceWindow hourOfDay. */
                    public hourOfDay?: (google.protobuf.IInt32Value|null);

                    /** MaintenanceWindow dayOfWeek. */
                    public dayOfWeek: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek);

                    /**
                     * Creates a new MaintenanceWindow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaintenanceWindow instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IMaintenanceWindow): google.cloud.metastore.v1.MaintenanceWindow;

                    /**
                     * Encodes the specified MaintenanceWindow message. Does not implicitly {@link google.cloud.metastore.v1.MaintenanceWindow.verify|verify} messages.
                     * @param message MaintenanceWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaintenanceWindow message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.MaintenanceWindow.verify|verify} messages.
                     * @param message MaintenanceWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaintenanceWindow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaintenanceWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.MaintenanceWindow;

                    /**
                     * Decodes a MaintenanceWindow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaintenanceWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.MaintenanceWindow;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.MaintenanceWindow;

                    /**
                     * Creates a plain object from a MaintenanceWindow message. Also converts values to other types if specified.
                     * @param message MaintenanceWindow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.MaintenanceWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaintenanceWindow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HiveMetastoreConfig. */
                interface IHiveMetastoreConfig {

                    /** HiveMetastoreConfig version */
                    version?: (string|null);

                    /** HiveMetastoreConfig configOverrides */
                    configOverrides?: ({ [k: string]: string }|null);

                    /** HiveMetastoreConfig kerberosConfig */
                    kerberosConfig?: (google.cloud.metastore.v1.IKerberosConfig|null);
                }

                /** Represents a HiveMetastoreConfig. */
                class HiveMetastoreConfig implements IHiveMetastoreConfig {

                    /**
                     * Constructs a new HiveMetastoreConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IHiveMetastoreConfig);

                    /** HiveMetastoreConfig version. */
                    public version: string;

                    /** HiveMetastoreConfig configOverrides. */
                    public configOverrides: { [k: string]: string };

                    /** HiveMetastoreConfig kerberosConfig. */
                    public kerberosConfig?: (google.cloud.metastore.v1.IKerberosConfig|null);

                    /**
                     * Creates a new HiveMetastoreConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HiveMetastoreConfig instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IHiveMetastoreConfig): google.cloud.metastore.v1.HiveMetastoreConfig;

                    /**
                     * Encodes the specified HiveMetastoreConfig message. Does not implicitly {@link google.cloud.metastore.v1.HiveMetastoreConfig.verify|verify} messages.
                     * @param message HiveMetastoreConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IHiveMetastoreConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HiveMetastoreConfig message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.HiveMetastoreConfig.verify|verify} messages.
                     * @param message HiveMetastoreConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IHiveMetastoreConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HiveMetastoreConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HiveMetastoreConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.HiveMetastoreConfig;

                    /**
                     * Decodes a HiveMetastoreConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HiveMetastoreConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.HiveMetastoreConfig;

                    /**
                     * Verifies a HiveMetastoreConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HiveMetastoreConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HiveMetastoreConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.HiveMetastoreConfig;

                    /**
                     * Creates a plain object from a HiveMetastoreConfig message. Also converts values to other types if specified.
                     * @param message HiveMetastoreConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.HiveMetastoreConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HiveMetastoreConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a KerberosConfig. */
                interface IKerberosConfig {

                    /** KerberosConfig keytab */
                    keytab?: (google.cloud.metastore.v1.ISecret|null);

                    /** KerberosConfig principal */
                    principal?: (string|null);

                    /** KerberosConfig krb5ConfigGcsUri */
                    krb5ConfigGcsUri?: (string|null);
                }

                /** Represents a KerberosConfig. */
                class KerberosConfig implements IKerberosConfig {

                    /**
                     * Constructs a new KerberosConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IKerberosConfig);

                    /** KerberosConfig keytab. */
                    public keytab?: (google.cloud.metastore.v1.ISecret|null);

                    /** KerberosConfig principal. */
                    public principal: string;

                    /** KerberosConfig krb5ConfigGcsUri. */
                    public krb5ConfigGcsUri: string;

                    /**
                     * Creates a new KerberosConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KerberosConfig instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IKerberosConfig): google.cloud.metastore.v1.KerberosConfig;

                    /**
                     * Encodes the specified KerberosConfig message. Does not implicitly {@link google.cloud.metastore.v1.KerberosConfig.verify|verify} messages.
                     * @param message KerberosConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IKerberosConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KerberosConfig message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.KerberosConfig.verify|verify} messages.
                     * @param message KerberosConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IKerberosConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KerberosConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KerberosConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.KerberosConfig;

                    /**
                     * Decodes a KerberosConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KerberosConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.KerberosConfig;

                    /**
                     * Verifies a KerberosConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KerberosConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KerberosConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.KerberosConfig;

                    /**
                     * Creates a plain object from a KerberosConfig message. Also converts values to other types if specified.
                     * @param message KerberosConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.KerberosConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KerberosConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Secret. */
                interface ISecret {

                    /** Secret cloudSecret */
                    cloudSecret?: (string|null);
                }

                /** Represents a Secret. */
                class Secret implements ISecret {

                    /**
                     * Constructs a new Secret.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.ISecret);

                    /** Secret cloudSecret. */
                    public cloudSecret?: (string|null);

                    /** Secret value. */
                    public value?: "cloudSecret";

                    /**
                     * Creates a new Secret instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Secret instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.ISecret): google.cloud.metastore.v1.Secret;

                    /**
                     * Encodes the specified Secret message. Does not implicitly {@link google.cloud.metastore.v1.Secret.verify|verify} messages.
                     * @param message Secret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Secret message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.Secret.verify|verify} messages.
                     * @param message Secret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Secret message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Secret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.Secret;

                    /**
                     * Decodes a Secret message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Secret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.Secret;

                    /**
                     * Verifies a Secret message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Secret message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Secret
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.Secret;

                    /**
                     * Creates a plain object from a Secret message. Also converts values to other types if specified.
                     * @param message Secret
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.Secret, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Secret to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetadataManagementActivity. */
                interface IMetadataManagementActivity {

                    /** MetadataManagementActivity metadataExports */
                    metadataExports?: (google.cloud.metastore.v1.IMetadataExport[]|null);

                    /** MetadataManagementActivity restores */
                    restores?: (google.cloud.metastore.v1.IRestore[]|null);
                }

                /** Represents a MetadataManagementActivity. */
                class MetadataManagementActivity implements IMetadataManagementActivity {

                    /**
                     * Constructs a new MetadataManagementActivity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IMetadataManagementActivity);

                    /** MetadataManagementActivity metadataExports. */
                    public metadataExports: google.cloud.metastore.v1.IMetadataExport[];

                    /** MetadataManagementActivity restores. */
                    public restores: google.cloud.metastore.v1.IRestore[];

                    /**
                     * Creates a new MetadataManagementActivity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataManagementActivity instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IMetadataManagementActivity): google.cloud.metastore.v1.MetadataManagementActivity;

                    /**
                     * Encodes the specified MetadataManagementActivity message. Does not implicitly {@link google.cloud.metastore.v1.MetadataManagementActivity.verify|verify} messages.
                     * @param message MetadataManagementActivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IMetadataManagementActivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataManagementActivity message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.MetadataManagementActivity.verify|verify} messages.
                     * @param message MetadataManagementActivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IMetadataManagementActivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataManagementActivity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataManagementActivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.MetadataManagementActivity;

                    /**
                     * Decodes a MetadataManagementActivity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataManagementActivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.MetadataManagementActivity;

                    /**
                     * Verifies a MetadataManagementActivity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataManagementActivity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataManagementActivity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.MetadataManagementActivity;

                    /**
                     * Creates a plain object from a MetadataManagementActivity message. Also converts values to other types if specified.
                     * @param message MetadataManagementActivity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.MetadataManagementActivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataManagementActivity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetadataImport. */
                interface IMetadataImport {

                    /** MetadataImport databaseDump */
                    databaseDump?: (google.cloud.metastore.v1.MetadataImport.IDatabaseDump|null);

                    /** MetadataImport name */
                    name?: (string|null);

                    /** MetadataImport description */
                    description?: (string|null);

                    /** MetadataImport createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport state */
                    state?: (google.cloud.metastore.v1.MetadataImport.State|keyof typeof google.cloud.metastore.v1.MetadataImport.State|null);
                }

                /** Represents a MetadataImport. */
                class MetadataImport implements IMetadataImport {

                    /**
                     * Constructs a new MetadataImport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IMetadataImport);

                    /** MetadataImport databaseDump. */
                    public databaseDump?: (google.cloud.metastore.v1.MetadataImport.IDatabaseDump|null);

                    /** MetadataImport name. */
                    public name: string;

                    /** MetadataImport description. */
                    public description: string;

                    /** MetadataImport createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport state. */
                    public state: (google.cloud.metastore.v1.MetadataImport.State|keyof typeof google.cloud.metastore.v1.MetadataImport.State);

                    /** MetadataImport metadata. */
                    public metadata?: "databaseDump";

                    /**
                     * Creates a new MetadataImport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataImport instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IMetadataImport): google.cloud.metastore.v1.MetadataImport;

                    /**
                     * Encodes the specified MetadataImport message. Does not implicitly {@link google.cloud.metastore.v1.MetadataImport.verify|verify} messages.
                     * @param message MetadataImport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IMetadataImport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataImport message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.MetadataImport.verify|verify} messages.
                     * @param message MetadataImport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IMetadataImport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataImport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataImport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.MetadataImport;

                    /**
                     * Decodes a MetadataImport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataImport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.MetadataImport;

                    /**
                     * Verifies a MetadataImport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataImport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataImport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.MetadataImport;

                    /**
                     * Creates a plain object from a MetadataImport message. Also converts values to other types if specified.
                     * @param message MetadataImport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.MetadataImport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataImport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MetadataImport {

                    /** Properties of a DatabaseDump. */
                    interface IDatabaseDump {

                        /** DatabaseDump databaseType */
                        databaseType?: (google.cloud.metastore.v1.MetadataImport.DatabaseDump.DatabaseType|keyof typeof google.cloud.metastore.v1.MetadataImport.DatabaseDump.DatabaseType|null);

                        /** DatabaseDump gcsUri */
                        gcsUri?: (string|null);

                        /** DatabaseDump type */
                        type?: (google.cloud.metastore.v1.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1.DatabaseDumpSpec.Type|null);
                    }

                    /** Represents a DatabaseDump. */
                    class DatabaseDump implements IDatabaseDump {

                        /**
                         * Constructs a new DatabaseDump.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.metastore.v1.MetadataImport.IDatabaseDump);

                        /** DatabaseDump databaseType. */
                        public databaseType: (google.cloud.metastore.v1.MetadataImport.DatabaseDump.DatabaseType|keyof typeof google.cloud.metastore.v1.MetadataImport.DatabaseDump.DatabaseType);

                        /** DatabaseDump gcsUri. */
                        public gcsUri: string;

                        /** DatabaseDump type. */
                        public type: (google.cloud.metastore.v1.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1.DatabaseDumpSpec.Type);

                        /**
                         * Creates a new DatabaseDump instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DatabaseDump instance
                         */
                        public static create(properties?: google.cloud.metastore.v1.MetadataImport.IDatabaseDump): google.cloud.metastore.v1.MetadataImport.DatabaseDump;

                        /**
                         * Encodes the specified DatabaseDump message. Does not implicitly {@link google.cloud.metastore.v1.MetadataImport.DatabaseDump.verify|verify} messages.
                         * @param message DatabaseDump message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.metastore.v1.MetadataImport.IDatabaseDump, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DatabaseDump message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.MetadataImport.DatabaseDump.verify|verify} messages.
                         * @param message DatabaseDump message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.metastore.v1.MetadataImport.IDatabaseDump, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DatabaseDump message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DatabaseDump
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.MetadataImport.DatabaseDump;

                        /**
                         * Decodes a DatabaseDump message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DatabaseDump
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.MetadataImport.DatabaseDump;

                        /**
                         * Verifies a DatabaseDump message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DatabaseDump message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DatabaseDump
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.MetadataImport.DatabaseDump;

                        /**
                         * Creates a plain object from a DatabaseDump message. Also converts values to other types if specified.
                         * @param message DatabaseDump
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.metastore.v1.MetadataImport.DatabaseDump, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DatabaseDump to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DatabaseDump {

                        /** DatabaseType enum. */
                        enum DatabaseType {
                            DATABASE_TYPE_UNSPECIFIED = 0,
                            MYSQL = 1
                        }
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        UPDATING = 3,
                        FAILED = 4
                    }
                }

                /** Properties of a MetadataExport. */
                interface IMetadataExport {

                    /** MetadataExport destinationGcsUri */
                    destinationGcsUri?: (string|null);

                    /** MetadataExport startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport state */
                    state?: (google.cloud.metastore.v1.MetadataExport.State|keyof typeof google.cloud.metastore.v1.MetadataExport.State|null);

                    /** MetadataExport databaseDumpType */
                    databaseDumpType?: (google.cloud.metastore.v1.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1.DatabaseDumpSpec.Type|null);
                }

                /** Represents a MetadataExport. */
                class MetadataExport implements IMetadataExport {

                    /**
                     * Constructs a new MetadataExport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IMetadataExport);

                    /** MetadataExport destinationGcsUri. */
                    public destinationGcsUri?: (string|null);

                    /** MetadataExport startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport state. */
                    public state: (google.cloud.metastore.v1.MetadataExport.State|keyof typeof google.cloud.metastore.v1.MetadataExport.State);

                    /** MetadataExport databaseDumpType. */
                    public databaseDumpType: (google.cloud.metastore.v1.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1.DatabaseDumpSpec.Type);

                    /** MetadataExport destination. */
                    public destination?: "destinationGcsUri";

                    /**
                     * Creates a new MetadataExport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataExport instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IMetadataExport): google.cloud.metastore.v1.MetadataExport;

                    /**
                     * Encodes the specified MetadataExport message. Does not implicitly {@link google.cloud.metastore.v1.MetadataExport.verify|verify} messages.
                     * @param message MetadataExport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IMetadataExport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataExport message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.MetadataExport.verify|verify} messages.
                     * @param message MetadataExport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IMetadataExport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataExport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataExport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.MetadataExport;

                    /**
                     * Decodes a MetadataExport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataExport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.MetadataExport;

                    /**
                     * Verifies a MetadataExport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataExport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataExport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.MetadataExport;

                    /**
                     * Creates a plain object from a MetadataExport message. Also converts values to other types if specified.
                     * @param message MetadataExport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.MetadataExport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataExport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MetadataExport {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLED = 4
                    }
                }

                /** Properties of a Backup. */
                interface IBackup {

                    /** Backup name */
                    name?: (string|null);

                    /** Backup createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Backup state */
                    state?: (google.cloud.metastore.v1.Backup.State|keyof typeof google.cloud.metastore.v1.Backup.State|null);

                    /** Backup serviceRevision */
                    serviceRevision?: (google.cloud.metastore.v1.IService|null);

                    /** Backup description */
                    description?: (string|null);

                    /** Backup restoringServices */
                    restoringServices?: (string[]|null);
                }

                /** Represents a Backup. */
                class Backup implements IBackup {

                    /**
                     * Constructs a new Backup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IBackup);

                    /** Backup name. */
                    public name: string;

                    /** Backup createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Backup state. */
                    public state: (google.cloud.metastore.v1.Backup.State|keyof typeof google.cloud.metastore.v1.Backup.State);

                    /** Backup serviceRevision. */
                    public serviceRevision?: (google.cloud.metastore.v1.IService|null);

                    /** Backup description. */
                    public description: string;

                    /** Backup restoringServices. */
                    public restoringServices: string[];

                    /**
                     * Creates a new Backup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Backup instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IBackup): google.cloud.metastore.v1.Backup;

                    /**
                     * Encodes the specified Backup message. Does not implicitly {@link google.cloud.metastore.v1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Backup message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Backup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.Backup;

                    /**
                     * Decodes a Backup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.Backup;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.Backup;

                    /**
                     * Creates a plain object from a Backup message. Also converts values to other types if specified.
                     * @param message Backup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Backup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Backup {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        DELETING = 2,
                        ACTIVE = 3,
                        FAILED = 4,
                        RESTORING = 5
                    }
                }

                /** Properties of a Restore. */
                interface IRestore {

                    /** Restore startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Restore endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Restore state */
                    state?: (google.cloud.metastore.v1.Restore.State|keyof typeof google.cloud.metastore.v1.Restore.State|null);

                    /** Restore backup */
                    backup?: (string|null);

                    /** Restore type */
                    type?: (google.cloud.metastore.v1.Restore.RestoreType|keyof typeof google.cloud.metastore.v1.Restore.RestoreType|null);

                    /** Restore details */
                    details?: (string|null);
                }

                /** Represents a Restore. */
                class Restore implements IRestore {

                    /**
                     * Constructs a new Restore.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IRestore);

                    /** Restore startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Restore endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Restore state. */
                    public state: (google.cloud.metastore.v1.Restore.State|keyof typeof google.cloud.metastore.v1.Restore.State);

                    /** Restore backup. */
                    public backup: string;

                    /** Restore type. */
                    public type: (google.cloud.metastore.v1.Restore.RestoreType|keyof typeof google.cloud.metastore.v1.Restore.RestoreType);

                    /** Restore details. */
                    public details: string;

                    /**
                     * Creates a new Restore instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Restore instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IRestore): google.cloud.metastore.v1.Restore;

                    /**
                     * Encodes the specified Restore message. Does not implicitly {@link google.cloud.metastore.v1.Restore.verify|verify} messages.
                     * @param message Restore message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IRestore, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Restore message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.Restore.verify|verify} messages.
                     * @param message Restore message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IRestore, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Restore message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Restore
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.Restore;

                    /**
                     * Decodes a Restore message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Restore
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.Restore;

                    /**
                     * Verifies a Restore message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Restore message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Restore
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.Restore;

                    /**
                     * Creates a plain object from a Restore message. Also converts values to other types if specified.
                     * @param message Restore
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.Restore, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Restore to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Restore {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLED = 4
                    }

                    /** RestoreType enum. */
                    enum RestoreType {
                        RESTORE_TYPE_UNSPECIFIED = 0,
                        FULL = 1,
                        METADATA_ONLY = 2
                    }
                }

                /** Properties of a ListServicesRequest. */
                interface IListServicesRequest {

                    /** ListServicesRequest parent */
                    parent?: (string|null);

                    /** ListServicesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListServicesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListServicesRequest filter */
                    filter?: (string|null);

                    /** ListServicesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListServicesRequest. */
                class ListServicesRequest implements IListServicesRequest {

                    /**
                     * Constructs a new ListServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IListServicesRequest);

                    /** ListServicesRequest parent. */
                    public parent: string;

                    /** ListServicesRequest pageSize. */
                    public pageSize: number;

                    /** ListServicesRequest pageToken. */
                    public pageToken: string;

                    /** ListServicesRequest filter. */
                    public filter: string;

                    /** ListServicesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IListServicesRequest): google.cloud.metastore.v1.ListServicesRequest;

                    /**
                     * Encodes the specified ListServicesRequest message. Does not implicitly {@link google.cloud.metastore.v1.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.ListServicesRequest;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.ListServicesRequest;

                    /**
                     * Verifies a ListServicesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServicesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServicesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.ListServicesRequest;

                    /**
                     * Creates a plain object from a ListServicesRequest message. Also converts values to other types if specified.
                     * @param message ListServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.ListServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServicesResponse. */
                interface IListServicesResponse {

                    /** ListServicesResponse services */
                    services?: (google.cloud.metastore.v1.IService[]|null);

                    /** ListServicesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListServicesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListServicesResponse. */
                class ListServicesResponse implements IListServicesResponse {

                    /**
                     * Constructs a new ListServicesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IListServicesResponse);

                    /** ListServicesResponse services. */
                    public services: google.cloud.metastore.v1.IService[];

                    /** ListServicesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListServicesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListServicesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesResponse instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IListServicesResponse): google.cloud.metastore.v1.ListServicesResponse;

                    /**
                     * Encodes the specified ListServicesResponse message. Does not implicitly {@link google.cloud.metastore.v1.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesResponse message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.ListServicesResponse;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.ListServicesResponse;

                    /**
                     * Verifies a ListServicesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServicesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServicesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.ListServicesResponse;

                    /**
                     * Creates a plain object from a ListServicesResponse message. Also converts values to other types if specified.
                     * @param message ListServicesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.ListServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetServiceRequest. */
                interface IGetServiceRequest {

                    /** GetServiceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetServiceRequest. */
                class GetServiceRequest implements IGetServiceRequest {

                    /**
                     * Constructs a new GetServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IGetServiceRequest);

                    /** GetServiceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IGetServiceRequest): google.cloud.metastore.v1.GetServiceRequest;

                    /**
                     * Encodes the specified GetServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.GetServiceRequest;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.GetServiceRequest;

                    /**
                     * Verifies a GetServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.GetServiceRequest;

                    /**
                     * Creates a plain object from a GetServiceRequest message. Also converts values to other types if specified.
                     * @param message GetServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.GetServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateServiceRequest. */
                interface ICreateServiceRequest {

                    /** CreateServiceRequest parent */
                    parent?: (string|null);

                    /** CreateServiceRequest serviceId */
                    serviceId?: (string|null);

                    /** CreateServiceRequest service */
                    service?: (google.cloud.metastore.v1.IService|null);

                    /** CreateServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateServiceRequest. */
                class CreateServiceRequest implements ICreateServiceRequest {

                    /**
                     * Constructs a new CreateServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.ICreateServiceRequest);

                    /** CreateServiceRequest parent. */
                    public parent: string;

                    /** CreateServiceRequest serviceId. */
                    public serviceId: string;

                    /** CreateServiceRequest service. */
                    public service?: (google.cloud.metastore.v1.IService|null);

                    /** CreateServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.ICreateServiceRequest): google.cloud.metastore.v1.CreateServiceRequest;

                    /**
                     * Encodes the specified CreateServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1.CreateServiceRequest.verify|verify} messages.
                     * @param message CreateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.ICreateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.CreateServiceRequest.verify|verify} messages.
                     * @param message CreateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.ICreateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.CreateServiceRequest;

                    /**
                     * Decodes a CreateServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.CreateServiceRequest;

                    /**
                     * Verifies a CreateServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.CreateServiceRequest;

                    /**
                     * Creates a plain object from a CreateServiceRequest message. Also converts values to other types if specified.
                     * @param message CreateServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.CreateServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateServiceRequest. */
                interface IUpdateServiceRequest {

                    /** UpdateServiceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateServiceRequest service */
                    service?: (google.cloud.metastore.v1.IService|null);

                    /** UpdateServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateServiceRequest. */
                class UpdateServiceRequest implements IUpdateServiceRequest {

                    /**
                     * Constructs a new UpdateServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IUpdateServiceRequest);

                    /** UpdateServiceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateServiceRequest service. */
                    public service?: (google.cloud.metastore.v1.IService|null);

                    /** UpdateServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IUpdateServiceRequest): google.cloud.metastore.v1.UpdateServiceRequest;

                    /**
                     * Encodes the specified UpdateServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1.UpdateServiceRequest.verify|verify} messages.
                     * @param message UpdateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IUpdateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.UpdateServiceRequest.verify|verify} messages.
                     * @param message UpdateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IUpdateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.UpdateServiceRequest;

                    /**
                     * Decodes an UpdateServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.UpdateServiceRequest;

                    /**
                     * Verifies an UpdateServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.UpdateServiceRequest;

                    /**
                     * Creates a plain object from an UpdateServiceRequest message. Also converts values to other types if specified.
                     * @param message UpdateServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.UpdateServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteServiceRequest. */
                interface IDeleteServiceRequest {

                    /** DeleteServiceRequest name */
                    name?: (string|null);

                    /** DeleteServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteServiceRequest. */
                class DeleteServiceRequest implements IDeleteServiceRequest {

                    /**
                     * Constructs a new DeleteServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IDeleteServiceRequest);

                    /** DeleteServiceRequest name. */
                    public name: string;

                    /** DeleteServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IDeleteServiceRequest): google.cloud.metastore.v1.DeleteServiceRequest;

                    /**
                     * Encodes the specified DeleteServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1.DeleteServiceRequest.verify|verify} messages.
                     * @param message DeleteServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.DeleteServiceRequest.verify|verify} messages.
                     * @param message DeleteServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.DeleteServiceRequest;

                    /**
                     * Decodes a DeleteServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.DeleteServiceRequest;

                    /**
                     * Verifies a DeleteServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.DeleteServiceRequest;

                    /**
                     * Creates a plain object from a DeleteServiceRequest message. Also converts values to other types if specified.
                     * @param message DeleteServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.DeleteServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListMetadataImportsRequest. */
                interface IListMetadataImportsRequest {

                    /** ListMetadataImportsRequest parent */
                    parent?: (string|null);

                    /** ListMetadataImportsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListMetadataImportsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListMetadataImportsRequest filter */
                    filter?: (string|null);

                    /** ListMetadataImportsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListMetadataImportsRequest. */
                class ListMetadataImportsRequest implements IListMetadataImportsRequest {

                    /**
                     * Constructs a new ListMetadataImportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IListMetadataImportsRequest);

                    /** ListMetadataImportsRequest parent. */
                    public parent: string;

                    /** ListMetadataImportsRequest pageSize. */
                    public pageSize: number;

                    /** ListMetadataImportsRequest pageToken. */
                    public pageToken: string;

                    /** ListMetadataImportsRequest filter. */
                    public filter: string;

                    /** ListMetadataImportsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListMetadataImportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMetadataImportsRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IListMetadataImportsRequest): google.cloud.metastore.v1.ListMetadataImportsRequest;

                    /**
                     * Encodes the specified ListMetadataImportsRequest message. Does not implicitly {@link google.cloud.metastore.v1.ListMetadataImportsRequest.verify|verify} messages.
                     * @param message ListMetadataImportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IListMetadataImportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMetadataImportsRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.ListMetadataImportsRequest.verify|verify} messages.
                     * @param message ListMetadataImportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IListMetadataImportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMetadataImportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMetadataImportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.ListMetadataImportsRequest;

                    /**
                     * Decodes a ListMetadataImportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMetadataImportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.ListMetadataImportsRequest;

                    /**
                     * Verifies a ListMetadataImportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMetadataImportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMetadataImportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.ListMetadataImportsRequest;

                    /**
                     * Creates a plain object from a ListMetadataImportsRequest message. Also converts values to other types if specified.
                     * @param message ListMetadataImportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.ListMetadataImportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMetadataImportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListMetadataImportsResponse. */
                interface IListMetadataImportsResponse {

                    /** ListMetadataImportsResponse metadataImports */
                    metadataImports?: (google.cloud.metastore.v1.IMetadataImport[]|null);

                    /** ListMetadataImportsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListMetadataImportsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListMetadataImportsResponse. */
                class ListMetadataImportsResponse implements IListMetadataImportsResponse {

                    /**
                     * Constructs a new ListMetadataImportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IListMetadataImportsResponse);

                    /** ListMetadataImportsResponse metadataImports. */
                    public metadataImports: google.cloud.metastore.v1.IMetadataImport[];

                    /** ListMetadataImportsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListMetadataImportsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListMetadataImportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMetadataImportsResponse instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IListMetadataImportsResponse): google.cloud.metastore.v1.ListMetadataImportsResponse;

                    /**
                     * Encodes the specified ListMetadataImportsResponse message. Does not implicitly {@link google.cloud.metastore.v1.ListMetadataImportsResponse.verify|verify} messages.
                     * @param message ListMetadataImportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IListMetadataImportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMetadataImportsResponse message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.ListMetadataImportsResponse.verify|verify} messages.
                     * @param message ListMetadataImportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IListMetadataImportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMetadataImportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMetadataImportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.ListMetadataImportsResponse;

                    /**
                     * Decodes a ListMetadataImportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMetadataImportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.ListMetadataImportsResponse;

                    /**
                     * Verifies a ListMetadataImportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMetadataImportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMetadataImportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.ListMetadataImportsResponse;

                    /**
                     * Creates a plain object from a ListMetadataImportsResponse message. Also converts values to other types if specified.
                     * @param message ListMetadataImportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.ListMetadataImportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMetadataImportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMetadataImportRequest. */
                interface IGetMetadataImportRequest {

                    /** GetMetadataImportRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMetadataImportRequest. */
                class GetMetadataImportRequest implements IGetMetadataImportRequest {

                    /**
                     * Constructs a new GetMetadataImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IGetMetadataImportRequest);

                    /** GetMetadataImportRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMetadataImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMetadataImportRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IGetMetadataImportRequest): google.cloud.metastore.v1.GetMetadataImportRequest;

                    /**
                     * Encodes the specified GetMetadataImportRequest message. Does not implicitly {@link google.cloud.metastore.v1.GetMetadataImportRequest.verify|verify} messages.
                     * @param message GetMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IGetMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMetadataImportRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.GetMetadataImportRequest.verify|verify} messages.
                     * @param message GetMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IGetMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMetadataImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.GetMetadataImportRequest;

                    /**
                     * Decodes a GetMetadataImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.GetMetadataImportRequest;

                    /**
                     * Verifies a GetMetadataImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMetadataImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMetadataImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.GetMetadataImportRequest;

                    /**
                     * Creates a plain object from a GetMetadataImportRequest message. Also converts values to other types if specified.
                     * @param message GetMetadataImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.GetMetadataImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMetadataImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateMetadataImportRequest. */
                interface ICreateMetadataImportRequest {

                    /** CreateMetadataImportRequest parent */
                    parent?: (string|null);

                    /** CreateMetadataImportRequest metadataImportId */
                    metadataImportId?: (string|null);

                    /** CreateMetadataImportRequest metadataImport */
                    metadataImport?: (google.cloud.metastore.v1.IMetadataImport|null);

                    /** CreateMetadataImportRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateMetadataImportRequest. */
                class CreateMetadataImportRequest implements ICreateMetadataImportRequest {

                    /**
                     * Constructs a new CreateMetadataImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.ICreateMetadataImportRequest);

                    /** CreateMetadataImportRequest parent. */
                    public parent: string;

                    /** CreateMetadataImportRequest metadataImportId. */
                    public metadataImportId: string;

                    /** CreateMetadataImportRequest metadataImport. */
                    public metadataImport?: (google.cloud.metastore.v1.IMetadataImport|null);

                    /** CreateMetadataImportRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateMetadataImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateMetadataImportRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.ICreateMetadataImportRequest): google.cloud.metastore.v1.CreateMetadataImportRequest;

                    /**
                     * Encodes the specified CreateMetadataImportRequest message. Does not implicitly {@link google.cloud.metastore.v1.CreateMetadataImportRequest.verify|verify} messages.
                     * @param message CreateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.ICreateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateMetadataImportRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.CreateMetadataImportRequest.verify|verify} messages.
                     * @param message CreateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.ICreateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateMetadataImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.CreateMetadataImportRequest;

                    /**
                     * Decodes a CreateMetadataImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.CreateMetadataImportRequest;

                    /**
                     * Verifies a CreateMetadataImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateMetadataImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateMetadataImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.CreateMetadataImportRequest;

                    /**
                     * Creates a plain object from a CreateMetadataImportRequest message. Also converts values to other types if specified.
                     * @param message CreateMetadataImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.CreateMetadataImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateMetadataImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateMetadataImportRequest. */
                interface IUpdateMetadataImportRequest {

                    /** UpdateMetadataImportRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMetadataImportRequest metadataImport */
                    metadataImport?: (google.cloud.metastore.v1.IMetadataImport|null);

                    /** UpdateMetadataImportRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateMetadataImportRequest. */
                class UpdateMetadataImportRequest implements IUpdateMetadataImportRequest {

                    /**
                     * Constructs a new UpdateMetadataImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IUpdateMetadataImportRequest);

                    /** UpdateMetadataImportRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMetadataImportRequest metadataImport. */
                    public metadataImport?: (google.cloud.metastore.v1.IMetadataImport|null);

                    /** UpdateMetadataImportRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateMetadataImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateMetadataImportRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IUpdateMetadataImportRequest): google.cloud.metastore.v1.UpdateMetadataImportRequest;

                    /**
                     * Encodes the specified UpdateMetadataImportRequest message. Does not implicitly {@link google.cloud.metastore.v1.UpdateMetadataImportRequest.verify|verify} messages.
                     * @param message UpdateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IUpdateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateMetadataImportRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.UpdateMetadataImportRequest.verify|verify} messages.
                     * @param message UpdateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IUpdateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateMetadataImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.UpdateMetadataImportRequest;

                    /**
                     * Decodes an UpdateMetadataImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.UpdateMetadataImportRequest;

                    /**
                     * Verifies an UpdateMetadataImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateMetadataImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateMetadataImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.UpdateMetadataImportRequest;

                    /**
                     * Creates a plain object from an UpdateMetadataImportRequest message. Also converts values to other types if specified.
                     * @param message UpdateMetadataImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.UpdateMetadataImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateMetadataImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBackupsRequest. */
                interface IListBackupsRequest {

                    /** ListBackupsRequest parent */
                    parent?: (string|null);

                    /** ListBackupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBackupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBackupsRequest filter */
                    filter?: (string|null);

                    /** ListBackupsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListBackupsRequest. */
                class ListBackupsRequest implements IListBackupsRequest {

                    /**
                     * Constructs a new ListBackupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IListBackupsRequest);

                    /** ListBackupsRequest parent. */
                    public parent: string;

                    /** ListBackupsRequest pageSize. */
                    public pageSize: number;

                    /** ListBackupsRequest pageToken. */
                    public pageToken: string;

                    /** ListBackupsRequest filter. */
                    public filter: string;

                    /** ListBackupsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListBackupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IListBackupsRequest): google.cloud.metastore.v1.ListBackupsRequest;

                    /**
                     * Encodes the specified ListBackupsRequest message. Does not implicitly {@link google.cloud.metastore.v1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.ListBackupsRequest;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.ListBackupsRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.ListBackupsRequest;

                    /**
                     * Creates a plain object from a ListBackupsRequest message. Also converts values to other types if specified.
                     * @param message ListBackupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.ListBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBackupsResponse. */
                interface IListBackupsResponse {

                    /** ListBackupsResponse backups */
                    backups?: (google.cloud.metastore.v1.IBackup[]|null);

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
                    constructor(properties?: google.cloud.metastore.v1.IListBackupsResponse);

                    /** ListBackupsResponse backups. */
                    public backups: google.cloud.metastore.v1.IBackup[];

                    /** ListBackupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListBackupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBackupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsResponse instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IListBackupsResponse): google.cloud.metastore.v1.ListBackupsResponse;

                    /**
                     * Encodes the specified ListBackupsResponse message. Does not implicitly {@link google.cloud.metastore.v1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsResponse message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.ListBackupsResponse;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.ListBackupsResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.ListBackupsResponse;

                    /**
                     * Creates a plain object from a ListBackupsResponse message. Also converts values to other types if specified.
                     * @param message ListBackupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.ListBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: google.cloud.metastore.v1.IGetBackupRequest);

                    /** GetBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IGetBackupRequest): google.cloud.metastore.v1.GetBackupRequest;

                    /**
                     * Encodes the specified GetBackupRequest message. Does not implicitly {@link google.cloud.metastore.v1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.GetBackupRequest;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.GetBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.GetBackupRequest;

                    /**
                     * Creates a plain object from a GetBackupRequest message. Also converts values to other types if specified.
                     * @param message GetBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.GetBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateBackupRequest. */
                interface ICreateBackupRequest {

                    /** CreateBackupRequest parent */
                    parent?: (string|null);

                    /** CreateBackupRequest backupId */
                    backupId?: (string|null);

                    /** CreateBackupRequest backup */
                    backup?: (google.cloud.metastore.v1.IBackup|null);

                    /** CreateBackupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateBackupRequest. */
                class CreateBackupRequest implements ICreateBackupRequest {

                    /**
                     * Constructs a new CreateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.ICreateBackupRequest);

                    /** CreateBackupRequest parent. */
                    public parent: string;

                    /** CreateBackupRequest backupId. */
                    public backupId: string;

                    /** CreateBackupRequest backup. */
                    public backup?: (google.cloud.metastore.v1.IBackup|null);

                    /** CreateBackupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.ICreateBackupRequest): google.cloud.metastore.v1.CreateBackupRequest;

                    /**
                     * Encodes the specified CreateBackupRequest message. Does not implicitly {@link google.cloud.metastore.v1.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.CreateBackupRequest;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.CreateBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.CreateBackupRequest;

                    /**
                     * Creates a plain object from a CreateBackupRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.CreateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteBackupRequest. */
                interface IDeleteBackupRequest {

                    /** DeleteBackupRequest name */
                    name?: (string|null);

                    /** DeleteBackupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteBackupRequest. */
                class DeleteBackupRequest implements IDeleteBackupRequest {

                    /**
                     * Constructs a new DeleteBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IDeleteBackupRequest);

                    /** DeleteBackupRequest name. */
                    public name: string;

                    /** DeleteBackupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IDeleteBackupRequest): google.cloud.metastore.v1.DeleteBackupRequest;

                    /**
                     * Encodes the specified DeleteBackupRequest message. Does not implicitly {@link google.cloud.metastore.v1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.DeleteBackupRequest;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.DeleteBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.DeleteBackupRequest;

                    /**
                     * Creates a plain object from a DeleteBackupRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.DeleteBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportMetadataRequest. */
                interface IExportMetadataRequest {

                    /** ExportMetadataRequest destinationGcsFolder */
                    destinationGcsFolder?: (string|null);

                    /** ExportMetadataRequest service */
                    service?: (string|null);

                    /** ExportMetadataRequest requestId */
                    requestId?: (string|null);

                    /** ExportMetadataRequest databaseDumpType */
                    databaseDumpType?: (google.cloud.metastore.v1.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1.DatabaseDumpSpec.Type|null);
                }

                /** Represents an ExportMetadataRequest. */
                class ExportMetadataRequest implements IExportMetadataRequest {

                    /**
                     * Constructs a new ExportMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IExportMetadataRequest);

                    /** ExportMetadataRequest destinationGcsFolder. */
                    public destinationGcsFolder?: (string|null);

                    /** ExportMetadataRequest service. */
                    public service: string;

                    /** ExportMetadataRequest requestId. */
                    public requestId: string;

                    /** ExportMetadataRequest databaseDumpType. */
                    public databaseDumpType: (google.cloud.metastore.v1.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1.DatabaseDumpSpec.Type);

                    /** ExportMetadataRequest destination. */
                    public destination?: "destinationGcsFolder";

                    /**
                     * Creates a new ExportMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportMetadataRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IExportMetadataRequest): google.cloud.metastore.v1.ExportMetadataRequest;

                    /**
                     * Encodes the specified ExportMetadataRequest message. Does not implicitly {@link google.cloud.metastore.v1.ExportMetadataRequest.verify|verify} messages.
                     * @param message ExportMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IExportMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportMetadataRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.ExportMetadataRequest.verify|verify} messages.
                     * @param message ExportMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IExportMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.ExportMetadataRequest;

                    /**
                     * Decodes an ExportMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.ExportMetadataRequest;

                    /**
                     * Verifies an ExportMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.ExportMetadataRequest;

                    /**
                     * Creates a plain object from an ExportMetadataRequest message. Also converts values to other types if specified.
                     * @param message ExportMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.ExportMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RestoreServiceRequest. */
                interface IRestoreServiceRequest {

                    /** RestoreServiceRequest service */
                    service?: (string|null);

                    /** RestoreServiceRequest backup */
                    backup?: (string|null);

                    /** RestoreServiceRequest restoreType */
                    restoreType?: (google.cloud.metastore.v1.Restore.RestoreType|keyof typeof google.cloud.metastore.v1.Restore.RestoreType|null);

                    /** RestoreServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a RestoreServiceRequest. */
                class RestoreServiceRequest implements IRestoreServiceRequest {

                    /**
                     * Constructs a new RestoreServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IRestoreServiceRequest);

                    /** RestoreServiceRequest service. */
                    public service: string;

                    /** RestoreServiceRequest backup. */
                    public backup: string;

                    /** RestoreServiceRequest restoreType. */
                    public restoreType: (google.cloud.metastore.v1.Restore.RestoreType|keyof typeof google.cloud.metastore.v1.Restore.RestoreType);

                    /** RestoreServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new RestoreServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IRestoreServiceRequest): google.cloud.metastore.v1.RestoreServiceRequest;

                    /**
                     * Encodes the specified RestoreServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1.RestoreServiceRequest.verify|verify} messages.
                     * @param message RestoreServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IRestoreServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.RestoreServiceRequest.verify|verify} messages.
                     * @param message RestoreServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IRestoreServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.RestoreServiceRequest;

                    /**
                     * Decodes a RestoreServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.RestoreServiceRequest;

                    /**
                     * Verifies a RestoreServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.RestoreServiceRequest;

                    /**
                     * Creates a plain object from a RestoreServiceRequest message. Also converts values to other types if specified.
                     * @param message RestoreServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.RestoreServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreServiceRequest to JSON.
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
                    constructor(properties?: google.cloud.metastore.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.metastore.v1.IOperationMetadata): google.cloud.metastore.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.metastore.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LocationMetadata. */
                interface ILocationMetadata {

                    /** LocationMetadata supportedHiveMetastoreVersions */
                    supportedHiveMetastoreVersions?: (google.cloud.metastore.v1.LocationMetadata.IHiveMetastoreVersion[]|null);
                }

                /** Represents a LocationMetadata. */
                class LocationMetadata implements ILocationMetadata {

                    /**
                     * Constructs a new LocationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.ILocationMetadata);

                    /** LocationMetadata supportedHiveMetastoreVersions. */
                    public supportedHiveMetastoreVersions: google.cloud.metastore.v1.LocationMetadata.IHiveMetastoreVersion[];

                    /**
                     * Creates a new LocationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationMetadata instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.ILocationMetadata): google.cloud.metastore.v1.LocationMetadata;

                    /**
                     * Encodes the specified LocationMetadata message. Does not implicitly {@link google.cloud.metastore.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationMetadata message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.LocationMetadata;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.LocationMetadata;

                    /**
                     * Verifies a LocationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.LocationMetadata;

                    /**
                     * Creates a plain object from a LocationMetadata message. Also converts values to other types if specified.
                     * @param message LocationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.LocationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LocationMetadata {

                    /** Properties of a HiveMetastoreVersion. */
                    interface IHiveMetastoreVersion {

                        /** HiveMetastoreVersion version */
                        version?: (string|null);

                        /** HiveMetastoreVersion isDefault */
                        isDefault?: (boolean|null);
                    }

                    /** Represents a HiveMetastoreVersion. */
                    class HiveMetastoreVersion implements IHiveMetastoreVersion {

                        /**
                         * Constructs a new HiveMetastoreVersion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.metastore.v1.LocationMetadata.IHiveMetastoreVersion);

                        /** HiveMetastoreVersion version. */
                        public version: string;

                        /** HiveMetastoreVersion isDefault. */
                        public isDefault: boolean;

                        /**
                         * Creates a new HiveMetastoreVersion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HiveMetastoreVersion instance
                         */
                        public static create(properties?: google.cloud.metastore.v1.LocationMetadata.IHiveMetastoreVersion): google.cloud.metastore.v1.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Encodes the specified HiveMetastoreVersion message. Does not implicitly {@link google.cloud.metastore.v1.LocationMetadata.HiveMetastoreVersion.verify|verify} messages.
                         * @param message HiveMetastoreVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.metastore.v1.LocationMetadata.IHiveMetastoreVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HiveMetastoreVersion message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.LocationMetadata.HiveMetastoreVersion.verify|verify} messages.
                         * @param message HiveMetastoreVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.metastore.v1.LocationMetadata.IHiveMetastoreVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HiveMetastoreVersion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HiveMetastoreVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Decodes a HiveMetastoreVersion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HiveMetastoreVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Verifies a HiveMetastoreVersion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HiveMetastoreVersion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HiveMetastoreVersion
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Creates a plain object from a HiveMetastoreVersion message. Also converts values to other types if specified.
                         * @param message HiveMetastoreVersion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.metastore.v1.LocationMetadata.HiveMetastoreVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HiveMetastoreVersion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a DatabaseDumpSpec. */
                interface IDatabaseDumpSpec {
                }

                /** Represents a DatabaseDumpSpec. */
                class DatabaseDumpSpec implements IDatabaseDumpSpec {

                    /**
                     * Constructs a new DatabaseDumpSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1.IDatabaseDumpSpec);

                    /**
                     * Creates a new DatabaseDumpSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabaseDumpSpec instance
                     */
                    public static create(properties?: google.cloud.metastore.v1.IDatabaseDumpSpec): google.cloud.metastore.v1.DatabaseDumpSpec;

                    /**
                     * Encodes the specified DatabaseDumpSpec message. Does not implicitly {@link google.cloud.metastore.v1.DatabaseDumpSpec.verify|verify} messages.
                     * @param message DatabaseDumpSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1.IDatabaseDumpSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabaseDumpSpec message, length delimited. Does not implicitly {@link google.cloud.metastore.v1.DatabaseDumpSpec.verify|verify} messages.
                     * @param message DatabaseDumpSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1.IDatabaseDumpSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabaseDumpSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabaseDumpSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1.DatabaseDumpSpec;

                    /**
                     * Decodes a DatabaseDumpSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabaseDumpSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1.DatabaseDumpSpec;

                    /**
                     * Verifies a DatabaseDumpSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabaseDumpSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabaseDumpSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1.DatabaseDumpSpec;

                    /**
                     * Creates a plain object from a DatabaseDumpSpec message. Also converts values to other types if specified.
                     * @param message DatabaseDumpSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1.DatabaseDumpSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabaseDumpSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DatabaseDumpSpec {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        MYSQL = 1,
                        AVRO = 2
                    }
                }
            }

            /** Namespace v1alpha. */
            namespace v1alpha {

                /** Represents a DataprocMetastore */
                class DataprocMetastore extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DataprocMetastore service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DataprocMetastore service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DataprocMetastore;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServicesResponse
                     */
                    public listServices(request: google.cloud.metastore.v1alpha.IListServicesRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.ListServicesCallback): void;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @returns Promise
                     */
                    public listServices(request: google.cloud.metastore.v1alpha.IListServicesRequest): Promise<google.cloud.metastore.v1alpha.ListServicesResponse>;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Service
                     */
                    public getService(request: google.cloud.metastore.v1alpha.IGetServiceRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.GetServiceCallback): void;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @returns Promise
                     */
                    public getService(request: google.cloud.metastore.v1alpha.IGetServiceRequest): Promise<google.cloud.metastore.v1alpha.Service>;

                    /**
                     * Calls CreateService.
                     * @param request CreateServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createService(request: google.cloud.metastore.v1alpha.ICreateServiceRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.CreateServiceCallback): void;

                    /**
                     * Calls CreateService.
                     * @param request CreateServiceRequest message or plain object
                     * @returns Promise
                     */
                    public createService(request: google.cloud.metastore.v1alpha.ICreateServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateService.
                     * @param request UpdateServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateService(request: google.cloud.metastore.v1alpha.IUpdateServiceRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.UpdateServiceCallback): void;

                    /**
                     * Calls UpdateService.
                     * @param request UpdateServiceRequest message or plain object
                     * @returns Promise
                     */
                    public updateService(request: google.cloud.metastore.v1alpha.IUpdateServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteService.
                     * @param request DeleteServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteService(request: google.cloud.metastore.v1alpha.IDeleteServiceRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.DeleteServiceCallback): void;

                    /**
                     * Calls DeleteService.
                     * @param request DeleteServiceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteService(request: google.cloud.metastore.v1alpha.IDeleteServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListMetadataImports.
                     * @param request ListMetadataImportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListMetadataImportsResponse
                     */
                    public listMetadataImports(request: google.cloud.metastore.v1alpha.IListMetadataImportsRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.ListMetadataImportsCallback): void;

                    /**
                     * Calls ListMetadataImports.
                     * @param request ListMetadataImportsRequest message or plain object
                     * @returns Promise
                     */
                    public listMetadataImports(request: google.cloud.metastore.v1alpha.IListMetadataImportsRequest): Promise<google.cloud.metastore.v1alpha.ListMetadataImportsResponse>;

                    /**
                     * Calls GetMetadataImport.
                     * @param request GetMetadataImportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MetadataImport
                     */
                    public getMetadataImport(request: google.cloud.metastore.v1alpha.IGetMetadataImportRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.GetMetadataImportCallback): void;

                    /**
                     * Calls GetMetadataImport.
                     * @param request GetMetadataImportRequest message or plain object
                     * @returns Promise
                     */
                    public getMetadataImport(request: google.cloud.metastore.v1alpha.IGetMetadataImportRequest): Promise<google.cloud.metastore.v1alpha.MetadataImport>;

                    /**
                     * Calls CreateMetadataImport.
                     * @param request CreateMetadataImportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createMetadataImport(request: google.cloud.metastore.v1alpha.ICreateMetadataImportRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.CreateMetadataImportCallback): void;

                    /**
                     * Calls CreateMetadataImport.
                     * @param request CreateMetadataImportRequest message or plain object
                     * @returns Promise
                     */
                    public createMetadataImport(request: google.cloud.metastore.v1alpha.ICreateMetadataImportRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateMetadataImport.
                     * @param request UpdateMetadataImportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateMetadataImport(request: google.cloud.metastore.v1alpha.IUpdateMetadataImportRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.UpdateMetadataImportCallback): void;

                    /**
                     * Calls UpdateMetadataImport.
                     * @param request UpdateMetadataImportRequest message or plain object
                     * @returns Promise
                     */
                    public updateMetadataImport(request: google.cloud.metastore.v1alpha.IUpdateMetadataImportRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportMetadata.
                     * @param request ExportMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportMetadata(request: google.cloud.metastore.v1alpha.IExportMetadataRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.ExportMetadataCallback): void;

                    /**
                     * Calls ExportMetadata.
                     * @param request ExportMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public exportMetadata(request: google.cloud.metastore.v1alpha.IExportMetadataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RestoreService.
                     * @param request RestoreServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restoreService(request: google.cloud.metastore.v1alpha.IRestoreServiceRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.RestoreServiceCallback): void;

                    /**
                     * Calls RestoreService.
                     * @param request RestoreServiceRequest message or plain object
                     * @returns Promise
                     */
                    public restoreService(request: google.cloud.metastore.v1alpha.IRestoreServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupsResponse
                     */
                    public listBackups(request: google.cloud.metastore.v1alpha.IListBackupsRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.ListBackupsCallback): void;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @returns Promise
                     */
                    public listBackups(request: google.cloud.metastore.v1alpha.IListBackupsRequest): Promise<google.cloud.metastore.v1alpha.ListBackupsResponse>;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Backup
                     */
                    public getBackup(request: google.cloud.metastore.v1alpha.IGetBackupRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.GetBackupCallback): void;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @returns Promise
                     */
                    public getBackup(request: google.cloud.metastore.v1alpha.IGetBackupRequest): Promise<google.cloud.metastore.v1alpha.Backup>;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBackup(request: google.cloud.metastore.v1alpha.ICreateBackupRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.CreateBackupCallback): void;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public createBackup(request: google.cloud.metastore.v1alpha.ICreateBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBackup(request: google.cloud.metastore.v1alpha.IDeleteBackupRequest, callback: google.cloud.metastore.v1alpha.DataprocMetastore.DeleteBackupCallback): void;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackup(request: google.cloud.metastore.v1alpha.IDeleteBackupRequest): Promise<google.longrunning.Operation>;
                }

                namespace DataprocMetastore {

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#listServices}.
                     * @param error Error, if any
                     * @param [response] ListServicesResponse
                     */
                    type ListServicesCallback = (error: (Error|null), response?: google.cloud.metastore.v1alpha.ListServicesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#getService}.
                     * @param error Error, if any
                     * @param [response] Service
                     */
                    type GetServiceCallback = (error: (Error|null), response?: google.cloud.metastore.v1alpha.Service) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#createService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#updateService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#deleteService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#listMetadataImports}.
                     * @param error Error, if any
                     * @param [response] ListMetadataImportsResponse
                     */
                    type ListMetadataImportsCallback = (error: (Error|null), response?: google.cloud.metastore.v1alpha.ListMetadataImportsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#getMetadataImport}.
                     * @param error Error, if any
                     * @param [response] MetadataImport
                     */
                    type GetMetadataImportCallback = (error: (Error|null), response?: google.cloud.metastore.v1alpha.MetadataImport) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#createMetadataImport}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateMetadataImportCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#updateMetadataImport}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateMetadataImportCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#exportMetadata}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportMetadataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#restoreService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestoreServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#listBackups}.
                     * @param error Error, if any
                     * @param [response] ListBackupsResponse
                     */
                    type ListBackupsCallback = (error: (Error|null), response?: google.cloud.metastore.v1alpha.ListBackupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#getBackup}.
                     * @param error Error, if any
                     * @param [response] Backup
                     */
                    type GetBackupCallback = (error: (Error|null), response?: google.cloud.metastore.v1alpha.Backup) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#createBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1alpha.DataprocMetastore#deleteBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a Service. */
                interface IService {

                    /** Service hiveMetastoreConfig */
                    hiveMetastoreConfig?: (google.cloud.metastore.v1alpha.IHiveMetastoreConfig|null);

                    /** Service name */
                    name?: (string|null);

                    /** Service createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Service updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Service labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Service network */
                    network?: (string|null);

                    /** Service endpointUri */
                    endpointUri?: (string|null);

                    /** Service port */
                    port?: (number|null);

                    /** Service state */
                    state?: (google.cloud.metastore.v1alpha.Service.State|keyof typeof google.cloud.metastore.v1alpha.Service.State|null);

                    /** Service stateMessage */
                    stateMessage?: (string|null);

                    /** Service artifactGcsUri */
                    artifactGcsUri?: (string|null);

                    /** Service tier */
                    tier?: (google.cloud.metastore.v1alpha.Service.Tier|keyof typeof google.cloud.metastore.v1alpha.Service.Tier|null);

                    /** Service metadataIntegration */
                    metadataIntegration?: (google.cloud.metastore.v1alpha.IMetadataIntegration|null);

                    /** Service maintenanceWindow */
                    maintenanceWindow?: (google.cloud.metastore.v1alpha.IMaintenanceWindow|null);

                    /** Service uid */
                    uid?: (string|null);

                    /** Service metadataManagementActivity */
                    metadataManagementActivity?: (google.cloud.metastore.v1alpha.IMetadataManagementActivity|null);

                    /** Service releaseChannel */
                    releaseChannel?: (google.cloud.metastore.v1alpha.Service.ReleaseChannel|keyof typeof google.cloud.metastore.v1alpha.Service.ReleaseChannel|null);
                }

                /** Represents a Service. */
                class Service implements IService {

                    /**
                     * Constructs a new Service.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IService);

                    /** Service hiveMetastoreConfig. */
                    public hiveMetastoreConfig?: (google.cloud.metastore.v1alpha.IHiveMetastoreConfig|null);

                    /** Service name. */
                    public name: string;

                    /** Service createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Service updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Service labels. */
                    public labels: { [k: string]: string };

                    /** Service network. */
                    public network: string;

                    /** Service endpointUri. */
                    public endpointUri: string;

                    /** Service port. */
                    public port: number;

                    /** Service state. */
                    public state: (google.cloud.metastore.v1alpha.Service.State|keyof typeof google.cloud.metastore.v1alpha.Service.State);

                    /** Service stateMessage. */
                    public stateMessage: string;

                    /** Service artifactGcsUri. */
                    public artifactGcsUri: string;

                    /** Service tier. */
                    public tier: (google.cloud.metastore.v1alpha.Service.Tier|keyof typeof google.cloud.metastore.v1alpha.Service.Tier);

                    /** Service metadataIntegration. */
                    public metadataIntegration?: (google.cloud.metastore.v1alpha.IMetadataIntegration|null);

                    /** Service maintenanceWindow. */
                    public maintenanceWindow?: (google.cloud.metastore.v1alpha.IMaintenanceWindow|null);

                    /** Service uid. */
                    public uid: string;

                    /** Service metadataManagementActivity. */
                    public metadataManagementActivity?: (google.cloud.metastore.v1alpha.IMetadataManagementActivity|null);

                    /** Service releaseChannel. */
                    public releaseChannel: (google.cloud.metastore.v1alpha.Service.ReleaseChannel|keyof typeof google.cloud.metastore.v1alpha.Service.ReleaseChannel);

                    /** Service metastoreConfig. */
                    public metastoreConfig?: "hiveMetastoreConfig";

                    /**
                     * Creates a new Service instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Service instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IService): google.cloud.metastore.v1alpha.Service;

                    /**
                     * Encodes the specified Service message. Does not implicitly {@link google.cloud.metastore.v1alpha.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Service message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Service message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.Service;

                    /**
                     * Decodes a Service message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.Service;

                    /**
                     * Verifies a Service message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Service message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Service
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.Service;

                    /**
                     * Creates a plain object from a Service message. Also converts values to other types if specified.
                     * @param message Service
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Service to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Service {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        SUSPENDING = 3,
                        SUSPENDED = 4,
                        UPDATING = 5,
                        DELETING = 6,
                        ERROR = 7
                    }

                    /** Tier enum. */
                    enum Tier {
                        TIER_UNSPECIFIED = 0,
                        DEVELOPER = 1,
                        ENTERPRISE = 3
                    }

                    /** ReleaseChannel enum. */
                    enum ReleaseChannel {
                        RELEASE_CHANNEL_UNSPECIFIED = 0,
                        CANARY = 1,
                        STABLE = 2
                    }
                }

                /** Properties of a MetadataIntegration. */
                interface IMetadataIntegration {

                    /** MetadataIntegration dataCatalogConfig */
                    dataCatalogConfig?: (google.cloud.metastore.v1alpha.IDataCatalogConfig|null);
                }

                /** Represents a MetadataIntegration. */
                class MetadataIntegration implements IMetadataIntegration {

                    /**
                     * Constructs a new MetadataIntegration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IMetadataIntegration);

                    /** MetadataIntegration dataCatalogConfig. */
                    public dataCatalogConfig?: (google.cloud.metastore.v1alpha.IDataCatalogConfig|null);

                    /**
                     * Creates a new MetadataIntegration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataIntegration instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IMetadataIntegration): google.cloud.metastore.v1alpha.MetadataIntegration;

                    /**
                     * Encodes the specified MetadataIntegration message. Does not implicitly {@link google.cloud.metastore.v1alpha.MetadataIntegration.verify|verify} messages.
                     * @param message MetadataIntegration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IMetadataIntegration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataIntegration message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.MetadataIntegration.verify|verify} messages.
                     * @param message MetadataIntegration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IMetadataIntegration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataIntegration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataIntegration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.MetadataIntegration;

                    /**
                     * Decodes a MetadataIntegration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataIntegration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.MetadataIntegration;

                    /**
                     * Verifies a MetadataIntegration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataIntegration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataIntegration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.MetadataIntegration;

                    /**
                     * Creates a plain object from a MetadataIntegration message. Also converts values to other types if specified.
                     * @param message MetadataIntegration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.MetadataIntegration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataIntegration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DataCatalogConfig. */
                interface IDataCatalogConfig {

                    /** DataCatalogConfig enabled */
                    enabled?: (boolean|null);
                }

                /** Represents a DataCatalogConfig. */
                class DataCatalogConfig implements IDataCatalogConfig {

                    /**
                     * Constructs a new DataCatalogConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IDataCatalogConfig);

                    /** DataCatalogConfig enabled. */
                    public enabled: boolean;

                    /**
                     * Creates a new DataCatalogConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataCatalogConfig instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IDataCatalogConfig): google.cloud.metastore.v1alpha.DataCatalogConfig;

                    /**
                     * Encodes the specified DataCatalogConfig message. Does not implicitly {@link google.cloud.metastore.v1alpha.DataCatalogConfig.verify|verify} messages.
                     * @param message DataCatalogConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IDataCatalogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataCatalogConfig message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.DataCatalogConfig.verify|verify} messages.
                     * @param message DataCatalogConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IDataCatalogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataCatalogConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataCatalogConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.DataCatalogConfig;

                    /**
                     * Decodes a DataCatalogConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataCatalogConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.DataCatalogConfig;

                    /**
                     * Verifies a DataCatalogConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataCatalogConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataCatalogConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.DataCatalogConfig;

                    /**
                     * Creates a plain object from a DataCatalogConfig message. Also converts values to other types if specified.
                     * @param message DataCatalogConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.DataCatalogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataCatalogConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MaintenanceWindow. */
                interface IMaintenanceWindow {

                    /** MaintenanceWindow hourOfDay */
                    hourOfDay?: (google.protobuf.IInt32Value|null);

                    /** MaintenanceWindow dayOfWeek */
                    dayOfWeek?: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek|null);
                }

                /** Represents a MaintenanceWindow. */
                class MaintenanceWindow implements IMaintenanceWindow {

                    /**
                     * Constructs a new MaintenanceWindow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IMaintenanceWindow);

                    /** MaintenanceWindow hourOfDay. */
                    public hourOfDay?: (google.protobuf.IInt32Value|null);

                    /** MaintenanceWindow dayOfWeek. */
                    public dayOfWeek: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek);

                    /**
                     * Creates a new MaintenanceWindow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaintenanceWindow instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IMaintenanceWindow): google.cloud.metastore.v1alpha.MaintenanceWindow;

                    /**
                     * Encodes the specified MaintenanceWindow message. Does not implicitly {@link google.cloud.metastore.v1alpha.MaintenanceWindow.verify|verify} messages.
                     * @param message MaintenanceWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaintenanceWindow message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.MaintenanceWindow.verify|verify} messages.
                     * @param message MaintenanceWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaintenanceWindow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaintenanceWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.MaintenanceWindow;

                    /**
                     * Decodes a MaintenanceWindow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaintenanceWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.MaintenanceWindow;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.MaintenanceWindow;

                    /**
                     * Creates a plain object from a MaintenanceWindow message. Also converts values to other types if specified.
                     * @param message MaintenanceWindow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.MaintenanceWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaintenanceWindow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HiveMetastoreConfig. */
                interface IHiveMetastoreConfig {

                    /** HiveMetastoreConfig version */
                    version?: (string|null);

                    /** HiveMetastoreConfig configOverrides */
                    configOverrides?: ({ [k: string]: string }|null);

                    /** HiveMetastoreConfig kerberosConfig */
                    kerberosConfig?: (google.cloud.metastore.v1alpha.IKerberosConfig|null);
                }

                /** Represents a HiveMetastoreConfig. */
                class HiveMetastoreConfig implements IHiveMetastoreConfig {

                    /**
                     * Constructs a new HiveMetastoreConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IHiveMetastoreConfig);

                    /** HiveMetastoreConfig version. */
                    public version: string;

                    /** HiveMetastoreConfig configOverrides. */
                    public configOverrides: { [k: string]: string };

                    /** HiveMetastoreConfig kerberosConfig. */
                    public kerberosConfig?: (google.cloud.metastore.v1alpha.IKerberosConfig|null);

                    /**
                     * Creates a new HiveMetastoreConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HiveMetastoreConfig instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IHiveMetastoreConfig): google.cloud.metastore.v1alpha.HiveMetastoreConfig;

                    /**
                     * Encodes the specified HiveMetastoreConfig message. Does not implicitly {@link google.cloud.metastore.v1alpha.HiveMetastoreConfig.verify|verify} messages.
                     * @param message HiveMetastoreConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IHiveMetastoreConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HiveMetastoreConfig message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.HiveMetastoreConfig.verify|verify} messages.
                     * @param message HiveMetastoreConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IHiveMetastoreConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HiveMetastoreConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HiveMetastoreConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.HiveMetastoreConfig;

                    /**
                     * Decodes a HiveMetastoreConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HiveMetastoreConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.HiveMetastoreConfig;

                    /**
                     * Verifies a HiveMetastoreConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HiveMetastoreConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HiveMetastoreConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.HiveMetastoreConfig;

                    /**
                     * Creates a plain object from a HiveMetastoreConfig message. Also converts values to other types if specified.
                     * @param message HiveMetastoreConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.HiveMetastoreConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HiveMetastoreConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a KerberosConfig. */
                interface IKerberosConfig {

                    /** KerberosConfig keytab */
                    keytab?: (google.cloud.metastore.v1alpha.ISecret|null);

                    /** KerberosConfig principal */
                    principal?: (string|null);

                    /** KerberosConfig krb5ConfigGcsUri */
                    krb5ConfigGcsUri?: (string|null);
                }

                /** Represents a KerberosConfig. */
                class KerberosConfig implements IKerberosConfig {

                    /**
                     * Constructs a new KerberosConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IKerberosConfig);

                    /** KerberosConfig keytab. */
                    public keytab?: (google.cloud.metastore.v1alpha.ISecret|null);

                    /** KerberosConfig principal. */
                    public principal: string;

                    /** KerberosConfig krb5ConfigGcsUri. */
                    public krb5ConfigGcsUri: string;

                    /**
                     * Creates a new KerberosConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KerberosConfig instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IKerberosConfig): google.cloud.metastore.v1alpha.KerberosConfig;

                    /**
                     * Encodes the specified KerberosConfig message. Does not implicitly {@link google.cloud.metastore.v1alpha.KerberosConfig.verify|verify} messages.
                     * @param message KerberosConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IKerberosConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KerberosConfig message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.KerberosConfig.verify|verify} messages.
                     * @param message KerberosConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IKerberosConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KerberosConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KerberosConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.KerberosConfig;

                    /**
                     * Decodes a KerberosConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KerberosConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.KerberosConfig;

                    /**
                     * Verifies a KerberosConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KerberosConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KerberosConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.KerberosConfig;

                    /**
                     * Creates a plain object from a KerberosConfig message. Also converts values to other types if specified.
                     * @param message KerberosConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.KerberosConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KerberosConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Secret. */
                interface ISecret {

                    /** Secret cloudSecret */
                    cloudSecret?: (string|null);
                }

                /** Represents a Secret. */
                class Secret implements ISecret {

                    /**
                     * Constructs a new Secret.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.ISecret);

                    /** Secret cloudSecret. */
                    public cloudSecret?: (string|null);

                    /** Secret value. */
                    public value?: "cloudSecret";

                    /**
                     * Creates a new Secret instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Secret instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.ISecret): google.cloud.metastore.v1alpha.Secret;

                    /**
                     * Encodes the specified Secret message. Does not implicitly {@link google.cloud.metastore.v1alpha.Secret.verify|verify} messages.
                     * @param message Secret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Secret message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.Secret.verify|verify} messages.
                     * @param message Secret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Secret message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Secret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.Secret;

                    /**
                     * Decodes a Secret message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Secret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.Secret;

                    /**
                     * Verifies a Secret message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Secret message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Secret
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.Secret;

                    /**
                     * Creates a plain object from a Secret message. Also converts values to other types if specified.
                     * @param message Secret
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.Secret, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Secret to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetadataManagementActivity. */
                interface IMetadataManagementActivity {

                    /** MetadataManagementActivity metadataExports */
                    metadataExports?: (google.cloud.metastore.v1alpha.IMetadataExport[]|null);

                    /** MetadataManagementActivity restores */
                    restores?: (google.cloud.metastore.v1alpha.IRestore[]|null);
                }

                /** Represents a MetadataManagementActivity. */
                class MetadataManagementActivity implements IMetadataManagementActivity {

                    /**
                     * Constructs a new MetadataManagementActivity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IMetadataManagementActivity);

                    /** MetadataManagementActivity metadataExports. */
                    public metadataExports: google.cloud.metastore.v1alpha.IMetadataExport[];

                    /** MetadataManagementActivity restores. */
                    public restores: google.cloud.metastore.v1alpha.IRestore[];

                    /**
                     * Creates a new MetadataManagementActivity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataManagementActivity instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IMetadataManagementActivity): google.cloud.metastore.v1alpha.MetadataManagementActivity;

                    /**
                     * Encodes the specified MetadataManagementActivity message. Does not implicitly {@link google.cloud.metastore.v1alpha.MetadataManagementActivity.verify|verify} messages.
                     * @param message MetadataManagementActivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IMetadataManagementActivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataManagementActivity message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.MetadataManagementActivity.verify|verify} messages.
                     * @param message MetadataManagementActivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IMetadataManagementActivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataManagementActivity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataManagementActivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.MetadataManagementActivity;

                    /**
                     * Decodes a MetadataManagementActivity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataManagementActivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.MetadataManagementActivity;

                    /**
                     * Verifies a MetadataManagementActivity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataManagementActivity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataManagementActivity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.MetadataManagementActivity;

                    /**
                     * Creates a plain object from a MetadataManagementActivity message. Also converts values to other types if specified.
                     * @param message MetadataManagementActivity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.MetadataManagementActivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataManagementActivity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetadataImport. */
                interface IMetadataImport {

                    /** MetadataImport databaseDump */
                    databaseDump?: (google.cloud.metastore.v1alpha.MetadataImport.IDatabaseDump|null);

                    /** MetadataImport name */
                    name?: (string|null);

                    /** MetadataImport description */
                    description?: (string|null);

                    /** MetadataImport createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport state */
                    state?: (google.cloud.metastore.v1alpha.MetadataImport.State|keyof typeof google.cloud.metastore.v1alpha.MetadataImport.State|null);
                }

                /** Represents a MetadataImport. */
                class MetadataImport implements IMetadataImport {

                    /**
                     * Constructs a new MetadataImport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IMetadataImport);

                    /** MetadataImport databaseDump. */
                    public databaseDump?: (google.cloud.metastore.v1alpha.MetadataImport.IDatabaseDump|null);

                    /** MetadataImport name. */
                    public name: string;

                    /** MetadataImport description. */
                    public description: string;

                    /** MetadataImport createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport state. */
                    public state: (google.cloud.metastore.v1alpha.MetadataImport.State|keyof typeof google.cloud.metastore.v1alpha.MetadataImport.State);

                    /** MetadataImport metadata. */
                    public metadata?: "databaseDump";

                    /**
                     * Creates a new MetadataImport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataImport instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IMetadataImport): google.cloud.metastore.v1alpha.MetadataImport;

                    /**
                     * Encodes the specified MetadataImport message. Does not implicitly {@link google.cloud.metastore.v1alpha.MetadataImport.verify|verify} messages.
                     * @param message MetadataImport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IMetadataImport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataImport message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.MetadataImport.verify|verify} messages.
                     * @param message MetadataImport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IMetadataImport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataImport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataImport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.MetadataImport;

                    /**
                     * Decodes a MetadataImport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataImport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.MetadataImport;

                    /**
                     * Verifies a MetadataImport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataImport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataImport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.MetadataImport;

                    /**
                     * Creates a plain object from a MetadataImport message. Also converts values to other types if specified.
                     * @param message MetadataImport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.MetadataImport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataImport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MetadataImport {

                    /** Properties of a DatabaseDump. */
                    interface IDatabaseDump {

                        /** DatabaseDump databaseType */
                        databaseType?: (google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump.DatabaseType|keyof typeof google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump.DatabaseType|null);

                        /** DatabaseDump gcsUri */
                        gcsUri?: (string|null);

                        /** DatabaseDump sourceDatabase */
                        sourceDatabase?: (string|null);

                        /** DatabaseDump type */
                        type?: (google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type|null);
                    }

                    /** Represents a DatabaseDump. */
                    class DatabaseDump implements IDatabaseDump {

                        /**
                         * Constructs a new DatabaseDump.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.metastore.v1alpha.MetadataImport.IDatabaseDump);

                        /** DatabaseDump databaseType. */
                        public databaseType: (google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump.DatabaseType|keyof typeof google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump.DatabaseType);

                        /** DatabaseDump gcsUri. */
                        public gcsUri: string;

                        /** DatabaseDump sourceDatabase. */
                        public sourceDatabase: string;

                        /** DatabaseDump type. */
                        public type: (google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type);

                        /**
                         * Creates a new DatabaseDump instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DatabaseDump instance
                         */
                        public static create(properties?: google.cloud.metastore.v1alpha.MetadataImport.IDatabaseDump): google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump;

                        /**
                         * Encodes the specified DatabaseDump message. Does not implicitly {@link google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump.verify|verify} messages.
                         * @param message DatabaseDump message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.metastore.v1alpha.MetadataImport.IDatabaseDump, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DatabaseDump message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump.verify|verify} messages.
                         * @param message DatabaseDump message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.metastore.v1alpha.MetadataImport.IDatabaseDump, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DatabaseDump message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DatabaseDump
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump;

                        /**
                         * Decodes a DatabaseDump message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DatabaseDump
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump;

                        /**
                         * Verifies a DatabaseDump message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DatabaseDump message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DatabaseDump
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump;

                        /**
                         * Creates a plain object from a DatabaseDump message. Also converts values to other types if specified.
                         * @param message DatabaseDump
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.metastore.v1alpha.MetadataImport.DatabaseDump, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DatabaseDump to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DatabaseDump {

                        /** DatabaseType enum. */
                        enum DatabaseType {
                            DATABASE_TYPE_UNSPECIFIED = 0,
                            MYSQL = 1
                        }
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        UPDATING = 3,
                        FAILED = 4
                    }
                }

                /** Properties of a MetadataExport. */
                interface IMetadataExport {

                    /** MetadataExport destinationGcsUri */
                    destinationGcsUri?: (string|null);

                    /** MetadataExport startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport state */
                    state?: (google.cloud.metastore.v1alpha.MetadataExport.State|keyof typeof google.cloud.metastore.v1alpha.MetadataExport.State|null);

                    /** MetadataExport databaseDumpType */
                    databaseDumpType?: (google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type|null);
                }

                /** Represents a MetadataExport. */
                class MetadataExport implements IMetadataExport {

                    /**
                     * Constructs a new MetadataExport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IMetadataExport);

                    /** MetadataExport destinationGcsUri. */
                    public destinationGcsUri?: (string|null);

                    /** MetadataExport startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport state. */
                    public state: (google.cloud.metastore.v1alpha.MetadataExport.State|keyof typeof google.cloud.metastore.v1alpha.MetadataExport.State);

                    /** MetadataExport databaseDumpType. */
                    public databaseDumpType: (google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type);

                    /** MetadataExport destination. */
                    public destination?: "destinationGcsUri";

                    /**
                     * Creates a new MetadataExport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataExport instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IMetadataExport): google.cloud.metastore.v1alpha.MetadataExport;

                    /**
                     * Encodes the specified MetadataExport message. Does not implicitly {@link google.cloud.metastore.v1alpha.MetadataExport.verify|verify} messages.
                     * @param message MetadataExport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IMetadataExport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataExport message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.MetadataExport.verify|verify} messages.
                     * @param message MetadataExport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IMetadataExport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataExport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataExport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.MetadataExport;

                    /**
                     * Decodes a MetadataExport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataExport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.MetadataExport;

                    /**
                     * Verifies a MetadataExport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataExport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataExport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.MetadataExport;

                    /**
                     * Creates a plain object from a MetadataExport message. Also converts values to other types if specified.
                     * @param message MetadataExport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.MetadataExport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataExport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MetadataExport {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLED = 4
                    }
                }

                /** Properties of a Backup. */
                interface IBackup {

                    /** Backup name */
                    name?: (string|null);

                    /** Backup createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Backup state */
                    state?: (google.cloud.metastore.v1alpha.Backup.State|keyof typeof google.cloud.metastore.v1alpha.Backup.State|null);

                    /** Backup serviceRevision */
                    serviceRevision?: (google.cloud.metastore.v1alpha.IService|null);

                    /** Backup description */
                    description?: (string|null);
                }

                /** Represents a Backup. */
                class Backup implements IBackup {

                    /**
                     * Constructs a new Backup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IBackup);

                    /** Backup name. */
                    public name: string;

                    /** Backup createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Backup state. */
                    public state: (google.cloud.metastore.v1alpha.Backup.State|keyof typeof google.cloud.metastore.v1alpha.Backup.State);

                    /** Backup serviceRevision. */
                    public serviceRevision?: (google.cloud.metastore.v1alpha.IService|null);

                    /** Backup description. */
                    public description: string;

                    /**
                     * Creates a new Backup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Backup instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IBackup): google.cloud.metastore.v1alpha.Backup;

                    /**
                     * Encodes the specified Backup message. Does not implicitly {@link google.cloud.metastore.v1alpha.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Backup message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Backup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.Backup;

                    /**
                     * Decodes a Backup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.Backup;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.Backup;

                    /**
                     * Creates a plain object from a Backup message. Also converts values to other types if specified.
                     * @param message Backup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Backup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Backup {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        DELETING = 2,
                        ACTIVE = 3,
                        FAILED = 4
                    }
                }

                /** Properties of a Restore. */
                interface IRestore {

                    /** Restore startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Restore endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Restore state */
                    state?: (google.cloud.metastore.v1alpha.Restore.State|keyof typeof google.cloud.metastore.v1alpha.Restore.State|null);

                    /** Restore backup */
                    backup?: (string|null);

                    /** Restore type */
                    type?: (google.cloud.metastore.v1alpha.Restore.RestoreType|keyof typeof google.cloud.metastore.v1alpha.Restore.RestoreType|null);

                    /** Restore details */
                    details?: (string|null);
                }

                /** Represents a Restore. */
                class Restore implements IRestore {

                    /**
                     * Constructs a new Restore.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IRestore);

                    /** Restore startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Restore endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Restore state. */
                    public state: (google.cloud.metastore.v1alpha.Restore.State|keyof typeof google.cloud.metastore.v1alpha.Restore.State);

                    /** Restore backup. */
                    public backup: string;

                    /** Restore type. */
                    public type: (google.cloud.metastore.v1alpha.Restore.RestoreType|keyof typeof google.cloud.metastore.v1alpha.Restore.RestoreType);

                    /** Restore details. */
                    public details: string;

                    /**
                     * Creates a new Restore instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Restore instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IRestore): google.cloud.metastore.v1alpha.Restore;

                    /**
                     * Encodes the specified Restore message. Does not implicitly {@link google.cloud.metastore.v1alpha.Restore.verify|verify} messages.
                     * @param message Restore message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IRestore, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Restore message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.Restore.verify|verify} messages.
                     * @param message Restore message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IRestore, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Restore message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Restore
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.Restore;

                    /**
                     * Decodes a Restore message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Restore
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.Restore;

                    /**
                     * Verifies a Restore message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Restore message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Restore
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.Restore;

                    /**
                     * Creates a plain object from a Restore message. Also converts values to other types if specified.
                     * @param message Restore
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.Restore, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Restore to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Restore {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLED = 4
                    }

                    /** RestoreType enum. */
                    enum RestoreType {
                        RESTORE_TYPE_UNSPECIFIED = 0,
                        FULL = 1,
                        METADATA_ONLY = 2
                    }
                }

                /** Properties of a ListServicesRequest. */
                interface IListServicesRequest {

                    /** ListServicesRequest parent */
                    parent?: (string|null);

                    /** ListServicesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListServicesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListServicesRequest filter */
                    filter?: (string|null);

                    /** ListServicesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListServicesRequest. */
                class ListServicesRequest implements IListServicesRequest {

                    /**
                     * Constructs a new ListServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IListServicesRequest);

                    /** ListServicesRequest parent. */
                    public parent: string;

                    /** ListServicesRequest pageSize. */
                    public pageSize: number;

                    /** ListServicesRequest pageToken. */
                    public pageToken: string;

                    /** ListServicesRequest filter. */
                    public filter: string;

                    /** ListServicesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IListServicesRequest): google.cloud.metastore.v1alpha.ListServicesRequest;

                    /**
                     * Encodes the specified ListServicesRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.ListServicesRequest;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.ListServicesRequest;

                    /**
                     * Verifies a ListServicesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServicesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServicesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.ListServicesRequest;

                    /**
                     * Creates a plain object from a ListServicesRequest message. Also converts values to other types if specified.
                     * @param message ListServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.ListServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServicesResponse. */
                interface IListServicesResponse {

                    /** ListServicesResponse services */
                    services?: (google.cloud.metastore.v1alpha.IService[]|null);

                    /** ListServicesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListServicesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListServicesResponse. */
                class ListServicesResponse implements IListServicesResponse {

                    /**
                     * Constructs a new ListServicesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IListServicesResponse);

                    /** ListServicesResponse services. */
                    public services: google.cloud.metastore.v1alpha.IService[];

                    /** ListServicesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListServicesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListServicesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesResponse instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IListServicesResponse): google.cloud.metastore.v1alpha.ListServicesResponse;

                    /**
                     * Encodes the specified ListServicesResponse message. Does not implicitly {@link google.cloud.metastore.v1alpha.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesResponse message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.ListServicesResponse;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.ListServicesResponse;

                    /**
                     * Verifies a ListServicesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServicesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServicesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.ListServicesResponse;

                    /**
                     * Creates a plain object from a ListServicesResponse message. Also converts values to other types if specified.
                     * @param message ListServicesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.ListServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetServiceRequest. */
                interface IGetServiceRequest {

                    /** GetServiceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetServiceRequest. */
                class GetServiceRequest implements IGetServiceRequest {

                    /**
                     * Constructs a new GetServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IGetServiceRequest);

                    /** GetServiceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IGetServiceRequest): google.cloud.metastore.v1alpha.GetServiceRequest;

                    /**
                     * Encodes the specified GetServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.GetServiceRequest;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.GetServiceRequest;

                    /**
                     * Verifies a GetServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.GetServiceRequest;

                    /**
                     * Creates a plain object from a GetServiceRequest message. Also converts values to other types if specified.
                     * @param message GetServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.GetServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateServiceRequest. */
                interface ICreateServiceRequest {

                    /** CreateServiceRequest parent */
                    parent?: (string|null);

                    /** CreateServiceRequest serviceId */
                    serviceId?: (string|null);

                    /** CreateServiceRequest service */
                    service?: (google.cloud.metastore.v1alpha.IService|null);

                    /** CreateServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateServiceRequest. */
                class CreateServiceRequest implements ICreateServiceRequest {

                    /**
                     * Constructs a new CreateServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.ICreateServiceRequest);

                    /** CreateServiceRequest parent. */
                    public parent: string;

                    /** CreateServiceRequest serviceId. */
                    public serviceId: string;

                    /** CreateServiceRequest service. */
                    public service?: (google.cloud.metastore.v1alpha.IService|null);

                    /** CreateServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.ICreateServiceRequest): google.cloud.metastore.v1alpha.CreateServiceRequest;

                    /**
                     * Encodes the specified CreateServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.CreateServiceRequest.verify|verify} messages.
                     * @param message CreateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.ICreateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.CreateServiceRequest.verify|verify} messages.
                     * @param message CreateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.ICreateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.CreateServiceRequest;

                    /**
                     * Decodes a CreateServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.CreateServiceRequest;

                    /**
                     * Verifies a CreateServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.CreateServiceRequest;

                    /**
                     * Creates a plain object from a CreateServiceRequest message. Also converts values to other types if specified.
                     * @param message CreateServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.CreateServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateServiceRequest. */
                interface IUpdateServiceRequest {

                    /** UpdateServiceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateServiceRequest service */
                    service?: (google.cloud.metastore.v1alpha.IService|null);

                    /** UpdateServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateServiceRequest. */
                class UpdateServiceRequest implements IUpdateServiceRequest {

                    /**
                     * Constructs a new UpdateServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IUpdateServiceRequest);

                    /** UpdateServiceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateServiceRequest service. */
                    public service?: (google.cloud.metastore.v1alpha.IService|null);

                    /** UpdateServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IUpdateServiceRequest): google.cloud.metastore.v1alpha.UpdateServiceRequest;

                    /**
                     * Encodes the specified UpdateServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.UpdateServiceRequest.verify|verify} messages.
                     * @param message UpdateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IUpdateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.UpdateServiceRequest.verify|verify} messages.
                     * @param message UpdateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IUpdateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.UpdateServiceRequest;

                    /**
                     * Decodes an UpdateServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.UpdateServiceRequest;

                    /**
                     * Verifies an UpdateServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.UpdateServiceRequest;

                    /**
                     * Creates a plain object from an UpdateServiceRequest message. Also converts values to other types if specified.
                     * @param message UpdateServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.UpdateServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteServiceRequest. */
                interface IDeleteServiceRequest {

                    /** DeleteServiceRequest name */
                    name?: (string|null);

                    /** DeleteServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteServiceRequest. */
                class DeleteServiceRequest implements IDeleteServiceRequest {

                    /**
                     * Constructs a new DeleteServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IDeleteServiceRequest);

                    /** DeleteServiceRequest name. */
                    public name: string;

                    /** DeleteServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IDeleteServiceRequest): google.cloud.metastore.v1alpha.DeleteServiceRequest;

                    /**
                     * Encodes the specified DeleteServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.DeleteServiceRequest.verify|verify} messages.
                     * @param message DeleteServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.DeleteServiceRequest.verify|verify} messages.
                     * @param message DeleteServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.DeleteServiceRequest;

                    /**
                     * Decodes a DeleteServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.DeleteServiceRequest;

                    /**
                     * Verifies a DeleteServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.DeleteServiceRequest;

                    /**
                     * Creates a plain object from a DeleteServiceRequest message. Also converts values to other types if specified.
                     * @param message DeleteServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.DeleteServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListMetadataImportsRequest. */
                interface IListMetadataImportsRequest {

                    /** ListMetadataImportsRequest parent */
                    parent?: (string|null);

                    /** ListMetadataImportsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListMetadataImportsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListMetadataImportsRequest filter */
                    filter?: (string|null);

                    /** ListMetadataImportsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListMetadataImportsRequest. */
                class ListMetadataImportsRequest implements IListMetadataImportsRequest {

                    /**
                     * Constructs a new ListMetadataImportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IListMetadataImportsRequest);

                    /** ListMetadataImportsRequest parent. */
                    public parent: string;

                    /** ListMetadataImportsRequest pageSize. */
                    public pageSize: number;

                    /** ListMetadataImportsRequest pageToken. */
                    public pageToken: string;

                    /** ListMetadataImportsRequest filter. */
                    public filter: string;

                    /** ListMetadataImportsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListMetadataImportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMetadataImportsRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IListMetadataImportsRequest): google.cloud.metastore.v1alpha.ListMetadataImportsRequest;

                    /**
                     * Encodes the specified ListMetadataImportsRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.ListMetadataImportsRequest.verify|verify} messages.
                     * @param message ListMetadataImportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IListMetadataImportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMetadataImportsRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.ListMetadataImportsRequest.verify|verify} messages.
                     * @param message ListMetadataImportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IListMetadataImportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMetadataImportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMetadataImportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.ListMetadataImportsRequest;

                    /**
                     * Decodes a ListMetadataImportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMetadataImportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.ListMetadataImportsRequest;

                    /**
                     * Verifies a ListMetadataImportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMetadataImportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMetadataImportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.ListMetadataImportsRequest;

                    /**
                     * Creates a plain object from a ListMetadataImportsRequest message. Also converts values to other types if specified.
                     * @param message ListMetadataImportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.ListMetadataImportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMetadataImportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListMetadataImportsResponse. */
                interface IListMetadataImportsResponse {

                    /** ListMetadataImportsResponse metadataImports */
                    metadataImports?: (google.cloud.metastore.v1alpha.IMetadataImport[]|null);

                    /** ListMetadataImportsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListMetadataImportsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListMetadataImportsResponse. */
                class ListMetadataImportsResponse implements IListMetadataImportsResponse {

                    /**
                     * Constructs a new ListMetadataImportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IListMetadataImportsResponse);

                    /** ListMetadataImportsResponse metadataImports. */
                    public metadataImports: google.cloud.metastore.v1alpha.IMetadataImport[];

                    /** ListMetadataImportsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListMetadataImportsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListMetadataImportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMetadataImportsResponse instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IListMetadataImportsResponse): google.cloud.metastore.v1alpha.ListMetadataImportsResponse;

                    /**
                     * Encodes the specified ListMetadataImportsResponse message. Does not implicitly {@link google.cloud.metastore.v1alpha.ListMetadataImportsResponse.verify|verify} messages.
                     * @param message ListMetadataImportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IListMetadataImportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMetadataImportsResponse message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.ListMetadataImportsResponse.verify|verify} messages.
                     * @param message ListMetadataImportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IListMetadataImportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMetadataImportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMetadataImportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.ListMetadataImportsResponse;

                    /**
                     * Decodes a ListMetadataImportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMetadataImportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.ListMetadataImportsResponse;

                    /**
                     * Verifies a ListMetadataImportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMetadataImportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMetadataImportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.ListMetadataImportsResponse;

                    /**
                     * Creates a plain object from a ListMetadataImportsResponse message. Also converts values to other types if specified.
                     * @param message ListMetadataImportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.ListMetadataImportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMetadataImportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMetadataImportRequest. */
                interface IGetMetadataImportRequest {

                    /** GetMetadataImportRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMetadataImportRequest. */
                class GetMetadataImportRequest implements IGetMetadataImportRequest {

                    /**
                     * Constructs a new GetMetadataImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IGetMetadataImportRequest);

                    /** GetMetadataImportRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMetadataImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMetadataImportRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IGetMetadataImportRequest): google.cloud.metastore.v1alpha.GetMetadataImportRequest;

                    /**
                     * Encodes the specified GetMetadataImportRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.GetMetadataImportRequest.verify|verify} messages.
                     * @param message GetMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IGetMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMetadataImportRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.GetMetadataImportRequest.verify|verify} messages.
                     * @param message GetMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IGetMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMetadataImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.GetMetadataImportRequest;

                    /**
                     * Decodes a GetMetadataImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.GetMetadataImportRequest;

                    /**
                     * Verifies a GetMetadataImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMetadataImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMetadataImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.GetMetadataImportRequest;

                    /**
                     * Creates a plain object from a GetMetadataImportRequest message. Also converts values to other types if specified.
                     * @param message GetMetadataImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.GetMetadataImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMetadataImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateMetadataImportRequest. */
                interface ICreateMetadataImportRequest {

                    /** CreateMetadataImportRequest parent */
                    parent?: (string|null);

                    /** CreateMetadataImportRequest metadataImportId */
                    metadataImportId?: (string|null);

                    /** CreateMetadataImportRequest metadataImport */
                    metadataImport?: (google.cloud.metastore.v1alpha.IMetadataImport|null);

                    /** CreateMetadataImportRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateMetadataImportRequest. */
                class CreateMetadataImportRequest implements ICreateMetadataImportRequest {

                    /**
                     * Constructs a new CreateMetadataImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.ICreateMetadataImportRequest);

                    /** CreateMetadataImportRequest parent. */
                    public parent: string;

                    /** CreateMetadataImportRequest metadataImportId. */
                    public metadataImportId: string;

                    /** CreateMetadataImportRequest metadataImport. */
                    public metadataImport?: (google.cloud.metastore.v1alpha.IMetadataImport|null);

                    /** CreateMetadataImportRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateMetadataImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateMetadataImportRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.ICreateMetadataImportRequest): google.cloud.metastore.v1alpha.CreateMetadataImportRequest;

                    /**
                     * Encodes the specified CreateMetadataImportRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.CreateMetadataImportRequest.verify|verify} messages.
                     * @param message CreateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.ICreateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateMetadataImportRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.CreateMetadataImportRequest.verify|verify} messages.
                     * @param message CreateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.ICreateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateMetadataImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.CreateMetadataImportRequest;

                    /**
                     * Decodes a CreateMetadataImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.CreateMetadataImportRequest;

                    /**
                     * Verifies a CreateMetadataImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateMetadataImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateMetadataImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.CreateMetadataImportRequest;

                    /**
                     * Creates a plain object from a CreateMetadataImportRequest message. Also converts values to other types if specified.
                     * @param message CreateMetadataImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.CreateMetadataImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateMetadataImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateMetadataImportRequest. */
                interface IUpdateMetadataImportRequest {

                    /** UpdateMetadataImportRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMetadataImportRequest metadataImport */
                    metadataImport?: (google.cloud.metastore.v1alpha.IMetadataImport|null);

                    /** UpdateMetadataImportRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateMetadataImportRequest. */
                class UpdateMetadataImportRequest implements IUpdateMetadataImportRequest {

                    /**
                     * Constructs a new UpdateMetadataImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IUpdateMetadataImportRequest);

                    /** UpdateMetadataImportRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMetadataImportRequest metadataImport. */
                    public metadataImport?: (google.cloud.metastore.v1alpha.IMetadataImport|null);

                    /** UpdateMetadataImportRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateMetadataImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateMetadataImportRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IUpdateMetadataImportRequest): google.cloud.metastore.v1alpha.UpdateMetadataImportRequest;

                    /**
                     * Encodes the specified UpdateMetadataImportRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.UpdateMetadataImportRequest.verify|verify} messages.
                     * @param message UpdateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IUpdateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateMetadataImportRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.UpdateMetadataImportRequest.verify|verify} messages.
                     * @param message UpdateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IUpdateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateMetadataImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.UpdateMetadataImportRequest;

                    /**
                     * Decodes an UpdateMetadataImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.UpdateMetadataImportRequest;

                    /**
                     * Verifies an UpdateMetadataImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateMetadataImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateMetadataImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.UpdateMetadataImportRequest;

                    /**
                     * Creates a plain object from an UpdateMetadataImportRequest message. Also converts values to other types if specified.
                     * @param message UpdateMetadataImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.UpdateMetadataImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateMetadataImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBackupsRequest. */
                interface IListBackupsRequest {

                    /** ListBackupsRequest parent */
                    parent?: (string|null);

                    /** ListBackupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBackupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBackupsRequest filter */
                    filter?: (string|null);

                    /** ListBackupsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListBackupsRequest. */
                class ListBackupsRequest implements IListBackupsRequest {

                    /**
                     * Constructs a new ListBackupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IListBackupsRequest);

                    /** ListBackupsRequest parent. */
                    public parent: string;

                    /** ListBackupsRequest pageSize. */
                    public pageSize: number;

                    /** ListBackupsRequest pageToken. */
                    public pageToken: string;

                    /** ListBackupsRequest filter. */
                    public filter: string;

                    /** ListBackupsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListBackupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IListBackupsRequest): google.cloud.metastore.v1alpha.ListBackupsRequest;

                    /**
                     * Encodes the specified ListBackupsRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.ListBackupsRequest;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.ListBackupsRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.ListBackupsRequest;

                    /**
                     * Creates a plain object from a ListBackupsRequest message. Also converts values to other types if specified.
                     * @param message ListBackupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.ListBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBackupsResponse. */
                interface IListBackupsResponse {

                    /** ListBackupsResponse backups */
                    backups?: (google.cloud.metastore.v1alpha.IBackup[]|null);

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
                    constructor(properties?: google.cloud.metastore.v1alpha.IListBackupsResponse);

                    /** ListBackupsResponse backups. */
                    public backups: google.cloud.metastore.v1alpha.IBackup[];

                    /** ListBackupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListBackupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBackupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsResponse instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IListBackupsResponse): google.cloud.metastore.v1alpha.ListBackupsResponse;

                    /**
                     * Encodes the specified ListBackupsResponse message. Does not implicitly {@link google.cloud.metastore.v1alpha.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsResponse message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.ListBackupsResponse;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.ListBackupsResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.ListBackupsResponse;

                    /**
                     * Creates a plain object from a ListBackupsResponse message. Also converts values to other types if specified.
                     * @param message ListBackupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.ListBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: google.cloud.metastore.v1alpha.IGetBackupRequest);

                    /** GetBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IGetBackupRequest): google.cloud.metastore.v1alpha.GetBackupRequest;

                    /**
                     * Encodes the specified GetBackupRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.GetBackupRequest;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.GetBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.GetBackupRequest;

                    /**
                     * Creates a plain object from a GetBackupRequest message. Also converts values to other types if specified.
                     * @param message GetBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.GetBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateBackupRequest. */
                interface ICreateBackupRequest {

                    /** CreateBackupRequest parent */
                    parent?: (string|null);

                    /** CreateBackupRequest backupId */
                    backupId?: (string|null);

                    /** CreateBackupRequest backup */
                    backup?: (google.cloud.metastore.v1alpha.IBackup|null);

                    /** CreateBackupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateBackupRequest. */
                class CreateBackupRequest implements ICreateBackupRequest {

                    /**
                     * Constructs a new CreateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.ICreateBackupRequest);

                    /** CreateBackupRequest parent. */
                    public parent: string;

                    /** CreateBackupRequest backupId. */
                    public backupId: string;

                    /** CreateBackupRequest backup. */
                    public backup?: (google.cloud.metastore.v1alpha.IBackup|null);

                    /** CreateBackupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.ICreateBackupRequest): google.cloud.metastore.v1alpha.CreateBackupRequest;

                    /**
                     * Encodes the specified CreateBackupRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.CreateBackupRequest;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.CreateBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.CreateBackupRequest;

                    /**
                     * Creates a plain object from a CreateBackupRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.CreateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteBackupRequest. */
                interface IDeleteBackupRequest {

                    /** DeleteBackupRequest name */
                    name?: (string|null);

                    /** DeleteBackupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteBackupRequest. */
                class DeleteBackupRequest implements IDeleteBackupRequest {

                    /**
                     * Constructs a new DeleteBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IDeleteBackupRequest);

                    /** DeleteBackupRequest name. */
                    public name: string;

                    /** DeleteBackupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IDeleteBackupRequest): google.cloud.metastore.v1alpha.DeleteBackupRequest;

                    /**
                     * Encodes the specified DeleteBackupRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.DeleteBackupRequest;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.DeleteBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.DeleteBackupRequest;

                    /**
                     * Creates a plain object from a DeleteBackupRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.DeleteBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportMetadataRequest. */
                interface IExportMetadataRequest {

                    /** ExportMetadataRequest destinationGcsFolder */
                    destinationGcsFolder?: (string|null);

                    /** ExportMetadataRequest service */
                    service?: (string|null);

                    /** ExportMetadataRequest requestId */
                    requestId?: (string|null);

                    /** ExportMetadataRequest databaseDumpType */
                    databaseDumpType?: (google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type|null);
                }

                /** Represents an ExportMetadataRequest. */
                class ExportMetadataRequest implements IExportMetadataRequest {

                    /**
                     * Constructs a new ExportMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IExportMetadataRequest);

                    /** ExportMetadataRequest destinationGcsFolder. */
                    public destinationGcsFolder?: (string|null);

                    /** ExportMetadataRequest service. */
                    public service: string;

                    /** ExportMetadataRequest requestId. */
                    public requestId: string;

                    /** ExportMetadataRequest databaseDumpType. */
                    public databaseDumpType: (google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1alpha.DatabaseDumpSpec.Type);

                    /** ExportMetadataRequest destination. */
                    public destination?: "destinationGcsFolder";

                    /**
                     * Creates a new ExportMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportMetadataRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IExportMetadataRequest): google.cloud.metastore.v1alpha.ExportMetadataRequest;

                    /**
                     * Encodes the specified ExportMetadataRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.ExportMetadataRequest.verify|verify} messages.
                     * @param message ExportMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IExportMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportMetadataRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.ExportMetadataRequest.verify|verify} messages.
                     * @param message ExportMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IExportMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.ExportMetadataRequest;

                    /**
                     * Decodes an ExportMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.ExportMetadataRequest;

                    /**
                     * Verifies an ExportMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.ExportMetadataRequest;

                    /**
                     * Creates a plain object from an ExportMetadataRequest message. Also converts values to other types if specified.
                     * @param message ExportMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.ExportMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RestoreServiceRequest. */
                interface IRestoreServiceRequest {

                    /** RestoreServiceRequest service */
                    service?: (string|null);

                    /** RestoreServiceRequest backup */
                    backup?: (string|null);

                    /** RestoreServiceRequest restoreType */
                    restoreType?: (google.cloud.metastore.v1alpha.Restore.RestoreType|keyof typeof google.cloud.metastore.v1alpha.Restore.RestoreType|null);

                    /** RestoreServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a RestoreServiceRequest. */
                class RestoreServiceRequest implements IRestoreServiceRequest {

                    /**
                     * Constructs a new RestoreServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IRestoreServiceRequest);

                    /** RestoreServiceRequest service. */
                    public service: string;

                    /** RestoreServiceRequest backup. */
                    public backup: string;

                    /** RestoreServiceRequest restoreType. */
                    public restoreType: (google.cloud.metastore.v1alpha.Restore.RestoreType|keyof typeof google.cloud.metastore.v1alpha.Restore.RestoreType);

                    /** RestoreServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new RestoreServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IRestoreServiceRequest): google.cloud.metastore.v1alpha.RestoreServiceRequest;

                    /**
                     * Encodes the specified RestoreServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1alpha.RestoreServiceRequest.verify|verify} messages.
                     * @param message RestoreServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IRestoreServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.RestoreServiceRequest.verify|verify} messages.
                     * @param message RestoreServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IRestoreServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.RestoreServiceRequest;

                    /**
                     * Decodes a RestoreServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.RestoreServiceRequest;

                    /**
                     * Verifies a RestoreServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.RestoreServiceRequest;

                    /**
                     * Creates a plain object from a RestoreServiceRequest message. Also converts values to other types if specified.
                     * @param message RestoreServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.RestoreServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreServiceRequest to JSON.
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
                    constructor(properties?: google.cloud.metastore.v1alpha.IOperationMetadata);

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
                    public static create(properties?: google.cloud.metastore.v1alpha.IOperationMetadata): google.cloud.metastore.v1alpha.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.metastore.v1alpha.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LocationMetadata. */
                interface ILocationMetadata {

                    /** LocationMetadata supportedHiveMetastoreVersions */
                    supportedHiveMetastoreVersions?: (google.cloud.metastore.v1alpha.LocationMetadata.IHiveMetastoreVersion[]|null);
                }

                /** Represents a LocationMetadata. */
                class LocationMetadata implements ILocationMetadata {

                    /**
                     * Constructs a new LocationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.ILocationMetadata);

                    /** LocationMetadata supportedHiveMetastoreVersions. */
                    public supportedHiveMetastoreVersions: google.cloud.metastore.v1alpha.LocationMetadata.IHiveMetastoreVersion[];

                    /**
                     * Creates a new LocationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationMetadata instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.ILocationMetadata): google.cloud.metastore.v1alpha.LocationMetadata;

                    /**
                     * Encodes the specified LocationMetadata message. Does not implicitly {@link google.cloud.metastore.v1alpha.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationMetadata message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.LocationMetadata;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.LocationMetadata;

                    /**
                     * Verifies a LocationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.LocationMetadata;

                    /**
                     * Creates a plain object from a LocationMetadata message. Also converts values to other types if specified.
                     * @param message LocationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.LocationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LocationMetadata {

                    /** Properties of a HiveMetastoreVersion. */
                    interface IHiveMetastoreVersion {

                        /** HiveMetastoreVersion version */
                        version?: (string|null);

                        /** HiveMetastoreVersion isDefault */
                        isDefault?: (boolean|null);
                    }

                    /** Represents a HiveMetastoreVersion. */
                    class HiveMetastoreVersion implements IHiveMetastoreVersion {

                        /**
                         * Constructs a new HiveMetastoreVersion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.metastore.v1alpha.LocationMetadata.IHiveMetastoreVersion);

                        /** HiveMetastoreVersion version. */
                        public version: string;

                        /** HiveMetastoreVersion isDefault. */
                        public isDefault: boolean;

                        /**
                         * Creates a new HiveMetastoreVersion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HiveMetastoreVersion instance
                         */
                        public static create(properties?: google.cloud.metastore.v1alpha.LocationMetadata.IHiveMetastoreVersion): google.cloud.metastore.v1alpha.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Encodes the specified HiveMetastoreVersion message. Does not implicitly {@link google.cloud.metastore.v1alpha.LocationMetadata.HiveMetastoreVersion.verify|verify} messages.
                         * @param message HiveMetastoreVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.metastore.v1alpha.LocationMetadata.IHiveMetastoreVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HiveMetastoreVersion message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.LocationMetadata.HiveMetastoreVersion.verify|verify} messages.
                         * @param message HiveMetastoreVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.metastore.v1alpha.LocationMetadata.IHiveMetastoreVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HiveMetastoreVersion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HiveMetastoreVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Decodes a HiveMetastoreVersion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HiveMetastoreVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Verifies a HiveMetastoreVersion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HiveMetastoreVersion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HiveMetastoreVersion
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Creates a plain object from a HiveMetastoreVersion message. Also converts values to other types if specified.
                         * @param message HiveMetastoreVersion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.metastore.v1alpha.LocationMetadata.HiveMetastoreVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HiveMetastoreVersion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a DatabaseDumpSpec. */
                interface IDatabaseDumpSpec {
                }

                /** Represents a DatabaseDumpSpec. */
                class DatabaseDumpSpec implements IDatabaseDumpSpec {

                    /**
                     * Constructs a new DatabaseDumpSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1alpha.IDatabaseDumpSpec);

                    /**
                     * Creates a new DatabaseDumpSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabaseDumpSpec instance
                     */
                    public static create(properties?: google.cloud.metastore.v1alpha.IDatabaseDumpSpec): google.cloud.metastore.v1alpha.DatabaseDumpSpec;

                    /**
                     * Encodes the specified DatabaseDumpSpec message. Does not implicitly {@link google.cloud.metastore.v1alpha.DatabaseDumpSpec.verify|verify} messages.
                     * @param message DatabaseDumpSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1alpha.IDatabaseDumpSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabaseDumpSpec message, length delimited. Does not implicitly {@link google.cloud.metastore.v1alpha.DatabaseDumpSpec.verify|verify} messages.
                     * @param message DatabaseDumpSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1alpha.IDatabaseDumpSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabaseDumpSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabaseDumpSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1alpha.DatabaseDumpSpec;

                    /**
                     * Decodes a DatabaseDumpSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabaseDumpSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1alpha.DatabaseDumpSpec;

                    /**
                     * Verifies a DatabaseDumpSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabaseDumpSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabaseDumpSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1alpha.DatabaseDumpSpec;

                    /**
                     * Creates a plain object from a DatabaseDumpSpec message. Also converts values to other types if specified.
                     * @param message DatabaseDumpSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1alpha.DatabaseDumpSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabaseDumpSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DatabaseDumpSpec {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        MYSQL = 1
                    }
                }
            }

            /** Namespace v1beta. */
            namespace v1beta {

                /** Represents a DataprocMetastore */
                class DataprocMetastore extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new DataprocMetastore service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new DataprocMetastore service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DataprocMetastore;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListServicesResponse
                     */
                    public listServices(request: google.cloud.metastore.v1beta.IListServicesRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.ListServicesCallback): void;

                    /**
                     * Calls ListServices.
                     * @param request ListServicesRequest message or plain object
                     * @returns Promise
                     */
                    public listServices(request: google.cloud.metastore.v1beta.IListServicesRequest): Promise<google.cloud.metastore.v1beta.ListServicesResponse>;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Service
                     */
                    public getService(request: google.cloud.metastore.v1beta.IGetServiceRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.GetServiceCallback): void;

                    /**
                     * Calls GetService.
                     * @param request GetServiceRequest message or plain object
                     * @returns Promise
                     */
                    public getService(request: google.cloud.metastore.v1beta.IGetServiceRequest): Promise<google.cloud.metastore.v1beta.Service>;

                    /**
                     * Calls CreateService.
                     * @param request CreateServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createService(request: google.cloud.metastore.v1beta.ICreateServiceRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.CreateServiceCallback): void;

                    /**
                     * Calls CreateService.
                     * @param request CreateServiceRequest message or plain object
                     * @returns Promise
                     */
                    public createService(request: google.cloud.metastore.v1beta.ICreateServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateService.
                     * @param request UpdateServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateService(request: google.cloud.metastore.v1beta.IUpdateServiceRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.UpdateServiceCallback): void;

                    /**
                     * Calls UpdateService.
                     * @param request UpdateServiceRequest message or plain object
                     * @returns Promise
                     */
                    public updateService(request: google.cloud.metastore.v1beta.IUpdateServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteService.
                     * @param request DeleteServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteService(request: google.cloud.metastore.v1beta.IDeleteServiceRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.DeleteServiceCallback): void;

                    /**
                     * Calls DeleteService.
                     * @param request DeleteServiceRequest message or plain object
                     * @returns Promise
                     */
                    public deleteService(request: google.cloud.metastore.v1beta.IDeleteServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListMetadataImports.
                     * @param request ListMetadataImportsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListMetadataImportsResponse
                     */
                    public listMetadataImports(request: google.cloud.metastore.v1beta.IListMetadataImportsRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.ListMetadataImportsCallback): void;

                    /**
                     * Calls ListMetadataImports.
                     * @param request ListMetadataImportsRequest message or plain object
                     * @returns Promise
                     */
                    public listMetadataImports(request: google.cloud.metastore.v1beta.IListMetadataImportsRequest): Promise<google.cloud.metastore.v1beta.ListMetadataImportsResponse>;

                    /**
                     * Calls GetMetadataImport.
                     * @param request GetMetadataImportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and MetadataImport
                     */
                    public getMetadataImport(request: google.cloud.metastore.v1beta.IGetMetadataImportRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.GetMetadataImportCallback): void;

                    /**
                     * Calls GetMetadataImport.
                     * @param request GetMetadataImportRequest message or plain object
                     * @returns Promise
                     */
                    public getMetadataImport(request: google.cloud.metastore.v1beta.IGetMetadataImportRequest): Promise<google.cloud.metastore.v1beta.MetadataImport>;

                    /**
                     * Calls CreateMetadataImport.
                     * @param request CreateMetadataImportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createMetadataImport(request: google.cloud.metastore.v1beta.ICreateMetadataImportRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.CreateMetadataImportCallback): void;

                    /**
                     * Calls CreateMetadataImport.
                     * @param request CreateMetadataImportRequest message or plain object
                     * @returns Promise
                     */
                    public createMetadataImport(request: google.cloud.metastore.v1beta.ICreateMetadataImportRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateMetadataImport.
                     * @param request UpdateMetadataImportRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateMetadataImport(request: google.cloud.metastore.v1beta.IUpdateMetadataImportRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.UpdateMetadataImportCallback): void;

                    /**
                     * Calls UpdateMetadataImport.
                     * @param request UpdateMetadataImportRequest message or plain object
                     * @returns Promise
                     */
                    public updateMetadataImport(request: google.cloud.metastore.v1beta.IUpdateMetadataImportRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ExportMetadata.
                     * @param request ExportMetadataRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportMetadata(request: google.cloud.metastore.v1beta.IExportMetadataRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.ExportMetadataCallback): void;

                    /**
                     * Calls ExportMetadata.
                     * @param request ExportMetadataRequest message or plain object
                     * @returns Promise
                     */
                    public exportMetadata(request: google.cloud.metastore.v1beta.IExportMetadataRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RestoreService.
                     * @param request RestoreServiceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restoreService(request: google.cloud.metastore.v1beta.IRestoreServiceRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.RestoreServiceCallback): void;

                    /**
                     * Calls RestoreService.
                     * @param request RestoreServiceRequest message or plain object
                     * @returns Promise
                     */
                    public restoreService(request: google.cloud.metastore.v1beta.IRestoreServiceRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupsResponse
                     */
                    public listBackups(request: google.cloud.metastore.v1beta.IListBackupsRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.ListBackupsCallback): void;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @returns Promise
                     */
                    public listBackups(request: google.cloud.metastore.v1beta.IListBackupsRequest): Promise<google.cloud.metastore.v1beta.ListBackupsResponse>;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Backup
                     */
                    public getBackup(request: google.cloud.metastore.v1beta.IGetBackupRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.GetBackupCallback): void;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @returns Promise
                     */
                    public getBackup(request: google.cloud.metastore.v1beta.IGetBackupRequest): Promise<google.cloud.metastore.v1beta.Backup>;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBackup(request: google.cloud.metastore.v1beta.ICreateBackupRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.CreateBackupCallback): void;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public createBackup(request: google.cloud.metastore.v1beta.ICreateBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBackup(request: google.cloud.metastore.v1beta.IDeleteBackupRequest, callback: google.cloud.metastore.v1beta.DataprocMetastore.DeleteBackupCallback): void;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackup(request: google.cloud.metastore.v1beta.IDeleteBackupRequest): Promise<google.longrunning.Operation>;
                }

                namespace DataprocMetastore {

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#listServices}.
                     * @param error Error, if any
                     * @param [response] ListServicesResponse
                     */
                    type ListServicesCallback = (error: (Error|null), response?: google.cloud.metastore.v1beta.ListServicesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#getService}.
                     * @param error Error, if any
                     * @param [response] Service
                     */
                    type GetServiceCallback = (error: (Error|null), response?: google.cloud.metastore.v1beta.Service) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#createService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#updateService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#deleteService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#listMetadataImports}.
                     * @param error Error, if any
                     * @param [response] ListMetadataImportsResponse
                     */
                    type ListMetadataImportsCallback = (error: (Error|null), response?: google.cloud.metastore.v1beta.ListMetadataImportsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#getMetadataImport}.
                     * @param error Error, if any
                     * @param [response] MetadataImport
                     */
                    type GetMetadataImportCallback = (error: (Error|null), response?: google.cloud.metastore.v1beta.MetadataImport) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#createMetadataImport}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateMetadataImportCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#updateMetadataImport}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateMetadataImportCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#exportMetadata}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportMetadataCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#restoreService}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestoreServiceCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#listBackups}.
                     * @param error Error, if any
                     * @param [response] ListBackupsResponse
                     */
                    type ListBackupsCallback = (error: (Error|null), response?: google.cloud.metastore.v1beta.ListBackupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#getBackup}.
                     * @param error Error, if any
                     * @param [response] Backup
                     */
                    type GetBackupCallback = (error: (Error|null), response?: google.cloud.metastore.v1beta.Backup) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#createBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.metastore.v1beta.DataprocMetastore#deleteBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a Service. */
                interface IService {

                    /** Service hiveMetastoreConfig */
                    hiveMetastoreConfig?: (google.cloud.metastore.v1beta.IHiveMetastoreConfig|null);

                    /** Service name */
                    name?: (string|null);

                    /** Service createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Service updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Service labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Service network */
                    network?: (string|null);

                    /** Service endpointUri */
                    endpointUri?: (string|null);

                    /** Service port */
                    port?: (number|null);

                    /** Service state */
                    state?: (google.cloud.metastore.v1beta.Service.State|keyof typeof google.cloud.metastore.v1beta.Service.State|null);

                    /** Service stateMessage */
                    stateMessage?: (string|null);

                    /** Service artifactGcsUri */
                    artifactGcsUri?: (string|null);

                    /** Service tier */
                    tier?: (google.cloud.metastore.v1beta.Service.Tier|keyof typeof google.cloud.metastore.v1beta.Service.Tier|null);

                    /** Service metadataIntegration */
                    metadataIntegration?: (google.cloud.metastore.v1beta.IMetadataIntegration|null);

                    /** Service maintenanceWindow */
                    maintenanceWindow?: (google.cloud.metastore.v1beta.IMaintenanceWindow|null);

                    /** Service uid */
                    uid?: (string|null);

                    /** Service metadataManagementActivity */
                    metadataManagementActivity?: (google.cloud.metastore.v1beta.IMetadataManagementActivity|null);

                    /** Service releaseChannel */
                    releaseChannel?: (google.cloud.metastore.v1beta.Service.ReleaseChannel|keyof typeof google.cloud.metastore.v1beta.Service.ReleaseChannel|null);
                }

                /** Represents a Service. */
                class Service implements IService {

                    /**
                     * Constructs a new Service.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IService);

                    /** Service hiveMetastoreConfig. */
                    public hiveMetastoreConfig?: (google.cloud.metastore.v1beta.IHiveMetastoreConfig|null);

                    /** Service name. */
                    public name: string;

                    /** Service createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Service updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Service labels. */
                    public labels: { [k: string]: string };

                    /** Service network. */
                    public network: string;

                    /** Service endpointUri. */
                    public endpointUri: string;

                    /** Service port. */
                    public port: number;

                    /** Service state. */
                    public state: (google.cloud.metastore.v1beta.Service.State|keyof typeof google.cloud.metastore.v1beta.Service.State);

                    /** Service stateMessage. */
                    public stateMessage: string;

                    /** Service artifactGcsUri. */
                    public artifactGcsUri: string;

                    /** Service tier. */
                    public tier: (google.cloud.metastore.v1beta.Service.Tier|keyof typeof google.cloud.metastore.v1beta.Service.Tier);

                    /** Service metadataIntegration. */
                    public metadataIntegration?: (google.cloud.metastore.v1beta.IMetadataIntegration|null);

                    /** Service maintenanceWindow. */
                    public maintenanceWindow?: (google.cloud.metastore.v1beta.IMaintenanceWindow|null);

                    /** Service uid. */
                    public uid: string;

                    /** Service metadataManagementActivity. */
                    public metadataManagementActivity?: (google.cloud.metastore.v1beta.IMetadataManagementActivity|null);

                    /** Service releaseChannel. */
                    public releaseChannel: (google.cloud.metastore.v1beta.Service.ReleaseChannel|keyof typeof google.cloud.metastore.v1beta.Service.ReleaseChannel);

                    /** Service metastoreConfig. */
                    public metastoreConfig?: "hiveMetastoreConfig";

                    /**
                     * Creates a new Service instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Service instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IService): google.cloud.metastore.v1beta.Service;

                    /**
                     * Encodes the specified Service message. Does not implicitly {@link google.cloud.metastore.v1beta.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Service message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.Service.verify|verify} messages.
                     * @param message Service message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IService, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Service message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.Service;

                    /**
                     * Decodes a Service message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Service
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.Service;

                    /**
                     * Verifies a Service message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Service message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Service
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.Service;

                    /**
                     * Creates a plain object from a Service message. Also converts values to other types if specified.
                     * @param message Service
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Service to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Service {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        SUSPENDING = 3,
                        SUSPENDED = 4,
                        UPDATING = 5,
                        DELETING = 6,
                        ERROR = 7
                    }

                    /** Tier enum. */
                    enum Tier {
                        TIER_UNSPECIFIED = 0,
                        DEVELOPER = 1,
                        ENTERPRISE = 3
                    }

                    /** ReleaseChannel enum. */
                    enum ReleaseChannel {
                        RELEASE_CHANNEL_UNSPECIFIED = 0,
                        CANARY = 1,
                        STABLE = 2
                    }
                }

                /** Properties of a MetadataIntegration. */
                interface IMetadataIntegration {

                    /** MetadataIntegration dataCatalogConfig */
                    dataCatalogConfig?: (google.cloud.metastore.v1beta.IDataCatalogConfig|null);
                }

                /** Represents a MetadataIntegration. */
                class MetadataIntegration implements IMetadataIntegration {

                    /**
                     * Constructs a new MetadataIntegration.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IMetadataIntegration);

                    /** MetadataIntegration dataCatalogConfig. */
                    public dataCatalogConfig?: (google.cloud.metastore.v1beta.IDataCatalogConfig|null);

                    /**
                     * Creates a new MetadataIntegration instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataIntegration instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IMetadataIntegration): google.cloud.metastore.v1beta.MetadataIntegration;

                    /**
                     * Encodes the specified MetadataIntegration message. Does not implicitly {@link google.cloud.metastore.v1beta.MetadataIntegration.verify|verify} messages.
                     * @param message MetadataIntegration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IMetadataIntegration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataIntegration message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.MetadataIntegration.verify|verify} messages.
                     * @param message MetadataIntegration message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IMetadataIntegration, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataIntegration message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataIntegration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.MetadataIntegration;

                    /**
                     * Decodes a MetadataIntegration message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataIntegration
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.MetadataIntegration;

                    /**
                     * Verifies a MetadataIntegration message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataIntegration message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataIntegration
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.MetadataIntegration;

                    /**
                     * Creates a plain object from a MetadataIntegration message. Also converts values to other types if specified.
                     * @param message MetadataIntegration
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.MetadataIntegration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataIntegration to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DataCatalogConfig. */
                interface IDataCatalogConfig {

                    /** DataCatalogConfig enabled */
                    enabled?: (boolean|null);
                }

                /** Represents a DataCatalogConfig. */
                class DataCatalogConfig implements IDataCatalogConfig {

                    /**
                     * Constructs a new DataCatalogConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IDataCatalogConfig);

                    /** DataCatalogConfig enabled. */
                    public enabled: boolean;

                    /**
                     * Creates a new DataCatalogConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataCatalogConfig instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IDataCatalogConfig): google.cloud.metastore.v1beta.DataCatalogConfig;

                    /**
                     * Encodes the specified DataCatalogConfig message. Does not implicitly {@link google.cloud.metastore.v1beta.DataCatalogConfig.verify|verify} messages.
                     * @param message DataCatalogConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IDataCatalogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataCatalogConfig message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.DataCatalogConfig.verify|verify} messages.
                     * @param message DataCatalogConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IDataCatalogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataCatalogConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataCatalogConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.DataCatalogConfig;

                    /**
                     * Decodes a DataCatalogConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataCatalogConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.DataCatalogConfig;

                    /**
                     * Verifies a DataCatalogConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataCatalogConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataCatalogConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.DataCatalogConfig;

                    /**
                     * Creates a plain object from a DataCatalogConfig message. Also converts values to other types if specified.
                     * @param message DataCatalogConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.DataCatalogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataCatalogConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MaintenanceWindow. */
                interface IMaintenanceWindow {

                    /** MaintenanceWindow hourOfDay */
                    hourOfDay?: (google.protobuf.IInt32Value|null);

                    /** MaintenanceWindow dayOfWeek */
                    dayOfWeek?: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek|null);
                }

                /** Represents a MaintenanceWindow. */
                class MaintenanceWindow implements IMaintenanceWindow {

                    /**
                     * Constructs a new MaintenanceWindow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IMaintenanceWindow);

                    /** MaintenanceWindow hourOfDay. */
                    public hourOfDay?: (google.protobuf.IInt32Value|null);

                    /** MaintenanceWindow dayOfWeek. */
                    public dayOfWeek: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek);

                    /**
                     * Creates a new MaintenanceWindow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaintenanceWindow instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IMaintenanceWindow): google.cloud.metastore.v1beta.MaintenanceWindow;

                    /**
                     * Encodes the specified MaintenanceWindow message. Does not implicitly {@link google.cloud.metastore.v1beta.MaintenanceWindow.verify|verify} messages.
                     * @param message MaintenanceWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaintenanceWindow message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.MaintenanceWindow.verify|verify} messages.
                     * @param message MaintenanceWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaintenanceWindow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaintenanceWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.MaintenanceWindow;

                    /**
                     * Decodes a MaintenanceWindow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaintenanceWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.MaintenanceWindow;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.MaintenanceWindow;

                    /**
                     * Creates a plain object from a MaintenanceWindow message. Also converts values to other types if specified.
                     * @param message MaintenanceWindow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.MaintenanceWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaintenanceWindow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HiveMetastoreConfig. */
                interface IHiveMetastoreConfig {

                    /** HiveMetastoreConfig version */
                    version?: (string|null);

                    /** HiveMetastoreConfig configOverrides */
                    configOverrides?: ({ [k: string]: string }|null);

                    /** HiveMetastoreConfig kerberosConfig */
                    kerberosConfig?: (google.cloud.metastore.v1beta.IKerberosConfig|null);
                }

                /** Represents a HiveMetastoreConfig. */
                class HiveMetastoreConfig implements IHiveMetastoreConfig {

                    /**
                     * Constructs a new HiveMetastoreConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IHiveMetastoreConfig);

                    /** HiveMetastoreConfig version. */
                    public version: string;

                    /** HiveMetastoreConfig configOverrides. */
                    public configOverrides: { [k: string]: string };

                    /** HiveMetastoreConfig kerberosConfig. */
                    public kerberosConfig?: (google.cloud.metastore.v1beta.IKerberosConfig|null);

                    /**
                     * Creates a new HiveMetastoreConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HiveMetastoreConfig instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IHiveMetastoreConfig): google.cloud.metastore.v1beta.HiveMetastoreConfig;

                    /**
                     * Encodes the specified HiveMetastoreConfig message. Does not implicitly {@link google.cloud.metastore.v1beta.HiveMetastoreConfig.verify|verify} messages.
                     * @param message HiveMetastoreConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IHiveMetastoreConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HiveMetastoreConfig message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.HiveMetastoreConfig.verify|verify} messages.
                     * @param message HiveMetastoreConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IHiveMetastoreConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HiveMetastoreConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HiveMetastoreConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.HiveMetastoreConfig;

                    /**
                     * Decodes a HiveMetastoreConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HiveMetastoreConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.HiveMetastoreConfig;

                    /**
                     * Verifies a HiveMetastoreConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HiveMetastoreConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HiveMetastoreConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.HiveMetastoreConfig;

                    /**
                     * Creates a plain object from a HiveMetastoreConfig message. Also converts values to other types if specified.
                     * @param message HiveMetastoreConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.HiveMetastoreConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HiveMetastoreConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a KerberosConfig. */
                interface IKerberosConfig {

                    /** KerberosConfig keytab */
                    keytab?: (google.cloud.metastore.v1beta.ISecret|null);

                    /** KerberosConfig principal */
                    principal?: (string|null);

                    /** KerberosConfig krb5ConfigGcsUri */
                    krb5ConfigGcsUri?: (string|null);
                }

                /** Represents a KerberosConfig. */
                class KerberosConfig implements IKerberosConfig {

                    /**
                     * Constructs a new KerberosConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IKerberosConfig);

                    /** KerberosConfig keytab. */
                    public keytab?: (google.cloud.metastore.v1beta.ISecret|null);

                    /** KerberosConfig principal. */
                    public principal: string;

                    /** KerberosConfig krb5ConfigGcsUri. */
                    public krb5ConfigGcsUri: string;

                    /**
                     * Creates a new KerberosConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns KerberosConfig instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IKerberosConfig): google.cloud.metastore.v1beta.KerberosConfig;

                    /**
                     * Encodes the specified KerberosConfig message. Does not implicitly {@link google.cloud.metastore.v1beta.KerberosConfig.verify|verify} messages.
                     * @param message KerberosConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IKerberosConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified KerberosConfig message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.KerberosConfig.verify|verify} messages.
                     * @param message KerberosConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IKerberosConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a KerberosConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns KerberosConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.KerberosConfig;

                    /**
                     * Decodes a KerberosConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns KerberosConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.KerberosConfig;

                    /**
                     * Verifies a KerberosConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a KerberosConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns KerberosConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.KerberosConfig;

                    /**
                     * Creates a plain object from a KerberosConfig message. Also converts values to other types if specified.
                     * @param message KerberosConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.KerberosConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this KerberosConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Secret. */
                interface ISecret {

                    /** Secret cloudSecret */
                    cloudSecret?: (string|null);
                }

                /** Represents a Secret. */
                class Secret implements ISecret {

                    /**
                     * Constructs a new Secret.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.ISecret);

                    /** Secret cloudSecret. */
                    public cloudSecret?: (string|null);

                    /** Secret value. */
                    public value?: "cloudSecret";

                    /**
                     * Creates a new Secret instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Secret instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.ISecret): google.cloud.metastore.v1beta.Secret;

                    /**
                     * Encodes the specified Secret message. Does not implicitly {@link google.cloud.metastore.v1beta.Secret.verify|verify} messages.
                     * @param message Secret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Secret message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.Secret.verify|verify} messages.
                     * @param message Secret message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.ISecret, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Secret message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Secret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.Secret;

                    /**
                     * Decodes a Secret message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Secret
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.Secret;

                    /**
                     * Verifies a Secret message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Secret message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Secret
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.Secret;

                    /**
                     * Creates a plain object from a Secret message. Also converts values to other types if specified.
                     * @param message Secret
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.Secret, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Secret to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetadataManagementActivity. */
                interface IMetadataManagementActivity {

                    /** MetadataManagementActivity metadataExports */
                    metadataExports?: (google.cloud.metastore.v1beta.IMetadataExport[]|null);

                    /** MetadataManagementActivity restores */
                    restores?: (google.cloud.metastore.v1beta.IRestore[]|null);
                }

                /** Represents a MetadataManagementActivity. */
                class MetadataManagementActivity implements IMetadataManagementActivity {

                    /**
                     * Constructs a new MetadataManagementActivity.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IMetadataManagementActivity);

                    /** MetadataManagementActivity metadataExports. */
                    public metadataExports: google.cloud.metastore.v1beta.IMetadataExport[];

                    /** MetadataManagementActivity restores. */
                    public restores: google.cloud.metastore.v1beta.IRestore[];

                    /**
                     * Creates a new MetadataManagementActivity instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataManagementActivity instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IMetadataManagementActivity): google.cloud.metastore.v1beta.MetadataManagementActivity;

                    /**
                     * Encodes the specified MetadataManagementActivity message. Does not implicitly {@link google.cloud.metastore.v1beta.MetadataManagementActivity.verify|verify} messages.
                     * @param message MetadataManagementActivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IMetadataManagementActivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataManagementActivity message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.MetadataManagementActivity.verify|verify} messages.
                     * @param message MetadataManagementActivity message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IMetadataManagementActivity, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataManagementActivity message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataManagementActivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.MetadataManagementActivity;

                    /**
                     * Decodes a MetadataManagementActivity message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataManagementActivity
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.MetadataManagementActivity;

                    /**
                     * Verifies a MetadataManagementActivity message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataManagementActivity message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataManagementActivity
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.MetadataManagementActivity;

                    /**
                     * Creates a plain object from a MetadataManagementActivity message. Also converts values to other types if specified.
                     * @param message MetadataManagementActivity
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.MetadataManagementActivity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataManagementActivity to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MetadataImport. */
                interface IMetadataImport {

                    /** MetadataImport databaseDump */
                    databaseDump?: (google.cloud.metastore.v1beta.MetadataImport.IDatabaseDump|null);

                    /** MetadataImport name */
                    name?: (string|null);

                    /** MetadataImport description */
                    description?: (string|null);

                    /** MetadataImport createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport state */
                    state?: (google.cloud.metastore.v1beta.MetadataImport.State|keyof typeof google.cloud.metastore.v1beta.MetadataImport.State|null);
                }

                /** Represents a MetadataImport. */
                class MetadataImport implements IMetadataImport {

                    /**
                     * Constructs a new MetadataImport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IMetadataImport);

                    /** MetadataImport databaseDump. */
                    public databaseDump?: (google.cloud.metastore.v1beta.MetadataImport.IDatabaseDump|null);

                    /** MetadataImport name. */
                    public name: string;

                    /** MetadataImport description. */
                    public description: string;

                    /** MetadataImport createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataImport state. */
                    public state: (google.cloud.metastore.v1beta.MetadataImport.State|keyof typeof google.cloud.metastore.v1beta.MetadataImport.State);

                    /** MetadataImport metadata. */
                    public metadata?: "databaseDump";

                    /**
                     * Creates a new MetadataImport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataImport instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IMetadataImport): google.cloud.metastore.v1beta.MetadataImport;

                    /**
                     * Encodes the specified MetadataImport message. Does not implicitly {@link google.cloud.metastore.v1beta.MetadataImport.verify|verify} messages.
                     * @param message MetadataImport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IMetadataImport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataImport message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.MetadataImport.verify|verify} messages.
                     * @param message MetadataImport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IMetadataImport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataImport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataImport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.MetadataImport;

                    /**
                     * Decodes a MetadataImport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataImport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.MetadataImport;

                    /**
                     * Verifies a MetadataImport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataImport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataImport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.MetadataImport;

                    /**
                     * Creates a plain object from a MetadataImport message. Also converts values to other types if specified.
                     * @param message MetadataImport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.MetadataImport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataImport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MetadataImport {

                    /** Properties of a DatabaseDump. */
                    interface IDatabaseDump {

                        /** DatabaseDump databaseType */
                        databaseType?: (google.cloud.metastore.v1beta.MetadataImport.DatabaseDump.DatabaseType|keyof typeof google.cloud.metastore.v1beta.MetadataImport.DatabaseDump.DatabaseType|null);

                        /** DatabaseDump gcsUri */
                        gcsUri?: (string|null);

                        /** DatabaseDump sourceDatabase */
                        sourceDatabase?: (string|null);

                        /** DatabaseDump type */
                        type?: (google.cloud.metastore.v1beta.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1beta.DatabaseDumpSpec.Type|null);
                    }

                    /** Represents a DatabaseDump. */
                    class DatabaseDump implements IDatabaseDump {

                        /**
                         * Constructs a new DatabaseDump.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.metastore.v1beta.MetadataImport.IDatabaseDump);

                        /** DatabaseDump databaseType. */
                        public databaseType: (google.cloud.metastore.v1beta.MetadataImport.DatabaseDump.DatabaseType|keyof typeof google.cloud.metastore.v1beta.MetadataImport.DatabaseDump.DatabaseType);

                        /** DatabaseDump gcsUri. */
                        public gcsUri: string;

                        /** DatabaseDump sourceDatabase. */
                        public sourceDatabase: string;

                        /** DatabaseDump type. */
                        public type: (google.cloud.metastore.v1beta.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1beta.DatabaseDumpSpec.Type);

                        /**
                         * Creates a new DatabaseDump instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DatabaseDump instance
                         */
                        public static create(properties?: google.cloud.metastore.v1beta.MetadataImport.IDatabaseDump): google.cloud.metastore.v1beta.MetadataImport.DatabaseDump;

                        /**
                         * Encodes the specified DatabaseDump message. Does not implicitly {@link google.cloud.metastore.v1beta.MetadataImport.DatabaseDump.verify|verify} messages.
                         * @param message DatabaseDump message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.metastore.v1beta.MetadataImport.IDatabaseDump, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DatabaseDump message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.MetadataImport.DatabaseDump.verify|verify} messages.
                         * @param message DatabaseDump message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.metastore.v1beta.MetadataImport.IDatabaseDump, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DatabaseDump message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DatabaseDump
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.MetadataImport.DatabaseDump;

                        /**
                         * Decodes a DatabaseDump message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DatabaseDump
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.MetadataImport.DatabaseDump;

                        /**
                         * Verifies a DatabaseDump message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DatabaseDump message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DatabaseDump
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.MetadataImport.DatabaseDump;

                        /**
                         * Creates a plain object from a DatabaseDump message. Also converts values to other types if specified.
                         * @param message DatabaseDump
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.metastore.v1beta.MetadataImport.DatabaseDump, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DatabaseDump to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace DatabaseDump {

                        /** DatabaseType enum. */
                        enum DatabaseType {
                            DATABASE_TYPE_UNSPECIFIED = 0,
                            MYSQL = 1
                        }
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        UPDATING = 3,
                        FAILED = 4
                    }
                }

                /** Properties of a MetadataExport. */
                interface IMetadataExport {

                    /** MetadataExport destinationGcsUri */
                    destinationGcsUri?: (string|null);

                    /** MetadataExport startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport state */
                    state?: (google.cloud.metastore.v1beta.MetadataExport.State|keyof typeof google.cloud.metastore.v1beta.MetadataExport.State|null);

                    /** MetadataExport databaseDumpType */
                    databaseDumpType?: (google.cloud.metastore.v1beta.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1beta.DatabaseDumpSpec.Type|null);
                }

                /** Represents a MetadataExport. */
                class MetadataExport implements IMetadataExport {

                    /**
                     * Constructs a new MetadataExport.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IMetadataExport);

                    /** MetadataExport destinationGcsUri. */
                    public destinationGcsUri?: (string|null);

                    /** MetadataExport startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** MetadataExport state. */
                    public state: (google.cloud.metastore.v1beta.MetadataExport.State|keyof typeof google.cloud.metastore.v1beta.MetadataExport.State);

                    /** MetadataExport databaseDumpType. */
                    public databaseDumpType: (google.cloud.metastore.v1beta.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1beta.DatabaseDumpSpec.Type);

                    /** MetadataExport destination. */
                    public destination?: "destinationGcsUri";

                    /**
                     * Creates a new MetadataExport instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MetadataExport instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IMetadataExport): google.cloud.metastore.v1beta.MetadataExport;

                    /**
                     * Encodes the specified MetadataExport message. Does not implicitly {@link google.cloud.metastore.v1beta.MetadataExport.verify|verify} messages.
                     * @param message MetadataExport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IMetadataExport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MetadataExport message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.MetadataExport.verify|verify} messages.
                     * @param message MetadataExport message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IMetadataExport, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MetadataExport message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MetadataExport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.MetadataExport;

                    /**
                     * Decodes a MetadataExport message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MetadataExport
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.MetadataExport;

                    /**
                     * Verifies a MetadataExport message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MetadataExport message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MetadataExport
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.MetadataExport;

                    /**
                     * Creates a plain object from a MetadataExport message. Also converts values to other types if specified.
                     * @param message MetadataExport
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.MetadataExport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MetadataExport to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace MetadataExport {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLED = 4
                    }
                }

                /** Properties of a Backup. */
                interface IBackup {

                    /** Backup name */
                    name?: (string|null);

                    /** Backup createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Backup state */
                    state?: (google.cloud.metastore.v1beta.Backup.State|keyof typeof google.cloud.metastore.v1beta.Backup.State|null);

                    /** Backup serviceRevision */
                    serviceRevision?: (google.cloud.metastore.v1beta.IService|null);

                    /** Backup description */
                    description?: (string|null);
                }

                /** Represents a Backup. */
                class Backup implements IBackup {

                    /**
                     * Constructs a new Backup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IBackup);

                    /** Backup name. */
                    public name: string;

                    /** Backup createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Backup state. */
                    public state: (google.cloud.metastore.v1beta.Backup.State|keyof typeof google.cloud.metastore.v1beta.Backup.State);

                    /** Backup serviceRevision. */
                    public serviceRevision?: (google.cloud.metastore.v1beta.IService|null);

                    /** Backup description. */
                    public description: string;

                    /**
                     * Creates a new Backup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Backup instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IBackup): google.cloud.metastore.v1beta.Backup;

                    /**
                     * Encodes the specified Backup message. Does not implicitly {@link google.cloud.metastore.v1beta.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Backup message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Backup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.Backup;

                    /**
                     * Decodes a Backup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.Backup;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.Backup;

                    /**
                     * Creates a plain object from a Backup message. Also converts values to other types if specified.
                     * @param message Backup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Backup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Backup {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        DELETING = 2,
                        ACTIVE = 3,
                        FAILED = 4
                    }
                }

                /** Properties of a Restore. */
                interface IRestore {

                    /** Restore startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Restore endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** Restore state */
                    state?: (google.cloud.metastore.v1beta.Restore.State|keyof typeof google.cloud.metastore.v1beta.Restore.State|null);

                    /** Restore backup */
                    backup?: (string|null);

                    /** Restore type */
                    type?: (google.cloud.metastore.v1beta.Restore.RestoreType|keyof typeof google.cloud.metastore.v1beta.Restore.RestoreType|null);

                    /** Restore details */
                    details?: (string|null);
                }

                /** Represents a Restore. */
                class Restore implements IRestore {

                    /**
                     * Constructs a new Restore.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IRestore);

                    /** Restore startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Restore endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** Restore state. */
                    public state: (google.cloud.metastore.v1beta.Restore.State|keyof typeof google.cloud.metastore.v1beta.Restore.State);

                    /** Restore backup. */
                    public backup: string;

                    /** Restore type. */
                    public type: (google.cloud.metastore.v1beta.Restore.RestoreType|keyof typeof google.cloud.metastore.v1beta.Restore.RestoreType);

                    /** Restore details. */
                    public details: string;

                    /**
                     * Creates a new Restore instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Restore instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IRestore): google.cloud.metastore.v1beta.Restore;

                    /**
                     * Encodes the specified Restore message. Does not implicitly {@link google.cloud.metastore.v1beta.Restore.verify|verify} messages.
                     * @param message Restore message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IRestore, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Restore message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.Restore.verify|verify} messages.
                     * @param message Restore message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IRestore, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Restore message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Restore
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.Restore;

                    /**
                     * Decodes a Restore message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Restore
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.Restore;

                    /**
                     * Verifies a Restore message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Restore message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Restore
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.Restore;

                    /**
                     * Creates a plain object from a Restore message. Also converts values to other types if specified.
                     * @param message Restore
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.Restore, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Restore to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Restore {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        RUNNING = 1,
                        SUCCEEDED = 2,
                        FAILED = 3,
                        CANCELLED = 4
                    }

                    /** RestoreType enum. */
                    enum RestoreType {
                        RESTORE_TYPE_UNSPECIFIED = 0,
                        FULL = 1,
                        METADATA_ONLY = 2
                    }
                }

                /** Properties of a ListServicesRequest. */
                interface IListServicesRequest {

                    /** ListServicesRequest parent */
                    parent?: (string|null);

                    /** ListServicesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListServicesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListServicesRequest filter */
                    filter?: (string|null);

                    /** ListServicesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListServicesRequest. */
                class ListServicesRequest implements IListServicesRequest {

                    /**
                     * Constructs a new ListServicesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IListServicesRequest);

                    /** ListServicesRequest parent. */
                    public parent: string;

                    /** ListServicesRequest pageSize. */
                    public pageSize: number;

                    /** ListServicesRequest pageToken. */
                    public pageToken: string;

                    /** ListServicesRequest filter. */
                    public filter: string;

                    /** ListServicesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListServicesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IListServicesRequest): google.cloud.metastore.v1beta.ListServicesRequest;

                    /**
                     * Encodes the specified ListServicesRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.ListServicesRequest.verify|verify} messages.
                     * @param message ListServicesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IListServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.ListServicesRequest;

                    /**
                     * Decodes a ListServicesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.ListServicesRequest;

                    /**
                     * Verifies a ListServicesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServicesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServicesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.ListServicesRequest;

                    /**
                     * Creates a plain object from a ListServicesRequest message. Also converts values to other types if specified.
                     * @param message ListServicesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.ListServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListServicesResponse. */
                interface IListServicesResponse {

                    /** ListServicesResponse services */
                    services?: (google.cloud.metastore.v1beta.IService[]|null);

                    /** ListServicesResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListServicesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListServicesResponse. */
                class ListServicesResponse implements IListServicesResponse {

                    /**
                     * Constructs a new ListServicesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IListServicesResponse);

                    /** ListServicesResponse services. */
                    public services: google.cloud.metastore.v1beta.IService[];

                    /** ListServicesResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListServicesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListServicesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListServicesResponse instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IListServicesResponse): google.cloud.metastore.v1beta.ListServicesResponse;

                    /**
                     * Encodes the specified ListServicesResponse message. Does not implicitly {@link google.cloud.metastore.v1beta.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListServicesResponse message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.ListServicesResponse.verify|verify} messages.
                     * @param message ListServicesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IListServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.ListServicesResponse;

                    /**
                     * Decodes a ListServicesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListServicesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.ListServicesResponse;

                    /**
                     * Verifies a ListServicesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListServicesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListServicesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.ListServicesResponse;

                    /**
                     * Creates a plain object from a ListServicesResponse message. Also converts values to other types if specified.
                     * @param message ListServicesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.ListServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListServicesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetServiceRequest. */
                interface IGetServiceRequest {

                    /** GetServiceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetServiceRequest. */
                class GetServiceRequest implements IGetServiceRequest {

                    /**
                     * Constructs a new GetServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IGetServiceRequest);

                    /** GetServiceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IGetServiceRequest): google.cloud.metastore.v1beta.GetServiceRequest;

                    /**
                     * Encodes the specified GetServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.GetServiceRequest.verify|verify} messages.
                     * @param message GetServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IGetServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.GetServiceRequest;

                    /**
                     * Decodes a GetServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.GetServiceRequest;

                    /**
                     * Verifies a GetServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.GetServiceRequest;

                    /**
                     * Creates a plain object from a GetServiceRequest message. Also converts values to other types if specified.
                     * @param message GetServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.GetServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateServiceRequest. */
                interface ICreateServiceRequest {

                    /** CreateServiceRequest parent */
                    parent?: (string|null);

                    /** CreateServiceRequest serviceId */
                    serviceId?: (string|null);

                    /** CreateServiceRequest service */
                    service?: (google.cloud.metastore.v1beta.IService|null);

                    /** CreateServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateServiceRequest. */
                class CreateServiceRequest implements ICreateServiceRequest {

                    /**
                     * Constructs a new CreateServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.ICreateServiceRequest);

                    /** CreateServiceRequest parent. */
                    public parent: string;

                    /** CreateServiceRequest serviceId. */
                    public serviceId: string;

                    /** CreateServiceRequest service. */
                    public service?: (google.cloud.metastore.v1beta.IService|null);

                    /** CreateServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.ICreateServiceRequest): google.cloud.metastore.v1beta.CreateServiceRequest;

                    /**
                     * Encodes the specified CreateServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.CreateServiceRequest.verify|verify} messages.
                     * @param message CreateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.ICreateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.CreateServiceRequest.verify|verify} messages.
                     * @param message CreateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.ICreateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.CreateServiceRequest;

                    /**
                     * Decodes a CreateServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.CreateServiceRequest;

                    /**
                     * Verifies a CreateServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.CreateServiceRequest;

                    /**
                     * Creates a plain object from a CreateServiceRequest message. Also converts values to other types if specified.
                     * @param message CreateServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.CreateServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateServiceRequest. */
                interface IUpdateServiceRequest {

                    /** UpdateServiceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateServiceRequest service */
                    service?: (google.cloud.metastore.v1beta.IService|null);

                    /** UpdateServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateServiceRequest. */
                class UpdateServiceRequest implements IUpdateServiceRequest {

                    /**
                     * Constructs a new UpdateServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IUpdateServiceRequest);

                    /** UpdateServiceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateServiceRequest service. */
                    public service?: (google.cloud.metastore.v1beta.IService|null);

                    /** UpdateServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IUpdateServiceRequest): google.cloud.metastore.v1beta.UpdateServiceRequest;

                    /**
                     * Encodes the specified UpdateServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.UpdateServiceRequest.verify|verify} messages.
                     * @param message UpdateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IUpdateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.UpdateServiceRequest.verify|verify} messages.
                     * @param message UpdateServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IUpdateServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.UpdateServiceRequest;

                    /**
                     * Decodes an UpdateServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.UpdateServiceRequest;

                    /**
                     * Verifies an UpdateServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.UpdateServiceRequest;

                    /**
                     * Creates a plain object from an UpdateServiceRequest message. Also converts values to other types if specified.
                     * @param message UpdateServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.UpdateServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteServiceRequest. */
                interface IDeleteServiceRequest {

                    /** DeleteServiceRequest name */
                    name?: (string|null);

                    /** DeleteServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteServiceRequest. */
                class DeleteServiceRequest implements IDeleteServiceRequest {

                    /**
                     * Constructs a new DeleteServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IDeleteServiceRequest);

                    /** DeleteServiceRequest name. */
                    public name: string;

                    /** DeleteServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IDeleteServiceRequest): google.cloud.metastore.v1beta.DeleteServiceRequest;

                    /**
                     * Encodes the specified DeleteServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.DeleteServiceRequest.verify|verify} messages.
                     * @param message DeleteServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.DeleteServiceRequest.verify|verify} messages.
                     * @param message DeleteServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IDeleteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.DeleteServiceRequest;

                    /**
                     * Decodes a DeleteServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.DeleteServiceRequest;

                    /**
                     * Verifies a DeleteServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.DeleteServiceRequest;

                    /**
                     * Creates a plain object from a DeleteServiceRequest message. Also converts values to other types if specified.
                     * @param message DeleteServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.DeleteServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteServiceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListMetadataImportsRequest. */
                interface IListMetadataImportsRequest {

                    /** ListMetadataImportsRequest parent */
                    parent?: (string|null);

                    /** ListMetadataImportsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListMetadataImportsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListMetadataImportsRequest filter */
                    filter?: (string|null);

                    /** ListMetadataImportsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListMetadataImportsRequest. */
                class ListMetadataImportsRequest implements IListMetadataImportsRequest {

                    /**
                     * Constructs a new ListMetadataImportsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IListMetadataImportsRequest);

                    /** ListMetadataImportsRequest parent. */
                    public parent: string;

                    /** ListMetadataImportsRequest pageSize. */
                    public pageSize: number;

                    /** ListMetadataImportsRequest pageToken. */
                    public pageToken: string;

                    /** ListMetadataImportsRequest filter. */
                    public filter: string;

                    /** ListMetadataImportsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListMetadataImportsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMetadataImportsRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IListMetadataImportsRequest): google.cloud.metastore.v1beta.ListMetadataImportsRequest;

                    /**
                     * Encodes the specified ListMetadataImportsRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.ListMetadataImportsRequest.verify|verify} messages.
                     * @param message ListMetadataImportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IListMetadataImportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMetadataImportsRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.ListMetadataImportsRequest.verify|verify} messages.
                     * @param message ListMetadataImportsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IListMetadataImportsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMetadataImportsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMetadataImportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.ListMetadataImportsRequest;

                    /**
                     * Decodes a ListMetadataImportsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMetadataImportsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.ListMetadataImportsRequest;

                    /**
                     * Verifies a ListMetadataImportsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMetadataImportsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMetadataImportsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.ListMetadataImportsRequest;

                    /**
                     * Creates a plain object from a ListMetadataImportsRequest message. Also converts values to other types if specified.
                     * @param message ListMetadataImportsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.ListMetadataImportsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMetadataImportsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListMetadataImportsResponse. */
                interface IListMetadataImportsResponse {

                    /** ListMetadataImportsResponse metadataImports */
                    metadataImports?: (google.cloud.metastore.v1beta.IMetadataImport[]|null);

                    /** ListMetadataImportsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListMetadataImportsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListMetadataImportsResponse. */
                class ListMetadataImportsResponse implements IListMetadataImportsResponse {

                    /**
                     * Constructs a new ListMetadataImportsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IListMetadataImportsResponse);

                    /** ListMetadataImportsResponse metadataImports. */
                    public metadataImports: google.cloud.metastore.v1beta.IMetadataImport[];

                    /** ListMetadataImportsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListMetadataImportsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListMetadataImportsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListMetadataImportsResponse instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IListMetadataImportsResponse): google.cloud.metastore.v1beta.ListMetadataImportsResponse;

                    /**
                     * Encodes the specified ListMetadataImportsResponse message. Does not implicitly {@link google.cloud.metastore.v1beta.ListMetadataImportsResponse.verify|verify} messages.
                     * @param message ListMetadataImportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IListMetadataImportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListMetadataImportsResponse message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.ListMetadataImportsResponse.verify|verify} messages.
                     * @param message ListMetadataImportsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IListMetadataImportsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListMetadataImportsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListMetadataImportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.ListMetadataImportsResponse;

                    /**
                     * Decodes a ListMetadataImportsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListMetadataImportsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.ListMetadataImportsResponse;

                    /**
                     * Verifies a ListMetadataImportsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListMetadataImportsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListMetadataImportsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.ListMetadataImportsResponse;

                    /**
                     * Creates a plain object from a ListMetadataImportsResponse message. Also converts values to other types if specified.
                     * @param message ListMetadataImportsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.ListMetadataImportsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListMetadataImportsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetMetadataImportRequest. */
                interface IGetMetadataImportRequest {

                    /** GetMetadataImportRequest name */
                    name?: (string|null);
                }

                /** Represents a GetMetadataImportRequest. */
                class GetMetadataImportRequest implements IGetMetadataImportRequest {

                    /**
                     * Constructs a new GetMetadataImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IGetMetadataImportRequest);

                    /** GetMetadataImportRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetMetadataImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetMetadataImportRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IGetMetadataImportRequest): google.cloud.metastore.v1beta.GetMetadataImportRequest;

                    /**
                     * Encodes the specified GetMetadataImportRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.GetMetadataImportRequest.verify|verify} messages.
                     * @param message GetMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IGetMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetMetadataImportRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.GetMetadataImportRequest.verify|verify} messages.
                     * @param message GetMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IGetMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetMetadataImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.GetMetadataImportRequest;

                    /**
                     * Decodes a GetMetadataImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.GetMetadataImportRequest;

                    /**
                     * Verifies a GetMetadataImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetMetadataImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetMetadataImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.GetMetadataImportRequest;

                    /**
                     * Creates a plain object from a GetMetadataImportRequest message. Also converts values to other types if specified.
                     * @param message GetMetadataImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.GetMetadataImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetMetadataImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateMetadataImportRequest. */
                interface ICreateMetadataImportRequest {

                    /** CreateMetadataImportRequest parent */
                    parent?: (string|null);

                    /** CreateMetadataImportRequest metadataImportId */
                    metadataImportId?: (string|null);

                    /** CreateMetadataImportRequest metadataImport */
                    metadataImport?: (google.cloud.metastore.v1beta.IMetadataImport|null);

                    /** CreateMetadataImportRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateMetadataImportRequest. */
                class CreateMetadataImportRequest implements ICreateMetadataImportRequest {

                    /**
                     * Constructs a new CreateMetadataImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.ICreateMetadataImportRequest);

                    /** CreateMetadataImportRequest parent. */
                    public parent: string;

                    /** CreateMetadataImportRequest metadataImportId. */
                    public metadataImportId: string;

                    /** CreateMetadataImportRequest metadataImport. */
                    public metadataImport?: (google.cloud.metastore.v1beta.IMetadataImport|null);

                    /** CreateMetadataImportRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateMetadataImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateMetadataImportRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.ICreateMetadataImportRequest): google.cloud.metastore.v1beta.CreateMetadataImportRequest;

                    /**
                     * Encodes the specified CreateMetadataImportRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.CreateMetadataImportRequest.verify|verify} messages.
                     * @param message CreateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.ICreateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateMetadataImportRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.CreateMetadataImportRequest.verify|verify} messages.
                     * @param message CreateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.ICreateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateMetadataImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.CreateMetadataImportRequest;

                    /**
                     * Decodes a CreateMetadataImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.CreateMetadataImportRequest;

                    /**
                     * Verifies a CreateMetadataImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateMetadataImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateMetadataImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.CreateMetadataImportRequest;

                    /**
                     * Creates a plain object from a CreateMetadataImportRequest message. Also converts values to other types if specified.
                     * @param message CreateMetadataImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.CreateMetadataImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateMetadataImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateMetadataImportRequest. */
                interface IUpdateMetadataImportRequest {

                    /** UpdateMetadataImportRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMetadataImportRequest metadataImport */
                    metadataImport?: (google.cloud.metastore.v1beta.IMetadataImport|null);

                    /** UpdateMetadataImportRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents an UpdateMetadataImportRequest. */
                class UpdateMetadataImportRequest implements IUpdateMetadataImportRequest {

                    /**
                     * Constructs a new UpdateMetadataImportRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IUpdateMetadataImportRequest);

                    /** UpdateMetadataImportRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateMetadataImportRequest metadataImport. */
                    public metadataImport?: (google.cloud.metastore.v1beta.IMetadataImport|null);

                    /** UpdateMetadataImportRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new UpdateMetadataImportRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateMetadataImportRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IUpdateMetadataImportRequest): google.cloud.metastore.v1beta.UpdateMetadataImportRequest;

                    /**
                     * Encodes the specified UpdateMetadataImportRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.UpdateMetadataImportRequest.verify|verify} messages.
                     * @param message UpdateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IUpdateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateMetadataImportRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.UpdateMetadataImportRequest.verify|verify} messages.
                     * @param message UpdateMetadataImportRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IUpdateMetadataImportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateMetadataImportRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.UpdateMetadataImportRequest;

                    /**
                     * Decodes an UpdateMetadataImportRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateMetadataImportRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.UpdateMetadataImportRequest;

                    /**
                     * Verifies an UpdateMetadataImportRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateMetadataImportRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateMetadataImportRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.UpdateMetadataImportRequest;

                    /**
                     * Creates a plain object from an UpdateMetadataImportRequest message. Also converts values to other types if specified.
                     * @param message UpdateMetadataImportRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.UpdateMetadataImportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateMetadataImportRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBackupsRequest. */
                interface IListBackupsRequest {

                    /** ListBackupsRequest parent */
                    parent?: (string|null);

                    /** ListBackupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBackupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBackupsRequest filter */
                    filter?: (string|null);

                    /** ListBackupsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListBackupsRequest. */
                class ListBackupsRequest implements IListBackupsRequest {

                    /**
                     * Constructs a new ListBackupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IListBackupsRequest);

                    /** ListBackupsRequest parent. */
                    public parent: string;

                    /** ListBackupsRequest pageSize. */
                    public pageSize: number;

                    /** ListBackupsRequest pageToken. */
                    public pageToken: string;

                    /** ListBackupsRequest filter. */
                    public filter: string;

                    /** ListBackupsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListBackupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IListBackupsRequest): google.cloud.metastore.v1beta.ListBackupsRequest;

                    /**
                     * Encodes the specified ListBackupsRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.ListBackupsRequest;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.ListBackupsRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.ListBackupsRequest;

                    /**
                     * Creates a plain object from a ListBackupsRequest message. Also converts values to other types if specified.
                     * @param message ListBackupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.ListBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBackupsResponse. */
                interface IListBackupsResponse {

                    /** ListBackupsResponse backups */
                    backups?: (google.cloud.metastore.v1beta.IBackup[]|null);

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
                    constructor(properties?: google.cloud.metastore.v1beta.IListBackupsResponse);

                    /** ListBackupsResponse backups. */
                    public backups: google.cloud.metastore.v1beta.IBackup[];

                    /** ListBackupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListBackupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBackupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsResponse instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IListBackupsResponse): google.cloud.metastore.v1beta.ListBackupsResponse;

                    /**
                     * Encodes the specified ListBackupsResponse message. Does not implicitly {@link google.cloud.metastore.v1beta.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsResponse message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.ListBackupsResponse;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.ListBackupsResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.ListBackupsResponse;

                    /**
                     * Creates a plain object from a ListBackupsResponse message. Also converts values to other types if specified.
                     * @param message ListBackupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.ListBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: google.cloud.metastore.v1beta.IGetBackupRequest);

                    /** GetBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IGetBackupRequest): google.cloud.metastore.v1beta.GetBackupRequest;

                    /**
                     * Encodes the specified GetBackupRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.GetBackupRequest;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.GetBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.GetBackupRequest;

                    /**
                     * Creates a plain object from a GetBackupRequest message. Also converts values to other types if specified.
                     * @param message GetBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.GetBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateBackupRequest. */
                interface ICreateBackupRequest {

                    /** CreateBackupRequest parent */
                    parent?: (string|null);

                    /** CreateBackupRequest backupId */
                    backupId?: (string|null);

                    /** CreateBackupRequest backup */
                    backup?: (google.cloud.metastore.v1beta.IBackup|null);

                    /** CreateBackupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateBackupRequest. */
                class CreateBackupRequest implements ICreateBackupRequest {

                    /**
                     * Constructs a new CreateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.ICreateBackupRequest);

                    /** CreateBackupRequest parent. */
                    public parent: string;

                    /** CreateBackupRequest backupId. */
                    public backupId: string;

                    /** CreateBackupRequest backup. */
                    public backup?: (google.cloud.metastore.v1beta.IBackup|null);

                    /** CreateBackupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.ICreateBackupRequest): google.cloud.metastore.v1beta.CreateBackupRequest;

                    /**
                     * Encodes the specified CreateBackupRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.CreateBackupRequest;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.CreateBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.CreateBackupRequest;

                    /**
                     * Creates a plain object from a CreateBackupRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.CreateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteBackupRequest. */
                interface IDeleteBackupRequest {

                    /** DeleteBackupRequest name */
                    name?: (string|null);

                    /** DeleteBackupRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteBackupRequest. */
                class DeleteBackupRequest implements IDeleteBackupRequest {

                    /**
                     * Constructs a new DeleteBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IDeleteBackupRequest);

                    /** DeleteBackupRequest name. */
                    public name: string;

                    /** DeleteBackupRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IDeleteBackupRequest): google.cloud.metastore.v1beta.DeleteBackupRequest;

                    /**
                     * Encodes the specified DeleteBackupRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.DeleteBackupRequest;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.DeleteBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.DeleteBackupRequest;

                    /**
                     * Creates a plain object from a DeleteBackupRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.DeleteBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportMetadataRequest. */
                interface IExportMetadataRequest {

                    /** ExportMetadataRequest destinationGcsFolder */
                    destinationGcsFolder?: (string|null);

                    /** ExportMetadataRequest service */
                    service?: (string|null);

                    /** ExportMetadataRequest requestId */
                    requestId?: (string|null);

                    /** ExportMetadataRequest databaseDumpType */
                    databaseDumpType?: (google.cloud.metastore.v1beta.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1beta.DatabaseDumpSpec.Type|null);
                }

                /** Represents an ExportMetadataRequest. */
                class ExportMetadataRequest implements IExportMetadataRequest {

                    /**
                     * Constructs a new ExportMetadataRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IExportMetadataRequest);

                    /** ExportMetadataRequest destinationGcsFolder. */
                    public destinationGcsFolder?: (string|null);

                    /** ExportMetadataRequest service. */
                    public service: string;

                    /** ExportMetadataRequest requestId. */
                    public requestId: string;

                    /** ExportMetadataRequest databaseDumpType. */
                    public databaseDumpType: (google.cloud.metastore.v1beta.DatabaseDumpSpec.Type|keyof typeof google.cloud.metastore.v1beta.DatabaseDumpSpec.Type);

                    /** ExportMetadataRequest destination. */
                    public destination?: "destinationGcsFolder";

                    /**
                     * Creates a new ExportMetadataRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportMetadataRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IExportMetadataRequest): google.cloud.metastore.v1beta.ExportMetadataRequest;

                    /**
                     * Encodes the specified ExportMetadataRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.ExportMetadataRequest.verify|verify} messages.
                     * @param message ExportMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IExportMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportMetadataRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.ExportMetadataRequest.verify|verify} messages.
                     * @param message ExportMetadataRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IExportMetadataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportMetadataRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.ExportMetadataRequest;

                    /**
                     * Decodes an ExportMetadataRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportMetadataRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.ExportMetadataRequest;

                    /**
                     * Verifies an ExportMetadataRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportMetadataRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportMetadataRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.ExportMetadataRequest;

                    /**
                     * Creates a plain object from an ExportMetadataRequest message. Also converts values to other types if specified.
                     * @param message ExportMetadataRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.ExportMetadataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportMetadataRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RestoreServiceRequest. */
                interface IRestoreServiceRequest {

                    /** RestoreServiceRequest service */
                    service?: (string|null);

                    /** RestoreServiceRequest backup */
                    backup?: (string|null);

                    /** RestoreServiceRequest restoreType */
                    restoreType?: (google.cloud.metastore.v1beta.Restore.RestoreType|keyof typeof google.cloud.metastore.v1beta.Restore.RestoreType|null);

                    /** RestoreServiceRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a RestoreServiceRequest. */
                class RestoreServiceRequest implements IRestoreServiceRequest {

                    /**
                     * Constructs a new RestoreServiceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IRestoreServiceRequest);

                    /** RestoreServiceRequest service. */
                    public service: string;

                    /** RestoreServiceRequest backup. */
                    public backup: string;

                    /** RestoreServiceRequest restoreType. */
                    public restoreType: (google.cloud.metastore.v1beta.Restore.RestoreType|keyof typeof google.cloud.metastore.v1beta.Restore.RestoreType);

                    /** RestoreServiceRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new RestoreServiceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreServiceRequest instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IRestoreServiceRequest): google.cloud.metastore.v1beta.RestoreServiceRequest;

                    /**
                     * Encodes the specified RestoreServiceRequest message. Does not implicitly {@link google.cloud.metastore.v1beta.RestoreServiceRequest.verify|verify} messages.
                     * @param message RestoreServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IRestoreServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreServiceRequest message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.RestoreServiceRequest.verify|verify} messages.
                     * @param message RestoreServiceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IRestoreServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreServiceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.RestoreServiceRequest;

                    /**
                     * Decodes a RestoreServiceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreServiceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.RestoreServiceRequest;

                    /**
                     * Verifies a RestoreServiceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreServiceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreServiceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.RestoreServiceRequest;

                    /**
                     * Creates a plain object from a RestoreServiceRequest message. Also converts values to other types if specified.
                     * @param message RestoreServiceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.RestoreServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreServiceRequest to JSON.
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
                    constructor(properties?: google.cloud.metastore.v1beta.IOperationMetadata);

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
                    public static create(properties?: google.cloud.metastore.v1beta.IOperationMetadata): google.cloud.metastore.v1beta.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.metastore.v1beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LocationMetadata. */
                interface ILocationMetadata {

                    /** LocationMetadata supportedHiveMetastoreVersions */
                    supportedHiveMetastoreVersions?: (google.cloud.metastore.v1beta.LocationMetadata.IHiveMetastoreVersion[]|null);
                }

                /** Represents a LocationMetadata. */
                class LocationMetadata implements ILocationMetadata {

                    /**
                     * Constructs a new LocationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.ILocationMetadata);

                    /** LocationMetadata supportedHiveMetastoreVersions. */
                    public supportedHiveMetastoreVersions: google.cloud.metastore.v1beta.LocationMetadata.IHiveMetastoreVersion[];

                    /**
                     * Creates a new LocationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationMetadata instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.ILocationMetadata): google.cloud.metastore.v1beta.LocationMetadata;

                    /**
                     * Encodes the specified LocationMetadata message. Does not implicitly {@link google.cloud.metastore.v1beta.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationMetadata message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.LocationMetadata;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.LocationMetadata;

                    /**
                     * Verifies a LocationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LocationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LocationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.LocationMetadata;

                    /**
                     * Creates a plain object from a LocationMetadata message. Also converts values to other types if specified.
                     * @param message LocationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.LocationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LocationMetadata {

                    /** Properties of a HiveMetastoreVersion. */
                    interface IHiveMetastoreVersion {

                        /** HiveMetastoreVersion version */
                        version?: (string|null);

                        /** HiveMetastoreVersion isDefault */
                        isDefault?: (boolean|null);
                    }

                    /** Represents a HiveMetastoreVersion. */
                    class HiveMetastoreVersion implements IHiveMetastoreVersion {

                        /**
                         * Constructs a new HiveMetastoreVersion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.metastore.v1beta.LocationMetadata.IHiveMetastoreVersion);

                        /** HiveMetastoreVersion version. */
                        public version: string;

                        /** HiveMetastoreVersion isDefault. */
                        public isDefault: boolean;

                        /**
                         * Creates a new HiveMetastoreVersion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns HiveMetastoreVersion instance
                         */
                        public static create(properties?: google.cloud.metastore.v1beta.LocationMetadata.IHiveMetastoreVersion): google.cloud.metastore.v1beta.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Encodes the specified HiveMetastoreVersion message. Does not implicitly {@link google.cloud.metastore.v1beta.LocationMetadata.HiveMetastoreVersion.verify|verify} messages.
                         * @param message HiveMetastoreVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.metastore.v1beta.LocationMetadata.IHiveMetastoreVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified HiveMetastoreVersion message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.LocationMetadata.HiveMetastoreVersion.verify|verify} messages.
                         * @param message HiveMetastoreVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.metastore.v1beta.LocationMetadata.IHiveMetastoreVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a HiveMetastoreVersion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns HiveMetastoreVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Decodes a HiveMetastoreVersion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns HiveMetastoreVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Verifies a HiveMetastoreVersion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a HiveMetastoreVersion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns HiveMetastoreVersion
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.LocationMetadata.HiveMetastoreVersion;

                        /**
                         * Creates a plain object from a HiveMetastoreVersion message. Also converts values to other types if specified.
                         * @param message HiveMetastoreVersion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.metastore.v1beta.LocationMetadata.HiveMetastoreVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this HiveMetastoreVersion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a DatabaseDumpSpec. */
                interface IDatabaseDumpSpec {
                }

                /** Represents a DatabaseDumpSpec. */
                class DatabaseDumpSpec implements IDatabaseDumpSpec {

                    /**
                     * Constructs a new DatabaseDumpSpec.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.metastore.v1beta.IDatabaseDumpSpec);

                    /**
                     * Creates a new DatabaseDumpSpec instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabaseDumpSpec instance
                     */
                    public static create(properties?: google.cloud.metastore.v1beta.IDatabaseDumpSpec): google.cloud.metastore.v1beta.DatabaseDumpSpec;

                    /**
                     * Encodes the specified DatabaseDumpSpec message. Does not implicitly {@link google.cloud.metastore.v1beta.DatabaseDumpSpec.verify|verify} messages.
                     * @param message DatabaseDumpSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.metastore.v1beta.IDatabaseDumpSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabaseDumpSpec message, length delimited. Does not implicitly {@link google.cloud.metastore.v1beta.DatabaseDumpSpec.verify|verify} messages.
                     * @param message DatabaseDumpSpec message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.metastore.v1beta.IDatabaseDumpSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabaseDumpSpec message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabaseDumpSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.metastore.v1beta.DatabaseDumpSpec;

                    /**
                     * Decodes a DatabaseDumpSpec message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabaseDumpSpec
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.metastore.v1beta.DatabaseDumpSpec;

                    /**
                     * Verifies a DatabaseDumpSpec message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabaseDumpSpec message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabaseDumpSpec
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.metastore.v1beta.DatabaseDumpSpec;

                    /**
                     * Creates a plain object from a DatabaseDumpSpec message. Also converts values to other types if specified.
                     * @param message DatabaseDumpSpec
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.metastore.v1beta.DatabaseDumpSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabaseDumpSpec to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace DatabaseDumpSpec {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        MYSQL = 1
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

        /** DayOfWeek enum. */
        enum DayOfWeek {
            DAY_OF_WEEK_UNSPECIFIED = 0,
            MONDAY = 1,
            TUESDAY = 2,
            WEDNESDAY = 3,
            THURSDAY = 4,
            FRIDAY = 5,
            SATURDAY = 6,
            SUNDAY = 7
        }
    }
}
