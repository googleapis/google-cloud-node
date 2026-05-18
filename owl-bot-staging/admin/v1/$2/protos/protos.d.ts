// Copyright 2026 Google LLC
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

    /** Namespace firestore. */
    namespace firestore {

        /** Namespace admin. */
        namespace admin {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Backup. */
                interface IBackup {

                    /** Backup name */
                    name?: (string|null);

                    /** Backup database */
                    database?: (string|null);

                    /** Backup databaseUid */
                    databaseUid?: (string|null);

                    /** Backup snapshotTime */
                    snapshotTime?: (google.protobuf.ITimestamp|null);

                    /** Backup expireTime */
                    expireTime?: (google.protobuf.ITimestamp|null);

                    /** Backup stats */
                    stats?: (google.firestore.admin.v1.Backup.IStats|null);

                    /** Backup state */
                    state?: (google.firestore.admin.v1.Backup.State|keyof typeof google.firestore.admin.v1.Backup.State|null);
                }

                /** Represents a Backup. */
                class Backup implements IBackup {

                    /**
                     * Constructs a new Backup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IBackup);

                    /** Backup name. */
                    public name: string;

                    /** Backup database. */
                    public database: string;

                    /** Backup databaseUid. */
                    public databaseUid: string;

                    /** Backup snapshotTime. */
                    public snapshotTime?: (google.protobuf.ITimestamp|null);

                    /** Backup expireTime. */
                    public expireTime?: (google.protobuf.ITimestamp|null);

                    /** Backup stats. */
                    public stats?: (google.firestore.admin.v1.Backup.IStats|null);

                    /** Backup state. */
                    public state: (google.firestore.admin.v1.Backup.State|keyof typeof google.firestore.admin.v1.Backup.State);

                    /**
                     * Creates a new Backup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Backup instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IBackup): google.firestore.admin.v1.Backup;

                    /**
                     * Encodes the specified Backup message. Does not implicitly {@link google.firestore.admin.v1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Backup message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Backup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Backup;

                    /**
                     * Decodes a Backup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Backup;

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
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Backup;

                    /**
                     * Creates a plain object from a Backup message. Also converts values to other types if specified.
                     * @param message Backup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a Stats. */
                    interface IStats {

                        /** Stats sizeBytes */
                        sizeBytes?: (number|Long|string|null);

                        /** Stats documentCount */
                        documentCount?: (number|Long|string|null);

                        /** Stats indexCount */
                        indexCount?: (number|Long|string|null);
                    }

                    /** Represents a Stats. */
                    class Stats implements IStats {

                        /**
                         * Constructs a new Stats.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.Backup.IStats);

                        /** Stats sizeBytes. */
                        public sizeBytes: (number|Long|string);

                        /** Stats documentCount. */
                        public documentCount: (number|Long|string);

                        /** Stats indexCount. */
                        public indexCount: (number|Long|string);

                        /**
                         * Creates a new Stats instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Stats instance
                         */
                        public static create(properties?: google.firestore.admin.v1.Backup.IStats): google.firestore.admin.v1.Backup.Stats;

                        /**
                         * Encodes the specified Stats message. Does not implicitly {@link google.firestore.admin.v1.Backup.Stats.verify|verify} messages.
                         * @param message Stats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.Backup.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Stats message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Backup.Stats.verify|verify} messages.
                         * @param message Stats message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.Backup.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Stats message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Stats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Backup.Stats;

                        /**
                         * Decodes a Stats message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Stats
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Backup.Stats;

                        /**
                         * Verifies a Stats message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Stats message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Stats
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Backup.Stats;

                        /**
                         * Creates a plain object from a Stats message. Also converts values to other types if specified.
                         * @param message Stats
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.Backup.Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Stats to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Stats
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 2,
                        NOT_AVAILABLE = 3
                    }
                }

                /** Properties of a Database. */
                interface IDatabase {

                    /** Database name */
                    name?: (string|null);

                    /** Database uid */
                    uid?: (string|null);

                    /** Database createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Database updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Database deleteTime */
                    deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Database locationId */
                    locationId?: (string|null);

                    /** Database type */
                    type?: (google.firestore.admin.v1.Database.DatabaseType|keyof typeof google.firestore.admin.v1.Database.DatabaseType|null);

                    /** Database concurrencyMode */
                    concurrencyMode?: (google.firestore.admin.v1.Database.ConcurrencyMode|keyof typeof google.firestore.admin.v1.Database.ConcurrencyMode|null);

                    /** Database versionRetentionPeriod */
                    versionRetentionPeriod?: (google.protobuf.IDuration|null);

                    /** Database earliestVersionTime */
                    earliestVersionTime?: (google.protobuf.ITimestamp|null);

                    /** Database pointInTimeRecoveryEnablement */
                    pointInTimeRecoveryEnablement?: (google.firestore.admin.v1.Database.PointInTimeRecoveryEnablement|keyof typeof google.firestore.admin.v1.Database.PointInTimeRecoveryEnablement|null);

                    /** Database appEngineIntegrationMode */
                    appEngineIntegrationMode?: (google.firestore.admin.v1.Database.AppEngineIntegrationMode|keyof typeof google.firestore.admin.v1.Database.AppEngineIntegrationMode|null);

                    /** Database keyPrefix */
                    keyPrefix?: (string|null);

                    /** Database deleteProtectionState */
                    deleteProtectionState?: (google.firestore.admin.v1.Database.DeleteProtectionState|keyof typeof google.firestore.admin.v1.Database.DeleteProtectionState|null);

                    /** Database cmekConfig */
                    cmekConfig?: (google.firestore.admin.v1.Database.ICmekConfig|null);

                    /** Database previousId */
                    previousId?: (string|null);

                    /** Database sourceInfo */
                    sourceInfo?: (google.firestore.admin.v1.Database.ISourceInfo|null);

                    /** Database tags */
                    tags?: ({ [k: string]: string }|null);

                    /** Database freeTier */
                    freeTier?: (boolean|null);

                    /** Database etag */
                    etag?: (string|null);

                    /** Database databaseEdition */
                    databaseEdition?: (google.firestore.admin.v1.Database.DatabaseEdition|keyof typeof google.firestore.admin.v1.Database.DatabaseEdition|null);

                    /** Database realtimeUpdatesMode */
                    realtimeUpdatesMode?: (google.firestore.admin.v1.RealtimeUpdatesMode|keyof typeof google.firestore.admin.v1.RealtimeUpdatesMode|null);

                    /** Database firestoreDataAccessMode */
                    firestoreDataAccessMode?: (google.firestore.admin.v1.Database.DataAccessMode|keyof typeof google.firestore.admin.v1.Database.DataAccessMode|null);

                    /** Database mongodbCompatibleDataAccessMode */
                    mongodbCompatibleDataAccessMode?: (google.firestore.admin.v1.Database.DataAccessMode|keyof typeof google.firestore.admin.v1.Database.DataAccessMode|null);
                }

                /** Represents a Database. */
                class Database implements IDatabase {

                    /**
                     * Constructs a new Database.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IDatabase);

                    /** Database name. */
                    public name: string;

                    /** Database uid. */
                    public uid: string;

                    /** Database createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Database updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Database deleteTime. */
                    public deleteTime?: (google.protobuf.ITimestamp|null);

                    /** Database locationId. */
                    public locationId: string;

                    /** Database type. */
                    public type: (google.firestore.admin.v1.Database.DatabaseType|keyof typeof google.firestore.admin.v1.Database.DatabaseType);

                    /** Database concurrencyMode. */
                    public concurrencyMode: (google.firestore.admin.v1.Database.ConcurrencyMode|keyof typeof google.firestore.admin.v1.Database.ConcurrencyMode);

                    /** Database versionRetentionPeriod. */
                    public versionRetentionPeriod?: (google.protobuf.IDuration|null);

                    /** Database earliestVersionTime. */
                    public earliestVersionTime?: (google.protobuf.ITimestamp|null);

                    /** Database pointInTimeRecoveryEnablement. */
                    public pointInTimeRecoveryEnablement: (google.firestore.admin.v1.Database.PointInTimeRecoveryEnablement|keyof typeof google.firestore.admin.v1.Database.PointInTimeRecoveryEnablement);

                    /** Database appEngineIntegrationMode. */
                    public appEngineIntegrationMode: (google.firestore.admin.v1.Database.AppEngineIntegrationMode|keyof typeof google.firestore.admin.v1.Database.AppEngineIntegrationMode);

                    /** Database keyPrefix. */
                    public keyPrefix: string;

                    /** Database deleteProtectionState. */
                    public deleteProtectionState: (google.firestore.admin.v1.Database.DeleteProtectionState|keyof typeof google.firestore.admin.v1.Database.DeleteProtectionState);

                    /** Database cmekConfig. */
                    public cmekConfig?: (google.firestore.admin.v1.Database.ICmekConfig|null);

                    /** Database previousId. */
                    public previousId: string;

                    /** Database sourceInfo. */
                    public sourceInfo?: (google.firestore.admin.v1.Database.ISourceInfo|null);

                    /** Database tags. */
                    public tags: { [k: string]: string };

                    /** Database freeTier. */
                    public freeTier?: (boolean|null);

                    /** Database etag. */
                    public etag: string;

                    /** Database databaseEdition. */
                    public databaseEdition: (google.firestore.admin.v1.Database.DatabaseEdition|keyof typeof google.firestore.admin.v1.Database.DatabaseEdition);

                    /** Database realtimeUpdatesMode. */
                    public realtimeUpdatesMode: (google.firestore.admin.v1.RealtimeUpdatesMode|keyof typeof google.firestore.admin.v1.RealtimeUpdatesMode);

                    /** Database firestoreDataAccessMode. */
                    public firestoreDataAccessMode: (google.firestore.admin.v1.Database.DataAccessMode|keyof typeof google.firestore.admin.v1.Database.DataAccessMode);

                    /** Database mongodbCompatibleDataAccessMode. */
                    public mongodbCompatibleDataAccessMode: (google.firestore.admin.v1.Database.DataAccessMode|keyof typeof google.firestore.admin.v1.Database.DataAccessMode);

                    /**
                     * Creates a new Database instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Database instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IDatabase): google.firestore.admin.v1.Database;

                    /**
                     * Encodes the specified Database message. Does not implicitly {@link google.firestore.admin.v1.Database.verify|verify} messages.
                     * @param message Database message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Database message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Database.verify|verify} messages.
                     * @param message Database message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Database message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Database
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Database;

                    /**
                     * Decodes a Database message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Database
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Database;

                    /**
                     * Verifies a Database message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Database message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Database
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Database;

                    /**
                     * Creates a plain object from a Database message. Also converts values to other types if specified.
                     * @param message Database
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.Database, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Database to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Database
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Database {

                    /** DatabaseType enum. */
                    enum DatabaseType {
                        DATABASE_TYPE_UNSPECIFIED = 0,
                        FIRESTORE_NATIVE = 1,
                        DATASTORE_MODE = 2
                    }

                    /** ConcurrencyMode enum. */
                    enum ConcurrencyMode {
                        CONCURRENCY_MODE_UNSPECIFIED = 0,
                        OPTIMISTIC = 1,
                        PESSIMISTIC = 2,
                        OPTIMISTIC_WITH_ENTITY_GROUPS = 3
                    }

                    /** PointInTimeRecoveryEnablement enum. */
                    enum PointInTimeRecoveryEnablement {
                        POINT_IN_TIME_RECOVERY_ENABLEMENT_UNSPECIFIED = 0,
                        POINT_IN_TIME_RECOVERY_ENABLED = 1,
                        POINT_IN_TIME_RECOVERY_DISABLED = 2
                    }

                    /** AppEngineIntegrationMode enum. */
                    enum AppEngineIntegrationMode {
                        APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }

                    /** DeleteProtectionState enum. */
                    enum DeleteProtectionState {
                        DELETE_PROTECTION_STATE_UNSPECIFIED = 0,
                        DELETE_PROTECTION_DISABLED = 1,
                        DELETE_PROTECTION_ENABLED = 2
                    }

                    /** Properties of a CmekConfig. */
                    interface ICmekConfig {

                        /** CmekConfig kmsKeyName */
                        kmsKeyName?: (string|null);

                        /** CmekConfig activeKeyVersion */
                        activeKeyVersion?: (string[]|null);
                    }

                    /** Represents a CmekConfig. */
                    class CmekConfig implements ICmekConfig {

                        /**
                         * Constructs a new CmekConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.Database.ICmekConfig);

                        /** CmekConfig kmsKeyName. */
                        public kmsKeyName: string;

                        /** CmekConfig activeKeyVersion. */
                        public activeKeyVersion: string[];

                        /**
                         * Creates a new CmekConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CmekConfig instance
                         */
                        public static create(properties?: google.firestore.admin.v1.Database.ICmekConfig): google.firestore.admin.v1.Database.CmekConfig;

                        /**
                         * Encodes the specified CmekConfig message. Does not implicitly {@link google.firestore.admin.v1.Database.CmekConfig.verify|verify} messages.
                         * @param message CmekConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.Database.ICmekConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CmekConfig message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Database.CmekConfig.verify|verify} messages.
                         * @param message CmekConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.Database.ICmekConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CmekConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CmekConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Database.CmekConfig;

                        /**
                         * Decodes a CmekConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CmekConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Database.CmekConfig;

                        /**
                         * Verifies a CmekConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CmekConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CmekConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Database.CmekConfig;

                        /**
                         * Creates a plain object from a CmekConfig message. Also converts values to other types if specified.
                         * @param message CmekConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.Database.CmekConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CmekConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CmekConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SourceInfo. */
                    interface ISourceInfo {

                        /** SourceInfo backup */
                        backup?: (google.firestore.admin.v1.Database.SourceInfo.IBackupSource|null);

                        /** SourceInfo operation */
                        operation?: (string|null);
                    }

                    /** Represents a SourceInfo. */
                    class SourceInfo implements ISourceInfo {

                        /**
                         * Constructs a new SourceInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.Database.ISourceInfo);

                        /** SourceInfo backup. */
                        public backup?: (google.firestore.admin.v1.Database.SourceInfo.IBackupSource|null);

                        /** SourceInfo operation. */
                        public operation: string;

                        /** SourceInfo source. */
                        public source?: "backup";

                        /**
                         * Creates a new SourceInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SourceInfo instance
                         */
                        public static create(properties?: google.firestore.admin.v1.Database.ISourceInfo): google.firestore.admin.v1.Database.SourceInfo;

                        /**
                         * Encodes the specified SourceInfo message. Does not implicitly {@link google.firestore.admin.v1.Database.SourceInfo.verify|verify} messages.
                         * @param message SourceInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.Database.ISourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SourceInfo message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Database.SourceInfo.verify|verify} messages.
                         * @param message SourceInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.Database.ISourceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SourceInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SourceInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Database.SourceInfo;

                        /**
                         * Decodes a SourceInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SourceInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Database.SourceInfo;

                        /**
                         * Verifies a SourceInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SourceInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SourceInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Database.SourceInfo;

                        /**
                         * Creates a plain object from a SourceInfo message. Also converts values to other types if specified.
                         * @param message SourceInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.Database.SourceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SourceInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SourceInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SourceInfo {

                        /** Properties of a BackupSource. */
                        interface IBackupSource {

                            /** BackupSource backup */
                            backup?: (string|null);
                        }

                        /** Represents a BackupSource. */
                        class BackupSource implements IBackupSource {

                            /**
                             * Constructs a new BackupSource.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.firestore.admin.v1.Database.SourceInfo.IBackupSource);

                            /** BackupSource backup. */
                            public backup: string;

                            /**
                             * Creates a new BackupSource instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns BackupSource instance
                             */
                            public static create(properties?: google.firestore.admin.v1.Database.SourceInfo.IBackupSource): google.firestore.admin.v1.Database.SourceInfo.BackupSource;

                            /**
                             * Encodes the specified BackupSource message. Does not implicitly {@link google.firestore.admin.v1.Database.SourceInfo.BackupSource.verify|verify} messages.
                             * @param message BackupSource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.firestore.admin.v1.Database.SourceInfo.IBackupSource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified BackupSource message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Database.SourceInfo.BackupSource.verify|verify} messages.
                             * @param message BackupSource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.firestore.admin.v1.Database.SourceInfo.IBackupSource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a BackupSource message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns BackupSource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Database.SourceInfo.BackupSource;

                            /**
                             * Decodes a BackupSource message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns BackupSource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Database.SourceInfo.BackupSource;

                            /**
                             * Verifies a BackupSource message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a BackupSource message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns BackupSource
                             */
                            public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Database.SourceInfo.BackupSource;

                            /**
                             * Creates a plain object from a BackupSource message. Also converts values to other types if specified.
                             * @param message BackupSource
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.firestore.admin.v1.Database.SourceInfo.BackupSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this BackupSource to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for BackupSource
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an EncryptionConfig. */
                    interface IEncryptionConfig {

                        /** EncryptionConfig googleDefaultEncryption */
                        googleDefaultEncryption?: (google.firestore.admin.v1.Database.EncryptionConfig.IGoogleDefaultEncryptionOptions|null);

                        /** EncryptionConfig useSourceEncryption */
                        useSourceEncryption?: (google.firestore.admin.v1.Database.EncryptionConfig.ISourceEncryptionOptions|null);

                        /** EncryptionConfig customerManagedEncryption */
                        customerManagedEncryption?: (google.firestore.admin.v1.Database.EncryptionConfig.ICustomerManagedEncryptionOptions|null);
                    }

                    /** Represents an EncryptionConfig. */
                    class EncryptionConfig implements IEncryptionConfig {

                        /**
                         * Constructs a new EncryptionConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.Database.IEncryptionConfig);

                        /** EncryptionConfig googleDefaultEncryption. */
                        public googleDefaultEncryption?: (google.firestore.admin.v1.Database.EncryptionConfig.IGoogleDefaultEncryptionOptions|null);

                        /** EncryptionConfig useSourceEncryption. */
                        public useSourceEncryption?: (google.firestore.admin.v1.Database.EncryptionConfig.ISourceEncryptionOptions|null);

                        /** EncryptionConfig customerManagedEncryption. */
                        public customerManagedEncryption?: (google.firestore.admin.v1.Database.EncryptionConfig.ICustomerManagedEncryptionOptions|null);

                        /** EncryptionConfig encryptionType. */
                        public encryptionType?: ("googleDefaultEncryption"|"useSourceEncryption"|"customerManagedEncryption");

                        /**
                         * Creates a new EncryptionConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EncryptionConfig instance
                         */
                        public static create(properties?: google.firestore.admin.v1.Database.IEncryptionConfig): google.firestore.admin.v1.Database.EncryptionConfig;

                        /**
                         * Encodes the specified EncryptionConfig message. Does not implicitly {@link google.firestore.admin.v1.Database.EncryptionConfig.verify|verify} messages.
                         * @param message EncryptionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.Database.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EncryptionConfig message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Database.EncryptionConfig.verify|verify} messages.
                         * @param message EncryptionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.Database.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EncryptionConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EncryptionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Database.EncryptionConfig;

                        /**
                         * Decodes an EncryptionConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EncryptionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Database.EncryptionConfig;

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
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Database.EncryptionConfig;

                        /**
                         * Creates a plain object from an EncryptionConfig message. Also converts values to other types if specified.
                         * @param message EncryptionConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.Database.EncryptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EncryptionConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EncryptionConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace EncryptionConfig {

                        /** Properties of a GoogleDefaultEncryptionOptions. */
                        interface IGoogleDefaultEncryptionOptions {
                        }

                        /** Represents a GoogleDefaultEncryptionOptions. */
                        class GoogleDefaultEncryptionOptions implements IGoogleDefaultEncryptionOptions {

                            /**
                             * Constructs a new GoogleDefaultEncryptionOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.firestore.admin.v1.Database.EncryptionConfig.IGoogleDefaultEncryptionOptions);

                            /**
                             * Creates a new GoogleDefaultEncryptionOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GoogleDefaultEncryptionOptions instance
                             */
                            public static create(properties?: google.firestore.admin.v1.Database.EncryptionConfig.IGoogleDefaultEncryptionOptions): google.firestore.admin.v1.Database.EncryptionConfig.GoogleDefaultEncryptionOptions;

                            /**
                             * Encodes the specified GoogleDefaultEncryptionOptions message. Does not implicitly {@link google.firestore.admin.v1.Database.EncryptionConfig.GoogleDefaultEncryptionOptions.verify|verify} messages.
                             * @param message GoogleDefaultEncryptionOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.firestore.admin.v1.Database.EncryptionConfig.IGoogleDefaultEncryptionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GoogleDefaultEncryptionOptions message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Database.EncryptionConfig.GoogleDefaultEncryptionOptions.verify|verify} messages.
                             * @param message GoogleDefaultEncryptionOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.firestore.admin.v1.Database.EncryptionConfig.IGoogleDefaultEncryptionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GoogleDefaultEncryptionOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GoogleDefaultEncryptionOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Database.EncryptionConfig.GoogleDefaultEncryptionOptions;

                            /**
                             * Decodes a GoogleDefaultEncryptionOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GoogleDefaultEncryptionOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Database.EncryptionConfig.GoogleDefaultEncryptionOptions;

                            /**
                             * Verifies a GoogleDefaultEncryptionOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GoogleDefaultEncryptionOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GoogleDefaultEncryptionOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Database.EncryptionConfig.GoogleDefaultEncryptionOptions;

                            /**
                             * Creates a plain object from a GoogleDefaultEncryptionOptions message. Also converts values to other types if specified.
                             * @param message GoogleDefaultEncryptionOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.firestore.admin.v1.Database.EncryptionConfig.GoogleDefaultEncryptionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GoogleDefaultEncryptionOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for GoogleDefaultEncryptionOptions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a SourceEncryptionOptions. */
                        interface ISourceEncryptionOptions {
                        }

                        /** Represents a SourceEncryptionOptions. */
                        class SourceEncryptionOptions implements ISourceEncryptionOptions {

                            /**
                             * Constructs a new SourceEncryptionOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.firestore.admin.v1.Database.EncryptionConfig.ISourceEncryptionOptions);

                            /**
                             * Creates a new SourceEncryptionOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SourceEncryptionOptions instance
                             */
                            public static create(properties?: google.firestore.admin.v1.Database.EncryptionConfig.ISourceEncryptionOptions): google.firestore.admin.v1.Database.EncryptionConfig.SourceEncryptionOptions;

                            /**
                             * Encodes the specified SourceEncryptionOptions message. Does not implicitly {@link google.firestore.admin.v1.Database.EncryptionConfig.SourceEncryptionOptions.verify|verify} messages.
                             * @param message SourceEncryptionOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.firestore.admin.v1.Database.EncryptionConfig.ISourceEncryptionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SourceEncryptionOptions message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Database.EncryptionConfig.SourceEncryptionOptions.verify|verify} messages.
                             * @param message SourceEncryptionOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.firestore.admin.v1.Database.EncryptionConfig.ISourceEncryptionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SourceEncryptionOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SourceEncryptionOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Database.EncryptionConfig.SourceEncryptionOptions;

                            /**
                             * Decodes a SourceEncryptionOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SourceEncryptionOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Database.EncryptionConfig.SourceEncryptionOptions;

                            /**
                             * Verifies a SourceEncryptionOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SourceEncryptionOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SourceEncryptionOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Database.EncryptionConfig.SourceEncryptionOptions;

                            /**
                             * Creates a plain object from a SourceEncryptionOptions message. Also converts values to other types if specified.
                             * @param message SourceEncryptionOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.firestore.admin.v1.Database.EncryptionConfig.SourceEncryptionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SourceEncryptionOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SourceEncryptionOptions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a CustomerManagedEncryptionOptions. */
                        interface ICustomerManagedEncryptionOptions {

                            /** CustomerManagedEncryptionOptions kmsKeyName */
                            kmsKeyName?: (string|null);
                        }

                        /** Represents a CustomerManagedEncryptionOptions. */
                        class CustomerManagedEncryptionOptions implements ICustomerManagedEncryptionOptions {

                            /**
                             * Constructs a new CustomerManagedEncryptionOptions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.firestore.admin.v1.Database.EncryptionConfig.ICustomerManagedEncryptionOptions);

                            /** CustomerManagedEncryptionOptions kmsKeyName. */
                            public kmsKeyName: string;

                            /**
                             * Creates a new CustomerManagedEncryptionOptions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CustomerManagedEncryptionOptions instance
                             */
                            public static create(properties?: google.firestore.admin.v1.Database.EncryptionConfig.ICustomerManagedEncryptionOptions): google.firestore.admin.v1.Database.EncryptionConfig.CustomerManagedEncryptionOptions;

                            /**
                             * Encodes the specified CustomerManagedEncryptionOptions message. Does not implicitly {@link google.firestore.admin.v1.Database.EncryptionConfig.CustomerManagedEncryptionOptions.verify|verify} messages.
                             * @param message CustomerManagedEncryptionOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.firestore.admin.v1.Database.EncryptionConfig.ICustomerManagedEncryptionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CustomerManagedEncryptionOptions message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Database.EncryptionConfig.CustomerManagedEncryptionOptions.verify|verify} messages.
                             * @param message CustomerManagedEncryptionOptions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.firestore.admin.v1.Database.EncryptionConfig.ICustomerManagedEncryptionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CustomerManagedEncryptionOptions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CustomerManagedEncryptionOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Database.EncryptionConfig.CustomerManagedEncryptionOptions;

                            /**
                             * Decodes a CustomerManagedEncryptionOptions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CustomerManagedEncryptionOptions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Database.EncryptionConfig.CustomerManagedEncryptionOptions;

                            /**
                             * Verifies a CustomerManagedEncryptionOptions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CustomerManagedEncryptionOptions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CustomerManagedEncryptionOptions
                             */
                            public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Database.EncryptionConfig.CustomerManagedEncryptionOptions;

                            /**
                             * Creates a plain object from a CustomerManagedEncryptionOptions message. Also converts values to other types if specified.
                             * @param message CustomerManagedEncryptionOptions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.firestore.admin.v1.Database.EncryptionConfig.CustomerManagedEncryptionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CustomerManagedEncryptionOptions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for CustomerManagedEncryptionOptions
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** DatabaseEdition enum. */
                    enum DatabaseEdition {
                        DATABASE_EDITION_UNSPECIFIED = 0,
                        STANDARD = 1,
                        ENTERPRISE = 2
                    }

                    /** DataAccessMode enum. */
                    enum DataAccessMode {
                        DATA_ACCESS_MODE_UNSPECIFIED = 0,
                        DATA_ACCESS_MODE_ENABLED = 1,
                        DATA_ACCESS_MODE_DISABLED = 2
                    }
                }

                /** RealtimeUpdatesMode enum. */
                enum RealtimeUpdatesMode {
                    REALTIME_UPDATES_MODE_UNSPECIFIED = 0,
                    REALTIME_UPDATES_MODE_ENABLED = 1,
                    REALTIME_UPDATES_MODE_DISABLED = 2
                }

                /** Properties of a Field. */
                interface IField {

                    /** Field name */
                    name?: (string|null);

                    /** Field indexConfig */
                    indexConfig?: (google.firestore.admin.v1.Field.IIndexConfig|null);

                    /** Field ttlConfig */
                    ttlConfig?: (google.firestore.admin.v1.Field.ITtlConfig|null);
                }

                /** Represents a Field. */
                class Field implements IField {

                    /**
                     * Constructs a new Field.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IField);

                    /** Field name. */
                    public name: string;

                    /** Field indexConfig. */
                    public indexConfig?: (google.firestore.admin.v1.Field.IIndexConfig|null);

                    /** Field ttlConfig. */
                    public ttlConfig?: (google.firestore.admin.v1.Field.ITtlConfig|null);

                    /**
                     * Creates a new Field instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Field instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IField): google.firestore.admin.v1.Field;

                    /**
                     * Encodes the specified Field message. Does not implicitly {@link google.firestore.admin.v1.Field.verify|verify} messages.
                     * @param message Field message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Field message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Field.verify|verify} messages.
                     * @param message Field message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Field message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Field
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Field;

                    /**
                     * Decodes a Field message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Field
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Field;

                    /**
                     * Verifies a Field message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Field message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Field
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Field;

                    /**
                     * Creates a plain object from a Field message. Also converts values to other types if specified.
                     * @param message Field
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Field to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Field
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Field {

                    /** Properties of an IndexConfig. */
                    interface IIndexConfig {

                        /** IndexConfig indexes */
                        indexes?: (google.firestore.admin.v1.IIndex[]|null);

                        /** IndexConfig usesAncestorConfig */
                        usesAncestorConfig?: (boolean|null);

                        /** IndexConfig ancestorField */
                        ancestorField?: (string|null);

                        /** IndexConfig reverting */
                        reverting?: (boolean|null);
                    }

                    /** Represents an IndexConfig. */
                    class IndexConfig implements IIndexConfig {

                        /**
                         * Constructs a new IndexConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.Field.IIndexConfig);

                        /** IndexConfig indexes. */
                        public indexes: google.firestore.admin.v1.IIndex[];

                        /** IndexConfig usesAncestorConfig. */
                        public usesAncestorConfig: boolean;

                        /** IndexConfig ancestorField. */
                        public ancestorField: string;

                        /** IndexConfig reverting. */
                        public reverting: boolean;

                        /**
                         * Creates a new IndexConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IndexConfig instance
                         */
                        public static create(properties?: google.firestore.admin.v1.Field.IIndexConfig): google.firestore.admin.v1.Field.IndexConfig;

                        /**
                         * Encodes the specified IndexConfig message. Does not implicitly {@link google.firestore.admin.v1.Field.IndexConfig.verify|verify} messages.
                         * @param message IndexConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.Field.IIndexConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IndexConfig message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Field.IndexConfig.verify|verify} messages.
                         * @param message IndexConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.Field.IIndexConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IndexConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IndexConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Field.IndexConfig;

                        /**
                         * Decodes an IndexConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IndexConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Field.IndexConfig;

                        /**
                         * Verifies an IndexConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IndexConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IndexConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Field.IndexConfig;

                        /**
                         * Creates a plain object from an IndexConfig message. Also converts values to other types if specified.
                         * @param message IndexConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.Field.IndexConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IndexConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IndexConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TtlConfig. */
                    interface ITtlConfig {

                        /** TtlConfig state */
                        state?: (google.firestore.admin.v1.Field.TtlConfig.State|keyof typeof google.firestore.admin.v1.Field.TtlConfig.State|null);

                        /** TtlConfig expirationOffset */
                        expirationOffset?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a TtlConfig. */
                    class TtlConfig implements ITtlConfig {

                        /**
                         * Constructs a new TtlConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.Field.ITtlConfig);

                        /** TtlConfig state. */
                        public state: (google.firestore.admin.v1.Field.TtlConfig.State|keyof typeof google.firestore.admin.v1.Field.TtlConfig.State);

                        /** TtlConfig expirationOffset. */
                        public expirationOffset?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new TtlConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TtlConfig instance
                         */
                        public static create(properties?: google.firestore.admin.v1.Field.ITtlConfig): google.firestore.admin.v1.Field.TtlConfig;

                        /**
                         * Encodes the specified TtlConfig message. Does not implicitly {@link google.firestore.admin.v1.Field.TtlConfig.verify|verify} messages.
                         * @param message TtlConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.Field.ITtlConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TtlConfig message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Field.TtlConfig.verify|verify} messages.
                         * @param message TtlConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.Field.ITtlConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TtlConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TtlConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Field.TtlConfig;

                        /**
                         * Decodes a TtlConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TtlConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Field.TtlConfig;

                        /**
                         * Verifies a TtlConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TtlConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TtlConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Field.TtlConfig;

                        /**
                         * Creates a plain object from a TtlConfig message. Also converts values to other types if specified.
                         * @param message TtlConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.Field.TtlConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TtlConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TtlConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TtlConfig {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            CREATING = 1,
                            ACTIVE = 2,
                            NEEDS_REPAIR = 3
                        }
                    }
                }

                /** Properties of an Index. */
                interface IIndex {

                    /** Index name */
                    name?: (string|null);

                    /** Index queryScope */
                    queryScope?: (google.firestore.admin.v1.Index.QueryScope|keyof typeof google.firestore.admin.v1.Index.QueryScope|null);

                    /** Index apiScope */
                    apiScope?: (google.firestore.admin.v1.Index.ApiScope|keyof typeof google.firestore.admin.v1.Index.ApiScope|null);

                    /** Index fields */
                    fields?: (google.firestore.admin.v1.Index.IIndexField[]|null);

                    /** Index state */
                    state?: (google.firestore.admin.v1.Index.State|keyof typeof google.firestore.admin.v1.Index.State|null);

                    /** Index density */
                    density?: (google.firestore.admin.v1.Index.Density|keyof typeof google.firestore.admin.v1.Index.Density|null);

                    /** Index multikey */
                    multikey?: (boolean|null);

                    /** Index shardCount */
                    shardCount?: (number|null);

                    /** Index unique */
                    unique?: (boolean|null);

                    /** Index searchIndexOptions */
                    searchIndexOptions?: (google.firestore.admin.v1.Index.ISearchIndexOptions|null);
                }

                /** Represents an Index. */
                class Index implements IIndex {

                    /**
                     * Constructs a new Index.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IIndex);

                    /** Index name. */
                    public name: string;

                    /** Index queryScope. */
                    public queryScope: (google.firestore.admin.v1.Index.QueryScope|keyof typeof google.firestore.admin.v1.Index.QueryScope);

                    /** Index apiScope. */
                    public apiScope: (google.firestore.admin.v1.Index.ApiScope|keyof typeof google.firestore.admin.v1.Index.ApiScope);

                    /** Index fields. */
                    public fields: google.firestore.admin.v1.Index.IIndexField[];

                    /** Index state. */
                    public state: (google.firestore.admin.v1.Index.State|keyof typeof google.firestore.admin.v1.Index.State);

                    /** Index density. */
                    public density: (google.firestore.admin.v1.Index.Density|keyof typeof google.firestore.admin.v1.Index.Density);

                    /** Index multikey. */
                    public multikey: boolean;

                    /** Index shardCount. */
                    public shardCount: number;

                    /** Index unique. */
                    public unique: boolean;

                    /** Index searchIndexOptions. */
                    public searchIndexOptions?: (google.firestore.admin.v1.Index.ISearchIndexOptions|null);

                    /**
                     * Creates a new Index instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Index instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IIndex): google.firestore.admin.v1.Index;

                    /**
                     * Encodes the specified Index message. Does not implicitly {@link google.firestore.admin.v1.Index.verify|verify} messages.
                     * @param message Index message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IIndex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Index message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Index.verify|verify} messages.
                     * @param message Index message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IIndex, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Index message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Index
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Index;

                    /**
                     * Decodes an Index message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Index
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Index;

                    /**
                     * Verifies an Index message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Index message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Index
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Index;

                    /**
                     * Creates a plain object from an Index message. Also converts values to other types if specified.
                     * @param message Index
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.Index, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Index to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Index
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Index {

                    /** QueryScope enum. */
                    enum QueryScope {
                        QUERY_SCOPE_UNSPECIFIED = 0,
                        COLLECTION = 1,
                        COLLECTION_GROUP = 2,
                        COLLECTION_RECURSIVE = 3
                    }

                    /** ApiScope enum. */
                    enum ApiScope {
                        ANY_API = 0,
                        DATASTORE_MODE_API = 1,
                        MONGODB_COMPATIBLE_API = 2
                    }

                    /** Properties of an IndexField. */
                    interface IIndexField {

                        /** IndexField fieldPath */
                        fieldPath?: (string|null);

                        /** IndexField order */
                        order?: (google.firestore.admin.v1.Index.IndexField.Order|keyof typeof google.firestore.admin.v1.Index.IndexField.Order|null);

                        /** IndexField arrayConfig */
                        arrayConfig?: (google.firestore.admin.v1.Index.IndexField.ArrayConfig|keyof typeof google.firestore.admin.v1.Index.IndexField.ArrayConfig|null);

                        /** IndexField vectorConfig */
                        vectorConfig?: (google.firestore.admin.v1.Index.IndexField.IVectorConfig|null);

                        /** IndexField searchConfig */
                        searchConfig?: (google.firestore.admin.v1.Index.IndexField.ISearchConfig|null);
                    }

                    /** Represents an IndexField. */
                    class IndexField implements IIndexField {

                        /**
                         * Constructs a new IndexField.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.Index.IIndexField);

                        /** IndexField fieldPath. */
                        public fieldPath: string;

                        /** IndexField order. */
                        public order?: (google.firestore.admin.v1.Index.IndexField.Order|keyof typeof google.firestore.admin.v1.Index.IndexField.Order|null);

                        /** IndexField arrayConfig. */
                        public arrayConfig?: (google.firestore.admin.v1.Index.IndexField.ArrayConfig|keyof typeof google.firestore.admin.v1.Index.IndexField.ArrayConfig|null);

                        /** IndexField vectorConfig. */
                        public vectorConfig?: (google.firestore.admin.v1.Index.IndexField.IVectorConfig|null);

                        /** IndexField searchConfig. */
                        public searchConfig?: (google.firestore.admin.v1.Index.IndexField.ISearchConfig|null);

                        /** IndexField valueMode. */
                        public valueMode?: ("order"|"arrayConfig"|"vectorConfig"|"searchConfig");

                        /**
                         * Creates a new IndexField instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IndexField instance
                         */
                        public static create(properties?: google.firestore.admin.v1.Index.IIndexField): google.firestore.admin.v1.Index.IndexField;

                        /**
                         * Encodes the specified IndexField message. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.verify|verify} messages.
                         * @param message IndexField message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.Index.IIndexField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IndexField message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.verify|verify} messages.
                         * @param message IndexField message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.Index.IIndexField, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IndexField message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IndexField
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Index.IndexField;

                        /**
                         * Decodes an IndexField message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IndexField
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Index.IndexField;

                        /**
                         * Verifies an IndexField message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IndexField message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IndexField
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Index.IndexField;

                        /**
                         * Creates a plain object from an IndexField message. Also converts values to other types if specified.
                         * @param message IndexField
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.Index.IndexField, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IndexField to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IndexField
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace IndexField {

                        /** Order enum. */
                        enum Order {
                            ORDER_UNSPECIFIED = 0,
                            ASCENDING = 1,
                            DESCENDING = 2
                        }

                        /** ArrayConfig enum. */
                        enum ArrayConfig {
                            ARRAY_CONFIG_UNSPECIFIED = 0,
                            CONTAINS = 1
                        }

                        /** Properties of a VectorConfig. */
                        interface IVectorConfig {

                            /** VectorConfig dimension */
                            dimension?: (number|null);

                            /** VectorConfig flat */
                            flat?: (google.firestore.admin.v1.Index.IndexField.VectorConfig.IFlatIndex|null);
                        }

                        /** Represents a VectorConfig. */
                        class VectorConfig implements IVectorConfig {

                            /**
                             * Constructs a new VectorConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.firestore.admin.v1.Index.IndexField.IVectorConfig);

                            /** VectorConfig dimension. */
                            public dimension: number;

                            /** VectorConfig flat. */
                            public flat?: (google.firestore.admin.v1.Index.IndexField.VectorConfig.IFlatIndex|null);

                            /** VectorConfig type. */
                            public type?: "flat";

                            /**
                             * Creates a new VectorConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns VectorConfig instance
                             */
                            public static create(properties?: google.firestore.admin.v1.Index.IndexField.IVectorConfig): google.firestore.admin.v1.Index.IndexField.VectorConfig;

                            /**
                             * Encodes the specified VectorConfig message. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.VectorConfig.verify|verify} messages.
                             * @param message VectorConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.firestore.admin.v1.Index.IndexField.IVectorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified VectorConfig message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.VectorConfig.verify|verify} messages.
                             * @param message VectorConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.firestore.admin.v1.Index.IndexField.IVectorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a VectorConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns VectorConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Index.IndexField.VectorConfig;

                            /**
                             * Decodes a VectorConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns VectorConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Index.IndexField.VectorConfig;

                            /**
                             * Verifies a VectorConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a VectorConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns VectorConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Index.IndexField.VectorConfig;

                            /**
                             * Creates a plain object from a VectorConfig message. Also converts values to other types if specified.
                             * @param message VectorConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.firestore.admin.v1.Index.IndexField.VectorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this VectorConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for VectorConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace VectorConfig {

                            /** Properties of a FlatIndex. */
                            interface IFlatIndex {
                            }

                            /** Represents a FlatIndex. */
                            class FlatIndex implements IFlatIndex {

                                /**
                                 * Constructs a new FlatIndex.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.firestore.admin.v1.Index.IndexField.VectorConfig.IFlatIndex);

                                /**
                                 * Creates a new FlatIndex instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns FlatIndex instance
                                 */
                                public static create(properties?: google.firestore.admin.v1.Index.IndexField.VectorConfig.IFlatIndex): google.firestore.admin.v1.Index.IndexField.VectorConfig.FlatIndex;

                                /**
                                 * Encodes the specified FlatIndex message. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.VectorConfig.FlatIndex.verify|verify} messages.
                                 * @param message FlatIndex message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.firestore.admin.v1.Index.IndexField.VectorConfig.IFlatIndex, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified FlatIndex message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.VectorConfig.FlatIndex.verify|verify} messages.
                                 * @param message FlatIndex message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.firestore.admin.v1.Index.IndexField.VectorConfig.IFlatIndex, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a FlatIndex message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns FlatIndex
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Index.IndexField.VectorConfig.FlatIndex;

                                /**
                                 * Decodes a FlatIndex message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns FlatIndex
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Index.IndexField.VectorConfig.FlatIndex;

                                /**
                                 * Verifies a FlatIndex message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a FlatIndex message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns FlatIndex
                                 */
                                public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Index.IndexField.VectorConfig.FlatIndex;

                                /**
                                 * Creates a plain object from a FlatIndex message. Also converts values to other types if specified.
                                 * @param message FlatIndex
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.firestore.admin.v1.Index.IndexField.VectorConfig.FlatIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this FlatIndex to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for FlatIndex
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }

                        /** Properties of a SearchConfig. */
                        interface ISearchConfig {

                            /** SearchConfig textSpec */
                            textSpec?: (google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextSpec|null);

                            /** SearchConfig geoSpec */
                            geoSpec?: (google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchGeoSpec|null);
                        }

                        /** Represents a SearchConfig. */
                        class SearchConfig implements ISearchConfig {

                            /**
                             * Constructs a new SearchConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.firestore.admin.v1.Index.IndexField.ISearchConfig);

                            /** SearchConfig textSpec. */
                            public textSpec?: (google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextSpec|null);

                            /** SearchConfig geoSpec. */
                            public geoSpec?: (google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchGeoSpec|null);

                            /**
                             * Creates a new SearchConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SearchConfig instance
                             */
                            public static create(properties?: google.firestore.admin.v1.Index.IndexField.ISearchConfig): google.firestore.admin.v1.Index.IndexField.SearchConfig;

                            /**
                             * Encodes the specified SearchConfig message. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.SearchConfig.verify|verify} messages.
                             * @param message SearchConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.firestore.admin.v1.Index.IndexField.ISearchConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SearchConfig message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.SearchConfig.verify|verify} messages.
                             * @param message SearchConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.firestore.admin.v1.Index.IndexField.ISearchConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SearchConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SearchConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Index.IndexField.SearchConfig;

                            /**
                             * Decodes a SearchConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SearchConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Index.IndexField.SearchConfig;

                            /**
                             * Verifies a SearchConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SearchConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SearchConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Index.IndexField.SearchConfig;

                            /**
                             * Creates a plain object from a SearchConfig message. Also converts values to other types if specified.
                             * @param message SearchConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.firestore.admin.v1.Index.IndexField.SearchConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SearchConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SearchConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace SearchConfig {

                            /** TextIndexType enum. */
                            enum TextIndexType {
                                TEXT_INDEX_TYPE_UNSPECIFIED = 0,
                                TOKENIZED = 1
                            }

                            /** TextMatchType enum. */
                            enum TextMatchType {
                                TEXT_MATCH_TYPE_UNSPECIFIED = 0,
                                MATCH_GLOBALLY = 1
                            }

                            /** Properties of a SearchTextIndexSpec. */
                            interface ISearchTextIndexSpec {

                                /** SearchTextIndexSpec indexType */
                                indexType?: (google.firestore.admin.v1.Index.IndexField.SearchConfig.TextIndexType|keyof typeof google.firestore.admin.v1.Index.IndexField.SearchConfig.TextIndexType|null);

                                /** SearchTextIndexSpec matchType */
                                matchType?: (google.firestore.admin.v1.Index.IndexField.SearchConfig.TextMatchType|keyof typeof google.firestore.admin.v1.Index.IndexField.SearchConfig.TextMatchType|null);
                            }

                            /** Represents a SearchTextIndexSpec. */
                            class SearchTextIndexSpec implements ISearchTextIndexSpec {

                                /**
                                 * Constructs a new SearchTextIndexSpec.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextIndexSpec);

                                /** SearchTextIndexSpec indexType. */
                                public indexType: (google.firestore.admin.v1.Index.IndexField.SearchConfig.TextIndexType|keyof typeof google.firestore.admin.v1.Index.IndexField.SearchConfig.TextIndexType);

                                /** SearchTextIndexSpec matchType. */
                                public matchType: (google.firestore.admin.v1.Index.IndexField.SearchConfig.TextMatchType|keyof typeof google.firestore.admin.v1.Index.IndexField.SearchConfig.TextMatchType);

                                /**
                                 * Creates a new SearchTextIndexSpec instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns SearchTextIndexSpec instance
                                 */
                                public static create(properties?: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextIndexSpec): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextIndexSpec;

                                /**
                                 * Encodes the specified SearchTextIndexSpec message. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextIndexSpec.verify|verify} messages.
                                 * @param message SearchTextIndexSpec message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextIndexSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified SearchTextIndexSpec message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextIndexSpec.verify|verify} messages.
                                 * @param message SearchTextIndexSpec message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextIndexSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a SearchTextIndexSpec message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns SearchTextIndexSpec
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextIndexSpec;

                                /**
                                 * Decodes a SearchTextIndexSpec message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns SearchTextIndexSpec
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextIndexSpec;

                                /**
                                 * Verifies a SearchTextIndexSpec message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a SearchTextIndexSpec message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns SearchTextIndexSpec
                                 */
                                public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextIndexSpec;

                                /**
                                 * Creates a plain object from a SearchTextIndexSpec message. Also converts values to other types if specified.
                                 * @param message SearchTextIndexSpec
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextIndexSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this SearchTextIndexSpec to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for SearchTextIndexSpec
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a SearchTextSpec. */
                            interface ISearchTextSpec {

                                /** SearchTextSpec indexSpecs */
                                indexSpecs?: (google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextIndexSpec[]|null);
                            }

                            /** Represents a SearchTextSpec. */
                            class SearchTextSpec implements ISearchTextSpec {

                                /**
                                 * Constructs a new SearchTextSpec.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextSpec);

                                /** SearchTextSpec indexSpecs. */
                                public indexSpecs: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextIndexSpec[];

                                /**
                                 * Creates a new SearchTextSpec instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns SearchTextSpec instance
                                 */
                                public static create(properties?: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextSpec): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextSpec;

                                /**
                                 * Encodes the specified SearchTextSpec message. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextSpec.verify|verify} messages.
                                 * @param message SearchTextSpec message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified SearchTextSpec message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextSpec.verify|verify} messages.
                                 * @param message SearchTextSpec message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchTextSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a SearchTextSpec message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns SearchTextSpec
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextSpec;

                                /**
                                 * Decodes a SearchTextSpec message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns SearchTextSpec
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextSpec;

                                /**
                                 * Verifies a SearchTextSpec message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a SearchTextSpec message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns SearchTextSpec
                                 */
                                public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextSpec;

                                /**
                                 * Creates a plain object from a SearchTextSpec message. Also converts values to other types if specified.
                                 * @param message SearchTextSpec
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchTextSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this SearchTextSpec to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for SearchTextSpec
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a SearchGeoSpec. */
                            interface ISearchGeoSpec {

                                /** SearchGeoSpec geoJsonIndexingDisabled */
                                geoJsonIndexingDisabled?: (boolean|null);
                            }

                            /** Represents a SearchGeoSpec. */
                            class SearchGeoSpec implements ISearchGeoSpec {

                                /**
                                 * Constructs a new SearchGeoSpec.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchGeoSpec);

                                /** SearchGeoSpec geoJsonIndexingDisabled. */
                                public geoJsonIndexingDisabled: boolean;

                                /**
                                 * Creates a new SearchGeoSpec instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns SearchGeoSpec instance
                                 */
                                public static create(properties?: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchGeoSpec): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchGeoSpec;

                                /**
                                 * Encodes the specified SearchGeoSpec message. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchGeoSpec.verify|verify} messages.
                                 * @param message SearchGeoSpec message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchGeoSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified SearchGeoSpec message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchGeoSpec.verify|verify} messages.
                                 * @param message SearchGeoSpec message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.firestore.admin.v1.Index.IndexField.SearchConfig.ISearchGeoSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a SearchGeoSpec message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns SearchGeoSpec
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchGeoSpec;

                                /**
                                 * Decodes a SearchGeoSpec message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns SearchGeoSpec
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchGeoSpec;

                                /**
                                 * Verifies a SearchGeoSpec message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a SearchGeoSpec message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns SearchGeoSpec
                                 */
                                public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchGeoSpec;

                                /**
                                 * Creates a plain object from a SearchGeoSpec message. Also converts values to other types if specified.
                                 * @param message SearchGeoSpec
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.firestore.admin.v1.Index.IndexField.SearchConfig.SearchGeoSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this SearchGeoSpec to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for SearchGeoSpec
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        READY = 2,
                        NEEDS_REPAIR = 3
                    }

                    /** Density enum. */
                    enum Density {
                        DENSITY_UNSPECIFIED = 0,
                        SPARSE_ALL = 1,
                        SPARSE_ANY = 2,
                        DENSE = 3
                    }

                    /** Properties of a SearchIndexOptions. */
                    interface ISearchIndexOptions {

                        /** SearchIndexOptions textLanguage */
                        textLanguage?: (string|null);

                        /** SearchIndexOptions textLanguageOverrideFieldPath */
                        textLanguageOverrideFieldPath?: (string|null);
                    }

                    /** Represents a SearchIndexOptions. */
                    class SearchIndexOptions implements ISearchIndexOptions {

                        /**
                         * Constructs a new SearchIndexOptions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.Index.ISearchIndexOptions);

                        /** SearchIndexOptions textLanguage. */
                        public textLanguage: string;

                        /** SearchIndexOptions textLanguageOverrideFieldPath. */
                        public textLanguageOverrideFieldPath: string;

                        /**
                         * Creates a new SearchIndexOptions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SearchIndexOptions instance
                         */
                        public static create(properties?: google.firestore.admin.v1.Index.ISearchIndexOptions): google.firestore.admin.v1.Index.SearchIndexOptions;

                        /**
                         * Encodes the specified SearchIndexOptions message. Does not implicitly {@link google.firestore.admin.v1.Index.SearchIndexOptions.verify|verify} messages.
                         * @param message SearchIndexOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.Index.ISearchIndexOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SearchIndexOptions message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Index.SearchIndexOptions.verify|verify} messages.
                         * @param message SearchIndexOptions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.Index.ISearchIndexOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SearchIndexOptions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SearchIndexOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Index.SearchIndexOptions;

                        /**
                         * Decodes a SearchIndexOptions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SearchIndexOptions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Index.SearchIndexOptions;

                        /**
                         * Verifies a SearchIndexOptions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SearchIndexOptions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SearchIndexOptions
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Index.SearchIndexOptions;

                        /**
                         * Creates a plain object from a SearchIndexOptions message. Also converts values to other types if specified.
                         * @param message SearchIndexOptions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.Index.SearchIndexOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SearchIndexOptions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SearchIndexOptions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Represents a FirestoreAdmin */
                class FirestoreAdmin extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new FirestoreAdmin service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new FirestoreAdmin service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FirestoreAdmin;

                    /**
                     * Calls CreateIndex.
                     * @param request CreateIndexRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createIndex(request: google.firestore.admin.v1.ICreateIndexRequest, callback: google.firestore.admin.v1.FirestoreAdmin.CreateIndexCallback): void;

                    /**
                     * Calls CreateIndex.
                     * @param request CreateIndexRequest message or plain object
                     * @returns Promise
                     */
                    public createIndex(request: google.firestore.admin.v1.ICreateIndexRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListIndexes.
                     * @param request ListIndexesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListIndexesResponse
                     */
                    public listIndexes(request: google.firestore.admin.v1.IListIndexesRequest, callback: google.firestore.admin.v1.FirestoreAdmin.ListIndexesCallback): void;

                    /**
                     * Calls ListIndexes.
                     * @param request ListIndexesRequest message or plain object
                     * @returns Promise
                     */
                    public listIndexes(request: google.firestore.admin.v1.IListIndexesRequest): Promise<google.firestore.admin.v1.ListIndexesResponse>;

                    /**
                     * Calls GetIndex.
                     * @param request GetIndexRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Index
                     */
                    public getIndex(request: google.firestore.admin.v1.IGetIndexRequest, callback: google.firestore.admin.v1.FirestoreAdmin.GetIndexCallback): void;

                    /**
                     * Calls GetIndex.
                     * @param request GetIndexRequest message or plain object
                     * @returns Promise
                     */
                    public getIndex(request: google.firestore.admin.v1.IGetIndexRequest): Promise<google.firestore.admin.v1.Index>;

                    /**
                     * Calls DeleteIndex.
                     * @param request DeleteIndexRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteIndex(request: google.firestore.admin.v1.IDeleteIndexRequest, callback: google.firestore.admin.v1.FirestoreAdmin.DeleteIndexCallback): void;

                    /**
                     * Calls DeleteIndex.
                     * @param request DeleteIndexRequest message or plain object
                     * @returns Promise
                     */
                    public deleteIndex(request: google.firestore.admin.v1.IDeleteIndexRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetField.
                     * @param request GetFieldRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Field
                     */
                    public getField(request: google.firestore.admin.v1.IGetFieldRequest, callback: google.firestore.admin.v1.FirestoreAdmin.GetFieldCallback): void;

                    /**
                     * Calls GetField.
                     * @param request GetFieldRequest message or plain object
                     * @returns Promise
                     */
                    public getField(request: google.firestore.admin.v1.IGetFieldRequest): Promise<google.firestore.admin.v1.Field>;

                    /**
                     * Calls UpdateField.
                     * @param request UpdateFieldRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateField(request: google.firestore.admin.v1.IUpdateFieldRequest, callback: google.firestore.admin.v1.FirestoreAdmin.UpdateFieldCallback): void;

                    /**
                     * Calls UpdateField.
                     * @param request UpdateFieldRequest message or plain object
                     * @returns Promise
                     */
                    public updateField(request: google.firestore.admin.v1.IUpdateFieldRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListFields.
                     * @param request ListFieldsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFieldsResponse
                     */
                    public listFields(request: google.firestore.admin.v1.IListFieldsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.ListFieldsCallback): void;

                    /**
                     * Calls ListFields.
                     * @param request ListFieldsRequest message or plain object
                     * @returns Promise
                     */
                    public listFields(request: google.firestore.admin.v1.IListFieldsRequest): Promise<google.firestore.admin.v1.ListFieldsResponse>;

                    /**
                     * Calls ExportDocuments.
                     * @param request ExportDocumentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportDocuments(request: google.firestore.admin.v1.IExportDocumentsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.ExportDocumentsCallback): void;

                    /**
                     * Calls ExportDocuments.
                     * @param request ExportDocumentsRequest message or plain object
                     * @returns Promise
                     */
                    public exportDocuments(request: google.firestore.admin.v1.IExportDocumentsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ImportDocuments.
                     * @param request ImportDocumentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public importDocuments(request: google.firestore.admin.v1.IImportDocumentsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.ImportDocumentsCallback): void;

                    /**
                     * Calls ImportDocuments.
                     * @param request ImportDocumentsRequest message or plain object
                     * @returns Promise
                     */
                    public importDocuments(request: google.firestore.admin.v1.IImportDocumentsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls BulkDeleteDocuments.
                     * @param request BulkDeleteDocumentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public bulkDeleteDocuments(request: google.firestore.admin.v1.IBulkDeleteDocumentsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.BulkDeleteDocumentsCallback): void;

                    /**
                     * Calls BulkDeleteDocuments.
                     * @param request BulkDeleteDocumentsRequest message or plain object
                     * @returns Promise
                     */
                    public bulkDeleteDocuments(request: google.firestore.admin.v1.IBulkDeleteDocumentsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateDatabase.
                     * @param request CreateDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createDatabase(request: google.firestore.admin.v1.ICreateDatabaseRequest, callback: google.firestore.admin.v1.FirestoreAdmin.CreateDatabaseCallback): void;

                    /**
                     * Calls CreateDatabase.
                     * @param request CreateDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public createDatabase(request: google.firestore.admin.v1.ICreateDatabaseRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GetDatabase.
                     * @param request GetDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Database
                     */
                    public getDatabase(request: google.firestore.admin.v1.IGetDatabaseRequest, callback: google.firestore.admin.v1.FirestoreAdmin.GetDatabaseCallback): void;

                    /**
                     * Calls GetDatabase.
                     * @param request GetDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public getDatabase(request: google.firestore.admin.v1.IGetDatabaseRequest): Promise<google.firestore.admin.v1.Database>;

                    /**
                     * Calls ListDatabases.
                     * @param request ListDatabasesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListDatabasesResponse
                     */
                    public listDatabases(request: google.firestore.admin.v1.IListDatabasesRequest, callback: google.firestore.admin.v1.FirestoreAdmin.ListDatabasesCallback): void;

                    /**
                     * Calls ListDatabases.
                     * @param request ListDatabasesRequest message or plain object
                     * @returns Promise
                     */
                    public listDatabases(request: google.firestore.admin.v1.IListDatabasesRequest): Promise<google.firestore.admin.v1.ListDatabasesResponse>;

                    /**
                     * Calls UpdateDatabase.
                     * @param request UpdateDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateDatabase(request: google.firestore.admin.v1.IUpdateDatabaseRequest, callback: google.firestore.admin.v1.FirestoreAdmin.UpdateDatabaseCallback): void;

                    /**
                     * Calls UpdateDatabase.
                     * @param request UpdateDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public updateDatabase(request: google.firestore.admin.v1.IUpdateDatabaseRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteDatabase.
                     * @param request DeleteDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteDatabase(request: google.firestore.admin.v1.IDeleteDatabaseRequest, callback: google.firestore.admin.v1.FirestoreAdmin.DeleteDatabaseCallback): void;

                    /**
                     * Calls DeleteDatabase.
                     * @param request DeleteDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public deleteDatabase(request: google.firestore.admin.v1.IDeleteDatabaseRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateUserCreds.
                     * @param request CreateUserCredsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserCreds
                     */
                    public createUserCreds(request: google.firestore.admin.v1.ICreateUserCredsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.CreateUserCredsCallback): void;

                    /**
                     * Calls CreateUserCreds.
                     * @param request CreateUserCredsRequest message or plain object
                     * @returns Promise
                     */
                    public createUserCreds(request: google.firestore.admin.v1.ICreateUserCredsRequest): Promise<google.firestore.admin.v1.UserCreds>;

                    /**
                     * Calls GetUserCreds.
                     * @param request GetUserCredsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserCreds
                     */
                    public getUserCreds(request: google.firestore.admin.v1.IGetUserCredsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.GetUserCredsCallback): void;

                    /**
                     * Calls GetUserCreds.
                     * @param request GetUserCredsRequest message or plain object
                     * @returns Promise
                     */
                    public getUserCreds(request: google.firestore.admin.v1.IGetUserCredsRequest): Promise<google.firestore.admin.v1.UserCreds>;

                    /**
                     * Calls ListUserCreds.
                     * @param request ListUserCredsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListUserCredsResponse
                     */
                    public listUserCreds(request: google.firestore.admin.v1.IListUserCredsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.ListUserCredsCallback): void;

                    /**
                     * Calls ListUserCreds.
                     * @param request ListUserCredsRequest message or plain object
                     * @returns Promise
                     */
                    public listUserCreds(request: google.firestore.admin.v1.IListUserCredsRequest): Promise<google.firestore.admin.v1.ListUserCredsResponse>;

                    /**
                     * Calls EnableUserCreds.
                     * @param request EnableUserCredsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserCreds
                     */
                    public enableUserCreds(request: google.firestore.admin.v1.IEnableUserCredsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.EnableUserCredsCallback): void;

                    /**
                     * Calls EnableUserCreds.
                     * @param request EnableUserCredsRequest message or plain object
                     * @returns Promise
                     */
                    public enableUserCreds(request: google.firestore.admin.v1.IEnableUserCredsRequest): Promise<google.firestore.admin.v1.UserCreds>;

                    /**
                     * Calls DisableUserCreds.
                     * @param request DisableUserCredsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserCreds
                     */
                    public disableUserCreds(request: google.firestore.admin.v1.IDisableUserCredsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.DisableUserCredsCallback): void;

                    /**
                     * Calls DisableUserCreds.
                     * @param request DisableUserCredsRequest message or plain object
                     * @returns Promise
                     */
                    public disableUserCreds(request: google.firestore.admin.v1.IDisableUserCredsRequest): Promise<google.firestore.admin.v1.UserCreds>;

                    /**
                     * Calls ResetUserPassword.
                     * @param request ResetUserPasswordRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and UserCreds
                     */
                    public resetUserPassword(request: google.firestore.admin.v1.IResetUserPasswordRequest, callback: google.firestore.admin.v1.FirestoreAdmin.ResetUserPasswordCallback): void;

                    /**
                     * Calls ResetUserPassword.
                     * @param request ResetUserPasswordRequest message or plain object
                     * @returns Promise
                     */
                    public resetUserPassword(request: google.firestore.admin.v1.IResetUserPasswordRequest): Promise<google.firestore.admin.v1.UserCreds>;

                    /**
                     * Calls DeleteUserCreds.
                     * @param request DeleteUserCredsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteUserCreds(request: google.firestore.admin.v1.IDeleteUserCredsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.DeleteUserCredsCallback): void;

                    /**
                     * Calls DeleteUserCreds.
                     * @param request DeleteUserCredsRequest message or plain object
                     * @returns Promise
                     */
                    public deleteUserCreds(request: google.firestore.admin.v1.IDeleteUserCredsRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Backup
                     */
                    public getBackup(request: google.firestore.admin.v1.IGetBackupRequest, callback: google.firestore.admin.v1.FirestoreAdmin.GetBackupCallback): void;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @returns Promise
                     */
                    public getBackup(request: google.firestore.admin.v1.IGetBackupRequest): Promise<google.firestore.admin.v1.Backup>;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupsResponse
                     */
                    public listBackups(request: google.firestore.admin.v1.IListBackupsRequest, callback: google.firestore.admin.v1.FirestoreAdmin.ListBackupsCallback): void;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @returns Promise
                     */
                    public listBackups(request: google.firestore.admin.v1.IListBackupsRequest): Promise<google.firestore.admin.v1.ListBackupsResponse>;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteBackup(request: google.firestore.admin.v1.IDeleteBackupRequest, callback: google.firestore.admin.v1.FirestoreAdmin.DeleteBackupCallback): void;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackup(request: google.firestore.admin.v1.IDeleteBackupRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls RestoreDatabase.
                     * @param request RestoreDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public restoreDatabase(request: google.firestore.admin.v1.IRestoreDatabaseRequest, callback: google.firestore.admin.v1.FirestoreAdmin.RestoreDatabaseCallback): void;

                    /**
                     * Calls RestoreDatabase.
                     * @param request RestoreDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public restoreDatabase(request: google.firestore.admin.v1.IRestoreDatabaseRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateBackupSchedule.
                     * @param request CreateBackupScheduleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BackupSchedule
                     */
                    public createBackupSchedule(request: google.firestore.admin.v1.ICreateBackupScheduleRequest, callback: google.firestore.admin.v1.FirestoreAdmin.CreateBackupScheduleCallback): void;

                    /**
                     * Calls CreateBackupSchedule.
                     * @param request CreateBackupScheduleRequest message or plain object
                     * @returns Promise
                     */
                    public createBackupSchedule(request: google.firestore.admin.v1.ICreateBackupScheduleRequest): Promise<google.firestore.admin.v1.BackupSchedule>;

                    /**
                     * Calls GetBackupSchedule.
                     * @param request GetBackupScheduleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BackupSchedule
                     */
                    public getBackupSchedule(request: google.firestore.admin.v1.IGetBackupScheduleRequest, callback: google.firestore.admin.v1.FirestoreAdmin.GetBackupScheduleCallback): void;

                    /**
                     * Calls GetBackupSchedule.
                     * @param request GetBackupScheduleRequest message or plain object
                     * @returns Promise
                     */
                    public getBackupSchedule(request: google.firestore.admin.v1.IGetBackupScheduleRequest): Promise<google.firestore.admin.v1.BackupSchedule>;

                    /**
                     * Calls ListBackupSchedules.
                     * @param request ListBackupSchedulesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupSchedulesResponse
                     */
                    public listBackupSchedules(request: google.firestore.admin.v1.IListBackupSchedulesRequest, callback: google.firestore.admin.v1.FirestoreAdmin.ListBackupSchedulesCallback): void;

                    /**
                     * Calls ListBackupSchedules.
                     * @param request ListBackupSchedulesRequest message or plain object
                     * @returns Promise
                     */
                    public listBackupSchedules(request: google.firestore.admin.v1.IListBackupSchedulesRequest): Promise<google.firestore.admin.v1.ListBackupSchedulesResponse>;

                    /**
                     * Calls UpdateBackupSchedule.
                     * @param request UpdateBackupScheduleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BackupSchedule
                     */
                    public updateBackupSchedule(request: google.firestore.admin.v1.IUpdateBackupScheduleRequest, callback: google.firestore.admin.v1.FirestoreAdmin.UpdateBackupScheduleCallback): void;

                    /**
                     * Calls UpdateBackupSchedule.
                     * @param request UpdateBackupScheduleRequest message or plain object
                     * @returns Promise
                     */
                    public updateBackupSchedule(request: google.firestore.admin.v1.IUpdateBackupScheduleRequest): Promise<google.firestore.admin.v1.BackupSchedule>;

                    /**
                     * Calls DeleteBackupSchedule.
                     * @param request DeleteBackupScheduleRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteBackupSchedule(request: google.firestore.admin.v1.IDeleteBackupScheduleRequest, callback: google.firestore.admin.v1.FirestoreAdmin.DeleteBackupScheduleCallback): void;

                    /**
                     * Calls DeleteBackupSchedule.
                     * @param request DeleteBackupScheduleRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackupSchedule(request: google.firestore.admin.v1.IDeleteBackupScheduleRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CloneDatabase.
                     * @param request CloneDatabaseRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public cloneDatabase(request: google.firestore.admin.v1.ICloneDatabaseRequest, callback: google.firestore.admin.v1.FirestoreAdmin.CloneDatabaseCallback): void;

                    /**
                     * Calls CloneDatabase.
                     * @param request CloneDatabaseRequest message or plain object
                     * @returns Promise
                     */
                    public cloneDatabase(request: google.firestore.admin.v1.ICloneDatabaseRequest): Promise<google.longrunning.Operation>;
                }

                namespace FirestoreAdmin {

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|createIndex}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateIndexCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|listIndexes}.
                     * @param error Error, if any
                     * @param [response] ListIndexesResponse
                     */
                    type ListIndexesCallback = (error: (Error|null), response?: google.firestore.admin.v1.ListIndexesResponse) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|getIndex}.
                     * @param error Error, if any
                     * @param [response] Index
                     */
                    type GetIndexCallback = (error: (Error|null), response?: google.firestore.admin.v1.Index) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|deleteIndex}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteIndexCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|getField}.
                     * @param error Error, if any
                     * @param [response] Field
                     */
                    type GetFieldCallback = (error: (Error|null), response?: google.firestore.admin.v1.Field) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|updateField}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateFieldCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|listFields}.
                     * @param error Error, if any
                     * @param [response] ListFieldsResponse
                     */
                    type ListFieldsCallback = (error: (Error|null), response?: google.firestore.admin.v1.ListFieldsResponse) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|exportDocuments}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportDocumentsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|importDocuments}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ImportDocumentsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|bulkDeleteDocuments}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type BulkDeleteDocumentsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|createDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|getDatabase}.
                     * @param error Error, if any
                     * @param [response] Database
                     */
                    type GetDatabaseCallback = (error: (Error|null), response?: google.firestore.admin.v1.Database) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|listDatabases}.
                     * @param error Error, if any
                     * @param [response] ListDatabasesResponse
                     */
                    type ListDatabasesCallback = (error: (Error|null), response?: google.firestore.admin.v1.ListDatabasesResponse) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|updateDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|deleteDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|createUserCreds}.
                     * @param error Error, if any
                     * @param [response] UserCreds
                     */
                    type CreateUserCredsCallback = (error: (Error|null), response?: google.firestore.admin.v1.UserCreds) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|getUserCreds}.
                     * @param error Error, if any
                     * @param [response] UserCreds
                     */
                    type GetUserCredsCallback = (error: (Error|null), response?: google.firestore.admin.v1.UserCreds) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|listUserCreds}.
                     * @param error Error, if any
                     * @param [response] ListUserCredsResponse
                     */
                    type ListUserCredsCallback = (error: (Error|null), response?: google.firestore.admin.v1.ListUserCredsResponse) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|enableUserCreds}.
                     * @param error Error, if any
                     * @param [response] UserCreds
                     */
                    type EnableUserCredsCallback = (error: (Error|null), response?: google.firestore.admin.v1.UserCreds) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|disableUserCreds}.
                     * @param error Error, if any
                     * @param [response] UserCreds
                     */
                    type DisableUserCredsCallback = (error: (Error|null), response?: google.firestore.admin.v1.UserCreds) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|resetUserPassword}.
                     * @param error Error, if any
                     * @param [response] UserCreds
                     */
                    type ResetUserPasswordCallback = (error: (Error|null), response?: google.firestore.admin.v1.UserCreds) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|deleteUserCreds}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteUserCredsCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|getBackup}.
                     * @param error Error, if any
                     * @param [response] Backup
                     */
                    type GetBackupCallback = (error: (Error|null), response?: google.firestore.admin.v1.Backup) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|listBackups}.
                     * @param error Error, if any
                     * @param [response] ListBackupsResponse
                     */
                    type ListBackupsCallback = (error: (Error|null), response?: google.firestore.admin.v1.ListBackupsResponse) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|deleteBackup}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteBackupCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|restoreDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RestoreDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|createBackupSchedule}.
                     * @param error Error, if any
                     * @param [response] BackupSchedule
                     */
                    type CreateBackupScheduleCallback = (error: (Error|null), response?: google.firestore.admin.v1.BackupSchedule) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|getBackupSchedule}.
                     * @param error Error, if any
                     * @param [response] BackupSchedule
                     */
                    type GetBackupScheduleCallback = (error: (Error|null), response?: google.firestore.admin.v1.BackupSchedule) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|listBackupSchedules}.
                     * @param error Error, if any
                     * @param [response] ListBackupSchedulesResponse
                     */
                    type ListBackupSchedulesCallback = (error: (Error|null), response?: google.firestore.admin.v1.ListBackupSchedulesResponse) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|updateBackupSchedule}.
                     * @param error Error, if any
                     * @param [response] BackupSchedule
                     */
                    type UpdateBackupScheduleCallback = (error: (Error|null), response?: google.firestore.admin.v1.BackupSchedule) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|deleteBackupSchedule}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteBackupScheduleCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.firestore.admin.v1.FirestoreAdmin|cloneDatabase}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CloneDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of a ListDatabasesRequest. */
                interface IListDatabasesRequest {

                    /** ListDatabasesRequest parent */
                    parent?: (string|null);

                    /** ListDatabasesRequest showDeleted */
                    showDeleted?: (boolean|null);
                }

                /** Represents a ListDatabasesRequest. */
                class ListDatabasesRequest implements IListDatabasesRequest {

                    /**
                     * Constructs a new ListDatabasesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListDatabasesRequest);

                    /** ListDatabasesRequest parent. */
                    public parent: string;

                    /** ListDatabasesRequest showDeleted. */
                    public showDeleted: boolean;

                    /**
                     * Creates a new ListDatabasesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDatabasesRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListDatabasesRequest): google.firestore.admin.v1.ListDatabasesRequest;

                    /**
                     * Encodes the specified ListDatabasesRequest message. Does not implicitly {@link google.firestore.admin.v1.ListDatabasesRequest.verify|verify} messages.
                     * @param message ListDatabasesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListDatabasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDatabasesRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListDatabasesRequest.verify|verify} messages.
                     * @param message ListDatabasesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListDatabasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDatabasesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDatabasesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListDatabasesRequest;

                    /**
                     * Decodes a ListDatabasesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDatabasesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListDatabasesRequest;

                    /**
                     * Verifies a ListDatabasesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDatabasesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDatabasesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListDatabasesRequest;

                    /**
                     * Creates a plain object from a ListDatabasesRequest message. Also converts values to other types if specified.
                     * @param message ListDatabasesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListDatabasesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDatabasesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDatabasesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateDatabaseRequest. */
                interface ICreateDatabaseRequest {

                    /** CreateDatabaseRequest parent */
                    parent?: (string|null);

                    /** CreateDatabaseRequest database */
                    database?: (google.firestore.admin.v1.IDatabase|null);

                    /** CreateDatabaseRequest databaseId */
                    databaseId?: (string|null);
                }

                /** Represents a CreateDatabaseRequest. */
                class CreateDatabaseRequest implements ICreateDatabaseRequest {

                    /**
                     * Constructs a new CreateDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.ICreateDatabaseRequest);

                    /** CreateDatabaseRequest parent. */
                    public parent: string;

                    /** CreateDatabaseRequest database. */
                    public database?: (google.firestore.admin.v1.IDatabase|null);

                    /** CreateDatabaseRequest databaseId. */
                    public databaseId: string;

                    /**
                     * Creates a new CreateDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDatabaseRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.ICreateDatabaseRequest): google.firestore.admin.v1.CreateDatabaseRequest;

                    /**
                     * Encodes the specified CreateDatabaseRequest message. Does not implicitly {@link google.firestore.admin.v1.CreateDatabaseRequest.verify|verify} messages.
                     * @param message CreateDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.ICreateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDatabaseRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.CreateDatabaseRequest.verify|verify} messages.
                     * @param message CreateDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.ICreateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.CreateDatabaseRequest;

                    /**
                     * Decodes a CreateDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.CreateDatabaseRequest;

                    /**
                     * Verifies a CreateDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.CreateDatabaseRequest;

                    /**
                     * Creates a plain object from a CreateDatabaseRequest message. Also converts values to other types if specified.
                     * @param message CreateDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.CreateDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateDatabaseMetadata. */
                interface ICreateDatabaseMetadata {
                }

                /** Represents a CreateDatabaseMetadata. */
                class CreateDatabaseMetadata implements ICreateDatabaseMetadata {

                    /**
                     * Constructs a new CreateDatabaseMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.ICreateDatabaseMetadata);

                    /**
                     * Creates a new CreateDatabaseMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateDatabaseMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.ICreateDatabaseMetadata): google.firestore.admin.v1.CreateDatabaseMetadata;

                    /**
                     * Encodes the specified CreateDatabaseMetadata message. Does not implicitly {@link google.firestore.admin.v1.CreateDatabaseMetadata.verify|verify} messages.
                     * @param message CreateDatabaseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.ICreateDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateDatabaseMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.CreateDatabaseMetadata.verify|verify} messages.
                     * @param message CreateDatabaseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.ICreateDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateDatabaseMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateDatabaseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.CreateDatabaseMetadata;

                    /**
                     * Decodes a CreateDatabaseMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateDatabaseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.CreateDatabaseMetadata;

                    /**
                     * Verifies a CreateDatabaseMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateDatabaseMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateDatabaseMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.CreateDatabaseMetadata;

                    /**
                     * Creates a plain object from a CreateDatabaseMetadata message. Also converts values to other types if specified.
                     * @param message CreateDatabaseMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.CreateDatabaseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateDatabaseMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateDatabaseMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListDatabasesResponse. */
                interface IListDatabasesResponse {

                    /** ListDatabasesResponse databases */
                    databases?: (google.firestore.admin.v1.IDatabase[]|null);

                    /** ListDatabasesResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListDatabasesResponse. */
                class ListDatabasesResponse implements IListDatabasesResponse {

                    /**
                     * Constructs a new ListDatabasesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListDatabasesResponse);

                    /** ListDatabasesResponse databases. */
                    public databases: google.firestore.admin.v1.IDatabase[];

                    /** ListDatabasesResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListDatabasesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListDatabasesResponse instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListDatabasesResponse): google.firestore.admin.v1.ListDatabasesResponse;

                    /**
                     * Encodes the specified ListDatabasesResponse message. Does not implicitly {@link google.firestore.admin.v1.ListDatabasesResponse.verify|verify} messages.
                     * @param message ListDatabasesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListDatabasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListDatabasesResponse message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListDatabasesResponse.verify|verify} messages.
                     * @param message ListDatabasesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListDatabasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListDatabasesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListDatabasesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListDatabasesResponse;

                    /**
                     * Decodes a ListDatabasesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListDatabasesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListDatabasesResponse;

                    /**
                     * Verifies a ListDatabasesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListDatabasesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListDatabasesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListDatabasesResponse;

                    /**
                     * Creates a plain object from a ListDatabasesResponse message. Also converts values to other types if specified.
                     * @param message ListDatabasesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListDatabasesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListDatabasesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListDatabasesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetDatabaseRequest. */
                interface IGetDatabaseRequest {

                    /** GetDatabaseRequest name */
                    name?: (string|null);
                }

                /** Represents a GetDatabaseRequest. */
                class GetDatabaseRequest implements IGetDatabaseRequest {

                    /**
                     * Constructs a new GetDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IGetDatabaseRequest);

                    /** GetDatabaseRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetDatabaseRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IGetDatabaseRequest): google.firestore.admin.v1.GetDatabaseRequest;

                    /**
                     * Encodes the specified GetDatabaseRequest message. Does not implicitly {@link google.firestore.admin.v1.GetDatabaseRequest.verify|verify} messages.
                     * @param message GetDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IGetDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetDatabaseRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.GetDatabaseRequest.verify|verify} messages.
                     * @param message GetDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IGetDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.GetDatabaseRequest;

                    /**
                     * Decodes a GetDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.GetDatabaseRequest;

                    /**
                     * Verifies a GetDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.GetDatabaseRequest;

                    /**
                     * Creates a plain object from a GetDatabaseRequest message. Also converts values to other types if specified.
                     * @param message GetDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.GetDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateDatabaseRequest. */
                interface IUpdateDatabaseRequest {

                    /** UpdateDatabaseRequest database */
                    database?: (google.firestore.admin.v1.IDatabase|null);

                    /** UpdateDatabaseRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateDatabaseRequest. */
                class UpdateDatabaseRequest implements IUpdateDatabaseRequest {

                    /**
                     * Constructs a new UpdateDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IUpdateDatabaseRequest);

                    /** UpdateDatabaseRequest database. */
                    public database?: (google.firestore.admin.v1.IDatabase|null);

                    /** UpdateDatabaseRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDatabaseRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IUpdateDatabaseRequest): google.firestore.admin.v1.UpdateDatabaseRequest;

                    /**
                     * Encodes the specified UpdateDatabaseRequest message. Does not implicitly {@link google.firestore.admin.v1.UpdateDatabaseRequest.verify|verify} messages.
                     * @param message UpdateDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IUpdateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDatabaseRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.UpdateDatabaseRequest.verify|verify} messages.
                     * @param message UpdateDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IUpdateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.UpdateDatabaseRequest;

                    /**
                     * Decodes an UpdateDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.UpdateDatabaseRequest;

                    /**
                     * Verifies an UpdateDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.UpdateDatabaseRequest;

                    /**
                     * Creates a plain object from an UpdateDatabaseRequest message. Also converts values to other types if specified.
                     * @param message UpdateDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.UpdateDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateDatabaseMetadata. */
                interface IUpdateDatabaseMetadata {
                }

                /** Represents an UpdateDatabaseMetadata. */
                class UpdateDatabaseMetadata implements IUpdateDatabaseMetadata {

                    /**
                     * Constructs a new UpdateDatabaseMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IUpdateDatabaseMetadata);

                    /**
                     * Creates a new UpdateDatabaseMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateDatabaseMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IUpdateDatabaseMetadata): google.firestore.admin.v1.UpdateDatabaseMetadata;

                    /**
                     * Encodes the specified UpdateDatabaseMetadata message. Does not implicitly {@link google.firestore.admin.v1.UpdateDatabaseMetadata.verify|verify} messages.
                     * @param message UpdateDatabaseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IUpdateDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateDatabaseMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.UpdateDatabaseMetadata.verify|verify} messages.
                     * @param message UpdateDatabaseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IUpdateDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateDatabaseMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateDatabaseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.UpdateDatabaseMetadata;

                    /**
                     * Decodes an UpdateDatabaseMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateDatabaseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.UpdateDatabaseMetadata;

                    /**
                     * Verifies an UpdateDatabaseMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateDatabaseMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateDatabaseMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.UpdateDatabaseMetadata;

                    /**
                     * Creates a plain object from an UpdateDatabaseMetadata message. Also converts values to other types if specified.
                     * @param message UpdateDatabaseMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.UpdateDatabaseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateDatabaseMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateDatabaseMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteDatabaseRequest. */
                interface IDeleteDatabaseRequest {

                    /** DeleteDatabaseRequest name */
                    name?: (string|null);

                    /** DeleteDatabaseRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteDatabaseRequest. */
                class DeleteDatabaseRequest implements IDeleteDatabaseRequest {

                    /**
                     * Constructs a new DeleteDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IDeleteDatabaseRequest);

                    /** DeleteDatabaseRequest name. */
                    public name: string;

                    /** DeleteDatabaseRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDatabaseRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IDeleteDatabaseRequest): google.firestore.admin.v1.DeleteDatabaseRequest;

                    /**
                     * Encodes the specified DeleteDatabaseRequest message. Does not implicitly {@link google.firestore.admin.v1.DeleteDatabaseRequest.verify|verify} messages.
                     * @param message DeleteDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IDeleteDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDatabaseRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.DeleteDatabaseRequest.verify|verify} messages.
                     * @param message DeleteDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IDeleteDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.DeleteDatabaseRequest;

                    /**
                     * Decodes a DeleteDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.DeleteDatabaseRequest;

                    /**
                     * Verifies a DeleteDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.DeleteDatabaseRequest;

                    /**
                     * Creates a plain object from a DeleteDatabaseRequest message. Also converts values to other types if specified.
                     * @param message DeleteDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.DeleteDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteDatabaseMetadata. */
                interface IDeleteDatabaseMetadata {
                }

                /** Represents a DeleteDatabaseMetadata. */
                class DeleteDatabaseMetadata implements IDeleteDatabaseMetadata {

                    /**
                     * Constructs a new DeleteDatabaseMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IDeleteDatabaseMetadata);

                    /**
                     * Creates a new DeleteDatabaseMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteDatabaseMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IDeleteDatabaseMetadata): google.firestore.admin.v1.DeleteDatabaseMetadata;

                    /**
                     * Encodes the specified DeleteDatabaseMetadata message. Does not implicitly {@link google.firestore.admin.v1.DeleteDatabaseMetadata.verify|verify} messages.
                     * @param message DeleteDatabaseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IDeleteDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteDatabaseMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.DeleteDatabaseMetadata.verify|verify} messages.
                     * @param message DeleteDatabaseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IDeleteDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteDatabaseMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteDatabaseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.DeleteDatabaseMetadata;

                    /**
                     * Decodes a DeleteDatabaseMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteDatabaseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.DeleteDatabaseMetadata;

                    /**
                     * Verifies a DeleteDatabaseMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteDatabaseMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteDatabaseMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.DeleteDatabaseMetadata;

                    /**
                     * Creates a plain object from a DeleteDatabaseMetadata message. Also converts values to other types if specified.
                     * @param message DeleteDatabaseMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.DeleteDatabaseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteDatabaseMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteDatabaseMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateUserCredsRequest. */
                interface ICreateUserCredsRequest {

                    /** CreateUserCredsRequest parent */
                    parent?: (string|null);

                    /** CreateUserCredsRequest userCreds */
                    userCreds?: (google.firestore.admin.v1.IUserCreds|null);

                    /** CreateUserCredsRequest userCredsId */
                    userCredsId?: (string|null);
                }

                /** Represents a CreateUserCredsRequest. */
                class CreateUserCredsRequest implements ICreateUserCredsRequest {

                    /**
                     * Constructs a new CreateUserCredsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.ICreateUserCredsRequest);

                    /** CreateUserCredsRequest parent. */
                    public parent: string;

                    /** CreateUserCredsRequest userCreds. */
                    public userCreds?: (google.firestore.admin.v1.IUserCreds|null);

                    /** CreateUserCredsRequest userCredsId. */
                    public userCredsId: string;

                    /**
                     * Creates a new CreateUserCredsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateUserCredsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.ICreateUserCredsRequest): google.firestore.admin.v1.CreateUserCredsRequest;

                    /**
                     * Encodes the specified CreateUserCredsRequest message. Does not implicitly {@link google.firestore.admin.v1.CreateUserCredsRequest.verify|verify} messages.
                     * @param message CreateUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.ICreateUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateUserCredsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.CreateUserCredsRequest.verify|verify} messages.
                     * @param message CreateUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.ICreateUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateUserCredsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.CreateUserCredsRequest;

                    /**
                     * Decodes a CreateUserCredsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.CreateUserCredsRequest;

                    /**
                     * Verifies a CreateUserCredsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateUserCredsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateUserCredsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.CreateUserCredsRequest;

                    /**
                     * Creates a plain object from a CreateUserCredsRequest message. Also converts values to other types if specified.
                     * @param message CreateUserCredsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.CreateUserCredsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateUserCredsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateUserCredsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetUserCredsRequest. */
                interface IGetUserCredsRequest {

                    /** GetUserCredsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetUserCredsRequest. */
                class GetUserCredsRequest implements IGetUserCredsRequest {

                    /**
                     * Constructs a new GetUserCredsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IGetUserCredsRequest);

                    /** GetUserCredsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetUserCredsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetUserCredsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IGetUserCredsRequest): google.firestore.admin.v1.GetUserCredsRequest;

                    /**
                     * Encodes the specified GetUserCredsRequest message. Does not implicitly {@link google.firestore.admin.v1.GetUserCredsRequest.verify|verify} messages.
                     * @param message GetUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IGetUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetUserCredsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.GetUserCredsRequest.verify|verify} messages.
                     * @param message GetUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IGetUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetUserCredsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.GetUserCredsRequest;

                    /**
                     * Decodes a GetUserCredsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.GetUserCredsRequest;

                    /**
                     * Verifies a GetUserCredsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetUserCredsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetUserCredsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.GetUserCredsRequest;

                    /**
                     * Creates a plain object from a GetUserCredsRequest message. Also converts values to other types if specified.
                     * @param message GetUserCredsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.GetUserCredsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetUserCredsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetUserCredsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListUserCredsRequest. */
                interface IListUserCredsRequest {

                    /** ListUserCredsRequest parent */
                    parent?: (string|null);
                }

                /** Represents a ListUserCredsRequest. */
                class ListUserCredsRequest implements IListUserCredsRequest {

                    /**
                     * Constructs a new ListUserCredsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListUserCredsRequest);

                    /** ListUserCredsRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ListUserCredsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUserCredsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListUserCredsRequest): google.firestore.admin.v1.ListUserCredsRequest;

                    /**
                     * Encodes the specified ListUserCredsRequest message. Does not implicitly {@link google.firestore.admin.v1.ListUserCredsRequest.verify|verify} messages.
                     * @param message ListUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUserCredsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListUserCredsRequest.verify|verify} messages.
                     * @param message ListUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUserCredsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListUserCredsRequest;

                    /**
                     * Decodes a ListUserCredsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListUserCredsRequest;

                    /**
                     * Verifies a ListUserCredsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUserCredsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUserCredsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListUserCredsRequest;

                    /**
                     * Creates a plain object from a ListUserCredsRequest message. Also converts values to other types if specified.
                     * @param message ListUserCredsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListUserCredsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUserCredsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListUserCredsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListUserCredsResponse. */
                interface IListUserCredsResponse {

                    /** ListUserCredsResponse userCreds */
                    userCreds?: (google.firestore.admin.v1.IUserCreds[]|null);
                }

                /** Represents a ListUserCredsResponse. */
                class ListUserCredsResponse implements IListUserCredsResponse {

                    /**
                     * Constructs a new ListUserCredsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListUserCredsResponse);

                    /** ListUserCredsResponse userCreds. */
                    public userCreds: google.firestore.admin.v1.IUserCreds[];

                    /**
                     * Creates a new ListUserCredsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListUserCredsResponse instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListUserCredsResponse): google.firestore.admin.v1.ListUserCredsResponse;

                    /**
                     * Encodes the specified ListUserCredsResponse message. Does not implicitly {@link google.firestore.admin.v1.ListUserCredsResponse.verify|verify} messages.
                     * @param message ListUserCredsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListUserCredsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListUserCredsResponse message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListUserCredsResponse.verify|verify} messages.
                     * @param message ListUserCredsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListUserCredsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListUserCredsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListUserCredsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListUserCredsResponse;

                    /**
                     * Decodes a ListUserCredsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListUserCredsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListUserCredsResponse;

                    /**
                     * Verifies a ListUserCredsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListUserCredsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListUserCredsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListUserCredsResponse;

                    /**
                     * Creates a plain object from a ListUserCredsResponse message. Also converts values to other types if specified.
                     * @param message ListUserCredsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListUserCredsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListUserCredsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListUserCredsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EnableUserCredsRequest. */
                interface IEnableUserCredsRequest {

                    /** EnableUserCredsRequest name */
                    name?: (string|null);
                }

                /** Represents an EnableUserCredsRequest. */
                class EnableUserCredsRequest implements IEnableUserCredsRequest {

                    /**
                     * Constructs a new EnableUserCredsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IEnableUserCredsRequest);

                    /** EnableUserCredsRequest name. */
                    public name: string;

                    /**
                     * Creates a new EnableUserCredsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnableUserCredsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IEnableUserCredsRequest): google.firestore.admin.v1.EnableUserCredsRequest;

                    /**
                     * Encodes the specified EnableUserCredsRequest message. Does not implicitly {@link google.firestore.admin.v1.EnableUserCredsRequest.verify|verify} messages.
                     * @param message EnableUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IEnableUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnableUserCredsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.EnableUserCredsRequest.verify|verify} messages.
                     * @param message EnableUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IEnableUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnableUserCredsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnableUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.EnableUserCredsRequest;

                    /**
                     * Decodes an EnableUserCredsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnableUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.EnableUserCredsRequest;

                    /**
                     * Verifies an EnableUserCredsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnableUserCredsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnableUserCredsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.EnableUserCredsRequest;

                    /**
                     * Creates a plain object from an EnableUserCredsRequest message. Also converts values to other types if specified.
                     * @param message EnableUserCredsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.EnableUserCredsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnableUserCredsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EnableUserCredsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DisableUserCredsRequest. */
                interface IDisableUserCredsRequest {

                    /** DisableUserCredsRequest name */
                    name?: (string|null);
                }

                /** Represents a DisableUserCredsRequest. */
                class DisableUserCredsRequest implements IDisableUserCredsRequest {

                    /**
                     * Constructs a new DisableUserCredsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IDisableUserCredsRequest);

                    /** DisableUserCredsRequest name. */
                    public name: string;

                    /**
                     * Creates a new DisableUserCredsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DisableUserCredsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IDisableUserCredsRequest): google.firestore.admin.v1.DisableUserCredsRequest;

                    /**
                     * Encodes the specified DisableUserCredsRequest message. Does not implicitly {@link google.firestore.admin.v1.DisableUserCredsRequest.verify|verify} messages.
                     * @param message DisableUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IDisableUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DisableUserCredsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.DisableUserCredsRequest.verify|verify} messages.
                     * @param message DisableUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IDisableUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DisableUserCredsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DisableUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.DisableUserCredsRequest;

                    /**
                     * Decodes a DisableUserCredsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DisableUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.DisableUserCredsRequest;

                    /**
                     * Verifies a DisableUserCredsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DisableUserCredsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DisableUserCredsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.DisableUserCredsRequest;

                    /**
                     * Creates a plain object from a DisableUserCredsRequest message. Also converts values to other types if specified.
                     * @param message DisableUserCredsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.DisableUserCredsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DisableUserCredsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DisableUserCredsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ResetUserPasswordRequest. */
                interface IResetUserPasswordRequest {

                    /** ResetUserPasswordRequest name */
                    name?: (string|null);
                }

                /** Represents a ResetUserPasswordRequest. */
                class ResetUserPasswordRequest implements IResetUserPasswordRequest {

                    /**
                     * Constructs a new ResetUserPasswordRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IResetUserPasswordRequest);

                    /** ResetUserPasswordRequest name. */
                    public name: string;

                    /**
                     * Creates a new ResetUserPasswordRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResetUserPasswordRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IResetUserPasswordRequest): google.firestore.admin.v1.ResetUserPasswordRequest;

                    /**
                     * Encodes the specified ResetUserPasswordRequest message. Does not implicitly {@link google.firestore.admin.v1.ResetUserPasswordRequest.verify|verify} messages.
                     * @param message ResetUserPasswordRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IResetUserPasswordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResetUserPasswordRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ResetUserPasswordRequest.verify|verify} messages.
                     * @param message ResetUserPasswordRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IResetUserPasswordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResetUserPasswordRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResetUserPasswordRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ResetUserPasswordRequest;

                    /**
                     * Decodes a ResetUserPasswordRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResetUserPasswordRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ResetUserPasswordRequest;

                    /**
                     * Verifies a ResetUserPasswordRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResetUserPasswordRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResetUserPasswordRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ResetUserPasswordRequest;

                    /**
                     * Creates a plain object from a ResetUserPasswordRequest message. Also converts values to other types if specified.
                     * @param message ResetUserPasswordRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ResetUserPasswordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResetUserPasswordRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ResetUserPasswordRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteUserCredsRequest. */
                interface IDeleteUserCredsRequest {

                    /** DeleteUserCredsRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteUserCredsRequest. */
                class DeleteUserCredsRequest implements IDeleteUserCredsRequest {

                    /**
                     * Constructs a new DeleteUserCredsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IDeleteUserCredsRequest);

                    /** DeleteUserCredsRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteUserCredsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteUserCredsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IDeleteUserCredsRequest): google.firestore.admin.v1.DeleteUserCredsRequest;

                    /**
                     * Encodes the specified DeleteUserCredsRequest message. Does not implicitly {@link google.firestore.admin.v1.DeleteUserCredsRequest.verify|verify} messages.
                     * @param message DeleteUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IDeleteUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteUserCredsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.DeleteUserCredsRequest.verify|verify} messages.
                     * @param message DeleteUserCredsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IDeleteUserCredsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteUserCredsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.DeleteUserCredsRequest;

                    /**
                     * Decodes a DeleteUserCredsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteUserCredsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.DeleteUserCredsRequest;

                    /**
                     * Verifies a DeleteUserCredsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteUserCredsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteUserCredsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.DeleteUserCredsRequest;

                    /**
                     * Creates a plain object from a DeleteUserCredsRequest message. Also converts values to other types if specified.
                     * @param message DeleteUserCredsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.DeleteUserCredsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteUserCredsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteUserCredsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateBackupScheduleRequest. */
                interface ICreateBackupScheduleRequest {

                    /** CreateBackupScheduleRequest parent */
                    parent?: (string|null);

                    /** CreateBackupScheduleRequest backupSchedule */
                    backupSchedule?: (google.firestore.admin.v1.IBackupSchedule|null);
                }

                /** Represents a CreateBackupScheduleRequest. */
                class CreateBackupScheduleRequest implements ICreateBackupScheduleRequest {

                    /**
                     * Constructs a new CreateBackupScheduleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.ICreateBackupScheduleRequest);

                    /** CreateBackupScheduleRequest parent. */
                    public parent: string;

                    /** CreateBackupScheduleRequest backupSchedule. */
                    public backupSchedule?: (google.firestore.admin.v1.IBackupSchedule|null);

                    /**
                     * Creates a new CreateBackupScheduleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupScheduleRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.ICreateBackupScheduleRequest): google.firestore.admin.v1.CreateBackupScheduleRequest;

                    /**
                     * Encodes the specified CreateBackupScheduleRequest message. Does not implicitly {@link google.firestore.admin.v1.CreateBackupScheduleRequest.verify|verify} messages.
                     * @param message CreateBackupScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.ICreateBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupScheduleRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.CreateBackupScheduleRequest.verify|verify} messages.
                     * @param message CreateBackupScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.ICreateBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupScheduleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.CreateBackupScheduleRequest;

                    /**
                     * Decodes a CreateBackupScheduleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.CreateBackupScheduleRequest;

                    /**
                     * Verifies a CreateBackupScheduleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBackupScheduleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBackupScheduleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.CreateBackupScheduleRequest;

                    /**
                     * Creates a plain object from a CreateBackupScheduleRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupScheduleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.CreateBackupScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBackupScheduleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateBackupScheduleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetBackupScheduleRequest. */
                interface IGetBackupScheduleRequest {

                    /** GetBackupScheduleRequest name */
                    name?: (string|null);
                }

                /** Represents a GetBackupScheduleRequest. */
                class GetBackupScheduleRequest implements IGetBackupScheduleRequest {

                    /**
                     * Constructs a new GetBackupScheduleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IGetBackupScheduleRequest);

                    /** GetBackupScheduleRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupScheduleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupScheduleRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IGetBackupScheduleRequest): google.firestore.admin.v1.GetBackupScheduleRequest;

                    /**
                     * Encodes the specified GetBackupScheduleRequest message. Does not implicitly {@link google.firestore.admin.v1.GetBackupScheduleRequest.verify|verify} messages.
                     * @param message GetBackupScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IGetBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupScheduleRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.GetBackupScheduleRequest.verify|verify} messages.
                     * @param message GetBackupScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IGetBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupScheduleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.GetBackupScheduleRequest;

                    /**
                     * Decodes a GetBackupScheduleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.GetBackupScheduleRequest;

                    /**
                     * Verifies a GetBackupScheduleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBackupScheduleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBackupScheduleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.GetBackupScheduleRequest;

                    /**
                     * Creates a plain object from a GetBackupScheduleRequest message. Also converts values to other types if specified.
                     * @param message GetBackupScheduleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.GetBackupScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBackupScheduleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetBackupScheduleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateBackupScheduleRequest. */
                interface IUpdateBackupScheduleRequest {

                    /** UpdateBackupScheduleRequest backupSchedule */
                    backupSchedule?: (google.firestore.admin.v1.IBackupSchedule|null);

                    /** UpdateBackupScheduleRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateBackupScheduleRequest. */
                class UpdateBackupScheduleRequest implements IUpdateBackupScheduleRequest {

                    /**
                     * Constructs a new UpdateBackupScheduleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IUpdateBackupScheduleRequest);

                    /** UpdateBackupScheduleRequest backupSchedule. */
                    public backupSchedule?: (google.firestore.admin.v1.IBackupSchedule|null);

                    /** UpdateBackupScheduleRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateBackupScheduleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBackupScheduleRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IUpdateBackupScheduleRequest): google.firestore.admin.v1.UpdateBackupScheduleRequest;

                    /**
                     * Encodes the specified UpdateBackupScheduleRequest message. Does not implicitly {@link google.firestore.admin.v1.UpdateBackupScheduleRequest.verify|verify} messages.
                     * @param message UpdateBackupScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IUpdateBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBackupScheduleRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.UpdateBackupScheduleRequest.verify|verify} messages.
                     * @param message UpdateBackupScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IUpdateBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBackupScheduleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBackupScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.UpdateBackupScheduleRequest;

                    /**
                     * Decodes an UpdateBackupScheduleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBackupScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.UpdateBackupScheduleRequest;

                    /**
                     * Verifies an UpdateBackupScheduleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBackupScheduleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBackupScheduleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.UpdateBackupScheduleRequest;

                    /**
                     * Creates a plain object from an UpdateBackupScheduleRequest message. Also converts values to other types if specified.
                     * @param message UpdateBackupScheduleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.UpdateBackupScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBackupScheduleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateBackupScheduleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupSchedulesRequest. */
                interface IListBackupSchedulesRequest {

                    /** ListBackupSchedulesRequest parent */
                    parent?: (string|null);
                }

                /** Represents a ListBackupSchedulesRequest. */
                class ListBackupSchedulesRequest implements IListBackupSchedulesRequest {

                    /**
                     * Constructs a new ListBackupSchedulesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListBackupSchedulesRequest);

                    /** ListBackupSchedulesRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ListBackupSchedulesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupSchedulesRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListBackupSchedulesRequest): google.firestore.admin.v1.ListBackupSchedulesRequest;

                    /**
                     * Encodes the specified ListBackupSchedulesRequest message. Does not implicitly {@link google.firestore.admin.v1.ListBackupSchedulesRequest.verify|verify} messages.
                     * @param message ListBackupSchedulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListBackupSchedulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupSchedulesRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListBackupSchedulesRequest.verify|verify} messages.
                     * @param message ListBackupSchedulesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListBackupSchedulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupSchedulesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupSchedulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListBackupSchedulesRequest;

                    /**
                     * Decodes a ListBackupSchedulesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupSchedulesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListBackupSchedulesRequest;

                    /**
                     * Verifies a ListBackupSchedulesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupSchedulesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupSchedulesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListBackupSchedulesRequest;

                    /**
                     * Creates a plain object from a ListBackupSchedulesRequest message. Also converts values to other types if specified.
                     * @param message ListBackupSchedulesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListBackupSchedulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupSchedulesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupSchedulesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupSchedulesResponse. */
                interface IListBackupSchedulesResponse {

                    /** ListBackupSchedulesResponse backupSchedules */
                    backupSchedules?: (google.firestore.admin.v1.IBackupSchedule[]|null);
                }

                /** Represents a ListBackupSchedulesResponse. */
                class ListBackupSchedulesResponse implements IListBackupSchedulesResponse {

                    /**
                     * Constructs a new ListBackupSchedulesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListBackupSchedulesResponse);

                    /** ListBackupSchedulesResponse backupSchedules. */
                    public backupSchedules: google.firestore.admin.v1.IBackupSchedule[];

                    /**
                     * Creates a new ListBackupSchedulesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupSchedulesResponse instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListBackupSchedulesResponse): google.firestore.admin.v1.ListBackupSchedulesResponse;

                    /**
                     * Encodes the specified ListBackupSchedulesResponse message. Does not implicitly {@link google.firestore.admin.v1.ListBackupSchedulesResponse.verify|verify} messages.
                     * @param message ListBackupSchedulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListBackupSchedulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupSchedulesResponse message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListBackupSchedulesResponse.verify|verify} messages.
                     * @param message ListBackupSchedulesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListBackupSchedulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupSchedulesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupSchedulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListBackupSchedulesResponse;

                    /**
                     * Decodes a ListBackupSchedulesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupSchedulesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListBackupSchedulesResponse;

                    /**
                     * Verifies a ListBackupSchedulesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupSchedulesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupSchedulesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListBackupSchedulesResponse;

                    /**
                     * Creates a plain object from a ListBackupSchedulesResponse message. Also converts values to other types if specified.
                     * @param message ListBackupSchedulesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListBackupSchedulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupSchedulesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupSchedulesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteBackupScheduleRequest. */
                interface IDeleteBackupScheduleRequest {

                    /** DeleteBackupScheduleRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteBackupScheduleRequest. */
                class DeleteBackupScheduleRequest implements IDeleteBackupScheduleRequest {

                    /**
                     * Constructs a new DeleteBackupScheduleRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IDeleteBackupScheduleRequest);

                    /** DeleteBackupScheduleRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteBackupScheduleRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupScheduleRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IDeleteBackupScheduleRequest): google.firestore.admin.v1.DeleteBackupScheduleRequest;

                    /**
                     * Encodes the specified DeleteBackupScheduleRequest message. Does not implicitly {@link google.firestore.admin.v1.DeleteBackupScheduleRequest.verify|verify} messages.
                     * @param message DeleteBackupScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IDeleteBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupScheduleRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.DeleteBackupScheduleRequest.verify|verify} messages.
                     * @param message DeleteBackupScheduleRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IDeleteBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupScheduleRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.DeleteBackupScheduleRequest;

                    /**
                     * Decodes a DeleteBackupScheduleRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupScheduleRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.DeleteBackupScheduleRequest;

                    /**
                     * Verifies a DeleteBackupScheduleRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBackupScheduleRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBackupScheduleRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.DeleteBackupScheduleRequest;

                    /**
                     * Creates a plain object from a DeleteBackupScheduleRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupScheduleRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.DeleteBackupScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBackupScheduleRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteBackupScheduleRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateIndexRequest. */
                interface ICreateIndexRequest {

                    /** CreateIndexRequest parent */
                    parent?: (string|null);

                    /** CreateIndexRequest index */
                    index?: (google.firestore.admin.v1.IIndex|null);
                }

                /** Represents a CreateIndexRequest. */
                class CreateIndexRequest implements ICreateIndexRequest {

                    /**
                     * Constructs a new CreateIndexRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.ICreateIndexRequest);

                    /** CreateIndexRequest parent. */
                    public parent: string;

                    /** CreateIndexRequest index. */
                    public index?: (google.firestore.admin.v1.IIndex|null);

                    /**
                     * Creates a new CreateIndexRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateIndexRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.ICreateIndexRequest): google.firestore.admin.v1.CreateIndexRequest;

                    /**
                     * Encodes the specified CreateIndexRequest message. Does not implicitly {@link google.firestore.admin.v1.CreateIndexRequest.verify|verify} messages.
                     * @param message CreateIndexRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.ICreateIndexRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateIndexRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.CreateIndexRequest.verify|verify} messages.
                     * @param message CreateIndexRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.ICreateIndexRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateIndexRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateIndexRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.CreateIndexRequest;

                    /**
                     * Decodes a CreateIndexRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateIndexRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.CreateIndexRequest;

                    /**
                     * Verifies a CreateIndexRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateIndexRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateIndexRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.CreateIndexRequest;

                    /**
                     * Creates a plain object from a CreateIndexRequest message. Also converts values to other types if specified.
                     * @param message CreateIndexRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.CreateIndexRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateIndexRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateIndexRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListIndexesRequest. */
                interface IListIndexesRequest {

                    /** ListIndexesRequest parent */
                    parent?: (string|null);

                    /** ListIndexesRequest filter */
                    filter?: (string|null);

                    /** ListIndexesRequest pageSize */
                    pageSize?: (number|null);

                    /** ListIndexesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListIndexesRequest. */
                class ListIndexesRequest implements IListIndexesRequest {

                    /**
                     * Constructs a new ListIndexesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListIndexesRequest);

                    /** ListIndexesRequest parent. */
                    public parent: string;

                    /** ListIndexesRequest filter. */
                    public filter: string;

                    /** ListIndexesRequest pageSize. */
                    public pageSize: number;

                    /** ListIndexesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListIndexesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIndexesRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListIndexesRequest): google.firestore.admin.v1.ListIndexesRequest;

                    /**
                     * Encodes the specified ListIndexesRequest message. Does not implicitly {@link google.firestore.admin.v1.ListIndexesRequest.verify|verify} messages.
                     * @param message ListIndexesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListIndexesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIndexesRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListIndexesRequest.verify|verify} messages.
                     * @param message ListIndexesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListIndexesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIndexesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIndexesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListIndexesRequest;

                    /**
                     * Decodes a ListIndexesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIndexesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListIndexesRequest;

                    /**
                     * Verifies a ListIndexesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIndexesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIndexesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListIndexesRequest;

                    /**
                     * Creates a plain object from a ListIndexesRequest message. Also converts values to other types if specified.
                     * @param message ListIndexesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListIndexesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIndexesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListIndexesRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListIndexesResponse. */
                interface IListIndexesResponse {

                    /** ListIndexesResponse indexes */
                    indexes?: (google.firestore.admin.v1.IIndex[]|null);

                    /** ListIndexesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListIndexesResponse. */
                class ListIndexesResponse implements IListIndexesResponse {

                    /**
                     * Constructs a new ListIndexesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListIndexesResponse);

                    /** ListIndexesResponse indexes. */
                    public indexes: google.firestore.admin.v1.IIndex[];

                    /** ListIndexesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListIndexesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIndexesResponse instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListIndexesResponse): google.firestore.admin.v1.ListIndexesResponse;

                    /**
                     * Encodes the specified ListIndexesResponse message. Does not implicitly {@link google.firestore.admin.v1.ListIndexesResponse.verify|verify} messages.
                     * @param message ListIndexesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListIndexesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIndexesResponse message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListIndexesResponse.verify|verify} messages.
                     * @param message ListIndexesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListIndexesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIndexesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIndexesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListIndexesResponse;

                    /**
                     * Decodes a ListIndexesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIndexesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListIndexesResponse;

                    /**
                     * Verifies a ListIndexesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIndexesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIndexesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListIndexesResponse;

                    /**
                     * Creates a plain object from a ListIndexesResponse message. Also converts values to other types if specified.
                     * @param message ListIndexesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListIndexesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIndexesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListIndexesResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetIndexRequest. */
                interface IGetIndexRequest {

                    /** GetIndexRequest name */
                    name?: (string|null);
                }

                /** Represents a GetIndexRequest. */
                class GetIndexRequest implements IGetIndexRequest {

                    /**
                     * Constructs a new GetIndexRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IGetIndexRequest);

                    /** GetIndexRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetIndexRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetIndexRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IGetIndexRequest): google.firestore.admin.v1.GetIndexRequest;

                    /**
                     * Encodes the specified GetIndexRequest message. Does not implicitly {@link google.firestore.admin.v1.GetIndexRequest.verify|verify} messages.
                     * @param message GetIndexRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IGetIndexRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetIndexRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.GetIndexRequest.verify|verify} messages.
                     * @param message GetIndexRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IGetIndexRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetIndexRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetIndexRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.GetIndexRequest;

                    /**
                     * Decodes a GetIndexRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetIndexRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.GetIndexRequest;

                    /**
                     * Verifies a GetIndexRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetIndexRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetIndexRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.GetIndexRequest;

                    /**
                     * Creates a plain object from a GetIndexRequest message. Also converts values to other types if specified.
                     * @param message GetIndexRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.GetIndexRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetIndexRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetIndexRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteIndexRequest. */
                interface IDeleteIndexRequest {

                    /** DeleteIndexRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteIndexRequest. */
                class DeleteIndexRequest implements IDeleteIndexRequest {

                    /**
                     * Constructs a new DeleteIndexRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IDeleteIndexRequest);

                    /** DeleteIndexRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteIndexRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteIndexRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IDeleteIndexRequest): google.firestore.admin.v1.DeleteIndexRequest;

                    /**
                     * Encodes the specified DeleteIndexRequest message. Does not implicitly {@link google.firestore.admin.v1.DeleteIndexRequest.verify|verify} messages.
                     * @param message DeleteIndexRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IDeleteIndexRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteIndexRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.DeleteIndexRequest.verify|verify} messages.
                     * @param message DeleteIndexRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IDeleteIndexRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteIndexRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteIndexRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.DeleteIndexRequest;

                    /**
                     * Decodes a DeleteIndexRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteIndexRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.DeleteIndexRequest;

                    /**
                     * Verifies a DeleteIndexRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteIndexRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteIndexRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.DeleteIndexRequest;

                    /**
                     * Creates a plain object from a DeleteIndexRequest message. Also converts values to other types if specified.
                     * @param message DeleteIndexRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.DeleteIndexRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteIndexRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteIndexRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateFieldRequest. */
                interface IUpdateFieldRequest {

                    /** UpdateFieldRequest field */
                    field?: (google.firestore.admin.v1.IField|null);

                    /** UpdateFieldRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFieldRequest. */
                class UpdateFieldRequest implements IUpdateFieldRequest {

                    /**
                     * Constructs a new UpdateFieldRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IUpdateFieldRequest);

                    /** UpdateFieldRequest field. */
                    public field?: (google.firestore.admin.v1.IField|null);

                    /** UpdateFieldRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFieldRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFieldRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IUpdateFieldRequest): google.firestore.admin.v1.UpdateFieldRequest;

                    /**
                     * Encodes the specified UpdateFieldRequest message. Does not implicitly {@link google.firestore.admin.v1.UpdateFieldRequest.verify|verify} messages.
                     * @param message UpdateFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IUpdateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFieldRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.UpdateFieldRequest.verify|verify} messages.
                     * @param message UpdateFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IUpdateFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFieldRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.UpdateFieldRequest;

                    /**
                     * Decodes an UpdateFieldRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.UpdateFieldRequest;

                    /**
                     * Verifies an UpdateFieldRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFieldRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFieldRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.UpdateFieldRequest;

                    /**
                     * Creates a plain object from an UpdateFieldRequest message. Also converts values to other types if specified.
                     * @param message UpdateFieldRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.UpdateFieldRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFieldRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateFieldRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetFieldRequest. */
                interface IGetFieldRequest {

                    /** GetFieldRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFieldRequest. */
                class GetFieldRequest implements IGetFieldRequest {

                    /**
                     * Constructs a new GetFieldRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IGetFieldRequest);

                    /** GetFieldRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFieldRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFieldRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IGetFieldRequest): google.firestore.admin.v1.GetFieldRequest;

                    /**
                     * Encodes the specified GetFieldRequest message. Does not implicitly {@link google.firestore.admin.v1.GetFieldRequest.verify|verify} messages.
                     * @param message GetFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IGetFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFieldRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.GetFieldRequest.verify|verify} messages.
                     * @param message GetFieldRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IGetFieldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFieldRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.GetFieldRequest;

                    /**
                     * Decodes a GetFieldRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFieldRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.GetFieldRequest;

                    /**
                     * Verifies a GetFieldRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFieldRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFieldRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.GetFieldRequest;

                    /**
                     * Creates a plain object from a GetFieldRequest message. Also converts values to other types if specified.
                     * @param message GetFieldRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.GetFieldRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFieldRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetFieldRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFieldsRequest. */
                interface IListFieldsRequest {

                    /** ListFieldsRequest parent */
                    parent?: (string|null);

                    /** ListFieldsRequest filter */
                    filter?: (string|null);

                    /** ListFieldsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFieldsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListFieldsRequest. */
                class ListFieldsRequest implements IListFieldsRequest {

                    /**
                     * Constructs a new ListFieldsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListFieldsRequest);

                    /** ListFieldsRequest parent. */
                    public parent: string;

                    /** ListFieldsRequest filter. */
                    public filter: string;

                    /** ListFieldsRequest pageSize. */
                    public pageSize: number;

                    /** ListFieldsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListFieldsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFieldsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListFieldsRequest): google.firestore.admin.v1.ListFieldsRequest;

                    /**
                     * Encodes the specified ListFieldsRequest message. Does not implicitly {@link google.firestore.admin.v1.ListFieldsRequest.verify|verify} messages.
                     * @param message ListFieldsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListFieldsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFieldsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListFieldsRequest.verify|verify} messages.
                     * @param message ListFieldsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListFieldsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFieldsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFieldsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListFieldsRequest;

                    /**
                     * Decodes a ListFieldsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFieldsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListFieldsRequest;

                    /**
                     * Verifies a ListFieldsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFieldsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFieldsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListFieldsRequest;

                    /**
                     * Creates a plain object from a ListFieldsRequest message. Also converts values to other types if specified.
                     * @param message ListFieldsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListFieldsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFieldsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFieldsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListFieldsResponse. */
                interface IListFieldsResponse {

                    /** ListFieldsResponse fields */
                    fields?: (google.firestore.admin.v1.IField[]|null);

                    /** ListFieldsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFieldsResponse. */
                class ListFieldsResponse implements IListFieldsResponse {

                    /**
                     * Constructs a new ListFieldsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListFieldsResponse);

                    /** ListFieldsResponse fields. */
                    public fields: google.firestore.admin.v1.IField[];

                    /** ListFieldsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFieldsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFieldsResponse instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListFieldsResponse): google.firestore.admin.v1.ListFieldsResponse;

                    /**
                     * Encodes the specified ListFieldsResponse message. Does not implicitly {@link google.firestore.admin.v1.ListFieldsResponse.verify|verify} messages.
                     * @param message ListFieldsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListFieldsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFieldsResponse message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListFieldsResponse.verify|verify} messages.
                     * @param message ListFieldsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListFieldsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFieldsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFieldsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListFieldsResponse;

                    /**
                     * Decodes a ListFieldsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFieldsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListFieldsResponse;

                    /**
                     * Verifies a ListFieldsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFieldsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFieldsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListFieldsResponse;

                    /**
                     * Creates a plain object from a ListFieldsResponse message. Also converts values to other types if specified.
                     * @param message ListFieldsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListFieldsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFieldsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListFieldsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportDocumentsRequest. */
                interface IExportDocumentsRequest {

                    /** ExportDocumentsRequest name */
                    name?: (string|null);

                    /** ExportDocumentsRequest collectionIds */
                    collectionIds?: (string[]|null);

                    /** ExportDocumentsRequest outputUriPrefix */
                    outputUriPrefix?: (string|null);

                    /** ExportDocumentsRequest namespaceIds */
                    namespaceIds?: (string[]|null);

                    /** ExportDocumentsRequest snapshotTime */
                    snapshotTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an ExportDocumentsRequest. */
                class ExportDocumentsRequest implements IExportDocumentsRequest {

                    /**
                     * Constructs a new ExportDocumentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IExportDocumentsRequest);

                    /** ExportDocumentsRequest name. */
                    public name: string;

                    /** ExportDocumentsRequest collectionIds. */
                    public collectionIds: string[];

                    /** ExportDocumentsRequest outputUriPrefix. */
                    public outputUriPrefix: string;

                    /** ExportDocumentsRequest namespaceIds. */
                    public namespaceIds: string[];

                    /** ExportDocumentsRequest snapshotTime. */
                    public snapshotTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ExportDocumentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportDocumentsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IExportDocumentsRequest): google.firestore.admin.v1.ExportDocumentsRequest;

                    /**
                     * Encodes the specified ExportDocumentsRequest message. Does not implicitly {@link google.firestore.admin.v1.ExportDocumentsRequest.verify|verify} messages.
                     * @param message ExportDocumentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IExportDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportDocumentsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ExportDocumentsRequest.verify|verify} messages.
                     * @param message ExportDocumentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IExportDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportDocumentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportDocumentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ExportDocumentsRequest;

                    /**
                     * Decodes an ExportDocumentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportDocumentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ExportDocumentsRequest;

                    /**
                     * Verifies an ExportDocumentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportDocumentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportDocumentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ExportDocumentsRequest;

                    /**
                     * Creates a plain object from an ExportDocumentsRequest message. Also converts values to other types if specified.
                     * @param message ExportDocumentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ExportDocumentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportDocumentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportDocumentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportDocumentsRequest. */
                interface IImportDocumentsRequest {

                    /** ImportDocumentsRequest name */
                    name?: (string|null);

                    /** ImportDocumentsRequest collectionIds */
                    collectionIds?: (string[]|null);

                    /** ImportDocumentsRequest inputUriPrefix */
                    inputUriPrefix?: (string|null);

                    /** ImportDocumentsRequest namespaceIds */
                    namespaceIds?: (string[]|null);
                }

                /** Represents an ImportDocumentsRequest. */
                class ImportDocumentsRequest implements IImportDocumentsRequest {

                    /**
                     * Constructs a new ImportDocumentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IImportDocumentsRequest);

                    /** ImportDocumentsRequest name. */
                    public name: string;

                    /** ImportDocumentsRequest collectionIds. */
                    public collectionIds: string[];

                    /** ImportDocumentsRequest inputUriPrefix. */
                    public inputUriPrefix: string;

                    /** ImportDocumentsRequest namespaceIds. */
                    public namespaceIds: string[];

                    /**
                     * Creates a new ImportDocumentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportDocumentsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IImportDocumentsRequest): google.firestore.admin.v1.ImportDocumentsRequest;

                    /**
                     * Encodes the specified ImportDocumentsRequest message. Does not implicitly {@link google.firestore.admin.v1.ImportDocumentsRequest.verify|verify} messages.
                     * @param message ImportDocumentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IImportDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportDocumentsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ImportDocumentsRequest.verify|verify} messages.
                     * @param message ImportDocumentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IImportDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportDocumentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportDocumentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ImportDocumentsRequest;

                    /**
                     * Decodes an ImportDocumentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportDocumentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ImportDocumentsRequest;

                    /**
                     * Verifies an ImportDocumentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportDocumentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportDocumentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ImportDocumentsRequest;

                    /**
                     * Creates a plain object from an ImportDocumentsRequest message. Also converts values to other types if specified.
                     * @param message ImportDocumentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ImportDocumentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportDocumentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportDocumentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BulkDeleteDocumentsRequest. */
                interface IBulkDeleteDocumentsRequest {

                    /** BulkDeleteDocumentsRequest name */
                    name?: (string|null);

                    /** BulkDeleteDocumentsRequest collectionIds */
                    collectionIds?: (string[]|null);

                    /** BulkDeleteDocumentsRequest namespaceIds */
                    namespaceIds?: (string[]|null);
                }

                /** Represents a BulkDeleteDocumentsRequest. */
                class BulkDeleteDocumentsRequest implements IBulkDeleteDocumentsRequest {

                    /**
                     * Constructs a new BulkDeleteDocumentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IBulkDeleteDocumentsRequest);

                    /** BulkDeleteDocumentsRequest name. */
                    public name: string;

                    /** BulkDeleteDocumentsRequest collectionIds. */
                    public collectionIds: string[];

                    /** BulkDeleteDocumentsRequest namespaceIds. */
                    public namespaceIds: string[];

                    /**
                     * Creates a new BulkDeleteDocumentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BulkDeleteDocumentsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IBulkDeleteDocumentsRequest): google.firestore.admin.v1.BulkDeleteDocumentsRequest;

                    /**
                     * Encodes the specified BulkDeleteDocumentsRequest message. Does not implicitly {@link google.firestore.admin.v1.BulkDeleteDocumentsRequest.verify|verify} messages.
                     * @param message BulkDeleteDocumentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IBulkDeleteDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BulkDeleteDocumentsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.BulkDeleteDocumentsRequest.verify|verify} messages.
                     * @param message BulkDeleteDocumentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IBulkDeleteDocumentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BulkDeleteDocumentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BulkDeleteDocumentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.BulkDeleteDocumentsRequest;

                    /**
                     * Decodes a BulkDeleteDocumentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BulkDeleteDocumentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.BulkDeleteDocumentsRequest;

                    /**
                     * Verifies a BulkDeleteDocumentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BulkDeleteDocumentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BulkDeleteDocumentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.BulkDeleteDocumentsRequest;

                    /**
                     * Creates a plain object from a BulkDeleteDocumentsRequest message. Also converts values to other types if specified.
                     * @param message BulkDeleteDocumentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.BulkDeleteDocumentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BulkDeleteDocumentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BulkDeleteDocumentsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BulkDeleteDocumentsResponse. */
                interface IBulkDeleteDocumentsResponse {
                }

                /** Represents a BulkDeleteDocumentsResponse. */
                class BulkDeleteDocumentsResponse implements IBulkDeleteDocumentsResponse {

                    /**
                     * Constructs a new BulkDeleteDocumentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IBulkDeleteDocumentsResponse);

                    /**
                     * Creates a new BulkDeleteDocumentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BulkDeleteDocumentsResponse instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IBulkDeleteDocumentsResponse): google.firestore.admin.v1.BulkDeleteDocumentsResponse;

                    /**
                     * Encodes the specified BulkDeleteDocumentsResponse message. Does not implicitly {@link google.firestore.admin.v1.BulkDeleteDocumentsResponse.verify|verify} messages.
                     * @param message BulkDeleteDocumentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IBulkDeleteDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BulkDeleteDocumentsResponse message, length delimited. Does not implicitly {@link google.firestore.admin.v1.BulkDeleteDocumentsResponse.verify|verify} messages.
                     * @param message BulkDeleteDocumentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IBulkDeleteDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BulkDeleteDocumentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BulkDeleteDocumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.BulkDeleteDocumentsResponse;

                    /**
                     * Decodes a BulkDeleteDocumentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BulkDeleteDocumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.BulkDeleteDocumentsResponse;

                    /**
                     * Verifies a BulkDeleteDocumentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BulkDeleteDocumentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BulkDeleteDocumentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.BulkDeleteDocumentsResponse;

                    /**
                     * Creates a plain object from a BulkDeleteDocumentsResponse message. Also converts values to other types if specified.
                     * @param message BulkDeleteDocumentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.BulkDeleteDocumentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BulkDeleteDocumentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BulkDeleteDocumentsResponse
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
                    constructor(properties?: google.firestore.admin.v1.IGetBackupRequest);

                    /** GetBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IGetBackupRequest): google.firestore.admin.v1.GetBackupRequest;

                    /**
                     * Encodes the specified GetBackupRequest message. Does not implicitly {@link google.firestore.admin.v1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.GetBackupRequest;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.GetBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.GetBackupRequest;

                    /**
                     * Creates a plain object from a GetBackupRequest message. Also converts values to other types if specified.
                     * @param message GetBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.GetBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** ListBackupsRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListBackupsRequest. */
                class ListBackupsRequest implements IListBackupsRequest {

                    /**
                     * Constructs a new ListBackupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListBackupsRequest);

                    /** ListBackupsRequest parent. */
                    public parent: string;

                    /** ListBackupsRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListBackupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListBackupsRequest): google.firestore.admin.v1.ListBackupsRequest;

                    /**
                     * Encodes the specified ListBackupsRequest message. Does not implicitly {@link google.firestore.admin.v1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListBackupsRequest;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListBackupsRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListBackupsRequest;

                    /**
                     * Creates a plain object from a ListBackupsRequest message. Also converts values to other types if specified.
                     * @param message ListBackupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    backups?: (google.firestore.admin.v1.IBackup[]|null);

                    /** ListBackupsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListBackupsResponse. */
                class ListBackupsResponse implements IListBackupsResponse {

                    /**
                     * Constructs a new ListBackupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IListBackupsResponse);

                    /** ListBackupsResponse backups. */
                    public backups: google.firestore.admin.v1.IBackup[];

                    /** ListBackupsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBackupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsResponse instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IListBackupsResponse): google.firestore.admin.v1.ListBackupsResponse;

                    /**
                     * Encodes the specified ListBackupsResponse message. Does not implicitly {@link google.firestore.admin.v1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsResponse message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ListBackupsResponse;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ListBackupsResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ListBackupsResponse;

                    /**
                     * Creates a plain object from a ListBackupsResponse message. Also converts values to other types if specified.
                     * @param message ListBackupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ListBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.firestore.admin.v1.IDeleteBackupRequest);

                    /** DeleteBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IDeleteBackupRequest): google.firestore.admin.v1.DeleteBackupRequest;

                    /**
                     * Encodes the specified DeleteBackupRequest message. Does not implicitly {@link google.firestore.admin.v1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.DeleteBackupRequest;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.DeleteBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.DeleteBackupRequest;

                    /**
                     * Creates a plain object from a DeleteBackupRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.DeleteBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a RestoreDatabaseRequest. */
                interface IRestoreDatabaseRequest {

                    /** RestoreDatabaseRequest parent */
                    parent?: (string|null);

                    /** RestoreDatabaseRequest databaseId */
                    databaseId?: (string|null);

                    /** RestoreDatabaseRequest backup */
                    backup?: (string|null);

                    /** RestoreDatabaseRequest encryptionConfig */
                    encryptionConfig?: (google.firestore.admin.v1.Database.IEncryptionConfig|null);

                    /** RestoreDatabaseRequest tags */
                    tags?: ({ [k: string]: string }|null);
                }

                /** Represents a RestoreDatabaseRequest. */
                class RestoreDatabaseRequest implements IRestoreDatabaseRequest {

                    /**
                     * Constructs a new RestoreDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IRestoreDatabaseRequest);

                    /** RestoreDatabaseRequest parent. */
                    public parent: string;

                    /** RestoreDatabaseRequest databaseId. */
                    public databaseId: string;

                    /** RestoreDatabaseRequest backup. */
                    public backup: string;

                    /** RestoreDatabaseRequest encryptionConfig. */
                    public encryptionConfig?: (google.firestore.admin.v1.Database.IEncryptionConfig|null);

                    /** RestoreDatabaseRequest tags. */
                    public tags: { [k: string]: string };

                    /**
                     * Creates a new RestoreDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreDatabaseRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IRestoreDatabaseRequest): google.firestore.admin.v1.RestoreDatabaseRequest;

                    /**
                     * Encodes the specified RestoreDatabaseRequest message. Does not implicitly {@link google.firestore.admin.v1.RestoreDatabaseRequest.verify|verify} messages.
                     * @param message RestoreDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IRestoreDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreDatabaseRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.RestoreDatabaseRequest.verify|verify} messages.
                     * @param message RestoreDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IRestoreDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.RestoreDatabaseRequest;

                    /**
                     * Decodes a RestoreDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.RestoreDatabaseRequest;

                    /**
                     * Verifies a RestoreDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.RestoreDatabaseRequest;

                    /**
                     * Creates a plain object from a RestoreDatabaseRequest message. Also converts values to other types if specified.
                     * @param message RestoreDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.RestoreDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestoreDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloneDatabaseRequest. */
                interface ICloneDatabaseRequest {

                    /** CloneDatabaseRequest parent */
                    parent?: (string|null);

                    /** CloneDatabaseRequest databaseId */
                    databaseId?: (string|null);

                    /** CloneDatabaseRequest pitrSnapshot */
                    pitrSnapshot?: (google.firestore.admin.v1.IPitrSnapshot|null);

                    /** CloneDatabaseRequest encryptionConfig */
                    encryptionConfig?: (google.firestore.admin.v1.Database.IEncryptionConfig|null);

                    /** CloneDatabaseRequest tags */
                    tags?: ({ [k: string]: string }|null);
                }

                /** Represents a CloneDatabaseRequest. */
                class CloneDatabaseRequest implements ICloneDatabaseRequest {

                    /**
                     * Constructs a new CloneDatabaseRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.ICloneDatabaseRequest);

                    /** CloneDatabaseRequest parent. */
                    public parent: string;

                    /** CloneDatabaseRequest databaseId. */
                    public databaseId: string;

                    /** CloneDatabaseRequest pitrSnapshot. */
                    public pitrSnapshot?: (google.firestore.admin.v1.IPitrSnapshot|null);

                    /** CloneDatabaseRequest encryptionConfig. */
                    public encryptionConfig?: (google.firestore.admin.v1.Database.IEncryptionConfig|null);

                    /** CloneDatabaseRequest tags. */
                    public tags: { [k: string]: string };

                    /**
                     * Creates a new CloneDatabaseRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloneDatabaseRequest instance
                     */
                    public static create(properties?: google.firestore.admin.v1.ICloneDatabaseRequest): google.firestore.admin.v1.CloneDatabaseRequest;

                    /**
                     * Encodes the specified CloneDatabaseRequest message. Does not implicitly {@link google.firestore.admin.v1.CloneDatabaseRequest.verify|verify} messages.
                     * @param message CloneDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.ICloneDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloneDatabaseRequest message, length delimited. Does not implicitly {@link google.firestore.admin.v1.CloneDatabaseRequest.verify|verify} messages.
                     * @param message CloneDatabaseRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.ICloneDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloneDatabaseRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloneDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.CloneDatabaseRequest;

                    /**
                     * Decodes a CloneDatabaseRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloneDatabaseRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.CloneDatabaseRequest;

                    /**
                     * Verifies a CloneDatabaseRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloneDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloneDatabaseRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.CloneDatabaseRequest;

                    /**
                     * Creates a plain object from a CloneDatabaseRequest message. Also converts values to other types if specified.
                     * @param message CloneDatabaseRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.CloneDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloneDatabaseRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloneDatabaseRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an IndexOperationMetadata. */
                interface IIndexOperationMetadata {

                    /** IndexOperationMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** IndexOperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** IndexOperationMetadata index */
                    index?: (string|null);

                    /** IndexOperationMetadata state */
                    state?: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState|null);

                    /** IndexOperationMetadata progressDocuments */
                    progressDocuments?: (google.firestore.admin.v1.IProgress|null);

                    /** IndexOperationMetadata progressBytes */
                    progressBytes?: (google.firestore.admin.v1.IProgress|null);
                }

                /** Represents an IndexOperationMetadata. */
                class IndexOperationMetadata implements IIndexOperationMetadata {

                    /**
                     * Constructs a new IndexOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IIndexOperationMetadata);

                    /** IndexOperationMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** IndexOperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** IndexOperationMetadata index. */
                    public index: string;

                    /** IndexOperationMetadata state. */
                    public state: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState);

                    /** IndexOperationMetadata progressDocuments. */
                    public progressDocuments?: (google.firestore.admin.v1.IProgress|null);

                    /** IndexOperationMetadata progressBytes. */
                    public progressBytes?: (google.firestore.admin.v1.IProgress|null);

                    /**
                     * Creates a new IndexOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IndexOperationMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IIndexOperationMetadata): google.firestore.admin.v1.IndexOperationMetadata;

                    /**
                     * Encodes the specified IndexOperationMetadata message. Does not implicitly {@link google.firestore.admin.v1.IndexOperationMetadata.verify|verify} messages.
                     * @param message IndexOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IIndexOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IndexOperationMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.IndexOperationMetadata.verify|verify} messages.
                     * @param message IndexOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IIndexOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IndexOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IndexOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.IndexOperationMetadata;

                    /**
                     * Decodes an IndexOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IndexOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.IndexOperationMetadata;

                    /**
                     * Verifies an IndexOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IndexOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IndexOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.IndexOperationMetadata;

                    /**
                     * Creates a plain object from an IndexOperationMetadata message. Also converts values to other types if specified.
                     * @param message IndexOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.IndexOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IndexOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for IndexOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FieldOperationMetadata. */
                interface IFieldOperationMetadata {

                    /** FieldOperationMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** FieldOperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** FieldOperationMetadata field */
                    field?: (string|null);

                    /** FieldOperationMetadata indexConfigDeltas */
                    indexConfigDeltas?: (google.firestore.admin.v1.FieldOperationMetadata.IIndexConfigDelta[]|null);

                    /** FieldOperationMetadata state */
                    state?: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState|null);

                    /** FieldOperationMetadata progressDocuments */
                    progressDocuments?: (google.firestore.admin.v1.IProgress|null);

                    /** FieldOperationMetadata progressBytes */
                    progressBytes?: (google.firestore.admin.v1.IProgress|null);

                    /** FieldOperationMetadata ttlConfigDelta */
                    ttlConfigDelta?: (google.firestore.admin.v1.FieldOperationMetadata.ITtlConfigDelta|null);
                }

                /** Represents a FieldOperationMetadata. */
                class FieldOperationMetadata implements IFieldOperationMetadata {

                    /**
                     * Constructs a new FieldOperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IFieldOperationMetadata);

                    /** FieldOperationMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** FieldOperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** FieldOperationMetadata field. */
                    public field: string;

                    /** FieldOperationMetadata indexConfigDeltas. */
                    public indexConfigDeltas: google.firestore.admin.v1.FieldOperationMetadata.IIndexConfigDelta[];

                    /** FieldOperationMetadata state. */
                    public state: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState);

                    /** FieldOperationMetadata progressDocuments. */
                    public progressDocuments?: (google.firestore.admin.v1.IProgress|null);

                    /** FieldOperationMetadata progressBytes. */
                    public progressBytes?: (google.firestore.admin.v1.IProgress|null);

                    /** FieldOperationMetadata ttlConfigDelta. */
                    public ttlConfigDelta?: (google.firestore.admin.v1.FieldOperationMetadata.ITtlConfigDelta|null);

                    /**
                     * Creates a new FieldOperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FieldOperationMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IFieldOperationMetadata): google.firestore.admin.v1.FieldOperationMetadata;

                    /**
                     * Encodes the specified FieldOperationMetadata message. Does not implicitly {@link google.firestore.admin.v1.FieldOperationMetadata.verify|verify} messages.
                     * @param message FieldOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IFieldOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FieldOperationMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.FieldOperationMetadata.verify|verify} messages.
                     * @param message FieldOperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IFieldOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FieldOperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FieldOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.FieldOperationMetadata;

                    /**
                     * Decodes a FieldOperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FieldOperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.FieldOperationMetadata;

                    /**
                     * Verifies a FieldOperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FieldOperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FieldOperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.FieldOperationMetadata;

                    /**
                     * Creates a plain object from a FieldOperationMetadata message. Also converts values to other types if specified.
                     * @param message FieldOperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.FieldOperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FieldOperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FieldOperationMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace FieldOperationMetadata {

                    /** Properties of an IndexConfigDelta. */
                    interface IIndexConfigDelta {

                        /** IndexConfigDelta changeType */
                        changeType?: (google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta.ChangeType|keyof typeof google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta.ChangeType|null);

                        /** IndexConfigDelta index */
                        index?: (google.firestore.admin.v1.IIndex|null);
                    }

                    /** Represents an IndexConfigDelta. */
                    class IndexConfigDelta implements IIndexConfigDelta {

                        /**
                         * Constructs a new IndexConfigDelta.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.FieldOperationMetadata.IIndexConfigDelta);

                        /** IndexConfigDelta changeType. */
                        public changeType: (google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta.ChangeType|keyof typeof google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta.ChangeType);

                        /** IndexConfigDelta index. */
                        public index?: (google.firestore.admin.v1.IIndex|null);

                        /**
                         * Creates a new IndexConfigDelta instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IndexConfigDelta instance
                         */
                        public static create(properties?: google.firestore.admin.v1.FieldOperationMetadata.IIndexConfigDelta): google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta;

                        /**
                         * Encodes the specified IndexConfigDelta message. Does not implicitly {@link google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta.verify|verify} messages.
                         * @param message IndexConfigDelta message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.FieldOperationMetadata.IIndexConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IndexConfigDelta message, length delimited. Does not implicitly {@link google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta.verify|verify} messages.
                         * @param message IndexConfigDelta message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.FieldOperationMetadata.IIndexConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IndexConfigDelta message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IndexConfigDelta
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta;

                        /**
                         * Decodes an IndexConfigDelta message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IndexConfigDelta
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta;

                        /**
                         * Verifies an IndexConfigDelta message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IndexConfigDelta message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IndexConfigDelta
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta;

                        /**
                         * Creates a plain object from an IndexConfigDelta message. Also converts values to other types if specified.
                         * @param message IndexConfigDelta
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.FieldOperationMetadata.IndexConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IndexConfigDelta to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IndexConfigDelta
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace IndexConfigDelta {

                        /** ChangeType enum. */
                        enum ChangeType {
                            CHANGE_TYPE_UNSPECIFIED = 0,
                            ADD = 1,
                            REMOVE = 2
                        }
                    }

                    /** Properties of a TtlConfigDelta. */
                    interface ITtlConfigDelta {

                        /** TtlConfigDelta changeType */
                        changeType?: (google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta.ChangeType|keyof typeof google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta.ChangeType|null);

                        /** TtlConfigDelta expirationOffset */
                        expirationOffset?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a TtlConfigDelta. */
                    class TtlConfigDelta implements ITtlConfigDelta {

                        /**
                         * Constructs a new TtlConfigDelta.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.FieldOperationMetadata.ITtlConfigDelta);

                        /** TtlConfigDelta changeType. */
                        public changeType: (google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta.ChangeType|keyof typeof google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta.ChangeType);

                        /** TtlConfigDelta expirationOffset. */
                        public expirationOffset?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new TtlConfigDelta instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TtlConfigDelta instance
                         */
                        public static create(properties?: google.firestore.admin.v1.FieldOperationMetadata.ITtlConfigDelta): google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta;

                        /**
                         * Encodes the specified TtlConfigDelta message. Does not implicitly {@link google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta.verify|verify} messages.
                         * @param message TtlConfigDelta message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.FieldOperationMetadata.ITtlConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TtlConfigDelta message, length delimited. Does not implicitly {@link google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta.verify|verify} messages.
                         * @param message TtlConfigDelta message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.FieldOperationMetadata.ITtlConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TtlConfigDelta message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TtlConfigDelta
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta;

                        /**
                         * Decodes a TtlConfigDelta message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TtlConfigDelta
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta;

                        /**
                         * Verifies a TtlConfigDelta message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TtlConfigDelta message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TtlConfigDelta
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta;

                        /**
                         * Creates a plain object from a TtlConfigDelta message. Also converts values to other types if specified.
                         * @param message TtlConfigDelta
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.FieldOperationMetadata.TtlConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TtlConfigDelta to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TtlConfigDelta
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TtlConfigDelta {

                        /** ChangeType enum. */
                        enum ChangeType {
                            CHANGE_TYPE_UNSPECIFIED = 0,
                            ADD = 1,
                            REMOVE = 2
                        }
                    }
                }

                /** Properties of an ExportDocumentsMetadata. */
                interface IExportDocumentsMetadata {

                    /** ExportDocumentsMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** ExportDocumentsMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** ExportDocumentsMetadata operationState */
                    operationState?: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState|null);

                    /** ExportDocumentsMetadata progressDocuments */
                    progressDocuments?: (google.firestore.admin.v1.IProgress|null);

                    /** ExportDocumentsMetadata progressBytes */
                    progressBytes?: (google.firestore.admin.v1.IProgress|null);

                    /** ExportDocumentsMetadata collectionIds */
                    collectionIds?: (string[]|null);

                    /** ExportDocumentsMetadata outputUriPrefix */
                    outputUriPrefix?: (string|null);

                    /** ExportDocumentsMetadata namespaceIds */
                    namespaceIds?: (string[]|null);

                    /** ExportDocumentsMetadata snapshotTime */
                    snapshotTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an ExportDocumentsMetadata. */
                class ExportDocumentsMetadata implements IExportDocumentsMetadata {

                    /**
                     * Constructs a new ExportDocumentsMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IExportDocumentsMetadata);

                    /** ExportDocumentsMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** ExportDocumentsMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** ExportDocumentsMetadata operationState. */
                    public operationState: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState);

                    /** ExportDocumentsMetadata progressDocuments. */
                    public progressDocuments?: (google.firestore.admin.v1.IProgress|null);

                    /** ExportDocumentsMetadata progressBytes. */
                    public progressBytes?: (google.firestore.admin.v1.IProgress|null);

                    /** ExportDocumentsMetadata collectionIds. */
                    public collectionIds: string[];

                    /** ExportDocumentsMetadata outputUriPrefix. */
                    public outputUriPrefix: string;

                    /** ExportDocumentsMetadata namespaceIds. */
                    public namespaceIds: string[];

                    /** ExportDocumentsMetadata snapshotTime. */
                    public snapshotTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new ExportDocumentsMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportDocumentsMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IExportDocumentsMetadata): google.firestore.admin.v1.ExportDocumentsMetadata;

                    /**
                     * Encodes the specified ExportDocumentsMetadata message. Does not implicitly {@link google.firestore.admin.v1.ExportDocumentsMetadata.verify|verify} messages.
                     * @param message ExportDocumentsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IExportDocumentsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportDocumentsMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ExportDocumentsMetadata.verify|verify} messages.
                     * @param message ExportDocumentsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IExportDocumentsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportDocumentsMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportDocumentsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ExportDocumentsMetadata;

                    /**
                     * Decodes an ExportDocumentsMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportDocumentsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ExportDocumentsMetadata;

                    /**
                     * Verifies an ExportDocumentsMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportDocumentsMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportDocumentsMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ExportDocumentsMetadata;

                    /**
                     * Creates a plain object from an ExportDocumentsMetadata message. Also converts values to other types if specified.
                     * @param message ExportDocumentsMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ExportDocumentsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportDocumentsMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportDocumentsMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ImportDocumentsMetadata. */
                interface IImportDocumentsMetadata {

                    /** ImportDocumentsMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** ImportDocumentsMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** ImportDocumentsMetadata operationState */
                    operationState?: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState|null);

                    /** ImportDocumentsMetadata progressDocuments */
                    progressDocuments?: (google.firestore.admin.v1.IProgress|null);

                    /** ImportDocumentsMetadata progressBytes */
                    progressBytes?: (google.firestore.admin.v1.IProgress|null);

                    /** ImportDocumentsMetadata collectionIds */
                    collectionIds?: (string[]|null);

                    /** ImportDocumentsMetadata inputUriPrefix */
                    inputUriPrefix?: (string|null);

                    /** ImportDocumentsMetadata namespaceIds */
                    namespaceIds?: (string[]|null);
                }

                /** Represents an ImportDocumentsMetadata. */
                class ImportDocumentsMetadata implements IImportDocumentsMetadata {

                    /**
                     * Constructs a new ImportDocumentsMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IImportDocumentsMetadata);

                    /** ImportDocumentsMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** ImportDocumentsMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** ImportDocumentsMetadata operationState. */
                    public operationState: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState);

                    /** ImportDocumentsMetadata progressDocuments. */
                    public progressDocuments?: (google.firestore.admin.v1.IProgress|null);

                    /** ImportDocumentsMetadata progressBytes. */
                    public progressBytes?: (google.firestore.admin.v1.IProgress|null);

                    /** ImportDocumentsMetadata collectionIds. */
                    public collectionIds: string[];

                    /** ImportDocumentsMetadata inputUriPrefix. */
                    public inputUriPrefix: string;

                    /** ImportDocumentsMetadata namespaceIds. */
                    public namespaceIds: string[];

                    /**
                     * Creates a new ImportDocumentsMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ImportDocumentsMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IImportDocumentsMetadata): google.firestore.admin.v1.ImportDocumentsMetadata;

                    /**
                     * Encodes the specified ImportDocumentsMetadata message. Does not implicitly {@link google.firestore.admin.v1.ImportDocumentsMetadata.verify|verify} messages.
                     * @param message ImportDocumentsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IImportDocumentsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ImportDocumentsMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ImportDocumentsMetadata.verify|verify} messages.
                     * @param message ImportDocumentsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IImportDocumentsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ImportDocumentsMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ImportDocumentsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ImportDocumentsMetadata;

                    /**
                     * Decodes an ImportDocumentsMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ImportDocumentsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ImportDocumentsMetadata;

                    /**
                     * Verifies an ImportDocumentsMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ImportDocumentsMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ImportDocumentsMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ImportDocumentsMetadata;

                    /**
                     * Creates a plain object from an ImportDocumentsMetadata message. Also converts values to other types if specified.
                     * @param message ImportDocumentsMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ImportDocumentsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ImportDocumentsMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ImportDocumentsMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BulkDeleteDocumentsMetadata. */
                interface IBulkDeleteDocumentsMetadata {

                    /** BulkDeleteDocumentsMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** BulkDeleteDocumentsMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** BulkDeleteDocumentsMetadata operationState */
                    operationState?: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState|null);

                    /** BulkDeleteDocumentsMetadata progressDocuments */
                    progressDocuments?: (google.firestore.admin.v1.IProgress|null);

                    /** BulkDeleteDocumentsMetadata progressBytes */
                    progressBytes?: (google.firestore.admin.v1.IProgress|null);

                    /** BulkDeleteDocumentsMetadata collectionIds */
                    collectionIds?: (string[]|null);

                    /** BulkDeleteDocumentsMetadata namespaceIds */
                    namespaceIds?: (string[]|null);

                    /** BulkDeleteDocumentsMetadata snapshotTime */
                    snapshotTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a BulkDeleteDocumentsMetadata. */
                class BulkDeleteDocumentsMetadata implements IBulkDeleteDocumentsMetadata {

                    /**
                     * Constructs a new BulkDeleteDocumentsMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IBulkDeleteDocumentsMetadata);

                    /** BulkDeleteDocumentsMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** BulkDeleteDocumentsMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** BulkDeleteDocumentsMetadata operationState. */
                    public operationState: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState);

                    /** BulkDeleteDocumentsMetadata progressDocuments. */
                    public progressDocuments?: (google.firestore.admin.v1.IProgress|null);

                    /** BulkDeleteDocumentsMetadata progressBytes. */
                    public progressBytes?: (google.firestore.admin.v1.IProgress|null);

                    /** BulkDeleteDocumentsMetadata collectionIds. */
                    public collectionIds: string[];

                    /** BulkDeleteDocumentsMetadata namespaceIds. */
                    public namespaceIds: string[];

                    /** BulkDeleteDocumentsMetadata snapshotTime. */
                    public snapshotTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new BulkDeleteDocumentsMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BulkDeleteDocumentsMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IBulkDeleteDocumentsMetadata): google.firestore.admin.v1.BulkDeleteDocumentsMetadata;

                    /**
                     * Encodes the specified BulkDeleteDocumentsMetadata message. Does not implicitly {@link google.firestore.admin.v1.BulkDeleteDocumentsMetadata.verify|verify} messages.
                     * @param message BulkDeleteDocumentsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IBulkDeleteDocumentsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BulkDeleteDocumentsMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.BulkDeleteDocumentsMetadata.verify|verify} messages.
                     * @param message BulkDeleteDocumentsMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IBulkDeleteDocumentsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BulkDeleteDocumentsMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BulkDeleteDocumentsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.BulkDeleteDocumentsMetadata;

                    /**
                     * Decodes a BulkDeleteDocumentsMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BulkDeleteDocumentsMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.BulkDeleteDocumentsMetadata;

                    /**
                     * Verifies a BulkDeleteDocumentsMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BulkDeleteDocumentsMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BulkDeleteDocumentsMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.BulkDeleteDocumentsMetadata;

                    /**
                     * Creates a plain object from a BulkDeleteDocumentsMetadata message. Also converts values to other types if specified.
                     * @param message BulkDeleteDocumentsMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.BulkDeleteDocumentsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BulkDeleteDocumentsMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BulkDeleteDocumentsMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an ExportDocumentsResponse. */
                interface IExportDocumentsResponse {

                    /** ExportDocumentsResponse outputUriPrefix */
                    outputUriPrefix?: (string|null);
                }

                /** Represents an ExportDocumentsResponse. */
                class ExportDocumentsResponse implements IExportDocumentsResponse {

                    /**
                     * Constructs a new ExportDocumentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IExportDocumentsResponse);

                    /** ExportDocumentsResponse outputUriPrefix. */
                    public outputUriPrefix: string;

                    /**
                     * Creates a new ExportDocumentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportDocumentsResponse instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IExportDocumentsResponse): google.firestore.admin.v1.ExportDocumentsResponse;

                    /**
                     * Encodes the specified ExportDocumentsResponse message. Does not implicitly {@link google.firestore.admin.v1.ExportDocumentsResponse.verify|verify} messages.
                     * @param message ExportDocumentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IExportDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportDocumentsResponse message, length delimited. Does not implicitly {@link google.firestore.admin.v1.ExportDocumentsResponse.verify|verify} messages.
                     * @param message ExportDocumentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IExportDocumentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportDocumentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportDocumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.ExportDocumentsResponse;

                    /**
                     * Decodes an ExportDocumentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportDocumentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.ExportDocumentsResponse;

                    /**
                     * Verifies an ExportDocumentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportDocumentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportDocumentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.ExportDocumentsResponse;

                    /**
                     * Creates a plain object from an ExportDocumentsResponse message. Also converts values to other types if specified.
                     * @param message ExportDocumentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.ExportDocumentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportDocumentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ExportDocumentsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RestoreDatabaseMetadata. */
                interface IRestoreDatabaseMetadata {

                    /** RestoreDatabaseMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** RestoreDatabaseMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** RestoreDatabaseMetadata operationState */
                    operationState?: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState|null);

                    /** RestoreDatabaseMetadata database */
                    database?: (string|null);

                    /** RestoreDatabaseMetadata backup */
                    backup?: (string|null);

                    /** RestoreDatabaseMetadata progressPercentage */
                    progressPercentage?: (google.firestore.admin.v1.IProgress|null);
                }

                /** Represents a RestoreDatabaseMetadata. */
                class RestoreDatabaseMetadata implements IRestoreDatabaseMetadata {

                    /**
                     * Constructs a new RestoreDatabaseMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IRestoreDatabaseMetadata);

                    /** RestoreDatabaseMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** RestoreDatabaseMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** RestoreDatabaseMetadata operationState. */
                    public operationState: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState);

                    /** RestoreDatabaseMetadata database. */
                    public database: string;

                    /** RestoreDatabaseMetadata backup. */
                    public backup: string;

                    /** RestoreDatabaseMetadata progressPercentage. */
                    public progressPercentage?: (google.firestore.admin.v1.IProgress|null);

                    /**
                     * Creates a new RestoreDatabaseMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreDatabaseMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IRestoreDatabaseMetadata): google.firestore.admin.v1.RestoreDatabaseMetadata;

                    /**
                     * Encodes the specified RestoreDatabaseMetadata message. Does not implicitly {@link google.firestore.admin.v1.RestoreDatabaseMetadata.verify|verify} messages.
                     * @param message RestoreDatabaseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IRestoreDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreDatabaseMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.RestoreDatabaseMetadata.verify|verify} messages.
                     * @param message RestoreDatabaseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IRestoreDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreDatabaseMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreDatabaseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.RestoreDatabaseMetadata;

                    /**
                     * Decodes a RestoreDatabaseMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreDatabaseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.RestoreDatabaseMetadata;

                    /**
                     * Verifies a RestoreDatabaseMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreDatabaseMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreDatabaseMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.RestoreDatabaseMetadata;

                    /**
                     * Creates a plain object from a RestoreDatabaseMetadata message. Also converts values to other types if specified.
                     * @param message RestoreDatabaseMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.RestoreDatabaseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreDatabaseMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestoreDatabaseMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CloneDatabaseMetadata. */
                interface ICloneDatabaseMetadata {

                    /** CloneDatabaseMetadata startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** CloneDatabaseMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** CloneDatabaseMetadata operationState */
                    operationState?: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState|null);

                    /** CloneDatabaseMetadata database */
                    database?: (string|null);

                    /** CloneDatabaseMetadata pitrSnapshot */
                    pitrSnapshot?: (google.firestore.admin.v1.IPitrSnapshot|null);

                    /** CloneDatabaseMetadata progressPercentage */
                    progressPercentage?: (google.firestore.admin.v1.IProgress|null);
                }

                /** Represents a CloneDatabaseMetadata. */
                class CloneDatabaseMetadata implements ICloneDatabaseMetadata {

                    /**
                     * Constructs a new CloneDatabaseMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.ICloneDatabaseMetadata);

                    /** CloneDatabaseMetadata startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** CloneDatabaseMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** CloneDatabaseMetadata operationState. */
                    public operationState: (google.firestore.admin.v1.OperationState|keyof typeof google.firestore.admin.v1.OperationState);

                    /** CloneDatabaseMetadata database. */
                    public database: string;

                    /** CloneDatabaseMetadata pitrSnapshot. */
                    public pitrSnapshot?: (google.firestore.admin.v1.IPitrSnapshot|null);

                    /** CloneDatabaseMetadata progressPercentage. */
                    public progressPercentage?: (google.firestore.admin.v1.IProgress|null);

                    /**
                     * Creates a new CloneDatabaseMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloneDatabaseMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.ICloneDatabaseMetadata): google.firestore.admin.v1.CloneDatabaseMetadata;

                    /**
                     * Encodes the specified CloneDatabaseMetadata message. Does not implicitly {@link google.firestore.admin.v1.CloneDatabaseMetadata.verify|verify} messages.
                     * @param message CloneDatabaseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.ICloneDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloneDatabaseMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.CloneDatabaseMetadata.verify|verify} messages.
                     * @param message CloneDatabaseMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.ICloneDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloneDatabaseMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloneDatabaseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.CloneDatabaseMetadata;

                    /**
                     * Decodes a CloneDatabaseMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloneDatabaseMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.CloneDatabaseMetadata;

                    /**
                     * Verifies a CloneDatabaseMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloneDatabaseMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloneDatabaseMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.CloneDatabaseMetadata;

                    /**
                     * Creates a plain object from a CloneDatabaseMetadata message. Also converts values to other types if specified.
                     * @param message CloneDatabaseMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.CloneDatabaseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloneDatabaseMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CloneDatabaseMetadata
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Progress. */
                interface IProgress {

                    /** Progress estimatedWork */
                    estimatedWork?: (number|Long|string|null);

                    /** Progress completedWork */
                    completedWork?: (number|Long|string|null);
                }

                /** Represents a Progress. */
                class Progress implements IProgress {

                    /**
                     * Constructs a new Progress.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IProgress);

                    /** Progress estimatedWork. */
                    public estimatedWork: (number|Long|string);

                    /** Progress completedWork. */
                    public completedWork: (number|Long|string);

                    /**
                     * Creates a new Progress instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Progress instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IProgress): google.firestore.admin.v1.Progress;

                    /**
                     * Encodes the specified Progress message. Does not implicitly {@link google.firestore.admin.v1.Progress.verify|verify} messages.
                     * @param message Progress message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Progress message, length delimited. Does not implicitly {@link google.firestore.admin.v1.Progress.verify|verify} messages.
                     * @param message Progress message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Progress message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Progress
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.Progress;

                    /**
                     * Decodes a Progress message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Progress
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.Progress;

                    /**
                     * Verifies a Progress message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Progress message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Progress
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.Progress;

                    /**
                     * Creates a plain object from a Progress message. Also converts values to other types if specified.
                     * @param message Progress
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.Progress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Progress to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Progress
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** OperationState enum. */
                enum OperationState {
                    OPERATION_STATE_UNSPECIFIED = 0,
                    INITIALIZING = 1,
                    PROCESSING = 2,
                    CANCELLING = 3,
                    FINALIZING = 4,
                    SUCCESSFUL = 5,
                    FAILED = 6,
                    CANCELLED = 7
                }

                /** Properties of a PitrSnapshot. */
                interface IPitrSnapshot {

                    /** PitrSnapshot database */
                    database?: (string|null);

                    /** PitrSnapshot databaseUid */
                    databaseUid?: (Uint8Array|Buffer|string|null);

                    /** PitrSnapshot snapshotTime */
                    snapshotTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a PitrSnapshot. */
                class PitrSnapshot implements IPitrSnapshot {

                    /**
                     * Constructs a new PitrSnapshot.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IPitrSnapshot);

                    /** PitrSnapshot database. */
                    public database: string;

                    /** PitrSnapshot databaseUid. */
                    public databaseUid: (Uint8Array|Buffer|string);

                    /** PitrSnapshot snapshotTime. */
                    public snapshotTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new PitrSnapshot instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PitrSnapshot instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IPitrSnapshot): google.firestore.admin.v1.PitrSnapshot;

                    /**
                     * Encodes the specified PitrSnapshot message. Does not implicitly {@link google.firestore.admin.v1.PitrSnapshot.verify|verify} messages.
                     * @param message PitrSnapshot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IPitrSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PitrSnapshot message, length delimited. Does not implicitly {@link google.firestore.admin.v1.PitrSnapshot.verify|verify} messages.
                     * @param message PitrSnapshot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IPitrSnapshot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PitrSnapshot message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PitrSnapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.PitrSnapshot;

                    /**
                     * Decodes a PitrSnapshot message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PitrSnapshot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.PitrSnapshot;

                    /**
                     * Verifies a PitrSnapshot message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PitrSnapshot message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PitrSnapshot
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.PitrSnapshot;

                    /**
                     * Creates a plain object from a PitrSnapshot message. Also converts values to other types if specified.
                     * @param message PitrSnapshot
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.PitrSnapshot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PitrSnapshot to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for PitrSnapshot
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BackupSchedule. */
                interface IBackupSchedule {

                    /** BackupSchedule name */
                    name?: (string|null);

                    /** BackupSchedule createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** BackupSchedule updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** BackupSchedule retention */
                    retention?: (google.protobuf.IDuration|null);

                    /** BackupSchedule dailyRecurrence */
                    dailyRecurrence?: (google.firestore.admin.v1.IDailyRecurrence|null);

                    /** BackupSchedule weeklyRecurrence */
                    weeklyRecurrence?: (google.firestore.admin.v1.IWeeklyRecurrence|null);
                }

                /** Represents a BackupSchedule. */
                class BackupSchedule implements IBackupSchedule {

                    /**
                     * Constructs a new BackupSchedule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IBackupSchedule);

                    /** BackupSchedule name. */
                    public name: string;

                    /** BackupSchedule createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** BackupSchedule updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** BackupSchedule retention. */
                    public retention?: (google.protobuf.IDuration|null);

                    /** BackupSchedule dailyRecurrence. */
                    public dailyRecurrence?: (google.firestore.admin.v1.IDailyRecurrence|null);

                    /** BackupSchedule weeklyRecurrence. */
                    public weeklyRecurrence?: (google.firestore.admin.v1.IWeeklyRecurrence|null);

                    /** BackupSchedule recurrence. */
                    public recurrence?: ("dailyRecurrence"|"weeklyRecurrence");

                    /**
                     * Creates a new BackupSchedule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupSchedule instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IBackupSchedule): google.firestore.admin.v1.BackupSchedule;

                    /**
                     * Encodes the specified BackupSchedule message. Does not implicitly {@link google.firestore.admin.v1.BackupSchedule.verify|verify} messages.
                     * @param message BackupSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IBackupSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupSchedule message, length delimited. Does not implicitly {@link google.firestore.admin.v1.BackupSchedule.verify|verify} messages.
                     * @param message BackupSchedule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IBackupSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupSchedule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.BackupSchedule;

                    /**
                     * Decodes a BackupSchedule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupSchedule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.BackupSchedule;

                    /**
                     * Verifies a BackupSchedule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupSchedule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupSchedule
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.BackupSchedule;

                    /**
                     * Creates a plain object from a BackupSchedule message. Also converts values to other types if specified.
                     * @param message BackupSchedule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.BackupSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupSchedule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BackupSchedule
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DailyRecurrence. */
                interface IDailyRecurrence {
                }

                /** Represents a DailyRecurrence. */
                class DailyRecurrence implements IDailyRecurrence {

                    /**
                     * Constructs a new DailyRecurrence.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IDailyRecurrence);

                    /**
                     * Creates a new DailyRecurrence instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DailyRecurrence instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IDailyRecurrence): google.firestore.admin.v1.DailyRecurrence;

                    /**
                     * Encodes the specified DailyRecurrence message. Does not implicitly {@link google.firestore.admin.v1.DailyRecurrence.verify|verify} messages.
                     * @param message DailyRecurrence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IDailyRecurrence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DailyRecurrence message, length delimited. Does not implicitly {@link google.firestore.admin.v1.DailyRecurrence.verify|verify} messages.
                     * @param message DailyRecurrence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IDailyRecurrence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DailyRecurrence message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DailyRecurrence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.DailyRecurrence;

                    /**
                     * Decodes a DailyRecurrence message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DailyRecurrence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.DailyRecurrence;

                    /**
                     * Verifies a DailyRecurrence message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DailyRecurrence message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DailyRecurrence
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.DailyRecurrence;

                    /**
                     * Creates a plain object from a DailyRecurrence message. Also converts values to other types if specified.
                     * @param message DailyRecurrence
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.DailyRecurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DailyRecurrence to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DailyRecurrence
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a WeeklyRecurrence. */
                interface IWeeklyRecurrence {

                    /** WeeklyRecurrence day */
                    day?: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek|null);
                }

                /** Represents a WeeklyRecurrence. */
                class WeeklyRecurrence implements IWeeklyRecurrence {

                    /**
                     * Constructs a new WeeklyRecurrence.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IWeeklyRecurrence);

                    /** WeeklyRecurrence day. */
                    public day: (google.type.DayOfWeek|keyof typeof google.type.DayOfWeek);

                    /**
                     * Creates a new WeeklyRecurrence instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns WeeklyRecurrence instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IWeeklyRecurrence): google.firestore.admin.v1.WeeklyRecurrence;

                    /**
                     * Encodes the specified WeeklyRecurrence message. Does not implicitly {@link google.firestore.admin.v1.WeeklyRecurrence.verify|verify} messages.
                     * @param message WeeklyRecurrence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IWeeklyRecurrence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified WeeklyRecurrence message, length delimited. Does not implicitly {@link google.firestore.admin.v1.WeeklyRecurrence.verify|verify} messages.
                     * @param message WeeklyRecurrence message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IWeeklyRecurrence, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a WeeklyRecurrence message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns WeeklyRecurrence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.WeeklyRecurrence;

                    /**
                     * Decodes a WeeklyRecurrence message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns WeeklyRecurrence
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.WeeklyRecurrence;

                    /**
                     * Verifies a WeeklyRecurrence message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a WeeklyRecurrence message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns WeeklyRecurrence
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.WeeklyRecurrence;

                    /**
                     * Creates a plain object from a WeeklyRecurrence message. Also converts values to other types if specified.
                     * @param message WeeklyRecurrence
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.WeeklyRecurrence, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this WeeklyRecurrence to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for WeeklyRecurrence
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a UserCreds. */
                interface IUserCreds {

                    /** UserCreds name */
                    name?: (string|null);

                    /** UserCreds createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** UserCreds updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** UserCreds state */
                    state?: (google.firestore.admin.v1.UserCreds.State|keyof typeof google.firestore.admin.v1.UserCreds.State|null);

                    /** UserCreds securePassword */
                    securePassword?: (string|null);

                    /** UserCreds resourceIdentity */
                    resourceIdentity?: (google.firestore.admin.v1.UserCreds.IResourceIdentity|null);
                }

                /** Represents a UserCreds. */
                class UserCreds implements IUserCreds {

                    /**
                     * Constructs a new UserCreds.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.IUserCreds);

                    /** UserCreds name. */
                    public name: string;

                    /** UserCreds createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** UserCreds updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** UserCreds state. */
                    public state: (google.firestore.admin.v1.UserCreds.State|keyof typeof google.firestore.admin.v1.UserCreds.State);

                    /** UserCreds securePassword. */
                    public securePassword: string;

                    /** UserCreds resourceIdentity. */
                    public resourceIdentity?: (google.firestore.admin.v1.UserCreds.IResourceIdentity|null);

                    /** UserCreds UserCredsIdentity. */
                    public UserCredsIdentity?: "resourceIdentity";

                    /**
                     * Creates a new UserCreds instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserCreds instance
                     */
                    public static create(properties?: google.firestore.admin.v1.IUserCreds): google.firestore.admin.v1.UserCreds;

                    /**
                     * Encodes the specified UserCreds message. Does not implicitly {@link google.firestore.admin.v1.UserCreds.verify|verify} messages.
                     * @param message UserCreds message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.IUserCreds, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserCreds message, length delimited. Does not implicitly {@link google.firestore.admin.v1.UserCreds.verify|verify} messages.
                     * @param message UserCreds message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.IUserCreds, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserCreds message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserCreds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.UserCreds;

                    /**
                     * Decodes a UserCreds message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserCreds
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.UserCreds;

                    /**
                     * Verifies a UserCreds message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserCreds message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserCreds
                     */
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.UserCreds;

                    /**
                     * Creates a plain object from a UserCreds message. Also converts values to other types if specified.
                     * @param message UserCreds
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.UserCreds, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserCreds to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UserCreds
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace UserCreds {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }

                    /** Properties of a ResourceIdentity. */
                    interface IResourceIdentity {

                        /** ResourceIdentity principal */
                        principal?: (string|null);
                    }

                    /** Represents a ResourceIdentity. */
                    class ResourceIdentity implements IResourceIdentity {

                        /**
                         * Constructs a new ResourceIdentity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.firestore.admin.v1.UserCreds.IResourceIdentity);

                        /** ResourceIdentity principal. */
                        public principal: string;

                        /**
                         * Creates a new ResourceIdentity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceIdentity instance
                         */
                        public static create(properties?: google.firestore.admin.v1.UserCreds.IResourceIdentity): google.firestore.admin.v1.UserCreds.ResourceIdentity;

                        /**
                         * Encodes the specified ResourceIdentity message. Does not implicitly {@link google.firestore.admin.v1.UserCreds.ResourceIdentity.verify|verify} messages.
                         * @param message ResourceIdentity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.firestore.admin.v1.UserCreds.IResourceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceIdentity message, length delimited. Does not implicitly {@link google.firestore.admin.v1.UserCreds.ResourceIdentity.verify|verify} messages.
                         * @param message ResourceIdentity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.firestore.admin.v1.UserCreds.IResourceIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceIdentity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceIdentity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.UserCreds.ResourceIdentity;

                        /**
                         * Decodes a ResourceIdentity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceIdentity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.UserCreds.ResourceIdentity;

                        /**
                         * Verifies a ResourceIdentity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceIdentity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceIdentity
                         */
                        public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.UserCreds.ResourceIdentity;

                        /**
                         * Creates a plain object from a ResourceIdentity message. Also converts values to other types if specified.
                         * @param message ResourceIdentity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.firestore.admin.v1.UserCreds.ResourceIdentity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceIdentity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ResourceIdentity
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a LocationMetadata. */
                interface ILocationMetadata {
                }

                /** Represents a LocationMetadata. */
                class LocationMetadata implements ILocationMetadata {

                    /**
                     * Constructs a new LocationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.firestore.admin.v1.ILocationMetadata);

                    /**
                     * Creates a new LocationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LocationMetadata instance
                     */
                    public static create(properties?: google.firestore.admin.v1.ILocationMetadata): google.firestore.admin.v1.LocationMetadata;

                    /**
                     * Encodes the specified LocationMetadata message. Does not implicitly {@link google.firestore.admin.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.firestore.admin.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LocationMetadata message, length delimited. Does not implicitly {@link google.firestore.admin.v1.LocationMetadata.verify|verify} messages.
                     * @param message LocationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.firestore.admin.v1.ILocationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.firestore.admin.v1.LocationMetadata;

                    /**
                     * Decodes a LocationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LocationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.firestore.admin.v1.LocationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.firestore.admin.v1.LocationMetadata;

                    /**
                     * Creates a plain object from a LocationMetadata message. Also converts values to other types if specified.
                     * @param message LocationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.firestore.admin.v1.LocationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

            /** CommonLanguageSettings selectiveGapicGeneration */
            selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);
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

            /** CommonLanguageSettings selectiveGapicGeneration. */
            public selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);

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

            /** PythonSettings experimentalFeatures */
            experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);
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

            /** PythonSettings experimentalFeatures. */
            public experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);

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

        namespace PythonSettings {

            /** Properties of an ExperimentalFeatures. */
            interface IExperimentalFeatures {

                /** ExperimentalFeatures restAsyncIoEnabled */
                restAsyncIoEnabled?: (boolean|null);

                /** ExperimentalFeatures protobufPythonicTypesEnabled */
                protobufPythonicTypesEnabled?: (boolean|null);

                /** ExperimentalFeatures unversionedPackageDisabled */
                unversionedPackageDisabled?: (boolean|null);
            }

            /** Represents an ExperimentalFeatures. */
            class ExperimentalFeatures implements IExperimentalFeatures {

                /**
                 * Constructs a new ExperimentalFeatures.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.PythonSettings.IExperimentalFeatures);

                /** ExperimentalFeatures restAsyncIoEnabled. */
                public restAsyncIoEnabled: boolean;

                /** ExperimentalFeatures protobufPythonicTypesEnabled. */
                public protobufPythonicTypesEnabled: boolean;

                /** ExperimentalFeatures unversionedPackageDisabled. */
                public unversionedPackageDisabled: boolean;

                /**
                 * Creates a new ExperimentalFeatures instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExperimentalFeatures instance
                 */
                public static create(properties?: google.api.PythonSettings.IExperimentalFeatures): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Encodes the specified ExperimentalFeatures message. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExperimentalFeatures message, length delimited. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Verifies an ExperimentalFeatures message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExperimentalFeatures message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExperimentalFeatures
                 */
                public static fromObject(object: { [k: string]: any }): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Creates a plain object from an ExperimentalFeatures message. Also converts values to other types if specified.
                 * @param message ExperimentalFeatures
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.PythonSettings.ExperimentalFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExperimentalFeatures to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExperimentalFeatures
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
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

            /** GoSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);
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

            /** GoSettings renamedServices. */
            public renamedServices: { [k: string]: string };

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

        /** Properties of a SelectiveGapicGeneration. */
        interface ISelectiveGapicGeneration {

            /** SelectiveGapicGeneration methods */
            methods?: (string[]|null);

            /** SelectiveGapicGeneration generateOmittedAsInternal */
            generateOmittedAsInternal?: (boolean|null);
        }

        /** Represents a SelectiveGapicGeneration. */
        class SelectiveGapicGeneration implements ISelectiveGapicGeneration {

            /**
             * Constructs a new SelectiveGapicGeneration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISelectiveGapicGeneration);

            /** SelectiveGapicGeneration methods. */
            public methods: string[];

            /** SelectiveGapicGeneration generateOmittedAsInternal. */
            public generateOmittedAsInternal: boolean;

            /**
             * Creates a new SelectiveGapicGeneration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectiveGapicGeneration instance
             */
            public static create(properties?: google.api.ISelectiveGapicGeneration): google.api.SelectiveGapicGeneration;

            /**
             * Encodes the specified SelectiveGapicGeneration message. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectiveGapicGeneration message, length delimited. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SelectiveGapicGeneration;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SelectiveGapicGeneration;

            /**
             * Verifies a SelectiveGapicGeneration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectiveGapicGeneration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectiveGapicGeneration
             */
            public static fromObject(object: { [k: string]: any }): google.api.SelectiveGapicGeneration;

            /**
             * Creates a plain object from a SelectiveGapicGeneration message. Also converts values to other types if specified.
             * @param message SelectiveGapicGeneration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SelectiveGapicGeneration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectiveGapicGeneration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectiveGapicGeneration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
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

        /** Properties of a RoutingRule. */
        interface IRoutingRule {

            /** RoutingRule routingParameters */
            routingParameters?: (google.api.IRoutingParameter[]|null);
        }

        /** Represents a RoutingRule. */
        class RoutingRule implements IRoutingRule {

            /**
             * Constructs a new RoutingRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRoutingRule);

            /** RoutingRule routingParameters. */
            public routingParameters: google.api.IRoutingParameter[];

            /**
             * Creates a new RoutingRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoutingRule instance
             */
            public static create(properties?: google.api.IRoutingRule): google.api.RoutingRule;

            /**
             * Encodes the specified RoutingRule message. Does not implicitly {@link google.api.RoutingRule.verify|verify} messages.
             * @param message RoutingRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRoutingRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoutingRule message, length delimited. Does not implicitly {@link google.api.RoutingRule.verify|verify} messages.
             * @param message RoutingRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRoutingRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoutingRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoutingRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RoutingRule;

            /**
             * Decodes a RoutingRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoutingRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RoutingRule;

            /**
             * Verifies a RoutingRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoutingRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoutingRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.RoutingRule;

            /**
             * Creates a plain object from a RoutingRule message. Also converts values to other types if specified.
             * @param message RoutingRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RoutingRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoutingRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RoutingRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RoutingParameter. */
        interface IRoutingParameter {

            /** RoutingParameter field */
            field?: (string|null);

            /** RoutingParameter pathTemplate */
            pathTemplate?: (string|null);
        }

        /** Represents a RoutingParameter. */
        class RoutingParameter implements IRoutingParameter {

            /**
             * Constructs a new RoutingParameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRoutingParameter);

            /** RoutingParameter field. */
            public field: string;

            /** RoutingParameter pathTemplate. */
            public pathTemplate: string;

            /**
             * Creates a new RoutingParameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoutingParameter instance
             */
            public static create(properties?: google.api.IRoutingParameter): google.api.RoutingParameter;

            /**
             * Encodes the specified RoutingParameter message. Does not implicitly {@link google.api.RoutingParameter.verify|verify} messages.
             * @param message RoutingParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRoutingParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoutingParameter message, length delimited. Does not implicitly {@link google.api.RoutingParameter.verify|verify} messages.
             * @param message RoutingParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRoutingParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoutingParameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoutingParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RoutingParameter;

            /**
             * Decodes a RoutingParameter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoutingParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RoutingParameter;

            /**
             * Verifies a RoutingParameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoutingParameter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoutingParameter
             */
            public static fromObject(object: { [k: string]: any }): google.api.RoutingParameter;

            /**
             * Creates a plain object from a RoutingParameter message. Also converts values to other types if specified.
             * @param message RoutingParameter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RoutingParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoutingParameter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RoutingParameter
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
            EDITION_LEGACY = 900,
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

            /** FileDescriptorProto optionDependency */
            optionDependency?: (string[]|null);

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

            /** FileDescriptorProto optionDependency. */
            public optionDependency: string[];

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

            /** DescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
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

            /** DescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

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

            /** EnumDescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
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

            /** EnumDescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

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

            /** FieldOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** FieldOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport editionIntroduced */
                editionIntroduced?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport editionDeprecated */
                editionDeprecated?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport deprecationWarning */
                deprecationWarning?: (string|null);

                /** FeatureSupport editionRemoved */
                editionRemoved?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport editionIntroduced. */
                public editionIntroduced: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport editionDeprecated. */
                public editionDeprecated: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport deprecationWarning. */
                public deprecationWarning: string;

                /** FeatureSupport editionRemoved. */
                public editionRemoved: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
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

            /** EnumValueOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** EnumValueOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

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

            /** MethodOptions .google.api.routing */
            ".google.api.routing"?: (google.api.IRoutingRule|null);

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

            /** FeatureSet enforceNamingStyle */
            enforceNamingStyle?: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle|null);

            /** FeatureSet defaultSymbolVisibility */
            defaultSymbolVisibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);
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

            /** FeatureSet enforceNamingStyle. */
            public enforceNamingStyle: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle);

            /** FeatureSet defaultSymbolVisibility. */
            public defaultSymbolVisibility: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility);

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

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2
            }

            /** Properties of a VisibilityFeature. */
            interface IVisibilityFeature {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature implements IVisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IVisibilityFeature);

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IVisibilityFeature): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisibilityFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisibilityFeature {

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,
                    EXPORT_ALL = 1,
                    EXPORT_TOP_LEVEL = 2,
                    LOCAL_ALL = 3,
                    STRICT = 4
                }
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

                /** FeatureSetEditionDefault overridableFeatures */
                overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures */
                fixedFeatures?: (google.protobuf.IFeatureSet|null);
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

                /** FeatureSetEditionDefault overridableFeatures. */
                public overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures. */
                public fixedFeatures?: (google.protobuf.IFeatureSet|null);

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

        /** SymbolVisibility enum. */
        enum SymbolVisibility {
            VISIBILITY_UNSET = 0,
            VISIBILITY_LOCAL = 1,
            VISIBILITY_EXPORT = 2
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
