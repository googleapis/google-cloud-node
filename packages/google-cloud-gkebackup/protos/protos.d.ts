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

        /** Namespace gkebackup. */
        namespace gkebackup {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Backup. */
                interface IBackup {

                    /** Backup name */
                    name?: (string|null);

                    /** Backup uid */
                    uid?: (string|null);

                    /** Backup createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Backup manual */
                    manual?: (boolean|null);

                    /** Backup labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Backup deleteLockDays */
                    deleteLockDays?: (number|null);

                    /** Backup deleteLockExpireTime */
                    deleteLockExpireTime?: (google.protobuf.ITimestamp|null);

                    /** Backup retainDays */
                    retainDays?: (number|null);

                    /** Backup retainExpireTime */
                    retainExpireTime?: (google.protobuf.ITimestamp|null);

                    /** Backup encryptionKey */
                    encryptionKey?: (google.cloud.gkebackup.v1.IEncryptionKey|null);

                    /** Backup allNamespaces */
                    allNamespaces?: (boolean|null);

                    /** Backup selectedNamespaces */
                    selectedNamespaces?: (google.cloud.gkebackup.v1.INamespaces|null);

                    /** Backup selectedApplications */
                    selectedApplications?: (google.cloud.gkebackup.v1.INamespacedNames|null);

                    /** Backup containsVolumeData */
                    containsVolumeData?: (boolean|null);

                    /** Backup containsSecrets */
                    containsSecrets?: (boolean|null);

                    /** Backup clusterMetadata */
                    clusterMetadata?: (google.cloud.gkebackup.v1.Backup.IClusterMetadata|null);

                    /** Backup state */
                    state?: (google.cloud.gkebackup.v1.Backup.State|keyof typeof google.cloud.gkebackup.v1.Backup.State|null);

                    /** Backup stateReason */
                    stateReason?: (string|null);

                    /** Backup completeTime */
                    completeTime?: (google.protobuf.ITimestamp|null);

                    /** Backup resourceCount */
                    resourceCount?: (number|null);

                    /** Backup volumeCount */
                    volumeCount?: (number|null);

                    /** Backup sizeBytes */
                    sizeBytes?: (number|Long|string|null);

                    /** Backup etag */
                    etag?: (string|null);

                    /** Backup description */
                    description?: (string|null);

                    /** Backup podCount */
                    podCount?: (number|null);

                    /** Backup configBackupSizeBytes */
                    configBackupSizeBytes?: (number|Long|string|null);
                }

                /** Represents a Backup. */
                class Backup implements IBackup {

                    /**
                     * Constructs a new Backup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IBackup);

                    /** Backup name. */
                    public name: string;

                    /** Backup uid. */
                    public uid: string;

                    /** Backup createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Backup updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Backup manual. */
                    public manual: boolean;

                    /** Backup labels. */
                    public labels: { [k: string]: string };

                    /** Backup deleteLockDays. */
                    public deleteLockDays: number;

                    /** Backup deleteLockExpireTime. */
                    public deleteLockExpireTime?: (google.protobuf.ITimestamp|null);

                    /** Backup retainDays. */
                    public retainDays: number;

                    /** Backup retainExpireTime. */
                    public retainExpireTime?: (google.protobuf.ITimestamp|null);

                    /** Backup encryptionKey. */
                    public encryptionKey?: (google.cloud.gkebackup.v1.IEncryptionKey|null);

                    /** Backup allNamespaces. */
                    public allNamespaces?: (boolean|null);

                    /** Backup selectedNamespaces. */
                    public selectedNamespaces?: (google.cloud.gkebackup.v1.INamespaces|null);

                    /** Backup selectedApplications. */
                    public selectedApplications?: (google.cloud.gkebackup.v1.INamespacedNames|null);

                    /** Backup containsVolumeData. */
                    public containsVolumeData: boolean;

                    /** Backup containsSecrets. */
                    public containsSecrets: boolean;

                    /** Backup clusterMetadata. */
                    public clusterMetadata?: (google.cloud.gkebackup.v1.Backup.IClusterMetadata|null);

                    /** Backup state. */
                    public state: (google.cloud.gkebackup.v1.Backup.State|keyof typeof google.cloud.gkebackup.v1.Backup.State);

                    /** Backup stateReason. */
                    public stateReason: string;

                    /** Backup completeTime. */
                    public completeTime?: (google.protobuf.ITimestamp|null);

                    /** Backup resourceCount. */
                    public resourceCount: number;

                    /** Backup volumeCount. */
                    public volumeCount: number;

                    /** Backup sizeBytes. */
                    public sizeBytes: (number|Long|string);

                    /** Backup etag. */
                    public etag: string;

                    /** Backup description. */
                    public description: string;

                    /** Backup podCount. */
                    public podCount: number;

                    /** Backup configBackupSizeBytes. */
                    public configBackupSizeBytes: (number|Long|string);

                    /** Backup backupScope. */
                    public backupScope?: ("allNamespaces"|"selectedNamespaces"|"selectedApplications");

                    /**
                     * Creates a new Backup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Backup instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IBackup): google.cloud.gkebackup.v1.Backup;

                    /**
                     * Encodes the specified Backup message. Does not implicitly {@link google.cloud.gkebackup.v1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Backup message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.Backup.verify|verify} messages.
                     * @param message Backup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Backup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.Backup;

                    /**
                     * Decodes a Backup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Backup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.Backup;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.Backup;

                    /**
                     * Creates a plain object from a Backup message. Also converts values to other types if specified.
                     * @param message Backup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.Backup, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                    /** Properties of a ClusterMetadata. */
                    interface IClusterMetadata {

                        /** ClusterMetadata cluster */
                        cluster?: (string|null);

                        /** ClusterMetadata k8sVersion */
                        k8sVersion?: (string|null);

                        /** ClusterMetadata backupCrdVersions */
                        backupCrdVersions?: ({ [k: string]: string }|null);

                        /** ClusterMetadata gkeVersion */
                        gkeVersion?: (string|null);

                        /** ClusterMetadata anthosVersion */
                        anthosVersion?: (string|null);
                    }

                    /** Represents a ClusterMetadata. */
                    class ClusterMetadata implements IClusterMetadata {

                        /**
                         * Constructs a new ClusterMetadata.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gkebackup.v1.Backup.IClusterMetadata);

                        /** ClusterMetadata cluster. */
                        public cluster: string;

                        /** ClusterMetadata k8sVersion. */
                        public k8sVersion: string;

                        /** ClusterMetadata backupCrdVersions. */
                        public backupCrdVersions: { [k: string]: string };

                        /** ClusterMetadata gkeVersion. */
                        public gkeVersion?: (string|null);

                        /** ClusterMetadata anthosVersion. */
                        public anthosVersion?: (string|null);

                        /** ClusterMetadata platformVersion. */
                        public platformVersion?: ("gkeVersion"|"anthosVersion");

                        /**
                         * Creates a new ClusterMetadata instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClusterMetadata instance
                         */
                        public static create(properties?: google.cloud.gkebackup.v1.Backup.IClusterMetadata): google.cloud.gkebackup.v1.Backup.ClusterMetadata;

                        /**
                         * Encodes the specified ClusterMetadata message. Does not implicitly {@link google.cloud.gkebackup.v1.Backup.ClusterMetadata.verify|verify} messages.
                         * @param message ClusterMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gkebackup.v1.Backup.IClusterMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClusterMetadata message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.Backup.ClusterMetadata.verify|verify} messages.
                         * @param message ClusterMetadata message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gkebackup.v1.Backup.IClusterMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClusterMetadata message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClusterMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.Backup.ClusterMetadata;

                        /**
                         * Decodes a ClusterMetadata message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClusterMetadata
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.Backup.ClusterMetadata;

                        /**
                         * Verifies a ClusterMetadata message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClusterMetadata message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClusterMetadata
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.Backup.ClusterMetadata;

                        /**
                         * Creates a plain object from a ClusterMetadata message. Also converts values to other types if specified.
                         * @param message ClusterMetadata
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gkebackup.v1.Backup.ClusterMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClusterMetadata to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClusterMetadata
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        IN_PROGRESS = 2,
                        SUCCEEDED = 3,
                        FAILED = 4,
                        DELETING = 5
                    }
                }

                /** Properties of a Namespaces. */
                interface INamespaces {

                    /** Namespaces namespaces */
                    namespaces?: (string[]|null);
                }

                /** Represents a Namespaces. */
                class Namespaces implements INamespaces {

                    /**
                     * Constructs a new Namespaces.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.INamespaces);

                    /** Namespaces namespaces. */
                    public namespaces: string[];

                    /**
                     * Creates a new Namespaces instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Namespaces instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.INamespaces): google.cloud.gkebackup.v1.Namespaces;

                    /**
                     * Encodes the specified Namespaces message. Does not implicitly {@link google.cloud.gkebackup.v1.Namespaces.verify|verify} messages.
                     * @param message Namespaces message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.INamespaces, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Namespaces message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.Namespaces.verify|verify} messages.
                     * @param message Namespaces message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.INamespaces, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Namespaces message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Namespaces
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.Namespaces;

                    /**
                     * Decodes a Namespaces message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Namespaces
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.Namespaces;

                    /**
                     * Verifies a Namespaces message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Namespaces message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Namespaces
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.Namespaces;

                    /**
                     * Creates a plain object from a Namespaces message. Also converts values to other types if specified.
                     * @param message Namespaces
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.Namespaces, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Namespaces to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Namespaces
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NamespacedName. */
                interface INamespacedName {

                    /** NamespacedName namespace */
                    namespace?: (string|null);

                    /** NamespacedName name */
                    name?: (string|null);
                }

                /** Represents a NamespacedName. */
                class NamespacedName implements INamespacedName {

                    /**
                     * Constructs a new NamespacedName.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.INamespacedName);

                    /** NamespacedName namespace. */
                    public namespace: string;

                    /** NamespacedName name. */
                    public name: string;

                    /**
                     * Creates a new NamespacedName instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NamespacedName instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.INamespacedName): google.cloud.gkebackup.v1.NamespacedName;

                    /**
                     * Encodes the specified NamespacedName message. Does not implicitly {@link google.cloud.gkebackup.v1.NamespacedName.verify|verify} messages.
                     * @param message NamespacedName message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.INamespacedName, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NamespacedName message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.NamespacedName.verify|verify} messages.
                     * @param message NamespacedName message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.INamespacedName, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NamespacedName message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NamespacedName
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.NamespacedName;

                    /**
                     * Decodes a NamespacedName message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NamespacedName
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.NamespacedName;

                    /**
                     * Verifies a NamespacedName message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NamespacedName message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NamespacedName
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.NamespacedName;

                    /**
                     * Creates a plain object from a NamespacedName message. Also converts values to other types if specified.
                     * @param message NamespacedName
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.NamespacedName, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NamespacedName to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NamespacedName
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a NamespacedNames. */
                interface INamespacedNames {

                    /** NamespacedNames namespacedNames */
                    namespacedNames?: (google.cloud.gkebackup.v1.INamespacedName[]|null);
                }

                /** Represents a NamespacedNames. */
                class NamespacedNames implements INamespacedNames {

                    /**
                     * Constructs a new NamespacedNames.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.INamespacedNames);

                    /** NamespacedNames namespacedNames. */
                    public namespacedNames: google.cloud.gkebackup.v1.INamespacedName[];

                    /**
                     * Creates a new NamespacedNames instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NamespacedNames instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.INamespacedNames): google.cloud.gkebackup.v1.NamespacedNames;

                    /**
                     * Encodes the specified NamespacedNames message. Does not implicitly {@link google.cloud.gkebackup.v1.NamespacedNames.verify|verify} messages.
                     * @param message NamespacedNames message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.INamespacedNames, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NamespacedNames message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.NamespacedNames.verify|verify} messages.
                     * @param message NamespacedNames message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.INamespacedNames, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NamespacedNames message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NamespacedNames
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.NamespacedNames;

                    /**
                     * Decodes a NamespacedNames message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NamespacedNames
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.NamespacedNames;

                    /**
                     * Verifies a NamespacedNames message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NamespacedNames message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NamespacedNames
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.NamespacedNames;

                    /**
                     * Creates a plain object from a NamespacedNames message. Also converts values to other types if specified.
                     * @param message NamespacedNames
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.NamespacedNames, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NamespacedNames to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for NamespacedNames
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EncryptionKey. */
                interface IEncryptionKey {

                    /** EncryptionKey gcpKmsEncryptionKey */
                    gcpKmsEncryptionKey?: (string|null);
                }

                /** Represents an EncryptionKey. */
                class EncryptionKey implements IEncryptionKey {

                    /**
                     * Constructs a new EncryptionKey.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IEncryptionKey);

                    /** EncryptionKey gcpKmsEncryptionKey. */
                    public gcpKmsEncryptionKey: string;

                    /**
                     * Creates a new EncryptionKey instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EncryptionKey instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IEncryptionKey): google.cloud.gkebackup.v1.EncryptionKey;

                    /**
                     * Encodes the specified EncryptionKey message. Does not implicitly {@link google.cloud.gkebackup.v1.EncryptionKey.verify|verify} messages.
                     * @param message EncryptionKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IEncryptionKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EncryptionKey message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.EncryptionKey.verify|verify} messages.
                     * @param message EncryptionKey message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IEncryptionKey, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EncryptionKey message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EncryptionKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.EncryptionKey;

                    /**
                     * Decodes an EncryptionKey message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EncryptionKey
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.EncryptionKey;

                    /**
                     * Verifies an EncryptionKey message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EncryptionKey message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EncryptionKey
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.EncryptionKey;

                    /**
                     * Creates a plain object from an EncryptionKey message. Also converts values to other types if specified.
                     * @param message EncryptionKey
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.EncryptionKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EncryptionKey to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EncryptionKey
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a BackupPlan. */
                interface IBackupPlan {

                    /** BackupPlan name */
                    name?: (string|null);

                    /** BackupPlan uid */
                    uid?: (string|null);

                    /** BackupPlan createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** BackupPlan updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** BackupPlan description */
                    description?: (string|null);

                    /** BackupPlan cluster */
                    cluster?: (string|null);

                    /** BackupPlan retentionPolicy */
                    retentionPolicy?: (google.cloud.gkebackup.v1.BackupPlan.IRetentionPolicy|null);

                    /** BackupPlan labels */
                    labels?: ({ [k: string]: string }|null);

                    /** BackupPlan backupSchedule */
                    backupSchedule?: (google.cloud.gkebackup.v1.BackupPlan.ISchedule|null);

                    /** BackupPlan etag */
                    etag?: (string|null);

                    /** BackupPlan deactivated */
                    deactivated?: (boolean|null);

                    /** BackupPlan backupConfig */
                    backupConfig?: (google.cloud.gkebackup.v1.BackupPlan.IBackupConfig|null);

                    /** BackupPlan protectedPodCount */
                    protectedPodCount?: (number|null);
                }

                /** Represents a BackupPlan. */
                class BackupPlan implements IBackupPlan {

                    /**
                     * Constructs a new BackupPlan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IBackupPlan);

                    /** BackupPlan name. */
                    public name: string;

                    /** BackupPlan uid. */
                    public uid: string;

                    /** BackupPlan createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** BackupPlan updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** BackupPlan description. */
                    public description: string;

                    /** BackupPlan cluster. */
                    public cluster: string;

                    /** BackupPlan retentionPolicy. */
                    public retentionPolicy?: (google.cloud.gkebackup.v1.BackupPlan.IRetentionPolicy|null);

                    /** BackupPlan labels. */
                    public labels: { [k: string]: string };

                    /** BackupPlan backupSchedule. */
                    public backupSchedule?: (google.cloud.gkebackup.v1.BackupPlan.ISchedule|null);

                    /** BackupPlan etag. */
                    public etag: string;

                    /** BackupPlan deactivated. */
                    public deactivated: boolean;

                    /** BackupPlan backupConfig. */
                    public backupConfig?: (google.cloud.gkebackup.v1.BackupPlan.IBackupConfig|null);

                    /** BackupPlan protectedPodCount. */
                    public protectedPodCount: number;

                    /**
                     * Creates a new BackupPlan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BackupPlan instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IBackupPlan): google.cloud.gkebackup.v1.BackupPlan;

                    /**
                     * Encodes the specified BackupPlan message. Does not implicitly {@link google.cloud.gkebackup.v1.BackupPlan.verify|verify} messages.
                     * @param message BackupPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IBackupPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BackupPlan message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.BackupPlan.verify|verify} messages.
                     * @param message BackupPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IBackupPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BackupPlan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BackupPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.BackupPlan;

                    /**
                     * Decodes a BackupPlan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BackupPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.BackupPlan;

                    /**
                     * Verifies a BackupPlan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BackupPlan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BackupPlan
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.BackupPlan;

                    /**
                     * Creates a plain object from a BackupPlan message. Also converts values to other types if specified.
                     * @param message BackupPlan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.BackupPlan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BackupPlan to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for BackupPlan
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace BackupPlan {

                    /** Properties of a RetentionPolicy. */
                    interface IRetentionPolicy {

                        /** RetentionPolicy backupDeleteLockDays */
                        backupDeleteLockDays?: (number|null);

                        /** RetentionPolicy backupRetainDays */
                        backupRetainDays?: (number|null);

                        /** RetentionPolicy locked */
                        locked?: (boolean|null);
                    }

                    /** Represents a RetentionPolicy. */
                    class RetentionPolicy implements IRetentionPolicy {

                        /**
                         * Constructs a new RetentionPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gkebackup.v1.BackupPlan.IRetentionPolicy);

                        /** RetentionPolicy backupDeleteLockDays. */
                        public backupDeleteLockDays: number;

                        /** RetentionPolicy backupRetainDays. */
                        public backupRetainDays: number;

                        /** RetentionPolicy locked. */
                        public locked: boolean;

                        /**
                         * Creates a new RetentionPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RetentionPolicy instance
                         */
                        public static create(properties?: google.cloud.gkebackup.v1.BackupPlan.IRetentionPolicy): google.cloud.gkebackup.v1.BackupPlan.RetentionPolicy;

                        /**
                         * Encodes the specified RetentionPolicy message. Does not implicitly {@link google.cloud.gkebackup.v1.BackupPlan.RetentionPolicy.verify|verify} messages.
                         * @param message RetentionPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gkebackup.v1.BackupPlan.IRetentionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RetentionPolicy message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.BackupPlan.RetentionPolicy.verify|verify} messages.
                         * @param message RetentionPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gkebackup.v1.BackupPlan.IRetentionPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RetentionPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RetentionPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.BackupPlan.RetentionPolicy;

                        /**
                         * Decodes a RetentionPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RetentionPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.BackupPlan.RetentionPolicy;

                        /**
                         * Verifies a RetentionPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RetentionPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RetentionPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.BackupPlan.RetentionPolicy;

                        /**
                         * Creates a plain object from a RetentionPolicy message. Also converts values to other types if specified.
                         * @param message RetentionPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gkebackup.v1.BackupPlan.RetentionPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RetentionPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RetentionPolicy
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Schedule. */
                    interface ISchedule {

                        /** Schedule cronSchedule */
                        cronSchedule?: (string|null);

                        /** Schedule paused */
                        paused?: (boolean|null);
                    }

                    /** Represents a Schedule. */
                    class Schedule implements ISchedule {

                        /**
                         * Constructs a new Schedule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gkebackup.v1.BackupPlan.ISchedule);

                        /** Schedule cronSchedule. */
                        public cronSchedule: string;

                        /** Schedule paused. */
                        public paused: boolean;

                        /**
                         * Creates a new Schedule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Schedule instance
                         */
                        public static create(properties?: google.cloud.gkebackup.v1.BackupPlan.ISchedule): google.cloud.gkebackup.v1.BackupPlan.Schedule;

                        /**
                         * Encodes the specified Schedule message. Does not implicitly {@link google.cloud.gkebackup.v1.BackupPlan.Schedule.verify|verify} messages.
                         * @param message Schedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gkebackup.v1.BackupPlan.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Schedule message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.BackupPlan.Schedule.verify|verify} messages.
                         * @param message Schedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gkebackup.v1.BackupPlan.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Schedule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Schedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.BackupPlan.Schedule;

                        /**
                         * Decodes a Schedule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Schedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.BackupPlan.Schedule;

                        /**
                         * Verifies a Schedule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Schedule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Schedule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.BackupPlan.Schedule;

                        /**
                         * Creates a plain object from a Schedule message. Also converts values to other types if specified.
                         * @param message Schedule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gkebackup.v1.BackupPlan.Schedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Schedule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Schedule
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BackupConfig. */
                    interface IBackupConfig {

                        /** BackupConfig allNamespaces */
                        allNamespaces?: (boolean|null);

                        /** BackupConfig selectedNamespaces */
                        selectedNamespaces?: (google.cloud.gkebackup.v1.INamespaces|null);

                        /** BackupConfig selectedApplications */
                        selectedApplications?: (google.cloud.gkebackup.v1.INamespacedNames|null);

                        /** BackupConfig includeVolumeData */
                        includeVolumeData?: (boolean|null);

                        /** BackupConfig includeSecrets */
                        includeSecrets?: (boolean|null);

                        /** BackupConfig encryptionKey */
                        encryptionKey?: (google.cloud.gkebackup.v1.IEncryptionKey|null);
                    }

                    /** Represents a BackupConfig. */
                    class BackupConfig implements IBackupConfig {

                        /**
                         * Constructs a new BackupConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gkebackup.v1.BackupPlan.IBackupConfig);

                        /** BackupConfig allNamespaces. */
                        public allNamespaces?: (boolean|null);

                        /** BackupConfig selectedNamespaces. */
                        public selectedNamespaces?: (google.cloud.gkebackup.v1.INamespaces|null);

                        /** BackupConfig selectedApplications. */
                        public selectedApplications?: (google.cloud.gkebackup.v1.INamespacedNames|null);

                        /** BackupConfig includeVolumeData. */
                        public includeVolumeData: boolean;

                        /** BackupConfig includeSecrets. */
                        public includeSecrets: boolean;

                        /** BackupConfig encryptionKey. */
                        public encryptionKey?: (google.cloud.gkebackup.v1.IEncryptionKey|null);

                        /** BackupConfig backupScope. */
                        public backupScope?: ("allNamespaces"|"selectedNamespaces"|"selectedApplications");

                        /**
                         * Creates a new BackupConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BackupConfig instance
                         */
                        public static create(properties?: google.cloud.gkebackup.v1.BackupPlan.IBackupConfig): google.cloud.gkebackup.v1.BackupPlan.BackupConfig;

                        /**
                         * Encodes the specified BackupConfig message. Does not implicitly {@link google.cloud.gkebackup.v1.BackupPlan.BackupConfig.verify|verify} messages.
                         * @param message BackupConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gkebackup.v1.BackupPlan.IBackupConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BackupConfig message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.BackupPlan.BackupConfig.verify|verify} messages.
                         * @param message BackupConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gkebackup.v1.BackupPlan.IBackupConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BackupConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BackupConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.BackupPlan.BackupConfig;

                        /**
                         * Decodes a BackupConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BackupConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.BackupPlan.BackupConfig;

                        /**
                         * Verifies a BackupConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BackupConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BackupConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.BackupPlan.BackupConfig;

                        /**
                         * Creates a plain object from a BackupConfig message. Also converts values to other types if specified.
                         * @param message BackupConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gkebackup.v1.BackupPlan.BackupConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BackupConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BackupConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Represents a BackupForGKE */
                class BackupForGKE extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new BackupForGKE service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new BackupForGKE service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): BackupForGKE;

                    /**
                     * Calls CreateBackupPlan.
                     * @param request CreateBackupPlanRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBackupPlan(request: google.cloud.gkebackup.v1.ICreateBackupPlanRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.CreateBackupPlanCallback): void;

                    /**
                     * Calls CreateBackupPlan.
                     * @param request CreateBackupPlanRequest message or plain object
                     * @returns Promise
                     */
                    public createBackupPlan(request: google.cloud.gkebackup.v1.ICreateBackupPlanRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListBackupPlans.
                     * @param request ListBackupPlansRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupPlansResponse
                     */
                    public listBackupPlans(request: google.cloud.gkebackup.v1.IListBackupPlansRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.ListBackupPlansCallback): void;

                    /**
                     * Calls ListBackupPlans.
                     * @param request ListBackupPlansRequest message or plain object
                     * @returns Promise
                     */
                    public listBackupPlans(request: google.cloud.gkebackup.v1.IListBackupPlansRequest): Promise<google.cloud.gkebackup.v1.ListBackupPlansResponse>;

                    /**
                     * Calls GetBackupPlan.
                     * @param request GetBackupPlanRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BackupPlan
                     */
                    public getBackupPlan(request: google.cloud.gkebackup.v1.IGetBackupPlanRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.GetBackupPlanCallback): void;

                    /**
                     * Calls GetBackupPlan.
                     * @param request GetBackupPlanRequest message or plain object
                     * @returns Promise
                     */
                    public getBackupPlan(request: google.cloud.gkebackup.v1.IGetBackupPlanRequest): Promise<google.cloud.gkebackup.v1.BackupPlan>;

                    /**
                     * Calls UpdateBackupPlan.
                     * @param request UpdateBackupPlanRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateBackupPlan(request: google.cloud.gkebackup.v1.IUpdateBackupPlanRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.UpdateBackupPlanCallback): void;

                    /**
                     * Calls UpdateBackupPlan.
                     * @param request UpdateBackupPlanRequest message or plain object
                     * @returns Promise
                     */
                    public updateBackupPlan(request: google.cloud.gkebackup.v1.IUpdateBackupPlanRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteBackupPlan.
                     * @param request DeleteBackupPlanRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBackupPlan(request: google.cloud.gkebackup.v1.IDeleteBackupPlanRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.DeleteBackupPlanCallback): void;

                    /**
                     * Calls DeleteBackupPlan.
                     * @param request DeleteBackupPlanRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackupPlan(request: google.cloud.gkebackup.v1.IDeleteBackupPlanRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createBackup(request: google.cloud.gkebackup.v1.ICreateBackupRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.CreateBackupCallback): void;

                    /**
                     * Calls CreateBackup.
                     * @param request CreateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public createBackup(request: google.cloud.gkebackup.v1.ICreateBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListBackupsResponse
                     */
                    public listBackups(request: google.cloud.gkebackup.v1.IListBackupsRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.ListBackupsCallback): void;

                    /**
                     * Calls ListBackups.
                     * @param request ListBackupsRequest message or plain object
                     * @returns Promise
                     */
                    public listBackups(request: google.cloud.gkebackup.v1.IListBackupsRequest): Promise<google.cloud.gkebackup.v1.ListBackupsResponse>;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Backup
                     */
                    public getBackup(request: google.cloud.gkebackup.v1.IGetBackupRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.GetBackupCallback): void;

                    /**
                     * Calls GetBackup.
                     * @param request GetBackupRequest message or plain object
                     * @returns Promise
                     */
                    public getBackup(request: google.cloud.gkebackup.v1.IGetBackupRequest): Promise<google.cloud.gkebackup.v1.Backup>;

                    /**
                     * Calls UpdateBackup.
                     * @param request UpdateBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateBackup(request: google.cloud.gkebackup.v1.IUpdateBackupRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.UpdateBackupCallback): void;

                    /**
                     * Calls UpdateBackup.
                     * @param request UpdateBackupRequest message or plain object
                     * @returns Promise
                     */
                    public updateBackup(request: google.cloud.gkebackup.v1.IUpdateBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteBackup(request: google.cloud.gkebackup.v1.IDeleteBackupRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.DeleteBackupCallback): void;

                    /**
                     * Calls DeleteBackup.
                     * @param request DeleteBackupRequest message or plain object
                     * @returns Promise
                     */
                    public deleteBackup(request: google.cloud.gkebackup.v1.IDeleteBackupRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListVolumeBackups.
                     * @param request ListVolumeBackupsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListVolumeBackupsResponse
                     */
                    public listVolumeBackups(request: google.cloud.gkebackup.v1.IListVolumeBackupsRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.ListVolumeBackupsCallback): void;

                    /**
                     * Calls ListVolumeBackups.
                     * @param request ListVolumeBackupsRequest message or plain object
                     * @returns Promise
                     */
                    public listVolumeBackups(request: google.cloud.gkebackup.v1.IListVolumeBackupsRequest): Promise<google.cloud.gkebackup.v1.ListVolumeBackupsResponse>;

                    /**
                     * Calls GetVolumeBackup.
                     * @param request GetVolumeBackupRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and VolumeBackup
                     */
                    public getVolumeBackup(request: google.cloud.gkebackup.v1.IGetVolumeBackupRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.GetVolumeBackupCallback): void;

                    /**
                     * Calls GetVolumeBackup.
                     * @param request GetVolumeBackupRequest message or plain object
                     * @returns Promise
                     */
                    public getVolumeBackup(request: google.cloud.gkebackup.v1.IGetVolumeBackupRequest): Promise<google.cloud.gkebackup.v1.VolumeBackup>;

                    /**
                     * Calls CreateRestorePlan.
                     * @param request CreateRestorePlanRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRestorePlan(request: google.cloud.gkebackup.v1.ICreateRestorePlanRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.CreateRestorePlanCallback): void;

                    /**
                     * Calls CreateRestorePlan.
                     * @param request CreateRestorePlanRequest message or plain object
                     * @returns Promise
                     */
                    public createRestorePlan(request: google.cloud.gkebackup.v1.ICreateRestorePlanRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRestorePlans.
                     * @param request ListRestorePlansRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRestorePlansResponse
                     */
                    public listRestorePlans(request: google.cloud.gkebackup.v1.IListRestorePlansRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.ListRestorePlansCallback): void;

                    /**
                     * Calls ListRestorePlans.
                     * @param request ListRestorePlansRequest message or plain object
                     * @returns Promise
                     */
                    public listRestorePlans(request: google.cloud.gkebackup.v1.IListRestorePlansRequest): Promise<google.cloud.gkebackup.v1.ListRestorePlansResponse>;

                    /**
                     * Calls GetRestorePlan.
                     * @param request GetRestorePlanRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and RestorePlan
                     */
                    public getRestorePlan(request: google.cloud.gkebackup.v1.IGetRestorePlanRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.GetRestorePlanCallback): void;

                    /**
                     * Calls GetRestorePlan.
                     * @param request GetRestorePlanRequest message or plain object
                     * @returns Promise
                     */
                    public getRestorePlan(request: google.cloud.gkebackup.v1.IGetRestorePlanRequest): Promise<google.cloud.gkebackup.v1.RestorePlan>;

                    /**
                     * Calls UpdateRestorePlan.
                     * @param request UpdateRestorePlanRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateRestorePlan(request: google.cloud.gkebackup.v1.IUpdateRestorePlanRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.UpdateRestorePlanCallback): void;

                    /**
                     * Calls UpdateRestorePlan.
                     * @param request UpdateRestorePlanRequest message or plain object
                     * @returns Promise
                     */
                    public updateRestorePlan(request: google.cloud.gkebackup.v1.IUpdateRestorePlanRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteRestorePlan.
                     * @param request DeleteRestorePlanRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRestorePlan(request: google.cloud.gkebackup.v1.IDeleteRestorePlanRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.DeleteRestorePlanCallback): void;

                    /**
                     * Calls DeleteRestorePlan.
                     * @param request DeleteRestorePlanRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRestorePlan(request: google.cloud.gkebackup.v1.IDeleteRestorePlanRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CreateRestore.
                     * @param request CreateRestoreRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createRestore(request: google.cloud.gkebackup.v1.ICreateRestoreRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.CreateRestoreCallback): void;

                    /**
                     * Calls CreateRestore.
                     * @param request CreateRestoreRequest message or plain object
                     * @returns Promise
                     */
                    public createRestore(request: google.cloud.gkebackup.v1.ICreateRestoreRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListRestores.
                     * @param request ListRestoresRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRestoresResponse
                     */
                    public listRestores(request: google.cloud.gkebackup.v1.IListRestoresRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.ListRestoresCallback): void;

                    /**
                     * Calls ListRestores.
                     * @param request ListRestoresRequest message or plain object
                     * @returns Promise
                     */
                    public listRestores(request: google.cloud.gkebackup.v1.IListRestoresRequest): Promise<google.cloud.gkebackup.v1.ListRestoresResponse>;

                    /**
                     * Calls GetRestore.
                     * @param request GetRestoreRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Restore
                     */
                    public getRestore(request: google.cloud.gkebackup.v1.IGetRestoreRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.GetRestoreCallback): void;

                    /**
                     * Calls GetRestore.
                     * @param request GetRestoreRequest message or plain object
                     * @returns Promise
                     */
                    public getRestore(request: google.cloud.gkebackup.v1.IGetRestoreRequest): Promise<google.cloud.gkebackup.v1.Restore>;

                    /**
                     * Calls UpdateRestore.
                     * @param request UpdateRestoreRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateRestore(request: google.cloud.gkebackup.v1.IUpdateRestoreRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.UpdateRestoreCallback): void;

                    /**
                     * Calls UpdateRestore.
                     * @param request UpdateRestoreRequest message or plain object
                     * @returns Promise
                     */
                    public updateRestore(request: google.cloud.gkebackup.v1.IUpdateRestoreRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteRestore.
                     * @param request DeleteRestoreRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteRestore(request: google.cloud.gkebackup.v1.IDeleteRestoreRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.DeleteRestoreCallback): void;

                    /**
                     * Calls DeleteRestore.
                     * @param request DeleteRestoreRequest message or plain object
                     * @returns Promise
                     */
                    public deleteRestore(request: google.cloud.gkebackup.v1.IDeleteRestoreRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls ListVolumeRestores.
                     * @param request ListVolumeRestoresRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListVolumeRestoresResponse
                     */
                    public listVolumeRestores(request: google.cloud.gkebackup.v1.IListVolumeRestoresRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.ListVolumeRestoresCallback): void;

                    /**
                     * Calls ListVolumeRestores.
                     * @param request ListVolumeRestoresRequest message or plain object
                     * @returns Promise
                     */
                    public listVolumeRestores(request: google.cloud.gkebackup.v1.IListVolumeRestoresRequest): Promise<google.cloud.gkebackup.v1.ListVolumeRestoresResponse>;

                    /**
                     * Calls GetVolumeRestore.
                     * @param request GetVolumeRestoreRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and VolumeRestore
                     */
                    public getVolumeRestore(request: google.cloud.gkebackup.v1.IGetVolumeRestoreRequest, callback: google.cloud.gkebackup.v1.BackupForGKE.GetVolumeRestoreCallback): void;

                    /**
                     * Calls GetVolumeRestore.
                     * @param request GetVolumeRestoreRequest message or plain object
                     * @returns Promise
                     */
                    public getVolumeRestore(request: google.cloud.gkebackup.v1.IGetVolumeRestoreRequest): Promise<google.cloud.gkebackup.v1.VolumeRestore>;
                }

                namespace BackupForGKE {

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|createBackupPlan}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBackupPlanCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|listBackupPlans}.
                     * @param error Error, if any
                     * @param [response] ListBackupPlansResponse
                     */
                    type ListBackupPlansCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.ListBackupPlansResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|getBackupPlan}.
                     * @param error Error, if any
                     * @param [response] BackupPlan
                     */
                    type GetBackupPlanCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.BackupPlan) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|updateBackupPlan}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateBackupPlanCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|deleteBackupPlan}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBackupPlanCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|createBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|listBackups}.
                     * @param error Error, if any
                     * @param [response] ListBackupsResponse
                     */
                    type ListBackupsCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.ListBackupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|getBackup}.
                     * @param error Error, if any
                     * @param [response] Backup
                     */
                    type GetBackupCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.Backup) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|updateBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|deleteBackup}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteBackupCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|listVolumeBackups}.
                     * @param error Error, if any
                     * @param [response] ListVolumeBackupsResponse
                     */
                    type ListVolumeBackupsCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.ListVolumeBackupsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|getVolumeBackup}.
                     * @param error Error, if any
                     * @param [response] VolumeBackup
                     */
                    type GetVolumeBackupCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.VolumeBackup) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|createRestorePlan}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRestorePlanCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|listRestorePlans}.
                     * @param error Error, if any
                     * @param [response] ListRestorePlansResponse
                     */
                    type ListRestorePlansCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.ListRestorePlansResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|getRestorePlan}.
                     * @param error Error, if any
                     * @param [response] RestorePlan
                     */
                    type GetRestorePlanCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.RestorePlan) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|updateRestorePlan}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateRestorePlanCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|deleteRestorePlan}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRestorePlanCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|createRestore}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateRestoreCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|listRestores}.
                     * @param error Error, if any
                     * @param [response] ListRestoresResponse
                     */
                    type ListRestoresCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.ListRestoresResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|getRestore}.
                     * @param error Error, if any
                     * @param [response] Restore
                     */
                    type GetRestoreCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.Restore) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|updateRestore}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateRestoreCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|deleteRestore}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteRestoreCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|listVolumeRestores}.
                     * @param error Error, if any
                     * @param [response] ListVolumeRestoresResponse
                     */
                    type ListVolumeRestoresCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.ListVolumeRestoresResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.gkebackup.v1.BackupForGKE|getVolumeRestore}.
                     * @param error Error, if any
                     * @param [response] VolumeRestore
                     */
                    type GetVolumeRestoreCallback = (error: (Error|null), response?: google.cloud.gkebackup.v1.VolumeRestore) => void;
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
                    constructor(properties?: google.cloud.gkebackup.v1.IOperationMetadata);

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
                    public static create(properties?: google.cloud.gkebackup.v1.IOperationMetadata): google.cloud.gkebackup.v1.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.gkebackup.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.OperationMetadata;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a CreateBackupPlanRequest. */
                interface ICreateBackupPlanRequest {

                    /** CreateBackupPlanRequest parent */
                    parent?: (string|null);

                    /** CreateBackupPlanRequest backupPlan */
                    backupPlan?: (google.cloud.gkebackup.v1.IBackupPlan|null);

                    /** CreateBackupPlanRequest backupPlanId */
                    backupPlanId?: (string|null);
                }

                /** Represents a CreateBackupPlanRequest. */
                class CreateBackupPlanRequest implements ICreateBackupPlanRequest {

                    /**
                     * Constructs a new CreateBackupPlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.ICreateBackupPlanRequest);

                    /** CreateBackupPlanRequest parent. */
                    public parent: string;

                    /** CreateBackupPlanRequest backupPlan. */
                    public backupPlan?: (google.cloud.gkebackup.v1.IBackupPlan|null);

                    /** CreateBackupPlanRequest backupPlanId. */
                    public backupPlanId: string;

                    /**
                     * Creates a new CreateBackupPlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupPlanRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.ICreateBackupPlanRequest): google.cloud.gkebackup.v1.CreateBackupPlanRequest;

                    /**
                     * Encodes the specified CreateBackupPlanRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.CreateBackupPlanRequest.verify|verify} messages.
                     * @param message CreateBackupPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.ICreateBackupPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupPlanRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.CreateBackupPlanRequest.verify|verify} messages.
                     * @param message CreateBackupPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.ICreateBackupPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupPlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.CreateBackupPlanRequest;

                    /**
                     * Decodes a CreateBackupPlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.CreateBackupPlanRequest;

                    /**
                     * Verifies a CreateBackupPlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateBackupPlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateBackupPlanRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.CreateBackupPlanRequest;

                    /**
                     * Creates a plain object from a CreateBackupPlanRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupPlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.CreateBackupPlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateBackupPlanRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateBackupPlanRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupPlansRequest. */
                interface IListBackupPlansRequest {

                    /** ListBackupPlansRequest parent */
                    parent?: (string|null);

                    /** ListBackupPlansRequest pageSize */
                    pageSize?: (number|null);

                    /** ListBackupPlansRequest pageToken */
                    pageToken?: (string|null);

                    /** ListBackupPlansRequest filter */
                    filter?: (string|null);

                    /** ListBackupPlansRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListBackupPlansRequest. */
                class ListBackupPlansRequest implements IListBackupPlansRequest {

                    /**
                     * Constructs a new ListBackupPlansRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListBackupPlansRequest);

                    /** ListBackupPlansRequest parent. */
                    public parent: string;

                    /** ListBackupPlansRequest pageSize. */
                    public pageSize: number;

                    /** ListBackupPlansRequest pageToken. */
                    public pageToken: string;

                    /** ListBackupPlansRequest filter. */
                    public filter: string;

                    /** ListBackupPlansRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListBackupPlansRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupPlansRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListBackupPlansRequest): google.cloud.gkebackup.v1.ListBackupPlansRequest;

                    /**
                     * Encodes the specified ListBackupPlansRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.ListBackupPlansRequest.verify|verify} messages.
                     * @param message ListBackupPlansRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListBackupPlansRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupPlansRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListBackupPlansRequest.verify|verify} messages.
                     * @param message ListBackupPlansRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListBackupPlansRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupPlansRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupPlansRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListBackupPlansRequest;

                    /**
                     * Decodes a ListBackupPlansRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupPlansRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListBackupPlansRequest;

                    /**
                     * Verifies a ListBackupPlansRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupPlansRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupPlansRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListBackupPlansRequest;

                    /**
                     * Creates a plain object from a ListBackupPlansRequest message. Also converts values to other types if specified.
                     * @param message ListBackupPlansRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListBackupPlansRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupPlansRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupPlansRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListBackupPlansResponse. */
                interface IListBackupPlansResponse {

                    /** ListBackupPlansResponse backupPlans */
                    backupPlans?: (google.cloud.gkebackup.v1.IBackupPlan[]|null);

                    /** ListBackupPlansResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListBackupPlansResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListBackupPlansResponse. */
                class ListBackupPlansResponse implements IListBackupPlansResponse {

                    /**
                     * Constructs a new ListBackupPlansResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListBackupPlansResponse);

                    /** ListBackupPlansResponse backupPlans. */
                    public backupPlans: google.cloud.gkebackup.v1.IBackupPlan[];

                    /** ListBackupPlansResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListBackupPlansResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListBackupPlansResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupPlansResponse instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListBackupPlansResponse): google.cloud.gkebackup.v1.ListBackupPlansResponse;

                    /**
                     * Encodes the specified ListBackupPlansResponse message. Does not implicitly {@link google.cloud.gkebackup.v1.ListBackupPlansResponse.verify|verify} messages.
                     * @param message ListBackupPlansResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListBackupPlansResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupPlansResponse message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListBackupPlansResponse.verify|verify} messages.
                     * @param message ListBackupPlansResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListBackupPlansResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupPlansResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupPlansResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListBackupPlansResponse;

                    /**
                     * Decodes a ListBackupPlansResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupPlansResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListBackupPlansResponse;

                    /**
                     * Verifies a ListBackupPlansResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBackupPlansResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBackupPlansResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListBackupPlansResponse;

                    /**
                     * Creates a plain object from a ListBackupPlansResponse message. Also converts values to other types if specified.
                     * @param message ListBackupPlansResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListBackupPlansResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBackupPlansResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListBackupPlansResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetBackupPlanRequest. */
                interface IGetBackupPlanRequest {

                    /** GetBackupPlanRequest name */
                    name?: (string|null);
                }

                /** Represents a GetBackupPlanRequest. */
                class GetBackupPlanRequest implements IGetBackupPlanRequest {

                    /**
                     * Constructs a new GetBackupPlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IGetBackupPlanRequest);

                    /** GetBackupPlanRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupPlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupPlanRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IGetBackupPlanRequest): google.cloud.gkebackup.v1.GetBackupPlanRequest;

                    /**
                     * Encodes the specified GetBackupPlanRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.GetBackupPlanRequest.verify|verify} messages.
                     * @param message GetBackupPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IGetBackupPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupPlanRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.GetBackupPlanRequest.verify|verify} messages.
                     * @param message GetBackupPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IGetBackupPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupPlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.GetBackupPlanRequest;

                    /**
                     * Decodes a GetBackupPlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.GetBackupPlanRequest;

                    /**
                     * Verifies a GetBackupPlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBackupPlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBackupPlanRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.GetBackupPlanRequest;

                    /**
                     * Creates a plain object from a GetBackupPlanRequest message. Also converts values to other types if specified.
                     * @param message GetBackupPlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.GetBackupPlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBackupPlanRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetBackupPlanRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateBackupPlanRequest. */
                interface IUpdateBackupPlanRequest {

                    /** UpdateBackupPlanRequest backupPlan */
                    backupPlan?: (google.cloud.gkebackup.v1.IBackupPlan|null);

                    /** UpdateBackupPlanRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateBackupPlanRequest. */
                class UpdateBackupPlanRequest implements IUpdateBackupPlanRequest {

                    /**
                     * Constructs a new UpdateBackupPlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IUpdateBackupPlanRequest);

                    /** UpdateBackupPlanRequest backupPlan. */
                    public backupPlan?: (google.cloud.gkebackup.v1.IBackupPlan|null);

                    /** UpdateBackupPlanRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateBackupPlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBackupPlanRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IUpdateBackupPlanRequest): google.cloud.gkebackup.v1.UpdateBackupPlanRequest;

                    /**
                     * Encodes the specified UpdateBackupPlanRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.UpdateBackupPlanRequest.verify|verify} messages.
                     * @param message UpdateBackupPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IUpdateBackupPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBackupPlanRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.UpdateBackupPlanRequest.verify|verify} messages.
                     * @param message UpdateBackupPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IUpdateBackupPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBackupPlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBackupPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.UpdateBackupPlanRequest;

                    /**
                     * Decodes an UpdateBackupPlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBackupPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.UpdateBackupPlanRequest;

                    /**
                     * Verifies an UpdateBackupPlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBackupPlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBackupPlanRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.UpdateBackupPlanRequest;

                    /**
                     * Creates a plain object from an UpdateBackupPlanRequest message. Also converts values to other types if specified.
                     * @param message UpdateBackupPlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.UpdateBackupPlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBackupPlanRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateBackupPlanRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteBackupPlanRequest. */
                interface IDeleteBackupPlanRequest {

                    /** DeleteBackupPlanRequest name */
                    name?: (string|null);

                    /** DeleteBackupPlanRequest etag */
                    etag?: (string|null);
                }

                /** Represents a DeleteBackupPlanRequest. */
                class DeleteBackupPlanRequest implements IDeleteBackupPlanRequest {

                    /**
                     * Constructs a new DeleteBackupPlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IDeleteBackupPlanRequest);

                    /** DeleteBackupPlanRequest name. */
                    public name: string;

                    /** DeleteBackupPlanRequest etag. */
                    public etag: string;

                    /**
                     * Creates a new DeleteBackupPlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupPlanRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IDeleteBackupPlanRequest): google.cloud.gkebackup.v1.DeleteBackupPlanRequest;

                    /**
                     * Encodes the specified DeleteBackupPlanRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.DeleteBackupPlanRequest.verify|verify} messages.
                     * @param message DeleteBackupPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IDeleteBackupPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupPlanRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.DeleteBackupPlanRequest.verify|verify} messages.
                     * @param message DeleteBackupPlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IDeleteBackupPlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupPlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.DeleteBackupPlanRequest;

                    /**
                     * Decodes a DeleteBackupPlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupPlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.DeleteBackupPlanRequest;

                    /**
                     * Verifies a DeleteBackupPlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteBackupPlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteBackupPlanRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.DeleteBackupPlanRequest;

                    /**
                     * Creates a plain object from a DeleteBackupPlanRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupPlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.DeleteBackupPlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteBackupPlanRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteBackupPlanRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateBackupRequest. */
                interface ICreateBackupRequest {

                    /** CreateBackupRequest parent */
                    parent?: (string|null);

                    /** CreateBackupRequest backup */
                    backup?: (google.cloud.gkebackup.v1.IBackup|null);

                    /** CreateBackupRequest backupId */
                    backupId?: (string|null);
                }

                /** Represents a CreateBackupRequest. */
                class CreateBackupRequest implements ICreateBackupRequest {

                    /**
                     * Constructs a new CreateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.ICreateBackupRequest);

                    /** CreateBackupRequest parent. */
                    public parent: string;

                    /** CreateBackupRequest backup. */
                    public backup?: (google.cloud.gkebackup.v1.IBackup|null);

                    /** CreateBackupRequest backupId. */
                    public backupId: string;

                    /**
                     * Creates a new CreateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.ICreateBackupRequest): google.cloud.gkebackup.v1.CreateBackupRequest;

                    /**
                     * Encodes the specified CreateBackupRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.CreateBackupRequest.verify|verify} messages.
                     * @param message CreateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.ICreateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.CreateBackupRequest;

                    /**
                     * Decodes a CreateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.CreateBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.CreateBackupRequest;

                    /**
                     * Creates a plain object from a CreateBackupRequest message. Also converts values to other types if specified.
                     * @param message CreateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.CreateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.gkebackup.v1.IListBackupsRequest);

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
                    public static create(properties?: google.cloud.gkebackup.v1.IListBackupsRequest): google.cloud.gkebackup.v1.ListBackupsRequest;

                    /**
                     * Encodes the specified ListBackupsRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListBackupsRequest.verify|verify} messages.
                     * @param message ListBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListBackupsRequest;

                    /**
                     * Decodes a ListBackupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListBackupsRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListBackupsRequest;

                    /**
                     * Creates a plain object from a ListBackupsRequest message. Also converts values to other types if specified.
                     * @param message ListBackupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    backups?: (google.cloud.gkebackup.v1.IBackup[]|null);

                    /** ListBackupsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListBackupsResponse. */
                class ListBackupsResponse implements IListBackupsResponse {

                    /**
                     * Constructs a new ListBackupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListBackupsResponse);

                    /** ListBackupsResponse backups. */
                    public backups: google.cloud.gkebackup.v1.IBackup[];

                    /** ListBackupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListBackupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBackupsResponse instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListBackupsResponse): google.cloud.gkebackup.v1.ListBackupsResponse;

                    /**
                     * Encodes the specified ListBackupsResponse message. Does not implicitly {@link google.cloud.gkebackup.v1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBackupsResponse message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListBackupsResponse.verify|verify} messages.
                     * @param message ListBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListBackupsResponse;

                    /**
                     * Decodes a ListBackupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListBackupsResponse;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListBackupsResponse;

                    /**
                     * Creates a plain object from a ListBackupsResponse message. Also converts values to other types if specified.
                     * @param message ListBackupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: google.cloud.gkebackup.v1.IGetBackupRequest);

                    /** GetBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBackupRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IGetBackupRequest): google.cloud.gkebackup.v1.GetBackupRequest;

                    /**
                     * Encodes the specified GetBackupRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBackupRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.GetBackupRequest.verify|verify} messages.
                     * @param message GetBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IGetBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.GetBackupRequest;

                    /**
                     * Decodes a GetBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.GetBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.GetBackupRequest;

                    /**
                     * Creates a plain object from a GetBackupRequest message. Also converts values to other types if specified.
                     * @param message GetBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.GetBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of an UpdateBackupRequest. */
                interface IUpdateBackupRequest {

                    /** UpdateBackupRequest backup */
                    backup?: (google.cloud.gkebackup.v1.IBackup|null);

                    /** UpdateBackupRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateBackupRequest. */
                class UpdateBackupRequest implements IUpdateBackupRequest {

                    /**
                     * Constructs a new UpdateBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IUpdateBackupRequest);

                    /** UpdateBackupRequest backup. */
                    public backup?: (google.cloud.gkebackup.v1.IBackup|null);

                    /** UpdateBackupRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBackupRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IUpdateBackupRequest): google.cloud.gkebackup.v1.UpdateBackupRequest;

                    /**
                     * Encodes the specified UpdateBackupRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.UpdateBackupRequest.verify|verify} messages.
                     * @param message UpdateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IUpdateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBackupRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.UpdateBackupRequest.verify|verify} messages.
                     * @param message UpdateBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IUpdateBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.UpdateBackupRequest;

                    /**
                     * Decodes an UpdateBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.UpdateBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.UpdateBackupRequest;

                    /**
                     * Creates a plain object from an UpdateBackupRequest message. Also converts values to other types if specified.
                     * @param message UpdateBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.UpdateBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a DeleteBackupRequest. */
                interface IDeleteBackupRequest {

                    /** DeleteBackupRequest name */
                    name?: (string|null);

                    /** DeleteBackupRequest etag */
                    etag?: (string|null);

                    /** DeleteBackupRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteBackupRequest. */
                class DeleteBackupRequest implements IDeleteBackupRequest {

                    /**
                     * Constructs a new DeleteBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IDeleteBackupRequest);

                    /** DeleteBackupRequest name. */
                    public name: string;

                    /** DeleteBackupRequest etag. */
                    public etag: string;

                    /** DeleteBackupRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteBackupRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IDeleteBackupRequest): google.cloud.gkebackup.v1.DeleteBackupRequest;

                    /**
                     * Encodes the specified DeleteBackupRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteBackupRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.DeleteBackupRequest.verify|verify} messages.
                     * @param message DeleteBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IDeleteBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.DeleteBackupRequest;

                    /**
                     * Decodes a DeleteBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.DeleteBackupRequest;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.DeleteBackupRequest;

                    /**
                     * Creates a plain object from a DeleteBackupRequest message. Also converts values to other types if specified.
                     * @param message DeleteBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.DeleteBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                /** Properties of a ListVolumeBackupsRequest. */
                interface IListVolumeBackupsRequest {

                    /** ListVolumeBackupsRequest parent */
                    parent?: (string|null);

                    /** ListVolumeBackupsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListVolumeBackupsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListVolumeBackupsRequest filter */
                    filter?: (string|null);

                    /** ListVolumeBackupsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListVolumeBackupsRequest. */
                class ListVolumeBackupsRequest implements IListVolumeBackupsRequest {

                    /**
                     * Constructs a new ListVolumeBackupsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListVolumeBackupsRequest);

                    /** ListVolumeBackupsRequest parent. */
                    public parent: string;

                    /** ListVolumeBackupsRequest pageSize. */
                    public pageSize: number;

                    /** ListVolumeBackupsRequest pageToken. */
                    public pageToken: string;

                    /** ListVolumeBackupsRequest filter. */
                    public filter: string;

                    /** ListVolumeBackupsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListVolumeBackupsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVolumeBackupsRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListVolumeBackupsRequest): google.cloud.gkebackup.v1.ListVolumeBackupsRequest;

                    /**
                     * Encodes the specified ListVolumeBackupsRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.ListVolumeBackupsRequest.verify|verify} messages.
                     * @param message ListVolumeBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListVolumeBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVolumeBackupsRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListVolumeBackupsRequest.verify|verify} messages.
                     * @param message ListVolumeBackupsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListVolumeBackupsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVolumeBackupsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVolumeBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListVolumeBackupsRequest;

                    /**
                     * Decodes a ListVolumeBackupsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVolumeBackupsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListVolumeBackupsRequest;

                    /**
                     * Verifies a ListVolumeBackupsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVolumeBackupsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVolumeBackupsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListVolumeBackupsRequest;

                    /**
                     * Creates a plain object from a ListVolumeBackupsRequest message. Also converts values to other types if specified.
                     * @param message ListVolumeBackupsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListVolumeBackupsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVolumeBackupsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVolumeBackupsRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVolumeBackupsResponse. */
                interface IListVolumeBackupsResponse {

                    /** ListVolumeBackupsResponse volumeBackups */
                    volumeBackups?: (google.cloud.gkebackup.v1.IVolumeBackup[]|null);

                    /** ListVolumeBackupsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListVolumeBackupsResponse. */
                class ListVolumeBackupsResponse implements IListVolumeBackupsResponse {

                    /**
                     * Constructs a new ListVolumeBackupsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListVolumeBackupsResponse);

                    /** ListVolumeBackupsResponse volumeBackups. */
                    public volumeBackups: google.cloud.gkebackup.v1.IVolumeBackup[];

                    /** ListVolumeBackupsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListVolumeBackupsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVolumeBackupsResponse instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListVolumeBackupsResponse): google.cloud.gkebackup.v1.ListVolumeBackupsResponse;

                    /**
                     * Encodes the specified ListVolumeBackupsResponse message. Does not implicitly {@link google.cloud.gkebackup.v1.ListVolumeBackupsResponse.verify|verify} messages.
                     * @param message ListVolumeBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListVolumeBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVolumeBackupsResponse message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListVolumeBackupsResponse.verify|verify} messages.
                     * @param message ListVolumeBackupsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListVolumeBackupsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVolumeBackupsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVolumeBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListVolumeBackupsResponse;

                    /**
                     * Decodes a ListVolumeBackupsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVolumeBackupsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListVolumeBackupsResponse;

                    /**
                     * Verifies a ListVolumeBackupsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVolumeBackupsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVolumeBackupsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListVolumeBackupsResponse;

                    /**
                     * Creates a plain object from a ListVolumeBackupsResponse message. Also converts values to other types if specified.
                     * @param message ListVolumeBackupsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListVolumeBackupsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVolumeBackupsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVolumeBackupsResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetVolumeBackupRequest. */
                interface IGetVolumeBackupRequest {

                    /** GetVolumeBackupRequest name */
                    name?: (string|null);
                }

                /** Represents a GetVolumeBackupRequest. */
                class GetVolumeBackupRequest implements IGetVolumeBackupRequest {

                    /**
                     * Constructs a new GetVolumeBackupRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IGetVolumeBackupRequest);

                    /** GetVolumeBackupRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetVolumeBackupRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetVolumeBackupRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IGetVolumeBackupRequest): google.cloud.gkebackup.v1.GetVolumeBackupRequest;

                    /**
                     * Encodes the specified GetVolumeBackupRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.GetVolumeBackupRequest.verify|verify} messages.
                     * @param message GetVolumeBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IGetVolumeBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetVolumeBackupRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.GetVolumeBackupRequest.verify|verify} messages.
                     * @param message GetVolumeBackupRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IGetVolumeBackupRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetVolumeBackupRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetVolumeBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.GetVolumeBackupRequest;

                    /**
                     * Decodes a GetVolumeBackupRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetVolumeBackupRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.GetVolumeBackupRequest;

                    /**
                     * Verifies a GetVolumeBackupRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetVolumeBackupRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetVolumeBackupRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.GetVolumeBackupRequest;

                    /**
                     * Creates a plain object from a GetVolumeBackupRequest message. Also converts values to other types if specified.
                     * @param message GetVolumeBackupRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.GetVolumeBackupRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetVolumeBackupRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetVolumeBackupRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateRestorePlanRequest. */
                interface ICreateRestorePlanRequest {

                    /** CreateRestorePlanRequest parent */
                    parent?: (string|null);

                    /** CreateRestorePlanRequest restorePlan */
                    restorePlan?: (google.cloud.gkebackup.v1.IRestorePlan|null);

                    /** CreateRestorePlanRequest restorePlanId */
                    restorePlanId?: (string|null);
                }

                /** Represents a CreateRestorePlanRequest. */
                class CreateRestorePlanRequest implements ICreateRestorePlanRequest {

                    /**
                     * Constructs a new CreateRestorePlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.ICreateRestorePlanRequest);

                    /** CreateRestorePlanRequest parent. */
                    public parent: string;

                    /** CreateRestorePlanRequest restorePlan. */
                    public restorePlan?: (google.cloud.gkebackup.v1.IRestorePlan|null);

                    /** CreateRestorePlanRequest restorePlanId. */
                    public restorePlanId: string;

                    /**
                     * Creates a new CreateRestorePlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRestorePlanRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.ICreateRestorePlanRequest): google.cloud.gkebackup.v1.CreateRestorePlanRequest;

                    /**
                     * Encodes the specified CreateRestorePlanRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.CreateRestorePlanRequest.verify|verify} messages.
                     * @param message CreateRestorePlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.ICreateRestorePlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRestorePlanRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.CreateRestorePlanRequest.verify|verify} messages.
                     * @param message CreateRestorePlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.ICreateRestorePlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRestorePlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRestorePlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.CreateRestorePlanRequest;

                    /**
                     * Decodes a CreateRestorePlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRestorePlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.CreateRestorePlanRequest;

                    /**
                     * Verifies a CreateRestorePlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRestorePlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRestorePlanRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.CreateRestorePlanRequest;

                    /**
                     * Creates a plain object from a CreateRestorePlanRequest message. Also converts values to other types if specified.
                     * @param message CreateRestorePlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.CreateRestorePlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRestorePlanRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateRestorePlanRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRestorePlansRequest. */
                interface IListRestorePlansRequest {

                    /** ListRestorePlansRequest parent */
                    parent?: (string|null);

                    /** ListRestorePlansRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRestorePlansRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRestorePlansRequest filter */
                    filter?: (string|null);

                    /** ListRestorePlansRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRestorePlansRequest. */
                class ListRestorePlansRequest implements IListRestorePlansRequest {

                    /**
                     * Constructs a new ListRestorePlansRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListRestorePlansRequest);

                    /** ListRestorePlansRequest parent. */
                    public parent: string;

                    /** ListRestorePlansRequest pageSize. */
                    public pageSize: number;

                    /** ListRestorePlansRequest pageToken. */
                    public pageToken: string;

                    /** ListRestorePlansRequest filter. */
                    public filter: string;

                    /** ListRestorePlansRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRestorePlansRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRestorePlansRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListRestorePlansRequest): google.cloud.gkebackup.v1.ListRestorePlansRequest;

                    /**
                     * Encodes the specified ListRestorePlansRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.ListRestorePlansRequest.verify|verify} messages.
                     * @param message ListRestorePlansRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListRestorePlansRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRestorePlansRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListRestorePlansRequest.verify|verify} messages.
                     * @param message ListRestorePlansRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListRestorePlansRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRestorePlansRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRestorePlansRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListRestorePlansRequest;

                    /**
                     * Decodes a ListRestorePlansRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRestorePlansRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListRestorePlansRequest;

                    /**
                     * Verifies a ListRestorePlansRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRestorePlansRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRestorePlansRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListRestorePlansRequest;

                    /**
                     * Creates a plain object from a ListRestorePlansRequest message. Also converts values to other types if specified.
                     * @param message ListRestorePlansRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListRestorePlansRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRestorePlansRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRestorePlansRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRestorePlansResponse. */
                interface IListRestorePlansResponse {

                    /** ListRestorePlansResponse restorePlans */
                    restorePlans?: (google.cloud.gkebackup.v1.IRestorePlan[]|null);

                    /** ListRestorePlansResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRestorePlansResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRestorePlansResponse. */
                class ListRestorePlansResponse implements IListRestorePlansResponse {

                    /**
                     * Constructs a new ListRestorePlansResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListRestorePlansResponse);

                    /** ListRestorePlansResponse restorePlans. */
                    public restorePlans: google.cloud.gkebackup.v1.IRestorePlan[];

                    /** ListRestorePlansResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRestorePlansResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRestorePlansResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRestorePlansResponse instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListRestorePlansResponse): google.cloud.gkebackup.v1.ListRestorePlansResponse;

                    /**
                     * Encodes the specified ListRestorePlansResponse message. Does not implicitly {@link google.cloud.gkebackup.v1.ListRestorePlansResponse.verify|verify} messages.
                     * @param message ListRestorePlansResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListRestorePlansResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRestorePlansResponse message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListRestorePlansResponse.verify|verify} messages.
                     * @param message ListRestorePlansResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListRestorePlansResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRestorePlansResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRestorePlansResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListRestorePlansResponse;

                    /**
                     * Decodes a ListRestorePlansResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRestorePlansResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListRestorePlansResponse;

                    /**
                     * Verifies a ListRestorePlansResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRestorePlansResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRestorePlansResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListRestorePlansResponse;

                    /**
                     * Creates a plain object from a ListRestorePlansResponse message. Also converts values to other types if specified.
                     * @param message ListRestorePlansResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListRestorePlansResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRestorePlansResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRestorePlansResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRestorePlanRequest. */
                interface IGetRestorePlanRequest {

                    /** GetRestorePlanRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRestorePlanRequest. */
                class GetRestorePlanRequest implements IGetRestorePlanRequest {

                    /**
                     * Constructs a new GetRestorePlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IGetRestorePlanRequest);

                    /** GetRestorePlanRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRestorePlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRestorePlanRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IGetRestorePlanRequest): google.cloud.gkebackup.v1.GetRestorePlanRequest;

                    /**
                     * Encodes the specified GetRestorePlanRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.GetRestorePlanRequest.verify|verify} messages.
                     * @param message GetRestorePlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IGetRestorePlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRestorePlanRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.GetRestorePlanRequest.verify|verify} messages.
                     * @param message GetRestorePlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IGetRestorePlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRestorePlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRestorePlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.GetRestorePlanRequest;

                    /**
                     * Decodes a GetRestorePlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRestorePlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.GetRestorePlanRequest;

                    /**
                     * Verifies a GetRestorePlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRestorePlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRestorePlanRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.GetRestorePlanRequest;

                    /**
                     * Creates a plain object from a GetRestorePlanRequest message. Also converts values to other types if specified.
                     * @param message GetRestorePlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.GetRestorePlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRestorePlanRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRestorePlanRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateRestorePlanRequest. */
                interface IUpdateRestorePlanRequest {

                    /** UpdateRestorePlanRequest restorePlan */
                    restorePlan?: (google.cloud.gkebackup.v1.IRestorePlan|null);

                    /** UpdateRestorePlanRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateRestorePlanRequest. */
                class UpdateRestorePlanRequest implements IUpdateRestorePlanRequest {

                    /**
                     * Constructs a new UpdateRestorePlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IUpdateRestorePlanRequest);

                    /** UpdateRestorePlanRequest restorePlan. */
                    public restorePlan?: (google.cloud.gkebackup.v1.IRestorePlan|null);

                    /** UpdateRestorePlanRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateRestorePlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRestorePlanRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IUpdateRestorePlanRequest): google.cloud.gkebackup.v1.UpdateRestorePlanRequest;

                    /**
                     * Encodes the specified UpdateRestorePlanRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.UpdateRestorePlanRequest.verify|verify} messages.
                     * @param message UpdateRestorePlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IUpdateRestorePlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRestorePlanRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.UpdateRestorePlanRequest.verify|verify} messages.
                     * @param message UpdateRestorePlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IUpdateRestorePlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRestorePlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRestorePlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.UpdateRestorePlanRequest;

                    /**
                     * Decodes an UpdateRestorePlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRestorePlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.UpdateRestorePlanRequest;

                    /**
                     * Verifies an UpdateRestorePlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRestorePlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRestorePlanRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.UpdateRestorePlanRequest;

                    /**
                     * Creates a plain object from an UpdateRestorePlanRequest message. Also converts values to other types if specified.
                     * @param message UpdateRestorePlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.UpdateRestorePlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRestorePlanRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateRestorePlanRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteRestorePlanRequest. */
                interface IDeleteRestorePlanRequest {

                    /** DeleteRestorePlanRequest name */
                    name?: (string|null);

                    /** DeleteRestorePlanRequest etag */
                    etag?: (string|null);

                    /** DeleteRestorePlanRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteRestorePlanRequest. */
                class DeleteRestorePlanRequest implements IDeleteRestorePlanRequest {

                    /**
                     * Constructs a new DeleteRestorePlanRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IDeleteRestorePlanRequest);

                    /** DeleteRestorePlanRequest name. */
                    public name: string;

                    /** DeleteRestorePlanRequest etag. */
                    public etag: string;

                    /** DeleteRestorePlanRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteRestorePlanRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRestorePlanRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IDeleteRestorePlanRequest): google.cloud.gkebackup.v1.DeleteRestorePlanRequest;

                    /**
                     * Encodes the specified DeleteRestorePlanRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.DeleteRestorePlanRequest.verify|verify} messages.
                     * @param message DeleteRestorePlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IDeleteRestorePlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRestorePlanRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.DeleteRestorePlanRequest.verify|verify} messages.
                     * @param message DeleteRestorePlanRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IDeleteRestorePlanRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRestorePlanRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRestorePlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.DeleteRestorePlanRequest;

                    /**
                     * Decodes a DeleteRestorePlanRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRestorePlanRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.DeleteRestorePlanRequest;

                    /**
                     * Verifies a DeleteRestorePlanRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRestorePlanRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRestorePlanRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.DeleteRestorePlanRequest;

                    /**
                     * Creates a plain object from a DeleteRestorePlanRequest message. Also converts values to other types if specified.
                     * @param message DeleteRestorePlanRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.DeleteRestorePlanRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRestorePlanRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteRestorePlanRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a CreateRestoreRequest. */
                interface ICreateRestoreRequest {

                    /** CreateRestoreRequest parent */
                    parent?: (string|null);

                    /** CreateRestoreRequest restore */
                    restore?: (google.cloud.gkebackup.v1.IRestore|null);

                    /** CreateRestoreRequest restoreId */
                    restoreId?: (string|null);
                }

                /** Represents a CreateRestoreRequest. */
                class CreateRestoreRequest implements ICreateRestoreRequest {

                    /**
                     * Constructs a new CreateRestoreRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.ICreateRestoreRequest);

                    /** CreateRestoreRequest parent. */
                    public parent: string;

                    /** CreateRestoreRequest restore. */
                    public restore?: (google.cloud.gkebackup.v1.IRestore|null);

                    /** CreateRestoreRequest restoreId. */
                    public restoreId: string;

                    /**
                     * Creates a new CreateRestoreRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateRestoreRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.ICreateRestoreRequest): google.cloud.gkebackup.v1.CreateRestoreRequest;

                    /**
                     * Encodes the specified CreateRestoreRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.CreateRestoreRequest.verify|verify} messages.
                     * @param message CreateRestoreRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.ICreateRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateRestoreRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.CreateRestoreRequest.verify|verify} messages.
                     * @param message CreateRestoreRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.ICreateRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateRestoreRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateRestoreRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.CreateRestoreRequest;

                    /**
                     * Decodes a CreateRestoreRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateRestoreRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.CreateRestoreRequest;

                    /**
                     * Verifies a CreateRestoreRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateRestoreRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateRestoreRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.CreateRestoreRequest;

                    /**
                     * Creates a plain object from a CreateRestoreRequest message. Also converts values to other types if specified.
                     * @param message CreateRestoreRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.CreateRestoreRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateRestoreRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for CreateRestoreRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRestoresRequest. */
                interface IListRestoresRequest {

                    /** ListRestoresRequest parent */
                    parent?: (string|null);

                    /** ListRestoresRequest pageSize */
                    pageSize?: (number|null);

                    /** ListRestoresRequest pageToken */
                    pageToken?: (string|null);

                    /** ListRestoresRequest filter */
                    filter?: (string|null);

                    /** ListRestoresRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListRestoresRequest. */
                class ListRestoresRequest implements IListRestoresRequest {

                    /**
                     * Constructs a new ListRestoresRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListRestoresRequest);

                    /** ListRestoresRequest parent. */
                    public parent: string;

                    /** ListRestoresRequest pageSize. */
                    public pageSize: number;

                    /** ListRestoresRequest pageToken. */
                    public pageToken: string;

                    /** ListRestoresRequest filter. */
                    public filter: string;

                    /** ListRestoresRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListRestoresRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRestoresRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListRestoresRequest): google.cloud.gkebackup.v1.ListRestoresRequest;

                    /**
                     * Encodes the specified ListRestoresRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.ListRestoresRequest.verify|verify} messages.
                     * @param message ListRestoresRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListRestoresRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRestoresRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListRestoresRequest.verify|verify} messages.
                     * @param message ListRestoresRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListRestoresRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRestoresRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRestoresRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListRestoresRequest;

                    /**
                     * Decodes a ListRestoresRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRestoresRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListRestoresRequest;

                    /**
                     * Verifies a ListRestoresRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRestoresRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRestoresRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListRestoresRequest;

                    /**
                     * Creates a plain object from a ListRestoresRequest message. Also converts values to other types if specified.
                     * @param message ListRestoresRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListRestoresRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRestoresRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRestoresRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListRestoresResponse. */
                interface IListRestoresResponse {

                    /** ListRestoresResponse restores */
                    restores?: (google.cloud.gkebackup.v1.IRestore[]|null);

                    /** ListRestoresResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListRestoresResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListRestoresResponse. */
                class ListRestoresResponse implements IListRestoresResponse {

                    /**
                     * Constructs a new ListRestoresResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListRestoresResponse);

                    /** ListRestoresResponse restores. */
                    public restores: google.cloud.gkebackup.v1.IRestore[];

                    /** ListRestoresResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListRestoresResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListRestoresResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRestoresResponse instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListRestoresResponse): google.cloud.gkebackup.v1.ListRestoresResponse;

                    /**
                     * Encodes the specified ListRestoresResponse message. Does not implicitly {@link google.cloud.gkebackup.v1.ListRestoresResponse.verify|verify} messages.
                     * @param message ListRestoresResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListRestoresResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRestoresResponse message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListRestoresResponse.verify|verify} messages.
                     * @param message ListRestoresResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListRestoresResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRestoresResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRestoresResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListRestoresResponse;

                    /**
                     * Decodes a ListRestoresResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRestoresResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListRestoresResponse;

                    /**
                     * Verifies a ListRestoresResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRestoresResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRestoresResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListRestoresResponse;

                    /**
                     * Creates a plain object from a ListRestoresResponse message. Also converts values to other types if specified.
                     * @param message ListRestoresResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListRestoresResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRestoresResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListRestoresResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetRestoreRequest. */
                interface IGetRestoreRequest {

                    /** GetRestoreRequest name */
                    name?: (string|null);
                }

                /** Represents a GetRestoreRequest. */
                class GetRestoreRequest implements IGetRestoreRequest {

                    /**
                     * Constructs a new GetRestoreRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IGetRestoreRequest);

                    /** GetRestoreRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetRestoreRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRestoreRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IGetRestoreRequest): google.cloud.gkebackup.v1.GetRestoreRequest;

                    /**
                     * Encodes the specified GetRestoreRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.GetRestoreRequest.verify|verify} messages.
                     * @param message GetRestoreRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IGetRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRestoreRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.GetRestoreRequest.verify|verify} messages.
                     * @param message GetRestoreRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IGetRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRestoreRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRestoreRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.GetRestoreRequest;

                    /**
                     * Decodes a GetRestoreRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRestoreRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.GetRestoreRequest;

                    /**
                     * Verifies a GetRestoreRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRestoreRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRestoreRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.GetRestoreRequest;

                    /**
                     * Creates a plain object from a GetRestoreRequest message. Also converts values to other types if specified.
                     * @param message GetRestoreRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.GetRestoreRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRestoreRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetRestoreRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an UpdateRestoreRequest. */
                interface IUpdateRestoreRequest {

                    /** UpdateRestoreRequest restore */
                    restore?: (google.cloud.gkebackup.v1.IRestore|null);

                    /** UpdateRestoreRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateRestoreRequest. */
                class UpdateRestoreRequest implements IUpdateRestoreRequest {

                    /**
                     * Constructs a new UpdateRestoreRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IUpdateRestoreRequest);

                    /** UpdateRestoreRequest restore. */
                    public restore?: (google.cloud.gkebackup.v1.IRestore|null);

                    /** UpdateRestoreRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateRestoreRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRestoreRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IUpdateRestoreRequest): google.cloud.gkebackup.v1.UpdateRestoreRequest;

                    /**
                     * Encodes the specified UpdateRestoreRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.UpdateRestoreRequest.verify|verify} messages.
                     * @param message UpdateRestoreRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IUpdateRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRestoreRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.UpdateRestoreRequest.verify|verify} messages.
                     * @param message UpdateRestoreRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IUpdateRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRestoreRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRestoreRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.UpdateRestoreRequest;

                    /**
                     * Decodes an UpdateRestoreRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRestoreRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.UpdateRestoreRequest;

                    /**
                     * Verifies an UpdateRestoreRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRestoreRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRestoreRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.UpdateRestoreRequest;

                    /**
                     * Creates a plain object from an UpdateRestoreRequest message. Also converts values to other types if specified.
                     * @param message UpdateRestoreRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.UpdateRestoreRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRestoreRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for UpdateRestoreRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a DeleteRestoreRequest. */
                interface IDeleteRestoreRequest {

                    /** DeleteRestoreRequest name */
                    name?: (string|null);

                    /** DeleteRestoreRequest etag */
                    etag?: (string|null);

                    /** DeleteRestoreRequest force */
                    force?: (boolean|null);
                }

                /** Represents a DeleteRestoreRequest. */
                class DeleteRestoreRequest implements IDeleteRestoreRequest {

                    /**
                     * Constructs a new DeleteRestoreRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IDeleteRestoreRequest);

                    /** DeleteRestoreRequest name. */
                    public name: string;

                    /** DeleteRestoreRequest etag. */
                    public etag: string;

                    /** DeleteRestoreRequest force. */
                    public force: boolean;

                    /**
                     * Creates a new DeleteRestoreRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRestoreRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IDeleteRestoreRequest): google.cloud.gkebackup.v1.DeleteRestoreRequest;

                    /**
                     * Encodes the specified DeleteRestoreRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.DeleteRestoreRequest.verify|verify} messages.
                     * @param message DeleteRestoreRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IDeleteRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRestoreRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.DeleteRestoreRequest.verify|verify} messages.
                     * @param message DeleteRestoreRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IDeleteRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRestoreRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRestoreRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.DeleteRestoreRequest;

                    /**
                     * Decodes a DeleteRestoreRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRestoreRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.DeleteRestoreRequest;

                    /**
                     * Verifies a DeleteRestoreRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRestoreRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRestoreRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.DeleteRestoreRequest;

                    /**
                     * Creates a plain object from a DeleteRestoreRequest message. Also converts values to other types if specified.
                     * @param message DeleteRestoreRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.DeleteRestoreRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRestoreRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for DeleteRestoreRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVolumeRestoresRequest. */
                interface IListVolumeRestoresRequest {

                    /** ListVolumeRestoresRequest parent */
                    parent?: (string|null);

                    /** ListVolumeRestoresRequest pageSize */
                    pageSize?: (number|null);

                    /** ListVolumeRestoresRequest pageToken */
                    pageToken?: (string|null);

                    /** ListVolumeRestoresRequest filter */
                    filter?: (string|null);

                    /** ListVolumeRestoresRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListVolumeRestoresRequest. */
                class ListVolumeRestoresRequest implements IListVolumeRestoresRequest {

                    /**
                     * Constructs a new ListVolumeRestoresRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListVolumeRestoresRequest);

                    /** ListVolumeRestoresRequest parent. */
                    public parent: string;

                    /** ListVolumeRestoresRequest pageSize. */
                    public pageSize: number;

                    /** ListVolumeRestoresRequest pageToken. */
                    public pageToken: string;

                    /** ListVolumeRestoresRequest filter. */
                    public filter: string;

                    /** ListVolumeRestoresRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListVolumeRestoresRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVolumeRestoresRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListVolumeRestoresRequest): google.cloud.gkebackup.v1.ListVolumeRestoresRequest;

                    /**
                     * Encodes the specified ListVolumeRestoresRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.ListVolumeRestoresRequest.verify|verify} messages.
                     * @param message ListVolumeRestoresRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListVolumeRestoresRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVolumeRestoresRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListVolumeRestoresRequest.verify|verify} messages.
                     * @param message ListVolumeRestoresRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListVolumeRestoresRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVolumeRestoresRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVolumeRestoresRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListVolumeRestoresRequest;

                    /**
                     * Decodes a ListVolumeRestoresRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVolumeRestoresRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListVolumeRestoresRequest;

                    /**
                     * Verifies a ListVolumeRestoresRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVolumeRestoresRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVolumeRestoresRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListVolumeRestoresRequest;

                    /**
                     * Creates a plain object from a ListVolumeRestoresRequest message. Also converts values to other types if specified.
                     * @param message ListVolumeRestoresRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListVolumeRestoresRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVolumeRestoresRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVolumeRestoresRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ListVolumeRestoresResponse. */
                interface IListVolumeRestoresResponse {

                    /** ListVolumeRestoresResponse volumeRestores */
                    volumeRestores?: (google.cloud.gkebackup.v1.IVolumeRestore[]|null);

                    /** ListVolumeRestoresResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListVolumeRestoresResponse. */
                class ListVolumeRestoresResponse implements IListVolumeRestoresResponse {

                    /**
                     * Constructs a new ListVolumeRestoresResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IListVolumeRestoresResponse);

                    /** ListVolumeRestoresResponse volumeRestores. */
                    public volumeRestores: google.cloud.gkebackup.v1.IVolumeRestore[];

                    /** ListVolumeRestoresResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListVolumeRestoresResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListVolumeRestoresResponse instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IListVolumeRestoresResponse): google.cloud.gkebackup.v1.ListVolumeRestoresResponse;

                    /**
                     * Encodes the specified ListVolumeRestoresResponse message. Does not implicitly {@link google.cloud.gkebackup.v1.ListVolumeRestoresResponse.verify|verify} messages.
                     * @param message ListVolumeRestoresResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IListVolumeRestoresResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListVolumeRestoresResponse message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.ListVolumeRestoresResponse.verify|verify} messages.
                     * @param message ListVolumeRestoresResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IListVolumeRestoresResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListVolumeRestoresResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListVolumeRestoresResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.ListVolumeRestoresResponse;

                    /**
                     * Decodes a ListVolumeRestoresResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListVolumeRestoresResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.ListVolumeRestoresResponse;

                    /**
                     * Verifies a ListVolumeRestoresResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListVolumeRestoresResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListVolumeRestoresResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.ListVolumeRestoresResponse;

                    /**
                     * Creates a plain object from a ListVolumeRestoresResponse message. Also converts values to other types if specified.
                     * @param message ListVolumeRestoresResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.ListVolumeRestoresResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListVolumeRestoresResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for ListVolumeRestoresResponse
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GetVolumeRestoreRequest. */
                interface IGetVolumeRestoreRequest {

                    /** GetVolumeRestoreRequest name */
                    name?: (string|null);
                }

                /** Represents a GetVolumeRestoreRequest. */
                class GetVolumeRestoreRequest implements IGetVolumeRestoreRequest {

                    /**
                     * Constructs a new GetVolumeRestoreRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IGetVolumeRestoreRequest);

                    /** GetVolumeRestoreRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetVolumeRestoreRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetVolumeRestoreRequest instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IGetVolumeRestoreRequest): google.cloud.gkebackup.v1.GetVolumeRestoreRequest;

                    /**
                     * Encodes the specified GetVolumeRestoreRequest message. Does not implicitly {@link google.cloud.gkebackup.v1.GetVolumeRestoreRequest.verify|verify} messages.
                     * @param message GetVolumeRestoreRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IGetVolumeRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetVolumeRestoreRequest message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.GetVolumeRestoreRequest.verify|verify} messages.
                     * @param message GetVolumeRestoreRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IGetVolumeRestoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetVolumeRestoreRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetVolumeRestoreRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.GetVolumeRestoreRequest;

                    /**
                     * Decodes a GetVolumeRestoreRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetVolumeRestoreRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.GetVolumeRestoreRequest;

                    /**
                     * Verifies a GetVolumeRestoreRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetVolumeRestoreRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetVolumeRestoreRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.GetVolumeRestoreRequest;

                    /**
                     * Creates a plain object from a GetVolumeRestoreRequest message. Also converts values to other types if specified.
                     * @param message GetVolumeRestoreRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.GetVolumeRestoreRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetVolumeRestoreRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GetVolumeRestoreRequest
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a Restore. */
                interface IRestore {

                    /** Restore name */
                    name?: (string|null);

                    /** Restore uid */
                    uid?: (string|null);

                    /** Restore createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Restore updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Restore description */
                    description?: (string|null);

                    /** Restore backup */
                    backup?: (string|null);

                    /** Restore cluster */
                    cluster?: (string|null);

                    /** Restore restoreConfig */
                    restoreConfig?: (google.cloud.gkebackup.v1.IRestoreConfig|null);

                    /** Restore labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Restore state */
                    state?: (google.cloud.gkebackup.v1.Restore.State|keyof typeof google.cloud.gkebackup.v1.Restore.State|null);

                    /** Restore stateReason */
                    stateReason?: (string|null);

                    /** Restore completeTime */
                    completeTime?: (google.protobuf.ITimestamp|null);

                    /** Restore resourcesRestoredCount */
                    resourcesRestoredCount?: (number|null);

                    /** Restore resourcesExcludedCount */
                    resourcesExcludedCount?: (number|null);

                    /** Restore resourcesFailedCount */
                    resourcesFailedCount?: (number|null);

                    /** Restore volumesRestoredCount */
                    volumesRestoredCount?: (number|null);

                    /** Restore etag */
                    etag?: (string|null);
                }

                /** Represents a Restore. */
                class Restore implements IRestore {

                    /**
                     * Constructs a new Restore.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IRestore);

                    /** Restore name. */
                    public name: string;

                    /** Restore uid. */
                    public uid: string;

                    /** Restore createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Restore updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Restore description. */
                    public description: string;

                    /** Restore backup. */
                    public backup: string;

                    /** Restore cluster. */
                    public cluster: string;

                    /** Restore restoreConfig. */
                    public restoreConfig?: (google.cloud.gkebackup.v1.IRestoreConfig|null);

                    /** Restore labels. */
                    public labels: { [k: string]: string };

                    /** Restore state. */
                    public state: (google.cloud.gkebackup.v1.Restore.State|keyof typeof google.cloud.gkebackup.v1.Restore.State);

                    /** Restore stateReason. */
                    public stateReason: string;

                    /** Restore completeTime. */
                    public completeTime?: (google.protobuf.ITimestamp|null);

                    /** Restore resourcesRestoredCount. */
                    public resourcesRestoredCount: number;

                    /** Restore resourcesExcludedCount. */
                    public resourcesExcludedCount: number;

                    /** Restore resourcesFailedCount. */
                    public resourcesFailedCount: number;

                    /** Restore volumesRestoredCount. */
                    public volumesRestoredCount: number;

                    /** Restore etag. */
                    public etag: string;

                    /**
                     * Creates a new Restore instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Restore instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IRestore): google.cloud.gkebackup.v1.Restore;

                    /**
                     * Encodes the specified Restore message. Does not implicitly {@link google.cloud.gkebackup.v1.Restore.verify|verify} messages.
                     * @param message Restore message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IRestore, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Restore message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.Restore.verify|verify} messages.
                     * @param message Restore message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IRestore, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Restore message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Restore
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.Restore;

                    /**
                     * Decodes a Restore message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Restore
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.Restore;

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
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.Restore;

                    /**
                     * Creates a plain object from a Restore message. Also converts values to other types if specified.
                     * @param message Restore
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.Restore, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Restore to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Restore
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace Restore {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        IN_PROGRESS = 2,
                        SUCCEEDED = 3,
                        FAILED = 4,
                        DELETING = 5
                    }
                }

                /** Properties of a RestoreConfig. */
                interface IRestoreConfig {

                    /** RestoreConfig volumeDataRestorePolicy */
                    volumeDataRestorePolicy?: (google.cloud.gkebackup.v1.RestoreConfig.VolumeDataRestorePolicy|keyof typeof google.cloud.gkebackup.v1.RestoreConfig.VolumeDataRestorePolicy|null);

                    /** RestoreConfig clusterResourceConflictPolicy */
                    clusterResourceConflictPolicy?: (google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceConflictPolicy|keyof typeof google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceConflictPolicy|null);

                    /** RestoreConfig namespacedResourceRestoreMode */
                    namespacedResourceRestoreMode?: (google.cloud.gkebackup.v1.RestoreConfig.NamespacedResourceRestoreMode|keyof typeof google.cloud.gkebackup.v1.RestoreConfig.NamespacedResourceRestoreMode|null);

                    /** RestoreConfig clusterResourceRestoreScope */
                    clusterResourceRestoreScope?: (google.cloud.gkebackup.v1.RestoreConfig.IClusterResourceRestoreScope|null);

                    /** RestoreConfig allNamespaces */
                    allNamespaces?: (boolean|null);

                    /** RestoreConfig selectedNamespaces */
                    selectedNamespaces?: (google.cloud.gkebackup.v1.INamespaces|null);

                    /** RestoreConfig selectedApplications */
                    selectedApplications?: (google.cloud.gkebackup.v1.INamespacedNames|null);

                    /** RestoreConfig substitutionRules */
                    substitutionRules?: (google.cloud.gkebackup.v1.RestoreConfig.ISubstitutionRule[]|null);
                }

                /** Represents a RestoreConfig. */
                class RestoreConfig implements IRestoreConfig {

                    /**
                     * Constructs a new RestoreConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IRestoreConfig);

                    /** RestoreConfig volumeDataRestorePolicy. */
                    public volumeDataRestorePolicy: (google.cloud.gkebackup.v1.RestoreConfig.VolumeDataRestorePolicy|keyof typeof google.cloud.gkebackup.v1.RestoreConfig.VolumeDataRestorePolicy);

                    /** RestoreConfig clusterResourceConflictPolicy. */
                    public clusterResourceConflictPolicy: (google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceConflictPolicy|keyof typeof google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceConflictPolicy);

                    /** RestoreConfig namespacedResourceRestoreMode. */
                    public namespacedResourceRestoreMode: (google.cloud.gkebackup.v1.RestoreConfig.NamespacedResourceRestoreMode|keyof typeof google.cloud.gkebackup.v1.RestoreConfig.NamespacedResourceRestoreMode);

                    /** RestoreConfig clusterResourceRestoreScope. */
                    public clusterResourceRestoreScope?: (google.cloud.gkebackup.v1.RestoreConfig.IClusterResourceRestoreScope|null);

                    /** RestoreConfig allNamespaces. */
                    public allNamespaces?: (boolean|null);

                    /** RestoreConfig selectedNamespaces. */
                    public selectedNamespaces?: (google.cloud.gkebackup.v1.INamespaces|null);

                    /** RestoreConfig selectedApplications. */
                    public selectedApplications?: (google.cloud.gkebackup.v1.INamespacedNames|null);

                    /** RestoreConfig substitutionRules. */
                    public substitutionRules: google.cloud.gkebackup.v1.RestoreConfig.ISubstitutionRule[];

                    /** RestoreConfig namespacedResourceRestoreScope. */
                    public namespacedResourceRestoreScope?: ("allNamespaces"|"selectedNamespaces"|"selectedApplications");

                    /**
                     * Creates a new RestoreConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestoreConfig instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IRestoreConfig): google.cloud.gkebackup.v1.RestoreConfig;

                    /**
                     * Encodes the specified RestoreConfig message. Does not implicitly {@link google.cloud.gkebackup.v1.RestoreConfig.verify|verify} messages.
                     * @param message RestoreConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IRestoreConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestoreConfig message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.RestoreConfig.verify|verify} messages.
                     * @param message RestoreConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IRestoreConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestoreConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestoreConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.RestoreConfig;

                    /**
                     * Decodes a RestoreConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestoreConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.RestoreConfig;

                    /**
                     * Verifies a RestoreConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestoreConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestoreConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.RestoreConfig;

                    /**
                     * Creates a plain object from a RestoreConfig message. Also converts values to other types if specified.
                     * @param message RestoreConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.RestoreConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestoreConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestoreConfig
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace RestoreConfig {

                    /** VolumeDataRestorePolicy enum. */
                    enum VolumeDataRestorePolicy {
                        VOLUME_DATA_RESTORE_POLICY_UNSPECIFIED = 0,
                        RESTORE_VOLUME_DATA_FROM_BACKUP = 1,
                        REUSE_VOLUME_HANDLE_FROM_BACKUP = 2,
                        NO_VOLUME_DATA_RESTORATION = 3
                    }

                    /** ClusterResourceConflictPolicy enum. */
                    enum ClusterResourceConflictPolicy {
                        CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED = 0,
                        USE_EXISTING_VERSION = 1,
                        USE_BACKUP_VERSION = 2
                    }

                    /** NamespacedResourceRestoreMode enum. */
                    enum NamespacedResourceRestoreMode {
                        NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED = 0,
                        DELETE_AND_RESTORE = 1,
                        FAIL_ON_CONFLICT = 2
                    }

                    /** Properties of a GroupKind. */
                    interface IGroupKind {

                        /** GroupKind resourceGroup */
                        resourceGroup?: (string|null);

                        /** GroupKind resourceKind */
                        resourceKind?: (string|null);
                    }

                    /** Represents a GroupKind. */
                    class GroupKind implements IGroupKind {

                        /**
                         * Constructs a new GroupKind.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gkebackup.v1.RestoreConfig.IGroupKind);

                        /** GroupKind resourceGroup. */
                        public resourceGroup: string;

                        /** GroupKind resourceKind. */
                        public resourceKind: string;

                        /**
                         * Creates a new GroupKind instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GroupKind instance
                         */
                        public static create(properties?: google.cloud.gkebackup.v1.RestoreConfig.IGroupKind): google.cloud.gkebackup.v1.RestoreConfig.GroupKind;

                        /**
                         * Encodes the specified GroupKind message. Does not implicitly {@link google.cloud.gkebackup.v1.RestoreConfig.GroupKind.verify|verify} messages.
                         * @param message GroupKind message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gkebackup.v1.RestoreConfig.IGroupKind, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GroupKind message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.RestoreConfig.GroupKind.verify|verify} messages.
                         * @param message GroupKind message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gkebackup.v1.RestoreConfig.IGroupKind, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GroupKind message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GroupKind
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.RestoreConfig.GroupKind;

                        /**
                         * Decodes a GroupKind message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GroupKind
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.RestoreConfig.GroupKind;

                        /**
                         * Verifies a GroupKind message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GroupKind message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GroupKind
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.RestoreConfig.GroupKind;

                        /**
                         * Creates a plain object from a GroupKind message. Also converts values to other types if specified.
                         * @param message GroupKind
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gkebackup.v1.RestoreConfig.GroupKind, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GroupKind to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GroupKind
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ClusterResourceRestoreScope. */
                    interface IClusterResourceRestoreScope {

                        /** ClusterResourceRestoreScope selectedGroupKinds */
                        selectedGroupKinds?: (google.cloud.gkebackup.v1.RestoreConfig.IGroupKind[]|null);
                    }

                    /** Represents a ClusterResourceRestoreScope. */
                    class ClusterResourceRestoreScope implements IClusterResourceRestoreScope {

                        /**
                         * Constructs a new ClusterResourceRestoreScope.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gkebackup.v1.RestoreConfig.IClusterResourceRestoreScope);

                        /** ClusterResourceRestoreScope selectedGroupKinds. */
                        public selectedGroupKinds: google.cloud.gkebackup.v1.RestoreConfig.IGroupKind[];

                        /**
                         * Creates a new ClusterResourceRestoreScope instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClusterResourceRestoreScope instance
                         */
                        public static create(properties?: google.cloud.gkebackup.v1.RestoreConfig.IClusterResourceRestoreScope): google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceRestoreScope;

                        /**
                         * Encodes the specified ClusterResourceRestoreScope message. Does not implicitly {@link google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceRestoreScope.verify|verify} messages.
                         * @param message ClusterResourceRestoreScope message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gkebackup.v1.RestoreConfig.IClusterResourceRestoreScope, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClusterResourceRestoreScope message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceRestoreScope.verify|verify} messages.
                         * @param message ClusterResourceRestoreScope message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gkebackup.v1.RestoreConfig.IClusterResourceRestoreScope, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClusterResourceRestoreScope message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClusterResourceRestoreScope
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceRestoreScope;

                        /**
                         * Decodes a ClusterResourceRestoreScope message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClusterResourceRestoreScope
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceRestoreScope;

                        /**
                         * Verifies a ClusterResourceRestoreScope message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClusterResourceRestoreScope message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClusterResourceRestoreScope
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceRestoreScope;

                        /**
                         * Creates a plain object from a ClusterResourceRestoreScope message. Also converts values to other types if specified.
                         * @param message ClusterResourceRestoreScope
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gkebackup.v1.RestoreConfig.ClusterResourceRestoreScope, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClusterResourceRestoreScope to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClusterResourceRestoreScope
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SubstitutionRule. */
                    interface ISubstitutionRule {

                        /** SubstitutionRule targetNamespaces */
                        targetNamespaces?: (string[]|null);

                        /** SubstitutionRule targetGroupKinds */
                        targetGroupKinds?: (google.cloud.gkebackup.v1.RestoreConfig.IGroupKind[]|null);

                        /** SubstitutionRule targetJsonPath */
                        targetJsonPath?: (string|null);

                        /** SubstitutionRule originalValuePattern */
                        originalValuePattern?: (string|null);

                        /** SubstitutionRule newValue */
                        newValue?: (string|null);
                    }

                    /** Represents a SubstitutionRule. */
                    class SubstitutionRule implements ISubstitutionRule {

                        /**
                         * Constructs a new SubstitutionRule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.gkebackup.v1.RestoreConfig.ISubstitutionRule);

                        /** SubstitutionRule targetNamespaces. */
                        public targetNamespaces: string[];

                        /** SubstitutionRule targetGroupKinds. */
                        public targetGroupKinds: google.cloud.gkebackup.v1.RestoreConfig.IGroupKind[];

                        /** SubstitutionRule targetJsonPath. */
                        public targetJsonPath: string;

                        /** SubstitutionRule originalValuePattern. */
                        public originalValuePattern: string;

                        /** SubstitutionRule newValue. */
                        public newValue: string;

                        /**
                         * Creates a new SubstitutionRule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SubstitutionRule instance
                         */
                        public static create(properties?: google.cloud.gkebackup.v1.RestoreConfig.ISubstitutionRule): google.cloud.gkebackup.v1.RestoreConfig.SubstitutionRule;

                        /**
                         * Encodes the specified SubstitutionRule message. Does not implicitly {@link google.cloud.gkebackup.v1.RestoreConfig.SubstitutionRule.verify|verify} messages.
                         * @param message SubstitutionRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.gkebackup.v1.RestoreConfig.ISubstitutionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SubstitutionRule message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.RestoreConfig.SubstitutionRule.verify|verify} messages.
                         * @param message SubstitutionRule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.gkebackup.v1.RestoreConfig.ISubstitutionRule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SubstitutionRule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SubstitutionRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.RestoreConfig.SubstitutionRule;

                        /**
                         * Decodes a SubstitutionRule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SubstitutionRule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.RestoreConfig.SubstitutionRule;

                        /**
                         * Verifies a SubstitutionRule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SubstitutionRule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SubstitutionRule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.RestoreConfig.SubstitutionRule;

                        /**
                         * Creates a plain object from a SubstitutionRule message. Also converts values to other types if specified.
                         * @param message SubstitutionRule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.gkebackup.v1.RestoreConfig.SubstitutionRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SubstitutionRule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SubstitutionRule
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Properties of a RestorePlan. */
                interface IRestorePlan {

                    /** RestorePlan name */
                    name?: (string|null);

                    /** RestorePlan uid */
                    uid?: (string|null);

                    /** RestorePlan createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** RestorePlan updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** RestorePlan description */
                    description?: (string|null);

                    /** RestorePlan backupPlan */
                    backupPlan?: (string|null);

                    /** RestorePlan cluster */
                    cluster?: (string|null);

                    /** RestorePlan restoreConfig */
                    restoreConfig?: (google.cloud.gkebackup.v1.IRestoreConfig|null);

                    /** RestorePlan labels */
                    labels?: ({ [k: string]: string }|null);

                    /** RestorePlan etag */
                    etag?: (string|null);
                }

                /** Represents a RestorePlan. */
                class RestorePlan implements IRestorePlan {

                    /**
                     * Constructs a new RestorePlan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IRestorePlan);

                    /** RestorePlan name. */
                    public name: string;

                    /** RestorePlan uid. */
                    public uid: string;

                    /** RestorePlan createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** RestorePlan updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** RestorePlan description. */
                    public description: string;

                    /** RestorePlan backupPlan. */
                    public backupPlan: string;

                    /** RestorePlan cluster. */
                    public cluster: string;

                    /** RestorePlan restoreConfig. */
                    public restoreConfig?: (google.cloud.gkebackup.v1.IRestoreConfig|null);

                    /** RestorePlan labels. */
                    public labels: { [k: string]: string };

                    /** RestorePlan etag. */
                    public etag: string;

                    /**
                     * Creates a new RestorePlan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RestorePlan instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IRestorePlan): google.cloud.gkebackup.v1.RestorePlan;

                    /**
                     * Encodes the specified RestorePlan message. Does not implicitly {@link google.cloud.gkebackup.v1.RestorePlan.verify|verify} messages.
                     * @param message RestorePlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IRestorePlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RestorePlan message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.RestorePlan.verify|verify} messages.
                     * @param message RestorePlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IRestorePlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RestorePlan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RestorePlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.RestorePlan;

                    /**
                     * Decodes a RestorePlan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RestorePlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.RestorePlan;

                    /**
                     * Verifies a RestorePlan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RestorePlan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RestorePlan
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.RestorePlan;

                    /**
                     * Creates a plain object from a RestorePlan message. Also converts values to other types if specified.
                     * @param message RestorePlan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.RestorePlan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RestorePlan to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for RestorePlan
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a VolumeBackup. */
                interface IVolumeBackup {

                    /** VolumeBackup name */
                    name?: (string|null);

                    /** VolumeBackup uid */
                    uid?: (string|null);

                    /** VolumeBackup createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeBackup updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeBackup sourcePvc */
                    sourcePvc?: (google.cloud.gkebackup.v1.INamespacedName|null);

                    /** VolumeBackup volumeBackupHandle */
                    volumeBackupHandle?: (string|null);

                    /** VolumeBackup format */
                    format?: (google.cloud.gkebackup.v1.VolumeBackup.VolumeBackupFormat|keyof typeof google.cloud.gkebackup.v1.VolumeBackup.VolumeBackupFormat|null);

                    /** VolumeBackup storageBytes */
                    storageBytes?: (number|Long|string|null);

                    /** VolumeBackup diskSizeBytes */
                    diskSizeBytes?: (number|Long|string|null);

                    /** VolumeBackup completeTime */
                    completeTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeBackup state */
                    state?: (google.cloud.gkebackup.v1.VolumeBackup.State|keyof typeof google.cloud.gkebackup.v1.VolumeBackup.State|null);

                    /** VolumeBackup stateMessage */
                    stateMessage?: (string|null);

                    /** VolumeBackup etag */
                    etag?: (string|null);
                }

                /** Represents a VolumeBackup. */
                class VolumeBackup implements IVolumeBackup {

                    /**
                     * Constructs a new VolumeBackup.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IVolumeBackup);

                    /** VolumeBackup name. */
                    public name: string;

                    /** VolumeBackup uid. */
                    public uid: string;

                    /** VolumeBackup createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeBackup updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeBackup sourcePvc. */
                    public sourcePvc?: (google.cloud.gkebackup.v1.INamespacedName|null);

                    /** VolumeBackup volumeBackupHandle. */
                    public volumeBackupHandle: string;

                    /** VolumeBackup format. */
                    public format: (google.cloud.gkebackup.v1.VolumeBackup.VolumeBackupFormat|keyof typeof google.cloud.gkebackup.v1.VolumeBackup.VolumeBackupFormat);

                    /** VolumeBackup storageBytes. */
                    public storageBytes: (number|Long|string);

                    /** VolumeBackup diskSizeBytes. */
                    public diskSizeBytes: (number|Long|string);

                    /** VolumeBackup completeTime. */
                    public completeTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeBackup state. */
                    public state: (google.cloud.gkebackup.v1.VolumeBackup.State|keyof typeof google.cloud.gkebackup.v1.VolumeBackup.State);

                    /** VolumeBackup stateMessage. */
                    public stateMessage: string;

                    /** VolumeBackup etag. */
                    public etag: string;

                    /**
                     * Creates a new VolumeBackup instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VolumeBackup instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IVolumeBackup): google.cloud.gkebackup.v1.VolumeBackup;

                    /**
                     * Encodes the specified VolumeBackup message. Does not implicitly {@link google.cloud.gkebackup.v1.VolumeBackup.verify|verify} messages.
                     * @param message VolumeBackup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IVolumeBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VolumeBackup message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.VolumeBackup.verify|verify} messages.
                     * @param message VolumeBackup message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IVolumeBackup, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VolumeBackup message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VolumeBackup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.VolumeBackup;

                    /**
                     * Decodes a VolumeBackup message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VolumeBackup
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.VolumeBackup;

                    /**
                     * Verifies a VolumeBackup message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VolumeBackup message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VolumeBackup
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.VolumeBackup;

                    /**
                     * Creates a plain object from a VolumeBackup message. Also converts values to other types if specified.
                     * @param message VolumeBackup
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.VolumeBackup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VolumeBackup to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VolumeBackup
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VolumeBackup {

                    /** VolumeBackupFormat enum. */
                    enum VolumeBackupFormat {
                        VOLUME_BACKUP_FORMAT_UNSPECIFIED = 0,
                        GCE_PERSISTENT_DISK = 1
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        SNAPSHOTTING = 2,
                        UPLOADING = 3,
                        SUCCEEDED = 4,
                        FAILED = 5,
                        DELETING = 6
                    }
                }

                /** Properties of a VolumeRestore. */
                interface IVolumeRestore {

                    /** VolumeRestore name */
                    name?: (string|null);

                    /** VolumeRestore uid */
                    uid?: (string|null);

                    /** VolumeRestore createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeRestore updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeRestore volumeBackup */
                    volumeBackup?: (string|null);

                    /** VolumeRestore targetPvc */
                    targetPvc?: (google.cloud.gkebackup.v1.INamespacedName|null);

                    /** VolumeRestore volumeHandle */
                    volumeHandle?: (string|null);

                    /** VolumeRestore volumeType */
                    volumeType?: (google.cloud.gkebackup.v1.VolumeRestore.VolumeType|keyof typeof google.cloud.gkebackup.v1.VolumeRestore.VolumeType|null);

                    /** VolumeRestore completeTime */
                    completeTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeRestore state */
                    state?: (google.cloud.gkebackup.v1.VolumeRestore.State|keyof typeof google.cloud.gkebackup.v1.VolumeRestore.State|null);

                    /** VolumeRestore stateMessage */
                    stateMessage?: (string|null);

                    /** VolumeRestore etag */
                    etag?: (string|null);
                }

                /** Represents a VolumeRestore. */
                class VolumeRestore implements IVolumeRestore {

                    /**
                     * Constructs a new VolumeRestore.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.gkebackup.v1.IVolumeRestore);

                    /** VolumeRestore name. */
                    public name: string;

                    /** VolumeRestore uid. */
                    public uid: string;

                    /** VolumeRestore createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeRestore updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeRestore volumeBackup. */
                    public volumeBackup: string;

                    /** VolumeRestore targetPvc. */
                    public targetPvc?: (google.cloud.gkebackup.v1.INamespacedName|null);

                    /** VolumeRestore volumeHandle. */
                    public volumeHandle: string;

                    /** VolumeRestore volumeType. */
                    public volumeType: (google.cloud.gkebackup.v1.VolumeRestore.VolumeType|keyof typeof google.cloud.gkebackup.v1.VolumeRestore.VolumeType);

                    /** VolumeRestore completeTime. */
                    public completeTime?: (google.protobuf.ITimestamp|null);

                    /** VolumeRestore state. */
                    public state: (google.cloud.gkebackup.v1.VolumeRestore.State|keyof typeof google.cloud.gkebackup.v1.VolumeRestore.State);

                    /** VolumeRestore stateMessage. */
                    public stateMessage: string;

                    /** VolumeRestore etag. */
                    public etag: string;

                    /**
                     * Creates a new VolumeRestore instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VolumeRestore instance
                     */
                    public static create(properties?: google.cloud.gkebackup.v1.IVolumeRestore): google.cloud.gkebackup.v1.VolumeRestore;

                    /**
                     * Encodes the specified VolumeRestore message. Does not implicitly {@link google.cloud.gkebackup.v1.VolumeRestore.verify|verify} messages.
                     * @param message VolumeRestore message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.gkebackup.v1.IVolumeRestore, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VolumeRestore message, length delimited. Does not implicitly {@link google.cloud.gkebackup.v1.VolumeRestore.verify|verify} messages.
                     * @param message VolumeRestore message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.gkebackup.v1.IVolumeRestore, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VolumeRestore message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VolumeRestore
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.gkebackup.v1.VolumeRestore;

                    /**
                     * Decodes a VolumeRestore message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VolumeRestore
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.gkebackup.v1.VolumeRestore;

                    /**
                     * Verifies a VolumeRestore message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VolumeRestore message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VolumeRestore
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.gkebackup.v1.VolumeRestore;

                    /**
                     * Creates a plain object from a VolumeRestore message. Also converts values to other types if specified.
                     * @param message VolumeRestore
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.gkebackup.v1.VolumeRestore, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VolumeRestore to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for VolumeRestore
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace VolumeRestore {

                    /** VolumeType enum. */
                    enum VolumeType {
                        VOLUME_TYPE_UNSPECIFIED = 0,
                        GCE_PERSISTENT_DISK = 1
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        CREATING = 1,
                        RESTORING = 2,
                        SUCCEEDED = 3,
                        FAILED = 4,
                        DELETING = 5
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
            NON_EMPTY_DEFAULT = 7
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
