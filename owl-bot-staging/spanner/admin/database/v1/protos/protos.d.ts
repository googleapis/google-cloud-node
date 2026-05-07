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

    /** Namespace spanner. */
    namespace spanner {

        /** Namespace admin. */
        namespace admin {

            /** Namespace database. */
            namespace database {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a Backup. */
                    interface IBackup {

                        /** Backup database */
                        database?: (string|null);

                        /** Backup versionTime */
                        versionTime?: (google.protobuf.ITimestamp|null);

                        /** Backup expireTime */
                        expireTime?: (google.protobuf.ITimestamp|null);

                        /** Backup name */
                        name?: (string|null);

                        /** Backup createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Backup sizeBytes */
                        sizeBytes?: (number|Long|string|null);

                        /** Backup freeableSizeBytes */
                        freeableSizeBytes?: (number|Long|string|null);

                        /** Backup exclusiveSizeBytes */
                        exclusiveSizeBytes?: (number|Long|string|null);

                        /** Backup state */
                        state?: (google.spanner.admin.database.v1.Backup.State|keyof typeof google.spanner.admin.database.v1.Backup.State|null);

                        /** Backup referencingDatabases */
                        referencingDatabases?: (string[]|null);

                        /** Backup encryptionInfo */
                        encryptionInfo?: (google.spanner.admin.database.v1.IEncryptionInfo|null);

                        /** Backup encryptionInformation */
                        encryptionInformation?: (google.spanner.admin.database.v1.IEncryptionInfo[]|null);

                        /** Backup databaseDialect */
                        databaseDialect?: (google.spanner.admin.database.v1.DatabaseDialect|keyof typeof google.spanner.admin.database.v1.DatabaseDialect|null);

                        /** Backup referencingBackups */
                        referencingBackups?: (string[]|null);

                        /** Backup maxExpireTime */
                        maxExpireTime?: (google.protobuf.ITimestamp|null);

                        /** Backup backupSchedules */
                        backupSchedules?: (string[]|null);

                        /** Backup incrementalBackupChainId */
                        incrementalBackupChainId?: (string|null);

                        /** Backup oldestVersionTime */
                        oldestVersionTime?: (google.protobuf.ITimestamp|null);

                        /** Backup instancePartitions */
                        instancePartitions?: (google.spanner.admin.database.v1.IBackupInstancePartition[]|null);
                    }

                    /** Represents a Backup. */
                    class Backup implements IBackup {

                        /**
                         * Constructs a new Backup.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IBackup);

                        /** Backup database. */
                        public database: string;

                        /** Backup versionTime. */
                        public versionTime?: (google.protobuf.ITimestamp|null);

                        /** Backup expireTime. */
                        public expireTime?: (google.protobuf.ITimestamp|null);

                        /** Backup name. */
                        public name: string;

                        /** Backup createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Backup sizeBytes. */
                        public sizeBytes: (number|Long|string);

                        /** Backup freeableSizeBytes. */
                        public freeableSizeBytes: (number|Long|string);

                        /** Backup exclusiveSizeBytes. */
                        public exclusiveSizeBytes: (number|Long|string);

                        /** Backup state. */
                        public state: (google.spanner.admin.database.v1.Backup.State|keyof typeof google.spanner.admin.database.v1.Backup.State);

                        /** Backup referencingDatabases. */
                        public referencingDatabases: string[];

                        /** Backup encryptionInfo. */
                        public encryptionInfo?: (google.spanner.admin.database.v1.IEncryptionInfo|null);

                        /** Backup encryptionInformation. */
                        public encryptionInformation: google.spanner.admin.database.v1.IEncryptionInfo[];

                        /** Backup databaseDialect. */
                        public databaseDialect: (google.spanner.admin.database.v1.DatabaseDialect|keyof typeof google.spanner.admin.database.v1.DatabaseDialect);

                        /** Backup referencingBackups. */
                        public referencingBackups: string[];

                        /** Backup maxExpireTime. */
                        public maxExpireTime?: (google.protobuf.ITimestamp|null);

                        /** Backup backupSchedules. */
                        public backupSchedules: string[];

                        /** Backup incrementalBackupChainId. */
                        public incrementalBackupChainId: string;

                        /** Backup oldestVersionTime. */
                        public oldestVersionTime?: (google.protobuf.ITimestamp|null);

                        /** Backup instancePartitions. */
                        public instancePartitions: google.spanner.admin.database.v1.IBackupInstancePartition[];

                        /**
                         * Creates a new Backup instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Backup instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IBackup): google.spanner.admin.database.v1.Backup;

                        /**
                         * Encodes the specified Backup message. Does not implicitly {@link google.spanner.admin.database.v1.Backup.verify|verify} messages.
                         * @param message Backup message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Backup message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.Backup.verify|verify} messages.
                         * @param message Backup message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Backup message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Backup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.Backup;

                        /**
                         * Decodes a Backup message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Backup
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.Backup;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.Backup;

                        /**
                         * Creates a plain object from a Backup message. Also converts values to other types if specified.
                         * @param message Backup
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                            READY = 2
                        }
                    }

                    /** Properties of a CreateBackupRequest. */
                    interface ICreateBackupRequest {

                        /** CreateBackupRequest parent */
                        parent?: (string|null);

                        /** CreateBackupRequest backupId */
                        backupId?: (string|null);

                        /** CreateBackupRequest backup */
                        backup?: (google.spanner.admin.database.v1.IBackup|null);

                        /** CreateBackupRequest encryptionConfig */
                        encryptionConfig?: (google.spanner.admin.database.v1.ICreateBackupEncryptionConfig|null);
                    }

                    /** Represents a CreateBackupRequest. */
                    class CreateBackupRequest implements ICreateBackupRequest {

                        /**
                         * Constructs a new CreateBackupRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ICreateBackupRequest);

                        /** CreateBackupRequest parent. */
                        public parent: string;

                        /** CreateBackupRequest backupId. */
                        public backupId: string;

                        /** CreateBackupRequest backup. */
                        public backup?: (google.spanner.admin.database.v1.IBackup|null);

                        /** CreateBackupRequest encryptionConfig. */
                        public encryptionConfig?: (google.spanner.admin.database.v1.ICreateBackupEncryptionConfig|null);

                        /**
                         * Creates a new CreateBackupRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateBackupRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ICreateBackupRequest): google.spanner.admin.database.v1.CreateBackupRequest;

                        /**
                         * Encodes the specified CreateBackupRequest message. Does not implicitly {@link google.spanner.admin.database.v1.CreateBackupRequest.verify|verify} messages.
                         * @param message CreateBackupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateBackupRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.CreateBackupRequest.verify|verify} messages.
                         * @param message CreateBackupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateBackupRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateBackupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.CreateBackupRequest;

                        /**
                         * Decodes a CreateBackupRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateBackupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.CreateBackupRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.CreateBackupRequest;

                        /**
                         * Creates a plain object from a CreateBackupRequest message. Also converts values to other types if specified.
                         * @param message CreateBackupRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.CreateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a CreateBackupMetadata. */
                    interface ICreateBackupMetadata {

                        /** CreateBackupMetadata name */
                        name?: (string|null);

                        /** CreateBackupMetadata database */
                        database?: (string|null);

                        /** CreateBackupMetadata progress */
                        progress?: (google.spanner.admin.database.v1.IOperationProgress|null);

                        /** CreateBackupMetadata cancelTime */
                        cancelTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a CreateBackupMetadata. */
                    class CreateBackupMetadata implements ICreateBackupMetadata {

                        /**
                         * Constructs a new CreateBackupMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ICreateBackupMetadata);

                        /** CreateBackupMetadata name. */
                        public name: string;

                        /** CreateBackupMetadata database. */
                        public database: string;

                        /** CreateBackupMetadata progress. */
                        public progress?: (google.spanner.admin.database.v1.IOperationProgress|null);

                        /** CreateBackupMetadata cancelTime. */
                        public cancelTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new CreateBackupMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateBackupMetadata instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ICreateBackupMetadata): google.spanner.admin.database.v1.CreateBackupMetadata;

                        /**
                         * Encodes the specified CreateBackupMetadata message. Does not implicitly {@link google.spanner.admin.database.v1.CreateBackupMetadata.verify|verify} messages.
                         * @param message CreateBackupMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ICreateBackupMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateBackupMetadata message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.CreateBackupMetadata.verify|verify} messages.
                         * @param message CreateBackupMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ICreateBackupMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateBackupMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateBackupMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.CreateBackupMetadata;

                        /**
                         * Decodes a CreateBackupMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateBackupMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.CreateBackupMetadata;

                        /**
                         * Verifies a CreateBackupMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateBackupMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateBackupMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.CreateBackupMetadata;

                        /**
                         * Creates a plain object from a CreateBackupMetadata message. Also converts values to other types if specified.
                         * @param message CreateBackupMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.CreateBackupMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateBackupMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateBackupMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CopyBackupRequest. */
                    interface ICopyBackupRequest {

                        /** CopyBackupRequest parent */
                        parent?: (string|null);

                        /** CopyBackupRequest backupId */
                        backupId?: (string|null);

                        /** CopyBackupRequest sourceBackup */
                        sourceBackup?: (string|null);

                        /** CopyBackupRequest expireTime */
                        expireTime?: (google.protobuf.ITimestamp|null);

                        /** CopyBackupRequest encryptionConfig */
                        encryptionConfig?: (google.spanner.admin.database.v1.ICopyBackupEncryptionConfig|null);
                    }

                    /** Represents a CopyBackupRequest. */
                    class CopyBackupRequest implements ICopyBackupRequest {

                        /**
                         * Constructs a new CopyBackupRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ICopyBackupRequest);

                        /** CopyBackupRequest parent. */
                        public parent: string;

                        /** CopyBackupRequest backupId. */
                        public backupId: string;

                        /** CopyBackupRequest sourceBackup. */
                        public sourceBackup: string;

                        /** CopyBackupRequest expireTime. */
                        public expireTime?: (google.protobuf.ITimestamp|null);

                        /** CopyBackupRequest encryptionConfig. */
                        public encryptionConfig?: (google.spanner.admin.database.v1.ICopyBackupEncryptionConfig|null);

                        /**
                         * Creates a new CopyBackupRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CopyBackupRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ICopyBackupRequest): google.spanner.admin.database.v1.CopyBackupRequest;

                        /**
                         * Encodes the specified CopyBackupRequest message. Does not implicitly {@link google.spanner.admin.database.v1.CopyBackupRequest.verify|verify} messages.
                         * @param message CopyBackupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ICopyBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CopyBackupRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.CopyBackupRequest.verify|verify} messages.
                         * @param message CopyBackupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ICopyBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CopyBackupRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CopyBackupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.CopyBackupRequest;

                        /**
                         * Decodes a CopyBackupRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CopyBackupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.CopyBackupRequest;

                        /**
                         * Verifies a CopyBackupRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CopyBackupRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CopyBackupRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.CopyBackupRequest;

                        /**
                         * Creates a plain object from a CopyBackupRequest message. Also converts values to other types if specified.
                         * @param message CopyBackupRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.CopyBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CopyBackupRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CopyBackupRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CopyBackupMetadata. */
                    interface ICopyBackupMetadata {

                        /** CopyBackupMetadata name */
                        name?: (string|null);

                        /** CopyBackupMetadata sourceBackup */
                        sourceBackup?: (string|null);

                        /** CopyBackupMetadata progress */
                        progress?: (google.spanner.admin.database.v1.IOperationProgress|null);

                        /** CopyBackupMetadata cancelTime */
                        cancelTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a CopyBackupMetadata. */
                    class CopyBackupMetadata implements ICopyBackupMetadata {

                        /**
                         * Constructs a new CopyBackupMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ICopyBackupMetadata);

                        /** CopyBackupMetadata name. */
                        public name: string;

                        /** CopyBackupMetadata sourceBackup. */
                        public sourceBackup: string;

                        /** CopyBackupMetadata progress. */
                        public progress?: (google.spanner.admin.database.v1.IOperationProgress|null);

                        /** CopyBackupMetadata cancelTime. */
                        public cancelTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new CopyBackupMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CopyBackupMetadata instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ICopyBackupMetadata): google.spanner.admin.database.v1.CopyBackupMetadata;

                        /**
                         * Encodes the specified CopyBackupMetadata message. Does not implicitly {@link google.spanner.admin.database.v1.CopyBackupMetadata.verify|verify} messages.
                         * @param message CopyBackupMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ICopyBackupMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CopyBackupMetadata message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.CopyBackupMetadata.verify|verify} messages.
                         * @param message CopyBackupMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ICopyBackupMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CopyBackupMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CopyBackupMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.CopyBackupMetadata;

                        /**
                         * Decodes a CopyBackupMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CopyBackupMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.CopyBackupMetadata;

                        /**
                         * Verifies a CopyBackupMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CopyBackupMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CopyBackupMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.CopyBackupMetadata;

                        /**
                         * Creates a plain object from a CopyBackupMetadata message. Also converts values to other types if specified.
                         * @param message CopyBackupMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.CopyBackupMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CopyBackupMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CopyBackupMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateBackupRequest. */
                    interface IUpdateBackupRequest {

                        /** UpdateBackupRequest backup */
                        backup?: (google.spanner.admin.database.v1.IBackup|null);

                        /** UpdateBackupRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateBackupRequest. */
                    class UpdateBackupRequest implements IUpdateBackupRequest {

                        /**
                         * Constructs a new UpdateBackupRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IUpdateBackupRequest);

                        /** UpdateBackupRequest backup. */
                        public backup?: (google.spanner.admin.database.v1.IBackup|null);

                        /** UpdateBackupRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateBackupRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateBackupRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IUpdateBackupRequest): google.spanner.admin.database.v1.UpdateBackupRequest;

                        /**
                         * Encodes the specified UpdateBackupRequest message. Does not implicitly {@link google.spanner.admin.database.v1.UpdateBackupRequest.verify|verify} messages.
                         * @param message UpdateBackupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IUpdateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateBackupRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.UpdateBackupRequest.verify|verify} messages.
                         * @param message UpdateBackupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IUpdateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateBackupRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateBackupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.UpdateBackupRequest;

                        /**
                         * Decodes an UpdateBackupRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateBackupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.UpdateBackupRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.UpdateBackupRequest;

                        /**
                         * Creates a plain object from an UpdateBackupRequest message. Also converts values to other types if specified.
                         * @param message UpdateBackupRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.UpdateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        constructor(properties?: google.spanner.admin.database.v1.IGetBackupRequest);

                        /** GetBackupRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetBackupRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetBackupRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IGetBackupRequest): google.spanner.admin.database.v1.GetBackupRequest;

                        /**
                         * Encodes the specified GetBackupRequest message. Does not implicitly {@link google.spanner.admin.database.v1.GetBackupRequest.verify|verify} messages.
                         * @param message GetBackupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetBackupRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.GetBackupRequest.verify|verify} messages.
                         * @param message GetBackupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetBackupRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetBackupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.GetBackupRequest;

                        /**
                         * Decodes a GetBackupRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetBackupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.GetBackupRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.GetBackupRequest;

                        /**
                         * Creates a plain object from a GetBackupRequest message. Also converts values to other types if specified.
                         * @param message GetBackupRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.GetBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        constructor(properties?: google.spanner.admin.database.v1.IDeleteBackupRequest);

                        /** DeleteBackupRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteBackupRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteBackupRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IDeleteBackupRequest): google.spanner.admin.database.v1.DeleteBackupRequest;

                        /**
                         * Encodes the specified DeleteBackupRequest message. Does not implicitly {@link google.spanner.admin.database.v1.DeleteBackupRequest.verify|verify} messages.
                         * @param message DeleteBackupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteBackupRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.DeleteBackupRequest.verify|verify} messages.
                         * @param message DeleteBackupRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteBackupRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteBackupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.DeleteBackupRequest;

                        /**
                         * Decodes a DeleteBackupRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteBackupRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.DeleteBackupRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.DeleteBackupRequest;

                        /**
                         * Creates a plain object from a DeleteBackupRequest message. Also converts values to other types if specified.
                         * @param message DeleteBackupRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.DeleteBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a ListBackupsRequest. */
                    interface IListBackupsRequest {

                        /** ListBackupsRequest parent */
                        parent?: (string|null);

                        /** ListBackupsRequest filter */
                        filter?: (string|null);

                        /** ListBackupsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListBackupsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListBackupsRequest. */
                    class ListBackupsRequest implements IListBackupsRequest {

                        /**
                         * Constructs a new ListBackupsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListBackupsRequest);

                        /** ListBackupsRequest parent. */
                        public parent: string;

                        /** ListBackupsRequest filter. */
                        public filter: string;

                        /** ListBackupsRequest pageSize. */
                        public pageSize: number;

                        /** ListBackupsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListBackupsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListBackupsRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListBackupsRequest): google.spanner.admin.database.v1.ListBackupsRequest;

                        /**
                         * Encodes the specified ListBackupsRequest message. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupsRequest.verify|verify} messages.
                         * @param message ListBackupsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListBackupsRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupsRequest.verify|verify} messages.
                         * @param message ListBackupsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListBackupsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListBackupsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListBackupsRequest;

                        /**
                         * Decodes a ListBackupsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListBackupsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListBackupsRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListBackupsRequest;

                        /**
                         * Creates a plain object from a ListBackupsRequest message. Also converts values to other types if specified.
                         * @param message ListBackupsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        backups?: (google.spanner.admin.database.v1.IBackup[]|null);

                        /** ListBackupsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListBackupsResponse. */
                    class ListBackupsResponse implements IListBackupsResponse {

                        /**
                         * Constructs a new ListBackupsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListBackupsResponse);

                        /** ListBackupsResponse backups. */
                        public backups: google.spanner.admin.database.v1.IBackup[];

                        /** ListBackupsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListBackupsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListBackupsResponse instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListBackupsResponse): google.spanner.admin.database.v1.ListBackupsResponse;

                        /**
                         * Encodes the specified ListBackupsResponse message. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupsResponse.verify|verify} messages.
                         * @param message ListBackupsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListBackupsResponse message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupsResponse.verify|verify} messages.
                         * @param message ListBackupsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListBackupsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListBackupsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListBackupsResponse;

                        /**
                         * Decodes a ListBackupsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListBackupsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListBackupsResponse;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListBackupsResponse;

                        /**
                         * Creates a plain object from a ListBackupsResponse message. Also converts values to other types if specified.
                         * @param message ListBackupsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a ListBackupOperationsRequest. */
                    interface IListBackupOperationsRequest {

                        /** ListBackupOperationsRequest parent */
                        parent?: (string|null);

                        /** ListBackupOperationsRequest filter */
                        filter?: (string|null);

                        /** ListBackupOperationsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListBackupOperationsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListBackupOperationsRequest. */
                    class ListBackupOperationsRequest implements IListBackupOperationsRequest {

                        /**
                         * Constructs a new ListBackupOperationsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListBackupOperationsRequest);

                        /** ListBackupOperationsRequest parent. */
                        public parent: string;

                        /** ListBackupOperationsRequest filter. */
                        public filter: string;

                        /** ListBackupOperationsRequest pageSize. */
                        public pageSize: number;

                        /** ListBackupOperationsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListBackupOperationsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListBackupOperationsRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListBackupOperationsRequest): google.spanner.admin.database.v1.ListBackupOperationsRequest;

                        /**
                         * Encodes the specified ListBackupOperationsRequest message. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupOperationsRequest.verify|verify} messages.
                         * @param message ListBackupOperationsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListBackupOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListBackupOperationsRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupOperationsRequest.verify|verify} messages.
                         * @param message ListBackupOperationsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListBackupOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListBackupOperationsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListBackupOperationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListBackupOperationsRequest;

                        /**
                         * Decodes a ListBackupOperationsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListBackupOperationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListBackupOperationsRequest;

                        /**
                         * Verifies a ListBackupOperationsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListBackupOperationsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListBackupOperationsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListBackupOperationsRequest;

                        /**
                         * Creates a plain object from a ListBackupOperationsRequest message. Also converts values to other types if specified.
                         * @param message ListBackupOperationsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListBackupOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListBackupOperationsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListBackupOperationsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListBackupOperationsResponse. */
                    interface IListBackupOperationsResponse {

                        /** ListBackupOperationsResponse operations */
                        operations?: (google.longrunning.IOperation[]|null);

                        /** ListBackupOperationsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListBackupOperationsResponse. */
                    class ListBackupOperationsResponse implements IListBackupOperationsResponse {

                        /**
                         * Constructs a new ListBackupOperationsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListBackupOperationsResponse);

                        /** ListBackupOperationsResponse operations. */
                        public operations: google.longrunning.IOperation[];

                        /** ListBackupOperationsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListBackupOperationsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListBackupOperationsResponse instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListBackupOperationsResponse): google.spanner.admin.database.v1.ListBackupOperationsResponse;

                        /**
                         * Encodes the specified ListBackupOperationsResponse message. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupOperationsResponse.verify|verify} messages.
                         * @param message ListBackupOperationsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListBackupOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListBackupOperationsResponse message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupOperationsResponse.verify|verify} messages.
                         * @param message ListBackupOperationsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListBackupOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListBackupOperationsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListBackupOperationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListBackupOperationsResponse;

                        /**
                         * Decodes a ListBackupOperationsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListBackupOperationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListBackupOperationsResponse;

                        /**
                         * Verifies a ListBackupOperationsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListBackupOperationsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListBackupOperationsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListBackupOperationsResponse;

                        /**
                         * Creates a plain object from a ListBackupOperationsResponse message. Also converts values to other types if specified.
                         * @param message ListBackupOperationsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListBackupOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListBackupOperationsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListBackupOperationsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BackupInfo. */
                    interface IBackupInfo {

                        /** BackupInfo backup */
                        backup?: (string|null);

                        /** BackupInfo versionTime */
                        versionTime?: (google.protobuf.ITimestamp|null);

                        /** BackupInfo createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** BackupInfo sourceDatabase */
                        sourceDatabase?: (string|null);
                    }

                    /** Represents a BackupInfo. */
                    class BackupInfo implements IBackupInfo {

                        /**
                         * Constructs a new BackupInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IBackupInfo);

                        /** BackupInfo backup. */
                        public backup: string;

                        /** BackupInfo versionTime. */
                        public versionTime?: (google.protobuf.ITimestamp|null);

                        /** BackupInfo createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** BackupInfo sourceDatabase. */
                        public sourceDatabase: string;

                        /**
                         * Creates a new BackupInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BackupInfo instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IBackupInfo): google.spanner.admin.database.v1.BackupInfo;

                        /**
                         * Encodes the specified BackupInfo message. Does not implicitly {@link google.spanner.admin.database.v1.BackupInfo.verify|verify} messages.
                         * @param message BackupInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IBackupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BackupInfo message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.BackupInfo.verify|verify} messages.
                         * @param message BackupInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IBackupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BackupInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BackupInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.BackupInfo;

                        /**
                         * Decodes a BackupInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BackupInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.BackupInfo;

                        /**
                         * Verifies a BackupInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BackupInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BackupInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.BackupInfo;

                        /**
                         * Creates a plain object from a BackupInfo message. Also converts values to other types if specified.
                         * @param message BackupInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.BackupInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BackupInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BackupInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateBackupEncryptionConfig. */
                    interface ICreateBackupEncryptionConfig {

                        /** CreateBackupEncryptionConfig encryptionType */
                        encryptionType?: (google.spanner.admin.database.v1.CreateBackupEncryptionConfig.EncryptionType|keyof typeof google.spanner.admin.database.v1.CreateBackupEncryptionConfig.EncryptionType|null);

                        /** CreateBackupEncryptionConfig kmsKeyName */
                        kmsKeyName?: (string|null);

                        /** CreateBackupEncryptionConfig kmsKeyNames */
                        kmsKeyNames?: (string[]|null);
                    }

                    /** Represents a CreateBackupEncryptionConfig. */
                    class CreateBackupEncryptionConfig implements ICreateBackupEncryptionConfig {

                        /**
                         * Constructs a new CreateBackupEncryptionConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ICreateBackupEncryptionConfig);

                        /** CreateBackupEncryptionConfig encryptionType. */
                        public encryptionType: (google.spanner.admin.database.v1.CreateBackupEncryptionConfig.EncryptionType|keyof typeof google.spanner.admin.database.v1.CreateBackupEncryptionConfig.EncryptionType);

                        /** CreateBackupEncryptionConfig kmsKeyName. */
                        public kmsKeyName: string;

                        /** CreateBackupEncryptionConfig kmsKeyNames. */
                        public kmsKeyNames: string[];

                        /**
                         * Creates a new CreateBackupEncryptionConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateBackupEncryptionConfig instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ICreateBackupEncryptionConfig): google.spanner.admin.database.v1.CreateBackupEncryptionConfig;

                        /**
                         * Encodes the specified CreateBackupEncryptionConfig message. Does not implicitly {@link google.spanner.admin.database.v1.CreateBackupEncryptionConfig.verify|verify} messages.
                         * @param message CreateBackupEncryptionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ICreateBackupEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateBackupEncryptionConfig message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.CreateBackupEncryptionConfig.verify|verify} messages.
                         * @param message CreateBackupEncryptionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ICreateBackupEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateBackupEncryptionConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateBackupEncryptionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.CreateBackupEncryptionConfig;

                        /**
                         * Decodes a CreateBackupEncryptionConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateBackupEncryptionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.CreateBackupEncryptionConfig;

                        /**
                         * Verifies a CreateBackupEncryptionConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateBackupEncryptionConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateBackupEncryptionConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.CreateBackupEncryptionConfig;

                        /**
                         * Creates a plain object from a CreateBackupEncryptionConfig message. Also converts values to other types if specified.
                         * @param message CreateBackupEncryptionConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.CreateBackupEncryptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateBackupEncryptionConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateBackupEncryptionConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CreateBackupEncryptionConfig {

                        /** EncryptionType enum. */
                        enum EncryptionType {
                            ENCRYPTION_TYPE_UNSPECIFIED = 0,
                            USE_DATABASE_ENCRYPTION = 1,
                            GOOGLE_DEFAULT_ENCRYPTION = 2,
                            CUSTOMER_MANAGED_ENCRYPTION = 3
                        }
                    }

                    /** Properties of a CopyBackupEncryptionConfig. */
                    interface ICopyBackupEncryptionConfig {

                        /** CopyBackupEncryptionConfig encryptionType */
                        encryptionType?: (google.spanner.admin.database.v1.CopyBackupEncryptionConfig.EncryptionType|keyof typeof google.spanner.admin.database.v1.CopyBackupEncryptionConfig.EncryptionType|null);

                        /** CopyBackupEncryptionConfig kmsKeyName */
                        kmsKeyName?: (string|null);

                        /** CopyBackupEncryptionConfig kmsKeyNames */
                        kmsKeyNames?: (string[]|null);
                    }

                    /** Represents a CopyBackupEncryptionConfig. */
                    class CopyBackupEncryptionConfig implements ICopyBackupEncryptionConfig {

                        /**
                         * Constructs a new CopyBackupEncryptionConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ICopyBackupEncryptionConfig);

                        /** CopyBackupEncryptionConfig encryptionType. */
                        public encryptionType: (google.spanner.admin.database.v1.CopyBackupEncryptionConfig.EncryptionType|keyof typeof google.spanner.admin.database.v1.CopyBackupEncryptionConfig.EncryptionType);

                        /** CopyBackupEncryptionConfig kmsKeyName. */
                        public kmsKeyName: string;

                        /** CopyBackupEncryptionConfig kmsKeyNames. */
                        public kmsKeyNames: string[];

                        /**
                         * Creates a new CopyBackupEncryptionConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CopyBackupEncryptionConfig instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ICopyBackupEncryptionConfig): google.spanner.admin.database.v1.CopyBackupEncryptionConfig;

                        /**
                         * Encodes the specified CopyBackupEncryptionConfig message. Does not implicitly {@link google.spanner.admin.database.v1.CopyBackupEncryptionConfig.verify|verify} messages.
                         * @param message CopyBackupEncryptionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ICopyBackupEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CopyBackupEncryptionConfig message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.CopyBackupEncryptionConfig.verify|verify} messages.
                         * @param message CopyBackupEncryptionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ICopyBackupEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CopyBackupEncryptionConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CopyBackupEncryptionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.CopyBackupEncryptionConfig;

                        /**
                         * Decodes a CopyBackupEncryptionConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CopyBackupEncryptionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.CopyBackupEncryptionConfig;

                        /**
                         * Verifies a CopyBackupEncryptionConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CopyBackupEncryptionConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CopyBackupEncryptionConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.CopyBackupEncryptionConfig;

                        /**
                         * Creates a plain object from a CopyBackupEncryptionConfig message. Also converts values to other types if specified.
                         * @param message CopyBackupEncryptionConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.CopyBackupEncryptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CopyBackupEncryptionConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CopyBackupEncryptionConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace CopyBackupEncryptionConfig {

                        /** EncryptionType enum. */
                        enum EncryptionType {
                            ENCRYPTION_TYPE_UNSPECIFIED = 0,
                            USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION = 1,
                            GOOGLE_DEFAULT_ENCRYPTION = 2,
                            CUSTOMER_MANAGED_ENCRYPTION = 3
                        }
                    }

                    /** Properties of a FullBackupSpec. */
                    interface IFullBackupSpec {
                    }

                    /** Represents a FullBackupSpec. */
                    class FullBackupSpec implements IFullBackupSpec {

                        /**
                         * Constructs a new FullBackupSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IFullBackupSpec);

                        /**
                         * Creates a new FullBackupSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FullBackupSpec instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IFullBackupSpec): google.spanner.admin.database.v1.FullBackupSpec;

                        /**
                         * Encodes the specified FullBackupSpec message. Does not implicitly {@link google.spanner.admin.database.v1.FullBackupSpec.verify|verify} messages.
                         * @param message FullBackupSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IFullBackupSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FullBackupSpec message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.FullBackupSpec.verify|verify} messages.
                         * @param message FullBackupSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IFullBackupSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FullBackupSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FullBackupSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.FullBackupSpec;

                        /**
                         * Decodes a FullBackupSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FullBackupSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.FullBackupSpec;

                        /**
                         * Verifies a FullBackupSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FullBackupSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FullBackupSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.FullBackupSpec;

                        /**
                         * Creates a plain object from a FullBackupSpec message. Also converts values to other types if specified.
                         * @param message FullBackupSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.FullBackupSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FullBackupSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FullBackupSpec
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an IncrementalBackupSpec. */
                    interface IIncrementalBackupSpec {
                    }

                    /** Represents an IncrementalBackupSpec. */
                    class IncrementalBackupSpec implements IIncrementalBackupSpec {

                        /**
                         * Constructs a new IncrementalBackupSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IIncrementalBackupSpec);

                        /**
                         * Creates a new IncrementalBackupSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IncrementalBackupSpec instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IIncrementalBackupSpec): google.spanner.admin.database.v1.IncrementalBackupSpec;

                        /**
                         * Encodes the specified IncrementalBackupSpec message. Does not implicitly {@link google.spanner.admin.database.v1.IncrementalBackupSpec.verify|verify} messages.
                         * @param message IncrementalBackupSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IIncrementalBackupSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IncrementalBackupSpec message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.IncrementalBackupSpec.verify|verify} messages.
                         * @param message IncrementalBackupSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IIncrementalBackupSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IncrementalBackupSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IncrementalBackupSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.IncrementalBackupSpec;

                        /**
                         * Decodes an IncrementalBackupSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IncrementalBackupSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.IncrementalBackupSpec;

                        /**
                         * Verifies an IncrementalBackupSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IncrementalBackupSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IncrementalBackupSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.IncrementalBackupSpec;

                        /**
                         * Creates a plain object from an IncrementalBackupSpec message. Also converts values to other types if specified.
                         * @param message IncrementalBackupSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.IncrementalBackupSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IncrementalBackupSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for IncrementalBackupSpec
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BackupInstancePartition. */
                    interface IBackupInstancePartition {

                        /** BackupInstancePartition instancePartition */
                        instancePartition?: (string|null);
                    }

                    /** Represents a BackupInstancePartition. */
                    class BackupInstancePartition implements IBackupInstancePartition {

                        /**
                         * Constructs a new BackupInstancePartition.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IBackupInstancePartition);

                        /** BackupInstancePartition instancePartition. */
                        public instancePartition: string;

                        /**
                         * Creates a new BackupInstancePartition instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BackupInstancePartition instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IBackupInstancePartition): google.spanner.admin.database.v1.BackupInstancePartition;

                        /**
                         * Encodes the specified BackupInstancePartition message. Does not implicitly {@link google.spanner.admin.database.v1.BackupInstancePartition.verify|verify} messages.
                         * @param message BackupInstancePartition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IBackupInstancePartition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BackupInstancePartition message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.BackupInstancePartition.verify|verify} messages.
                         * @param message BackupInstancePartition message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IBackupInstancePartition, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BackupInstancePartition message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BackupInstancePartition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.BackupInstancePartition;

                        /**
                         * Decodes a BackupInstancePartition message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BackupInstancePartition
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.BackupInstancePartition;

                        /**
                         * Verifies a BackupInstancePartition message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BackupInstancePartition message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BackupInstancePartition
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.BackupInstancePartition;

                        /**
                         * Creates a plain object from a BackupInstancePartition message. Also converts values to other types if specified.
                         * @param message BackupInstancePartition
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.BackupInstancePartition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BackupInstancePartition to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BackupInstancePartition
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an OperationProgress. */
                    interface IOperationProgress {

                        /** OperationProgress progressPercent */
                        progressPercent?: (number|null);

                        /** OperationProgress startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** OperationProgress endTime */
                        endTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents an OperationProgress. */
                    class OperationProgress implements IOperationProgress {

                        /**
                         * Constructs a new OperationProgress.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IOperationProgress);

                        /** OperationProgress progressPercent. */
                        public progressPercent: number;

                        /** OperationProgress startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** OperationProgress endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new OperationProgress instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OperationProgress instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IOperationProgress): google.spanner.admin.database.v1.OperationProgress;

                        /**
                         * Encodes the specified OperationProgress message. Does not implicitly {@link google.spanner.admin.database.v1.OperationProgress.verify|verify} messages.
                         * @param message OperationProgress message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IOperationProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OperationProgress message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.OperationProgress.verify|verify} messages.
                         * @param message OperationProgress message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IOperationProgress, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OperationProgress message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OperationProgress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.OperationProgress;

                        /**
                         * Decodes an OperationProgress message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OperationProgress
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.OperationProgress;

                        /**
                         * Verifies an OperationProgress message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OperationProgress message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OperationProgress
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.OperationProgress;

                        /**
                         * Creates a plain object from an OperationProgress message. Also converts values to other types if specified.
                         * @param message OperationProgress
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.OperationProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OperationProgress to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OperationProgress
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an EncryptionConfig. */
                    interface IEncryptionConfig {

                        /** EncryptionConfig kmsKeyName */
                        kmsKeyName?: (string|null);

                        /** EncryptionConfig kmsKeyNames */
                        kmsKeyNames?: (string[]|null);
                    }

                    /** Represents an EncryptionConfig. */
                    class EncryptionConfig implements IEncryptionConfig {

                        /**
                         * Constructs a new EncryptionConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IEncryptionConfig);

                        /** EncryptionConfig kmsKeyName. */
                        public kmsKeyName: string;

                        /** EncryptionConfig kmsKeyNames. */
                        public kmsKeyNames: string[];

                        /**
                         * Creates a new EncryptionConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EncryptionConfig instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IEncryptionConfig): google.spanner.admin.database.v1.EncryptionConfig;

                        /**
                         * Encodes the specified EncryptionConfig message. Does not implicitly {@link google.spanner.admin.database.v1.EncryptionConfig.verify|verify} messages.
                         * @param message EncryptionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EncryptionConfig message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.EncryptionConfig.verify|verify} messages.
                         * @param message EncryptionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EncryptionConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EncryptionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.EncryptionConfig;

                        /**
                         * Decodes an EncryptionConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EncryptionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.EncryptionConfig;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.EncryptionConfig;

                        /**
                         * Creates a plain object from an EncryptionConfig message. Also converts values to other types if specified.
                         * @param message EncryptionConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.EncryptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of an EncryptionInfo. */
                    interface IEncryptionInfo {

                        /** EncryptionInfo encryptionType */
                        encryptionType?: (google.spanner.admin.database.v1.EncryptionInfo.Type|keyof typeof google.spanner.admin.database.v1.EncryptionInfo.Type|null);

                        /** EncryptionInfo encryptionStatus */
                        encryptionStatus?: (google.rpc.IStatus|null);

                        /** EncryptionInfo kmsKeyVersion */
                        kmsKeyVersion?: (string|null);
                    }

                    /** Represents an EncryptionInfo. */
                    class EncryptionInfo implements IEncryptionInfo {

                        /**
                         * Constructs a new EncryptionInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IEncryptionInfo);

                        /** EncryptionInfo encryptionType. */
                        public encryptionType: (google.spanner.admin.database.v1.EncryptionInfo.Type|keyof typeof google.spanner.admin.database.v1.EncryptionInfo.Type);

                        /** EncryptionInfo encryptionStatus. */
                        public encryptionStatus?: (google.rpc.IStatus|null);

                        /** EncryptionInfo kmsKeyVersion. */
                        public kmsKeyVersion: string;

                        /**
                         * Creates a new EncryptionInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EncryptionInfo instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IEncryptionInfo): google.spanner.admin.database.v1.EncryptionInfo;

                        /**
                         * Encodes the specified EncryptionInfo message. Does not implicitly {@link google.spanner.admin.database.v1.EncryptionInfo.verify|verify} messages.
                         * @param message EncryptionInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IEncryptionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EncryptionInfo message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.EncryptionInfo.verify|verify} messages.
                         * @param message EncryptionInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IEncryptionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EncryptionInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EncryptionInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.EncryptionInfo;

                        /**
                         * Decodes an EncryptionInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EncryptionInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.EncryptionInfo;

                        /**
                         * Verifies an EncryptionInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EncryptionInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EncryptionInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.EncryptionInfo;

                        /**
                         * Creates a plain object from an EncryptionInfo message. Also converts values to other types if specified.
                         * @param message EncryptionInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.EncryptionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EncryptionInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EncryptionInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace EncryptionInfo {

                        /** Type enum. */
                        enum Type {
                            TYPE_UNSPECIFIED = 0,
                            GOOGLE_DEFAULT_ENCRYPTION = 1,
                            CUSTOMER_MANAGED_ENCRYPTION = 2
                        }
                    }

                    /** DatabaseDialect enum. */
                    enum DatabaseDialect {
                        DATABASE_DIALECT_UNSPECIFIED = 0,
                        GOOGLE_STANDARD_SQL = 1,
                        POSTGRESQL = 2
                    }

                    /** Properties of a BackupScheduleSpec. */
                    interface IBackupScheduleSpec {

                        /** BackupScheduleSpec cronSpec */
                        cronSpec?: (google.spanner.admin.database.v1.ICrontabSpec|null);
                    }

                    /** Represents a BackupScheduleSpec. */
                    class BackupScheduleSpec implements IBackupScheduleSpec {

                        /**
                         * Constructs a new BackupScheduleSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IBackupScheduleSpec);

                        /** BackupScheduleSpec cronSpec. */
                        public cronSpec?: (google.spanner.admin.database.v1.ICrontabSpec|null);

                        /** BackupScheduleSpec scheduleSpec. */
                        public scheduleSpec?: "cronSpec";

                        /**
                         * Creates a new BackupScheduleSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BackupScheduleSpec instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IBackupScheduleSpec): google.spanner.admin.database.v1.BackupScheduleSpec;

                        /**
                         * Encodes the specified BackupScheduleSpec message. Does not implicitly {@link google.spanner.admin.database.v1.BackupScheduleSpec.verify|verify} messages.
                         * @param message BackupScheduleSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IBackupScheduleSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BackupScheduleSpec message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.BackupScheduleSpec.verify|verify} messages.
                         * @param message BackupScheduleSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IBackupScheduleSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BackupScheduleSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BackupScheduleSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.BackupScheduleSpec;

                        /**
                         * Decodes a BackupScheduleSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BackupScheduleSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.BackupScheduleSpec;

                        /**
                         * Verifies a BackupScheduleSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BackupScheduleSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BackupScheduleSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.BackupScheduleSpec;

                        /**
                         * Creates a plain object from a BackupScheduleSpec message. Also converts values to other types if specified.
                         * @param message BackupScheduleSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.BackupScheduleSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BackupScheduleSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BackupScheduleSpec
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BackupSchedule. */
                    interface IBackupSchedule {

                        /** BackupSchedule name */
                        name?: (string|null);

                        /** BackupSchedule spec */
                        spec?: (google.spanner.admin.database.v1.IBackupScheduleSpec|null);

                        /** BackupSchedule retentionDuration */
                        retentionDuration?: (google.protobuf.IDuration|null);

                        /** BackupSchedule encryptionConfig */
                        encryptionConfig?: (google.spanner.admin.database.v1.ICreateBackupEncryptionConfig|null);

                        /** BackupSchedule fullBackupSpec */
                        fullBackupSpec?: (google.spanner.admin.database.v1.IFullBackupSpec|null);

                        /** BackupSchedule incrementalBackupSpec */
                        incrementalBackupSpec?: (google.spanner.admin.database.v1.IIncrementalBackupSpec|null);

                        /** BackupSchedule updateTime */
                        updateTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a BackupSchedule. */
                    class BackupSchedule implements IBackupSchedule {

                        /**
                         * Constructs a new BackupSchedule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IBackupSchedule);

                        /** BackupSchedule name. */
                        public name: string;

                        /** BackupSchedule spec. */
                        public spec?: (google.spanner.admin.database.v1.IBackupScheduleSpec|null);

                        /** BackupSchedule retentionDuration. */
                        public retentionDuration?: (google.protobuf.IDuration|null);

                        /** BackupSchedule encryptionConfig. */
                        public encryptionConfig?: (google.spanner.admin.database.v1.ICreateBackupEncryptionConfig|null);

                        /** BackupSchedule fullBackupSpec. */
                        public fullBackupSpec?: (google.spanner.admin.database.v1.IFullBackupSpec|null);

                        /** BackupSchedule incrementalBackupSpec. */
                        public incrementalBackupSpec?: (google.spanner.admin.database.v1.IIncrementalBackupSpec|null);

                        /** BackupSchedule updateTime. */
                        public updateTime?: (google.protobuf.ITimestamp|null);

                        /** BackupSchedule backupTypeSpec. */
                        public backupTypeSpec?: ("fullBackupSpec"|"incrementalBackupSpec");

                        /**
                         * Creates a new BackupSchedule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BackupSchedule instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IBackupSchedule): google.spanner.admin.database.v1.BackupSchedule;

                        /**
                         * Encodes the specified BackupSchedule message. Does not implicitly {@link google.spanner.admin.database.v1.BackupSchedule.verify|verify} messages.
                         * @param message BackupSchedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IBackupSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BackupSchedule message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.BackupSchedule.verify|verify} messages.
                         * @param message BackupSchedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IBackupSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BackupSchedule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BackupSchedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.BackupSchedule;

                        /**
                         * Decodes a BackupSchedule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BackupSchedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.BackupSchedule;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.BackupSchedule;

                        /**
                         * Creates a plain object from a BackupSchedule message. Also converts values to other types if specified.
                         * @param message BackupSchedule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.BackupSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a CrontabSpec. */
                    interface ICrontabSpec {

                        /** CrontabSpec text */
                        text?: (string|null);

                        /** CrontabSpec timeZone */
                        timeZone?: (string|null);

                        /** CrontabSpec creationWindow */
                        creationWindow?: (google.protobuf.IDuration|null);
                    }

                    /** Represents a CrontabSpec. */
                    class CrontabSpec implements ICrontabSpec {

                        /**
                         * Constructs a new CrontabSpec.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ICrontabSpec);

                        /** CrontabSpec text. */
                        public text: string;

                        /** CrontabSpec timeZone. */
                        public timeZone: string;

                        /** CrontabSpec creationWindow. */
                        public creationWindow?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new CrontabSpec instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CrontabSpec instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ICrontabSpec): google.spanner.admin.database.v1.CrontabSpec;

                        /**
                         * Encodes the specified CrontabSpec message. Does not implicitly {@link google.spanner.admin.database.v1.CrontabSpec.verify|verify} messages.
                         * @param message CrontabSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ICrontabSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CrontabSpec message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.CrontabSpec.verify|verify} messages.
                         * @param message CrontabSpec message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ICrontabSpec, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CrontabSpec message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CrontabSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.CrontabSpec;

                        /**
                         * Decodes a CrontabSpec message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CrontabSpec
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.CrontabSpec;

                        /**
                         * Verifies a CrontabSpec message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CrontabSpec message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CrontabSpec
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.CrontabSpec;

                        /**
                         * Creates a plain object from a CrontabSpec message. Also converts values to other types if specified.
                         * @param message CrontabSpec
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.CrontabSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CrontabSpec to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CrontabSpec
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateBackupScheduleRequest. */
                    interface ICreateBackupScheduleRequest {

                        /** CreateBackupScheduleRequest parent */
                        parent?: (string|null);

                        /** CreateBackupScheduleRequest backupScheduleId */
                        backupScheduleId?: (string|null);

                        /** CreateBackupScheduleRequest backupSchedule */
                        backupSchedule?: (google.spanner.admin.database.v1.IBackupSchedule|null);
                    }

                    /** Represents a CreateBackupScheduleRequest. */
                    class CreateBackupScheduleRequest implements ICreateBackupScheduleRequest {

                        /**
                         * Constructs a new CreateBackupScheduleRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ICreateBackupScheduleRequest);

                        /** CreateBackupScheduleRequest parent. */
                        public parent: string;

                        /** CreateBackupScheduleRequest backupScheduleId. */
                        public backupScheduleId: string;

                        /** CreateBackupScheduleRequest backupSchedule. */
                        public backupSchedule?: (google.spanner.admin.database.v1.IBackupSchedule|null);

                        /**
                         * Creates a new CreateBackupScheduleRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateBackupScheduleRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ICreateBackupScheduleRequest): google.spanner.admin.database.v1.CreateBackupScheduleRequest;

                        /**
                         * Encodes the specified CreateBackupScheduleRequest message. Does not implicitly {@link google.spanner.admin.database.v1.CreateBackupScheduleRequest.verify|verify} messages.
                         * @param message CreateBackupScheduleRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ICreateBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateBackupScheduleRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.CreateBackupScheduleRequest.verify|verify} messages.
                         * @param message CreateBackupScheduleRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ICreateBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateBackupScheduleRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateBackupScheduleRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.CreateBackupScheduleRequest;

                        /**
                         * Decodes a CreateBackupScheduleRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateBackupScheduleRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.CreateBackupScheduleRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.CreateBackupScheduleRequest;

                        /**
                         * Creates a plain object from a CreateBackupScheduleRequest message. Also converts values to other types if specified.
                         * @param message CreateBackupScheduleRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.CreateBackupScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        constructor(properties?: google.spanner.admin.database.v1.IGetBackupScheduleRequest);

                        /** GetBackupScheduleRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetBackupScheduleRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetBackupScheduleRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IGetBackupScheduleRequest): google.spanner.admin.database.v1.GetBackupScheduleRequest;

                        /**
                         * Encodes the specified GetBackupScheduleRequest message. Does not implicitly {@link google.spanner.admin.database.v1.GetBackupScheduleRequest.verify|verify} messages.
                         * @param message GetBackupScheduleRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IGetBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetBackupScheduleRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.GetBackupScheduleRequest.verify|verify} messages.
                         * @param message GetBackupScheduleRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IGetBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetBackupScheduleRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetBackupScheduleRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.GetBackupScheduleRequest;

                        /**
                         * Decodes a GetBackupScheduleRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetBackupScheduleRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.GetBackupScheduleRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.GetBackupScheduleRequest;

                        /**
                         * Creates a plain object from a GetBackupScheduleRequest message. Also converts values to other types if specified.
                         * @param message GetBackupScheduleRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.GetBackupScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        constructor(properties?: google.spanner.admin.database.v1.IDeleteBackupScheduleRequest);

                        /** DeleteBackupScheduleRequest name. */
                        public name: string;

                        /**
                         * Creates a new DeleteBackupScheduleRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteBackupScheduleRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IDeleteBackupScheduleRequest): google.spanner.admin.database.v1.DeleteBackupScheduleRequest;

                        /**
                         * Encodes the specified DeleteBackupScheduleRequest message. Does not implicitly {@link google.spanner.admin.database.v1.DeleteBackupScheduleRequest.verify|verify} messages.
                         * @param message DeleteBackupScheduleRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IDeleteBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteBackupScheduleRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.DeleteBackupScheduleRequest.verify|verify} messages.
                         * @param message DeleteBackupScheduleRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IDeleteBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteBackupScheduleRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteBackupScheduleRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.DeleteBackupScheduleRequest;

                        /**
                         * Decodes a DeleteBackupScheduleRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteBackupScheduleRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.DeleteBackupScheduleRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.DeleteBackupScheduleRequest;

                        /**
                         * Creates a plain object from a DeleteBackupScheduleRequest message. Also converts values to other types if specified.
                         * @param message DeleteBackupScheduleRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.DeleteBackupScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a ListBackupSchedulesRequest. */
                    interface IListBackupSchedulesRequest {

                        /** ListBackupSchedulesRequest parent */
                        parent?: (string|null);

                        /** ListBackupSchedulesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListBackupSchedulesRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListBackupSchedulesRequest. */
                    class ListBackupSchedulesRequest implements IListBackupSchedulesRequest {

                        /**
                         * Constructs a new ListBackupSchedulesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListBackupSchedulesRequest);

                        /** ListBackupSchedulesRequest parent. */
                        public parent: string;

                        /** ListBackupSchedulesRequest pageSize. */
                        public pageSize: number;

                        /** ListBackupSchedulesRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListBackupSchedulesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListBackupSchedulesRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListBackupSchedulesRequest): google.spanner.admin.database.v1.ListBackupSchedulesRequest;

                        /**
                         * Encodes the specified ListBackupSchedulesRequest message. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupSchedulesRequest.verify|verify} messages.
                         * @param message ListBackupSchedulesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListBackupSchedulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListBackupSchedulesRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupSchedulesRequest.verify|verify} messages.
                         * @param message ListBackupSchedulesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListBackupSchedulesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListBackupSchedulesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListBackupSchedulesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListBackupSchedulesRequest;

                        /**
                         * Decodes a ListBackupSchedulesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListBackupSchedulesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListBackupSchedulesRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListBackupSchedulesRequest;

                        /**
                         * Creates a plain object from a ListBackupSchedulesRequest message. Also converts values to other types if specified.
                         * @param message ListBackupSchedulesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListBackupSchedulesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        backupSchedules?: (google.spanner.admin.database.v1.IBackupSchedule[]|null);

                        /** ListBackupSchedulesResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListBackupSchedulesResponse. */
                    class ListBackupSchedulesResponse implements IListBackupSchedulesResponse {

                        /**
                         * Constructs a new ListBackupSchedulesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListBackupSchedulesResponse);

                        /** ListBackupSchedulesResponse backupSchedules. */
                        public backupSchedules: google.spanner.admin.database.v1.IBackupSchedule[];

                        /** ListBackupSchedulesResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListBackupSchedulesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListBackupSchedulesResponse instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListBackupSchedulesResponse): google.spanner.admin.database.v1.ListBackupSchedulesResponse;

                        /**
                         * Encodes the specified ListBackupSchedulesResponse message. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupSchedulesResponse.verify|verify} messages.
                         * @param message ListBackupSchedulesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListBackupSchedulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListBackupSchedulesResponse message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListBackupSchedulesResponse.verify|verify} messages.
                         * @param message ListBackupSchedulesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListBackupSchedulesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListBackupSchedulesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListBackupSchedulesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListBackupSchedulesResponse;

                        /**
                         * Decodes a ListBackupSchedulesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListBackupSchedulesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListBackupSchedulesResponse;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListBackupSchedulesResponse;

                        /**
                         * Creates a plain object from a ListBackupSchedulesResponse message. Also converts values to other types if specified.
                         * @param message ListBackupSchedulesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListBackupSchedulesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of an UpdateBackupScheduleRequest. */
                    interface IUpdateBackupScheduleRequest {

                        /** UpdateBackupScheduleRequest backupSchedule */
                        backupSchedule?: (google.spanner.admin.database.v1.IBackupSchedule|null);

                        /** UpdateBackupScheduleRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateBackupScheduleRequest. */
                    class UpdateBackupScheduleRequest implements IUpdateBackupScheduleRequest {

                        /**
                         * Constructs a new UpdateBackupScheduleRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IUpdateBackupScheduleRequest);

                        /** UpdateBackupScheduleRequest backupSchedule. */
                        public backupSchedule?: (google.spanner.admin.database.v1.IBackupSchedule|null);

                        /** UpdateBackupScheduleRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateBackupScheduleRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateBackupScheduleRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IUpdateBackupScheduleRequest): google.spanner.admin.database.v1.UpdateBackupScheduleRequest;

                        /**
                         * Encodes the specified UpdateBackupScheduleRequest message. Does not implicitly {@link google.spanner.admin.database.v1.UpdateBackupScheduleRequest.verify|verify} messages.
                         * @param message UpdateBackupScheduleRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IUpdateBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateBackupScheduleRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.UpdateBackupScheduleRequest.verify|verify} messages.
                         * @param message UpdateBackupScheduleRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IUpdateBackupScheduleRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateBackupScheduleRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateBackupScheduleRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.UpdateBackupScheduleRequest;

                        /**
                         * Decodes an UpdateBackupScheduleRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateBackupScheduleRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.UpdateBackupScheduleRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.UpdateBackupScheduleRequest;

                        /**
                         * Creates a plain object from an UpdateBackupScheduleRequest message. Also converts values to other types if specified.
                         * @param message UpdateBackupScheduleRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.UpdateBackupScheduleRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Represents a DatabaseAdmin */
                    class DatabaseAdmin extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new DatabaseAdmin service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new DatabaseAdmin service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DatabaseAdmin;

                        /**
                         * Calls ListDatabases.
                         * @param request ListDatabasesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListDatabasesResponse
                         */
                        public listDatabases(request: google.spanner.admin.database.v1.IListDatabasesRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.ListDatabasesCallback): void;

                        /**
                         * Calls ListDatabases.
                         * @param request ListDatabasesRequest message or plain object
                         * @returns Promise
                         */
                        public listDatabases(request: google.spanner.admin.database.v1.IListDatabasesRequest): Promise<google.spanner.admin.database.v1.ListDatabasesResponse>;

                        /**
                         * Calls CreateDatabase.
                         * @param request CreateDatabaseRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public createDatabase(request: google.spanner.admin.database.v1.ICreateDatabaseRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.CreateDatabaseCallback): void;

                        /**
                         * Calls CreateDatabase.
                         * @param request CreateDatabaseRequest message or plain object
                         * @returns Promise
                         */
                        public createDatabase(request: google.spanner.admin.database.v1.ICreateDatabaseRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls GetDatabase.
                         * @param request GetDatabaseRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Database
                         */
                        public getDatabase(request: google.spanner.admin.database.v1.IGetDatabaseRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseCallback): void;

                        /**
                         * Calls GetDatabase.
                         * @param request GetDatabaseRequest message or plain object
                         * @returns Promise
                         */
                        public getDatabase(request: google.spanner.admin.database.v1.IGetDatabaseRequest): Promise<google.spanner.admin.database.v1.Database>;

                        /**
                         * Calls UpdateDatabase.
                         * @param request UpdateDatabaseRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public updateDatabase(request: google.spanner.admin.database.v1.IUpdateDatabaseRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseCallback): void;

                        /**
                         * Calls UpdateDatabase.
                         * @param request UpdateDatabaseRequest message or plain object
                         * @returns Promise
                         */
                        public updateDatabase(request: google.spanner.admin.database.v1.IUpdateDatabaseRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls UpdateDatabaseDdl.
                         * @param request UpdateDatabaseDdlRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public updateDatabaseDdl(request: google.spanner.admin.database.v1.IUpdateDatabaseDdlRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.UpdateDatabaseDdlCallback): void;

                        /**
                         * Calls UpdateDatabaseDdl.
                         * @param request UpdateDatabaseDdlRequest message or plain object
                         * @returns Promise
                         */
                        public updateDatabaseDdl(request: google.spanner.admin.database.v1.IUpdateDatabaseDdlRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls DropDatabase.
                         * @param request DropDatabaseRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public dropDatabase(request: google.spanner.admin.database.v1.IDropDatabaseRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.DropDatabaseCallback): void;

                        /**
                         * Calls DropDatabase.
                         * @param request DropDatabaseRequest message or plain object
                         * @returns Promise
                         */
                        public dropDatabase(request: google.spanner.admin.database.v1.IDropDatabaseRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls GetDatabaseDdl.
                         * @param request GetDatabaseDdlRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and GetDatabaseDdlResponse
                         */
                        public getDatabaseDdl(request: google.spanner.admin.database.v1.IGetDatabaseDdlRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.GetDatabaseDdlCallback): void;

                        /**
                         * Calls GetDatabaseDdl.
                         * @param request GetDatabaseDdlRequest message or plain object
                         * @returns Promise
                         */
                        public getDatabaseDdl(request: google.spanner.admin.database.v1.IGetDatabaseDdlRequest): Promise<google.spanner.admin.database.v1.GetDatabaseDdlResponse>;

                        /**
                         * Calls SetIamPolicy.
                         * @param request SetIamPolicyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Policy
                         */
                        public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.SetIamPolicyCallback): void;

                        /**
                         * Calls SetIamPolicy.
                         * @param request SetIamPolicyRequest message or plain object
                         * @returns Promise
                         */
                        public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                        /**
                         * Calls GetIamPolicy.
                         * @param request GetIamPolicyRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Policy
                         */
                        public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.GetIamPolicyCallback): void;

                        /**
                         * Calls GetIamPolicy.
                         * @param request GetIamPolicyRequest message or plain object
                         * @returns Promise
                         */
                        public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                        /**
                         * Calls TestIamPermissions.
                         * @param request TestIamPermissionsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                         */
                        public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.TestIamPermissionsCallback): void;

                        /**
                         * Calls TestIamPermissions.
                         * @param request TestIamPermissionsRequest message or plain object
                         * @returns Promise
                         */
                        public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                        /**
                         * Calls CreateBackup.
                         * @param request CreateBackupRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public createBackup(request: google.spanner.admin.database.v1.ICreateBackupRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.CreateBackupCallback): void;

                        /**
                         * Calls CreateBackup.
                         * @param request CreateBackupRequest message or plain object
                         * @returns Promise
                         */
                        public createBackup(request: google.spanner.admin.database.v1.ICreateBackupRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls CopyBackup.
                         * @param request CopyBackupRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public copyBackup(request: google.spanner.admin.database.v1.ICopyBackupRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.CopyBackupCallback): void;

                        /**
                         * Calls CopyBackup.
                         * @param request CopyBackupRequest message or plain object
                         * @returns Promise
                         */
                        public copyBackup(request: google.spanner.admin.database.v1.ICopyBackupRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls GetBackup.
                         * @param request GetBackupRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Backup
                         */
                        public getBackup(request: google.spanner.admin.database.v1.IGetBackupRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.GetBackupCallback): void;

                        /**
                         * Calls GetBackup.
                         * @param request GetBackupRequest message or plain object
                         * @returns Promise
                         */
                        public getBackup(request: google.spanner.admin.database.v1.IGetBackupRequest): Promise<google.spanner.admin.database.v1.Backup>;

                        /**
                         * Calls UpdateBackup.
                         * @param request UpdateBackupRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Backup
                         */
                        public updateBackup(request: google.spanner.admin.database.v1.IUpdateBackupRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackupCallback): void;

                        /**
                         * Calls UpdateBackup.
                         * @param request UpdateBackupRequest message or plain object
                         * @returns Promise
                         */
                        public updateBackup(request: google.spanner.admin.database.v1.IUpdateBackupRequest): Promise<google.spanner.admin.database.v1.Backup>;

                        /**
                         * Calls DeleteBackup.
                         * @param request DeleteBackupRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteBackup(request: google.spanner.admin.database.v1.IDeleteBackupRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackupCallback): void;

                        /**
                         * Calls DeleteBackup.
                         * @param request DeleteBackupRequest message or plain object
                         * @returns Promise
                         */
                        public deleteBackup(request: google.spanner.admin.database.v1.IDeleteBackupRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls ListBackups.
                         * @param request ListBackupsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListBackupsResponse
                         */
                        public listBackups(request: google.spanner.admin.database.v1.IListBackupsRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.ListBackupsCallback): void;

                        /**
                         * Calls ListBackups.
                         * @param request ListBackupsRequest message or plain object
                         * @returns Promise
                         */
                        public listBackups(request: google.spanner.admin.database.v1.IListBackupsRequest): Promise<google.spanner.admin.database.v1.ListBackupsResponse>;

                        /**
                         * Calls RestoreDatabase.
                         * @param request RestoreDatabaseRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Operation
                         */
                        public restoreDatabase(request: google.spanner.admin.database.v1.IRestoreDatabaseRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.RestoreDatabaseCallback): void;

                        /**
                         * Calls RestoreDatabase.
                         * @param request RestoreDatabaseRequest message or plain object
                         * @returns Promise
                         */
                        public restoreDatabase(request: google.spanner.admin.database.v1.IRestoreDatabaseRequest): Promise<google.longrunning.Operation>;

                        /**
                         * Calls ListDatabaseOperations.
                         * @param request ListDatabaseOperationsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListDatabaseOperationsResponse
                         */
                        public listDatabaseOperations(request: google.spanner.admin.database.v1.IListDatabaseOperationsRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseOperationsCallback): void;

                        /**
                         * Calls ListDatabaseOperations.
                         * @param request ListDatabaseOperationsRequest message or plain object
                         * @returns Promise
                         */
                        public listDatabaseOperations(request: google.spanner.admin.database.v1.IListDatabaseOperationsRequest): Promise<google.spanner.admin.database.v1.ListDatabaseOperationsResponse>;

                        /**
                         * Calls ListBackupOperations.
                         * @param request ListBackupOperationsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListBackupOperationsResponse
                         */
                        public listBackupOperations(request: google.spanner.admin.database.v1.IListBackupOperationsRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.ListBackupOperationsCallback): void;

                        /**
                         * Calls ListBackupOperations.
                         * @param request ListBackupOperationsRequest message or plain object
                         * @returns Promise
                         */
                        public listBackupOperations(request: google.spanner.admin.database.v1.IListBackupOperationsRequest): Promise<google.spanner.admin.database.v1.ListBackupOperationsResponse>;

                        /**
                         * Calls ListDatabaseRoles.
                         * @param request ListDatabaseRolesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListDatabaseRolesResponse
                         */
                        public listDatabaseRoles(request: google.spanner.admin.database.v1.IListDatabaseRolesRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.ListDatabaseRolesCallback): void;

                        /**
                         * Calls ListDatabaseRoles.
                         * @param request ListDatabaseRolesRequest message or plain object
                         * @returns Promise
                         */
                        public listDatabaseRoles(request: google.spanner.admin.database.v1.IListDatabaseRolesRequest): Promise<google.spanner.admin.database.v1.ListDatabaseRolesResponse>;

                        /**
                         * Calls AddSplitPoints.
                         * @param request AddSplitPointsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and AddSplitPointsResponse
                         */
                        public addSplitPoints(request: google.spanner.admin.database.v1.IAddSplitPointsRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.AddSplitPointsCallback): void;

                        /**
                         * Calls AddSplitPoints.
                         * @param request AddSplitPointsRequest message or plain object
                         * @returns Promise
                         */
                        public addSplitPoints(request: google.spanner.admin.database.v1.IAddSplitPointsRequest): Promise<google.spanner.admin.database.v1.AddSplitPointsResponse>;

                        /**
                         * Calls CreateBackupSchedule.
                         * @param request CreateBackupScheduleRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BackupSchedule
                         */
                        public createBackupSchedule(request: google.spanner.admin.database.v1.ICreateBackupScheduleRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.CreateBackupScheduleCallback): void;

                        /**
                         * Calls CreateBackupSchedule.
                         * @param request CreateBackupScheduleRequest message or plain object
                         * @returns Promise
                         */
                        public createBackupSchedule(request: google.spanner.admin.database.v1.ICreateBackupScheduleRequest): Promise<google.spanner.admin.database.v1.BackupSchedule>;

                        /**
                         * Calls GetBackupSchedule.
                         * @param request GetBackupScheduleRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BackupSchedule
                         */
                        public getBackupSchedule(request: google.spanner.admin.database.v1.IGetBackupScheduleRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.GetBackupScheduleCallback): void;

                        /**
                         * Calls GetBackupSchedule.
                         * @param request GetBackupScheduleRequest message or plain object
                         * @returns Promise
                         */
                        public getBackupSchedule(request: google.spanner.admin.database.v1.IGetBackupScheduleRequest): Promise<google.spanner.admin.database.v1.BackupSchedule>;

                        /**
                         * Calls UpdateBackupSchedule.
                         * @param request UpdateBackupScheduleRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and BackupSchedule
                         */
                        public updateBackupSchedule(request: google.spanner.admin.database.v1.IUpdateBackupScheduleRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.UpdateBackupScheduleCallback): void;

                        /**
                         * Calls UpdateBackupSchedule.
                         * @param request UpdateBackupScheduleRequest message or plain object
                         * @returns Promise
                         */
                        public updateBackupSchedule(request: google.spanner.admin.database.v1.IUpdateBackupScheduleRequest): Promise<google.spanner.admin.database.v1.BackupSchedule>;

                        /**
                         * Calls DeleteBackupSchedule.
                         * @param request DeleteBackupScheduleRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteBackupSchedule(request: google.spanner.admin.database.v1.IDeleteBackupScheduleRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.DeleteBackupScheduleCallback): void;

                        /**
                         * Calls DeleteBackupSchedule.
                         * @param request DeleteBackupScheduleRequest message or plain object
                         * @returns Promise
                         */
                        public deleteBackupSchedule(request: google.spanner.admin.database.v1.IDeleteBackupScheduleRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls ListBackupSchedules.
                         * @param request ListBackupSchedulesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListBackupSchedulesResponse
                         */
                        public listBackupSchedules(request: google.spanner.admin.database.v1.IListBackupSchedulesRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.ListBackupSchedulesCallback): void;

                        /**
                         * Calls ListBackupSchedules.
                         * @param request ListBackupSchedulesRequest message or plain object
                         * @returns Promise
                         */
                        public listBackupSchedules(request: google.spanner.admin.database.v1.IListBackupSchedulesRequest): Promise<google.spanner.admin.database.v1.ListBackupSchedulesResponse>;

                        /**
                         * Calls InternalUpdateGraphOperation.
                         * @param request InternalUpdateGraphOperationRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and InternalUpdateGraphOperationResponse
                         */
                        public internalUpdateGraphOperation(request: google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest, callback: google.spanner.admin.database.v1.DatabaseAdmin.InternalUpdateGraphOperationCallback): void;

                        /**
                         * Calls InternalUpdateGraphOperation.
                         * @param request InternalUpdateGraphOperationRequest message or plain object
                         * @returns Promise
                         */
                        public internalUpdateGraphOperation(request: google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest): Promise<google.spanner.admin.database.v1.InternalUpdateGraphOperationResponse>;
                    }

                    namespace DatabaseAdmin {

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|listDatabases}.
                         * @param error Error, if any
                         * @param [response] ListDatabasesResponse
                         */
                        type ListDatabasesCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.ListDatabasesResponse) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|createDatabase}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type CreateDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|getDatabase}.
                         * @param error Error, if any
                         * @param [response] Database
                         */
                        type GetDatabaseCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.Database) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|updateDatabase}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type UpdateDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|updateDatabaseDdl}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type UpdateDatabaseDdlCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|dropDatabase}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DropDatabaseCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|getDatabaseDdl}.
                         * @param error Error, if any
                         * @param [response] GetDatabaseDdlResponse
                         */
                        type GetDatabaseDdlCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.GetDatabaseDdlResponse) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|setIamPolicy}.
                         * @param error Error, if any
                         * @param [response] Policy
                         */
                        type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|getIamPolicy}.
                         * @param error Error, if any
                         * @param [response] Policy
                         */
                        type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|testIamPermissions}.
                         * @param error Error, if any
                         * @param [response] TestIamPermissionsResponse
                         */
                        type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|createBackup}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type CreateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|copyBackup}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type CopyBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|getBackup}.
                         * @param error Error, if any
                         * @param [response] Backup
                         */
                        type GetBackupCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.Backup) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|updateBackup}.
                         * @param error Error, if any
                         * @param [response] Backup
                         */
                        type UpdateBackupCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.Backup) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|deleteBackup}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteBackupCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|listBackups}.
                         * @param error Error, if any
                         * @param [response] ListBackupsResponse
                         */
                        type ListBackupsCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.ListBackupsResponse) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|restoreDatabase}.
                         * @param error Error, if any
                         * @param [response] Operation
                         */
                        type RestoreDatabaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|listDatabaseOperations}.
                         * @param error Error, if any
                         * @param [response] ListDatabaseOperationsResponse
                         */
                        type ListDatabaseOperationsCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.ListDatabaseOperationsResponse) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|listBackupOperations}.
                         * @param error Error, if any
                         * @param [response] ListBackupOperationsResponse
                         */
                        type ListBackupOperationsCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.ListBackupOperationsResponse) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|listDatabaseRoles}.
                         * @param error Error, if any
                         * @param [response] ListDatabaseRolesResponse
                         */
                        type ListDatabaseRolesCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.ListDatabaseRolesResponse) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|addSplitPoints}.
                         * @param error Error, if any
                         * @param [response] AddSplitPointsResponse
                         */
                        type AddSplitPointsCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.AddSplitPointsResponse) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|createBackupSchedule}.
                         * @param error Error, if any
                         * @param [response] BackupSchedule
                         */
                        type CreateBackupScheduleCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.BackupSchedule) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|getBackupSchedule}.
                         * @param error Error, if any
                         * @param [response] BackupSchedule
                         */
                        type GetBackupScheduleCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.BackupSchedule) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|updateBackupSchedule}.
                         * @param error Error, if any
                         * @param [response] BackupSchedule
                         */
                        type UpdateBackupScheduleCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.BackupSchedule) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|deleteBackupSchedule}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteBackupScheduleCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|listBackupSchedules}.
                         * @param error Error, if any
                         * @param [response] ListBackupSchedulesResponse
                         */
                        type ListBackupSchedulesCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.ListBackupSchedulesResponse) => void;

                        /**
                         * Callback as used by {@link google.spanner.admin.database.v1.DatabaseAdmin|internalUpdateGraphOperation}.
                         * @param error Error, if any
                         * @param [response] InternalUpdateGraphOperationResponse
                         */
                        type InternalUpdateGraphOperationCallback = (error: (Error|null), response?: google.spanner.admin.database.v1.InternalUpdateGraphOperationResponse) => void;
                    }

                    /** Properties of a RestoreInfo. */
                    interface IRestoreInfo {

                        /** RestoreInfo sourceType */
                        sourceType?: (google.spanner.admin.database.v1.RestoreSourceType|keyof typeof google.spanner.admin.database.v1.RestoreSourceType|null);

                        /** RestoreInfo backupInfo */
                        backupInfo?: (google.spanner.admin.database.v1.IBackupInfo|null);
                    }

                    /** Represents a RestoreInfo. */
                    class RestoreInfo implements IRestoreInfo {

                        /**
                         * Constructs a new RestoreInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IRestoreInfo);

                        /** RestoreInfo sourceType. */
                        public sourceType: (google.spanner.admin.database.v1.RestoreSourceType|keyof typeof google.spanner.admin.database.v1.RestoreSourceType);

                        /** RestoreInfo backupInfo. */
                        public backupInfo?: (google.spanner.admin.database.v1.IBackupInfo|null);

                        /** RestoreInfo sourceInfo. */
                        public sourceInfo?: "backupInfo";

                        /**
                         * Creates a new RestoreInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RestoreInfo instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IRestoreInfo): google.spanner.admin.database.v1.RestoreInfo;

                        /**
                         * Encodes the specified RestoreInfo message. Does not implicitly {@link google.spanner.admin.database.v1.RestoreInfo.verify|verify} messages.
                         * @param message RestoreInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IRestoreInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RestoreInfo message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.RestoreInfo.verify|verify} messages.
                         * @param message RestoreInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IRestoreInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RestoreInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RestoreInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.RestoreInfo;

                        /**
                         * Decodes a RestoreInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RestoreInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.RestoreInfo;

                        /**
                         * Verifies a RestoreInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RestoreInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RestoreInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.RestoreInfo;

                        /**
                         * Creates a plain object from a RestoreInfo message. Also converts values to other types if specified.
                         * @param message RestoreInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.RestoreInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RestoreInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RestoreInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Database. */
                    interface IDatabase {

                        /** Database name */
                        name?: (string|null);

                        /** Database state */
                        state?: (google.spanner.admin.database.v1.Database.State|keyof typeof google.spanner.admin.database.v1.Database.State|null);

                        /** Database createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Database restoreInfo */
                        restoreInfo?: (google.spanner.admin.database.v1.IRestoreInfo|null);

                        /** Database encryptionConfig */
                        encryptionConfig?: (google.spanner.admin.database.v1.IEncryptionConfig|null);

                        /** Database encryptionInfo */
                        encryptionInfo?: (google.spanner.admin.database.v1.IEncryptionInfo[]|null);

                        /** Database versionRetentionPeriod */
                        versionRetentionPeriod?: (string|null);

                        /** Database earliestVersionTime */
                        earliestVersionTime?: (google.protobuf.ITimestamp|null);

                        /** Database defaultLeader */
                        defaultLeader?: (string|null);

                        /** Database databaseDialect */
                        databaseDialect?: (google.spanner.admin.database.v1.DatabaseDialect|keyof typeof google.spanner.admin.database.v1.DatabaseDialect|null);

                        /** Database enableDropProtection */
                        enableDropProtection?: (boolean|null);

                        /** Database reconciling */
                        reconciling?: (boolean|null);
                    }

                    /** Represents a Database. */
                    class Database implements IDatabase {

                        /**
                         * Constructs a new Database.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IDatabase);

                        /** Database name. */
                        public name: string;

                        /** Database state. */
                        public state: (google.spanner.admin.database.v1.Database.State|keyof typeof google.spanner.admin.database.v1.Database.State);

                        /** Database createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Database restoreInfo. */
                        public restoreInfo?: (google.spanner.admin.database.v1.IRestoreInfo|null);

                        /** Database encryptionConfig. */
                        public encryptionConfig?: (google.spanner.admin.database.v1.IEncryptionConfig|null);

                        /** Database encryptionInfo. */
                        public encryptionInfo: google.spanner.admin.database.v1.IEncryptionInfo[];

                        /** Database versionRetentionPeriod. */
                        public versionRetentionPeriod: string;

                        /** Database earliestVersionTime. */
                        public earliestVersionTime?: (google.protobuf.ITimestamp|null);

                        /** Database defaultLeader. */
                        public defaultLeader: string;

                        /** Database databaseDialect. */
                        public databaseDialect: (google.spanner.admin.database.v1.DatabaseDialect|keyof typeof google.spanner.admin.database.v1.DatabaseDialect);

                        /** Database enableDropProtection. */
                        public enableDropProtection: boolean;

                        /** Database reconciling. */
                        public reconciling: boolean;

                        /**
                         * Creates a new Database instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Database instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IDatabase): google.spanner.admin.database.v1.Database;

                        /**
                         * Encodes the specified Database message. Does not implicitly {@link google.spanner.admin.database.v1.Database.verify|verify} messages.
                         * @param message Database message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Database message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.Database.verify|verify} messages.
                         * @param message Database message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IDatabase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Database message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Database
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.Database;

                        /**
                         * Decodes a Database message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Database
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.Database;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.Database;

                        /**
                         * Creates a plain object from a Database message. Also converts values to other types if specified.
                         * @param message Database
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.Database, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            CREATING = 1,
                            READY = 2,
                            READY_OPTIMIZING = 3
                        }
                    }

                    /** Properties of a ListDatabasesRequest. */
                    interface IListDatabasesRequest {

                        /** ListDatabasesRequest parent */
                        parent?: (string|null);

                        /** ListDatabasesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListDatabasesRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListDatabasesRequest. */
                    class ListDatabasesRequest implements IListDatabasesRequest {

                        /**
                         * Constructs a new ListDatabasesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListDatabasesRequest);

                        /** ListDatabasesRequest parent. */
                        public parent: string;

                        /** ListDatabasesRequest pageSize. */
                        public pageSize: number;

                        /** ListDatabasesRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListDatabasesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListDatabasesRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListDatabasesRequest): google.spanner.admin.database.v1.ListDatabasesRequest;

                        /**
                         * Encodes the specified ListDatabasesRequest message. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabasesRequest.verify|verify} messages.
                         * @param message ListDatabasesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListDatabasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListDatabasesRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabasesRequest.verify|verify} messages.
                         * @param message ListDatabasesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListDatabasesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListDatabasesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListDatabasesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListDatabasesRequest;

                        /**
                         * Decodes a ListDatabasesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListDatabasesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListDatabasesRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListDatabasesRequest;

                        /**
                         * Creates a plain object from a ListDatabasesRequest message. Also converts values to other types if specified.
                         * @param message ListDatabasesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListDatabasesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a ListDatabasesResponse. */
                    interface IListDatabasesResponse {

                        /** ListDatabasesResponse databases */
                        databases?: (google.spanner.admin.database.v1.IDatabase[]|null);

                        /** ListDatabasesResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListDatabasesResponse. */
                    class ListDatabasesResponse implements IListDatabasesResponse {

                        /**
                         * Constructs a new ListDatabasesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListDatabasesResponse);

                        /** ListDatabasesResponse databases. */
                        public databases: google.spanner.admin.database.v1.IDatabase[];

                        /** ListDatabasesResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListDatabasesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListDatabasesResponse instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListDatabasesResponse): google.spanner.admin.database.v1.ListDatabasesResponse;

                        /**
                         * Encodes the specified ListDatabasesResponse message. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabasesResponse.verify|verify} messages.
                         * @param message ListDatabasesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListDatabasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListDatabasesResponse message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabasesResponse.verify|verify} messages.
                         * @param message ListDatabasesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListDatabasesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListDatabasesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListDatabasesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListDatabasesResponse;

                        /**
                         * Decodes a ListDatabasesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListDatabasesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListDatabasesResponse;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListDatabasesResponse;

                        /**
                         * Creates a plain object from a ListDatabasesResponse message. Also converts values to other types if specified.
                         * @param message ListDatabasesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListDatabasesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a CreateDatabaseRequest. */
                    interface ICreateDatabaseRequest {

                        /** CreateDatabaseRequest parent */
                        parent?: (string|null);

                        /** CreateDatabaseRequest createStatement */
                        createStatement?: (string|null);

                        /** CreateDatabaseRequest extraStatements */
                        extraStatements?: (string[]|null);

                        /** CreateDatabaseRequest encryptionConfig */
                        encryptionConfig?: (google.spanner.admin.database.v1.IEncryptionConfig|null);

                        /** CreateDatabaseRequest databaseDialect */
                        databaseDialect?: (google.spanner.admin.database.v1.DatabaseDialect|keyof typeof google.spanner.admin.database.v1.DatabaseDialect|null);

                        /** CreateDatabaseRequest protoDescriptors */
                        protoDescriptors?: (Uint8Array|Buffer|string|null);
                    }

                    /** Represents a CreateDatabaseRequest. */
                    class CreateDatabaseRequest implements ICreateDatabaseRequest {

                        /**
                         * Constructs a new CreateDatabaseRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ICreateDatabaseRequest);

                        /** CreateDatabaseRequest parent. */
                        public parent: string;

                        /** CreateDatabaseRequest createStatement. */
                        public createStatement: string;

                        /** CreateDatabaseRequest extraStatements. */
                        public extraStatements: string[];

                        /** CreateDatabaseRequest encryptionConfig. */
                        public encryptionConfig?: (google.spanner.admin.database.v1.IEncryptionConfig|null);

                        /** CreateDatabaseRequest databaseDialect. */
                        public databaseDialect: (google.spanner.admin.database.v1.DatabaseDialect|keyof typeof google.spanner.admin.database.v1.DatabaseDialect);

                        /** CreateDatabaseRequest protoDescriptors. */
                        public protoDescriptors: (Uint8Array|Buffer|string);

                        /**
                         * Creates a new CreateDatabaseRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateDatabaseRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ICreateDatabaseRequest): google.spanner.admin.database.v1.CreateDatabaseRequest;

                        /**
                         * Encodes the specified CreateDatabaseRequest message. Does not implicitly {@link google.spanner.admin.database.v1.CreateDatabaseRequest.verify|verify} messages.
                         * @param message CreateDatabaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ICreateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateDatabaseRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.CreateDatabaseRequest.verify|verify} messages.
                         * @param message CreateDatabaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ICreateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateDatabaseRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateDatabaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.CreateDatabaseRequest;

                        /**
                         * Decodes a CreateDatabaseRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateDatabaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.CreateDatabaseRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.CreateDatabaseRequest;

                        /**
                         * Creates a plain object from a CreateDatabaseRequest message. Also converts values to other types if specified.
                         * @param message CreateDatabaseRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.CreateDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                        /** CreateDatabaseMetadata database */
                        database?: (string|null);
                    }

                    /** Represents a CreateDatabaseMetadata. */
                    class CreateDatabaseMetadata implements ICreateDatabaseMetadata {

                        /**
                         * Constructs a new CreateDatabaseMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ICreateDatabaseMetadata);

                        /** CreateDatabaseMetadata database. */
                        public database: string;

                        /**
                         * Creates a new CreateDatabaseMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateDatabaseMetadata instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ICreateDatabaseMetadata): google.spanner.admin.database.v1.CreateDatabaseMetadata;

                        /**
                         * Encodes the specified CreateDatabaseMetadata message. Does not implicitly {@link google.spanner.admin.database.v1.CreateDatabaseMetadata.verify|verify} messages.
                         * @param message CreateDatabaseMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ICreateDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateDatabaseMetadata message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.CreateDatabaseMetadata.verify|verify} messages.
                         * @param message CreateDatabaseMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ICreateDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateDatabaseMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateDatabaseMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.CreateDatabaseMetadata;

                        /**
                         * Decodes a CreateDatabaseMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateDatabaseMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.CreateDatabaseMetadata;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.CreateDatabaseMetadata;

                        /**
                         * Creates a plain object from a CreateDatabaseMetadata message. Also converts values to other types if specified.
                         * @param message CreateDatabaseMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.CreateDatabaseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        constructor(properties?: google.spanner.admin.database.v1.IGetDatabaseRequest);

                        /** GetDatabaseRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetDatabaseRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetDatabaseRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IGetDatabaseRequest): google.spanner.admin.database.v1.GetDatabaseRequest;

                        /**
                         * Encodes the specified GetDatabaseRequest message. Does not implicitly {@link google.spanner.admin.database.v1.GetDatabaseRequest.verify|verify} messages.
                         * @param message GetDatabaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IGetDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetDatabaseRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.GetDatabaseRequest.verify|verify} messages.
                         * @param message GetDatabaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IGetDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetDatabaseRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetDatabaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.GetDatabaseRequest;

                        /**
                         * Decodes a GetDatabaseRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetDatabaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.GetDatabaseRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.GetDatabaseRequest;

                        /**
                         * Creates a plain object from a GetDatabaseRequest message. Also converts values to other types if specified.
                         * @param message GetDatabaseRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.GetDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                        database?: (google.spanner.admin.database.v1.IDatabase|null);

                        /** UpdateDatabaseRequest updateMask */
                        updateMask?: (google.protobuf.IFieldMask|null);
                    }

                    /** Represents an UpdateDatabaseRequest. */
                    class UpdateDatabaseRequest implements IUpdateDatabaseRequest {

                        /**
                         * Constructs a new UpdateDatabaseRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IUpdateDatabaseRequest);

                        /** UpdateDatabaseRequest database. */
                        public database?: (google.spanner.admin.database.v1.IDatabase|null);

                        /** UpdateDatabaseRequest updateMask. */
                        public updateMask?: (google.protobuf.IFieldMask|null);

                        /**
                         * Creates a new UpdateDatabaseRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateDatabaseRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IUpdateDatabaseRequest): google.spanner.admin.database.v1.UpdateDatabaseRequest;

                        /**
                         * Encodes the specified UpdateDatabaseRequest message. Does not implicitly {@link google.spanner.admin.database.v1.UpdateDatabaseRequest.verify|verify} messages.
                         * @param message UpdateDatabaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IUpdateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateDatabaseRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.UpdateDatabaseRequest.verify|verify} messages.
                         * @param message UpdateDatabaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IUpdateDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateDatabaseRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateDatabaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.UpdateDatabaseRequest;

                        /**
                         * Decodes an UpdateDatabaseRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateDatabaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.UpdateDatabaseRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.UpdateDatabaseRequest;

                        /**
                         * Creates a plain object from an UpdateDatabaseRequest message. Also converts values to other types if specified.
                         * @param message UpdateDatabaseRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.UpdateDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                        /** UpdateDatabaseMetadata request */
                        request?: (google.spanner.admin.database.v1.IUpdateDatabaseRequest|null);

                        /** UpdateDatabaseMetadata progress */
                        progress?: (google.spanner.admin.database.v1.IOperationProgress|null);

                        /** UpdateDatabaseMetadata cancelTime */
                        cancelTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents an UpdateDatabaseMetadata. */
                    class UpdateDatabaseMetadata implements IUpdateDatabaseMetadata {

                        /**
                         * Constructs a new UpdateDatabaseMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IUpdateDatabaseMetadata);

                        /** UpdateDatabaseMetadata request. */
                        public request?: (google.spanner.admin.database.v1.IUpdateDatabaseRequest|null);

                        /** UpdateDatabaseMetadata progress. */
                        public progress?: (google.spanner.admin.database.v1.IOperationProgress|null);

                        /** UpdateDatabaseMetadata cancelTime. */
                        public cancelTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new UpdateDatabaseMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateDatabaseMetadata instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IUpdateDatabaseMetadata): google.spanner.admin.database.v1.UpdateDatabaseMetadata;

                        /**
                         * Encodes the specified UpdateDatabaseMetadata message. Does not implicitly {@link google.spanner.admin.database.v1.UpdateDatabaseMetadata.verify|verify} messages.
                         * @param message UpdateDatabaseMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IUpdateDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateDatabaseMetadata message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.UpdateDatabaseMetadata.verify|verify} messages.
                         * @param message UpdateDatabaseMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IUpdateDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateDatabaseMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateDatabaseMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.UpdateDatabaseMetadata;

                        /**
                         * Decodes an UpdateDatabaseMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateDatabaseMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.UpdateDatabaseMetadata;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.UpdateDatabaseMetadata;

                        /**
                         * Creates a plain object from an UpdateDatabaseMetadata message. Also converts values to other types if specified.
                         * @param message UpdateDatabaseMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.UpdateDatabaseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of an UpdateDatabaseDdlRequest. */
                    interface IUpdateDatabaseDdlRequest {

                        /** UpdateDatabaseDdlRequest database */
                        database?: (string|null);

                        /** UpdateDatabaseDdlRequest statements */
                        statements?: (string[]|null);

                        /** UpdateDatabaseDdlRequest operationId */
                        operationId?: (string|null);

                        /** UpdateDatabaseDdlRequest protoDescriptors */
                        protoDescriptors?: (Uint8Array|Buffer|string|null);

                        /** UpdateDatabaseDdlRequest throughputMode */
                        throughputMode?: (boolean|null);
                    }

                    /** Represents an UpdateDatabaseDdlRequest. */
                    class UpdateDatabaseDdlRequest implements IUpdateDatabaseDdlRequest {

                        /**
                         * Constructs a new UpdateDatabaseDdlRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IUpdateDatabaseDdlRequest);

                        /** UpdateDatabaseDdlRequest database. */
                        public database: string;

                        /** UpdateDatabaseDdlRequest statements. */
                        public statements: string[];

                        /** UpdateDatabaseDdlRequest operationId. */
                        public operationId: string;

                        /** UpdateDatabaseDdlRequest protoDescriptors. */
                        public protoDescriptors: (Uint8Array|Buffer|string);

                        /** UpdateDatabaseDdlRequest throughputMode. */
                        public throughputMode: boolean;

                        /**
                         * Creates a new UpdateDatabaseDdlRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateDatabaseDdlRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IUpdateDatabaseDdlRequest): google.spanner.admin.database.v1.UpdateDatabaseDdlRequest;

                        /**
                         * Encodes the specified UpdateDatabaseDdlRequest message. Does not implicitly {@link google.spanner.admin.database.v1.UpdateDatabaseDdlRequest.verify|verify} messages.
                         * @param message UpdateDatabaseDdlRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IUpdateDatabaseDdlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateDatabaseDdlRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.UpdateDatabaseDdlRequest.verify|verify} messages.
                         * @param message UpdateDatabaseDdlRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IUpdateDatabaseDdlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateDatabaseDdlRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateDatabaseDdlRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.UpdateDatabaseDdlRequest;

                        /**
                         * Decodes an UpdateDatabaseDdlRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateDatabaseDdlRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.UpdateDatabaseDdlRequest;

                        /**
                         * Verifies an UpdateDatabaseDdlRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateDatabaseDdlRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateDatabaseDdlRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.UpdateDatabaseDdlRequest;

                        /**
                         * Creates a plain object from an UpdateDatabaseDdlRequest message. Also converts values to other types if specified.
                         * @param message UpdateDatabaseDdlRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.UpdateDatabaseDdlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateDatabaseDdlRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateDatabaseDdlRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DdlStatementActionInfo. */
                    interface IDdlStatementActionInfo {

                        /** DdlStatementActionInfo action */
                        action?: (string|null);

                        /** DdlStatementActionInfo entityType */
                        entityType?: (string|null);

                        /** DdlStatementActionInfo entityNames */
                        entityNames?: (string[]|null);
                    }

                    /** Represents a DdlStatementActionInfo. */
                    class DdlStatementActionInfo implements IDdlStatementActionInfo {

                        /**
                         * Constructs a new DdlStatementActionInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IDdlStatementActionInfo);

                        /** DdlStatementActionInfo action. */
                        public action: string;

                        /** DdlStatementActionInfo entityType. */
                        public entityType: string;

                        /** DdlStatementActionInfo entityNames. */
                        public entityNames: string[];

                        /**
                         * Creates a new DdlStatementActionInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DdlStatementActionInfo instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IDdlStatementActionInfo): google.spanner.admin.database.v1.DdlStatementActionInfo;

                        /**
                         * Encodes the specified DdlStatementActionInfo message. Does not implicitly {@link google.spanner.admin.database.v1.DdlStatementActionInfo.verify|verify} messages.
                         * @param message DdlStatementActionInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IDdlStatementActionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DdlStatementActionInfo message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.DdlStatementActionInfo.verify|verify} messages.
                         * @param message DdlStatementActionInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IDdlStatementActionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DdlStatementActionInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DdlStatementActionInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.DdlStatementActionInfo;

                        /**
                         * Decodes a DdlStatementActionInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DdlStatementActionInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.DdlStatementActionInfo;

                        /**
                         * Verifies a DdlStatementActionInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DdlStatementActionInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DdlStatementActionInfo
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.DdlStatementActionInfo;

                        /**
                         * Creates a plain object from a DdlStatementActionInfo message. Also converts values to other types if specified.
                         * @param message DdlStatementActionInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.DdlStatementActionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DdlStatementActionInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DdlStatementActionInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an UpdateDatabaseDdlMetadata. */
                    interface IUpdateDatabaseDdlMetadata {

                        /** UpdateDatabaseDdlMetadata database */
                        database?: (string|null);

                        /** UpdateDatabaseDdlMetadata statements */
                        statements?: (string[]|null);

                        /** UpdateDatabaseDdlMetadata commitTimestamps */
                        commitTimestamps?: (google.protobuf.ITimestamp[]|null);

                        /** UpdateDatabaseDdlMetadata throttled */
                        throttled?: (boolean|null);

                        /** UpdateDatabaseDdlMetadata progress */
                        progress?: (google.spanner.admin.database.v1.IOperationProgress[]|null);

                        /** UpdateDatabaseDdlMetadata actions */
                        actions?: (google.spanner.admin.database.v1.IDdlStatementActionInfo[]|null);
                    }

                    /** Represents an UpdateDatabaseDdlMetadata. */
                    class UpdateDatabaseDdlMetadata implements IUpdateDatabaseDdlMetadata {

                        /**
                         * Constructs a new UpdateDatabaseDdlMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IUpdateDatabaseDdlMetadata);

                        /** UpdateDatabaseDdlMetadata database. */
                        public database: string;

                        /** UpdateDatabaseDdlMetadata statements. */
                        public statements: string[];

                        /** UpdateDatabaseDdlMetadata commitTimestamps. */
                        public commitTimestamps: google.protobuf.ITimestamp[];

                        /** UpdateDatabaseDdlMetadata throttled. */
                        public throttled: boolean;

                        /** UpdateDatabaseDdlMetadata progress. */
                        public progress: google.spanner.admin.database.v1.IOperationProgress[];

                        /** UpdateDatabaseDdlMetadata actions. */
                        public actions: google.spanner.admin.database.v1.IDdlStatementActionInfo[];

                        /**
                         * Creates a new UpdateDatabaseDdlMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UpdateDatabaseDdlMetadata instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IUpdateDatabaseDdlMetadata): google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata;

                        /**
                         * Encodes the specified UpdateDatabaseDdlMetadata message. Does not implicitly {@link google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata.verify|verify} messages.
                         * @param message UpdateDatabaseDdlMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IUpdateDatabaseDdlMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UpdateDatabaseDdlMetadata message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata.verify|verify} messages.
                         * @param message UpdateDatabaseDdlMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IUpdateDatabaseDdlMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an UpdateDatabaseDdlMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UpdateDatabaseDdlMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata;

                        /**
                         * Decodes an UpdateDatabaseDdlMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UpdateDatabaseDdlMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata;

                        /**
                         * Verifies an UpdateDatabaseDdlMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an UpdateDatabaseDdlMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UpdateDatabaseDdlMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata;

                        /**
                         * Creates a plain object from an UpdateDatabaseDdlMetadata message. Also converts values to other types if specified.
                         * @param message UpdateDatabaseDdlMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.UpdateDatabaseDdlMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UpdateDatabaseDdlMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UpdateDatabaseDdlMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DropDatabaseRequest. */
                    interface IDropDatabaseRequest {

                        /** DropDatabaseRequest database */
                        database?: (string|null);
                    }

                    /** Represents a DropDatabaseRequest. */
                    class DropDatabaseRequest implements IDropDatabaseRequest {

                        /**
                         * Constructs a new DropDatabaseRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IDropDatabaseRequest);

                        /** DropDatabaseRequest database. */
                        public database: string;

                        /**
                         * Creates a new DropDatabaseRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DropDatabaseRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IDropDatabaseRequest): google.spanner.admin.database.v1.DropDatabaseRequest;

                        /**
                         * Encodes the specified DropDatabaseRequest message. Does not implicitly {@link google.spanner.admin.database.v1.DropDatabaseRequest.verify|verify} messages.
                         * @param message DropDatabaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IDropDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DropDatabaseRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.DropDatabaseRequest.verify|verify} messages.
                         * @param message DropDatabaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IDropDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DropDatabaseRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DropDatabaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.DropDatabaseRequest;

                        /**
                         * Decodes a DropDatabaseRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DropDatabaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.DropDatabaseRequest;

                        /**
                         * Verifies a DropDatabaseRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DropDatabaseRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DropDatabaseRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.DropDatabaseRequest;

                        /**
                         * Creates a plain object from a DropDatabaseRequest message. Also converts values to other types if specified.
                         * @param message DropDatabaseRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.DropDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DropDatabaseRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DropDatabaseRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetDatabaseDdlRequest. */
                    interface IGetDatabaseDdlRequest {

                        /** GetDatabaseDdlRequest database */
                        database?: (string|null);
                    }

                    /** Represents a GetDatabaseDdlRequest. */
                    class GetDatabaseDdlRequest implements IGetDatabaseDdlRequest {

                        /**
                         * Constructs a new GetDatabaseDdlRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IGetDatabaseDdlRequest);

                        /** GetDatabaseDdlRequest database. */
                        public database: string;

                        /**
                         * Creates a new GetDatabaseDdlRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetDatabaseDdlRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IGetDatabaseDdlRequest): google.spanner.admin.database.v1.GetDatabaseDdlRequest;

                        /**
                         * Encodes the specified GetDatabaseDdlRequest message. Does not implicitly {@link google.spanner.admin.database.v1.GetDatabaseDdlRequest.verify|verify} messages.
                         * @param message GetDatabaseDdlRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IGetDatabaseDdlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetDatabaseDdlRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.GetDatabaseDdlRequest.verify|verify} messages.
                         * @param message GetDatabaseDdlRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IGetDatabaseDdlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetDatabaseDdlRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetDatabaseDdlRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.GetDatabaseDdlRequest;

                        /**
                         * Decodes a GetDatabaseDdlRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetDatabaseDdlRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.GetDatabaseDdlRequest;

                        /**
                         * Verifies a GetDatabaseDdlRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetDatabaseDdlRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetDatabaseDdlRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.GetDatabaseDdlRequest;

                        /**
                         * Creates a plain object from a GetDatabaseDdlRequest message. Also converts values to other types if specified.
                         * @param message GetDatabaseDdlRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.GetDatabaseDdlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetDatabaseDdlRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetDatabaseDdlRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetDatabaseDdlResponse. */
                    interface IGetDatabaseDdlResponse {

                        /** GetDatabaseDdlResponse statements */
                        statements?: (string[]|null);

                        /** GetDatabaseDdlResponse protoDescriptors */
                        protoDescriptors?: (Uint8Array|Buffer|string|null);
                    }

                    /** Represents a GetDatabaseDdlResponse. */
                    class GetDatabaseDdlResponse implements IGetDatabaseDdlResponse {

                        /**
                         * Constructs a new GetDatabaseDdlResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IGetDatabaseDdlResponse);

                        /** GetDatabaseDdlResponse statements. */
                        public statements: string[];

                        /** GetDatabaseDdlResponse protoDescriptors. */
                        public protoDescriptors: (Uint8Array|Buffer|string);

                        /**
                         * Creates a new GetDatabaseDdlResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetDatabaseDdlResponse instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IGetDatabaseDdlResponse): google.spanner.admin.database.v1.GetDatabaseDdlResponse;

                        /**
                         * Encodes the specified GetDatabaseDdlResponse message. Does not implicitly {@link google.spanner.admin.database.v1.GetDatabaseDdlResponse.verify|verify} messages.
                         * @param message GetDatabaseDdlResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IGetDatabaseDdlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetDatabaseDdlResponse message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.GetDatabaseDdlResponse.verify|verify} messages.
                         * @param message GetDatabaseDdlResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IGetDatabaseDdlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetDatabaseDdlResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetDatabaseDdlResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.GetDatabaseDdlResponse;

                        /**
                         * Decodes a GetDatabaseDdlResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetDatabaseDdlResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.GetDatabaseDdlResponse;

                        /**
                         * Verifies a GetDatabaseDdlResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetDatabaseDdlResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetDatabaseDdlResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.GetDatabaseDdlResponse;

                        /**
                         * Creates a plain object from a GetDatabaseDdlResponse message. Also converts values to other types if specified.
                         * @param message GetDatabaseDdlResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.GetDatabaseDdlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetDatabaseDdlResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetDatabaseDdlResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListDatabaseOperationsRequest. */
                    interface IListDatabaseOperationsRequest {

                        /** ListDatabaseOperationsRequest parent */
                        parent?: (string|null);

                        /** ListDatabaseOperationsRequest filter */
                        filter?: (string|null);

                        /** ListDatabaseOperationsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListDatabaseOperationsRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListDatabaseOperationsRequest. */
                    class ListDatabaseOperationsRequest implements IListDatabaseOperationsRequest {

                        /**
                         * Constructs a new ListDatabaseOperationsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListDatabaseOperationsRequest);

                        /** ListDatabaseOperationsRequest parent. */
                        public parent: string;

                        /** ListDatabaseOperationsRequest filter. */
                        public filter: string;

                        /** ListDatabaseOperationsRequest pageSize. */
                        public pageSize: number;

                        /** ListDatabaseOperationsRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListDatabaseOperationsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListDatabaseOperationsRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListDatabaseOperationsRequest): google.spanner.admin.database.v1.ListDatabaseOperationsRequest;

                        /**
                         * Encodes the specified ListDatabaseOperationsRequest message. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabaseOperationsRequest.verify|verify} messages.
                         * @param message ListDatabaseOperationsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListDatabaseOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListDatabaseOperationsRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabaseOperationsRequest.verify|verify} messages.
                         * @param message ListDatabaseOperationsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListDatabaseOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListDatabaseOperationsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListDatabaseOperationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListDatabaseOperationsRequest;

                        /**
                         * Decodes a ListDatabaseOperationsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListDatabaseOperationsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListDatabaseOperationsRequest;

                        /**
                         * Verifies a ListDatabaseOperationsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListDatabaseOperationsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListDatabaseOperationsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListDatabaseOperationsRequest;

                        /**
                         * Creates a plain object from a ListDatabaseOperationsRequest message. Also converts values to other types if specified.
                         * @param message ListDatabaseOperationsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListDatabaseOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListDatabaseOperationsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListDatabaseOperationsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListDatabaseOperationsResponse. */
                    interface IListDatabaseOperationsResponse {

                        /** ListDatabaseOperationsResponse operations */
                        operations?: (google.longrunning.IOperation[]|null);

                        /** ListDatabaseOperationsResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListDatabaseOperationsResponse. */
                    class ListDatabaseOperationsResponse implements IListDatabaseOperationsResponse {

                        /**
                         * Constructs a new ListDatabaseOperationsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListDatabaseOperationsResponse);

                        /** ListDatabaseOperationsResponse operations. */
                        public operations: google.longrunning.IOperation[];

                        /** ListDatabaseOperationsResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListDatabaseOperationsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListDatabaseOperationsResponse instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListDatabaseOperationsResponse): google.spanner.admin.database.v1.ListDatabaseOperationsResponse;

                        /**
                         * Encodes the specified ListDatabaseOperationsResponse message. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabaseOperationsResponse.verify|verify} messages.
                         * @param message ListDatabaseOperationsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListDatabaseOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListDatabaseOperationsResponse message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabaseOperationsResponse.verify|verify} messages.
                         * @param message ListDatabaseOperationsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListDatabaseOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListDatabaseOperationsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListDatabaseOperationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListDatabaseOperationsResponse;

                        /**
                         * Decodes a ListDatabaseOperationsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListDatabaseOperationsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListDatabaseOperationsResponse;

                        /**
                         * Verifies a ListDatabaseOperationsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListDatabaseOperationsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListDatabaseOperationsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListDatabaseOperationsResponse;

                        /**
                         * Creates a plain object from a ListDatabaseOperationsResponse message. Also converts values to other types if specified.
                         * @param message ListDatabaseOperationsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListDatabaseOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListDatabaseOperationsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListDatabaseOperationsResponse
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
                        encryptionConfig?: (google.spanner.admin.database.v1.IRestoreDatabaseEncryptionConfig|null);
                    }

                    /** Represents a RestoreDatabaseRequest. */
                    class RestoreDatabaseRequest implements IRestoreDatabaseRequest {

                        /**
                         * Constructs a new RestoreDatabaseRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IRestoreDatabaseRequest);

                        /** RestoreDatabaseRequest parent. */
                        public parent: string;

                        /** RestoreDatabaseRequest databaseId. */
                        public databaseId: string;

                        /** RestoreDatabaseRequest backup. */
                        public backup?: (string|null);

                        /** RestoreDatabaseRequest encryptionConfig. */
                        public encryptionConfig?: (google.spanner.admin.database.v1.IRestoreDatabaseEncryptionConfig|null);

                        /** RestoreDatabaseRequest source. */
                        public source?: "backup";

                        /**
                         * Creates a new RestoreDatabaseRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RestoreDatabaseRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IRestoreDatabaseRequest): google.spanner.admin.database.v1.RestoreDatabaseRequest;

                        /**
                         * Encodes the specified RestoreDatabaseRequest message. Does not implicitly {@link google.spanner.admin.database.v1.RestoreDatabaseRequest.verify|verify} messages.
                         * @param message RestoreDatabaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IRestoreDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RestoreDatabaseRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.RestoreDatabaseRequest.verify|verify} messages.
                         * @param message RestoreDatabaseRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IRestoreDatabaseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RestoreDatabaseRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RestoreDatabaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.RestoreDatabaseRequest;

                        /**
                         * Decodes a RestoreDatabaseRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RestoreDatabaseRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.RestoreDatabaseRequest;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.RestoreDatabaseRequest;

                        /**
                         * Creates a plain object from a RestoreDatabaseRequest message. Also converts values to other types if specified.
                         * @param message RestoreDatabaseRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.RestoreDatabaseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a RestoreDatabaseEncryptionConfig. */
                    interface IRestoreDatabaseEncryptionConfig {

                        /** RestoreDatabaseEncryptionConfig encryptionType */
                        encryptionType?: (google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig.EncryptionType|keyof typeof google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig.EncryptionType|null);

                        /** RestoreDatabaseEncryptionConfig kmsKeyName */
                        kmsKeyName?: (string|null);

                        /** RestoreDatabaseEncryptionConfig kmsKeyNames */
                        kmsKeyNames?: (string[]|null);
                    }

                    /** Represents a RestoreDatabaseEncryptionConfig. */
                    class RestoreDatabaseEncryptionConfig implements IRestoreDatabaseEncryptionConfig {

                        /**
                         * Constructs a new RestoreDatabaseEncryptionConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IRestoreDatabaseEncryptionConfig);

                        /** RestoreDatabaseEncryptionConfig encryptionType. */
                        public encryptionType: (google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig.EncryptionType|keyof typeof google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig.EncryptionType);

                        /** RestoreDatabaseEncryptionConfig kmsKeyName. */
                        public kmsKeyName: string;

                        /** RestoreDatabaseEncryptionConfig kmsKeyNames. */
                        public kmsKeyNames: string[];

                        /**
                         * Creates a new RestoreDatabaseEncryptionConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RestoreDatabaseEncryptionConfig instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IRestoreDatabaseEncryptionConfig): google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig;

                        /**
                         * Encodes the specified RestoreDatabaseEncryptionConfig message. Does not implicitly {@link google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig.verify|verify} messages.
                         * @param message RestoreDatabaseEncryptionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IRestoreDatabaseEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RestoreDatabaseEncryptionConfig message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig.verify|verify} messages.
                         * @param message RestoreDatabaseEncryptionConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IRestoreDatabaseEncryptionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RestoreDatabaseEncryptionConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RestoreDatabaseEncryptionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig;

                        /**
                         * Decodes a RestoreDatabaseEncryptionConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RestoreDatabaseEncryptionConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig;

                        /**
                         * Verifies a RestoreDatabaseEncryptionConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RestoreDatabaseEncryptionConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RestoreDatabaseEncryptionConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig;

                        /**
                         * Creates a plain object from a RestoreDatabaseEncryptionConfig message. Also converts values to other types if specified.
                         * @param message RestoreDatabaseEncryptionConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.RestoreDatabaseEncryptionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RestoreDatabaseEncryptionConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RestoreDatabaseEncryptionConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace RestoreDatabaseEncryptionConfig {

                        /** EncryptionType enum. */
                        enum EncryptionType {
                            ENCRYPTION_TYPE_UNSPECIFIED = 0,
                            USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION = 1,
                            GOOGLE_DEFAULT_ENCRYPTION = 2,
                            CUSTOMER_MANAGED_ENCRYPTION = 3
                        }
                    }

                    /** Properties of a RestoreDatabaseMetadata. */
                    interface IRestoreDatabaseMetadata {

                        /** RestoreDatabaseMetadata name */
                        name?: (string|null);

                        /** RestoreDatabaseMetadata sourceType */
                        sourceType?: (google.spanner.admin.database.v1.RestoreSourceType|keyof typeof google.spanner.admin.database.v1.RestoreSourceType|null);

                        /** RestoreDatabaseMetadata backupInfo */
                        backupInfo?: (google.spanner.admin.database.v1.IBackupInfo|null);

                        /** RestoreDatabaseMetadata progress */
                        progress?: (google.spanner.admin.database.v1.IOperationProgress|null);

                        /** RestoreDatabaseMetadata cancelTime */
                        cancelTime?: (google.protobuf.ITimestamp|null);

                        /** RestoreDatabaseMetadata optimizeDatabaseOperationName */
                        optimizeDatabaseOperationName?: (string|null);
                    }

                    /** Represents a RestoreDatabaseMetadata. */
                    class RestoreDatabaseMetadata implements IRestoreDatabaseMetadata {

                        /**
                         * Constructs a new RestoreDatabaseMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IRestoreDatabaseMetadata);

                        /** RestoreDatabaseMetadata name. */
                        public name: string;

                        /** RestoreDatabaseMetadata sourceType. */
                        public sourceType: (google.spanner.admin.database.v1.RestoreSourceType|keyof typeof google.spanner.admin.database.v1.RestoreSourceType);

                        /** RestoreDatabaseMetadata backupInfo. */
                        public backupInfo?: (google.spanner.admin.database.v1.IBackupInfo|null);

                        /** RestoreDatabaseMetadata progress. */
                        public progress?: (google.spanner.admin.database.v1.IOperationProgress|null);

                        /** RestoreDatabaseMetadata cancelTime. */
                        public cancelTime?: (google.protobuf.ITimestamp|null);

                        /** RestoreDatabaseMetadata optimizeDatabaseOperationName. */
                        public optimizeDatabaseOperationName: string;

                        /** RestoreDatabaseMetadata sourceInfo. */
                        public sourceInfo?: "backupInfo";

                        /**
                         * Creates a new RestoreDatabaseMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RestoreDatabaseMetadata instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IRestoreDatabaseMetadata): google.spanner.admin.database.v1.RestoreDatabaseMetadata;

                        /**
                         * Encodes the specified RestoreDatabaseMetadata message. Does not implicitly {@link google.spanner.admin.database.v1.RestoreDatabaseMetadata.verify|verify} messages.
                         * @param message RestoreDatabaseMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IRestoreDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RestoreDatabaseMetadata message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.RestoreDatabaseMetadata.verify|verify} messages.
                         * @param message RestoreDatabaseMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IRestoreDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RestoreDatabaseMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RestoreDatabaseMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.RestoreDatabaseMetadata;

                        /**
                         * Decodes a RestoreDatabaseMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RestoreDatabaseMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.RestoreDatabaseMetadata;

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
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.RestoreDatabaseMetadata;

                        /**
                         * Creates a plain object from a RestoreDatabaseMetadata message. Also converts values to other types if specified.
                         * @param message RestoreDatabaseMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.RestoreDatabaseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of an OptimizeRestoredDatabaseMetadata. */
                    interface IOptimizeRestoredDatabaseMetadata {

                        /** OptimizeRestoredDatabaseMetadata name */
                        name?: (string|null);

                        /** OptimizeRestoredDatabaseMetadata progress */
                        progress?: (google.spanner.admin.database.v1.IOperationProgress|null);
                    }

                    /** Represents an OptimizeRestoredDatabaseMetadata. */
                    class OptimizeRestoredDatabaseMetadata implements IOptimizeRestoredDatabaseMetadata {

                        /**
                         * Constructs a new OptimizeRestoredDatabaseMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IOptimizeRestoredDatabaseMetadata);

                        /** OptimizeRestoredDatabaseMetadata name. */
                        public name: string;

                        /** OptimizeRestoredDatabaseMetadata progress. */
                        public progress?: (google.spanner.admin.database.v1.IOperationProgress|null);

                        /**
                         * Creates a new OptimizeRestoredDatabaseMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OptimizeRestoredDatabaseMetadata instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IOptimizeRestoredDatabaseMetadata): google.spanner.admin.database.v1.OptimizeRestoredDatabaseMetadata;

                        /**
                         * Encodes the specified OptimizeRestoredDatabaseMetadata message. Does not implicitly {@link google.spanner.admin.database.v1.OptimizeRestoredDatabaseMetadata.verify|verify} messages.
                         * @param message OptimizeRestoredDatabaseMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IOptimizeRestoredDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OptimizeRestoredDatabaseMetadata message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.OptimizeRestoredDatabaseMetadata.verify|verify} messages.
                         * @param message OptimizeRestoredDatabaseMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IOptimizeRestoredDatabaseMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OptimizeRestoredDatabaseMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OptimizeRestoredDatabaseMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.OptimizeRestoredDatabaseMetadata;

                        /**
                         * Decodes an OptimizeRestoredDatabaseMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OptimizeRestoredDatabaseMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.OptimizeRestoredDatabaseMetadata;

                        /**
                         * Verifies an OptimizeRestoredDatabaseMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OptimizeRestoredDatabaseMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OptimizeRestoredDatabaseMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.OptimizeRestoredDatabaseMetadata;

                        /**
                         * Creates a plain object from an OptimizeRestoredDatabaseMetadata message. Also converts values to other types if specified.
                         * @param message OptimizeRestoredDatabaseMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.OptimizeRestoredDatabaseMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OptimizeRestoredDatabaseMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OptimizeRestoredDatabaseMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** RestoreSourceType enum. */
                    enum RestoreSourceType {
                        TYPE_UNSPECIFIED = 0,
                        BACKUP = 1
                    }

                    /** Properties of a DatabaseRole. */
                    interface IDatabaseRole {

                        /** DatabaseRole name */
                        name?: (string|null);
                    }

                    /** Represents a DatabaseRole. */
                    class DatabaseRole implements IDatabaseRole {

                        /**
                         * Constructs a new DatabaseRole.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IDatabaseRole);

                        /** DatabaseRole name. */
                        public name: string;

                        /**
                         * Creates a new DatabaseRole instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DatabaseRole instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IDatabaseRole): google.spanner.admin.database.v1.DatabaseRole;

                        /**
                         * Encodes the specified DatabaseRole message. Does not implicitly {@link google.spanner.admin.database.v1.DatabaseRole.verify|verify} messages.
                         * @param message DatabaseRole message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IDatabaseRole, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DatabaseRole message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.DatabaseRole.verify|verify} messages.
                         * @param message DatabaseRole message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IDatabaseRole, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DatabaseRole message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DatabaseRole
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.DatabaseRole;

                        /**
                         * Decodes a DatabaseRole message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DatabaseRole
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.DatabaseRole;

                        /**
                         * Verifies a DatabaseRole message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DatabaseRole message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DatabaseRole
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.DatabaseRole;

                        /**
                         * Creates a plain object from a DatabaseRole message. Also converts values to other types if specified.
                         * @param message DatabaseRole
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.DatabaseRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DatabaseRole to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DatabaseRole
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListDatabaseRolesRequest. */
                    interface IListDatabaseRolesRequest {

                        /** ListDatabaseRolesRequest parent */
                        parent?: (string|null);

                        /** ListDatabaseRolesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListDatabaseRolesRequest pageToken */
                        pageToken?: (string|null);
                    }

                    /** Represents a ListDatabaseRolesRequest. */
                    class ListDatabaseRolesRequest implements IListDatabaseRolesRequest {

                        /**
                         * Constructs a new ListDatabaseRolesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListDatabaseRolesRequest);

                        /** ListDatabaseRolesRequest parent. */
                        public parent: string;

                        /** ListDatabaseRolesRequest pageSize. */
                        public pageSize: number;

                        /** ListDatabaseRolesRequest pageToken. */
                        public pageToken: string;

                        /**
                         * Creates a new ListDatabaseRolesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListDatabaseRolesRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListDatabaseRolesRequest): google.spanner.admin.database.v1.ListDatabaseRolesRequest;

                        /**
                         * Encodes the specified ListDatabaseRolesRequest message. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabaseRolesRequest.verify|verify} messages.
                         * @param message ListDatabaseRolesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListDatabaseRolesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListDatabaseRolesRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabaseRolesRequest.verify|verify} messages.
                         * @param message ListDatabaseRolesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListDatabaseRolesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListDatabaseRolesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListDatabaseRolesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListDatabaseRolesRequest;

                        /**
                         * Decodes a ListDatabaseRolesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListDatabaseRolesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListDatabaseRolesRequest;

                        /**
                         * Verifies a ListDatabaseRolesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListDatabaseRolesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListDatabaseRolesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListDatabaseRolesRequest;

                        /**
                         * Creates a plain object from a ListDatabaseRolesRequest message. Also converts values to other types if specified.
                         * @param message ListDatabaseRolesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListDatabaseRolesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListDatabaseRolesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListDatabaseRolesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListDatabaseRolesResponse. */
                    interface IListDatabaseRolesResponse {

                        /** ListDatabaseRolesResponse databaseRoles */
                        databaseRoles?: (google.spanner.admin.database.v1.IDatabaseRole[]|null);

                        /** ListDatabaseRolesResponse nextPageToken */
                        nextPageToken?: (string|null);
                    }

                    /** Represents a ListDatabaseRolesResponse. */
                    class ListDatabaseRolesResponse implements IListDatabaseRolesResponse {

                        /**
                         * Constructs a new ListDatabaseRolesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IListDatabaseRolesResponse);

                        /** ListDatabaseRolesResponse databaseRoles. */
                        public databaseRoles: google.spanner.admin.database.v1.IDatabaseRole[];

                        /** ListDatabaseRolesResponse nextPageToken. */
                        public nextPageToken: string;

                        /**
                         * Creates a new ListDatabaseRolesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListDatabaseRolesResponse instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IListDatabaseRolesResponse): google.spanner.admin.database.v1.ListDatabaseRolesResponse;

                        /**
                         * Encodes the specified ListDatabaseRolesResponse message. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabaseRolesResponse.verify|verify} messages.
                         * @param message ListDatabaseRolesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IListDatabaseRolesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListDatabaseRolesResponse message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.ListDatabaseRolesResponse.verify|verify} messages.
                         * @param message ListDatabaseRolesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IListDatabaseRolesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListDatabaseRolesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListDatabaseRolesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.ListDatabaseRolesResponse;

                        /**
                         * Decodes a ListDatabaseRolesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListDatabaseRolesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.ListDatabaseRolesResponse;

                        /**
                         * Verifies a ListDatabaseRolesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListDatabaseRolesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListDatabaseRolesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.ListDatabaseRolesResponse;

                        /**
                         * Creates a plain object from a ListDatabaseRolesResponse message. Also converts values to other types if specified.
                         * @param message ListDatabaseRolesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.ListDatabaseRolesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListDatabaseRolesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListDatabaseRolesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AddSplitPointsRequest. */
                    interface IAddSplitPointsRequest {

                        /** AddSplitPointsRequest database */
                        database?: (string|null);

                        /** AddSplitPointsRequest splitPoints */
                        splitPoints?: (google.spanner.admin.database.v1.ISplitPoints[]|null);

                        /** AddSplitPointsRequest initiator */
                        initiator?: (string|null);
                    }

                    /** Represents an AddSplitPointsRequest. */
                    class AddSplitPointsRequest implements IAddSplitPointsRequest {

                        /**
                         * Constructs a new AddSplitPointsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IAddSplitPointsRequest);

                        /** AddSplitPointsRequest database. */
                        public database: string;

                        /** AddSplitPointsRequest splitPoints. */
                        public splitPoints: google.spanner.admin.database.v1.ISplitPoints[];

                        /** AddSplitPointsRequest initiator. */
                        public initiator: string;

                        /**
                         * Creates a new AddSplitPointsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AddSplitPointsRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IAddSplitPointsRequest): google.spanner.admin.database.v1.AddSplitPointsRequest;

                        /**
                         * Encodes the specified AddSplitPointsRequest message. Does not implicitly {@link google.spanner.admin.database.v1.AddSplitPointsRequest.verify|verify} messages.
                         * @param message AddSplitPointsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IAddSplitPointsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AddSplitPointsRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.AddSplitPointsRequest.verify|verify} messages.
                         * @param message AddSplitPointsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IAddSplitPointsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AddSplitPointsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AddSplitPointsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.AddSplitPointsRequest;

                        /**
                         * Decodes an AddSplitPointsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AddSplitPointsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.AddSplitPointsRequest;

                        /**
                         * Verifies an AddSplitPointsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AddSplitPointsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AddSplitPointsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.AddSplitPointsRequest;

                        /**
                         * Creates a plain object from an AddSplitPointsRequest message. Also converts values to other types if specified.
                         * @param message AddSplitPointsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.AddSplitPointsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AddSplitPointsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AddSplitPointsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AddSplitPointsResponse. */
                    interface IAddSplitPointsResponse {
                    }

                    /** Represents an AddSplitPointsResponse. */
                    class AddSplitPointsResponse implements IAddSplitPointsResponse {

                        /**
                         * Constructs a new AddSplitPointsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IAddSplitPointsResponse);

                        /**
                         * Creates a new AddSplitPointsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AddSplitPointsResponse instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IAddSplitPointsResponse): google.spanner.admin.database.v1.AddSplitPointsResponse;

                        /**
                         * Encodes the specified AddSplitPointsResponse message. Does not implicitly {@link google.spanner.admin.database.v1.AddSplitPointsResponse.verify|verify} messages.
                         * @param message AddSplitPointsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IAddSplitPointsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AddSplitPointsResponse message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.AddSplitPointsResponse.verify|verify} messages.
                         * @param message AddSplitPointsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IAddSplitPointsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AddSplitPointsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AddSplitPointsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.AddSplitPointsResponse;

                        /**
                         * Decodes an AddSplitPointsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AddSplitPointsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.AddSplitPointsResponse;

                        /**
                         * Verifies an AddSplitPointsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AddSplitPointsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AddSplitPointsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.AddSplitPointsResponse;

                        /**
                         * Creates a plain object from an AddSplitPointsResponse message. Also converts values to other types if specified.
                         * @param message AddSplitPointsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.AddSplitPointsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AddSplitPointsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AddSplitPointsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SplitPoints. */
                    interface ISplitPoints {

                        /** SplitPoints table */
                        table?: (string|null);

                        /** SplitPoints index */
                        index?: (string|null);

                        /** SplitPoints keys */
                        keys?: (google.spanner.admin.database.v1.SplitPoints.IKey[]|null);

                        /** SplitPoints expireTime */
                        expireTime?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a SplitPoints. */
                    class SplitPoints implements ISplitPoints {

                        /**
                         * Constructs a new SplitPoints.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.ISplitPoints);

                        /** SplitPoints table. */
                        public table: string;

                        /** SplitPoints index. */
                        public index: string;

                        /** SplitPoints keys. */
                        public keys: google.spanner.admin.database.v1.SplitPoints.IKey[];

                        /** SplitPoints expireTime. */
                        public expireTime?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new SplitPoints instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SplitPoints instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.ISplitPoints): google.spanner.admin.database.v1.SplitPoints;

                        /**
                         * Encodes the specified SplitPoints message. Does not implicitly {@link google.spanner.admin.database.v1.SplitPoints.verify|verify} messages.
                         * @param message SplitPoints message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.ISplitPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SplitPoints message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.SplitPoints.verify|verify} messages.
                         * @param message SplitPoints message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.ISplitPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SplitPoints message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SplitPoints
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.SplitPoints;

                        /**
                         * Decodes a SplitPoints message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SplitPoints
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.SplitPoints;

                        /**
                         * Verifies a SplitPoints message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SplitPoints message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SplitPoints
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.SplitPoints;

                        /**
                         * Creates a plain object from a SplitPoints message. Also converts values to other types if specified.
                         * @param message SplitPoints
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.SplitPoints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SplitPoints to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SplitPoints
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace SplitPoints {

                        /** Properties of a Key. */
                        interface IKey {

                            /** Key keyParts */
                            keyParts?: (google.protobuf.IListValue|null);
                        }

                        /** Represents a Key. */
                        class Key implements IKey {

                            /**
                             * Constructs a new Key.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.spanner.admin.database.v1.SplitPoints.IKey);

                            /** Key keyParts. */
                            public keyParts?: (google.protobuf.IListValue|null);

                            /**
                             * Creates a new Key instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Key instance
                             */
                            public static create(properties?: google.spanner.admin.database.v1.SplitPoints.IKey): google.spanner.admin.database.v1.SplitPoints.Key;

                            /**
                             * Encodes the specified Key message. Does not implicitly {@link google.spanner.admin.database.v1.SplitPoints.Key.verify|verify} messages.
                             * @param message Key message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.spanner.admin.database.v1.SplitPoints.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Key message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.SplitPoints.Key.verify|verify} messages.
                             * @param message Key message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.spanner.admin.database.v1.SplitPoints.IKey, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Key message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Key
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.SplitPoints.Key;

                            /**
                             * Decodes a Key message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Key
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.SplitPoints.Key;

                            /**
                             * Verifies a Key message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Key message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Key
                             */
                            public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.SplitPoints.Key;

                            /**
                             * Creates a plain object from a Key message. Also converts values to other types if specified.
                             * @param message Key
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.spanner.admin.database.v1.SplitPoints.Key, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Key to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Key
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an InternalUpdateGraphOperationRequest. */
                    interface IInternalUpdateGraphOperationRequest {

                        /** InternalUpdateGraphOperationRequest database */
                        database?: (string|null);

                        /** InternalUpdateGraphOperationRequest operationId */
                        operationId?: (string|null);

                        /** InternalUpdateGraphOperationRequest vmIdentityToken */
                        vmIdentityToken?: (string|null);

                        /** InternalUpdateGraphOperationRequest progress */
                        progress?: (number|null);

                        /** InternalUpdateGraphOperationRequest status */
                        status?: (google.rpc.IStatus|null);
                    }

                    /** Represents an InternalUpdateGraphOperationRequest. */
                    class InternalUpdateGraphOperationRequest implements IInternalUpdateGraphOperationRequest {

                        /**
                         * Constructs a new InternalUpdateGraphOperationRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest);

                        /** InternalUpdateGraphOperationRequest database. */
                        public database: string;

                        /** InternalUpdateGraphOperationRequest operationId. */
                        public operationId: string;

                        /** InternalUpdateGraphOperationRequest vmIdentityToken. */
                        public vmIdentityToken: string;

                        /** InternalUpdateGraphOperationRequest progress. */
                        public progress: number;

                        /** InternalUpdateGraphOperationRequest status. */
                        public status?: (google.rpc.IStatus|null);

                        /**
                         * Creates a new InternalUpdateGraphOperationRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InternalUpdateGraphOperationRequest instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest): google.spanner.admin.database.v1.InternalUpdateGraphOperationRequest;

                        /**
                         * Encodes the specified InternalUpdateGraphOperationRequest message. Does not implicitly {@link google.spanner.admin.database.v1.InternalUpdateGraphOperationRequest.verify|verify} messages.
                         * @param message InternalUpdateGraphOperationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InternalUpdateGraphOperationRequest message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.InternalUpdateGraphOperationRequest.verify|verify} messages.
                         * @param message InternalUpdateGraphOperationRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IInternalUpdateGraphOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InternalUpdateGraphOperationRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InternalUpdateGraphOperationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.InternalUpdateGraphOperationRequest;

                        /**
                         * Decodes an InternalUpdateGraphOperationRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InternalUpdateGraphOperationRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.InternalUpdateGraphOperationRequest;

                        /**
                         * Verifies an InternalUpdateGraphOperationRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InternalUpdateGraphOperationRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InternalUpdateGraphOperationRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.InternalUpdateGraphOperationRequest;

                        /**
                         * Creates a plain object from an InternalUpdateGraphOperationRequest message. Also converts values to other types if specified.
                         * @param message InternalUpdateGraphOperationRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.InternalUpdateGraphOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InternalUpdateGraphOperationRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InternalUpdateGraphOperationRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an InternalUpdateGraphOperationResponse. */
                    interface IInternalUpdateGraphOperationResponse {
                    }

                    /** Represents an InternalUpdateGraphOperationResponse. */
                    class InternalUpdateGraphOperationResponse implements IInternalUpdateGraphOperationResponse {

                        /**
                         * Constructs a new InternalUpdateGraphOperationResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.spanner.admin.database.v1.IInternalUpdateGraphOperationResponse);

                        /**
                         * Creates a new InternalUpdateGraphOperationResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns InternalUpdateGraphOperationResponse instance
                         */
                        public static create(properties?: google.spanner.admin.database.v1.IInternalUpdateGraphOperationResponse): google.spanner.admin.database.v1.InternalUpdateGraphOperationResponse;

                        /**
                         * Encodes the specified InternalUpdateGraphOperationResponse message. Does not implicitly {@link google.spanner.admin.database.v1.InternalUpdateGraphOperationResponse.verify|verify} messages.
                         * @param message InternalUpdateGraphOperationResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.spanner.admin.database.v1.IInternalUpdateGraphOperationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified InternalUpdateGraphOperationResponse message, length delimited. Does not implicitly {@link google.spanner.admin.database.v1.InternalUpdateGraphOperationResponse.verify|verify} messages.
                         * @param message InternalUpdateGraphOperationResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.spanner.admin.database.v1.IInternalUpdateGraphOperationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an InternalUpdateGraphOperationResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns InternalUpdateGraphOperationResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.spanner.admin.database.v1.InternalUpdateGraphOperationResponse;

                        /**
                         * Decodes an InternalUpdateGraphOperationResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns InternalUpdateGraphOperationResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.spanner.admin.database.v1.InternalUpdateGraphOperationResponse;

                        /**
                         * Verifies an InternalUpdateGraphOperationResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an InternalUpdateGraphOperationResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns InternalUpdateGraphOperationResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.spanner.admin.database.v1.InternalUpdateGraphOperationResponse;

                        /**
                         * Creates a plain object from an InternalUpdateGraphOperationResponse message. Also converts values to other types if specified.
                         * @param message InternalUpdateGraphOperationResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.spanner.admin.database.v1.InternalUpdateGraphOperationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this InternalUpdateGraphOperationResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for InternalUpdateGraphOperationResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
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

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Struct
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue. */
            public numberValue?: (number|null);

            /** Value stringValue. */
            public stringValue?: (string|null);

            /** Value boolValue. */
            public boolValue?: (boolean|null);

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

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
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ListValue
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

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a IAMPolicy */
            class IAMPolicy extends $protobuf.rpc.Service {

                /**
                 * Constructs a new IAMPolicy service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new IAMPolicy service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IAMPolicy;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.SetIamPolicyCallback): void;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.GetIamPolicyCallback): void;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.iam.v1.IAMPolicy.TestIamPermissionsCallback): void;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @returns Promise
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
            }

            namespace IAMPolicy {

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|setIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|getIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy|testIamPermissions}.
                 * @param error Error, if any
                 * @param [response] TestIamPermissionsResponse
                 */
                type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
            }

            /** Properties of a SetIamPolicyRequest. */
            interface ISetIamPolicyRequest {

                /** SetIamPolicyRequest resource */
                resource?: (string|null);

                /** SetIamPolicyRequest policy */
                policy?: (google.iam.v1.IPolicy|null);

                /** SetIamPolicyRequest updateMask */
                updateMask?: (google.protobuf.IFieldMask|null);
            }

            /** Represents a SetIamPolicyRequest. */
            class SetIamPolicyRequest implements ISetIamPolicyRequest {

                /**
                 * Constructs a new SetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ISetIamPolicyRequest);

                /** SetIamPolicyRequest resource. */
                public resource: string;

                /** SetIamPolicyRequest policy. */
                public policy?: (google.iam.v1.IPolicy|null);

                /** SetIamPolicyRequest updateMask. */
                public updateMask?: (google.protobuf.IFieldMask|null);

                /**
                 * Creates a new SetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.ISetIamPolicyRequest): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Encodes the specified SetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Verifies a SetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Creates a plain object from a SetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message SetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.SetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for SetIamPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetIamPolicyRequest. */
            interface IGetIamPolicyRequest {

                /** GetIamPolicyRequest resource */
                resource?: (string|null);

                /** GetIamPolicyRequest options */
                options?: (google.iam.v1.IGetPolicyOptions|null);
            }

            /** Represents a GetIamPolicyRequest. */
            class GetIamPolicyRequest implements IGetIamPolicyRequest {

                /**
                 * Constructs a new GetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetIamPolicyRequest);

                /** GetIamPolicyRequest resource. */
                public resource: string;

                /** GetIamPolicyRequest options. */
                public options?: (google.iam.v1.IGetPolicyOptions|null);

                /**
                 * Creates a new GetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.IGetIamPolicyRequest): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Encodes the specified GetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Verifies a GetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Creates a plain object from a GetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetIamPolicyRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestIamPermissionsRequest. */
            interface ITestIamPermissionsRequest {

                /** TestIamPermissionsRequest resource */
                resource?: (string|null);

                /** TestIamPermissionsRequest permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsRequest. */
            class TestIamPermissionsRequest implements ITestIamPermissionsRequest {

                /**
                 * Constructs a new TestIamPermissionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsRequest);

                /** TestIamPermissionsRequest resource. */
                public resource: string;

                /** TestIamPermissionsRequest permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsRequest instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsRequest): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Encodes the specified TestIamPermissionsRequest message. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsRequest message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Verifies a TestIamPermissionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Creates a plain object from a TestIamPermissionsRequest message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestIamPermissionsRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TestIamPermissionsResponse. */
            interface ITestIamPermissionsResponse {

                /** TestIamPermissionsResponse permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsResponse. */
            class TestIamPermissionsResponse implements ITestIamPermissionsResponse {

                /**
                 * Constructs a new TestIamPermissionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsResponse);

                /** TestIamPermissionsResponse permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsResponse instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsResponse): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Encodes the specified TestIamPermissionsResponse message. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsResponse message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Verifies a TestIamPermissionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Creates a plain object from a TestIamPermissionsResponse message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TestIamPermissionsResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GetPolicyOptions. */
            interface IGetPolicyOptions {

                /** GetPolicyOptions requestedPolicyVersion */
                requestedPolicyVersion?: (number|null);
            }

            /** Represents a GetPolicyOptions. */
            class GetPolicyOptions implements IGetPolicyOptions {

                /**
                 * Constructs a new GetPolicyOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetPolicyOptions);

                /** GetPolicyOptions requestedPolicyVersion. */
                public requestedPolicyVersion: number;

                /**
                 * Creates a new GetPolicyOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyOptions instance
                 */
                public static create(properties?: google.iam.v1.IGetPolicyOptions): google.iam.v1.GetPolicyOptions;

                /**
                 * Encodes the specified GetPolicyOptions message. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyOptions message, length delimited. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetPolicyOptions;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetPolicyOptions;

                /**
                 * Verifies a GetPolicyOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetPolicyOptions;

                /**
                 * Creates a plain object from a GetPolicyOptions message. Also converts values to other types if specified.
                 * @param message GetPolicyOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetPolicyOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GetPolicyOptions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy auditConfigs */
                auditConfigs?: (google.iam.v1.IAuditConfig[]|null);

                /** Policy etag */
                etag?: (Uint8Array|Buffer|string|null);
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

                /** Policy auditConfigs. */
                public auditConfigs: google.iam.v1.IAuditConfig[];

                /** Policy etag. */
                public etag: (Uint8Array|Buffer|string);

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

                /**
                 * Gets the default type url for Policy
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for Binding
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditConfig. */
            interface IAuditConfig {

                /** AuditConfig service */
                service?: (string|null);

                /** AuditConfig auditLogConfigs */
                auditLogConfigs?: (google.iam.v1.IAuditLogConfig[]|null);
            }

            /** Represents an AuditConfig. */
            class AuditConfig implements IAuditConfig {

                /**
                 * Constructs a new AuditConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfig);

                /** AuditConfig service. */
                public service: string;

                /** AuditConfig auditLogConfigs. */
                public auditLogConfigs: google.iam.v1.IAuditLogConfig[];

                /**
                 * Creates a new AuditConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfig): google.iam.v1.AuditConfig;

                /**
                 * Encodes the specified AuditConfig message. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfig.verify|verify} messages.
                 * @param message AuditConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfig;

                /**
                 * Decodes an AuditConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfig;

                /**
                 * Verifies an AuditConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfig;

                /**
                 * Creates a plain object from an AuditConfig message. Also converts values to other types if specified.
                 * @param message AuditConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AuditLogConfig. */
            interface IAuditLogConfig {

                /** AuditLogConfig logType */
                logType?: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType|null);

                /** AuditLogConfig exemptedMembers */
                exemptedMembers?: (string[]|null);
            }

            /** Represents an AuditLogConfig. */
            class AuditLogConfig implements IAuditLogConfig {

                /**
                 * Constructs a new AuditLogConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditLogConfig);

                /** AuditLogConfig logType. */
                public logType: (google.iam.v1.AuditLogConfig.LogType|keyof typeof google.iam.v1.AuditLogConfig.LogType);

                /** AuditLogConfig exemptedMembers. */
                public exemptedMembers: string[];

                /**
                 * Creates a new AuditLogConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditLogConfig instance
                 */
                public static create(properties?: google.iam.v1.IAuditLogConfig): google.iam.v1.AuditLogConfig;

                /**
                 * Encodes the specified AuditLogConfig message. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditLogConfig message, length delimited. Does not implicitly {@link google.iam.v1.AuditLogConfig.verify|verify} messages.
                 * @param message AuditLogConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditLogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditLogConfig;

                /**
                 * Decodes an AuditLogConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditLogConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditLogConfig;

                /**
                 * Verifies an AuditLogConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditLogConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditLogConfig
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditLogConfig;

                /**
                 * Creates a plain object from an AuditLogConfig message. Also converts values to other types if specified.
                 * @param message AuditLogConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditLogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditLogConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for AuditLogConfig
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace AuditLogConfig {

                /** LogType enum. */
                enum LogType {
                    LOG_TYPE_UNSPECIFIED = 0,
                    ADMIN_READ = 1,
                    DATA_WRITE = 2,
                    DATA_READ = 3
                }
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

                /**
                 * Gets the default type url for PolicyDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for BindingDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

                /**
                 * Gets the default type url for AuditConfigDelta
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
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

            /**
             * Gets the default type url for Expr
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
