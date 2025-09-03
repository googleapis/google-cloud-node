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

        /** Namespace oracledatabase. */
        namespace oracledatabase {

            /** Namespace v1. */
            namespace v1 {

                /** GenerateType enum. */
                enum GenerateType {
                    GENERATE_TYPE_UNSPECIFIED = 0,
                    ALL = 1,
                    SINGLE = 2
                }

                /** State enum. */
                enum State {
                    STATE_UNSPECIFIED = 0,
                    PROVISIONING = 1,
                    AVAILABLE = 2,
                    STOPPING = 3,
                    STOPPED = 4,
                    STARTING = 5,
                    TERMINATING = 6,
                    TERMINATED = 7,
                    UNAVAILABLE = 8,
                    RESTORE_IN_PROGRESS = 9,
                    RESTORE_FAILED = 10,
                    BACKUP_IN_PROGRESS = 11,
                    SCALE_IN_PROGRESS = 12,
                    AVAILABLE_NEEDS_ATTENTION = 13,
                    UPDATING = 14,
                    MAINTENANCE_IN_PROGRESS = 15,
                    RESTARTING = 16,
                    RECREATING = 17,
                    ROLE_CHANGE_IN_PROGRESS = 18,
                    UPGRADING = 19,
                    INACCESSIBLE = 20,
                    STANDBY = 21
                }

                /** OperationsInsightsState enum. */
                enum OperationsInsightsState {
                    OPERATIONS_INSIGHTS_STATE_UNSPECIFIED = 0,
                    ENABLING = 1,
                    ENABLED = 2,
                    DISABLING = 3,
                    NOT_ENABLED = 4,
                    FAILED_ENABLING = 5,
                    FAILED_DISABLING = 6
                }

                /** DBWorkload enum. */
                enum DBWorkload {
                    DB_WORKLOAD_UNSPECIFIED = 0,
                    OLTP = 1,
                    DW = 2,
                    AJD = 3,
                    APEX = 4
                }

                /** Properties of an AutonomousDatabase. */
                interface IAutonomousDatabase {

                    /** AutonomousDatabase name */
                    name?: (string|null);

                    /** AutonomousDatabase database */
                    database?: (string|null);

                    /** AutonomousDatabase displayName */
                    displayName?: (string|null);

                    /** AutonomousDatabase entitlementId */
                    entitlementId?: (string|null);

                    /** AutonomousDatabase adminPassword */
                    adminPassword?: (string|null);

                    /** AutonomousDatabase properties */
                    properties?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseProperties|null);

                    /** AutonomousDatabase labels */
                    labels?: ({ [k: string]: string }|null);

                    /** AutonomousDatabase network */
                    network?: (string|null);

                    /** AutonomousDatabase cidr */
                    cidr?: (string|null);

                    /** AutonomousDatabase createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AutonomousDatabase. */
                class AutonomousDatabase implements IAutonomousDatabase {

                    /**
                     * Constructs a new AutonomousDatabase.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabase);

                    /** AutonomousDatabase name. */
                    public name: string;

                    /** AutonomousDatabase database. */
                    public database: string;

                    /** AutonomousDatabase displayName. */
                    public displayName: string;

                    /** AutonomousDatabase entitlementId. */
                    public entitlementId: string;

                    /** AutonomousDatabase adminPassword. */
                    public adminPassword: string;

                    /** AutonomousDatabase properties. */
                    public properties?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseProperties|null);

                    /** AutonomousDatabase labels. */
                    public labels: { [k: string]: string };

                    /** AutonomousDatabase network. */
                    public network: string;

                    /** AutonomousDatabase cidr. */
                    public cidr: string;

                    /** AutonomousDatabase createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new AutonomousDatabase instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutonomousDatabase instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabase): google.cloud.oracledatabase.v1.AutonomousDatabase;

                    /**
                     * Encodes the specified AutonomousDatabase message. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabase.verify|verify} messages.
                     * @param message AutonomousDatabase message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAutonomousDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutonomousDatabase message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabase.verify|verify} messages.
                     * @param message AutonomousDatabase message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAutonomousDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutonomousDatabase message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutonomousDatabase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AutonomousDatabase;

                    /**
                     * Decodes an AutonomousDatabase message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutonomousDatabase
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AutonomousDatabase;

                    /**
                     * Verifies an AutonomousDatabase message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutonomousDatabase message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutonomousDatabase
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AutonomousDatabase;

                    /**
                     * Creates a plain object from an AutonomousDatabase message. Also converts values to other types if specified.
                     * @param message AutonomousDatabase
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AutonomousDatabase, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutonomousDatabase to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutonomousDatabase
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AutonomousDatabaseProperties. */
                interface IAutonomousDatabaseProperties {

                    /** AutonomousDatabaseProperties ocid */
                    ocid?: (string|null);

                    /** AutonomousDatabaseProperties computeCount */
                    computeCount?: (number|null);

                    /** AutonomousDatabaseProperties cpuCoreCount */
                    cpuCoreCount?: (number|null);

                    /** AutonomousDatabaseProperties dataStorageSizeTb */
                    dataStorageSizeTb?: (number|null);

                    /** AutonomousDatabaseProperties dataStorageSizeGb */
                    dataStorageSizeGb?: (number|null);

                    /** AutonomousDatabaseProperties dbWorkload */
                    dbWorkload?: (google.cloud.oracledatabase.v1.DBWorkload|keyof typeof google.cloud.oracledatabase.v1.DBWorkload|null);

                    /** AutonomousDatabaseProperties dbEdition */
                    dbEdition?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DatabaseEdition|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DatabaseEdition|null);

                    /** AutonomousDatabaseProperties characterSet */
                    characterSet?: (string|null);

                    /** AutonomousDatabaseProperties nCharacterSet */
                    nCharacterSet?: (string|null);

                    /** AutonomousDatabaseProperties privateEndpointIp */
                    privateEndpointIp?: (string|null);

                    /** AutonomousDatabaseProperties privateEndpointLabel */
                    privateEndpointLabel?: (string|null);

                    /** AutonomousDatabaseProperties dbVersion */
                    dbVersion?: (string|null);

                    /** AutonomousDatabaseProperties isAutoScalingEnabled */
                    isAutoScalingEnabled?: (boolean|null);

                    /** AutonomousDatabaseProperties isStorageAutoScalingEnabled */
                    isStorageAutoScalingEnabled?: (boolean|null);

                    /** AutonomousDatabaseProperties licenseType */
                    licenseType?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.LicenseType|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.LicenseType|null);

                    /** AutonomousDatabaseProperties customerContacts */
                    customerContacts?: (google.cloud.oracledatabase.v1.ICustomerContact[]|null);

                    /** AutonomousDatabaseProperties secretId */
                    secretId?: (string|null);

                    /** AutonomousDatabaseProperties vaultId */
                    vaultId?: (string|null);

                    /** AutonomousDatabaseProperties maintenanceScheduleType */
                    maintenanceScheduleType?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.MaintenanceScheduleType|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.MaintenanceScheduleType|null);

                    /** AutonomousDatabaseProperties mtlsConnectionRequired */
                    mtlsConnectionRequired?: (boolean|null);

                    /** AutonomousDatabaseProperties backupRetentionPeriodDays */
                    backupRetentionPeriodDays?: (number|null);

                    /** AutonomousDatabaseProperties actualUsedDataStorageSizeTb */
                    actualUsedDataStorageSizeTb?: (number|null);

                    /** AutonomousDatabaseProperties allocatedStorageSizeTb */
                    allocatedStorageSizeTb?: (number|null);

                    /** AutonomousDatabaseProperties apexDetails */
                    apexDetails?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseApex|null);

                    /** AutonomousDatabaseProperties arePrimaryAllowlistedIpsUsed */
                    arePrimaryAllowlistedIpsUsed?: (boolean|null);

                    /** AutonomousDatabaseProperties lifecycleDetails */
                    lifecycleDetails?: (string|null);

                    /** AutonomousDatabaseProperties state */
                    state?: (google.cloud.oracledatabase.v1.State|keyof typeof google.cloud.oracledatabase.v1.State|null);

                    /** AutonomousDatabaseProperties autonomousContainerDatabaseId */
                    autonomousContainerDatabaseId?: (string|null);

                    /** AutonomousDatabaseProperties availableUpgradeVersions */
                    availableUpgradeVersions?: (string[]|null);

                    /** AutonomousDatabaseProperties connectionStrings */
                    connectionStrings?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionStrings|null);

                    /** AutonomousDatabaseProperties connectionUrls */
                    connectionUrls?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionUrls|null);

                    /** AutonomousDatabaseProperties failedDataRecoveryDuration */
                    failedDataRecoveryDuration?: (google.protobuf.IDuration|null);

                    /** AutonomousDatabaseProperties memoryTableGbs */
                    memoryTableGbs?: (number|null);

                    /** AutonomousDatabaseProperties isLocalDataGuardEnabled */
                    isLocalDataGuardEnabled?: (boolean|null);

                    /** AutonomousDatabaseProperties localAdgAutoFailoverMaxDataLossLimit */
                    localAdgAutoFailoverMaxDataLossLimit?: (number|null);

                    /** AutonomousDatabaseProperties localStandbyDb */
                    localStandbyDb?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseStandbySummary|null);

                    /** AutonomousDatabaseProperties memoryPerOracleComputeUnitGbs */
                    memoryPerOracleComputeUnitGbs?: (number|null);

                    /** AutonomousDatabaseProperties localDisasterRecoveryType */
                    localDisasterRecoveryType?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.LocalDisasterRecoveryType|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.LocalDisasterRecoveryType|null);

                    /** AutonomousDatabaseProperties dataSafeState */
                    dataSafeState?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DataSafeState|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DataSafeState|null);

                    /** AutonomousDatabaseProperties databaseManagementState */
                    databaseManagementState?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DatabaseManagementState|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DatabaseManagementState|null);

                    /** AutonomousDatabaseProperties openMode */
                    openMode?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.OpenMode|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.OpenMode|null);

                    /** AutonomousDatabaseProperties operationsInsightsState */
                    operationsInsightsState?: (google.cloud.oracledatabase.v1.OperationsInsightsState|keyof typeof google.cloud.oracledatabase.v1.OperationsInsightsState|null);

                    /** AutonomousDatabaseProperties peerDbIds */
                    peerDbIds?: (string[]|null);

                    /** AutonomousDatabaseProperties permissionLevel */
                    permissionLevel?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.PermissionLevel|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.PermissionLevel|null);

                    /** AutonomousDatabaseProperties privateEndpoint */
                    privateEndpoint?: (string|null);

                    /** AutonomousDatabaseProperties refreshableMode */
                    refreshableMode?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.RefreshableMode|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.RefreshableMode|null);

                    /** AutonomousDatabaseProperties refreshableState */
                    refreshableState?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.RefreshableState|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.RefreshableState|null);

                    /** AutonomousDatabaseProperties role */
                    role?: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.Role|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.Role|null);

                    /** AutonomousDatabaseProperties scheduledOperationDetails */
                    scheduledOperationDetails?: (google.cloud.oracledatabase.v1.IScheduledOperationDetails[]|null);

                    /** AutonomousDatabaseProperties sqlWebDeveloperUrl */
                    sqlWebDeveloperUrl?: (string|null);

                    /** AutonomousDatabaseProperties supportedCloneRegions */
                    supportedCloneRegions?: (string[]|null);

                    /** AutonomousDatabaseProperties usedDataStorageSizeTbs */
                    usedDataStorageSizeTbs?: (number|null);

                    /** AutonomousDatabaseProperties ociUrl */
                    ociUrl?: (string|null);

                    /** AutonomousDatabaseProperties totalAutoBackupStorageSizeGbs */
                    totalAutoBackupStorageSizeGbs?: (number|null);

                    /** AutonomousDatabaseProperties nextLongTermBackupTime */
                    nextLongTermBackupTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseProperties maintenanceBeginTime */
                    maintenanceBeginTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseProperties maintenanceEndTime */
                    maintenanceEndTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AutonomousDatabaseProperties. */
                class AutonomousDatabaseProperties implements IAutonomousDatabaseProperties {

                    /**
                     * Constructs a new AutonomousDatabaseProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseProperties);

                    /** AutonomousDatabaseProperties ocid. */
                    public ocid: string;

                    /** AutonomousDatabaseProperties computeCount. */
                    public computeCount: number;

                    /** AutonomousDatabaseProperties cpuCoreCount. */
                    public cpuCoreCount: number;

                    /** AutonomousDatabaseProperties dataStorageSizeTb. */
                    public dataStorageSizeTb: number;

                    /** AutonomousDatabaseProperties dataStorageSizeGb. */
                    public dataStorageSizeGb: number;

                    /** AutonomousDatabaseProperties dbWorkload. */
                    public dbWorkload: (google.cloud.oracledatabase.v1.DBWorkload|keyof typeof google.cloud.oracledatabase.v1.DBWorkload);

                    /** AutonomousDatabaseProperties dbEdition. */
                    public dbEdition: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DatabaseEdition|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DatabaseEdition);

                    /** AutonomousDatabaseProperties characterSet. */
                    public characterSet: string;

                    /** AutonomousDatabaseProperties nCharacterSet. */
                    public nCharacterSet: string;

                    /** AutonomousDatabaseProperties privateEndpointIp. */
                    public privateEndpointIp: string;

                    /** AutonomousDatabaseProperties privateEndpointLabel. */
                    public privateEndpointLabel: string;

                    /** AutonomousDatabaseProperties dbVersion. */
                    public dbVersion: string;

                    /** AutonomousDatabaseProperties isAutoScalingEnabled. */
                    public isAutoScalingEnabled: boolean;

                    /** AutonomousDatabaseProperties isStorageAutoScalingEnabled. */
                    public isStorageAutoScalingEnabled: boolean;

                    /** AutonomousDatabaseProperties licenseType. */
                    public licenseType: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.LicenseType|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.LicenseType);

                    /** AutonomousDatabaseProperties customerContacts. */
                    public customerContacts: google.cloud.oracledatabase.v1.ICustomerContact[];

                    /** AutonomousDatabaseProperties secretId. */
                    public secretId: string;

                    /** AutonomousDatabaseProperties vaultId. */
                    public vaultId: string;

                    /** AutonomousDatabaseProperties maintenanceScheduleType. */
                    public maintenanceScheduleType: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.MaintenanceScheduleType|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.MaintenanceScheduleType);

                    /** AutonomousDatabaseProperties mtlsConnectionRequired. */
                    public mtlsConnectionRequired: boolean;

                    /** AutonomousDatabaseProperties backupRetentionPeriodDays. */
                    public backupRetentionPeriodDays: number;

                    /** AutonomousDatabaseProperties actualUsedDataStorageSizeTb. */
                    public actualUsedDataStorageSizeTb: number;

                    /** AutonomousDatabaseProperties allocatedStorageSizeTb. */
                    public allocatedStorageSizeTb: number;

                    /** AutonomousDatabaseProperties apexDetails. */
                    public apexDetails?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseApex|null);

                    /** AutonomousDatabaseProperties arePrimaryAllowlistedIpsUsed. */
                    public arePrimaryAllowlistedIpsUsed?: (boolean|null);

                    /** AutonomousDatabaseProperties lifecycleDetails. */
                    public lifecycleDetails: string;

                    /** AutonomousDatabaseProperties state. */
                    public state: (google.cloud.oracledatabase.v1.State|keyof typeof google.cloud.oracledatabase.v1.State);

                    /** AutonomousDatabaseProperties autonomousContainerDatabaseId. */
                    public autonomousContainerDatabaseId: string;

                    /** AutonomousDatabaseProperties availableUpgradeVersions. */
                    public availableUpgradeVersions: string[];

                    /** AutonomousDatabaseProperties connectionStrings. */
                    public connectionStrings?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionStrings|null);

                    /** AutonomousDatabaseProperties connectionUrls. */
                    public connectionUrls?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionUrls|null);

                    /** AutonomousDatabaseProperties failedDataRecoveryDuration. */
                    public failedDataRecoveryDuration?: (google.protobuf.IDuration|null);

                    /** AutonomousDatabaseProperties memoryTableGbs. */
                    public memoryTableGbs: number;

                    /** AutonomousDatabaseProperties isLocalDataGuardEnabled. */
                    public isLocalDataGuardEnabled: boolean;

                    /** AutonomousDatabaseProperties localAdgAutoFailoverMaxDataLossLimit. */
                    public localAdgAutoFailoverMaxDataLossLimit: number;

                    /** AutonomousDatabaseProperties localStandbyDb. */
                    public localStandbyDb?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseStandbySummary|null);

                    /** AutonomousDatabaseProperties memoryPerOracleComputeUnitGbs. */
                    public memoryPerOracleComputeUnitGbs: number;

                    /** AutonomousDatabaseProperties localDisasterRecoveryType. */
                    public localDisasterRecoveryType: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.LocalDisasterRecoveryType|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.LocalDisasterRecoveryType);

                    /** AutonomousDatabaseProperties dataSafeState. */
                    public dataSafeState: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DataSafeState|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DataSafeState);

                    /** AutonomousDatabaseProperties databaseManagementState. */
                    public databaseManagementState: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DatabaseManagementState|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.DatabaseManagementState);

                    /** AutonomousDatabaseProperties openMode. */
                    public openMode: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.OpenMode|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.OpenMode);

                    /** AutonomousDatabaseProperties operationsInsightsState. */
                    public operationsInsightsState: (google.cloud.oracledatabase.v1.OperationsInsightsState|keyof typeof google.cloud.oracledatabase.v1.OperationsInsightsState);

                    /** AutonomousDatabaseProperties peerDbIds. */
                    public peerDbIds: string[];

                    /** AutonomousDatabaseProperties permissionLevel. */
                    public permissionLevel: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.PermissionLevel|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.PermissionLevel);

                    /** AutonomousDatabaseProperties privateEndpoint. */
                    public privateEndpoint: string;

                    /** AutonomousDatabaseProperties refreshableMode. */
                    public refreshableMode: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.RefreshableMode|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.RefreshableMode);

                    /** AutonomousDatabaseProperties refreshableState. */
                    public refreshableState: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.RefreshableState|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.RefreshableState);

                    /** AutonomousDatabaseProperties role. */
                    public role: (google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.Role|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.Role);

                    /** AutonomousDatabaseProperties scheduledOperationDetails. */
                    public scheduledOperationDetails: google.cloud.oracledatabase.v1.IScheduledOperationDetails[];

                    /** AutonomousDatabaseProperties sqlWebDeveloperUrl. */
                    public sqlWebDeveloperUrl: string;

                    /** AutonomousDatabaseProperties supportedCloneRegions. */
                    public supportedCloneRegions: string[];

                    /** AutonomousDatabaseProperties usedDataStorageSizeTbs. */
                    public usedDataStorageSizeTbs: number;

                    /** AutonomousDatabaseProperties ociUrl. */
                    public ociUrl: string;

                    /** AutonomousDatabaseProperties totalAutoBackupStorageSizeGbs. */
                    public totalAutoBackupStorageSizeGbs: number;

                    /** AutonomousDatabaseProperties nextLongTermBackupTime. */
                    public nextLongTermBackupTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseProperties maintenanceBeginTime. */
                    public maintenanceBeginTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseProperties maintenanceEndTime. */
                    public maintenanceEndTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new AutonomousDatabaseProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutonomousDatabaseProperties instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseProperties): google.cloud.oracledatabase.v1.AutonomousDatabaseProperties;

                    /**
                     * Encodes the specified AutonomousDatabaseProperties message. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.verify|verify} messages.
                     * @param message AutonomousDatabaseProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutonomousDatabaseProperties message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseProperties.verify|verify} messages.
                     * @param message AutonomousDatabaseProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutonomousDatabaseProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutonomousDatabaseProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AutonomousDatabaseProperties;

                    /**
                     * Decodes an AutonomousDatabaseProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutonomousDatabaseProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AutonomousDatabaseProperties;

                    /**
                     * Verifies an AutonomousDatabaseProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutonomousDatabaseProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutonomousDatabaseProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AutonomousDatabaseProperties;

                    /**
                     * Creates a plain object from an AutonomousDatabaseProperties message. Also converts values to other types if specified.
                     * @param message AutonomousDatabaseProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AutonomousDatabaseProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutonomousDatabaseProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutonomousDatabaseProperties
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AutonomousDatabaseProperties {

                    /** DatabaseEdition enum. */
                    enum DatabaseEdition {
                        DATABASE_EDITION_UNSPECIFIED = 0,
                        STANDARD_EDITION = 1,
                        ENTERPRISE_EDITION = 2
                    }

                    /** LicenseType enum. */
                    enum LicenseType {
                        LICENSE_TYPE_UNSPECIFIED = 0,
                        LICENSE_INCLUDED = 1,
                        BRING_YOUR_OWN_LICENSE = 2
                    }

                    /** MaintenanceScheduleType enum. */
                    enum MaintenanceScheduleType {
                        MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED = 0,
                        EARLY = 1,
                        REGULAR = 2
                    }

                    /** LocalDisasterRecoveryType enum. */
                    enum LocalDisasterRecoveryType {
                        LOCAL_DISASTER_RECOVERY_TYPE_UNSPECIFIED = 0,
                        ADG = 1,
                        BACKUP_BASED = 2
                    }

                    /** DataSafeState enum. */
                    enum DataSafeState {
                        DATA_SAFE_STATE_UNSPECIFIED = 0,
                        REGISTERING = 1,
                        REGISTERED = 2,
                        DEREGISTERING = 3,
                        NOT_REGISTERED = 4,
                        FAILED = 5
                    }

                    /** DatabaseManagementState enum. */
                    enum DatabaseManagementState {
                        DATABASE_MANAGEMENT_STATE_UNSPECIFIED = 0,
                        ENABLING = 1,
                        ENABLED = 2,
                        DISABLING = 3,
                        NOT_ENABLED = 4,
                        FAILED_ENABLING = 5,
                        FAILED_DISABLING = 6
                    }

                    /** OpenMode enum. */
                    enum OpenMode {
                        OPEN_MODE_UNSPECIFIED = 0,
                        READ_ONLY = 1,
                        READ_WRITE = 2
                    }

                    /** PermissionLevel enum. */
                    enum PermissionLevel {
                        PERMISSION_LEVEL_UNSPECIFIED = 0,
                        RESTRICTED = 1,
                        UNRESTRICTED = 2
                    }

                    /** RefreshableMode enum. */
                    enum RefreshableMode {
                        REFRESHABLE_MODE_UNSPECIFIED = 0,
                        AUTOMATIC = 1,
                        MANUAL = 2
                    }

                    /** RefreshableState enum. */
                    enum RefreshableState {
                        REFRESHABLE_STATE_UNSPECIFIED = 0,
                        REFRESHING = 1,
                        NOT_REFRESHING = 2
                    }

                    /** Role enum. */
                    enum Role {
                        ROLE_UNSPECIFIED = 0,
                        PRIMARY = 1,
                        STANDBY = 2,
                        DISABLED_STANDBY = 3,
                        BACKUP_COPY = 4,
                        SNAPSHOT_STANDBY = 5
                    }
                }

                /** Properties of an AutonomousDatabaseApex. */
                interface IAutonomousDatabaseApex {

                    /** AutonomousDatabaseApex apexVersion */
                    apexVersion?: (string|null);

                    /** AutonomousDatabaseApex ordsVersion */
                    ordsVersion?: (string|null);
                }

                /** Represents an AutonomousDatabaseApex. */
                class AutonomousDatabaseApex implements IAutonomousDatabaseApex {

                    /**
                     * Constructs a new AutonomousDatabaseApex.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseApex);

                    /** AutonomousDatabaseApex apexVersion. */
                    public apexVersion: string;

                    /** AutonomousDatabaseApex ordsVersion. */
                    public ordsVersion: string;

                    /**
                     * Creates a new AutonomousDatabaseApex instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutonomousDatabaseApex instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseApex): google.cloud.oracledatabase.v1.AutonomousDatabaseApex;

                    /**
                     * Encodes the specified AutonomousDatabaseApex message. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseApex.verify|verify} messages.
                     * @param message AutonomousDatabaseApex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseApex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutonomousDatabaseApex message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseApex.verify|verify} messages.
                     * @param message AutonomousDatabaseApex message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseApex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutonomousDatabaseApex message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutonomousDatabaseApex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AutonomousDatabaseApex;

                    /**
                     * Decodes an AutonomousDatabaseApex message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutonomousDatabaseApex
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AutonomousDatabaseApex;

                    /**
                     * Verifies an AutonomousDatabaseApex message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutonomousDatabaseApex message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutonomousDatabaseApex
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AutonomousDatabaseApex;

                    /**
                     * Creates a plain object from an AutonomousDatabaseApex message. Also converts values to other types if specified.
                     * @param message AutonomousDatabaseApex
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AutonomousDatabaseApex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutonomousDatabaseApex to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutonomousDatabaseApex
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AutonomousDatabaseConnectionStrings. */
                interface IAutonomousDatabaseConnectionStrings {

                    /** AutonomousDatabaseConnectionStrings allConnectionStrings */
                    allConnectionStrings?: (google.cloud.oracledatabase.v1.IAllConnectionStrings|null);

                    /** AutonomousDatabaseConnectionStrings dedicated */
                    dedicated?: (string|null);

                    /** AutonomousDatabaseConnectionStrings high */
                    high?: (string|null);

                    /** AutonomousDatabaseConnectionStrings low */
                    low?: (string|null);

                    /** AutonomousDatabaseConnectionStrings medium */
                    medium?: (string|null);

                    /** AutonomousDatabaseConnectionStrings profiles */
                    profiles?: (google.cloud.oracledatabase.v1.IDatabaseConnectionStringProfile[]|null);
                }

                /** Represents an AutonomousDatabaseConnectionStrings. */
                class AutonomousDatabaseConnectionStrings implements IAutonomousDatabaseConnectionStrings {

                    /**
                     * Constructs a new AutonomousDatabaseConnectionStrings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionStrings);

                    /** AutonomousDatabaseConnectionStrings allConnectionStrings. */
                    public allConnectionStrings?: (google.cloud.oracledatabase.v1.IAllConnectionStrings|null);

                    /** AutonomousDatabaseConnectionStrings dedicated. */
                    public dedicated: string;

                    /** AutonomousDatabaseConnectionStrings high. */
                    public high: string;

                    /** AutonomousDatabaseConnectionStrings low. */
                    public low: string;

                    /** AutonomousDatabaseConnectionStrings medium. */
                    public medium: string;

                    /** AutonomousDatabaseConnectionStrings profiles. */
                    public profiles: google.cloud.oracledatabase.v1.IDatabaseConnectionStringProfile[];

                    /**
                     * Creates a new AutonomousDatabaseConnectionStrings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutonomousDatabaseConnectionStrings instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionStrings): google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionStrings;

                    /**
                     * Encodes the specified AutonomousDatabaseConnectionStrings message. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionStrings.verify|verify} messages.
                     * @param message AutonomousDatabaseConnectionStrings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionStrings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutonomousDatabaseConnectionStrings message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionStrings.verify|verify} messages.
                     * @param message AutonomousDatabaseConnectionStrings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionStrings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutonomousDatabaseConnectionStrings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutonomousDatabaseConnectionStrings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionStrings;

                    /**
                     * Decodes an AutonomousDatabaseConnectionStrings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutonomousDatabaseConnectionStrings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionStrings;

                    /**
                     * Verifies an AutonomousDatabaseConnectionStrings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutonomousDatabaseConnectionStrings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutonomousDatabaseConnectionStrings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionStrings;

                    /**
                     * Creates a plain object from an AutonomousDatabaseConnectionStrings message. Also converts values to other types if specified.
                     * @param message AutonomousDatabaseConnectionStrings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionStrings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutonomousDatabaseConnectionStrings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutonomousDatabaseConnectionStrings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DatabaseConnectionStringProfile. */
                interface IDatabaseConnectionStringProfile {

                    /** DatabaseConnectionStringProfile consumerGroup */
                    consumerGroup?: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.ConsumerGroup|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.ConsumerGroup|null);

                    /** DatabaseConnectionStringProfile displayName */
                    displayName?: (string|null);

                    /** DatabaseConnectionStringProfile hostFormat */
                    hostFormat?: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.HostFormat|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.HostFormat|null);

                    /** DatabaseConnectionStringProfile isRegional */
                    isRegional?: (boolean|null);

                    /** DatabaseConnectionStringProfile protocol */
                    protocol?: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.Protocol|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.Protocol|null);

                    /** DatabaseConnectionStringProfile sessionMode */
                    sessionMode?: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.SessionMode|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.SessionMode|null);

                    /** DatabaseConnectionStringProfile syntaxFormat */
                    syntaxFormat?: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.SyntaxFormat|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.SyntaxFormat|null);

                    /** DatabaseConnectionStringProfile tlsAuthentication */
                    tlsAuthentication?: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.TLSAuthentication|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.TLSAuthentication|null);

                    /** DatabaseConnectionStringProfile value */
                    value?: (string|null);
                }

                /** Represents a DatabaseConnectionStringProfile. */
                class DatabaseConnectionStringProfile implements IDatabaseConnectionStringProfile {

                    /**
                     * Constructs a new DatabaseConnectionStringProfile.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IDatabaseConnectionStringProfile);

                    /** DatabaseConnectionStringProfile consumerGroup. */
                    public consumerGroup: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.ConsumerGroup|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.ConsumerGroup);

                    /** DatabaseConnectionStringProfile displayName. */
                    public displayName: string;

                    /** DatabaseConnectionStringProfile hostFormat. */
                    public hostFormat: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.HostFormat|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.HostFormat);

                    /** DatabaseConnectionStringProfile isRegional. */
                    public isRegional: boolean;

                    /** DatabaseConnectionStringProfile protocol. */
                    public protocol: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.Protocol|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.Protocol);

                    /** DatabaseConnectionStringProfile sessionMode. */
                    public sessionMode: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.SessionMode|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.SessionMode);

                    /** DatabaseConnectionStringProfile syntaxFormat. */
                    public syntaxFormat: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.SyntaxFormat|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.SyntaxFormat);

                    /** DatabaseConnectionStringProfile tlsAuthentication. */
                    public tlsAuthentication: (google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.TLSAuthentication|keyof typeof google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.TLSAuthentication);

                    /** DatabaseConnectionStringProfile value. */
                    public value: string;

                    /**
                     * Creates a new DatabaseConnectionStringProfile instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DatabaseConnectionStringProfile instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IDatabaseConnectionStringProfile): google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile;

                    /**
                     * Encodes the specified DatabaseConnectionStringProfile message. Does not implicitly {@link google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.verify|verify} messages.
                     * @param message DatabaseConnectionStringProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IDatabaseConnectionStringProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DatabaseConnectionStringProfile message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile.verify|verify} messages.
                     * @param message DatabaseConnectionStringProfile message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IDatabaseConnectionStringProfile, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DatabaseConnectionStringProfile message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DatabaseConnectionStringProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile;

                    /**
                     * Decodes a DatabaseConnectionStringProfile message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DatabaseConnectionStringProfile
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile;

                    /**
                     * Verifies a DatabaseConnectionStringProfile message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DatabaseConnectionStringProfile message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DatabaseConnectionStringProfile
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile;

                    /**
                     * Creates a plain object from a DatabaseConnectionStringProfile message. Also converts values to other types if specified.
                     * @param message DatabaseConnectionStringProfile
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.DatabaseConnectionStringProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DatabaseConnectionStringProfile to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DatabaseConnectionStringProfile
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DatabaseConnectionStringProfile {

                    /** ConsumerGroup enum. */
                    enum ConsumerGroup {
                        CONSUMER_GROUP_UNSPECIFIED = 0,
                        HIGH = 1,
                        MEDIUM = 2,
                        LOW = 3,
                        TP = 4,
                        TPURGENT = 5
                    }

                    /** HostFormat enum. */
                    enum HostFormat {
                        HOST_FORMAT_UNSPECIFIED = 0,
                        FQDN = 1,
                        IP = 2
                    }

                    /** Protocol enum. */
                    enum Protocol {
                        PROTOCOL_UNSPECIFIED = 0,
                        TCP = 1,
                        TCPS = 2
                    }

                    /** SessionMode enum. */
                    enum SessionMode {
                        SESSION_MODE_UNSPECIFIED = 0,
                        DIRECT = 1,
                        INDIRECT = 2
                    }

                    /** SyntaxFormat enum. */
                    enum SyntaxFormat {
                        SYNTAX_FORMAT_UNSPECIFIED = 0,
                        LONG = 1,
                        EZCONNECT = 2,
                        EZCONNECTPLUS = 3
                    }

                    /** TLSAuthentication enum. */
                    enum TLSAuthentication {
                        TLS_AUTHENTICATION_UNSPECIFIED = 0,
                        SERVER = 1,
                        MUTUAL = 2
                    }
                }

                /** Properties of an AllConnectionStrings. */
                interface IAllConnectionStrings {

                    /** AllConnectionStrings high */
                    high?: (string|null);

                    /** AllConnectionStrings low */
                    low?: (string|null);

                    /** AllConnectionStrings medium */
                    medium?: (string|null);
                }

                /** Represents an AllConnectionStrings. */
                class AllConnectionStrings implements IAllConnectionStrings {

                    /**
                     * Constructs a new AllConnectionStrings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAllConnectionStrings);

                    /** AllConnectionStrings high. */
                    public high: string;

                    /** AllConnectionStrings low. */
                    public low: string;

                    /** AllConnectionStrings medium. */
                    public medium: string;

                    /**
                     * Creates a new AllConnectionStrings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AllConnectionStrings instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAllConnectionStrings): google.cloud.oracledatabase.v1.AllConnectionStrings;

                    /**
                     * Encodes the specified AllConnectionStrings message. Does not implicitly {@link google.cloud.oracledatabase.v1.AllConnectionStrings.verify|verify} messages.
                     * @param message AllConnectionStrings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAllConnectionStrings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AllConnectionStrings message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AllConnectionStrings.verify|verify} messages.
                     * @param message AllConnectionStrings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAllConnectionStrings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AllConnectionStrings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AllConnectionStrings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AllConnectionStrings;

                    /**
                     * Decodes an AllConnectionStrings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AllConnectionStrings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AllConnectionStrings;

                    /**
                     * Verifies an AllConnectionStrings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AllConnectionStrings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AllConnectionStrings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AllConnectionStrings;

                    /**
                     * Creates a plain object from an AllConnectionStrings message. Also converts values to other types if specified.
                     * @param message AllConnectionStrings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AllConnectionStrings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AllConnectionStrings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AllConnectionStrings
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AutonomousDatabaseConnectionUrls. */
                interface IAutonomousDatabaseConnectionUrls {

                    /** AutonomousDatabaseConnectionUrls apexUri */
                    apexUri?: (string|null);

                    /** AutonomousDatabaseConnectionUrls databaseTransformsUri */
                    databaseTransformsUri?: (string|null);

                    /** AutonomousDatabaseConnectionUrls graphStudioUri */
                    graphStudioUri?: (string|null);

                    /** AutonomousDatabaseConnectionUrls machineLearningNotebookUri */
                    machineLearningNotebookUri?: (string|null);

                    /** AutonomousDatabaseConnectionUrls machineLearningUserManagementUri */
                    machineLearningUserManagementUri?: (string|null);

                    /** AutonomousDatabaseConnectionUrls mongoDbUri */
                    mongoDbUri?: (string|null);

                    /** AutonomousDatabaseConnectionUrls ordsUri */
                    ordsUri?: (string|null);

                    /** AutonomousDatabaseConnectionUrls sqlDevWebUri */
                    sqlDevWebUri?: (string|null);
                }

                /** Represents an AutonomousDatabaseConnectionUrls. */
                class AutonomousDatabaseConnectionUrls implements IAutonomousDatabaseConnectionUrls {

                    /**
                     * Constructs a new AutonomousDatabaseConnectionUrls.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionUrls);

                    /** AutonomousDatabaseConnectionUrls apexUri. */
                    public apexUri: string;

                    /** AutonomousDatabaseConnectionUrls databaseTransformsUri. */
                    public databaseTransformsUri: string;

                    /** AutonomousDatabaseConnectionUrls graphStudioUri. */
                    public graphStudioUri: string;

                    /** AutonomousDatabaseConnectionUrls machineLearningNotebookUri. */
                    public machineLearningNotebookUri: string;

                    /** AutonomousDatabaseConnectionUrls machineLearningUserManagementUri. */
                    public machineLearningUserManagementUri: string;

                    /** AutonomousDatabaseConnectionUrls mongoDbUri. */
                    public mongoDbUri: string;

                    /** AutonomousDatabaseConnectionUrls ordsUri. */
                    public ordsUri: string;

                    /** AutonomousDatabaseConnectionUrls sqlDevWebUri. */
                    public sqlDevWebUri: string;

                    /**
                     * Creates a new AutonomousDatabaseConnectionUrls instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutonomousDatabaseConnectionUrls instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionUrls): google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionUrls;

                    /**
                     * Encodes the specified AutonomousDatabaseConnectionUrls message. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionUrls.verify|verify} messages.
                     * @param message AutonomousDatabaseConnectionUrls message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionUrls, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutonomousDatabaseConnectionUrls message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionUrls.verify|verify} messages.
                     * @param message AutonomousDatabaseConnectionUrls message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseConnectionUrls, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutonomousDatabaseConnectionUrls message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutonomousDatabaseConnectionUrls
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionUrls;

                    /**
                     * Decodes an AutonomousDatabaseConnectionUrls message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutonomousDatabaseConnectionUrls
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionUrls;

                    /**
                     * Verifies an AutonomousDatabaseConnectionUrls message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutonomousDatabaseConnectionUrls message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutonomousDatabaseConnectionUrls
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionUrls;

                    /**
                     * Creates a plain object from an AutonomousDatabaseConnectionUrls message. Also converts values to other types if specified.
                     * @param message AutonomousDatabaseConnectionUrls
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AutonomousDatabaseConnectionUrls, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutonomousDatabaseConnectionUrls to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutonomousDatabaseConnectionUrls
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AutonomousDatabaseStandbySummary. */
                interface IAutonomousDatabaseStandbySummary {

                    /** AutonomousDatabaseStandbySummary lagTimeDuration */
                    lagTimeDuration?: (google.protobuf.IDuration|null);

                    /** AutonomousDatabaseStandbySummary lifecycleDetails */
                    lifecycleDetails?: (string|null);

                    /** AutonomousDatabaseStandbySummary state */
                    state?: (google.cloud.oracledatabase.v1.State|keyof typeof google.cloud.oracledatabase.v1.State|null);

                    /** AutonomousDatabaseStandbySummary dataGuardRoleChangedTime */
                    dataGuardRoleChangedTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseStandbySummary disasterRecoveryRoleChangedTime */
                    disasterRecoveryRoleChangedTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AutonomousDatabaseStandbySummary. */
                class AutonomousDatabaseStandbySummary implements IAutonomousDatabaseStandbySummary {

                    /**
                     * Constructs a new AutonomousDatabaseStandbySummary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseStandbySummary);

                    /** AutonomousDatabaseStandbySummary lagTimeDuration. */
                    public lagTimeDuration?: (google.protobuf.IDuration|null);

                    /** AutonomousDatabaseStandbySummary lifecycleDetails. */
                    public lifecycleDetails: string;

                    /** AutonomousDatabaseStandbySummary state. */
                    public state: (google.cloud.oracledatabase.v1.State|keyof typeof google.cloud.oracledatabase.v1.State);

                    /** AutonomousDatabaseStandbySummary dataGuardRoleChangedTime. */
                    public dataGuardRoleChangedTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseStandbySummary disasterRecoveryRoleChangedTime. */
                    public disasterRecoveryRoleChangedTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new AutonomousDatabaseStandbySummary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutonomousDatabaseStandbySummary instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseStandbySummary): google.cloud.oracledatabase.v1.AutonomousDatabaseStandbySummary;

                    /**
                     * Encodes the specified AutonomousDatabaseStandbySummary message. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseStandbySummary.verify|verify} messages.
                     * @param message AutonomousDatabaseStandbySummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseStandbySummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutonomousDatabaseStandbySummary message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseStandbySummary.verify|verify} messages.
                     * @param message AutonomousDatabaseStandbySummary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseStandbySummary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutonomousDatabaseStandbySummary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutonomousDatabaseStandbySummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AutonomousDatabaseStandbySummary;

                    /**
                     * Decodes an AutonomousDatabaseStandbySummary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutonomousDatabaseStandbySummary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AutonomousDatabaseStandbySummary;

                    /**
                     * Verifies an AutonomousDatabaseStandbySummary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutonomousDatabaseStandbySummary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutonomousDatabaseStandbySummary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AutonomousDatabaseStandbySummary;

                    /**
                     * Creates a plain object from an AutonomousDatabaseStandbySummary message. Also converts values to other types if specified.
                     * @param message AutonomousDatabaseStandbySummary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AutonomousDatabaseStandbySummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutonomousDatabaseStandbySummary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutonomousDatabaseStandbySummary
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ScheduledOperationDetails. */
                interface IScheduledOperationDetails {

                    /** ScheduledOperationDetails dayOfWeek */
                    dayOfWeek?: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek|null);

                    /** ScheduledOperationDetails startTime */
                    startTime?: (google.type.ITimeOfDay|null);

                    /** ScheduledOperationDetails stopTime */
                    stopTime?: (google.type.ITimeOfDay|null);
                }

                /** Represents a ScheduledOperationDetails. */
                class ScheduledOperationDetails implements IScheduledOperationDetails {

                    /**
                     * Constructs a new ScheduledOperationDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IScheduledOperationDetails);

                    /** ScheduledOperationDetails dayOfWeek. */
                    public dayOfWeek: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek);

                    /** ScheduledOperationDetails startTime. */
                    public startTime?: (google.type.ITimeOfDay|null);

                    /** ScheduledOperationDetails stopTime. */
                    public stopTime?: (google.type.ITimeOfDay|null);

                    /**
                     * Creates a new ScheduledOperationDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScheduledOperationDetails instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IScheduledOperationDetails): google.cloud.oracledatabase.v1.ScheduledOperationDetails;

                    /**
                     * Encodes the specified ScheduledOperationDetails message. Does not implicitly {@link google.cloud.oracledatabase.v1.ScheduledOperationDetails.verify|verify} messages.
                     * @param message ScheduledOperationDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IScheduledOperationDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScheduledOperationDetails message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ScheduledOperationDetails.verify|verify} messages.
                     * @param message ScheduledOperationDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IScheduledOperationDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScheduledOperationDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScheduledOperationDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ScheduledOperationDetails;

                    /**
                     * Decodes a ScheduledOperationDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScheduledOperationDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ScheduledOperationDetails;

                    /**
                     * Verifies a ScheduledOperationDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScheduledOperationDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScheduledOperationDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ScheduledOperationDetails;

                    /**
                     * Creates a plain object from a ScheduledOperationDetails message. Also converts values to other types if specified.
                     * @param message ScheduledOperationDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ScheduledOperationDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScheduledOperationDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ScheduledOperationDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CustomerContact. */
                interface ICustomerContact {

                    /** CustomerContact email */
                    email?: (string|null);
                }

                /** Represents a CustomerContact. */
                class CustomerContact implements ICustomerContact {

                    /**
                     * Constructs a new CustomerContact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.ICustomerContact);

                    /** CustomerContact email. */
                    public email: string;

                    /**
                     * Creates a new CustomerContact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomerContact instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.ICustomerContact): google.cloud.oracledatabase.v1.CustomerContact;

                    /**
                     * Encodes the specified CustomerContact message. Does not implicitly {@link google.cloud.oracledatabase.v1.CustomerContact.verify|verify} messages.
                     * @param message CustomerContact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.ICustomerContact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomerContact message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.CustomerContact.verify|verify} messages.
                     * @param message CustomerContact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.ICustomerContact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomerContact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomerContact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.CustomerContact;

                    /**
                     * Decodes a CustomerContact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomerContact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.CustomerContact;

                    /**
                     * Verifies a CustomerContact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomerContact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomerContact
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.CustomerContact;

                    /**
                     * Creates a plain object from a CustomerContact message. Also converts values to other types if specified.
                     * @param message CustomerContact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.CustomerContact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomerContact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CustomerContact
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AutonomousDatabaseCharacterSet. */
                interface IAutonomousDatabaseCharacterSet {

                    /** AutonomousDatabaseCharacterSet name */
                    name?: (string|null);

                    /** AutonomousDatabaseCharacterSet characterSetType */
                    characterSetType?: (google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet.CharacterSetType|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet.CharacterSetType|null);

                    /** AutonomousDatabaseCharacterSet characterSet */
                    characterSet?: (string|null);
                }

                /** Represents an AutonomousDatabaseCharacterSet. */
                class AutonomousDatabaseCharacterSet implements IAutonomousDatabaseCharacterSet {

                    /**
                     * Constructs a new AutonomousDatabaseCharacterSet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseCharacterSet);

                    /** AutonomousDatabaseCharacterSet name. */
                    public name: string;

                    /** AutonomousDatabaseCharacterSet characterSetType. */
                    public characterSetType: (google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet.CharacterSetType|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet.CharacterSetType);

                    /** AutonomousDatabaseCharacterSet characterSet. */
                    public characterSet: string;

                    /**
                     * Creates a new AutonomousDatabaseCharacterSet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutonomousDatabaseCharacterSet instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseCharacterSet): google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet;

                    /**
                     * Encodes the specified AutonomousDatabaseCharacterSet message. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet.verify|verify} messages.
                     * @param message AutonomousDatabaseCharacterSet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseCharacterSet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutonomousDatabaseCharacterSet message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet.verify|verify} messages.
                     * @param message AutonomousDatabaseCharacterSet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseCharacterSet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutonomousDatabaseCharacterSet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutonomousDatabaseCharacterSet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet;

                    /**
                     * Decodes an AutonomousDatabaseCharacterSet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutonomousDatabaseCharacterSet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet;

                    /**
                     * Verifies an AutonomousDatabaseCharacterSet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutonomousDatabaseCharacterSet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutonomousDatabaseCharacterSet
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet;

                    /**
                     * Creates a plain object from an AutonomousDatabaseCharacterSet message. Also converts values to other types if specified.
                     * @param message AutonomousDatabaseCharacterSet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AutonomousDatabaseCharacterSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutonomousDatabaseCharacterSet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutonomousDatabaseCharacterSet
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AutonomousDatabaseCharacterSet {

                    /** CharacterSetType enum. */
                    enum CharacterSetType {
                        CHARACTER_SET_TYPE_UNSPECIFIED = 0,
                        DATABASE = 1,
                        NATIONAL = 2
                    }
                }

                /** Properties of an AutonomousDatabaseBackup. */
                interface IAutonomousDatabaseBackup {

                    /** AutonomousDatabaseBackup name */
                    name?: (string|null);

                    /** AutonomousDatabaseBackup autonomousDatabase */
                    autonomousDatabase?: (string|null);

                    /** AutonomousDatabaseBackup displayName */
                    displayName?: (string|null);

                    /** AutonomousDatabaseBackup properties */
                    properties?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseBackupProperties|null);

                    /** AutonomousDatabaseBackup labels */
                    labels?: ({ [k: string]: string }|null);
                }

                /** Represents an AutonomousDatabaseBackup. */
                class AutonomousDatabaseBackup implements IAutonomousDatabaseBackup {

                    /**
                     * Constructs a new AutonomousDatabaseBackup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseBackup);

                    /** AutonomousDatabaseBackup name. */
                    public name: string;

                    /** AutonomousDatabaseBackup autonomousDatabase. */
                    public autonomousDatabase: string;

                    /** AutonomousDatabaseBackup displayName. */
                    public displayName: string;

                    /** AutonomousDatabaseBackup properties. */
                    public properties?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseBackupProperties|null);

                    /** AutonomousDatabaseBackup labels. */
                    public labels: { [k: string]: string };

                    /**
                     * Creates a new AutonomousDatabaseBackup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutonomousDatabaseBackup instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseBackup): google.cloud.oracledatabase.v1.AutonomousDatabaseBackup;

                    /**
                     * Encodes the specified AutonomousDatabaseBackup message. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseBackup.verify|verify} messages.
                     * @param message AutonomousDatabaseBackup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutonomousDatabaseBackup message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseBackup.verify|verify} messages.
                     * @param message AutonomousDatabaseBackup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutonomousDatabaseBackup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutonomousDatabaseBackup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AutonomousDatabaseBackup;

                    /**
                     * Decodes an AutonomousDatabaseBackup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutonomousDatabaseBackup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AutonomousDatabaseBackup;

                    /**
                     * Verifies an AutonomousDatabaseBackup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutonomousDatabaseBackup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutonomousDatabaseBackup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AutonomousDatabaseBackup;

                    /**
                     * Creates a plain object from an AutonomousDatabaseBackup message. Also converts values to other types if specified.
                     * @param message AutonomousDatabaseBackup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AutonomousDatabaseBackup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutonomousDatabaseBackup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutonomousDatabaseBackup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an AutonomousDatabaseBackupProperties. */
                interface IAutonomousDatabaseBackupProperties {

                    /** AutonomousDatabaseBackupProperties ocid */
                    ocid?: (string|null);

                    /** AutonomousDatabaseBackupProperties retentionPeriodDays */
                    retentionPeriodDays?: (number|null);

                    /** AutonomousDatabaseBackupProperties compartmentId */
                    compartmentId?: (string|null);

                    /** AutonomousDatabaseBackupProperties databaseSizeTb */
                    databaseSizeTb?: (number|null);

                    /** AutonomousDatabaseBackupProperties dbVersion */
                    dbVersion?: (string|null);

                    /** AutonomousDatabaseBackupProperties isLongTermBackup */
                    isLongTermBackup?: (boolean|null);

                    /** AutonomousDatabaseBackupProperties isAutomaticBackup */
                    isAutomaticBackup?: (boolean|null);

                    /** AutonomousDatabaseBackupProperties isRestorable */
                    isRestorable?: (boolean|null);

                    /** AutonomousDatabaseBackupProperties keyStoreId */
                    keyStoreId?: (string|null);

                    /** AutonomousDatabaseBackupProperties keyStoreWallet */
                    keyStoreWallet?: (string|null);

                    /** AutonomousDatabaseBackupProperties kmsKeyId */
                    kmsKeyId?: (string|null);

                    /** AutonomousDatabaseBackupProperties kmsKeyVersionId */
                    kmsKeyVersionId?: (string|null);

                    /** AutonomousDatabaseBackupProperties lifecycleDetails */
                    lifecycleDetails?: (string|null);

                    /** AutonomousDatabaseBackupProperties lifecycleState */
                    lifecycleState?: (google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties.State|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties.State|null);

                    /** AutonomousDatabaseBackupProperties sizeTb */
                    sizeTb?: (number|null);

                    /** AutonomousDatabaseBackupProperties availableTillTime */
                    availableTillTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseBackupProperties endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseBackupProperties startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseBackupProperties type */
                    type?: (google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties.Type|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties.Type|null);

                    /** AutonomousDatabaseBackupProperties vaultId */
                    vaultId?: (string|null);
                }

                /** Represents an AutonomousDatabaseBackupProperties. */
                class AutonomousDatabaseBackupProperties implements IAutonomousDatabaseBackupProperties {

                    /**
                     * Constructs a new AutonomousDatabaseBackupProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseBackupProperties);

                    /** AutonomousDatabaseBackupProperties ocid. */
                    public ocid: string;

                    /** AutonomousDatabaseBackupProperties retentionPeriodDays. */
                    public retentionPeriodDays: number;

                    /** AutonomousDatabaseBackupProperties compartmentId. */
                    public compartmentId: string;

                    /** AutonomousDatabaseBackupProperties databaseSizeTb. */
                    public databaseSizeTb: number;

                    /** AutonomousDatabaseBackupProperties dbVersion. */
                    public dbVersion: string;

                    /** AutonomousDatabaseBackupProperties isLongTermBackup. */
                    public isLongTermBackup: boolean;

                    /** AutonomousDatabaseBackupProperties isAutomaticBackup. */
                    public isAutomaticBackup: boolean;

                    /** AutonomousDatabaseBackupProperties isRestorable. */
                    public isRestorable: boolean;

                    /** AutonomousDatabaseBackupProperties keyStoreId. */
                    public keyStoreId: string;

                    /** AutonomousDatabaseBackupProperties keyStoreWallet. */
                    public keyStoreWallet: string;

                    /** AutonomousDatabaseBackupProperties kmsKeyId. */
                    public kmsKeyId: string;

                    /** AutonomousDatabaseBackupProperties kmsKeyVersionId. */
                    public kmsKeyVersionId: string;

                    /** AutonomousDatabaseBackupProperties lifecycleDetails. */
                    public lifecycleDetails: string;

                    /** AutonomousDatabaseBackupProperties lifecycleState. */
                    public lifecycleState: (google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties.State|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties.State);

                    /** AutonomousDatabaseBackupProperties sizeTb. */
                    public sizeTb: number;

                    /** AutonomousDatabaseBackupProperties availableTillTime. */
                    public availableTillTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseBackupProperties endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseBackupProperties startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** AutonomousDatabaseBackupProperties type. */
                    public type: (google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties.Type|keyof typeof google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties.Type);

                    /** AutonomousDatabaseBackupProperties vaultId. */
                    public vaultId: string;

                    /**
                     * Creates a new AutonomousDatabaseBackupProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutonomousDatabaseBackupProperties instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAutonomousDatabaseBackupProperties): google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties;

                    /**
                     * Encodes the specified AutonomousDatabaseBackupProperties message. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties.verify|verify} messages.
                     * @param message AutonomousDatabaseBackupProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseBackupProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutonomousDatabaseBackupProperties message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties.verify|verify} messages.
                     * @param message AutonomousDatabaseBackupProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAutonomousDatabaseBackupProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutonomousDatabaseBackupProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutonomousDatabaseBackupProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties;

                    /**
                     * Decodes an AutonomousDatabaseBackupProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutonomousDatabaseBackupProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties;

                    /**
                     * Verifies an AutonomousDatabaseBackupProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutonomousDatabaseBackupProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutonomousDatabaseBackupProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties;

                    /**
                     * Creates a plain object from an AutonomousDatabaseBackupProperties message. Also converts values to other types if specified.
                     * @param message AutonomousDatabaseBackupProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AutonomousDatabaseBackupProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutonomousDatabaseBackupProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutonomousDatabaseBackupProperties
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace AutonomousDatabaseBackupProperties {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        ACTIVE = 2,
                        DELETING = 3,
                        DELETED = 4,
                        FAILED = 6,
                        UPDATING = 7
                    }

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        INCREMENTAL = 1,
                        FULL = 2,
                        LONG_TERM = 3
                    }
                }

                /** Properties of an AutonomousDbVersion. */
                interface IAutonomousDbVersion {

                    /** AutonomousDbVersion name */
                    name?: (string|null);

                    /** AutonomousDbVersion version */
                    version?: (string|null);

                    /** AutonomousDbVersion dbWorkload */
                    dbWorkload?: (google.cloud.oracledatabase.v1.DBWorkload|keyof typeof google.cloud.oracledatabase.v1.DBWorkload|null);

                    /** AutonomousDbVersion workloadUri */
                    workloadUri?: (string|null);
                }

                /** Represents an AutonomousDbVersion. */
                class AutonomousDbVersion implements IAutonomousDbVersion {

                    /**
                     * Constructs a new AutonomousDbVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IAutonomousDbVersion);

                    /** AutonomousDbVersion name. */
                    public name: string;

                    /** AutonomousDbVersion version. */
                    public version: string;

                    /** AutonomousDbVersion dbWorkload. */
                    public dbWorkload: (google.cloud.oracledatabase.v1.DBWorkload|keyof typeof google.cloud.oracledatabase.v1.DBWorkload);

                    /** AutonomousDbVersion workloadUri. */
                    public workloadUri: string;

                    /**
                     * Creates a new AutonomousDbVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AutonomousDbVersion instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IAutonomousDbVersion): google.cloud.oracledatabase.v1.AutonomousDbVersion;

                    /**
                     * Encodes the specified AutonomousDbVersion message. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDbVersion.verify|verify} messages.
                     * @param message AutonomousDbVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IAutonomousDbVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AutonomousDbVersion message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.AutonomousDbVersion.verify|verify} messages.
                     * @param message AutonomousDbVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IAutonomousDbVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AutonomousDbVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AutonomousDbVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.AutonomousDbVersion;

                    /**
                     * Decodes an AutonomousDbVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AutonomousDbVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.AutonomousDbVersion;

                    /**
                     * Verifies an AutonomousDbVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AutonomousDbVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AutonomousDbVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.AutonomousDbVersion;

                    /**
                     * Creates a plain object from an AutonomousDbVersion message. Also converts values to other types if specified.
                     * @param message AutonomousDbVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.AutonomousDbVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AutonomousDbVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for AutonomousDbVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DbNode. */
                interface IDbNode {

                    /** DbNode name */
                    name?: (string|null);

                    /** DbNode properties */
                    properties?: (google.cloud.oracledatabase.v1.IDbNodeProperties|null);
                }

                /** Represents a DbNode. */
                class DbNode implements IDbNode {

                    /**
                     * Constructs a new DbNode.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IDbNode);

                    /** DbNode name. */
                    public name: string;

                    /** DbNode properties. */
                    public properties?: (google.cloud.oracledatabase.v1.IDbNodeProperties|null);

                    /**
                     * Creates a new DbNode instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DbNode instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IDbNode): google.cloud.oracledatabase.v1.DbNode;

                    /**
                     * Encodes the specified DbNode message. Does not implicitly {@link google.cloud.oracledatabase.v1.DbNode.verify|verify} messages.
                     * @param message DbNode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IDbNode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DbNode message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.DbNode.verify|verify} messages.
                     * @param message DbNode message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IDbNode, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DbNode message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DbNode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.DbNode;

                    /**
                     * Decodes a DbNode message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DbNode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.DbNode;

                    /**
                     * Verifies a DbNode message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DbNode message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DbNode
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.DbNode;

                    /**
                     * Creates a plain object from a DbNode message. Also converts values to other types if specified.
                     * @param message DbNode
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.DbNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DbNode to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DbNode
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DbNodeProperties. */
                interface IDbNodeProperties {

                    /** DbNodeProperties ocid */
                    ocid?: (string|null);

                    /** DbNodeProperties ocpuCount */
                    ocpuCount?: (number|null);

                    /** DbNodeProperties memorySizeGb */
                    memorySizeGb?: (number|null);

                    /** DbNodeProperties dbNodeStorageSizeGb */
                    dbNodeStorageSizeGb?: (number|null);

                    /** DbNodeProperties dbServerOcid */
                    dbServerOcid?: (string|null);

                    /** DbNodeProperties hostname */
                    hostname?: (string|null);

                    /** DbNodeProperties state */
                    state?: (google.cloud.oracledatabase.v1.DbNodeProperties.State|keyof typeof google.cloud.oracledatabase.v1.DbNodeProperties.State|null);

                    /** DbNodeProperties totalCpuCoreCount */
                    totalCpuCoreCount?: (number|null);
                }

                /** Represents a DbNodeProperties. */
                class DbNodeProperties implements IDbNodeProperties {

                    /**
                     * Constructs a new DbNodeProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IDbNodeProperties);

                    /** DbNodeProperties ocid. */
                    public ocid: string;

                    /** DbNodeProperties ocpuCount. */
                    public ocpuCount: number;

                    /** DbNodeProperties memorySizeGb. */
                    public memorySizeGb: number;

                    /** DbNodeProperties dbNodeStorageSizeGb. */
                    public dbNodeStorageSizeGb: number;

                    /** DbNodeProperties dbServerOcid. */
                    public dbServerOcid: string;

                    /** DbNodeProperties hostname. */
                    public hostname: string;

                    /** DbNodeProperties state. */
                    public state: (google.cloud.oracledatabase.v1.DbNodeProperties.State|keyof typeof google.cloud.oracledatabase.v1.DbNodeProperties.State);

                    /** DbNodeProperties totalCpuCoreCount. */
                    public totalCpuCoreCount: number;

                    /**
                     * Creates a new DbNodeProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DbNodeProperties instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IDbNodeProperties): google.cloud.oracledatabase.v1.DbNodeProperties;

                    /**
                     * Encodes the specified DbNodeProperties message. Does not implicitly {@link google.cloud.oracledatabase.v1.DbNodeProperties.verify|verify} messages.
                     * @param message DbNodeProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IDbNodeProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DbNodeProperties message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.DbNodeProperties.verify|verify} messages.
                     * @param message DbNodeProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IDbNodeProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DbNodeProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DbNodeProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.DbNodeProperties;

                    /**
                     * Decodes a DbNodeProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DbNodeProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.DbNodeProperties;

                    /**
                     * Verifies a DbNodeProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DbNodeProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DbNodeProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.DbNodeProperties;

                    /**
                     * Creates a plain object from a DbNodeProperties message. Also converts values to other types if specified.
                     * @param message DbNodeProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.DbNodeProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DbNodeProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DbNodeProperties
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DbNodeProperties {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONING = 1,
                        AVAILABLE = 2,
                        UPDATING = 3,
                        STOPPING = 4,
                        STOPPED = 5,
                        STARTING = 6,
                        TERMINATING = 7,
                        TERMINATED = 8,
                        FAILED = 9
                    }
                }

                /** Properties of a DbServer. */
                interface IDbServer {

                    /** DbServer name */
                    name?: (string|null);

                    /** DbServer displayName */
                    displayName?: (string|null);

                    /** DbServer properties */
                    properties?: (google.cloud.oracledatabase.v1.IDbServerProperties|null);
                }

                /** Represents a DbServer. */
                class DbServer implements IDbServer {

                    /**
                     * Constructs a new DbServer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IDbServer);

                    /** DbServer name. */
                    public name: string;

                    /** DbServer displayName. */
                    public displayName: string;

                    /** DbServer properties. */
                    public properties?: (google.cloud.oracledatabase.v1.IDbServerProperties|null);

                    /**
                     * Creates a new DbServer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DbServer instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IDbServer): google.cloud.oracledatabase.v1.DbServer;

                    /**
                     * Encodes the specified DbServer message. Does not implicitly {@link google.cloud.oracledatabase.v1.DbServer.verify|verify} messages.
                     * @param message DbServer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IDbServer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DbServer message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.DbServer.verify|verify} messages.
                     * @param message DbServer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IDbServer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DbServer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DbServer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.DbServer;

                    /**
                     * Decodes a DbServer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DbServer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.DbServer;

                    /**
                     * Verifies a DbServer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DbServer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DbServer
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.DbServer;

                    /**
                     * Creates a plain object from a DbServer message. Also converts values to other types if specified.
                     * @param message DbServer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.DbServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DbServer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DbServer
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DbServerProperties. */
                interface IDbServerProperties {

                    /** DbServerProperties ocid */
                    ocid?: (string|null);

                    /** DbServerProperties ocpuCount */
                    ocpuCount?: (number|null);

                    /** DbServerProperties maxOcpuCount */
                    maxOcpuCount?: (number|null);

                    /** DbServerProperties memorySizeGb */
                    memorySizeGb?: (number|null);

                    /** DbServerProperties maxMemorySizeGb */
                    maxMemorySizeGb?: (number|null);

                    /** DbServerProperties dbNodeStorageSizeGb */
                    dbNodeStorageSizeGb?: (number|null);

                    /** DbServerProperties maxDbNodeStorageSizeGb */
                    maxDbNodeStorageSizeGb?: (number|null);

                    /** DbServerProperties vmCount */
                    vmCount?: (number|null);

                    /** DbServerProperties state */
                    state?: (google.cloud.oracledatabase.v1.DbServerProperties.State|keyof typeof google.cloud.oracledatabase.v1.DbServerProperties.State|null);

                    /** DbServerProperties dbNodeIds */
                    dbNodeIds?: (string[]|null);
                }

                /** Represents a DbServerProperties. */
                class DbServerProperties implements IDbServerProperties {

                    /**
                     * Constructs a new DbServerProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IDbServerProperties);

                    /** DbServerProperties ocid. */
                    public ocid: string;

                    /** DbServerProperties ocpuCount. */
                    public ocpuCount: number;

                    /** DbServerProperties maxOcpuCount. */
                    public maxOcpuCount: number;

                    /** DbServerProperties memorySizeGb. */
                    public memorySizeGb: number;

                    /** DbServerProperties maxMemorySizeGb. */
                    public maxMemorySizeGb: number;

                    /** DbServerProperties dbNodeStorageSizeGb. */
                    public dbNodeStorageSizeGb: number;

                    /** DbServerProperties maxDbNodeStorageSizeGb. */
                    public maxDbNodeStorageSizeGb: number;

                    /** DbServerProperties vmCount. */
                    public vmCount: number;

                    /** DbServerProperties state. */
                    public state: (google.cloud.oracledatabase.v1.DbServerProperties.State|keyof typeof google.cloud.oracledatabase.v1.DbServerProperties.State);

                    /** DbServerProperties dbNodeIds. */
                    public dbNodeIds: string[];

                    /**
                     * Creates a new DbServerProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DbServerProperties instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IDbServerProperties): google.cloud.oracledatabase.v1.DbServerProperties;

                    /**
                     * Encodes the specified DbServerProperties message. Does not implicitly {@link google.cloud.oracledatabase.v1.DbServerProperties.verify|verify} messages.
                     * @param message DbServerProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IDbServerProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DbServerProperties message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.DbServerProperties.verify|verify} messages.
                     * @param message DbServerProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IDbServerProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DbServerProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DbServerProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.DbServerProperties;

                    /**
                     * Decodes a DbServerProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DbServerProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.DbServerProperties;

                    /**
                     * Verifies a DbServerProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DbServerProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DbServerProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.DbServerProperties;

                    /**
                     * Creates a plain object from a DbServerProperties message. Also converts values to other types if specified.
                     * @param message DbServerProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.DbServerProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DbServerProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DbServerProperties
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace DbServerProperties {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        AVAILABLE = 2,
                        UNAVAILABLE = 3,
                        DELETING = 4,
                        DELETED = 5
                    }
                }

                /** Properties of a DbSystemShape. */
                interface IDbSystemShape {

                    /** DbSystemShape name */
                    name?: (string|null);

                    /** DbSystemShape shape */
                    shape?: (string|null);

                    /** DbSystemShape minNodeCount */
                    minNodeCount?: (number|null);

                    /** DbSystemShape maxNodeCount */
                    maxNodeCount?: (number|null);

                    /** DbSystemShape minStorageCount */
                    minStorageCount?: (number|null);

                    /** DbSystemShape maxStorageCount */
                    maxStorageCount?: (number|null);

                    /** DbSystemShape availableCoreCountPerNode */
                    availableCoreCountPerNode?: (number|null);

                    /** DbSystemShape availableMemoryPerNodeGb */
                    availableMemoryPerNodeGb?: (number|null);

                    /** DbSystemShape availableDataStorageTb */
                    availableDataStorageTb?: (number|null);

                    /** DbSystemShape minCoreCountPerNode */
                    minCoreCountPerNode?: (number|null);

                    /** DbSystemShape minMemoryPerNodeGb */
                    minMemoryPerNodeGb?: (number|null);

                    /** DbSystemShape minDbNodeStoragePerNodeGb */
                    minDbNodeStoragePerNodeGb?: (number|null);
                }

                /** Represents a DbSystemShape. */
                class DbSystemShape implements IDbSystemShape {

                    /**
                     * Constructs a new DbSystemShape.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IDbSystemShape);

                    /** DbSystemShape name. */
                    public name: string;

                    /** DbSystemShape shape. */
                    public shape: string;

                    /** DbSystemShape minNodeCount. */
                    public minNodeCount: number;

                    /** DbSystemShape maxNodeCount. */
                    public maxNodeCount: number;

                    /** DbSystemShape minStorageCount. */
                    public minStorageCount: number;

                    /** DbSystemShape maxStorageCount. */
                    public maxStorageCount: number;

                    /** DbSystemShape availableCoreCountPerNode. */
                    public availableCoreCountPerNode: number;

                    /** DbSystemShape availableMemoryPerNodeGb. */
                    public availableMemoryPerNodeGb: number;

                    /** DbSystemShape availableDataStorageTb. */
                    public availableDataStorageTb: number;

                    /** DbSystemShape minCoreCountPerNode. */
                    public minCoreCountPerNode: number;

                    /** DbSystemShape minMemoryPerNodeGb. */
                    public minMemoryPerNodeGb: number;

                    /** DbSystemShape minDbNodeStoragePerNodeGb. */
                    public minDbNodeStoragePerNodeGb: number;

                    /**
                     * Creates a new DbSystemShape instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DbSystemShape instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IDbSystemShape): google.cloud.oracledatabase.v1.DbSystemShape;

                    /**
                     * Encodes the specified DbSystemShape message. Does not implicitly {@link google.cloud.oracledatabase.v1.DbSystemShape.verify|verify} messages.
                     * @param message DbSystemShape message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IDbSystemShape, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DbSystemShape message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.DbSystemShape.verify|verify} messages.
                     * @param message DbSystemShape message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IDbSystemShape, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DbSystemShape message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DbSystemShape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.DbSystemShape;

                    /**
                     * Decodes a DbSystemShape message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DbSystemShape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.DbSystemShape;

                    /**
                     * Verifies a DbSystemShape message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DbSystemShape message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DbSystemShape
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.DbSystemShape;

                    /**
                     * Creates a plain object from a DbSystemShape message. Also converts values to other types if specified.
                     * @param message DbSystemShape
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.DbSystemShape, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DbSystemShape to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DbSystemShape
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an Entitlement. */
                interface IEntitlement {

                    /** Entitlement name */
                    name?: (string|null);

                    /** Entitlement cloudAccountDetails */
                    cloudAccountDetails?: (google.cloud.oracledatabase.v1.ICloudAccountDetails|null);

                    /** Entitlement entitlementId */
                    entitlementId?: (string|null);

                    /** Entitlement state */
                    state?: (google.cloud.oracledatabase.v1.Entitlement.State|keyof typeof google.cloud.oracledatabase.v1.Entitlement.State|null);
                }

                /** Represents an Entitlement. */
                class Entitlement implements IEntitlement {

                    /**
                     * Constructs a new Entitlement.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IEntitlement);

                    /** Entitlement name. */
                    public name: string;

                    /** Entitlement cloudAccountDetails. */
                    public cloudAccountDetails?: (google.cloud.oracledatabase.v1.ICloudAccountDetails|null);

                    /** Entitlement entitlementId. */
                    public entitlementId: string;

                    /** Entitlement state. */
                    public state: (google.cloud.oracledatabase.v1.Entitlement.State|keyof typeof google.cloud.oracledatabase.v1.Entitlement.State);

                    /**
                     * Creates a new Entitlement instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Entitlement instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IEntitlement): google.cloud.oracledatabase.v1.Entitlement;

                    /**
                     * Encodes the specified Entitlement message. Does not implicitly {@link google.cloud.oracledatabase.v1.Entitlement.verify|verify} messages.
                     * @param message Entitlement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IEntitlement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Entitlement message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.Entitlement.verify|verify} messages.
                     * @param message Entitlement message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IEntitlement, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Entitlement message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Entitlement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.Entitlement;

                    /**
                     * Decodes an Entitlement message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Entitlement
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.Entitlement;

                    /**
                     * Verifies an Entitlement message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Entitlement message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Entitlement
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.Entitlement;

                    /**
                     * Creates a plain object from an Entitlement message. Also converts values to other types if specified.
                     * @param message Entitlement
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.Entitlement, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Entitlement to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Entitlement
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Entitlement {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACCOUNT_NOT_LINKED = 1,
                        ACCOUNT_NOT_ACTIVE = 2,
                        ACTIVE = 3,
                        ACCOUNT_SUSPENDED = 4,
                        NOT_APPROVED_IN_PRIVATE_MARKETPLACE = 5
                    }
                }

                /** Properties of a CloudAccountDetails. */
                interface ICloudAccountDetails {

                    /** CloudAccountDetails cloudAccount */
                    cloudAccount?: (string|null);

                    /** CloudAccountDetails cloudAccountHomeRegion */
                    cloudAccountHomeRegion?: (string|null);

                    /** CloudAccountDetails linkExistingAccountUri */
                    linkExistingAccountUri?: (string|null);

                    /** CloudAccountDetails accountCreationUri */
                    accountCreationUri?: (string|null);
                }

                /** Represents a CloudAccountDetails. */
                class CloudAccountDetails implements ICloudAccountDetails {

                    /**
                     * Constructs a new CloudAccountDetails.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.ICloudAccountDetails);

                    /** CloudAccountDetails cloudAccount. */
                    public cloudAccount: string;

                    /** CloudAccountDetails cloudAccountHomeRegion. */
                    public cloudAccountHomeRegion: string;

                    /** CloudAccountDetails linkExistingAccountUri. */
                    public linkExistingAccountUri?: (string|null);

                    /** CloudAccountDetails accountCreationUri. */
                    public accountCreationUri?: (string|null);

                    /**
                     * Creates a new CloudAccountDetails instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudAccountDetails instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.ICloudAccountDetails): google.cloud.oracledatabase.v1.CloudAccountDetails;

                    /**
                     * Encodes the specified CloudAccountDetails message. Does not implicitly {@link google.cloud.oracledatabase.v1.CloudAccountDetails.verify|verify} messages.
                     * @param message CloudAccountDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.ICloudAccountDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudAccountDetails message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.CloudAccountDetails.verify|verify} messages.
                     * @param message CloudAccountDetails message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.ICloudAccountDetails, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudAccountDetails message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudAccountDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.CloudAccountDetails;

                    /**
                     * Decodes a CloudAccountDetails message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudAccountDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.CloudAccountDetails;

                    /**
                     * Verifies a CloudAccountDetails message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudAccountDetails message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudAccountDetails
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.CloudAccountDetails;

                    /**
                     * Creates a plain object from a CloudAccountDetails message. Also converts values to other types if specified.
                     * @param message CloudAccountDetails
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.CloudAccountDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudAccountDetails to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudAccountDetails
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudExadataInfrastructure. */
                interface ICloudExadataInfrastructure {

                    /** CloudExadataInfrastructure name */
                    name?: (string|null);

                    /** CloudExadataInfrastructure displayName */
                    displayName?: (string|null);

                    /** CloudExadataInfrastructure gcpOracleZone */
                    gcpOracleZone?: (string|null);

                    /** CloudExadataInfrastructure entitlementId */
                    entitlementId?: (string|null);

                    /** CloudExadataInfrastructure properties */
                    properties?: (google.cloud.oracledatabase.v1.ICloudExadataInfrastructureProperties|null);

                    /** CloudExadataInfrastructure labels */
                    labels?: ({ [k: string]: string }|null);

                    /** CloudExadataInfrastructure createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a CloudExadataInfrastructure. */
                class CloudExadataInfrastructure implements ICloudExadataInfrastructure {

                    /**
                     * Constructs a new CloudExadataInfrastructure.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.ICloudExadataInfrastructure);

                    /** CloudExadataInfrastructure name. */
                    public name: string;

                    /** CloudExadataInfrastructure displayName. */
                    public displayName: string;

                    /** CloudExadataInfrastructure gcpOracleZone. */
                    public gcpOracleZone: string;

                    /** CloudExadataInfrastructure entitlementId. */
                    public entitlementId: string;

                    /** CloudExadataInfrastructure properties. */
                    public properties?: (google.cloud.oracledatabase.v1.ICloudExadataInfrastructureProperties|null);

                    /** CloudExadataInfrastructure labels. */
                    public labels: { [k: string]: string };

                    /** CloudExadataInfrastructure createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new CloudExadataInfrastructure instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudExadataInfrastructure instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.ICloudExadataInfrastructure): google.cloud.oracledatabase.v1.CloudExadataInfrastructure;

                    /**
                     * Encodes the specified CloudExadataInfrastructure message. Does not implicitly {@link google.cloud.oracledatabase.v1.CloudExadataInfrastructure.verify|verify} messages.
                     * @param message CloudExadataInfrastructure message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.ICloudExadataInfrastructure, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudExadataInfrastructure message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.CloudExadataInfrastructure.verify|verify} messages.
                     * @param message CloudExadataInfrastructure message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.ICloudExadataInfrastructure, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudExadataInfrastructure message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudExadataInfrastructure
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.CloudExadataInfrastructure;

                    /**
                     * Decodes a CloudExadataInfrastructure message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudExadataInfrastructure
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.CloudExadataInfrastructure;

                    /**
                     * Verifies a CloudExadataInfrastructure message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudExadataInfrastructure message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudExadataInfrastructure
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.CloudExadataInfrastructure;

                    /**
                     * Creates a plain object from a CloudExadataInfrastructure message. Also converts values to other types if specified.
                     * @param message CloudExadataInfrastructure
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.CloudExadataInfrastructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudExadataInfrastructure to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudExadataInfrastructure
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudExadataInfrastructureProperties. */
                interface ICloudExadataInfrastructureProperties {

                    /** CloudExadataInfrastructureProperties ocid */
                    ocid?: (string|null);

                    /** CloudExadataInfrastructureProperties computeCount */
                    computeCount?: (number|null);

                    /** CloudExadataInfrastructureProperties storageCount */
                    storageCount?: (number|null);

                    /** CloudExadataInfrastructureProperties totalStorageSizeGb */
                    totalStorageSizeGb?: (number|null);

                    /** CloudExadataInfrastructureProperties availableStorageSizeGb */
                    availableStorageSizeGb?: (number|null);

                    /** CloudExadataInfrastructureProperties maintenanceWindow */
                    maintenanceWindow?: (google.cloud.oracledatabase.v1.IMaintenanceWindow|null);

                    /** CloudExadataInfrastructureProperties state */
                    state?: (google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties.State|keyof typeof google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties.State|null);

                    /** CloudExadataInfrastructureProperties shape */
                    shape?: (string|null);

                    /** CloudExadataInfrastructureProperties ociUrl */
                    ociUrl?: (string|null);

                    /** CloudExadataInfrastructureProperties cpuCount */
                    cpuCount?: (number|null);

                    /** CloudExadataInfrastructureProperties maxCpuCount */
                    maxCpuCount?: (number|null);

                    /** CloudExadataInfrastructureProperties memorySizeGb */
                    memorySizeGb?: (number|null);

                    /** CloudExadataInfrastructureProperties maxMemoryGb */
                    maxMemoryGb?: (number|null);

                    /** CloudExadataInfrastructureProperties dbNodeStorageSizeGb */
                    dbNodeStorageSizeGb?: (number|null);

                    /** CloudExadataInfrastructureProperties maxDbNodeStorageSizeGb */
                    maxDbNodeStorageSizeGb?: (number|null);

                    /** CloudExadataInfrastructureProperties dataStorageSizeTb */
                    dataStorageSizeTb?: (number|null);

                    /** CloudExadataInfrastructureProperties maxDataStorageTb */
                    maxDataStorageTb?: (number|null);

                    /** CloudExadataInfrastructureProperties activatedStorageCount */
                    activatedStorageCount?: (number|null);

                    /** CloudExadataInfrastructureProperties additionalStorageCount */
                    additionalStorageCount?: (number|null);

                    /** CloudExadataInfrastructureProperties dbServerVersion */
                    dbServerVersion?: (string|null);

                    /** CloudExadataInfrastructureProperties storageServerVersion */
                    storageServerVersion?: (string|null);

                    /** CloudExadataInfrastructureProperties nextMaintenanceRunId */
                    nextMaintenanceRunId?: (string|null);

                    /** CloudExadataInfrastructureProperties nextMaintenanceRunTime */
                    nextMaintenanceRunTime?: (google.protobuf.ITimestamp|null);

                    /** CloudExadataInfrastructureProperties nextSecurityMaintenanceRunTime */
                    nextSecurityMaintenanceRunTime?: (google.protobuf.ITimestamp|null);

                    /** CloudExadataInfrastructureProperties customerContacts */
                    customerContacts?: (google.cloud.oracledatabase.v1.ICustomerContact[]|null);

                    /** CloudExadataInfrastructureProperties monthlyStorageServerVersion */
                    monthlyStorageServerVersion?: (string|null);

                    /** CloudExadataInfrastructureProperties monthlyDbServerVersion */
                    monthlyDbServerVersion?: (string|null);
                }

                /** Represents a CloudExadataInfrastructureProperties. */
                class CloudExadataInfrastructureProperties implements ICloudExadataInfrastructureProperties {

                    /**
                     * Constructs a new CloudExadataInfrastructureProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.ICloudExadataInfrastructureProperties);

                    /** CloudExadataInfrastructureProperties ocid. */
                    public ocid: string;

                    /** CloudExadataInfrastructureProperties computeCount. */
                    public computeCount: number;

                    /** CloudExadataInfrastructureProperties storageCount. */
                    public storageCount: number;

                    /** CloudExadataInfrastructureProperties totalStorageSizeGb. */
                    public totalStorageSizeGb: number;

                    /** CloudExadataInfrastructureProperties availableStorageSizeGb. */
                    public availableStorageSizeGb: number;

                    /** CloudExadataInfrastructureProperties maintenanceWindow. */
                    public maintenanceWindow?: (google.cloud.oracledatabase.v1.IMaintenanceWindow|null);

                    /** CloudExadataInfrastructureProperties state. */
                    public state: (google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties.State|keyof typeof google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties.State);

                    /** CloudExadataInfrastructureProperties shape. */
                    public shape: string;

                    /** CloudExadataInfrastructureProperties ociUrl. */
                    public ociUrl: string;

                    /** CloudExadataInfrastructureProperties cpuCount. */
                    public cpuCount: number;

                    /** CloudExadataInfrastructureProperties maxCpuCount. */
                    public maxCpuCount: number;

                    /** CloudExadataInfrastructureProperties memorySizeGb. */
                    public memorySizeGb: number;

                    /** CloudExadataInfrastructureProperties maxMemoryGb. */
                    public maxMemoryGb: number;

                    /** CloudExadataInfrastructureProperties dbNodeStorageSizeGb. */
                    public dbNodeStorageSizeGb: number;

                    /** CloudExadataInfrastructureProperties maxDbNodeStorageSizeGb. */
                    public maxDbNodeStorageSizeGb: number;

                    /** CloudExadataInfrastructureProperties dataStorageSizeTb. */
                    public dataStorageSizeTb: number;

                    /** CloudExadataInfrastructureProperties maxDataStorageTb. */
                    public maxDataStorageTb: number;

                    /** CloudExadataInfrastructureProperties activatedStorageCount. */
                    public activatedStorageCount: number;

                    /** CloudExadataInfrastructureProperties additionalStorageCount. */
                    public additionalStorageCount: number;

                    /** CloudExadataInfrastructureProperties dbServerVersion. */
                    public dbServerVersion: string;

                    /** CloudExadataInfrastructureProperties storageServerVersion. */
                    public storageServerVersion: string;

                    /** CloudExadataInfrastructureProperties nextMaintenanceRunId. */
                    public nextMaintenanceRunId: string;

                    /** CloudExadataInfrastructureProperties nextMaintenanceRunTime. */
                    public nextMaintenanceRunTime?: (google.protobuf.ITimestamp|null);

                    /** CloudExadataInfrastructureProperties nextSecurityMaintenanceRunTime. */
                    public nextSecurityMaintenanceRunTime?: (google.protobuf.ITimestamp|null);

                    /** CloudExadataInfrastructureProperties customerContacts. */
                    public customerContacts: google.cloud.oracledatabase.v1.ICustomerContact[];

                    /** CloudExadataInfrastructureProperties monthlyStorageServerVersion. */
                    public monthlyStorageServerVersion: string;

                    /** CloudExadataInfrastructureProperties monthlyDbServerVersion. */
                    public monthlyDbServerVersion: string;

                    /**
                     * Creates a new CloudExadataInfrastructureProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudExadataInfrastructureProperties instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.ICloudExadataInfrastructureProperties): google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties;

                    /**
                     * Encodes the specified CloudExadataInfrastructureProperties message. Does not implicitly {@link google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties.verify|verify} messages.
                     * @param message CloudExadataInfrastructureProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.ICloudExadataInfrastructureProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudExadataInfrastructureProperties message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties.verify|verify} messages.
                     * @param message CloudExadataInfrastructureProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.ICloudExadataInfrastructureProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudExadataInfrastructureProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudExadataInfrastructureProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties;

                    /**
                     * Decodes a CloudExadataInfrastructureProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudExadataInfrastructureProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties;

                    /**
                     * Verifies a CloudExadataInfrastructureProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudExadataInfrastructureProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudExadataInfrastructureProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties;

                    /**
                     * Creates a plain object from a CloudExadataInfrastructureProperties message. Also converts values to other types if specified.
                     * @param message CloudExadataInfrastructureProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.CloudExadataInfrastructureProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudExadataInfrastructureProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudExadataInfrastructureProperties
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CloudExadataInfrastructureProperties {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONING = 1,
                        AVAILABLE = 2,
                        UPDATING = 3,
                        TERMINATING = 4,
                        TERMINATED = 5,
                        FAILED = 6,
                        MAINTENANCE_IN_PROGRESS = 7
                    }
                }

                /** Properties of a MaintenanceWindow. */
                interface IMaintenanceWindow {

                    /** MaintenanceWindow preference */
                    preference?: (google.cloud.oracledatabase.v1.MaintenanceWindow.MaintenanceWindowPreference|keyof typeof google.cloud.oracledatabase.v1.MaintenanceWindow.MaintenanceWindowPreference|null);

                    /** MaintenanceWindow months */
                    months?: (google.type.Month[]|null);

                    /** MaintenanceWindow weeksOfMonth */
                    weeksOfMonth?: (number[]|null);

                    /** MaintenanceWindow daysOfWeek */
                    daysOfWeek?: (google.type.DayOfWeek[]|null);

                    /** MaintenanceWindow hoursOfDay */
                    hoursOfDay?: (number[]|null);

                    /** MaintenanceWindow leadTimeWeek */
                    leadTimeWeek?: (number|null);

                    /** MaintenanceWindow patchingMode */
                    patchingMode?: (google.cloud.oracledatabase.v1.MaintenanceWindow.PatchingMode|keyof typeof google.cloud.oracledatabase.v1.MaintenanceWindow.PatchingMode|null);

                    /** MaintenanceWindow customActionTimeoutMins */
                    customActionTimeoutMins?: (number|null);

                    /** MaintenanceWindow isCustomActionTimeoutEnabled */
                    isCustomActionTimeoutEnabled?: (boolean|null);
                }

                /** Represents a MaintenanceWindow. */
                class MaintenanceWindow implements IMaintenanceWindow {

                    /**
                     * Constructs a new MaintenanceWindow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IMaintenanceWindow);

                    /** MaintenanceWindow preference. */
                    public preference: (google.cloud.oracledatabase.v1.MaintenanceWindow.MaintenanceWindowPreference|keyof typeof google.cloud.oracledatabase.v1.MaintenanceWindow.MaintenanceWindowPreference);

                    /** MaintenanceWindow months. */
                    public months: google.type.Month[];

                    /** MaintenanceWindow weeksOfMonth. */
                    public weeksOfMonth: number[];

                    /** MaintenanceWindow daysOfWeek. */
                    public daysOfWeek: google.type.DayOfWeek[];

                    /** MaintenanceWindow hoursOfDay. */
                    public hoursOfDay: number[];

                    /** MaintenanceWindow leadTimeWeek. */
                    public leadTimeWeek: number;

                    /** MaintenanceWindow patchingMode. */
                    public patchingMode: (google.cloud.oracledatabase.v1.MaintenanceWindow.PatchingMode|keyof typeof google.cloud.oracledatabase.v1.MaintenanceWindow.PatchingMode);

                    /** MaintenanceWindow customActionTimeoutMins. */
                    public customActionTimeoutMins: number;

                    /** MaintenanceWindow isCustomActionTimeoutEnabled. */
                    public isCustomActionTimeoutEnabled: boolean;

                    /**
                     * Creates a new MaintenanceWindow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MaintenanceWindow instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IMaintenanceWindow): google.cloud.oracledatabase.v1.MaintenanceWindow;

                    /**
                     * Encodes the specified MaintenanceWindow message. Does not implicitly {@link google.cloud.oracledatabase.v1.MaintenanceWindow.verify|verify} messages.
                     * @param message MaintenanceWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MaintenanceWindow message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.MaintenanceWindow.verify|verify} messages.
                     * @param message MaintenanceWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IMaintenanceWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MaintenanceWindow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MaintenanceWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.MaintenanceWindow;

                    /**
                     * Decodes a MaintenanceWindow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MaintenanceWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.MaintenanceWindow;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.MaintenanceWindow;

                    /**
                     * Creates a plain object from a MaintenanceWindow message. Also converts values to other types if specified.
                     * @param message MaintenanceWindow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.MaintenanceWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MaintenanceWindow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for MaintenanceWindow
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace MaintenanceWindow {

                    /** MaintenanceWindowPreference enum. */
                    enum MaintenanceWindowPreference {
                        MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED = 0,
                        CUSTOM_PREFERENCE = 1,
                        NO_PREFERENCE = 2
                    }

                    /** PatchingMode enum. */
                    enum PatchingMode {
                        PATCHING_MODE_UNSPECIFIED = 0,
                        ROLLING = 1,
                        NON_ROLLING = 2
                    }
                }

                /** Properties of a GiVersion. */
                interface IGiVersion {

                    /** GiVersion name */
                    name?: (string|null);

                    /** GiVersion version */
                    version?: (string|null);
                }

                /** Represents a GiVersion. */
                class GiVersion implements IGiVersion {

                    /**
                     * Constructs a new GiVersion.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IGiVersion);

                    /** GiVersion name. */
                    public name: string;

                    /** GiVersion version. */
                    public version: string;

                    /**
                     * Creates a new GiVersion instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GiVersion instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IGiVersion): google.cloud.oracledatabase.v1.GiVersion;

                    /**
                     * Encodes the specified GiVersion message. Does not implicitly {@link google.cloud.oracledatabase.v1.GiVersion.verify|verify} messages.
                     * @param message GiVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IGiVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GiVersion message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.GiVersion.verify|verify} messages.
                     * @param message GiVersion message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IGiVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GiVersion message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GiVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.GiVersion;

                    /**
                     * Decodes a GiVersion message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GiVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.GiVersion;

                    /**
                     * Verifies a GiVersion message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GiVersion message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GiVersion
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.GiVersion;

                    /**
                     * Creates a plain object from a GiVersion message. Also converts values to other types if specified.
                     * @param message GiVersion
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.GiVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GiVersion to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GiVersion
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a LocationMetadata. */
                interface ILocationMetadata {

                    /** LocationMetadata gcpOracleZones */
                    gcpOracleZones?: (string[]|null);
                }

                /** Represents a LocationMetadata. */
                class LocationMetadata implements ILocationMetadata {

                    /**
                     * Constructs a new LocationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.ILocationMetadata);

                    /** LocationMetadata gcpOracleZones. */
                    public gcpOracleZones: string[];

                    /**
                     * Creates a new LocationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationMetadata instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.ILocationMetadata): google.cloud.oracledatabase.v1.LocationMetadata;

                    /**
                     * Encodes the specified LocationMetadata message. Does not implicitly {@link google.cloud.oracledatabase.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationMetadata message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.LocationMetadata;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.LocationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.LocationMetadata;

                    /**
                     * Creates a plain object from a LocationMetadata message. Also converts values to other types if specified.
                     * @param message LocationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.LocationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LocationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for LocationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Represents an OracleDatabase */
                class OracleDatabase extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new OracleDatabase service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new OracleDatabase service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OracleDatabase;

                    /**
                     * Calls ListCloudExadataInfrastructures.
                     * @param request ListCloudExadataInfrastructuresRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCloudExadataInfrastructuresResponse
                     */
                    public listCloudExadataInfrastructures(request: google.cloud.oracledatabase.v1.IListCloudExadataInfrastructuresRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListCloudExadataInfrastructuresCallback): void;

                    /**
                     * Calls ListCloudExadataInfrastructures.
                     * @param request ListCloudExadataInfrastructuresRequest message or plain object
                     * @returns Promise
                     */
                    public listCloudExadataInfrastructures(request: google.cloud.oracledatabase.v1.IListCloudExadataInfrastructuresRequest): Promise<google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresResponse>;

                    /**
                     * Calls GetCloudExadataInfrastructure.
                     * @param request GetCloudExadataInfrastructureRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CloudExadataInfrastructure
                     */
                    public getCloudExadataInfrastructure(request: google.cloud.oracledatabase.v1.IGetCloudExadataInfrastructureRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.GetCloudExadataInfrastructureCallback): void;

                    /**
                     * Calls GetCloudExadataInfrastructure.
                     * @param request GetCloudExadataInfrastructureRequest message or plain object
                     * @returns Promise
                     */
                    public getCloudExadataInfrastructure(request: google.cloud.oracledatabase.v1.IGetCloudExadataInfrastructureRequest): Promise<google.cloud.oracledatabase.v1.CloudExadataInfrastructure>;

                    /**
                     * Calls CreateCloudExadataInfrastructure.
                     * @param request CreateCloudExadataInfrastructureRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCloudExadataInfrastructure(request: google.cloud.oracledatabase.v1.ICreateCloudExadataInfrastructureRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.CreateCloudExadataInfrastructureCallback): void;

                    /**
                     * Calls CreateCloudExadataInfrastructure.
                     * @param request CreateCloudExadataInfrastructureRequest message or plain object
                     * @returns Promise
                     */
                    public createCloudExadataInfrastructure(request: google.cloud.oracledatabase.v1.ICreateCloudExadataInfrastructureRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCloudExadataInfrastructure.
                     * @param request DeleteCloudExadataInfrastructureRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCloudExadataInfrastructure(request: google.cloud.oracledatabase.v1.IDeleteCloudExadataInfrastructureRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.DeleteCloudExadataInfrastructureCallback): void;

                    /**
                     * Calls DeleteCloudExadataInfrastructure.
                     * @param request DeleteCloudExadataInfrastructureRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCloudExadataInfrastructure(request: google.cloud.oracledatabase.v1.IDeleteCloudExadataInfrastructureRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListCloudVmClusters.
                     * @param request ListCloudVmClustersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCloudVmClustersResponse
                     */
                    public listCloudVmClusters(request: google.cloud.oracledatabase.v1.IListCloudVmClustersRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListCloudVmClustersCallback): void;

                    /**
                     * Calls ListCloudVmClusters.
                     * @param request ListCloudVmClustersRequest message or plain object
                     * @returns Promise
                     */
                    public listCloudVmClusters(request: google.cloud.oracledatabase.v1.IListCloudVmClustersRequest): Promise<google.cloud.oracledatabase.v1.ListCloudVmClustersResponse>;

                    /**
                     * Calls GetCloudVmCluster.
                     * @param request GetCloudVmClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CloudVmCluster
                     */
                    public getCloudVmCluster(request: google.cloud.oracledatabase.v1.IGetCloudVmClusterRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.GetCloudVmClusterCallback): void;

                    /**
                     * Calls GetCloudVmCluster.
                     * @param request GetCloudVmClusterRequest message or plain object
                     * @returns Promise
                     */
                    public getCloudVmCluster(request: google.cloud.oracledatabase.v1.IGetCloudVmClusterRequest): Promise<google.cloud.oracledatabase.v1.CloudVmCluster>;

                    /**
                     * Calls CreateCloudVmCluster.
                     * @param request CreateCloudVmClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createCloudVmCluster(request: google.cloud.oracledatabase.v1.ICreateCloudVmClusterRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.CreateCloudVmClusterCallback): void;

                    /**
                     * Calls CreateCloudVmCluster.
                     * @param request CreateCloudVmClusterRequest message or plain object
                     * @returns Promise
                     */
                    public createCloudVmCluster(request: google.cloud.oracledatabase.v1.ICreateCloudVmClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteCloudVmCluster.
                     * @param request DeleteCloudVmClusterRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteCloudVmCluster(request: google.cloud.oracledatabase.v1.IDeleteCloudVmClusterRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.DeleteCloudVmClusterCallback): void;

                    /**
                     * Calls DeleteCloudVmCluster.
                     * @param request DeleteCloudVmClusterRequest message or plain object
                     * @returns Promise
                     */
                    public deleteCloudVmCluster(request: google.cloud.oracledatabase.v1.IDeleteCloudVmClusterRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListEntitlements.
                     * @param request ListEntitlementsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListEntitlementsResponse
                     */
                    public listEntitlements(request: google.cloud.oracledatabase.v1.IListEntitlementsRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListEntitlementsCallback): void;

                    /**
                     * Calls ListEntitlements.
                     * @param request ListEntitlementsRequest message or plain object
                     * @returns Promise
                     */
                    public listEntitlements(request: google.cloud.oracledatabase.v1.IListEntitlementsRequest): Promise<google.cloud.oracledatabase.v1.ListEntitlementsResponse>;

                    /**
                     * Calls ListDbServers.
                     * @param request ListDbServersRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDbServersResponse
                     */
                    public listDbServers(request: google.cloud.oracledatabase.v1.IListDbServersRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListDbServersCallback): void;

                    /**
                     * Calls ListDbServers.
                     * @param request ListDbServersRequest message or plain object
                     * @returns Promise
                     */
                    public listDbServers(request: google.cloud.oracledatabase.v1.IListDbServersRequest): Promise<google.cloud.oracledatabase.v1.ListDbServersResponse>;

                    /**
                     * Calls ListDbNodes.
                     * @param request ListDbNodesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDbNodesResponse
                     */
                    public listDbNodes(request: google.cloud.oracledatabase.v1.IListDbNodesRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListDbNodesCallback): void;

                    /**
                     * Calls ListDbNodes.
                     * @param request ListDbNodesRequest message or plain object
                     * @returns Promise
                     */
                    public listDbNodes(request: google.cloud.oracledatabase.v1.IListDbNodesRequest): Promise<google.cloud.oracledatabase.v1.ListDbNodesResponse>;

                    /**
                     * Calls ListGiVersions.
                     * @param request ListGiVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListGiVersionsResponse
                     */
                    public listGiVersions(request: google.cloud.oracledatabase.v1.IListGiVersionsRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListGiVersionsCallback): void;

                    /**
                     * Calls ListGiVersions.
                     * @param request ListGiVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listGiVersions(request: google.cloud.oracledatabase.v1.IListGiVersionsRequest): Promise<google.cloud.oracledatabase.v1.ListGiVersionsResponse>;

                    /**
                     * Calls ListDbSystemShapes.
                     * @param request ListDbSystemShapesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDbSystemShapesResponse
                     */
                    public listDbSystemShapes(request: google.cloud.oracledatabase.v1.IListDbSystemShapesRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListDbSystemShapesCallback): void;

                    /**
                     * Calls ListDbSystemShapes.
                     * @param request ListDbSystemShapesRequest message or plain object
                     * @returns Promise
                     */
                    public listDbSystemShapes(request: google.cloud.oracledatabase.v1.IListDbSystemShapesRequest): Promise<google.cloud.oracledatabase.v1.ListDbSystemShapesResponse>;

                    /**
                     * Calls ListAutonomousDatabases.
                     * @param request ListAutonomousDatabasesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAutonomousDatabasesResponse
                     */
                    public listAutonomousDatabases(request: google.cloud.oracledatabase.v1.IListAutonomousDatabasesRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListAutonomousDatabasesCallback): void;

                    /**
                     * Calls ListAutonomousDatabases.
                     * @param request ListAutonomousDatabasesRequest message or plain object
                     * @returns Promise
                     */
                    public listAutonomousDatabases(request: google.cloud.oracledatabase.v1.IListAutonomousDatabasesRequest): Promise<google.cloud.oracledatabase.v1.ListAutonomousDatabasesResponse>;

                    /**
                     * Calls GetAutonomousDatabase.
                     * @param request GetAutonomousDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AutonomousDatabase
                     */
                    public getAutonomousDatabase(request: google.cloud.oracledatabase.v1.IGetAutonomousDatabaseRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.GetAutonomousDatabaseCallback): void;

                    /**
                     * Calls GetAutonomousDatabase.
                     * @param request GetAutonomousDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public getAutonomousDatabase(request: google.cloud.oracledatabase.v1.IGetAutonomousDatabaseRequest): Promise<google.cloud.oracledatabase.v1.AutonomousDatabase>;

                    /**
                     * Calls CreateAutonomousDatabase.
                     * @param request CreateAutonomousDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createAutonomousDatabase(request: google.cloud.oracledatabase.v1.ICreateAutonomousDatabaseRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.CreateAutonomousDatabaseCallback): void;

                    /**
                     * Calls CreateAutonomousDatabase.
                     * @param request CreateAutonomousDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public createAutonomousDatabase(request: google.cloud.oracledatabase.v1.ICreateAutonomousDatabaseRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteAutonomousDatabase.
                     * @param request DeleteAutonomousDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteAutonomousDatabase(request: google.cloud.oracledatabase.v1.IDeleteAutonomousDatabaseRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.DeleteAutonomousDatabaseCallback): void;

                    /**
                     * Calls DeleteAutonomousDatabase.
                     * @param request DeleteAutonomousDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public deleteAutonomousDatabase(request: google.cloud.oracledatabase.v1.IDeleteAutonomousDatabaseRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RestoreAutonomousDatabase.
                     * @param request RestoreAutonomousDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restoreAutonomousDatabase(request: google.cloud.oracledatabase.v1.IRestoreAutonomousDatabaseRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.RestoreAutonomousDatabaseCallback): void;

                    /**
                     * Calls RestoreAutonomousDatabase.
                     * @param request RestoreAutonomousDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public restoreAutonomousDatabase(request: google.cloud.oracledatabase.v1.IRestoreAutonomousDatabaseRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateAutonomousDatabaseWallet.
                     * @param request GenerateAutonomousDatabaseWalletRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateAutonomousDatabaseWalletResponse
                     */
                    public generateAutonomousDatabaseWallet(request: google.cloud.oracledatabase.v1.IGenerateAutonomousDatabaseWalletRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.GenerateAutonomousDatabaseWalletCallback): void;

                    /**
                     * Calls GenerateAutonomousDatabaseWallet.
                     * @param request GenerateAutonomousDatabaseWalletRequest message or plain object
                     * @returns Promise
                     */
                    public generateAutonomousDatabaseWallet(request: google.cloud.oracledatabase.v1.IGenerateAutonomousDatabaseWalletRequest): Promise<google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletResponse>;

                    /**
                     * Calls ListAutonomousDbVersions.
                     * @param request ListAutonomousDbVersionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAutonomousDbVersionsResponse
                     */
                    public listAutonomousDbVersions(request: google.cloud.oracledatabase.v1.IListAutonomousDbVersionsRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListAutonomousDbVersionsCallback): void;

                    /**
                     * Calls ListAutonomousDbVersions.
                     * @param request ListAutonomousDbVersionsRequest message or plain object
                     * @returns Promise
                     */
                    public listAutonomousDbVersions(request: google.cloud.oracledatabase.v1.IListAutonomousDbVersionsRequest): Promise<google.cloud.oracledatabase.v1.ListAutonomousDbVersionsResponse>;

                    /**
                     * Calls ListAutonomousDatabaseCharacterSets.
                     * @param request ListAutonomousDatabaseCharacterSetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAutonomousDatabaseCharacterSetsResponse
                     */
                    public listAutonomousDatabaseCharacterSets(request: google.cloud.oracledatabase.v1.IListAutonomousDatabaseCharacterSetsRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListAutonomousDatabaseCharacterSetsCallback): void;

                    /**
                     * Calls ListAutonomousDatabaseCharacterSets.
                     * @param request ListAutonomousDatabaseCharacterSetsRequest message or plain object
                     * @returns Promise
                     */
                    public listAutonomousDatabaseCharacterSets(request: google.cloud.oracledatabase.v1.IListAutonomousDatabaseCharacterSetsRequest): Promise<google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsResponse>;

                    /**
                     * Calls ListAutonomousDatabaseBackups.
                     * @param request ListAutonomousDatabaseBackupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAutonomousDatabaseBackupsResponse
                     */
                    public listAutonomousDatabaseBackups(request: google.cloud.oracledatabase.v1.IListAutonomousDatabaseBackupsRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.ListAutonomousDatabaseBackupsCallback): void;

                    /**
                     * Calls ListAutonomousDatabaseBackups.
                     * @param request ListAutonomousDatabaseBackupsRequest message or plain object
                     * @returns Promise
                     */
                    public listAutonomousDatabaseBackups(request: google.cloud.oracledatabase.v1.IListAutonomousDatabaseBackupsRequest): Promise<google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsResponse>;

                    /**
                     * Calls StopAutonomousDatabase.
                     * @param request StopAutonomousDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public stopAutonomousDatabase(request: google.cloud.oracledatabase.v1.IStopAutonomousDatabaseRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.StopAutonomousDatabaseCallback): void;

                    /**
                     * Calls StopAutonomousDatabase.
                     * @param request StopAutonomousDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public stopAutonomousDatabase(request: google.cloud.oracledatabase.v1.IStopAutonomousDatabaseRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls StartAutonomousDatabase.
                     * @param request StartAutonomousDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public startAutonomousDatabase(request: google.cloud.oracledatabase.v1.IStartAutonomousDatabaseRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.StartAutonomousDatabaseCallback): void;

                    /**
                     * Calls StartAutonomousDatabase.
                     * @param request StartAutonomousDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public startAutonomousDatabase(request: google.cloud.oracledatabase.v1.IStartAutonomousDatabaseRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls RestartAutonomousDatabase.
                     * @param request RestartAutonomousDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restartAutonomousDatabase(request: google.cloud.oracledatabase.v1.IRestartAutonomousDatabaseRequest, callback: google.cloud.oracledatabase.v1.OracleDatabase.RestartAutonomousDatabaseCallback): void;

                    /**
                     * Calls RestartAutonomousDatabase.
                     * @param request RestartAutonomousDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public restartAutonomousDatabase(request: google.cloud.oracledatabase.v1.IRestartAutonomousDatabaseRequest): Promise<google.longrunning.Operation>;
                }

                namespace OracleDatabase {

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listCloudExadataInfrastructures}.
                     * @param error Error, if any
                     * @param [response] ListCloudExadataInfrastructuresResponse
                     */
                    type ListCloudExadataInfrastructuresCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|getCloudExadataInfrastructure}.
                     * @param error Error, if any
                     * @param [response] CloudExadataInfrastructure
                     */
                    type GetCloudExadataInfrastructureCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.CloudExadataInfrastructure) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|createCloudExadataInfrastructure}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCloudExadataInfrastructureCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|deleteCloudExadataInfrastructure}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCloudExadataInfrastructureCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listCloudVmClusters}.
                     * @param error Error, if any
                     * @param [response] ListCloudVmClustersResponse
                     */
                    type ListCloudVmClustersCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListCloudVmClustersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|getCloudVmCluster}.
                     * @param error Error, if any
                     * @param [response] CloudVmCluster
                     */
                    type GetCloudVmClusterCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.CloudVmCluster) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|createCloudVmCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateCloudVmClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|deleteCloudVmCluster}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteCloudVmClusterCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listEntitlements}.
                     * @param error Error, if any
                     * @param [response] ListEntitlementsResponse
                     */
                    type ListEntitlementsCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListEntitlementsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listDbServers}.
                     * @param error Error, if any
                     * @param [response] ListDbServersResponse
                     */
                    type ListDbServersCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListDbServersResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listDbNodes}.
                     * @param error Error, if any
                     * @param [response] ListDbNodesResponse
                     */
                    type ListDbNodesCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListDbNodesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listGiVersions}.
                     * @param error Error, if any
                     * @param [response] ListGiVersionsResponse
                     */
                    type ListGiVersionsCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListGiVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listDbSystemShapes}.
                     * @param error Error, if any
                     * @param [response] ListDbSystemShapesResponse
                     */
                    type ListDbSystemShapesCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListDbSystemShapesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listAutonomousDatabases}.
                     * @param error Error, if any
                     * @param [response] ListAutonomousDatabasesResponse
                     */
                    type ListAutonomousDatabasesCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListAutonomousDatabasesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|getAutonomousDatabase}.
                     * @param error Error, if any
                     * @param [response] AutonomousDatabase
                     */
                    type GetAutonomousDatabaseCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.AutonomousDatabase) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|createAutonomousDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateAutonomousDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|deleteAutonomousDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteAutonomousDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|restoreAutonomousDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestoreAutonomousDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|generateAutonomousDatabaseWallet}.
                     * @param error Error, if any
                     * @param [response] GenerateAutonomousDatabaseWalletResponse
                     */
                    type GenerateAutonomousDatabaseWalletCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listAutonomousDbVersions}.
                     * @param error Error, if any
                     * @param [response] ListAutonomousDbVersionsResponse
                     */
                    type ListAutonomousDbVersionsCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListAutonomousDbVersionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listAutonomousDatabaseCharacterSets}.
                     * @param error Error, if any
                     * @param [response] ListAutonomousDatabaseCharacterSetsResponse
                     */
                    type ListAutonomousDatabaseCharacterSetsCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|listAutonomousDatabaseBackups}.
                     * @param error Error, if any
                     * @param [response] ListAutonomousDatabaseBackupsResponse
                     */
                    type ListAutonomousDatabaseBackupsCallback = (error: (Error|null), response?: google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|stopAutonomousDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StopAutonomousDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|startAutonomousDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type StartAutonomousDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.oracledatabase.v1.OracleDatabase|restartAutonomousDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestartAutonomousDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListCloudExadataInfrastructuresRequest. */
                interface IListCloudExadataInfrastructuresRequest {

                    /** ListCloudExadataInfrastructuresRequest parent */
                    parent?: (string|null);

                    /** ListCloudExadataInfrastructuresRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCloudExadataInfrastructuresRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListCloudExadataInfrastructuresRequest. */
                class ListCloudExadataInfrastructuresRequest implements IListCloudExadataInfrastructuresRequest {

                    /**
                     * Constructs a new ListCloudExadataInfrastructuresRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListCloudExadataInfrastructuresRequest);

                    /** ListCloudExadataInfrastructuresRequest parent. */
                    public parent: string;

                    /** ListCloudExadataInfrastructuresRequest pageSize. */
                    public pageSize: number;

                    /** ListCloudExadataInfrastructuresRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListCloudExadataInfrastructuresRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCloudExadataInfrastructuresRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListCloudExadataInfrastructuresRequest): google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresRequest;

                    /**
                     * Encodes the specified ListCloudExadataInfrastructuresRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresRequest.verify|verify} messages.
                     * @param message ListCloudExadataInfrastructuresRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListCloudExadataInfrastructuresRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCloudExadataInfrastructuresRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresRequest.verify|verify} messages.
                     * @param message ListCloudExadataInfrastructuresRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListCloudExadataInfrastructuresRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCloudExadataInfrastructuresRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCloudExadataInfrastructuresRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresRequest;

                    /**
                     * Decodes a ListCloudExadataInfrastructuresRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCloudExadataInfrastructuresRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresRequest;

                    /**
                     * Verifies a ListCloudExadataInfrastructuresRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCloudExadataInfrastructuresRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCloudExadataInfrastructuresRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresRequest;

                    /**
                     * Creates a plain object from a ListCloudExadataInfrastructuresRequest message. Also converts values to other types if specified.
                     * @param message ListCloudExadataInfrastructuresRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCloudExadataInfrastructuresRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCloudExadataInfrastructuresRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCloudExadataInfrastructuresResponse. */
                interface IListCloudExadataInfrastructuresResponse {

                    /** ListCloudExadataInfrastructuresResponse cloudExadataInfrastructures */
                    cloudExadataInfrastructures?: (google.cloud.oracledatabase.v1.ICloudExadataInfrastructure[]|null);

                    /** ListCloudExadataInfrastructuresResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCloudExadataInfrastructuresResponse. */
                class ListCloudExadataInfrastructuresResponse implements IListCloudExadataInfrastructuresResponse {

                    /**
                     * Constructs a new ListCloudExadataInfrastructuresResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListCloudExadataInfrastructuresResponse);

                    /** ListCloudExadataInfrastructuresResponse cloudExadataInfrastructures. */
                    public cloudExadataInfrastructures: google.cloud.oracledatabase.v1.ICloudExadataInfrastructure[];

                    /** ListCloudExadataInfrastructuresResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCloudExadataInfrastructuresResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCloudExadataInfrastructuresResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListCloudExadataInfrastructuresResponse): google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresResponse;

                    /**
                     * Encodes the specified ListCloudExadataInfrastructuresResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresResponse.verify|verify} messages.
                     * @param message ListCloudExadataInfrastructuresResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListCloudExadataInfrastructuresResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCloudExadataInfrastructuresResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresResponse.verify|verify} messages.
                     * @param message ListCloudExadataInfrastructuresResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListCloudExadataInfrastructuresResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCloudExadataInfrastructuresResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCloudExadataInfrastructuresResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresResponse;

                    /**
                     * Decodes a ListCloudExadataInfrastructuresResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCloudExadataInfrastructuresResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresResponse;

                    /**
                     * Verifies a ListCloudExadataInfrastructuresResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCloudExadataInfrastructuresResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCloudExadataInfrastructuresResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresResponse;

                    /**
                     * Creates a plain object from a ListCloudExadataInfrastructuresResponse message. Also converts values to other types if specified.
                     * @param message ListCloudExadataInfrastructuresResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListCloudExadataInfrastructuresResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCloudExadataInfrastructuresResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCloudExadataInfrastructuresResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCloudExadataInfrastructureRequest. */
                interface IGetCloudExadataInfrastructureRequest {

                    /** GetCloudExadataInfrastructureRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCloudExadataInfrastructureRequest. */
                class GetCloudExadataInfrastructureRequest implements IGetCloudExadataInfrastructureRequest {

                    /**
                     * Constructs a new GetCloudExadataInfrastructureRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IGetCloudExadataInfrastructureRequest);

                    /** GetCloudExadataInfrastructureRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCloudExadataInfrastructureRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCloudExadataInfrastructureRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IGetCloudExadataInfrastructureRequest): google.cloud.oracledatabase.v1.GetCloudExadataInfrastructureRequest;

                    /**
                     * Encodes the specified GetCloudExadataInfrastructureRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.GetCloudExadataInfrastructureRequest.verify|verify} messages.
                     * @param message GetCloudExadataInfrastructureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IGetCloudExadataInfrastructureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCloudExadataInfrastructureRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.GetCloudExadataInfrastructureRequest.verify|verify} messages.
                     * @param message GetCloudExadataInfrastructureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IGetCloudExadataInfrastructureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCloudExadataInfrastructureRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCloudExadataInfrastructureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.GetCloudExadataInfrastructureRequest;

                    /**
                     * Decodes a GetCloudExadataInfrastructureRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCloudExadataInfrastructureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.GetCloudExadataInfrastructureRequest;

                    /**
                     * Verifies a GetCloudExadataInfrastructureRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCloudExadataInfrastructureRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCloudExadataInfrastructureRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.GetCloudExadataInfrastructureRequest;

                    /**
                     * Creates a plain object from a GetCloudExadataInfrastructureRequest message. Also converts values to other types if specified.
                     * @param message GetCloudExadataInfrastructureRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.GetCloudExadataInfrastructureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCloudExadataInfrastructureRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCloudExadataInfrastructureRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCloudExadataInfrastructureRequest. */
                interface ICreateCloudExadataInfrastructureRequest {

                    /** CreateCloudExadataInfrastructureRequest parent */
                    parent?: (string|null);

                    /** CreateCloudExadataInfrastructureRequest cloudExadataInfrastructureId */
                    cloudExadataInfrastructureId?: (string|null);

                    /** CreateCloudExadataInfrastructureRequest cloudExadataInfrastructure */
                    cloudExadataInfrastructure?: (google.cloud.oracledatabase.v1.ICloudExadataInfrastructure|null);

                    /** CreateCloudExadataInfrastructureRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateCloudExadataInfrastructureRequest. */
                class CreateCloudExadataInfrastructureRequest implements ICreateCloudExadataInfrastructureRequest {

                    /**
                     * Constructs a new CreateCloudExadataInfrastructureRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.ICreateCloudExadataInfrastructureRequest);

                    /** CreateCloudExadataInfrastructureRequest parent. */
                    public parent: string;

                    /** CreateCloudExadataInfrastructureRequest cloudExadataInfrastructureId. */
                    public cloudExadataInfrastructureId: string;

                    /** CreateCloudExadataInfrastructureRequest cloudExadataInfrastructure. */
                    public cloudExadataInfrastructure?: (google.cloud.oracledatabase.v1.ICloudExadataInfrastructure|null);

                    /** CreateCloudExadataInfrastructureRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateCloudExadataInfrastructureRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCloudExadataInfrastructureRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.ICreateCloudExadataInfrastructureRequest): google.cloud.oracledatabase.v1.CreateCloudExadataInfrastructureRequest;

                    /**
                     * Encodes the specified CreateCloudExadataInfrastructureRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.CreateCloudExadataInfrastructureRequest.verify|verify} messages.
                     * @param message CreateCloudExadataInfrastructureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.ICreateCloudExadataInfrastructureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCloudExadataInfrastructureRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.CreateCloudExadataInfrastructureRequest.verify|verify} messages.
                     * @param message CreateCloudExadataInfrastructureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.ICreateCloudExadataInfrastructureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCloudExadataInfrastructureRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCloudExadataInfrastructureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.CreateCloudExadataInfrastructureRequest;

                    /**
                     * Decodes a CreateCloudExadataInfrastructureRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCloudExadataInfrastructureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.CreateCloudExadataInfrastructureRequest;

                    /**
                     * Verifies a CreateCloudExadataInfrastructureRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCloudExadataInfrastructureRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCloudExadataInfrastructureRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.CreateCloudExadataInfrastructureRequest;

                    /**
                     * Creates a plain object from a CreateCloudExadataInfrastructureRequest message. Also converts values to other types if specified.
                     * @param message CreateCloudExadataInfrastructureRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.CreateCloudExadataInfrastructureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCloudExadataInfrastructureRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCloudExadataInfrastructureRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCloudExadataInfrastructureRequest. */
                interface IDeleteCloudExadataInfrastructureRequest {

                    /** DeleteCloudExadataInfrastructureRequest name */
                    name?: (string|null);

                    /** DeleteCloudExadataInfrastructureRequest requestId */
                    requestId?: (string|null);

                    /** DeleteCloudExadataInfrastructureRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteCloudExadataInfrastructureRequest. */
                class DeleteCloudExadataInfrastructureRequest implements IDeleteCloudExadataInfrastructureRequest {

                    /**
                     * Constructs a new DeleteCloudExadataInfrastructureRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IDeleteCloudExadataInfrastructureRequest);

                    /** DeleteCloudExadataInfrastructureRequest name. */
                    public name: string;

                    /** DeleteCloudExadataInfrastructureRequest requestId. */
                    public requestId: string;

                    /** DeleteCloudExadataInfrastructureRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteCloudExadataInfrastructureRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCloudExadataInfrastructureRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IDeleteCloudExadataInfrastructureRequest): google.cloud.oracledatabase.v1.DeleteCloudExadataInfrastructureRequest;

                    /**
                     * Encodes the specified DeleteCloudExadataInfrastructureRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.DeleteCloudExadataInfrastructureRequest.verify|verify} messages.
                     * @param message DeleteCloudExadataInfrastructureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IDeleteCloudExadataInfrastructureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCloudExadataInfrastructureRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.DeleteCloudExadataInfrastructureRequest.verify|verify} messages.
                     * @param message DeleteCloudExadataInfrastructureRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IDeleteCloudExadataInfrastructureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCloudExadataInfrastructureRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCloudExadataInfrastructureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.DeleteCloudExadataInfrastructureRequest;

                    /**
                     * Decodes a DeleteCloudExadataInfrastructureRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCloudExadataInfrastructureRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.DeleteCloudExadataInfrastructureRequest;

                    /**
                     * Verifies a DeleteCloudExadataInfrastructureRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCloudExadataInfrastructureRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCloudExadataInfrastructureRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.DeleteCloudExadataInfrastructureRequest;

                    /**
                     * Creates a plain object from a DeleteCloudExadataInfrastructureRequest message. Also converts values to other types if specified.
                     * @param message DeleteCloudExadataInfrastructureRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.DeleteCloudExadataInfrastructureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCloudExadataInfrastructureRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCloudExadataInfrastructureRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCloudVmClustersRequest. */
                interface IListCloudVmClustersRequest {

                    /** ListCloudVmClustersRequest parent */
                    parent?: (string|null);

                    /** ListCloudVmClustersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListCloudVmClustersRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCloudVmClustersRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListCloudVmClustersRequest. */
                class ListCloudVmClustersRequest implements IListCloudVmClustersRequest {

                    /**
                     * Constructs a new ListCloudVmClustersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListCloudVmClustersRequest);

                    /** ListCloudVmClustersRequest parent. */
                    public parent: string;

                    /** ListCloudVmClustersRequest pageSize. */
                    public pageSize: number;

                    /** ListCloudVmClustersRequest pageToken. */
                    public pageToken: string;

                    /** ListCloudVmClustersRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListCloudVmClustersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCloudVmClustersRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListCloudVmClustersRequest): google.cloud.oracledatabase.v1.ListCloudVmClustersRequest;

                    /**
                     * Encodes the specified ListCloudVmClustersRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListCloudVmClustersRequest.verify|verify} messages.
                     * @param message ListCloudVmClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListCloudVmClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCloudVmClustersRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListCloudVmClustersRequest.verify|verify} messages.
                     * @param message ListCloudVmClustersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListCloudVmClustersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCloudVmClustersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCloudVmClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListCloudVmClustersRequest;

                    /**
                     * Decodes a ListCloudVmClustersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCloudVmClustersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListCloudVmClustersRequest;

                    /**
                     * Verifies a ListCloudVmClustersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCloudVmClustersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCloudVmClustersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListCloudVmClustersRequest;

                    /**
                     * Creates a plain object from a ListCloudVmClustersRequest message. Also converts values to other types if specified.
                     * @param message ListCloudVmClustersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListCloudVmClustersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCloudVmClustersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCloudVmClustersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListCloudVmClustersResponse. */
                interface IListCloudVmClustersResponse {

                    /** ListCloudVmClustersResponse cloudVmClusters */
                    cloudVmClusters?: (google.cloud.oracledatabase.v1.ICloudVmCluster[]|null);

                    /** ListCloudVmClustersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCloudVmClustersResponse. */
                class ListCloudVmClustersResponse implements IListCloudVmClustersResponse {

                    /**
                     * Constructs a new ListCloudVmClustersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListCloudVmClustersResponse);

                    /** ListCloudVmClustersResponse cloudVmClusters. */
                    public cloudVmClusters: google.cloud.oracledatabase.v1.ICloudVmCluster[];

                    /** ListCloudVmClustersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCloudVmClustersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCloudVmClustersResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListCloudVmClustersResponse): google.cloud.oracledatabase.v1.ListCloudVmClustersResponse;

                    /**
                     * Encodes the specified ListCloudVmClustersResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListCloudVmClustersResponse.verify|verify} messages.
                     * @param message ListCloudVmClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListCloudVmClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCloudVmClustersResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListCloudVmClustersResponse.verify|verify} messages.
                     * @param message ListCloudVmClustersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListCloudVmClustersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCloudVmClustersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCloudVmClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListCloudVmClustersResponse;

                    /**
                     * Decodes a ListCloudVmClustersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCloudVmClustersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListCloudVmClustersResponse;

                    /**
                     * Verifies a ListCloudVmClustersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCloudVmClustersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCloudVmClustersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListCloudVmClustersResponse;

                    /**
                     * Creates a plain object from a ListCloudVmClustersResponse message. Also converts values to other types if specified.
                     * @param message ListCloudVmClustersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListCloudVmClustersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCloudVmClustersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListCloudVmClustersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetCloudVmClusterRequest. */
                interface IGetCloudVmClusterRequest {

                    /** GetCloudVmClusterRequest name */
                    name?: (string|null);
                }

                /** Represents a GetCloudVmClusterRequest. */
                class GetCloudVmClusterRequest implements IGetCloudVmClusterRequest {

                    /**
                     * Constructs a new GetCloudVmClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IGetCloudVmClusterRequest);

                    /** GetCloudVmClusterRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetCloudVmClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCloudVmClusterRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IGetCloudVmClusterRequest): google.cloud.oracledatabase.v1.GetCloudVmClusterRequest;

                    /**
                     * Encodes the specified GetCloudVmClusterRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.GetCloudVmClusterRequest.verify|verify} messages.
                     * @param message GetCloudVmClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IGetCloudVmClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCloudVmClusterRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.GetCloudVmClusterRequest.verify|verify} messages.
                     * @param message GetCloudVmClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IGetCloudVmClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCloudVmClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCloudVmClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.GetCloudVmClusterRequest;

                    /**
                     * Decodes a GetCloudVmClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCloudVmClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.GetCloudVmClusterRequest;

                    /**
                     * Verifies a GetCloudVmClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCloudVmClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCloudVmClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.GetCloudVmClusterRequest;

                    /**
                     * Creates a plain object from a GetCloudVmClusterRequest message. Also converts values to other types if specified.
                     * @param message GetCloudVmClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.GetCloudVmClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCloudVmClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetCloudVmClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateCloudVmClusterRequest. */
                interface ICreateCloudVmClusterRequest {

                    /** CreateCloudVmClusterRequest parent */
                    parent?: (string|null);

                    /** CreateCloudVmClusterRequest cloudVmClusterId */
                    cloudVmClusterId?: (string|null);

                    /** CreateCloudVmClusterRequest cloudVmCluster */
                    cloudVmCluster?: (google.cloud.oracledatabase.v1.ICloudVmCluster|null);

                    /** CreateCloudVmClusterRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateCloudVmClusterRequest. */
                class CreateCloudVmClusterRequest implements ICreateCloudVmClusterRequest {

                    /**
                     * Constructs a new CreateCloudVmClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.ICreateCloudVmClusterRequest);

                    /** CreateCloudVmClusterRequest parent. */
                    public parent: string;

                    /** CreateCloudVmClusterRequest cloudVmClusterId. */
                    public cloudVmClusterId: string;

                    /** CreateCloudVmClusterRequest cloudVmCluster. */
                    public cloudVmCluster?: (google.cloud.oracledatabase.v1.ICloudVmCluster|null);

                    /** CreateCloudVmClusterRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateCloudVmClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateCloudVmClusterRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.ICreateCloudVmClusterRequest): google.cloud.oracledatabase.v1.CreateCloudVmClusterRequest;

                    /**
                     * Encodes the specified CreateCloudVmClusterRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.CreateCloudVmClusterRequest.verify|verify} messages.
                     * @param message CreateCloudVmClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.ICreateCloudVmClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateCloudVmClusterRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.CreateCloudVmClusterRequest.verify|verify} messages.
                     * @param message CreateCloudVmClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.ICreateCloudVmClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateCloudVmClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateCloudVmClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.CreateCloudVmClusterRequest;

                    /**
                     * Decodes a CreateCloudVmClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateCloudVmClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.CreateCloudVmClusterRequest;

                    /**
                     * Verifies a CreateCloudVmClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateCloudVmClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateCloudVmClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.CreateCloudVmClusterRequest;

                    /**
                     * Creates a plain object from a CreateCloudVmClusterRequest message. Also converts values to other types if specified.
                     * @param message CreateCloudVmClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.CreateCloudVmClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateCloudVmClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateCloudVmClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteCloudVmClusterRequest. */
                interface IDeleteCloudVmClusterRequest {

                    /** DeleteCloudVmClusterRequest name */
                    name?: (string|null);

                    /** DeleteCloudVmClusterRequest requestId */
                    requestId?: (string|null);

                    /** DeleteCloudVmClusterRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteCloudVmClusterRequest. */
                class DeleteCloudVmClusterRequest implements IDeleteCloudVmClusterRequest {

                    /**
                     * Constructs a new DeleteCloudVmClusterRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IDeleteCloudVmClusterRequest);

                    /** DeleteCloudVmClusterRequest name. */
                    public name: string;

                    /** DeleteCloudVmClusterRequest requestId. */
                    public requestId: string;

                    /** DeleteCloudVmClusterRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteCloudVmClusterRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteCloudVmClusterRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IDeleteCloudVmClusterRequest): google.cloud.oracledatabase.v1.DeleteCloudVmClusterRequest;

                    /**
                     * Encodes the specified DeleteCloudVmClusterRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.DeleteCloudVmClusterRequest.verify|verify} messages.
                     * @param message DeleteCloudVmClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IDeleteCloudVmClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteCloudVmClusterRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.DeleteCloudVmClusterRequest.verify|verify} messages.
                     * @param message DeleteCloudVmClusterRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IDeleteCloudVmClusterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteCloudVmClusterRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteCloudVmClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.DeleteCloudVmClusterRequest;

                    /**
                     * Decodes a DeleteCloudVmClusterRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteCloudVmClusterRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.DeleteCloudVmClusterRequest;

                    /**
                     * Verifies a DeleteCloudVmClusterRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteCloudVmClusterRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteCloudVmClusterRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.DeleteCloudVmClusterRequest;

                    /**
                     * Creates a plain object from a DeleteCloudVmClusterRequest message. Also converts values to other types if specified.
                     * @param message DeleteCloudVmClusterRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.DeleteCloudVmClusterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteCloudVmClusterRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteCloudVmClusterRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEntitlementsRequest. */
                interface IListEntitlementsRequest {

                    /** ListEntitlementsRequest parent */
                    parent?: (string|null);

                    /** ListEntitlementsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListEntitlementsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListEntitlementsRequest. */
                class ListEntitlementsRequest implements IListEntitlementsRequest {

                    /**
                     * Constructs a new ListEntitlementsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListEntitlementsRequest);

                    /** ListEntitlementsRequest parent. */
                    public parent: string;

                    /** ListEntitlementsRequest pageSize. */
                    public pageSize: number;

                    /** ListEntitlementsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListEntitlementsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEntitlementsRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListEntitlementsRequest): google.cloud.oracledatabase.v1.ListEntitlementsRequest;

                    /**
                     * Encodes the specified ListEntitlementsRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListEntitlementsRequest.verify|verify} messages.
                     * @param message ListEntitlementsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListEntitlementsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEntitlementsRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListEntitlementsRequest.verify|verify} messages.
                     * @param message ListEntitlementsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListEntitlementsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEntitlementsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEntitlementsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListEntitlementsRequest;

                    /**
                     * Decodes a ListEntitlementsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEntitlementsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListEntitlementsRequest;

                    /**
                     * Verifies a ListEntitlementsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEntitlementsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEntitlementsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListEntitlementsRequest;

                    /**
                     * Creates a plain object from a ListEntitlementsRequest message. Also converts values to other types if specified.
                     * @param message ListEntitlementsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListEntitlementsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEntitlementsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEntitlementsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListEntitlementsResponse. */
                interface IListEntitlementsResponse {

                    /** ListEntitlementsResponse entitlements */
                    entitlements?: (google.cloud.oracledatabase.v1.IEntitlement[]|null);

                    /** ListEntitlementsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListEntitlementsResponse. */
                class ListEntitlementsResponse implements IListEntitlementsResponse {

                    /**
                     * Constructs a new ListEntitlementsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListEntitlementsResponse);

                    /** ListEntitlementsResponse entitlements. */
                    public entitlements: google.cloud.oracledatabase.v1.IEntitlement[];

                    /** ListEntitlementsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListEntitlementsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListEntitlementsResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListEntitlementsResponse): google.cloud.oracledatabase.v1.ListEntitlementsResponse;

                    /**
                     * Encodes the specified ListEntitlementsResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListEntitlementsResponse.verify|verify} messages.
                     * @param message ListEntitlementsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListEntitlementsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListEntitlementsResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListEntitlementsResponse.verify|verify} messages.
                     * @param message ListEntitlementsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListEntitlementsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListEntitlementsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListEntitlementsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListEntitlementsResponse;

                    /**
                     * Decodes a ListEntitlementsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListEntitlementsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListEntitlementsResponse;

                    /**
                     * Verifies a ListEntitlementsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListEntitlementsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListEntitlementsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListEntitlementsResponse;

                    /**
                     * Creates a plain object from a ListEntitlementsResponse message. Also converts values to other types if specified.
                     * @param message ListEntitlementsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListEntitlementsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListEntitlementsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListEntitlementsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDbServersRequest. */
                interface IListDbServersRequest {

                    /** ListDbServersRequest parent */
                    parent?: (string|null);

                    /** ListDbServersRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDbServersRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDbServersRequest. */
                class ListDbServersRequest implements IListDbServersRequest {

                    /**
                     * Constructs a new ListDbServersRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListDbServersRequest);

                    /** ListDbServersRequest parent. */
                    public parent: string;

                    /** ListDbServersRequest pageSize. */
                    public pageSize: number;

                    /** ListDbServersRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDbServersRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDbServersRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListDbServersRequest): google.cloud.oracledatabase.v1.ListDbServersRequest;

                    /**
                     * Encodes the specified ListDbServersRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbServersRequest.verify|verify} messages.
                     * @param message ListDbServersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListDbServersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDbServersRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbServersRequest.verify|verify} messages.
                     * @param message ListDbServersRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListDbServersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDbServersRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDbServersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListDbServersRequest;

                    /**
                     * Decodes a ListDbServersRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDbServersRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListDbServersRequest;

                    /**
                     * Verifies a ListDbServersRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDbServersRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDbServersRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListDbServersRequest;

                    /**
                     * Creates a plain object from a ListDbServersRequest message. Also converts values to other types if specified.
                     * @param message ListDbServersRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListDbServersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDbServersRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDbServersRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDbServersResponse. */
                interface IListDbServersResponse {

                    /** ListDbServersResponse dbServers */
                    dbServers?: (google.cloud.oracledatabase.v1.IDbServer[]|null);

                    /** ListDbServersResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDbServersResponse. */
                class ListDbServersResponse implements IListDbServersResponse {

                    /**
                     * Constructs a new ListDbServersResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListDbServersResponse);

                    /** ListDbServersResponse dbServers. */
                    public dbServers: google.cloud.oracledatabase.v1.IDbServer[];

                    /** ListDbServersResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDbServersResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDbServersResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListDbServersResponse): google.cloud.oracledatabase.v1.ListDbServersResponse;

                    /**
                     * Encodes the specified ListDbServersResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbServersResponse.verify|verify} messages.
                     * @param message ListDbServersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListDbServersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDbServersResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbServersResponse.verify|verify} messages.
                     * @param message ListDbServersResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListDbServersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDbServersResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDbServersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListDbServersResponse;

                    /**
                     * Decodes a ListDbServersResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDbServersResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListDbServersResponse;

                    /**
                     * Verifies a ListDbServersResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDbServersResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDbServersResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListDbServersResponse;

                    /**
                     * Creates a plain object from a ListDbServersResponse message. Also converts values to other types if specified.
                     * @param message ListDbServersResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListDbServersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDbServersResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDbServersResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDbNodesRequest. */
                interface IListDbNodesRequest {

                    /** ListDbNodesRequest parent */
                    parent?: (string|null);

                    /** ListDbNodesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDbNodesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDbNodesRequest. */
                class ListDbNodesRequest implements IListDbNodesRequest {

                    /**
                     * Constructs a new ListDbNodesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListDbNodesRequest);

                    /** ListDbNodesRequest parent. */
                    public parent: string;

                    /** ListDbNodesRequest pageSize. */
                    public pageSize: number;

                    /** ListDbNodesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDbNodesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDbNodesRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListDbNodesRequest): google.cloud.oracledatabase.v1.ListDbNodesRequest;

                    /**
                     * Encodes the specified ListDbNodesRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbNodesRequest.verify|verify} messages.
                     * @param message ListDbNodesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListDbNodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDbNodesRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbNodesRequest.verify|verify} messages.
                     * @param message ListDbNodesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListDbNodesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDbNodesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDbNodesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListDbNodesRequest;

                    /**
                     * Decodes a ListDbNodesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDbNodesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListDbNodesRequest;

                    /**
                     * Verifies a ListDbNodesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDbNodesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDbNodesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListDbNodesRequest;

                    /**
                     * Creates a plain object from a ListDbNodesRequest message. Also converts values to other types if specified.
                     * @param message ListDbNodesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListDbNodesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDbNodesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDbNodesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDbNodesResponse. */
                interface IListDbNodesResponse {

                    /** ListDbNodesResponse dbNodes */
                    dbNodes?: (google.cloud.oracledatabase.v1.IDbNode[]|null);

                    /** ListDbNodesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDbNodesResponse. */
                class ListDbNodesResponse implements IListDbNodesResponse {

                    /**
                     * Constructs a new ListDbNodesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListDbNodesResponse);

                    /** ListDbNodesResponse dbNodes. */
                    public dbNodes: google.cloud.oracledatabase.v1.IDbNode[];

                    /** ListDbNodesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDbNodesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDbNodesResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListDbNodesResponse): google.cloud.oracledatabase.v1.ListDbNodesResponse;

                    /**
                     * Encodes the specified ListDbNodesResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbNodesResponse.verify|verify} messages.
                     * @param message ListDbNodesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListDbNodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDbNodesResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbNodesResponse.verify|verify} messages.
                     * @param message ListDbNodesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListDbNodesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDbNodesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDbNodesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListDbNodesResponse;

                    /**
                     * Decodes a ListDbNodesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDbNodesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListDbNodesResponse;

                    /**
                     * Verifies a ListDbNodesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDbNodesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDbNodesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListDbNodesResponse;

                    /**
                     * Creates a plain object from a ListDbNodesResponse message. Also converts values to other types if specified.
                     * @param message ListDbNodesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListDbNodesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDbNodesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDbNodesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListGiVersionsRequest. */
                interface IListGiVersionsRequest {

                    /** ListGiVersionsRequest parent */
                    parent?: (string|null);

                    /** ListGiVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListGiVersionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListGiVersionsRequest. */
                class ListGiVersionsRequest implements IListGiVersionsRequest {

                    /**
                     * Constructs a new ListGiVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListGiVersionsRequest);

                    /** ListGiVersionsRequest parent. */
                    public parent: string;

                    /** ListGiVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListGiVersionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListGiVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGiVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListGiVersionsRequest): google.cloud.oracledatabase.v1.ListGiVersionsRequest;

                    /**
                     * Encodes the specified ListGiVersionsRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListGiVersionsRequest.verify|verify} messages.
                     * @param message ListGiVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListGiVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGiVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListGiVersionsRequest.verify|verify} messages.
                     * @param message ListGiVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListGiVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGiVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGiVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListGiVersionsRequest;

                    /**
                     * Decodes a ListGiVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGiVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListGiVersionsRequest;

                    /**
                     * Verifies a ListGiVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGiVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGiVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListGiVersionsRequest;

                    /**
                     * Creates a plain object from a ListGiVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListGiVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListGiVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGiVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGiVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListGiVersionsResponse. */
                interface IListGiVersionsResponse {

                    /** ListGiVersionsResponse giVersions */
                    giVersions?: (google.cloud.oracledatabase.v1.IGiVersion[]|null);

                    /** ListGiVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListGiVersionsResponse. */
                class ListGiVersionsResponse implements IListGiVersionsResponse {

                    /**
                     * Constructs a new ListGiVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListGiVersionsResponse);

                    /** ListGiVersionsResponse giVersions. */
                    public giVersions: google.cloud.oracledatabase.v1.IGiVersion[];

                    /** ListGiVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListGiVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListGiVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListGiVersionsResponse): google.cloud.oracledatabase.v1.ListGiVersionsResponse;

                    /**
                     * Encodes the specified ListGiVersionsResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListGiVersionsResponse.verify|verify} messages.
                     * @param message ListGiVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListGiVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListGiVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListGiVersionsResponse.verify|verify} messages.
                     * @param message ListGiVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListGiVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListGiVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListGiVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListGiVersionsResponse;

                    /**
                     * Decodes a ListGiVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListGiVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListGiVersionsResponse;

                    /**
                     * Verifies a ListGiVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListGiVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListGiVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListGiVersionsResponse;

                    /**
                     * Creates a plain object from a ListGiVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListGiVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListGiVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListGiVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListGiVersionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDbSystemShapesRequest. */
                interface IListDbSystemShapesRequest {

                    /** ListDbSystemShapesRequest parent */
                    parent?: (string|null);

                    /** ListDbSystemShapesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListDbSystemShapesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListDbSystemShapesRequest. */
                class ListDbSystemShapesRequest implements IListDbSystemShapesRequest {

                    /**
                     * Constructs a new ListDbSystemShapesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListDbSystemShapesRequest);

                    /** ListDbSystemShapesRequest parent. */
                    public parent: string;

                    /** ListDbSystemShapesRequest pageSize. */
                    public pageSize: number;

                    /** ListDbSystemShapesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListDbSystemShapesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDbSystemShapesRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListDbSystemShapesRequest): google.cloud.oracledatabase.v1.ListDbSystemShapesRequest;

                    /**
                     * Encodes the specified ListDbSystemShapesRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbSystemShapesRequest.verify|verify} messages.
                     * @param message ListDbSystemShapesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListDbSystemShapesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDbSystemShapesRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbSystemShapesRequest.verify|verify} messages.
                     * @param message ListDbSystemShapesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListDbSystemShapesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDbSystemShapesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDbSystemShapesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListDbSystemShapesRequest;

                    /**
                     * Decodes a ListDbSystemShapesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDbSystemShapesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListDbSystemShapesRequest;

                    /**
                     * Verifies a ListDbSystemShapesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDbSystemShapesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDbSystemShapesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListDbSystemShapesRequest;

                    /**
                     * Creates a plain object from a ListDbSystemShapesRequest message. Also converts values to other types if specified.
                     * @param message ListDbSystemShapesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListDbSystemShapesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDbSystemShapesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDbSystemShapesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDbSystemShapesResponse. */
                interface IListDbSystemShapesResponse {

                    /** ListDbSystemShapesResponse dbSystemShapes */
                    dbSystemShapes?: (google.cloud.oracledatabase.v1.IDbSystemShape[]|null);

                    /** ListDbSystemShapesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListDbSystemShapesResponse. */
                class ListDbSystemShapesResponse implements IListDbSystemShapesResponse {

                    /**
                     * Constructs a new ListDbSystemShapesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListDbSystemShapesResponse);

                    /** ListDbSystemShapesResponse dbSystemShapes. */
                    public dbSystemShapes: google.cloud.oracledatabase.v1.IDbSystemShape[];

                    /** ListDbSystemShapesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListDbSystemShapesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDbSystemShapesResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListDbSystemShapesResponse): google.cloud.oracledatabase.v1.ListDbSystemShapesResponse;

                    /**
                     * Encodes the specified ListDbSystemShapesResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbSystemShapesResponse.verify|verify} messages.
                     * @param message ListDbSystemShapesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListDbSystemShapesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDbSystemShapesResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListDbSystemShapesResponse.verify|verify} messages.
                     * @param message ListDbSystemShapesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListDbSystemShapesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDbSystemShapesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDbSystemShapesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListDbSystemShapesResponse;

                    /**
                     * Decodes a ListDbSystemShapesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDbSystemShapesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListDbSystemShapesResponse;

                    /**
                     * Verifies a ListDbSystemShapesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDbSystemShapesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDbSystemShapesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListDbSystemShapesResponse;

                    /**
                     * Creates a plain object from a ListDbSystemShapesResponse message. Also converts values to other types if specified.
                     * @param message ListDbSystemShapesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListDbSystemShapesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDbSystemShapesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDbSystemShapesResponse
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

                    /** OperationMetadata requestedCancellation */
                    requestedCancellation?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);

                    /** OperationMetadata percentComplete */
                    percentComplete?: (number|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IOperationMetadata);

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

                    /** OperationMetadata percentComplete. */
                    public percentComplete: number;

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IOperationMetadata): google.cloud.oracledatabase.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.oracledatabase.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ListAutonomousDatabasesRequest. */
                interface IListAutonomousDatabasesRequest {

                    /** ListAutonomousDatabasesRequest parent */
                    parent?: (string|null);

                    /** ListAutonomousDatabasesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAutonomousDatabasesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAutonomousDatabasesRequest filter */
                    filter?: (string|null);

                    /** ListAutonomousDatabasesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListAutonomousDatabasesRequest. */
                class ListAutonomousDatabasesRequest implements IListAutonomousDatabasesRequest {

                    /**
                     * Constructs a new ListAutonomousDatabasesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabasesRequest);

                    /** ListAutonomousDatabasesRequest parent. */
                    public parent: string;

                    /** ListAutonomousDatabasesRequest pageSize. */
                    public pageSize: number;

                    /** ListAutonomousDatabasesRequest pageToken. */
                    public pageToken: string;

                    /** ListAutonomousDatabasesRequest filter. */
                    public filter: string;

                    /** ListAutonomousDatabasesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListAutonomousDatabasesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAutonomousDatabasesRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabasesRequest): google.cloud.oracledatabase.v1.ListAutonomousDatabasesRequest;

                    /**
                     * Encodes the specified ListAutonomousDatabasesRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabasesRequest.verify|verify} messages.
                     * @param message ListAutonomousDatabasesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListAutonomousDatabasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAutonomousDatabasesRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabasesRequest.verify|verify} messages.
                     * @param message ListAutonomousDatabasesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListAutonomousDatabasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAutonomousDatabasesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAutonomousDatabasesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListAutonomousDatabasesRequest;

                    /**
                     * Decodes a ListAutonomousDatabasesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAutonomousDatabasesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListAutonomousDatabasesRequest;

                    /**
                     * Verifies a ListAutonomousDatabasesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAutonomousDatabasesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAutonomousDatabasesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListAutonomousDatabasesRequest;

                    /**
                     * Creates a plain object from a ListAutonomousDatabasesRequest message. Also converts values to other types if specified.
                     * @param message ListAutonomousDatabasesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListAutonomousDatabasesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAutonomousDatabasesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAutonomousDatabasesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAutonomousDatabasesResponse. */
                interface IListAutonomousDatabasesResponse {

                    /** ListAutonomousDatabasesResponse autonomousDatabases */
                    autonomousDatabases?: (google.cloud.oracledatabase.v1.IAutonomousDatabase[]|null);

                    /** ListAutonomousDatabasesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAutonomousDatabasesResponse. */
                class ListAutonomousDatabasesResponse implements IListAutonomousDatabasesResponse {

                    /**
                     * Constructs a new ListAutonomousDatabasesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabasesResponse);

                    /** ListAutonomousDatabasesResponse autonomousDatabases. */
                    public autonomousDatabases: google.cloud.oracledatabase.v1.IAutonomousDatabase[];

                    /** ListAutonomousDatabasesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAutonomousDatabasesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAutonomousDatabasesResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabasesResponse): google.cloud.oracledatabase.v1.ListAutonomousDatabasesResponse;

                    /**
                     * Encodes the specified ListAutonomousDatabasesResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabasesResponse.verify|verify} messages.
                     * @param message ListAutonomousDatabasesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListAutonomousDatabasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAutonomousDatabasesResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabasesResponse.verify|verify} messages.
                     * @param message ListAutonomousDatabasesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListAutonomousDatabasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAutonomousDatabasesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAutonomousDatabasesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListAutonomousDatabasesResponse;

                    /**
                     * Decodes a ListAutonomousDatabasesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAutonomousDatabasesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListAutonomousDatabasesResponse;

                    /**
                     * Verifies a ListAutonomousDatabasesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAutonomousDatabasesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAutonomousDatabasesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListAutonomousDatabasesResponse;

                    /**
                     * Creates a plain object from a ListAutonomousDatabasesResponse message. Also converts values to other types if specified.
                     * @param message ListAutonomousDatabasesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListAutonomousDatabasesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAutonomousDatabasesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAutonomousDatabasesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetAutonomousDatabaseRequest. */
                interface IGetAutonomousDatabaseRequest {

                    /** GetAutonomousDatabaseRequest name */
                    name?: (string|null);
                }

                /** Represents a GetAutonomousDatabaseRequest. */
                class GetAutonomousDatabaseRequest implements IGetAutonomousDatabaseRequest {

                    /**
                     * Constructs a new GetAutonomousDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IGetAutonomousDatabaseRequest);

                    /** GetAutonomousDatabaseRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetAutonomousDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetAutonomousDatabaseRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IGetAutonomousDatabaseRequest): google.cloud.oracledatabase.v1.GetAutonomousDatabaseRequest;

                    /**
                     * Encodes the specified GetAutonomousDatabaseRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.GetAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message GetAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IGetAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetAutonomousDatabaseRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.GetAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message GetAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IGetAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetAutonomousDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.GetAutonomousDatabaseRequest;

                    /**
                     * Decodes a GetAutonomousDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.GetAutonomousDatabaseRequest;

                    /**
                     * Verifies a GetAutonomousDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetAutonomousDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetAutonomousDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.GetAutonomousDatabaseRequest;

                    /**
                     * Creates a plain object from a GetAutonomousDatabaseRequest message. Also converts values to other types if specified.
                     * @param message GetAutonomousDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.GetAutonomousDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetAutonomousDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetAutonomousDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateAutonomousDatabaseRequest. */
                interface ICreateAutonomousDatabaseRequest {

                    /** CreateAutonomousDatabaseRequest parent */
                    parent?: (string|null);

                    /** CreateAutonomousDatabaseRequest autonomousDatabaseId */
                    autonomousDatabaseId?: (string|null);

                    /** CreateAutonomousDatabaseRequest autonomousDatabase */
                    autonomousDatabase?: (google.cloud.oracledatabase.v1.IAutonomousDatabase|null);

                    /** CreateAutonomousDatabaseRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a CreateAutonomousDatabaseRequest. */
                class CreateAutonomousDatabaseRequest implements ICreateAutonomousDatabaseRequest {

                    /**
                     * Constructs a new CreateAutonomousDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.ICreateAutonomousDatabaseRequest);

                    /** CreateAutonomousDatabaseRequest parent. */
                    public parent: string;

                    /** CreateAutonomousDatabaseRequest autonomousDatabaseId. */
                    public autonomousDatabaseId: string;

                    /** CreateAutonomousDatabaseRequest autonomousDatabase. */
                    public autonomousDatabase?: (google.cloud.oracledatabase.v1.IAutonomousDatabase|null);

                    /** CreateAutonomousDatabaseRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new CreateAutonomousDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAutonomousDatabaseRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.ICreateAutonomousDatabaseRequest): google.cloud.oracledatabase.v1.CreateAutonomousDatabaseRequest;

                    /**
                     * Encodes the specified CreateAutonomousDatabaseRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.CreateAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message CreateAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.ICreateAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAutonomousDatabaseRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.CreateAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message CreateAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.ICreateAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAutonomousDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.CreateAutonomousDatabaseRequest;

                    /**
                     * Decodes a CreateAutonomousDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.CreateAutonomousDatabaseRequest;

                    /**
                     * Verifies a CreateAutonomousDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAutonomousDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAutonomousDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.CreateAutonomousDatabaseRequest;

                    /**
                     * Creates a plain object from a CreateAutonomousDatabaseRequest message. Also converts values to other types if specified.
                     * @param message CreateAutonomousDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.CreateAutonomousDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAutonomousDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateAutonomousDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteAutonomousDatabaseRequest. */
                interface IDeleteAutonomousDatabaseRequest {

                    /** DeleteAutonomousDatabaseRequest name */
                    name?: (string|null);

                    /** DeleteAutonomousDatabaseRequest requestId */
                    requestId?: (string|null);
                }

                /** Represents a DeleteAutonomousDatabaseRequest. */
                class DeleteAutonomousDatabaseRequest implements IDeleteAutonomousDatabaseRequest {

                    /**
                     * Constructs a new DeleteAutonomousDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IDeleteAutonomousDatabaseRequest);

                    /** DeleteAutonomousDatabaseRequest name. */
                    public name: string;

                    /** DeleteAutonomousDatabaseRequest requestId. */
                    public requestId: string;

                    /**
                     * Creates a new DeleteAutonomousDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteAutonomousDatabaseRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IDeleteAutonomousDatabaseRequest): google.cloud.oracledatabase.v1.DeleteAutonomousDatabaseRequest;

                    /**
                     * Encodes the specified DeleteAutonomousDatabaseRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.DeleteAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message DeleteAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IDeleteAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteAutonomousDatabaseRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.DeleteAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message DeleteAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IDeleteAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteAutonomousDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.DeleteAutonomousDatabaseRequest;

                    /**
                     * Decodes a DeleteAutonomousDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.DeleteAutonomousDatabaseRequest;

                    /**
                     * Verifies a DeleteAutonomousDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteAutonomousDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteAutonomousDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.DeleteAutonomousDatabaseRequest;

                    /**
                     * Creates a plain object from a DeleteAutonomousDatabaseRequest message. Also converts values to other types if specified.
                     * @param message DeleteAutonomousDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.DeleteAutonomousDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteAutonomousDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteAutonomousDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RestoreAutonomousDatabaseRequest. */
                interface IRestoreAutonomousDatabaseRequest {

                    /** RestoreAutonomousDatabaseRequest name */
                    name?: (string|null);

                    /** RestoreAutonomousDatabaseRequest restoreTime */
                    restoreTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a RestoreAutonomousDatabaseRequest. */
                class RestoreAutonomousDatabaseRequest implements IRestoreAutonomousDatabaseRequest {

                    /**
                     * Constructs a new RestoreAutonomousDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IRestoreAutonomousDatabaseRequest);

                    /** RestoreAutonomousDatabaseRequest name. */
                    public name: string;

                    /** RestoreAutonomousDatabaseRequest restoreTime. */
                    public restoreTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new RestoreAutonomousDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreAutonomousDatabaseRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IRestoreAutonomousDatabaseRequest): google.cloud.oracledatabase.v1.RestoreAutonomousDatabaseRequest;

                    /**
                     * Encodes the specified RestoreAutonomousDatabaseRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.RestoreAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message RestoreAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IRestoreAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreAutonomousDatabaseRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.RestoreAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message RestoreAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IRestoreAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreAutonomousDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.RestoreAutonomousDatabaseRequest;

                    /**
                     * Decodes a RestoreAutonomousDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.RestoreAutonomousDatabaseRequest;

                    /**
                     * Verifies a RestoreAutonomousDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreAutonomousDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreAutonomousDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.RestoreAutonomousDatabaseRequest;

                    /**
                     * Creates a plain object from a RestoreAutonomousDatabaseRequest message. Also converts values to other types if specified.
                     * @param message RestoreAutonomousDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.RestoreAutonomousDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreAutonomousDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestoreAutonomousDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StopAutonomousDatabaseRequest. */
                interface IStopAutonomousDatabaseRequest {

                    /** StopAutonomousDatabaseRequest name */
                    name?: (string|null);
                }

                /** Represents a StopAutonomousDatabaseRequest. */
                class StopAutonomousDatabaseRequest implements IStopAutonomousDatabaseRequest {

                    /**
                     * Constructs a new StopAutonomousDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IStopAutonomousDatabaseRequest);

                    /** StopAutonomousDatabaseRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopAutonomousDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopAutonomousDatabaseRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IStopAutonomousDatabaseRequest): google.cloud.oracledatabase.v1.StopAutonomousDatabaseRequest;

                    /**
                     * Encodes the specified StopAutonomousDatabaseRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.StopAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message StopAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IStopAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopAutonomousDatabaseRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.StopAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message StopAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IStopAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopAutonomousDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.StopAutonomousDatabaseRequest;

                    /**
                     * Decodes a StopAutonomousDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.StopAutonomousDatabaseRequest;

                    /**
                     * Verifies a StopAutonomousDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopAutonomousDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopAutonomousDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.StopAutonomousDatabaseRequest;

                    /**
                     * Creates a plain object from a StopAutonomousDatabaseRequest message. Also converts values to other types if specified.
                     * @param message StopAutonomousDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.StopAutonomousDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopAutonomousDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StopAutonomousDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a StartAutonomousDatabaseRequest. */
                interface IStartAutonomousDatabaseRequest {

                    /** StartAutonomousDatabaseRequest name */
                    name?: (string|null);
                }

                /** Represents a StartAutonomousDatabaseRequest. */
                class StartAutonomousDatabaseRequest implements IStartAutonomousDatabaseRequest {

                    /**
                     * Constructs a new StartAutonomousDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IStartAutonomousDatabaseRequest);

                    /** StartAutonomousDatabaseRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartAutonomousDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartAutonomousDatabaseRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IStartAutonomousDatabaseRequest): google.cloud.oracledatabase.v1.StartAutonomousDatabaseRequest;

                    /**
                     * Encodes the specified StartAutonomousDatabaseRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.StartAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message StartAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IStartAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartAutonomousDatabaseRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.StartAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message StartAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IStartAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartAutonomousDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.StartAutonomousDatabaseRequest;

                    /**
                     * Decodes a StartAutonomousDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.StartAutonomousDatabaseRequest;

                    /**
                     * Verifies a StartAutonomousDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartAutonomousDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartAutonomousDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.StartAutonomousDatabaseRequest;

                    /**
                     * Creates a plain object from a StartAutonomousDatabaseRequest message. Also converts values to other types if specified.
                     * @param message StartAutonomousDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.StartAutonomousDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartAutonomousDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for StartAutonomousDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RestartAutonomousDatabaseRequest. */
                interface IRestartAutonomousDatabaseRequest {

                    /** RestartAutonomousDatabaseRequest name */
                    name?: (string|null);
                }

                /** Represents a RestartAutonomousDatabaseRequest. */
                class RestartAutonomousDatabaseRequest implements IRestartAutonomousDatabaseRequest {

                    /**
                     * Constructs a new RestartAutonomousDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IRestartAutonomousDatabaseRequest);

                    /** RestartAutonomousDatabaseRequest name. */
                    public name: string;

                    /**
                     * Creates a new RestartAutonomousDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestartAutonomousDatabaseRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IRestartAutonomousDatabaseRequest): google.cloud.oracledatabase.v1.RestartAutonomousDatabaseRequest;

                    /**
                     * Encodes the specified RestartAutonomousDatabaseRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.RestartAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message RestartAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IRestartAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestartAutonomousDatabaseRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.RestartAutonomousDatabaseRequest.verify|verify} messages.
                     * @param message RestartAutonomousDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IRestartAutonomousDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestartAutonomousDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestartAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.RestartAutonomousDatabaseRequest;

                    /**
                     * Decodes a RestartAutonomousDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestartAutonomousDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.RestartAutonomousDatabaseRequest;

                    /**
                     * Verifies a RestartAutonomousDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestartAutonomousDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestartAutonomousDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.RestartAutonomousDatabaseRequest;

                    /**
                     * Creates a plain object from a RestartAutonomousDatabaseRequest message. Also converts values to other types if specified.
                     * @param message RestartAutonomousDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.RestartAutonomousDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestartAutonomousDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestartAutonomousDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateAutonomousDatabaseWalletRequest. */
                interface IGenerateAutonomousDatabaseWalletRequest {

                    /** GenerateAutonomousDatabaseWalletRequest name */
                    name?: (string|null);

                    /** GenerateAutonomousDatabaseWalletRequest type */
                    type?: (google.cloud.oracledatabase.v1.GenerateType|keyof typeof google.cloud.oracledatabase.v1.GenerateType|null);

                    /** GenerateAutonomousDatabaseWalletRequest isRegional */
                    isRegional?: (boolean|null);

                    /** GenerateAutonomousDatabaseWalletRequest password */
                    password?: (string|null);
                }

                /** Represents a GenerateAutonomousDatabaseWalletRequest. */
                class GenerateAutonomousDatabaseWalletRequest implements IGenerateAutonomousDatabaseWalletRequest {

                    /**
                     * Constructs a new GenerateAutonomousDatabaseWalletRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IGenerateAutonomousDatabaseWalletRequest);

                    /** GenerateAutonomousDatabaseWalletRequest name. */
                    public name: string;

                    /** GenerateAutonomousDatabaseWalletRequest type. */
                    public type: (google.cloud.oracledatabase.v1.GenerateType|keyof typeof google.cloud.oracledatabase.v1.GenerateType);

                    /** GenerateAutonomousDatabaseWalletRequest isRegional. */
                    public isRegional: boolean;

                    /** GenerateAutonomousDatabaseWalletRequest password. */
                    public password: string;

                    /**
                     * Creates a new GenerateAutonomousDatabaseWalletRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateAutonomousDatabaseWalletRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IGenerateAutonomousDatabaseWalletRequest): google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletRequest;

                    /**
                     * Encodes the specified GenerateAutonomousDatabaseWalletRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletRequest.verify|verify} messages.
                     * @param message GenerateAutonomousDatabaseWalletRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IGenerateAutonomousDatabaseWalletRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateAutonomousDatabaseWalletRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletRequest.verify|verify} messages.
                     * @param message GenerateAutonomousDatabaseWalletRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IGenerateAutonomousDatabaseWalletRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateAutonomousDatabaseWalletRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateAutonomousDatabaseWalletRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletRequest;

                    /**
                     * Decodes a GenerateAutonomousDatabaseWalletRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateAutonomousDatabaseWalletRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletRequest;

                    /**
                     * Verifies a GenerateAutonomousDatabaseWalletRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateAutonomousDatabaseWalletRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateAutonomousDatabaseWalletRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletRequest;

                    /**
                     * Creates a plain object from a GenerateAutonomousDatabaseWalletRequest message. Also converts values to other types if specified.
                     * @param message GenerateAutonomousDatabaseWalletRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateAutonomousDatabaseWalletRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateAutonomousDatabaseWalletRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GenerateAutonomousDatabaseWalletResponse. */
                interface IGenerateAutonomousDatabaseWalletResponse {

                    /** GenerateAutonomousDatabaseWalletResponse archiveContent */
                    archiveContent?: (Uint8Array|Buffer|string|null);
                }

                /** Represents a GenerateAutonomousDatabaseWalletResponse. */
                class GenerateAutonomousDatabaseWalletResponse implements IGenerateAutonomousDatabaseWalletResponse {

                    /**
                     * Constructs a new GenerateAutonomousDatabaseWalletResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IGenerateAutonomousDatabaseWalletResponse);

                    /** GenerateAutonomousDatabaseWalletResponse archiveContent. */
                    public archiveContent: (Uint8Array|Buffer|string);

                    /**
                     * Creates a new GenerateAutonomousDatabaseWalletResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateAutonomousDatabaseWalletResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IGenerateAutonomousDatabaseWalletResponse): google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletResponse;

                    /**
                     * Encodes the specified GenerateAutonomousDatabaseWalletResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletResponse.verify|verify} messages.
                     * @param message GenerateAutonomousDatabaseWalletResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IGenerateAutonomousDatabaseWalletResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateAutonomousDatabaseWalletResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletResponse.verify|verify} messages.
                     * @param message GenerateAutonomousDatabaseWalletResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IGenerateAutonomousDatabaseWalletResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateAutonomousDatabaseWalletResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateAutonomousDatabaseWalletResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletResponse;

                    /**
                     * Decodes a GenerateAutonomousDatabaseWalletResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateAutonomousDatabaseWalletResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletResponse;

                    /**
                     * Verifies a GenerateAutonomousDatabaseWalletResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateAutonomousDatabaseWalletResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateAutonomousDatabaseWalletResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletResponse;

                    /**
                     * Creates a plain object from a GenerateAutonomousDatabaseWalletResponse message. Also converts values to other types if specified.
                     * @param message GenerateAutonomousDatabaseWalletResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.GenerateAutonomousDatabaseWalletResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateAutonomousDatabaseWalletResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GenerateAutonomousDatabaseWalletResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAutonomousDbVersionsRequest. */
                interface IListAutonomousDbVersionsRequest {

                    /** ListAutonomousDbVersionsRequest parent */
                    parent?: (string|null);

                    /** ListAutonomousDbVersionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAutonomousDbVersionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAutonomousDbVersionsRequest. */
                class ListAutonomousDbVersionsRequest implements IListAutonomousDbVersionsRequest {

                    /**
                     * Constructs a new ListAutonomousDbVersionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListAutonomousDbVersionsRequest);

                    /** ListAutonomousDbVersionsRequest parent. */
                    public parent: string;

                    /** ListAutonomousDbVersionsRequest pageSize. */
                    public pageSize: number;

                    /** ListAutonomousDbVersionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAutonomousDbVersionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAutonomousDbVersionsRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListAutonomousDbVersionsRequest): google.cloud.oracledatabase.v1.ListAutonomousDbVersionsRequest;

                    /**
                     * Encodes the specified ListAutonomousDbVersionsRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDbVersionsRequest.verify|verify} messages.
                     * @param message ListAutonomousDbVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListAutonomousDbVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAutonomousDbVersionsRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDbVersionsRequest.verify|verify} messages.
                     * @param message ListAutonomousDbVersionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListAutonomousDbVersionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAutonomousDbVersionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAutonomousDbVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListAutonomousDbVersionsRequest;

                    /**
                     * Decodes a ListAutonomousDbVersionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAutonomousDbVersionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListAutonomousDbVersionsRequest;

                    /**
                     * Verifies a ListAutonomousDbVersionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAutonomousDbVersionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAutonomousDbVersionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListAutonomousDbVersionsRequest;

                    /**
                     * Creates a plain object from a ListAutonomousDbVersionsRequest message. Also converts values to other types if specified.
                     * @param message ListAutonomousDbVersionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListAutonomousDbVersionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAutonomousDbVersionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAutonomousDbVersionsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAutonomousDbVersionsResponse. */
                interface IListAutonomousDbVersionsResponse {

                    /** ListAutonomousDbVersionsResponse autonomousDbVersions */
                    autonomousDbVersions?: (google.cloud.oracledatabase.v1.IAutonomousDbVersion[]|null);

                    /** ListAutonomousDbVersionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAutonomousDbVersionsResponse. */
                class ListAutonomousDbVersionsResponse implements IListAutonomousDbVersionsResponse {

                    /**
                     * Constructs a new ListAutonomousDbVersionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListAutonomousDbVersionsResponse);

                    /** ListAutonomousDbVersionsResponse autonomousDbVersions. */
                    public autonomousDbVersions: google.cloud.oracledatabase.v1.IAutonomousDbVersion[];

                    /** ListAutonomousDbVersionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAutonomousDbVersionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAutonomousDbVersionsResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListAutonomousDbVersionsResponse): google.cloud.oracledatabase.v1.ListAutonomousDbVersionsResponse;

                    /**
                     * Encodes the specified ListAutonomousDbVersionsResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDbVersionsResponse.verify|verify} messages.
                     * @param message ListAutonomousDbVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListAutonomousDbVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAutonomousDbVersionsResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDbVersionsResponse.verify|verify} messages.
                     * @param message ListAutonomousDbVersionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListAutonomousDbVersionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAutonomousDbVersionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAutonomousDbVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListAutonomousDbVersionsResponse;

                    /**
                     * Decodes a ListAutonomousDbVersionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAutonomousDbVersionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListAutonomousDbVersionsResponse;

                    /**
                     * Verifies a ListAutonomousDbVersionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAutonomousDbVersionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAutonomousDbVersionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListAutonomousDbVersionsResponse;

                    /**
                     * Creates a plain object from a ListAutonomousDbVersionsResponse message. Also converts values to other types if specified.
                     * @param message ListAutonomousDbVersionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListAutonomousDbVersionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAutonomousDbVersionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAutonomousDbVersionsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAutonomousDatabaseCharacterSetsRequest. */
                interface IListAutonomousDatabaseCharacterSetsRequest {

                    /** ListAutonomousDatabaseCharacterSetsRequest parent */
                    parent?: (string|null);

                    /** ListAutonomousDatabaseCharacterSetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAutonomousDatabaseCharacterSetsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAutonomousDatabaseCharacterSetsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListAutonomousDatabaseCharacterSetsRequest. */
                class ListAutonomousDatabaseCharacterSetsRequest implements IListAutonomousDatabaseCharacterSetsRequest {

                    /**
                     * Constructs a new ListAutonomousDatabaseCharacterSetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabaseCharacterSetsRequest);

                    /** ListAutonomousDatabaseCharacterSetsRequest parent. */
                    public parent: string;

                    /** ListAutonomousDatabaseCharacterSetsRequest pageSize. */
                    public pageSize: number;

                    /** ListAutonomousDatabaseCharacterSetsRequest pageToken. */
                    public pageToken: string;

                    /** ListAutonomousDatabaseCharacterSetsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListAutonomousDatabaseCharacterSetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAutonomousDatabaseCharacterSetsRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabaseCharacterSetsRequest): google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsRequest;

                    /**
                     * Encodes the specified ListAutonomousDatabaseCharacterSetsRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsRequest.verify|verify} messages.
                     * @param message ListAutonomousDatabaseCharacterSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListAutonomousDatabaseCharacterSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAutonomousDatabaseCharacterSetsRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsRequest.verify|verify} messages.
                     * @param message ListAutonomousDatabaseCharacterSetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListAutonomousDatabaseCharacterSetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAutonomousDatabaseCharacterSetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAutonomousDatabaseCharacterSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsRequest;

                    /**
                     * Decodes a ListAutonomousDatabaseCharacterSetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAutonomousDatabaseCharacterSetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsRequest;

                    /**
                     * Verifies a ListAutonomousDatabaseCharacterSetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAutonomousDatabaseCharacterSetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAutonomousDatabaseCharacterSetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsRequest;

                    /**
                     * Creates a plain object from a ListAutonomousDatabaseCharacterSetsRequest message. Also converts values to other types if specified.
                     * @param message ListAutonomousDatabaseCharacterSetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAutonomousDatabaseCharacterSetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAutonomousDatabaseCharacterSetsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAutonomousDatabaseCharacterSetsResponse. */
                interface IListAutonomousDatabaseCharacterSetsResponse {

                    /** ListAutonomousDatabaseCharacterSetsResponse autonomousDatabaseCharacterSets */
                    autonomousDatabaseCharacterSets?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseCharacterSet[]|null);

                    /** ListAutonomousDatabaseCharacterSetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAutonomousDatabaseCharacterSetsResponse. */
                class ListAutonomousDatabaseCharacterSetsResponse implements IListAutonomousDatabaseCharacterSetsResponse {

                    /**
                     * Constructs a new ListAutonomousDatabaseCharacterSetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabaseCharacterSetsResponse);

                    /** ListAutonomousDatabaseCharacterSetsResponse autonomousDatabaseCharacterSets. */
                    public autonomousDatabaseCharacterSets: google.cloud.oracledatabase.v1.IAutonomousDatabaseCharacterSet[];

                    /** ListAutonomousDatabaseCharacterSetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAutonomousDatabaseCharacterSetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAutonomousDatabaseCharacterSetsResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabaseCharacterSetsResponse): google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsResponse;

                    /**
                     * Encodes the specified ListAutonomousDatabaseCharacterSetsResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsResponse.verify|verify} messages.
                     * @param message ListAutonomousDatabaseCharacterSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListAutonomousDatabaseCharacterSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAutonomousDatabaseCharacterSetsResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsResponse.verify|verify} messages.
                     * @param message ListAutonomousDatabaseCharacterSetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListAutonomousDatabaseCharacterSetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAutonomousDatabaseCharacterSetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAutonomousDatabaseCharacterSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsResponse;

                    /**
                     * Decodes a ListAutonomousDatabaseCharacterSetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAutonomousDatabaseCharacterSetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsResponse;

                    /**
                     * Verifies a ListAutonomousDatabaseCharacterSetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAutonomousDatabaseCharacterSetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAutonomousDatabaseCharacterSetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsResponse;

                    /**
                     * Creates a plain object from a ListAutonomousDatabaseCharacterSetsResponse message. Also converts values to other types if specified.
                     * @param message ListAutonomousDatabaseCharacterSetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListAutonomousDatabaseCharacterSetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAutonomousDatabaseCharacterSetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAutonomousDatabaseCharacterSetsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAutonomousDatabaseBackupsRequest. */
                interface IListAutonomousDatabaseBackupsRequest {

                    /** ListAutonomousDatabaseBackupsRequest parent */
                    parent?: (string|null);

                    /** ListAutonomousDatabaseBackupsRequest filter */
                    filter?: (string|null);

                    /** ListAutonomousDatabaseBackupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAutonomousDatabaseBackupsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAutonomousDatabaseBackupsRequest. */
                class ListAutonomousDatabaseBackupsRequest implements IListAutonomousDatabaseBackupsRequest {

                    /**
                     * Constructs a new ListAutonomousDatabaseBackupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabaseBackupsRequest);

                    /** ListAutonomousDatabaseBackupsRequest parent. */
                    public parent: string;

                    /** ListAutonomousDatabaseBackupsRequest filter. */
                    public filter: string;

                    /** ListAutonomousDatabaseBackupsRequest pageSize. */
                    public pageSize: number;

                    /** ListAutonomousDatabaseBackupsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAutonomousDatabaseBackupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAutonomousDatabaseBackupsRequest instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabaseBackupsRequest): google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsRequest;

                    /**
                     * Encodes the specified ListAutonomousDatabaseBackupsRequest message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsRequest.verify|verify} messages.
                     * @param message ListAutonomousDatabaseBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListAutonomousDatabaseBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAutonomousDatabaseBackupsRequest message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsRequest.verify|verify} messages.
                     * @param message ListAutonomousDatabaseBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListAutonomousDatabaseBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAutonomousDatabaseBackupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAutonomousDatabaseBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsRequest;

                    /**
                     * Decodes a ListAutonomousDatabaseBackupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAutonomousDatabaseBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsRequest;

                    /**
                     * Verifies a ListAutonomousDatabaseBackupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAutonomousDatabaseBackupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAutonomousDatabaseBackupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsRequest;

                    /**
                     * Creates a plain object from a ListAutonomousDatabaseBackupsRequest message. Also converts values to other types if specified.
                     * @param message ListAutonomousDatabaseBackupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAutonomousDatabaseBackupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAutonomousDatabaseBackupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListAutonomousDatabaseBackupsResponse. */
                interface IListAutonomousDatabaseBackupsResponse {

                    /** ListAutonomousDatabaseBackupsResponse autonomousDatabaseBackups */
                    autonomousDatabaseBackups?: (google.cloud.oracledatabase.v1.IAutonomousDatabaseBackup[]|null);

                    /** ListAutonomousDatabaseBackupsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAutonomousDatabaseBackupsResponse. */
                class ListAutonomousDatabaseBackupsResponse implements IListAutonomousDatabaseBackupsResponse {

                    /**
                     * Constructs a new ListAutonomousDatabaseBackupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabaseBackupsResponse);

                    /** ListAutonomousDatabaseBackupsResponse autonomousDatabaseBackups. */
                    public autonomousDatabaseBackups: google.cloud.oracledatabase.v1.IAutonomousDatabaseBackup[];

                    /** ListAutonomousDatabaseBackupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAutonomousDatabaseBackupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAutonomousDatabaseBackupsResponse instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IListAutonomousDatabaseBackupsResponse): google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsResponse;

                    /**
                     * Encodes the specified ListAutonomousDatabaseBackupsResponse message. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsResponse.verify|verify} messages.
                     * @param message ListAutonomousDatabaseBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IListAutonomousDatabaseBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAutonomousDatabaseBackupsResponse message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsResponse.verify|verify} messages.
                     * @param message ListAutonomousDatabaseBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IListAutonomousDatabaseBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAutonomousDatabaseBackupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAutonomousDatabaseBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsResponse;

                    /**
                     * Decodes a ListAutonomousDatabaseBackupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAutonomousDatabaseBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsResponse;

                    /**
                     * Verifies a ListAutonomousDatabaseBackupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAutonomousDatabaseBackupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAutonomousDatabaseBackupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsResponse;

                    /**
                     * Creates a plain object from a ListAutonomousDatabaseBackupsResponse message. Also converts values to other types if specified.
                     * @param message ListAutonomousDatabaseBackupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.ListAutonomousDatabaseBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAutonomousDatabaseBackupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListAutonomousDatabaseBackupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudVmCluster. */
                interface ICloudVmCluster {

                    /** CloudVmCluster name */
                    name?: (string|null);

                    /** CloudVmCluster exadataInfrastructure */
                    exadataInfrastructure?: (string|null);

                    /** CloudVmCluster displayName */
                    displayName?: (string|null);

                    /** CloudVmCluster gcpOracleZone */
                    gcpOracleZone?: (string|null);

                    /** CloudVmCluster properties */
                    properties?: (google.cloud.oracledatabase.v1.ICloudVmClusterProperties|null);

                    /** CloudVmCluster labels */
                    labels?: ({ [k: string]: string }|null);

                    /** CloudVmCluster createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** CloudVmCluster cidr */
                    cidr?: (string|null);

                    /** CloudVmCluster backupSubnetCidr */
                    backupSubnetCidr?: (string|null);

                    /** CloudVmCluster network */
                    network?: (string|null);
                }

                /** Represents a CloudVmCluster. */
                class CloudVmCluster implements ICloudVmCluster {

                    /**
                     * Constructs a new CloudVmCluster.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.ICloudVmCluster);

                    /** CloudVmCluster name. */
                    public name: string;

                    /** CloudVmCluster exadataInfrastructure. */
                    public exadataInfrastructure: string;

                    /** CloudVmCluster displayName. */
                    public displayName: string;

                    /** CloudVmCluster gcpOracleZone. */
                    public gcpOracleZone: string;

                    /** CloudVmCluster properties. */
                    public properties?: (google.cloud.oracledatabase.v1.ICloudVmClusterProperties|null);

                    /** CloudVmCluster labels. */
                    public labels: { [k: string]: string };

                    /** CloudVmCluster createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** CloudVmCluster cidr. */
                    public cidr: string;

                    /** CloudVmCluster backupSubnetCidr. */
                    public backupSubnetCidr: string;

                    /** CloudVmCluster network. */
                    public network: string;

                    /**
                     * Creates a new CloudVmCluster instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudVmCluster instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.ICloudVmCluster): google.cloud.oracledatabase.v1.CloudVmCluster;

                    /**
                     * Encodes the specified CloudVmCluster message. Does not implicitly {@link google.cloud.oracledatabase.v1.CloudVmCluster.verify|verify} messages.
                     * @param message CloudVmCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.ICloudVmCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudVmCluster message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.CloudVmCluster.verify|verify} messages.
                     * @param message CloudVmCluster message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.ICloudVmCluster, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudVmCluster message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudVmCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.CloudVmCluster;

                    /**
                     * Decodes a CloudVmCluster message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudVmCluster
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.CloudVmCluster;

                    /**
                     * Verifies a CloudVmCluster message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudVmCluster message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudVmCluster
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.CloudVmCluster;

                    /**
                     * Creates a plain object from a CloudVmCluster message. Also converts values to other types if specified.
                     * @param message CloudVmCluster
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.CloudVmCluster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudVmCluster to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudVmCluster
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloudVmClusterProperties. */
                interface ICloudVmClusterProperties {

                    /** CloudVmClusterProperties ocid */
                    ocid?: (string|null);

                    /** CloudVmClusterProperties licenseType */
                    licenseType?: (google.cloud.oracledatabase.v1.CloudVmClusterProperties.LicenseType|keyof typeof google.cloud.oracledatabase.v1.CloudVmClusterProperties.LicenseType|null);

                    /** CloudVmClusterProperties giVersion */
                    giVersion?: (string|null);

                    /** CloudVmClusterProperties timeZone */
                    timeZone?: (google.type.ITimeZone|null);

                    /** CloudVmClusterProperties sshPublicKeys */
                    sshPublicKeys?: (string[]|null);

                    /** CloudVmClusterProperties nodeCount */
                    nodeCount?: (number|null);

                    /** CloudVmClusterProperties shape */
                    shape?: (string|null);

                    /** CloudVmClusterProperties ocpuCount */
                    ocpuCount?: (number|null);

                    /** CloudVmClusterProperties memorySizeGb */
                    memorySizeGb?: (number|null);

                    /** CloudVmClusterProperties dbNodeStorageSizeGb */
                    dbNodeStorageSizeGb?: (number|null);

                    /** CloudVmClusterProperties storageSizeGb */
                    storageSizeGb?: (number|null);

                    /** CloudVmClusterProperties dataStorageSizeTb */
                    dataStorageSizeTb?: (number|null);

                    /** CloudVmClusterProperties diskRedundancy */
                    diskRedundancy?: (google.cloud.oracledatabase.v1.CloudVmClusterProperties.DiskRedundancy|keyof typeof google.cloud.oracledatabase.v1.CloudVmClusterProperties.DiskRedundancy|null);

                    /** CloudVmClusterProperties sparseDiskgroupEnabled */
                    sparseDiskgroupEnabled?: (boolean|null);

                    /** CloudVmClusterProperties localBackupEnabled */
                    localBackupEnabled?: (boolean|null);

                    /** CloudVmClusterProperties hostnamePrefix */
                    hostnamePrefix?: (string|null);

                    /** CloudVmClusterProperties diagnosticsDataCollectionOptions */
                    diagnosticsDataCollectionOptions?: (google.cloud.oracledatabase.v1.IDataCollectionOptions|null);

                    /** CloudVmClusterProperties state */
                    state?: (google.cloud.oracledatabase.v1.CloudVmClusterProperties.State|keyof typeof google.cloud.oracledatabase.v1.CloudVmClusterProperties.State|null);

                    /** CloudVmClusterProperties scanListenerPortTcp */
                    scanListenerPortTcp?: (number|null);

                    /** CloudVmClusterProperties scanListenerPortTcpSsl */
                    scanListenerPortTcpSsl?: (number|null);

                    /** CloudVmClusterProperties domain */
                    domain?: (string|null);

                    /** CloudVmClusterProperties scanDns */
                    scanDns?: (string|null);

                    /** CloudVmClusterProperties hostname */
                    hostname?: (string|null);

                    /** CloudVmClusterProperties cpuCoreCount */
                    cpuCoreCount?: (number|null);

                    /** CloudVmClusterProperties systemVersion */
                    systemVersion?: (string|null);

                    /** CloudVmClusterProperties scanIpIds */
                    scanIpIds?: (string[]|null);

                    /** CloudVmClusterProperties scanDnsRecordId */
                    scanDnsRecordId?: (string|null);

                    /** CloudVmClusterProperties ociUrl */
                    ociUrl?: (string|null);

                    /** CloudVmClusterProperties dbServerOcids */
                    dbServerOcids?: (string[]|null);

                    /** CloudVmClusterProperties compartmentId */
                    compartmentId?: (string|null);

                    /** CloudVmClusterProperties dnsListenerIp */
                    dnsListenerIp?: (string|null);

                    /** CloudVmClusterProperties clusterName */
                    clusterName?: (string|null);
                }

                /** Represents a CloudVmClusterProperties. */
                class CloudVmClusterProperties implements ICloudVmClusterProperties {

                    /**
                     * Constructs a new CloudVmClusterProperties.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.ICloudVmClusterProperties);

                    /** CloudVmClusterProperties ocid. */
                    public ocid: string;

                    /** CloudVmClusterProperties licenseType. */
                    public licenseType: (google.cloud.oracledatabase.v1.CloudVmClusterProperties.LicenseType|keyof typeof google.cloud.oracledatabase.v1.CloudVmClusterProperties.LicenseType);

                    /** CloudVmClusterProperties giVersion. */
                    public giVersion: string;

                    /** CloudVmClusterProperties timeZone. */
                    public timeZone?: (google.type.ITimeZone|null);

                    /** CloudVmClusterProperties sshPublicKeys. */
                    public sshPublicKeys: string[];

                    /** CloudVmClusterProperties nodeCount. */
                    public nodeCount: number;

                    /** CloudVmClusterProperties shape. */
                    public shape: string;

                    /** CloudVmClusterProperties ocpuCount. */
                    public ocpuCount: number;

                    /** CloudVmClusterProperties memorySizeGb. */
                    public memorySizeGb: number;

                    /** CloudVmClusterProperties dbNodeStorageSizeGb. */
                    public dbNodeStorageSizeGb: number;

                    /** CloudVmClusterProperties storageSizeGb. */
                    public storageSizeGb: number;

                    /** CloudVmClusterProperties dataStorageSizeTb. */
                    public dataStorageSizeTb: number;

                    /** CloudVmClusterProperties diskRedundancy. */
                    public diskRedundancy: (google.cloud.oracledatabase.v1.CloudVmClusterProperties.DiskRedundancy|keyof typeof google.cloud.oracledatabase.v1.CloudVmClusterProperties.DiskRedundancy);

                    /** CloudVmClusterProperties sparseDiskgroupEnabled. */
                    public sparseDiskgroupEnabled: boolean;

                    /** CloudVmClusterProperties localBackupEnabled. */
                    public localBackupEnabled: boolean;

                    /** CloudVmClusterProperties hostnamePrefix. */
                    public hostnamePrefix: string;

                    /** CloudVmClusterProperties diagnosticsDataCollectionOptions. */
                    public diagnosticsDataCollectionOptions?: (google.cloud.oracledatabase.v1.IDataCollectionOptions|null);

                    /** CloudVmClusterProperties state. */
                    public state: (google.cloud.oracledatabase.v1.CloudVmClusterProperties.State|keyof typeof google.cloud.oracledatabase.v1.CloudVmClusterProperties.State);

                    /** CloudVmClusterProperties scanListenerPortTcp. */
                    public scanListenerPortTcp: number;

                    /** CloudVmClusterProperties scanListenerPortTcpSsl. */
                    public scanListenerPortTcpSsl: number;

                    /** CloudVmClusterProperties domain. */
                    public domain: string;

                    /** CloudVmClusterProperties scanDns. */
                    public scanDns: string;

                    /** CloudVmClusterProperties hostname. */
                    public hostname: string;

                    /** CloudVmClusterProperties cpuCoreCount. */
                    public cpuCoreCount: number;

                    /** CloudVmClusterProperties systemVersion. */
                    public systemVersion: string;

                    /** CloudVmClusterProperties scanIpIds. */
                    public scanIpIds: string[];

                    /** CloudVmClusterProperties scanDnsRecordId. */
                    public scanDnsRecordId: string;

                    /** CloudVmClusterProperties ociUrl. */
                    public ociUrl: string;

                    /** CloudVmClusterProperties dbServerOcids. */
                    public dbServerOcids: string[];

                    /** CloudVmClusterProperties compartmentId. */
                    public compartmentId: string;

                    /** CloudVmClusterProperties dnsListenerIp. */
                    public dnsListenerIp: string;

                    /** CloudVmClusterProperties clusterName. */
                    public clusterName: string;

                    /**
                     * Creates a new CloudVmClusterProperties instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudVmClusterProperties instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.ICloudVmClusterProperties): google.cloud.oracledatabase.v1.CloudVmClusterProperties;

                    /**
                     * Encodes the specified CloudVmClusterProperties message. Does not implicitly {@link google.cloud.oracledatabase.v1.CloudVmClusterProperties.verify|verify} messages.
                     * @param message CloudVmClusterProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.ICloudVmClusterProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudVmClusterProperties message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.CloudVmClusterProperties.verify|verify} messages.
                     * @param message CloudVmClusterProperties message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.ICloudVmClusterProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudVmClusterProperties message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudVmClusterProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.CloudVmClusterProperties;

                    /**
                     * Decodes a CloudVmClusterProperties message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudVmClusterProperties
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.CloudVmClusterProperties;

                    /**
                     * Verifies a CloudVmClusterProperties message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudVmClusterProperties message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudVmClusterProperties
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.CloudVmClusterProperties;

                    /**
                     * Creates a plain object from a CloudVmClusterProperties message. Also converts values to other types if specified.
                     * @param message CloudVmClusterProperties
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.CloudVmClusterProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudVmClusterProperties to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloudVmClusterProperties
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace CloudVmClusterProperties {

                    /** LicenseType enum. */
                    enum LicenseType {
                        LICENSE_TYPE_UNSPECIFIED = 0,
                        LICENSE_INCLUDED = 1,
                        BRING_YOUR_OWN_LICENSE = 2
                    }

                    /** DiskRedundancy enum. */
                    enum DiskRedundancy {
                        DISK_REDUNDANCY_UNSPECIFIED = 0,
                        HIGH = 1,
                        NORMAL = 2
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        PROVISIONING = 1,
                        AVAILABLE = 2,
                        UPDATING = 3,
                        TERMINATING = 4,
                        TERMINATED = 5,
                        FAILED = 6,
                        MAINTENANCE_IN_PROGRESS = 7
                    }
                }

                /** Properties of a DataCollectionOptions. */
                interface IDataCollectionOptions {

                    /** DataCollectionOptions diagnosticsEventsEnabled */
                    diagnosticsEventsEnabled?: (boolean|null);

                    /** DataCollectionOptions healthMonitoringEnabled */
                    healthMonitoringEnabled?: (boolean|null);

                    /** DataCollectionOptions incidentLogsEnabled */
                    incidentLogsEnabled?: (boolean|null);
                }

                /** Represents a DataCollectionOptions. */
                class DataCollectionOptions implements IDataCollectionOptions {

                    /**
                     * Constructs a new DataCollectionOptions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.oracledatabase.v1.IDataCollectionOptions);

                    /** DataCollectionOptions diagnosticsEventsEnabled. */
                    public diagnosticsEventsEnabled: boolean;

                    /** DataCollectionOptions healthMonitoringEnabled. */
                    public healthMonitoringEnabled: boolean;

                    /** DataCollectionOptions incidentLogsEnabled. */
                    public incidentLogsEnabled: boolean;

                    /**
                     * Creates a new DataCollectionOptions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DataCollectionOptions instance
                     */
                    public static create(properties?: google.cloud.oracledatabase.v1.IDataCollectionOptions): google.cloud.oracledatabase.v1.DataCollectionOptions;

                    /**
                     * Encodes the specified DataCollectionOptions message. Does not implicitly {@link google.cloud.oracledatabase.v1.DataCollectionOptions.verify|verify} messages.
                     * @param message DataCollectionOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.oracledatabase.v1.IDataCollectionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DataCollectionOptions message, length delimited. Does not implicitly {@link google.cloud.oracledatabase.v1.DataCollectionOptions.verify|verify} messages.
                     * @param message DataCollectionOptions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.oracledatabase.v1.IDataCollectionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DataCollectionOptions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DataCollectionOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.oracledatabase.v1.DataCollectionOptions;

                    /**
                     * Decodes a DataCollectionOptions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DataCollectionOptions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.oracledatabase.v1.DataCollectionOptions;

                    /**
                     * Verifies a DataCollectionOptions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DataCollectionOptions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DataCollectionOptions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.oracledatabase.v1.DataCollectionOptions;

                    /**
                     * Creates a plain object from a DataCollectionOptions message. Also converts values to other types if specified.
                     * @param message DataCollectionOptions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.oracledatabase.v1.DataCollectionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DataCollectionOptions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DataCollectionOptions
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

        /** Properties of a FieldInfo. */
        interface IFieldInfo {

            /** FieldInfo format */
            format?: (google.api.FieldInfo.Format|keyof typeof google.api.FieldInfo.Format|null);
        }

        /** Represents a FieldInfo. */
        class FieldInfo implements IFieldInfo {

            /**
             * Constructs a new FieldInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IFieldInfo);

            /** FieldInfo format. */
            public format: (google.api.FieldInfo.Format|keyof typeof google.api.FieldInfo.Format);

            /**
             * Creates a new FieldInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldInfo instance
             */
            public static create(properties?: google.api.IFieldInfo): google.api.FieldInfo;

            /**
             * Encodes the specified FieldInfo message. Does not implicitly {@link google.api.FieldInfo.verify|verify} messages.
             * @param message FieldInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IFieldInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldInfo message, length delimited. Does not implicitly {@link google.api.FieldInfo.verify|verify} messages.
             * @param message FieldInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IFieldInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.FieldInfo;

            /**
             * Decodes a FieldInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.FieldInfo;

            /**
             * Verifies a FieldInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldInfo
             */
            public static fromObject(object: { [k: string]: any }): google.api.FieldInfo;

            /**
             * Creates a plain object from a FieldInfo message. Also converts values to other types if specified.
             * @param message FieldInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.FieldInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldInfo {

            /** Format enum. */
            enum Format {
                FORMAT_UNSPECIFIED = 0,
                UUID4 = 1,
                IPV4 = 2,
                IPV6 = 3,
                IPV4_OR_IPV6 = 4
            }
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

            /** FieldOptions .google.api.fieldInfo */
            ".google.api.fieldInfo"?: (google.api.IFieldInfo|null);
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

        /** Properties of a TimeOfDay. */
        interface ITimeOfDay {

            /** TimeOfDay hours */
            hours?: (number|null);

            /** TimeOfDay minutes */
            minutes?: (number|null);

            /** TimeOfDay seconds */
            seconds?: (number|null);

            /** TimeOfDay nanos */
            nanos?: (number|null);
        }

        /** Represents a TimeOfDay. */
        class TimeOfDay implements ITimeOfDay {

            /**
             * Constructs a new TimeOfDay.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeOfDay);

            /** TimeOfDay hours. */
            public hours: number;

            /** TimeOfDay minutes. */
            public minutes: number;

            /** TimeOfDay seconds. */
            public seconds: number;

            /** TimeOfDay nanos. */
            public nanos: number;

            /**
             * Creates a new TimeOfDay instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeOfDay instance
             */
            public static create(properties?: google.type.ITimeOfDay): google.type.TimeOfDay;

            /**
             * Encodes the specified TimeOfDay message. Does not implicitly {@link google.type.TimeOfDay.verify|verify} messages.
             * @param message TimeOfDay message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeOfDay, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeOfDay message, length delimited. Does not implicitly {@link google.type.TimeOfDay.verify|verify} messages.
             * @param message TimeOfDay message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeOfDay, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeOfDay message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeOfDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeOfDay;

            /**
             * Decodes a TimeOfDay message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeOfDay
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeOfDay;

            /**
             * Verifies a TimeOfDay message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeOfDay message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeOfDay
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeOfDay;

            /**
             * Creates a plain object from a TimeOfDay message. Also converts values to other types if specified.
             * @param message TimeOfDay
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeOfDay, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeOfDay to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TimeOfDay
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Month enum. */
        enum Month {
            MONTH_UNSPECIFIED = 0,
            JANUARY = 1,
            FEBRUARY = 2,
            MARCH = 3,
            APRIL = 4,
            MAY = 5,
            JUNE = 6,
            JULY = 7,
            AUGUST = 8,
            SEPTEMBER = 9,
            OCTOBER = 10,
            NOVEMBER = 11,
            DECEMBER = 12
        }

        /** Properties of a DateTime. */
        interface IDateTime {

            /** DateTime year */
            year?: (number|null);

            /** DateTime month */
            month?: (number|null);

            /** DateTime day */
            day?: (number|null);

            /** DateTime hours */
            hours?: (number|null);

            /** DateTime minutes */
            minutes?: (number|null);

            /** DateTime seconds */
            seconds?: (number|null);

            /** DateTime nanos */
            nanos?: (number|null);

            /** DateTime utcOffset */
            utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone */
            timeZone?: (google.type.ITimeZone|null);
        }

        /** Represents a DateTime. */
        class DateTime implements IDateTime {

            /**
             * Constructs a new DateTime.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IDateTime);

            /** DateTime year. */
            public year: number;

            /** DateTime month. */
            public month: number;

            /** DateTime day. */
            public day: number;

            /** DateTime hours. */
            public hours: number;

            /** DateTime minutes. */
            public minutes: number;

            /** DateTime seconds. */
            public seconds: number;

            /** DateTime nanos. */
            public nanos: number;

            /** DateTime utcOffset. */
            public utcOffset?: (google.protobuf.IDuration|null);

            /** DateTime timeZone. */
            public timeZone?: (google.type.ITimeZone|null);

            /** DateTime timeOffset. */
            public timeOffset?: ("utcOffset"|"timeZone");

            /**
             * Creates a new DateTime instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DateTime instance
             */
            public static create(properties?: google.type.IDateTime): google.type.DateTime;

            /**
             * Encodes the specified DateTime message. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DateTime message, length delimited. Does not implicitly {@link google.type.DateTime.verify|verify} messages.
             * @param message DateTime message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IDateTime, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DateTime message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.DateTime;

            /**
             * Decodes a DateTime message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DateTime
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.DateTime;

            /**
             * Verifies a DateTime message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DateTime message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DateTime
             */
            public static fromObject(object: { [k: string]: any }): google.type.DateTime;

            /**
             * Creates a plain object from a DateTime message. Also converts values to other types if specified.
             * @param message DateTime
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.DateTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DateTime to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DateTime
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TimeZone. */
        interface ITimeZone {

            /** TimeZone id */
            id?: (string|null);

            /** TimeZone version */
            version?: (string|null);
        }

        /** Represents a TimeZone. */
        class TimeZone implements ITimeZone {

            /**
             * Constructs a new TimeZone.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.ITimeZone);

            /** TimeZone id. */
            public id: string;

            /** TimeZone version. */
            public version: string;

            /**
             * Creates a new TimeZone instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TimeZone instance
             */
            public static create(properties?: google.type.ITimeZone): google.type.TimeZone;

            /**
             * Encodes the specified TimeZone message. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TimeZone message, length delimited. Does not implicitly {@link google.type.TimeZone.verify|verify} messages.
             * @param message TimeZone message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.ITimeZone, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TimeZone message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.TimeZone;

            /**
             * Decodes a TimeZone message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TimeZone
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.TimeZone;

            /**
             * Verifies a TimeZone message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TimeZone message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TimeZone
             */
            public static fromObject(object: { [k: string]: any }): google.type.TimeZone;

            /**
             * Creates a plain object from a TimeZone message. Also converts values to other types if specified.
             * @param message TimeZone
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.TimeZone, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TimeZone to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TimeZone
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
